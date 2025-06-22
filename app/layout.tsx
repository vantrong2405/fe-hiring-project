import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import { Navigation } from '@/components/core/DuyTanITSupport/navigation'
import { FloatingContact } from '@/components/core/DuyTanITSupport/floating-contact'
import { GraduationCap, Facebook, Instagram, Youtube, MessageCircle, Clock } from 'lucide-react'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Hỗ Trợ Đồ Án CNTT - Duy Tân University',
  description: 'Dịch vụ hỗ trợ đồ án, lập trình, và học tập cho sinh viên IT Duy Tân'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='vi' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300'>
          <FloatingContact />
          <Navigation />

          <main>{children}</main>

          <footer className='bg-gray-900 dark:bg-black text-white py-8 sm:py-12 lg:py-16'>
            <div className='container mx-auto px-4 sm:px-6'>
              {/* Main Footer Content */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center sm:text-left'>
                {/* Brand Section */}
                <div className='space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <GraduationCap className='w-7 h-7 sm:w-8 sm:h-8 text-white' />
                    </div>
                    <div className='min-w-0'>
                      <h3 className='font-bold text-lg sm:text-xl truncate'>Hỗ Trợ Đồ Án CNTT</h3>
                      <p className='text-sm text-gray-400'>Duy Tân University</p>
                    </div>
                  </div>
                  <p className='text-gray-400 leading-relaxed text-sm sm:text-base max-w-sm'>
                    Đồng hành cùng sinh viên IT Duy Tân trong hành trình học tập và phát triển sự nghiệp.
                  </p>
                  {/* Social Media Links */}
                  <div className='flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start'>
                    <Link
                      href='https://www.facebook.com/profile.php?id=61577172849172'
                      rel='noopener noreferrer'
                      className='w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 touch-manipulation'
                      aria-label='Facebook'
                    >
                      <Facebook className='w-6 h-6 sm:w-7 sm:h-7' />
                    </Link>
                    <Link
                      href='#'
                      className='w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 touch-manipulation'
                      aria-label='Instagram'
                    >
                      <Instagram className='w-6 h-6 sm:w-7 sm:h-7' />
                    </Link>
                    <Link
                      href='#'
                      className='w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all duration-300 transform hover:scale-110 touch-manipulation'
                      aria-label='Youtube'
                    >
                      <Youtube className='w-6 h-6 sm:w-7 sm:h-7' />
                    </Link>
                  </div>
                </div>

                {/* Services Section */}
                <div className='mt-8 sm:mt-0 flex flex-col items-center sm:items-start'>
                  <h4 className='font-semibold text-base sm:text-lg mb-4 sm:mb-6'>Dịch vụ</h4>
                  <ul className='space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base'>
                    <li className='text-center sm:text-left'>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block touch-manipulation'
                      >
                        Lập trình cơ bản
                      </Link>
                    </li>
                    <li className='text-center sm:text-left'>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block touch-manipulation'
                      >
                        Cơ sở dữ liệu
                      </Link>
                    </li>
                    <li className='text-center sm:text-left'>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block touch-manipulation'
                      >
                        AI & Machine Learning
                      </Link>
                    </li>
                    <li className='text-center sm:text-left'>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block touch-manipulation'
                      >
                        Đồ án CDIO
                      </Link>
                    </li>
                    <li className='text-center sm:text-left'>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block touch-manipulation'
                      >
                        Tiểu luận & Báo cáo
                      </Link>
                    </li>
                    <li className='text-center sm:text-left'>
                      <Link
                        href='/tools/gpa-calculator'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block touch-manipulation'
                      >
                        Tính toán GPA
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Support Section */}
                <div className='mt-8 sm:mt-0 flex flex-col items-center sm:items-start'>
                  <h4 className='font-semibold text-base sm:text-lg mb-4 sm:mb-6'>Hỗ trợ</h4>
                  <ul className='space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base'>
                    <li className='text-center sm:text-left'>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block touch-manipulation'
                      >
                        Câu hỏi thường gặp
                      </Link>
                    </li>
                    <li className='text-center sm:text-left'>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block touch-manipulation'
                      >
                        Hướng dẫn thanh toán
                      </Link>
                    </li>
                    <li className='text-center sm:text-left'>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block touch-manipulation'
                      >
                        Chính sách bảo mật
                      </Link>
                    </li>
                    <li className='text-center sm:text-left'>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block touch-manipulation'
                      >
                        Điều khoản dịch vụ
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div className='mt-8 sm:mt-0 sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start'>
                  <h4 className='font-semibold text-base sm:text-lg mb-4 sm:mb-6'>Liên hệ</h4>
                  <div className='space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base'>
                    <div className='flex items-center space-x-3 justify-center sm:justify-start'>
                      <MessageCircle className='w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0' />
                      <span>Messenger 24/7</span>
                    </div>
                    <div className='flex items-center space-x-3 justify-center sm:justify-start'>
                      <Facebook className='w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0' />
                      <span>Facebook Page</span>
                    </div>
                    <div className='flex items-center space-x-3 justify-center sm:justify-start'>
                      <Clock className='w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0' />
                      <span>Phản hồi trong 30 phút</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className='border-t border-gray-800 dark:border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center'>
                <div className='flex flex-col items-center space-y-2'>
                  <p className='text-gray-400 text-sm sm:text-base'>
                    &copy; 2024 Hỗ Trợ Đồ Án CNTT Duy Tân. Tất cả quyền được bảo lưu.
                  </p>
                  <p className='text-xs sm:text-sm text-gray-500'>Được thiết kế với ❤️ cho sinh viên Duy Tân</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
