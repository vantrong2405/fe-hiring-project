'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons/icon'
import Link from 'next/link'

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Vui lòng nhập email')
      return
    }

    if (!email.includes('@')) {
      setError('Vui lòng nhập email hợp lệ')
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsEmailSent(true)
      setIsLoading(false)
    }, 2000)
  }

  const handleResendEmail = () => {
    setIsLoading(true)
    setTimeout(() => {
      alert('Email đã được gửi lại!')
      setIsLoading(false)
    }, 1500)
  }

  if (isEmailSent) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4'>
        {/* Background decoration */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-4 -left-4 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
          <div className='absolute -top-4 -right-4 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
          <div className='absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
        </div>

        <Card className='w-full max-w-md mx-auto shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl relative'>
          <CardHeader className='space-y-6 text-center pb-8'>
            {/* Logo */}
            <div className='flex items-center justify-center space-x-4'>
              <div className='relative'>
                <div className='w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 rounded-2xl flex items-center justify-center shadow-lg'>
                  <Icons.CheckCircle2 className='w-8 h-8 text-white' />
                </div>
                <div className='absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse'></div>
              </div>
            </div>

            <div className='space-y-2'>
              <CardTitle className='text-3xl font-bold bg-gradient-to-r from-gray-900 to-green-900 dark:from-white dark:to-green-300 bg-clip-text text-transparent'>
                Email đã được gửi!12sadsada--soft123--mixed
              </CardTitle>
              <p className='text-gray-600 dark:text-gray-300'>Kiểm tra hộp thư của bạn để đặt lại mật khẩu</p>
            </div>
          </CardHeader>

          <CardContent className='space-y-6'>
            <div className='text-center space-y-6'>
              <div className='p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl border-2 border-green-200 dark:border-green-800'>
                <Icons.Send className='w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4' />
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                  Email khôi phục đã được gửi
                </h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>
                  Chúng tôi đã gửi liên kết đặt lại mật khẩu đến email:
                </p>
                <p className='text-green-600 dark:text-green-400 font-medium mt-2'>{email}</p>
              </div>

              <div className='space-y-4'>
                <p className='text-sm text-gray-600 dark:text-gray-300'>Không thấy email? Kiểm tra thư mục spam hoặc</p>
                <Button
                  onClick={handleResendEmail}
                  disabled={isLoading}
                  variant='outline'
                  className='w-full h-12 border-green-300 text-green-600 hover:bg-green-50 dark:border-green-600 dark:text-green-400 dark:hover:bg-green-900/20 rounded-xl'
                >
                  {isLoading ? (
                    <div className='flex items-center space-x-2'>
                      <div className='w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin'></div>
                      <span>Đang gửi lại...</span>
                    </div>
                  ) : (
                    <div className='flex items-center space-x-2'>
                      <Icons.Send className='w-4 h-4' />
                      <span>Gửi lại email</span>
                    </div>
                  )}
                </Button>
              </div>

              <div className='pt-6 border-t border-gray-200 dark:border-gray-700'>
                <Link href='/login'>
                  <Button className='w-full h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl'>
                    <Icons.ArrowLeft className='w-4 h-4 mr-2' />
                    Quay lại đăng nhập
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4'>
      {/* Background decoration */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-4 -left-4 w-72 h-72 bg-orange-200 dark:bg-orange-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
        <div className='absolute -top-4 -right-4 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
      </div>

      <div className='w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative'>
        {/* Left side - Information */}
        <div className='hidden lg:block space-y-8'>
          <div className='space-y-6'>
            <h1 className='text-5xl font-bold leading-tight'>
              <span className='bg-gradient-to-r from-gray-900 via-orange-900 to-blue-900 dark:from-white dark:via-orange-300 dark:to-blue-300 bg-clip-text text-transparent'>
                Khôi phục mật khẩu
              </span>
              <br />
              <span className='bg-gradient-to-r from-orange-600 to-blue-600 dark:from-orange-400 dark:to-blue-400 bg-clip-text text-transparent'>
                Hỗ Trợ Đồ Án CNTT
              </span>
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
              Đừng lo lắng! Việc quên mật khẩu là chuyện bình thường. Chúng tôi sẽ giúp bạn lấy lại quyền truy cập vào
              tài khoản một cách nhanh chóng và an toàn.
            </p>
          </div>

          {/* Steps */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>🔐 Quy trình khôi phục:</h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm'>
                <div className='w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                  1
                </div>
                <div>
                  <p className='font-medium text-gray-900 dark:text-white'>Nhập email của bạn</p>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>Email đã đăng ký tài khoản</p>
                </div>
              </div>
              <div className='flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm'>
                <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                  2
                </div>
                <div>
                  <p className='font-medium text-gray-900 dark:text-white'>Kiểm tra email</p>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>Nhận liên kết khôi phục</p>
                </div>
              </div>
              <div className='flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm'>
                <div className='w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                  3
                </div>
                <div>
                  <p className='font-medium text-gray-900 dark:text-white'>Đặt mật khẩu mới</p>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>Tạo mật khẩu an toàn</p>
                </div>
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

        {/* Right side - Forgot Password Form */}
        <Card className='w-full max-w-md mx-auto shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl'>
          <CardHeader className='space-y-6 text-center pb-8'>
            {/* Logo */}
            <div className='flex items-center justify-center space-x-4'>
              <div className='relative'>
                <div className='w-16 h-16 bg-gradient-to-br from-orange-600 to-blue-600 dark:from-orange-500 dark:to-blue-500 rounded-2xl flex items-center justify-center shadow-lg'>
                  <Icons.GraduationCap className='w-8 h-8 text-white' />
                </div>
                <div className='absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse'></div>
              </div>
            </div>

            <div className='space-y-2'>
              <CardTitle className='text-3xl font-bold bg-gradient-to-r from-gray-900 to-orange-900 dark:from-white dark:to-orange-300 bg-clip-text text-transparent'>
                Quên mật khẩu?
              </CardTitle>
              <p className='text-gray-600 dark:text-gray-300'>Nhập email để nhận liên kết khôi phục mật khẩu</p>
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

            {/* Form */}
            <form onSubmit={handleSubmit} className='space-y-6'>
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
                    className='pl-10 h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-orange-500 dark:focus:border-orange-400 rounded-xl'
                    required
                  />
                </div>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  Chúng tôi sẽ gửi liên kết khôi phục mật khẩu đến email này
                </p>
              </div>

              <Button
                type='submit'
                disabled={isLoading}
                className='w-full h-12 bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 dark:from-orange-500 dark:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl'
              >
                {isLoading ? (
                  <div className='flex items-center space-x-2'>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    <span>Đang gửi email...</span>
                  </div>
                ) : (
                  <div className='flex items-center space-x-2'>
                    <Icons.Send className='w-5 h-5' />
                    <span>Gửi email khôi phục</span>
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
                <span className='px-2 bg-white dark:bg-gray-800 text-gray-500'>Hoặc</span>
              </div>
            </div>

            {/* Back to Login */}
            <div className='text-center space-y-4'>
              <Link href='/login'>
                <Button
                  variant='outline'
                  className='w-full h-12 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl'
                >
                  <Icons.ArrowLeft className='w-4 h-4 mr-2' />
                  Quay lại đăng nhập
                </Button>
              </Link>

              <p className='text-sm text-gray-600 dark:text-gray-300'>
                Chưa có tài khoản?{' '}
                <Link
                  href='/register'
                  className='text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-medium'
                >
                  Đăng ký ngay
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
