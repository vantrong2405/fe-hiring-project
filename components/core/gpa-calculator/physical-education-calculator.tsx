'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons/icon'
import { evaluatePhysicalEducationGPA } from '@/app/tools/gpa-calculator/handler'
import GPAHelpDialog from '@/app/tools/gpa-calculator/dialog'
import { PhysicalEducationResult, PhysicalEducationFormData } from '@/types/gpa-calculator'
import { physicalEducationSchema } from '@/app/schemas/gpa-calculator/validation'

interface PhysicalEducationCalculatorProps {
  onResultChange: (result: PhysicalEducationResult | null) => void
}

export default function PhysicalEducationCalculator({ onResultChange }: PhysicalEducationCalculatorProps) {
  const [isCalculating, setIsCalculating] = useState(false)
  const [isHelpOpen, setIsHelpOpen] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid }
  } = useForm<PhysicalEducationFormData>({
    resolver: zodResolver(physicalEducationSchema),
    defaultValues: {
      subject1_gpa: 0,
      subject2_gpa: 0,
      subject3_gpa: 0
    },
    mode: 'onChange'
  })

  const subject1GPA = watch('subject1_gpa')
  const subject2GPA = watch('subject2_gpa')
  const subject3GPA = watch('subject3_gpa')

  const currentAverage =
    subject1GPA > 0 && subject2GPA > 0 && subject3GPA > 0
      ? ((subject1GPA + subject2GPA + subject3GPA) / 3).toFixed(2)
      : '0.00'

  const handlePESubmit = async (data: PhysicalEducationFormData) => {
    setIsCalculating(true)

    await new Promise((resolve) => setTimeout(resolve, 800))

    const calculationResult = evaluatePhysicalEducationGPA(data.subject1_gpa, data.subject2_gpa, data.subject3_gpa)
    onResultChange(calculationResult)
    setIsCalculating(false)
  }

  const handlePEReset = () => {
    reset()
    onResultChange(null)
  }

  return (
    <Card className='shadow-xl border-0 bg-white dark:bg-gray-800'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between text-2xl font-bold text-gray-900 dark:text-white'>
          <div className='flex items-center'>
            <Icons.Activity className='w-6 h-6 mr-3 text-green-600' />
            Tính toán GPA thể dục
          </div>
          <div className='flex items-center gap-3'>
            <div className='text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-1 rounded-full'>
              Đơn giản & nhanh
            </div>
            <button
              onClick={() => setIsHelpOpen(true)}
              className='w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-orange-100 dark:hover:bg-orange-700 transition-colors flex items-center justify-center'
              aria-label='Hướng dẫn sử dụng'
            >
              <span className='text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'>
                ?
              </span>
            </button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700'>
          <div className='flex items-start space-x-2'>
            <Icons.Info className='w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0' />
            <div className='text-sm text-blue-800 dark:text-blue-200'>
              <p className='font-semibold mb-1'>Quy định tính GPA thể dục:</p>
              <ul className='space-y-1 list-disc list-inside'>
                <li>Nhập GPA (thang 4.0) của 3 môn thể dục</li>
                <li>
                  Trung bình ≥ 2.0: <strong>Đậu</strong>
                </li>
                <li>
                  Trung bình {'<'} 2.0: <strong>Rớt</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(handlePESubmit)} className='space-y-6'>
          <div className='grid gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='subject1_gpa' className='text-sm font-medium'>
                GPA môn thể dục 1 <span className='text-red-500'>*</span>
              </Label>
              <Controller
                name='subject1_gpa'
                control={control}
                render={({ field }) => (
                  <Input
                    type='number'
                    min='0'
                    max='4'
                    step='0.01'
                    value={field.value || ''}
                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    placeholder='VD: 3.5'
                    className='text-base'
                  />
                )}
              />
              {errors.subject1_gpa && <p className='text-sm text-red-500'>{errors.subject1_gpa.message}</p>}
            </div>

            <div className='space-y-2'>
              <Label htmlFor='subject2_gpa' className='text-sm font-medium'>
                GPA môn thể dục 2 <span className='text-red-500'>*</span>
              </Label>
              <Controller
                name='subject2_gpa'
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
              {errors.subject2_gpa && <p className='text-sm text-red-500'>{errors.subject2_gpa.message}</p>}
            </div>

            <div className='space-y-2'>
              <Label htmlFor='subject3_gpa' className='text-sm font-medium'>
                GPA môn thể dục 3 <span className='text-red-500'>*</span>
              </Label>
              <Controller
                name='subject3_gpa'
                control={control}
                render={({ field }) => (
                  <Input
                    type='number'
                    min='0'
                    max='4'
                    step='0.01'
                    value={field.value || ''}
                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    placeholder='VD: 2.5'
                    className='text-base'
                  />
                )}
              />
              {errors.subject3_gpa && <p className='text-sm text-red-500'>{errors.subject3_gpa.message}</p>}
            </div>
          </div>

          <div className='flex gap-3'>
            <Button
              type='submit'
              disabled={!isValid || isCalculating}
              className='flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:opacity-50'
            >
              {isCalculating ? (
                <>
                  <Icons.RefreshCw className='w-4 h-4 mr-2 animate-spin' />
                  Đang tính toán...
                </>
              ) : (
                'Tính toán kết quả thể dục'
              )}
            </Button>
            <Button type='button' onClick={handlePEReset} variant='outline' className='px-6' disabled={isCalculating}>
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
          isOpen: false,
          onClose: () => {}
        }}
        physicalDialog={{
          isOpen: isHelpOpen,
          onClose: () => setIsHelpOpen(false)
        }}
      />
    </Card>
  )
}
