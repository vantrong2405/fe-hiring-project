import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function FloatingContact() {
  return (
    <div className='fixed bottom-8 right-8 z-50'>
      <Link href='https://m.me/61577172849172' target='_blank' rel='noopener noreferrer'>
        <Button className='rounded-full w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 animate-bounce'>
          <MessageCircle className='w-7 h-7' />
          <span className='sr-only'>Liên hệ qua Messenger</span>
        </Button>
      </Link>
    </div>
  )
}
