import { Button } from '@/components/ui/button'
import { MessageCircle, ArrowRight, BookOpen, Sparkles, TrendingUp, Users, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { StatsCard } from '@/components/core/DuyTanITSupport/stats-card'

export function HeroSection() {
  return (
    <section id='home' className='relative py-24 overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 dark:from-gray-800/50 dark:via-gray-900 dark:to-purple-900/30'></div>
      <div className='container mx-auto px-6 relative'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <div className='space-y-6'>
              <div className='inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium'>
                <Sparkles className='w-4 h-4 mr-2' />
                Dịch vụ hỗ trợ đồ án #1 tại Duy Tân
              </div>
              <h1 className='text-5xl lg:text-6xl font-bold leading-tight'>
                <span className='bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent'>
                  Hỗ trợ đồ án IT
                </span>
                <br />
                <span className='bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
                  chuyên nghiệp
                </span>
              </h1>
              <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl'>
                Bạn đang gặp khó khăn với deadline đồ án? Code không chạy? Không biết bắt đầu từ đâu?
                <span className='font-semibold text-gray-800 dark:text-gray-200'> Đừng lo lắng!</span> Chúng mình ở đây
                để giúp bạn vượt qua mọi thử thách trong hành trình học tập tại Duy Tân.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Link
                href='https://www.facebook.com/profile.php?id=61577172849172'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'
                >
                  <MessageCircle className='w-5 h-5 mr-2' />
                  Liên hệ ngay
                  <ArrowRight className='ml-2 w-5 h-5' />
                </Button>
              </Link>
              <Button
                size='lg'
                variant='outline'
                className='border-2 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 shadow-lg'
              >
                <BookOpen className='w-5 h-5 mr-2' />
                Xem bảng giá
              </Button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-8'>
              <StatsCard value='500+' label='Đồ án hoàn thành' icon={TrendingUp} color='blue' />
              <StatsCard value='98%' label='Tỷ lệ hài lòng' icon={Users} color='green' />
              <StatsCard value='24/7' label='Hỗ trợ online' icon={Clock} color='purple' />
            </div>
          </div>

          <div className='relative'>
            <div className='relative bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-800 dark:via-gray-700 dark:to-purple-900/50 rounded-3xl p-8 shadow-2xl'>
              <Image
                src='/images/hire-it-project-logo.jpeg'
                alt='Hire IT Project - Duy Tan University'
                width={600}
                height={400}
                className='rounded-2xl shadow-lg'
              />
              <div className='absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-4 shadow-xl'>
                <MessageCircle className='w-8 h-8 text-white' />
              </div>
              <div className='absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400 rounded-2xl p-4 shadow-xl'>
                <Sparkles className='w-8 h-8 text-white' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
