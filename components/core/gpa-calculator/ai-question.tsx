'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/icons/icon'

export default function AIQuestion() {
  return (
    <Card className='shadow-xl border-0 bg-white dark:bg-gray-800'>
      <CardHeader>
        <CardTitle className='flex items-center text-2xl font-bold text-gray-900 dark:text-white'>
          <Icons.Brain className='w-6 h-6 mr-3 text-purple-600' />
          Hỏi AI thông minh
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='text-center py-12 space-y-6'>
          <div className='flex justify-center'>
            <div className='w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-full flex items-center justify-center'>
              <img src='/images/ai.png' alt='AI Robot' className='w-12 h-12' />
            </div>
          </div>

          <div className='space-y-3'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>🚧 Tính năng đang phát triển nè</h3>
            <p className='text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed'>
              Tui thức viết mấy chức năng ni này từ 3h sáng nè 🥱
              <br />
              Bạn like fanpage cho tui thêm động lực đi pleaseee 🥺✨ Để tui viết tiếp tính năng ni choooo 🥺🥺🥺
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Button
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61577172849172', '_blank')}
              className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
            >
              <Icons.Facebook className='w-4 h-4 mr-2' />
              Like Fanpage ❤️
            </Button>
            <Button
              variant='outline'
              disabled={true}
              onClick={() => {}}
              className='border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 opacity-50 cursor-not-allowed'
            >
              <Icons.Lightbulb className='w-4 h-4 mr-2' />
              Thông báo khi có update 🔔
            </Button>
          </div>

          <div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              ✨ Sắp có AI tư vấn học tập thông minh cho bạn nè! 🤖
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
