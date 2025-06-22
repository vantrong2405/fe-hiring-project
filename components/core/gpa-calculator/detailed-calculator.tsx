'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons/icon'
import { Combobox } from '@/components/ui/combobox'
import { totalCreditOptions } from '@/seeding'

export default function DetailedCalculator() {
  return (
    <Card className='shadow-xl border-0 bg-white dark:bg-gray-800'>
      <CardHeader>
        <CardTitle className='flex items-center text-2xl font-bold text-gray-900 dark:text-white'>
          <Icons.Calculator className='w-6 h-6 mr-3 text-green-600' />
          Tính toán GPA chi tiết
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='grid md:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg'>
          <div className='space-y-2'>
            <Label htmlFor='detailed_completed_credits' className='text-sm font-medium'>
              Số tín chỉ đã học <span className='text-red-500'>*</span>
            </Label>
            <Combobox
              options={totalCreditOptions}
              value=''
              onValueChange={() => {}}
              placeholder='0 tín chỉ'
              searchPlaceholder='Tìm số tín chỉ...'
              className='w-full text-base'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='detailed_current_gpa' className='text-sm font-medium'>
              GPA hiện tại <span className='text-red-500'>*</span>
            </Label>
            <Input
              type='number'
              min='0'
              max='4'
              step='0.01'
              value=''
              onChange={() => {}}
              placeholder='VD: 3.0'
              className='text-base'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='detailed_remaining_credits' className='text-sm font-medium'>
              Tổng tín chỉ còn lại <span className='text-red-500'>*</span>
            </Label>
            <Combobox
              options={totalCreditOptions}
              value=''
              onValueChange={() => {}}
              placeholder='0 tín chỉ'
              searchPlaceholder='Tìm số tín chỉ...'
              className='w-full text-base'
            />
          </div>
        </div>

        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <h4 className='text-lg font-semibold text-gray-900 dark:text-white'>📚 Danh sách tín chỉ còn lại</h4>
            <div className='flex items-center gap-3'>
              <span className='text-sm text-gray-600 dark:text-gray-400'>0 môn</span>
              <Button
                onClick={() => {}}
                variant='outline'
                size='sm'
                className='bg-green-50 dark:bg-green-900/50 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/70'
              >
                <Icons.Plus className='w-4 h-4 mr-2' />
                Thêm môn
              </Button>
            </div>
          </div>

          <div className='text-center py-12 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600'>
            <Icons.Calculator className='w-16 h-16 mx-auto mb-4 opacity-30' />
            <h3 className='text-lg font-medium mb-2'>Chưa có môn nào</h3>
            <p className='text-sm mb-4'>Thêm các môn còn lại để tính toán GPA chi tiết</p>
            <Button
              onClick={() => {}}
              variant='outline'
              size='sm'
              className='bg-green-50 dark:bg-green-900/50 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300'
            >
              <Icons.Plus className='w-4 h-4 mr-2' />
              Thêm môn đầu tiên
            </Button>
          </div>
        </div>

        <Button
          onClick={() => {}}
          disabled={true}
          className='w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
        >
          <Icons.Target className='w-4 h-4 mr-2' />
          Tính toán GPA chi tiết
        </Button>
      </CardContent>
    </Card>
  )
}
