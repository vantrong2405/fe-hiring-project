'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons/icon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RegisterForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    studentId: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Vui lòng nhập email hợp lệ')
      return false
    }
    if (formData.password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự')
      return false
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp')
      return false
    }
    if (!acceptTerms) {
      setError('Vui lòng đồng ý với điều khoản sử dụng')
      return false
    }
    return true
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      alert('Đăng ký thành công! Chuyển đến trang chủ...')
      router.push('/')
      setIsLoading(false)
    }, 2000)
  }

  const handleSocialRegister = (provider: string) => {
    alert(`Đăng ký bằng ${provider} - Chức năng đang phát triển`)
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4'>
      {/* Background decoration */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-4 -left-4 w-72 h-72 bg-green-200 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
        <div className='absolute -top-4 -right-4 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
      </div>

      <div className='w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative'>
        {/* Left side - Welcome Section */}
        <div className='hidden lg:block space-y-8 order-2 lg:order-1'>
          <div className='space-y-6'>
            <h1 className='text-5xl font-bold leading-tight'>
              <span className='bg-gradient-to-r from-gray-900 via-green-900 to-blue-900 dark:from-white dark:via-green-300 dark:to-blue-300 bg-clip-text text-transparent'>
                Tham gia cùng chúng tôi
              </span>
              <br />
              <span className='bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent'>
                Hỗ Trợ Đồ Án CNTT
              </span>
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
              Tạo tài khoản để trở thành thành viên của cộng đồng hỗ trợ học tập IT hàng đầu tại Đại học Duy Tân. Nhận
              được sự hỗ trợ tốt nhất cho hành trình học tập của bạn.
            </p>
          </div>

          {/* Benefits */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm'>
              <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center'>
                <Icons.CheckCircle2 className='w-6 h-6 text-white' />
              </div>
              <div>
                <h3 className='font-semibold text-gray-900 dark:text-white'>Hỗ trợ 24/7</h3>
                <p className='text-sm text-gray-600 dark:text-gray-300'>Luôn sẵn sàng giúp đỡ bạn</p>
              </div>
            </div>
            <div className='flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center'>
                <Icons.GraduationCap className='w-6 h-6 text-white' />
              </div>
              <div>
                <h3 className='font-semibold text-gray-900 dark:text-white'>Chất lượng cao</h3>
                <p className='text-sm text-gray-600 dark:text-gray-300'>Đội ngũ chuyên gia giàu kinh nghiệm</p>
              </div>
            </div>
            <div className='flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm'>
              <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center'>
                <Icons.ArrowRight className='w-6 h-6 text-white' />
              </div>
              <div>
                <h3 className='font-semibold text-gray-900 dark:text-white'>Nhanh chóng</h3>
                <p className='text-sm text-gray-600 dark:text-gray-300'>Phản hồi và xử lý trong 30 phút</p>
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

        {/* Right side - Register Form */}
        <Card className='w-full max-w-md mx-auto shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl order-1 lg:order-2'>
          <CardHeader className='space-y-6 text-center pb-8'>
            {/* Logo */}
            <div className='flex items-center justify-center space-x-4'>
              <div className='relative'>
                <div className='w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 rounded-2xl flex items-center justify-center shadow-lg'>
                  <Icons.GraduationCap className='w-8 h-8 text-white' />
                </div>
                <div className='absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse'></div>
              </div>
            </div>

            <div className='space-y-2'>
              <CardTitle className='text-3xl font-bold bg-gradient-to-r from-gray-900 to-green-900 dark:from-white dark:to-green-300 bg-clip-text text-transparent'>
                Đăng ký
              </CardTitle>
              <p className='text-gray-600 dark:text-gray-300'>Tạo tài khoản để bắt đầu hành trình học tập</p>
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

            {/* Register Form */}
            <form onSubmit={handleRegister} className='space-y-4'>
              {/* Email */}
              <div className='space-y-2'>
                <Label htmlFor='email' className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                  Email
                </Label>
                <div className='relative'>
                  <Icons.Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='example@duytan.edu.vn'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='pl-10 h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-400 rounded-xl'
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className='space-y-2'>
                <Label htmlFor='password' className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                  Mật khẩu
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
                    className='pl-10 pr-10 h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-400 rounded-xl'
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
                    className='pl-10 pr-10 h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-400 rounded-xl'
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

              {/* Terms & Conditions */}
              <div className='flex items-start space-x-2'>
                <input
                  type='checkbox'
                  id='acceptTerms'
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className='w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-1'
                />
                <label htmlFor='acceptTerms' className='text-sm text-gray-600 dark:text-gray-300'>
                  Tôi đồng ý với{' '}
                  <Link
                    href='/terms'
                    className='text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium'
                  >
                    Điều khoản sử dụng
                  </Link>{' '}
                  và{' '}
                  <Link
                    href='/privacy'
                    className='text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium'
                  >
                    Chính sách bảo mật
                  </Link>
                </label>
              </div>

              <Button
                type='submit'
                disabled={isLoading}
                className='w-full h-12 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 dark:from-green-500 dark:to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl'
              >
                {isLoading ? (
                  <div className='flex items-center space-x-2'>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    <span>Đang đăng ký...</span>
                  </div>
                ) : (
                  <div className='flex items-center space-x-2'>
                    <span>Đăng ký</span>
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
                <span className='px-2 bg-white dark:bg-gray-800 text-gray-500'>Hoặc đăng ký bằng</span>
              </div>
            </div>

            {/* Social Register */}
            <div className='grid grid-cols-3 gap-3'>
              <Button
                type='button'
                variant='outline'
                onClick={() => handleSocialRegister('Google')}
                className='h-12 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl'
              >
                <Icons.Chrome className='w-5 h-5 text-red-500' />
              </Button>
              <Button
                type='button'
                variant='outline'
                onClick={() => handleSocialRegister('Facebook')}
                className='h-12 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl'
              >
                <Icons.Facebook className='w-5 h-5 text-blue-600' />
              </Button>
              <Button
                type='button'
                variant='outline'
                onClick={() => handleSocialRegister('GitHub')}
                className='h-12 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl'
              >
                <Icons.Github className='w-5 h-5 text-gray-900 dark:text-white' />
              </Button>
            </div>

            {/* Login Link */}
            <div className='text-center pt-4'>
              <p className='text-sm text-gray-600 dark:text-gray-300'>
                Đã có tài khoản?{' '}
                <Link
                  href='/login'
                  className='text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium'
                >
                  Đăng nhập ngay
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
