'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons/icon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ResetPasswordForm({ token }: { token?: string }) {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isValidToken, setIsValidToken] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (token) {
      setIsValidToken(true)
    } else {
      setIsValidToken(false)
    }
  }, [token])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return 'Mật khẩu phải có ít nhất 8 ký tự'
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return 'Mật khẩu phải có ít nhất 1 chữ thường'
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return 'Mật khẩu phải có ít nhất 1 chữ hoa'
    }
    if (!/(?=.*\d)/.test(password)) {
      return 'Mật khẩu phải có ít nhất 1 số'
    }
    return null
  }

  const validateForm = () => {
    if (!formData.password.trim()) {
      setError('Vui lòng nhập mật khẩu mới')
      return false
    }

    const passwordError = validatePassword(formData.password)
    if (passwordError) {
      setError(passwordError)
      return false
    }

    if (!formData.confirmPassword.trim()) {
      setError('Vui lòng xác nhận mật khẩu')
      return false
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp')
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!validateForm()) return

    setIsLoading(true)

    setTimeout(() => {
      setIsSuccess(true)
      setIsLoading(false)
    }, 2000)
  }

  if (!isValidToken) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4'>
        <Card className='w-full max-w-md mx-auto shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl'>
          <CardHeader className='space-y-6 text-center pb-8'>
            <div className='flex items-center justify-center space-x-4'>
              <div className='w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg'>
                <Icons.AlertCircle className='w-8 h-8 text-white' />
              </div>
            </div>
            <div className='space-y-2'>
              <CardTitle className='text-3xl font-bold text-red-600 dark:text-red-400'>Liên kết không hợp lệ</CardTitle>
              <p className='text-gray-600 dark:text-gray-300'>
                Liên kết khôi phục mật khẩu đã hết hạn hoặc không tồn tại
              </p>
            </div>
          </CardHeader>
          <CardContent className='space-y-6 text-center'>
            <div className='p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl border-2 border-red-200 dark:border-red-800'>
              <p className='text-gray-600 dark:text-gray-300 mb-4'>Vui lòng yêu cầu liên kết khôi phục mật khẩu mới</p>
              <Link href='/forgot-password'>
                <Button className='bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white'>
                  Gửi lại yêu cầu
                </Button>
              </Link>
            </div>
            <Link href='/login'>
              <Button variant='outline' className='w-full'>
                <Icons.ArrowLeft className='w-4 h-4 mr-2' />
                Quay lại đăng nhập
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-4 -left-4 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
          <div className='absolute -top-4 -right-4 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
          <div className='absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
        </div>

        <Card className='w-full max-w-md mx-auto shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl relative'>
          <CardHeader className='space-y-6 text-center pb-8'>
            <div className='flex items-center justify-center space-x-4'>
              <div className='relative'>
                <div className='w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg'>
                  <Icons.CheckCircle2 className='w-8 h-8 text-white' />
                </div>
                <div className='absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <CardTitle className='text-3xl font-bold bg-gradient-to-r from-gray-900 to-green-900 dark:from-white dark:to-green-300 bg-clip-text text-transparent'>
                Thành công!
              </CardTitle>
              <p className='text-gray-600 dark:text-gray-300'>Mật khẩu của bạn đã được đặt lại thành công</p>
            </div>
          </CardHeader>

          <CardContent className='space-y-6'>
            <div className='text-center space-y-6'>
              <div className='p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl border-2 border-green-200 dark:border-green-800'>
                <Icons.Shield className='w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4' />
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>Mật khẩu đã được cập nhật</h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>
                  Bạn có thể đăng nhập với mật khẩu mới ngay bây giờ
                </p>
              </div>

              <Button
                onClick={() => router.push('/login')}
                className='w-full h-12 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl'
              >
                <Icons.ArrowRight className='w-4 h-4 mr-2' />
                Đăng nhập ngay
              </Button>

              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Bạn sẽ được chuyển đến trang đăng nhập trong 5 giây...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4'>
      {/* Background decoration */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-4 -left-4 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
        <div className='absolute -top-4 -right-4 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
      </div>

      <div className='w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative'>
        {/* Left side - Security Info */}
        <div className='hidden lg:block space-y-8'>
          <div className='space-y-6'>
            <h1 className='text-5xl font-bold leading-tight'>
              <span className='bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 dark:from-white dark:via-purple-300 dark:to-blue-300 bg-clip-text text-transparent'>
                Đặt lại mật khẩu
              </span>
              <br />
              <span className='bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent'>
                An toàn & Bảo mật
              </span>
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
              Tạo mật khẩu mạnh để bảo vệ tài khoản của bạn. Hãy chọn mật khẩu dễ nhớ nhưng khó đoán.
            </p>
          </div>

          {/* Password Requirements */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>🔐 Yêu cầu mật khẩu:</h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm'>
                <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center'>
                  <Icons.Key className='w-4 h-4 text-white' />
                </div>
                <div>
                  <p className='font-medium text-gray-900 dark:text-white'>Ít nhất 8 ký tự</p>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>Độ dài tối thiểu</p>
                </div>
              </div>
              <div className='flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm'>
                <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center'>
                  <Icons.Key className='w-4 h-4 text-white' />
                </div>
                <div>
                  <p className='font-medium text-gray-900 dark:text-white'>Chữ hoa & chữ thường</p>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>A-Z và a-z</p>
                </div>
              </div>
              <div className='flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm'>
                <div className='w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center'>
                  <Icons.Key className='w-4 h-4 text-white' />
                </div>
                <div>
                  <p className='font-medium text-gray-900 dark:text-white'>Có chứa số</p>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>0-9</p>
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

        {/* Right side - Reset Password Form */}
        <Card className='w-full max-w-md mx-auto shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl'>
          <CardHeader className='space-y-6 text-center pb-8'>
            {/* Logo */}
            <div className='flex items-center justify-center space-x-4'>
              <div className='relative'>
                <div className='w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-2xl flex items-center justify-center shadow-lg'>
                  <Icons.Shield className='w-8 h-8 text-white' />
                </div>
                <div className='absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse'></div>
              </div>
            </div>

            <div className='space-y-2'>
              <CardTitle className='text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-300 bg-clip-text text-transparent'>
                Đặt lại mật khẩu
              </CardTitle>
              <p className='text-gray-600 dark:text-gray-300'>Tạo mật khẩu mới cho tài khoản của bạn</p>
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
              {/* New Password */}
              <div className='space-y-2'>
                <Label htmlFor='password' className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                  Mật khẩu mới
                </Label>
                <div className='relative'>
                  <Icons.Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                  <Input
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='••••••••'
                    value={formData.password}
                    onChange={handleInputChange}
                    className='pl-10 pr-10 h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 rounded-xl'
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

              {/* Confirm Password */}
              <div className='space-y-2'>
                <Label htmlFor='confirmPassword' className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                  Xác nhận mật khẩu
                </Label>
                <div className='relative'>
                  <Icons.Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                  <Input
                    id='confirmPassword'
                    name='confirmPassword'
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='••••••••'
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className='pl-10 pr-10 h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 rounded-xl'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                  >
                    {showConfirmPassword ? <Icons.EyeOff className='w-5 h-5' /> : <Icons.Eye className='w-5 h-5' />}
                  </button>
                </div>
              </div>

              {/* Password Strength Indicator */}
              <div className='text-xs text-gray-500 dark:text-gray-400 space-y-1'>
                <p>Mật khẩu phải bao gồm:</p>
                <div className='grid grid-cols-2 gap-2'>
                  <span
                    className={`flex items-center space-x-1 ${
                      formData.password.length >= 8 ? 'text-green-600 dark:text-green-400' : 'text-gray-400'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        formData.password.length >= 8 ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    ></div>
                    <span>8+ ký tự</span>
                  </span>
                  <span
                    className={`flex items-center space-x-1 ${
                      /(?=.*[a-z])/.test(formData.password) ? 'text-green-600 dark:text-green-400' : 'text-gray-400'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        /(?=.*[a-z])/.test(formData.password) ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    ></div>
                    <span>Chữ thường</span>
                  </span>
                  <span
                    className={`flex items-center space-x-1 ${
                      /(?=.*[A-Z])/.test(formData.password) ? 'text-green-600 dark:text-green-400' : 'text-gray-400'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        /(?=.*[A-Z])/.test(formData.password) ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    ></div>
                    <span>Chữ hoa</span>
                  </span>
                  <span
                    className={`flex items-center space-x-1 ${
                      /(?=.*\d)/.test(formData.password) ? 'text-green-600 dark:text-green-400' : 'text-gray-400'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        /(?=.*\d)/.test(formData.password) ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    ></div>
                    <span>Có số</span>
                  </span>
                </div>
              </div>

              <Button
                type='submit'
                disabled={isLoading}
                className='w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl'
              >
                {isLoading ? (
                  <div className='flex items-center space-x-2'>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    <span>Đang cập nhật...</span>
                  </div>
                ) : (
                  <div className='flex items-center space-x-2'>
                    <Icons.Shield className='w-5 h-5' />
                    <span>Đặt lại mật khẩu</span>
                    <Icons.ArrowRight className='w-5 h-5' />
                  </div>
                )}
              </Button>
            </form>

            {/* Back to Login */}
            <div className='text-center pt-4'>
              <Link href='/login'>
                <Button
                  variant='outline'
                  className='w-full h-12 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl'
                >
                  <Icons.ArrowLeft className='w-4 h-4 mr-2' />
                  Quay lại đăng nhập
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
