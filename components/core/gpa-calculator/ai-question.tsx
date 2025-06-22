'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons/icon'
import { exampleQuestions } from '@/seeding'

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
        <div className='space-y-2'>
          <Label htmlFor='question' className='text-sm font-medium'>
            Hỏi AI về học tập
          </Label>
          <textarea
            id='question'
            value=''
            onChange={() => {}}
            placeholder='VD: Em GPA 3.0 với 67 tín chỉ, còn 20 tín chỉ có thể lên 3.2 được không?'
            className='w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none'
            rows={4}
          />
        </div>

        <div className='space-y-3'>
          <Label className='text-sm font-medium text-gray-600 dark:text-gray-400'>
            🤖 Câu hỏi mẫu cho AI (click để thử):
          </Label>
          <div className='space-y-2'>
            {exampleQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => {}}
                className='w-full text-left p-3 text-sm bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors'
              >
                <span className='text-blue-600 dark:text-blue-400'>🗨️</span> {question}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={() => {}}
          disabled={false}
          className='w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
        >
          <Icons.MessageCircle className='w-4 h-4 mr-2' />
          Hỏi AI ngay
        </Button>
      </CardContent>
    </Card>
  )
}
