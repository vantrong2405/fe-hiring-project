'use client'

import { Suspense } from 'react'
import GPACalculatorForm from './form'

export default function GPACalculatorPage() {
  return (
    <Suspense
      fallback={
        <div className='max-w-6xl mx-auto space-y-6 sm:space-y-8 py-8 sm:py-12 px-4 sm:px-6'>
          <div className='flex items-center justify-center py-20'>
            <div className='w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin'></div>
            <span className='ml-3 text-lg text-gray-600 dark:text-gray-400'>Đang tải...</span>
          </div>
        </div>
      }
    >
      <GPACalculatorForm />
    </Suspense>
  )
}
