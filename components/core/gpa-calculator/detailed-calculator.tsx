'use client'

import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons/icon'
import { Combobox } from '@/components/ui/combobox'
import { evaluateDetailedGPA, getGradePoint } from '@/app/tools/gpa-calculator/handler'
import GPAHelpDialog from '@/app/tools/gpa-calculator/dialog'
import { DetailedGPAResult, CreditAllocation } from '@/types/gpa-calculator'
import { detailedGPASchema, DetailedGPAFormData } from '@/app/schemas/gpa-calculator/validation'
import { z } from 'zod'
import { totalCreditOptions, gradeOptions } from '@/seeds/constant'
import { Badge } from '@/components/ui/badge'

// Schema for basic form validation (allocations managed separately)
const basicFormSchema = z.object({
  completed_credits: z
    .number()
    .min(1, 'Số tín chỉ đã học phải >= 1')
    .max(200, 'Số tín chỉ đã học không được vượt quá 200'),
  current_gpa: z.number().min(0.01, 'GPA hiện tại phải > 0.0').max(4, 'GPA hiện tại không được vượt quá 4.0'),
  remaining_credits: z
    .number()
    .min(1, 'Số tín chỉ còn lại phải >= 1')
    .max(200, 'Số tín chỉ còn lại không được vượt quá 200')
})

type BasicFormData = z.infer<typeof basicFormSchema>

interface DetailedCalculatorProps {
  onResultChange?: (result: DetailedGPAResult | null) => void
}

export default function DetailedCalculator({ onResultChange }: DetailedCalculatorProps) {
  const [allocations, setAllocations] = useState<CreditAllocation[]>([])
  const [isCalculating, setIsCalculating] = useState(false)
  const [isHelpOpen, setIsHelpOpen] = useState(false)

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid }
  } = useForm<BasicFormData>({
    resolver: zodResolver(basicFormSchema),
    defaultValues: {
      completed_credits: 0,
      current_gpa: 0,
      remaining_credits: 0
    },
    mode: 'onChange'
  })

  const completedCredits = watch('completed_credits')
  const currentGPA = watch('current_gpa')
  const remainingCredits = watch('remaining_credits')

  const totalAllocatedCredits = allocations.reduce((sum, allocation) => sum + allocation.credits, 0)
  const remainingToAllocate = remainingCredits - totalAllocatedCredits

  const isAllocationValid = () => {
    return totalAllocatedCredits === remainingCredits && allocations.every((allocation) => allocation.credits > 0)
  }

  const isFormValid = isValid && isAllocationValid()

  useEffect(() => {
    if (remainingCredits === 0) {
      setAllocations([])
    }
  }, [remainingCredits])

  const handleDetailedSubmit = async (data: BasicFormData) => {
    if (!isAllocationValid()) return

    setIsCalculating(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const calculationResult = evaluateDetailedGPA(
      data.current_gpa,
      data.completed_credits,
      data.remaining_credits,
      allocations
    )
    onResultChange?.(calculationResult)
    setIsCalculating(false)
  }

  const addAllocation = () => {
    const defaultCredits = 3
    const newAllocation: CreditAllocation = {
      id: crypto.randomUUID(),
      credits: defaultCredits,
      expectedGrade: 'B+',
      gradePoint: getGradePoint('B+')
    }
    setAllocations((prev) => [...prev, newAllocation])
  }

  const updateAllocation = (id: string, field: 'credits' | 'expectedGrade', value: number | string) => {
    setAllocations((prev) =>
      prev.map((allocation) => {
        if (allocation.id !== id) return allocation

        if (field === 'credits') {
          const newCredits = value as number
          if (newCredits < 1) return allocation
          return { ...allocation, credits: newCredits }
        } else {
          const gradePoint = getGradePoint(value as string)
          return { ...allocation, expectedGrade: value as string, gradePoint }
        }
      })
    )
  }

  const removeAllocation = (id: string) => {
    setAllocations((prev) => prev.filter((allocation) => allocation.id !== id))
  }

  const handleReset = () => {
    reset()
    setAllocations([])
    onResultChange?.(null)
  }

  const getGradeColor = (grade: string) => {
    if (grade === 'A+' || grade === 'A') return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
    if (grade === 'A-') return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    if (grade === 'B+' || grade === 'B') return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    if (grade === 'B-' || grade === 'C+' || grade === 'C')
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
    if (grade === 'C-') return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
    return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  }

  return (
    <Card className='shadow-xl border-0 bg-white dark:bg-gray-800'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between text-2xl font-bold text-gray-900 dark:text-white'>
          <div className='flex items-center'>
            <Icons.Calculator className='w-6 h-6 mr-3 text-green-600' />
            Tính toán GPA chi tiết
          </div>
          <button
            onClick={() => setIsHelpOpen(true)}
            className='w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-green-100 dark:hover:bg-green-700 transition-colors flex items-center justify-center'
            aria-label='Hướng dẫn sử dụng'
          >
            <span className='text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'>
              ?
            </span>
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <form onSubmit={handleSubmit(handleDetailedSubmit)} className='space-y-6'>
          <div className='grid md:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg'>
            <div className='space-y-2'>
              <Label className='text-sm font-medium'>
                Số tín chỉ đã học <span className='text-red-500'>*</span>
              </Label>
              <Controller
                name='completed_credits'
                control={control}
                render={({ field }) => (
                  <Combobox
                    options={totalCreditOptions}
                    value={field.value?.toString() || ''}
                    onValueChange={(value) => field.onChange(parseInt(value) || 0)}
                    placeholder='0 tín chỉ'
                    searchPlaceholder='Tìm số tín chỉ...'
                    className='w-full text-base'
                  />
                )}
              />
              {errors.completed_credits && <p className='text-sm text-red-500'>{errors.completed_credits.message}</p>}
            </div>
            <div className='space-y-2'>
              <Label className='text-sm font-medium'>
                GPA hiện tại <span className='text-red-500'>*</span>
              </Label>
              <Controller
                name='current_gpa'
                control={control}
                render={({ field }) => (
                  <Input
                    type='number'
                    min='0'
                    max='4'
                    step='0.01'
                    value={field.value || ''}
                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    placeholder='VD: 3.0'
                    className='text-base'
                  />
                )}
              />
              {errors.current_gpa && <p className='text-sm text-red-500'>{errors.current_gpa.message}</p>}
            </div>
            <div className='space-y-2'>
              <Label className='text-sm font-medium'>
                Số tín chỉ còn lại <span className='text-red-500'>*</span>
              </Label>
              <Controller
                name='remaining_credits'
                control={control}
                render={({ field }) => (
                  <Combobox
                    options={totalCreditOptions}
                    value={field.value?.toString() || ''}
                    onValueChange={(value) => field.onChange(parseInt(value) || 0)}
                    placeholder='0 tín chỉ'
                    searchPlaceholder='Tìm số tín chỉ...'
                    className='w-full text-base'
                  />
                )}
              />
              {errors.remaining_credits && <p className='text-sm text-red-500'>{errors.remaining_credits.message}</p>}
            </div>
          </div>

          {remainingCredits > 0 && (
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <h4 className='text-lg font-semibold text-gray-900 dark:text-white'>📊 Phân bổ tín chỉ</h4>
                <div className='flex items-center gap-3'>
                  <span className='text-sm text-gray-600 dark:text-gray-400'>
                    {totalAllocatedCredits}/{remainingCredits} tín chỉ
                  </span>
                  <Button
                    type='button'
                    onClick={addAllocation}
                    variant='outline'
                    size='sm'
                    className='bg-green-50 dark:bg-green-900/50 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/70'
                  >
                    <Icons.Plus className='w-4 h-4 mr-2' />
                    Thêm phân bổ
                  </Button>
                </div>
              </div>

              {totalAllocatedCredits !== remainingCredits && allocations.length > 0 && (
                <div className='p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg'>
                  <p className='text-sm text-yellow-800 dark:text-yellow-200'>
                    ⚠️{' '}
                    {totalAllocatedCredits > remainingCredits
                      ? `Đã phân bổ ${totalAllocatedCredits} tín chỉ, vượt quá ${totalAllocatedCredits - remainingCredits} tín chỉ so với số còn lại (${remainingCredits}). Nút tính toán sẽ bị vô hiệu hóa.`
                      : `Đã phân bổ ${totalAllocatedCredits}/${remainingCredits} tín chỉ. Còn lại ${remainingToAllocate} tín chỉ chưa phân bổ.`}
                  </p>
                </div>
              )}

              {totalAllocatedCredits === remainingCredits && allocations.length > 0 && (
                <div className='p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg'>
                  <p className='text-sm text-green-800 dark:text-green-200'>
                    ✅ Đã phân bổ đúng {remainingCredits} tín chỉ. Sẵn sàng tính toán!
                  </p>
                </div>
              )}

              {allocations.some((a) => a.credits < 1) && (
                <div className='p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg'>
                  <p className='text-sm text-red-800 dark:text-red-200'>❌ Mỗi phân bổ phải có ít nhất 1 tín chỉ</p>
                </div>
              )}

              {allocations.length === 0 ? (
                <div className='text-center py-12 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600'>
                  <Icons.Target className='w-16 h-16 mx-auto mb-4 opacity-30' />
                  <h3 className='text-lg font-medium mb-2'>Chưa phân bổ tín chỉ</h3>
                  <p className='text-sm mb-4'>Bắt đầu phân bổ {remainingCredits} tín chỉ còn lại</p>
                  <Button
                    type='button'
                    onClick={addAllocation}
                    variant='outline'
                    size='sm'
                    className='bg-green-50 dark:bg-green-900/50 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300'
                  >
                    <Icons.Plus className='w-4 h-4 mr-2' />
                    Thêm phân bổ đầu tiên
                  </Button>
                </div>
              ) : (
                <div className='space-y-3'>
                  {allocations.map((allocation, index) => (
                    <div
                      key={allocation.id}
                      className='flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600'
                    >
                      <div className='flex items-center space-x-2'>
                        <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>#{index + 1}</span>
                      </div>

                      <div className='flex-1 grid grid-cols-2 gap-3'>
                        <div>
                          <Label className='text-xs text-gray-500 dark:text-gray-400'>Tín chỉ</Label>
                          <Combobox
                            options={totalCreditOptions}
                            value={allocation.credits?.toString() || ''}
                            onValueChange={(value) => updateAllocation(allocation.id, 'credits', parseInt(value) || 1)}
                            placeholder='1 tín chỉ'
                            searchPlaceholder='Tìm số tín chỉ...'
                            className='w-full h-8 text-sm'
                          />
                        </div>
                        <div>
                          <Label className='text-xs text-gray-500 dark:text-gray-400'>Điểm dự kiến</Label>
                          <select
                            value={allocation.expectedGrade}
                            onChange={(e) => updateAllocation(allocation.id, 'expectedGrade', e.target.value)}
                            className='w-full h-8 px-2 text-sm rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
                          >
                            {gradeOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <Badge className={getGradeColor(allocation.expectedGrade)}>
                        {allocation.expectedGrade} ({allocation.gradePoint})
                      </Badge>

                      <Button
                        type='button'
                        variant='ghost'
                        size='sm'
                        onClick={() => removeAllocation(allocation.id)}
                        className='text-red-600 hover:text-red-800 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300'
                      >
                        <Icons.Trash2 className='w-4 h-4' />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className='flex gap-3'>
            <Button
              type='submit'
              disabled={!isFormValid || isCalculating}
              className='flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:opacity-50'
            >
              {isCalculating ? (
                <>
                  <Icons.RefreshCw className='w-4 h-4 mr-2 animate-spin' />
                  Đang tính toán...
                </>
              ) : (
                <>
                  <Icons.Target className='w-4 h-4 mr-2' />
                  Tính toán GPA chi tiết
                </>
              )}
            </Button>
            <Button type='button' onClick={handleReset} variant='outline' className='px-6' disabled={isCalculating}>
              <Icons.RefreshCw className='w-4 h-4' />
            </Button>
          </div>
        </form>
      </CardContent>

      <GPAHelpDialog
        targetDialog={{
          isOpen: false,
          onClose: () => {}
        }}
        detailedDialog={{
          isOpen: isHelpOpen,
          onClose: () => setIsHelpOpen(false)
        }}
        physicalDialog={{
          isOpen: false,
          onClose: () => {}
        }}
      />
    </Card>
  )
}
