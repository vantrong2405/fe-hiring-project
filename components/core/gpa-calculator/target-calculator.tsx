'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons/icon'
import { Combobox } from '@/components/ui/combobox'
import { evaluateGPATarget } from '@/app/tools/gpa-calculator/handler'
import GPAHelpDialog from '@/app/tools/gpa-calculator/dialog'
import { GPAResult, GPAFormData } from '@/types'
import { gpaValidationRules } from '@/app/schemas/gpa-calculator'
import { totalCreditOptions } from '@/seeding'

interface TargetCalculatorProps {
  onResultChange: (result: GPAResult | null) => void
}

export default function TargetCalculator({ onResultChange }: TargetCalculatorProps) {
  const [isCalculating, setIsCalculating] = useState(false)
  const [isHelpOpen, setIsHelpOpen] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid }
  } = useForm<GPAFormData>({
    defaultValues: {
      completed_credits: 0,
      current_gpa: 0,
      remaining_credits: 0,
      target_gpa: 0
    },
    mode: 'onChange'
  })

  const currentGPA = watch('current_gpa')
  const targetGPA = watch('target_gpa')
  const completedCredits = watch('completed_credits')
  const remainingCredits = watch('remaining_credits')

  const isFormValid = isValid && completedCredits > 0 && currentGPA > 0 && targetGPA > 0 && remainingCredits > 0

  const handleTargetSubmit = async (data: GPAFormData) => {
    setIsCalculating(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const calculationResult = evaluateGPATarget(
      data.current_gpa,
      data.target_gpa,
      data.remaining_credits,
      data.completed_credits
    )
    onResultChange(calculationResult)
    setIsCalculating(false)
  }

  const handleTargetReset = () => {
    reset()
    onResultChange(null)
  }

  return (
    <Card className='shadow-xl border-0 bg-white dark:bg-gray-800'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between text-2xl font-bold text-gray-900 dark:text-white'>
          <div className='flex items-center'>
            <Icons.Target className='w-6 h-6 mr-3 text-blue-600' />
            Tính toán mục tiêu
          </div>
          <button
            onClick={() => setIsHelpOpen(true)}
            className='w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors flex items-center justify-center'
            aria-label='Hướng dẫn sử dụng'
          >
            <span className='text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'>
              ?
            </span>
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <form onSubmit={handleSubmit(handleTargetSubmit)} className='space-y-6'>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='completed_credits' className='text-sm font-medium'>
                Số tín chỉ đã học <span className='text-red-500'>*</span>
              </Label>
              <Controller
                name='completed_credits'
                control={control}
                rules={gpaValidationRules.completed_credits}
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
              <Label htmlFor='current_gpa' className='text-sm font-medium'>
                GPA hiện tại <span className='text-red-500'>*</span>
              </Label>
              <Controller
                name='current_gpa'
                control={control}
                rules={gpaValidationRules.current_gpa}
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
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='target_gpa' className='text-sm font-medium'>
                GPA mục tiêu <span className='text-red-500'>*</span>
              </Label>
              <Controller
                name='target_gpa'
                control={control}
                rules={{
                  ...gpaValidationRules.target_gpa,
                  validate: {
                    notLowerThanCurrent: (value: number) =>
                      value >= currentGPA ||
                      `GPA mục tiêu (${value}) không thể thấp hơn GPA hiện tại (${currentGPA}). Bạn đã đạt mục tiêu!`
                  }
                }}
                render={({ field }) => (
                  <div className='relative'>
                    <Input
                      type='number'
                      min='0'
                      max='4'
                      step='0.01'
                      value={field.value || ''}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                      placeholder='VD: 3.2'
                      className={`text-base ${
                        currentGPA > 0 && targetGPA > 0 && currentGPA >= targetGPA
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                          : ''
                      }`}
                    />
                    {currentGPA > 0 && targetGPA > 0 && currentGPA >= targetGPA && (
                      <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                        <span className='text-green-600 dark:text-green-400'>✅</span>
                      </div>
                    )}
                  </div>
                )}
              />
              {currentGPA > 0 && targetGPA > 0 && currentGPA >= targetGPA && (
                <p className='text-sm text-green-600 dark:text-green-400 flex items-center gap-1'>
                  <span>🎉</span> Chúc mừng! Bạn đã đạt được GPA mục tiêu
                </p>
              )}
              {errors.target_gpa && <p className='text-sm text-red-500'>{errors.target_gpa.message}</p>}
            </div>

            <div className='space-y-2'>
              <Label htmlFor='remaining_credits' className='text-sm font-medium'>
                Số tín chỉ còn lại <span className='text-red-500'>*</span>
              </Label>
              <Controller
                name='remaining_credits'
                control={control}
                rules={gpaValidationRules.remaining_credits}
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

          <div className='flex gap-3'>
            <Button
              type='submit'
              disabled={!isFormValid || isCalculating}
              className='flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50'
            >
              {isCalculating ? (
                <>
                  <Icons.RefreshCw className='w-4 h-4 mr-2 animate-spin' />
                  Đang tính toán...
                </>
              ) : (
                'Tính toán mục tiêu có thể đạt được'
              )}
            </Button>
            <Button
              type='button'
              onClick={handleTargetReset}
              variant='outline'
              className='px-6'
              disabled={isCalculating}
            >
              <Icons.RefreshCw className='w-4 h-4' />
            </Button>
          </div>
        </form>
      </CardContent>

      <GPAHelpDialog open={isHelpOpen} onOpenChange={setIsHelpOpen} />
    </Card>
  )
}
