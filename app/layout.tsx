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

          <footer className='bg-gray-900 dark:bg-black text-white py-16'>
            <div className='container mx-auto px-6'>
              <div className='grid md:grid-cols-4 gap-12'>
                <div className='space-y-6'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-xl flex items-center justify-center'>
                      <GraduationCap className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='font-bold text-xl'>Hỗ Trợ Đồ Án CNTT</h3>
                      <p className='text-sm text-gray-400'>Duy Tân University</p>
                    </div>
                  </div>
                  <p className='text-gray-400 leading-relaxed'>
                    Đồng hành cùng sinh viên IT Duy Tân trong hành trình học tập và phát triển sự nghiệp.
                  </p>
                  <div className='flex space-x-4'>
                    <Link
                      href='https://www.facebook.com/profile.php?id=61577172849172'
                      rel='noopener noreferrer'
                      className='w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110'
                    >
                      <Facebook className='w-6 h-6' />
                    </Link>
                    <Link
                      href='#'
                      className='w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110'
                    >
                      <Instagram className='w-6 h-6' />
                    </Link>
                    <Link
                      href='#'
                      className='w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all duration-300 transform hover:scale-110'
                    >
                      <Youtube className='w-6 h-6' />
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className='font-semibold text-lg mb-6'>Dịch vụ</h4>
                  <ul className='space-y-3 text-gray-400'>
                    <li>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block'
                      >
                        Lập trình cơ bản
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block'
                      >
                        Cơ sở dữ liệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block'
                      >
                        AI & Machine Learning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block'
                      >
                        Đồ án CDIO
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block'
                      >
                        Tiểu luận & Báo cáo
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/tools/gpa-calculator'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block'
                      >
                        Tính toán GPA
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className='font-semibold text-lg mb-6'>Hỗ trợ</h4>
                  <ul className='space-y-3 text-gray-400'>
                    <li>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block'
                      >
                        Câu hỏi thường gặp
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block'
                      >
                        Hướng dẫn thanh toán
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block'
                      >
                        Chính sách bảo mật
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block'
                      >
                        Điều khoản dịch vụ
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className='font-semibold text-lg mb-6'>Liên hệ</h4>
                  <div className='space-y-4 text-gray-400'>
                    <div className='flex items-center space-x-3'>
                      <MessageCircle className='w-5 h-5 text-blue-400' />
                      <span>Messenger 24/7</span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <Facebook className='w-5 h-5 text-blue-400' />
                      <span>Facebook Page</span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <Clock className='w-5 h-5 text-green-400' />
                      <span>Phản hồi trong 30 phút</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center'>
                <p className='text-gray-400'>&copy; 2024 Hỗ Trợ Đồ Án CNTT Duy Tân. Tất cả quyền được bảo lưu.</p>
                <p className='text-sm text-gray-500 mt-2'>Được thiết kế với ❤️ cho sinh viên Duy Tân</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
