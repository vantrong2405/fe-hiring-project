'use client'

import React, { Suspense } from 'react'
import ResetPasswordWrapper from './wrapper'

export default function page() {
  return (
    <Suspense
      fallback={
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4'>
          <div className='w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin'></div>
        </div>
      }
    >
      <ResetPasswordWrapper />
    </Suspense>
  )
}
