'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trash2, Plus, Calculator, AlertTriangle } from 'lucide-react'
import { Icons } from '@/components/icons/icon'
import { Combobox } from '@/components/ui/combobox'
import { GradeColumn, PassingGradeResult, PassingGradeFormData } from '@/types/gpa-calculator'
import { percentageOptions } from '@/lib/utils'
import { BasicFormData, basicFormSchema } from '@/app/schemas/gpa-calculator/validation'
import { calculatePassingGrade } from '@/app/tools/gpa-calculator/handler'

export function PassingGradeCalculator({ onResult }: { onResult: (result: PassingGradeResult | null) => void }) {
  const [ready, setReady] = useState(false)
  const [columns, setColumns] = useState<GradeColumn[]>([])
  const [isCalculating, setIsCalculating] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<BasicFormData>({
    resolver: zodResolver(basicFormSchema),
    defaultValues: {
      ready: false
    },
    mode: 'onChange'
  })

  const totalPercentageUsed = columns.reduce((sum, col) => sum + col.percentage, 0)
  const remainingPercentage = 100 - totalPercentageUsed
  const canAddMore = totalPercentageUsed < 100

  const isColumnsValid = () => {
    return (
      columns.length > 0 &&
      totalPercentageUsed <= 100 &&
      columns.every((col) => col.name.trim() && col.percentage > 0 && col.currentScore >= 0 && col.currentScore <= 10)
    )
  }

  const isFormValid = isColumnsValid()

  const addColumn = () => {
    const columnIndex = columns.length + 1
    const newCol: GradeColumn = {
      id: crypto.randomUUID(),
      name: `Cột điểm ${columnIndex}`,
      percentage: 10,
      currentScore: 8
    }

    setColumns([...columns, newCol])
    onResult(null)
  }

  const updateColumn = (id: string, field: keyof Omit<GradeColumn, 'id'>, value: string | number) => {
    setColumns((prev) =>
      prev.map((col) => {
        if (col.id !== id) return col
        return { ...col, [field]: value }
      })
    )
    onResult(null)
  }

  const removeColumn = (id: string) => {
    setColumns(columns.filter((col) => col.id !== id))
    onResult(null)
  }

  const handleReset = () => {
    reset()
    setColumns([])
    onResult(null)
  }

  const handleCalculateSubmit = async () => {
    if (!isFormValid) return

    setIsCalculating(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const formData: PassingGradeFormData = { columns }
    const result = calculatePassingGrade(formData)
    onResult(result)
    setIsCalculating(false)
  }

  return (
    <Card className='shadow-xl border-0 bg-white dark:bg-gray-800'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between text-2xl font-bold text-gray-900 dark:text-white'>
          <div className='flex items-center'>
            <Calculator className='w-6 h-6 mr-3 text-red-600' />
            Tính điểm cuối kỳ để qua môn
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <form onSubmit={handleSubmit(() => handleCalculateSubmit())} className='space-y-6'>
          {/* Summary */}
          <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg'>
            <div className='flex flex-wrap items-center gap-2 sm:gap-4'>
              <Badge variant='outline' className='text-xs sm:text-sm'>
                Tổng: {totalPercentageUsed.toFixed(1)}%
              </Badge>
              <Badge variant={remainingPercentage > 0 ? 'default' : 'secondary'} className='text-xs sm:text-sm'>
                Còn lại: {remainingPercentage.toFixed(1)}%
              </Badge>
            </div>
            {columns.length > 0 && (
              <Button
                type='button'
                variant='outline'
                size='sm'
                onClick={handleReset}
                className='text-red-600 hover:text-red-700 w-full sm:w-auto'
              >
                <Icons.RefreshCw className='w-4 h-4 mr-1' />
                Reset
              </Button>
            )}
          </div>

          {/* Columns Management */}
          <div className='space-y-4'>
            <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
              <h4 className='text-lg sm:text-xl font-semibold text-gray-900 dark:text-white'>📊 Các cột điểm</h4>
              <Button
                type='button'
                onClick={addColumn}
                variant='outline'
                size='sm'
                disabled={!canAddMore}
                className='bg-red-50 dark:bg-red-900/50 border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/70 w-full sm:w-auto'
              >
                <Plus className='w-4 h-4 mr-2' />
                Thêm cột điểm
              </Button>
            </div>

            {totalPercentageUsed > 100 && (
              <div className='p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg'>
                <p className='text-sm text-red-800 dark:text-red-200'>
                  ❌ Tổng tỷ lệ phần trăm vượt quá 100%. Vui lòng điều chỉnh các cột điểm.
                </p>
              </div>
            )}

            {totalPercentageUsed === 100 && columns.length > 0 && (
              <div className='p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg'>
                <p className='text-sm text-yellow-800 dark:text-yellow-200'>
                  ⚠️ Đã sử dụng 100% tỷ lệ điểm. Không còn phần trăm cho cuối kỳ.
                </p>
              </div>
            )}

            {!canAddMore && totalPercentageUsed < 100 && (
              <div className='p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg'>
                <p className='text-sm text-green-800 dark:text-green-200'>
                  ✅ Còn lại {remainingPercentage.toFixed(1)}% dành cho cuối kỳ. Sẵn sàng tính toán!
                </p>
              </div>
            )}

            {columns.length === 0 ? (
              <div className='text-center py-8 sm:py-12 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600'>
                <Icons.Target className='w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 opacity-30' />
                <h3 className='text-base sm:text-lg font-medium mb-2'>Chưa có cột điểm nào</h3>
                <p className='text-xs sm:text-sm mb-3 sm:mb-4 px-4'>
                  Thêm các cột điểm để tính toán điểm cuối kỳ cần thiết
                </p>
                <Button
                  type='button'
                  onClick={addColumn}
                  variant='outline'
                  size='sm'
                  className='bg-red-50 dark:bg-red-900/50 border-red-200 dark:border-red-700 text-red-700 dark:text-red-300'
                >
                  <Plus className='w-4 h-4 mr-2' />
                  <span className='hidden sm:inline'>Thêm cột điểm đầu tiên</span>
                  <span className='sm:hidden'>Thêm cột</span>
                </Button>
              </div>
            ) : (
              <div className='space-y-3'>
                {columns.map((column, index) => (
                  <div
                    key={column.id}
                    className='flex flex-col lg:flex-row gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600'
                  >
                    <div className='flex items-center justify-between lg:justify-start lg:flex-col lg:items-center lg:w-16'>
                      <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>#{index + 1}</span>
                      <Button
                        type='button'
                        variant='ghost'
                        size='sm'
                        onClick={() => removeColumn(column.id)}
                        className='text-red-600 hover:text-red-800 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 lg:hidden'
                      >
                        <Icons.Trash2 className='w-4 h-4' />
                      </Button>
                    </div>

                    <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4'>
                      <div className='space-y-2 sm:col-span-2 lg:col-span-1'>
                        <Label className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
                          Tên cột <span className='text-red-500'>*</span>
                        </Label>
                        <Input
                          value={column.name}
                          onChange={(e) => updateColumn(column.id, 'name', e.target.value)}
                          placeholder='VD: Chuyên cần, Giữa kỳ...'
                          className='h-8 sm:h-10 text-sm'
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
                          Tỷ lệ % <span className='text-red-500'>*</span>
                        </Label>
                        <Combobox
                          options={percentageOptions}
                          value={column.percentage?.toString() || ''}
                          onValueChange={(value) => updateColumn(column.id, 'percentage', parseInt(value) || 0)}
                          placeholder='10%'
                          searchPlaceholder='Tìm tỷ lệ...'
                          className='w-full h-8 sm:h-10 text-sm'
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label className='text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
                          Điểm hiện có <span className='text-red-500'>*</span>
                        </Label>
                        <Input
                          type='number'
                          value={column.currentScore}
                          onChange={(e) => updateColumn(column.id, 'currentScore', parseFloat(e.target.value) || 0)}
                          placeholder='8.5'
                          min='0'
                          max='10'
                          step='0.1'
                          className='h-8 sm:h-10 text-sm'
                        />
                      </div>
                    </div>

                    <Button
                      type='button'
                      variant='ghost'
                      size='sm'
                      onClick={() => removeColumn(column.id)}
                      className='text-red-600 hover:text-red-800 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 hidden lg:flex lg:self-start'
                    >
                      <Icons.Trash2 className='w-4 h-4' />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className='flex flex-col sm:flex-row gap-3'>
            <Button
              type='submit'
              disabled={!isFormValid || isCalculating}
              className='flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:opacity-50 order-1 sm:order-none'
            >
              {isCalculating ? (
                <>
                  <Icons.RefreshCw className='w-4 h-4 mr-2 animate-spin' />
                  <span className='hidden sm:inline'>Đang tính toán...</span>
                  <span className='sm:hidden'>Tính toán...</span>
                </>
              ) : (
                <>
                  <Calculator className='w-4 h-4 mr-2' />
                  <span className='hidden sm:inline'>Tính điểm cuối kỳ để qua môn</span>
                  <span className='sm:hidden'>Tính điểm qua môn</span>
                </>
              )}
            </Button>
            <Button
              type='button'
              onClick={handleReset}
              variant='outline'
              className='px-6 order-2 sm:order-none w-full sm:w-auto'
              disabled={isCalculating}
            >
              <Icons.RefreshCw className='w-4 h-4' />
              <span className='ml-2 sm:hidden'>Reset</span>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
