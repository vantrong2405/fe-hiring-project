'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons/icon'
import Link from 'next/link'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    setTimeout(() => {
      if (email === 'admin@duytan.edu.vn' && password === '123456') {
        alert('Đăng nhập thành công!')
      } else {
        setError('Email hoặc mật khẩu không chính xác')
      }
      setIsLoading(false)
    }, 1500)
  }

  const handleSocialLogin = (provider: string) => {
    alert(`Đăng nhập bằng ${provider} - Chức năng đang phát triển`)
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4'>
      {/* Background decoration */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-4 -left-4 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
        <div className='absolute -top-4 -right-4 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
      </div>

      <div className='w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative'>
        {/* Left side - Login Form */}
        <Card className='w-full max-w-md mx-auto shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl'>
          <CardHeader className='space-y-6 text-center pb-8'>
            {/* Logo */}
            <div className='flex items-center justify-center space-x-4'>
              <div className='relative'>
                <div className='w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl flex items-center justify-center shadow-lg'>
                  <Icons.GraduationCap className='w-8 h-8 text-white' />
                </div>
                <div className='absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse'></div>
              </div>
            </div>

            <div className='space-y-2'>
              <CardTitle className='text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-300 bg-clip-text text-transparent'>
                Đăng nhập
              </CardTitle>
              <p className='text-gray-600 dark:text-gray-300'>Chào mừng bạn quay trở lại với Hỗ Trợ Đồ Án CNTT</p>
            </div>
          </CardHeader>

          <CardContent className='space-y-6'>
            {/* Error Message */}
            {error && (
              <div className='flex items-center space-x-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg'>
                <Icons.AlertCircle className='w-5 h-5 text-red-600 dark:text-red-400' />
                <p className='text-sm text-red-600 dark:text-red-400'>{error}</p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className='space-y-6'>
              <div className='space-y-2'>
                <Label htmlFor='email' className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                  Email
                </Label>
                <div className='relative'>
                  <Icons.Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                  <Input
                    id='email'
                    type='email'
                    placeholder='example@duytan.edu.vn'
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className='pl-10 h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl'
                    required
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='password' className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                  Mật khẩu
                </Label>
                <div className='relative'>
                  <Icons.Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='••••••••'
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    className='pl-10 pr-10 h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                  >
                    {showPassword ? <Icons.EyeOff className='w-5 h-5' /> : <Icons.Eye className='w-5 h-5' />}
                  </button>
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <label className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <span className='text-sm text-gray-600 dark:text-gray-300'>Ghi nhớ đăng nhập</span>
                </label>
                <Link
                  href='/forgot-password'
                  className='text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium'
                >
                  Quên mật khẩu?
                </Link>
              </div>

              <Button
                type='submit'
                disabled={isLoading}
                className='w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl'
              >
                {isLoading ? (
                  <div className='flex items-center space-x-2'>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    <span>Đang đăng nhập...</span>
                  </div>
                ) : (
                  <div className='flex items-center space-x-2'>
                    <span>Đăng nhập</span>
                    <Icons.ArrowRight className='w-5 h-5' />
                  </div>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t border-gray-300 dark:border-gray-600'></span>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-white dark:bg-gray-800 text-gray-500'>Hoặc đăng nhập bằng</span>
              </div>
            </div>

            {/* Social Login */}
            <div className='grid grid-cols-3 gap-3'>
              <Button
                type='button'
                variant='outline'
                onClick={() => handleSocialLogin('Google')}
                className='h-12 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl'
              >
                <Icons.Chrome className='w-5 h-5 text-red-500' />
              </Button>
              <Button
                type='button'
                variant='outline'
                onClick={() => handleSocialLogin('Facebook')}
                className='h-12 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl'
              >
                <Icons.Facebook className='w-5 h-5 text-blue-600' />
              </Button>
              <Button
                type='button'
                variant='outline'
                onClick={() => handleSocialLogin('GitHub')}
                className='h-12 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl'
              >
                <Icons.Github className='w-5 h-5 text-gray-900 dark:text-white' />
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className='text-center pt-4'>
              <p className='text-sm text-gray-600 dark:text-gray-300'>
                Chưa có tài khoản?{' '}
                <Link
                  href='/register'
                  className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium'
                >
                  Đăng ký ngay
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Right side - Welcome Section */}
        <div className='hidden lg:block space-y-8'>
          <div className='space-y-6'>
            <h1 className='text-5xl font-bold leading-tight'>
              <span className='bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent'>
                Chào mừng bạn đến với
              </span>
              <br />
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
                Hỗ Trợ Đồ Án CNTT
              </span>
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
              Nền tảng hỗ trợ học tập hàng đầu dành cho sinh viên Công nghệ thông tin tại Đại học Duy Tân. Với đội ngũ
              chuyên gia giàu kinh nghiệm, chúng tôi cam kết mang đến dịch vụ chất lượng cao nhất.
            </p>
          </div>

          {/* Features */}
          <div className='grid grid-cols-2 gap-6'>
            <div className='flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center'>
                <Icons.GraduationCap className='w-6 h-6 text-white' />
              </div>
              <div>
                <h3 className='font-semibold text-gray-900 dark:text-white'>Chuyên nghiệp</h3>
                <p className='text-sm text-gray-600 dark:text-gray-300'>Đội ngũ có kinh nghiệm</p>
              </div>
            </div>
            <div className='flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm'>
              <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center'>
                <Icons.ArrowRight className='w-6 h-6 text-white' />
              </div>
              <div>
                <h3 className='font-semibold text-gray-900 dark:text-white'>Nhanh chóng</h3>
                <p className='text-sm text-gray-600 dark:text-gray-300'>Phản hồi trong 30 phút</p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className='pt-8'>
            <Link href='/'>
              <Button
                variant='outline'
                className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-800 rounded-xl'
              >
                ← Quay lại trang chủ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
