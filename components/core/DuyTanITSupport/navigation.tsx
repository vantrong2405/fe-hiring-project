'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, GraduationCap, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navLinks = [
    { href: '#home', label: 'Trang chủ' },
    { href: '#services', label: 'Dịch vụ' },
    { href: '#about', label: 'Về chúng tôi' },
    { href: '/tools', label: 'Công cụ hỗ trợ' },
    { href: '#contact', label: 'Liên hệ' }
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      if (pathname === '/') {
        e.preventDefault()
        const targetId = href.substring(1)
        const element = document.getElementById(targetId)

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      } else {
        e.preventDefault()
        router.push('/' + href)
      }
    }
  }

  return (
    <header className='sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center space-x-4 hover:opacity-80 transition-opacity duration-300'>
            <div className='relative'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-xl flex items-center justify-center shadow-lg'>
                <GraduationCap className='w-7 h-7 text-white' />
              </div>
              <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse'></div>
            </div>
            <div>
              <h1 className='text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
                Hỗ Trợ Đồ Án CNTT
              </h1>
              <p className='text-sm text-blue-600 dark:text-blue-400 font-medium'>
                Duy Tân University • Chuyên nghiệp • Uy tín
              </p>
            </div>
          </Link>

          <nav className='hidden lg:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group cursor-pointer'
              >
                {link.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full'></span>
              </Link>
            ))}
          </nav>

          <div className='hidden lg:flex items-center space-x-4'>
            <Link
              href='https://www.facebook.com/profile.php?id=61577172849172'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                <Sparkles className='w-4 h-4 mr-2' />
                Tư vấn miễn phí
              </Button>
            </Link>
          </div>

          <div className='flex items-center space-x-2 lg:hidden'>
            <Button variant='ghost' size='sm' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className='lg:hidden mt-6 pb-6 border-t border-gray-200 dark:border-gray-700 animate-in slide-in-from-top-2 duration-300'>
            <nav className='flex flex-col space-y-4 mt-6'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleLinkClick(e, link.href)
                    setIsMenuOpen(false)
                  }}
                  className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer'
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href='https://www.facebook.com/profile.php?id=61577172849172'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 text-white w-full mt-4'>
                  <Sparkles className='w-4 h-4 mr-2' />
                  Tư vấn miễn phí
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
