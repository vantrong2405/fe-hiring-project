'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Calculator,
  GraduationCap,
  Brain,
  Calendar,
  TrendingUp,
  BookOpen,
  ArrowRight,
  Sparkles,
  Target,
  Clock,
  Award,
  Lightbulb
} from 'lucide-react'
import Link from 'next/link'

const tools = [
  {
    id: 1,
    title: 'Hỗ trợ học tập & tính toán GPA',
    description: 'Công cụ toàn diện giúp bạn quản lý và tối ưu hóa kết quả học tập',
    icon: Calculator,
    color: 'blue',
    features: [
      'Tính điểm trung bình tích lũy (GPA) chính xác',
      'Phân loại học lực: Giỏi/Khá/Trung bình/Yếu',
      'Dự đoán học lực với số tín chỉ còn lại',
      'Đưa ra lời khuyên học phần cần ưu tiên',
      'Theo dõi tiến độ học tập theo từng kỳ'
    ],
    comingSoon: false
  },
  {
    id: 2,
    title: 'Đăng ký tín chỉ & đề xuất lịch học',
    description: 'Hỗ trợ thông minh trong việc lập kế hoạch học tập và sắp xếp thời khóa biểu',
    icon: Calendar,
    color: 'green',
    features: [
      'Gợi ý học phần phù hợp theo chuyên ngành',
      'Tự động xếp thời khóa biểu tối ưu',
      'Kiểm tra điều kiện tiên quyết',
      'Tránh xung đột lịch học và thi',
      'Dự báo khối lượng học tập mỗi kỳ'
    ],
    comingSoon: true
  }
]

export default function ToolsPage() {
  return (
    <div className='py-12 px-6'>
      <section className='py-16'>
        <div className='container mx-auto px-6'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-6'>
              <Sparkles className='w-4 h-4 mr-2' />
              Công cụ hỗ trợ học tập thông minh
            </div>

            <h1 className='text-5xl lg:text-6xl font-bold leading-tight mb-6'>
              <span className='bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent'>
                Công cụ hỗ trợ
              </span>
              <br />
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
                sinh viên thông minh
              </span>
            </h1>

            <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8'>
              Bộ công cụ được thiết kế đặc biệt để hỗ trợ sinh viên Duy Tân trong việc quản lý học tập, tính toán điểm
              số và lập kế hoạch học tập hiệu quả nhất.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'
              >
                <Target className='w-5 h-5 mr-2' />
                Khám phá ngay
                <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
              <Link href='/'>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                >
                  <ArrowRight className='w-5 h-5 mr-2 rotate-180' />
                  Quay lại trang chủ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-300 bg-clip-text text-transparent'>
                Công cụ hỗ trợ
              </span>
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Các công cụ được phát triển riêng cho sinh viên, giúp tối ưu hóa quá trình học tập và đạt kết quả cao nhất
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {tools.map((tool) => (
              <Card
                key={tool.id}
                className='group shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white dark:bg-gray-800 relative overflow-hidden'
              >
                {tool.comingSoon && (
                  <div className='absolute top-4 right-4 z-10'>
                    <span className='bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full'>
                      Coming Soon
                    </span>
                  </div>
                )}

                <CardHeader className='space-y-6 pb-6'>
                  <div className='flex items-center space-x-4'>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${
                        tool.color === 'blue'
                          ? 'from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500'
                          : 'from-green-500 to-green-600 dark:from-green-400 dark:to-green-500'
                      } rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <tool.icon className='w-8 h-8 text-white' />
                    </div>
                    <div className='flex-1'>
                      <CardTitle className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                        {tool.title}
                      </CardTitle>
                      <p className='text-gray-600 dark:text-gray-300'>{tool.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className='space-y-6'>
                  <div className='space-y-3'>
                    <h4 className='font-semibold text-gray-900 dark:text-white flex items-center'>
                      <Lightbulb className='w-4 h-4 mr-2 text-yellow-500' />
                      Tính năng chính:
                    </h4>
                    <ul className='space-y-2'>
                      {tool.features.map((feature, index) => (
                        <li key={index} className='flex items-start space-x-3'>
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${
                              tool.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                            }`}
                          ></div>
                          <span className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
                    {tool.comingSoon ? (
                      <Button disabled className='w-full bg-gray-300 text-gray-500 cursor-not-allowed'>
                        <Clock className='w-4 h-4 mr-2' />
                        Đang phát triển
                      </Button>
                    ) : (
                      <Link href='/tools/gpa-calculator'>
                        <Button
                          className={`w-full bg-gradient-to-r ${
                            tool.color === 'blue'
                              ? 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                              : 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
                          } text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                        >
                          <ArrowRight className='w-4 h-4 mr-2' />
                          Sử dụng ngay
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-300 bg-clip-text text-transparent'>
                Tại sao nên sử dụng?
              </span>
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Những lợi ích thiết thực mà công cụ mang lại cho việc học tập của bạn
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                icon: TrendingUp,
                title: 'Tối ưu hóa kết quả',
                description: 'Giúp bạn đạt GPA cao hơn thông qua lập kế hoạch học tập khoa học',
                color: 'blue'
              },
              {
                icon: Clock,
                title: 'Tiết kiệm thời gian',
                description: 'Tự động hóa các tính toán phức tạp, giảm thời gian làm việc thủ công',
                color: 'green'
              },
              {
                icon: Brain,
                title: 'Quyết định thông minh',
                description: 'Dựa trên dữ liệu để đưa ra những lựa chọn học tập tốt nhất',
                color: 'purple'
              },
              {
                icon: Target,
                title: 'Mục tiêu rõ ràng',
                description: 'Xác định mục tiêu cụ thể và lộ trình để đạt được chúng',
                color: 'orange'
              },
              {
                icon: Award,
                title: 'Kết quả xuất sắc',
                description: 'Hỗ trợ đạt học bổng, bằng khen và các thành tích học tập',
                color: 'red'
              },
              {
                icon: BookOpen,
                title: 'Học tập hiệu quả',
                description: 'Tối ưu thời gian biểu, cân bằng giữa học tập và nghỉ ngơi',
                color: 'indigo'
              }
            ].map((benefit, index) => (
              <div key={index} className='text-center group'>
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${
                    benefit.color === 'blue'
                      ? 'from-blue-500 to-blue-600'
                      : benefit.color === 'green'
                        ? 'from-green-500 to-green-600'
                        : benefit.color === 'purple'
                          ? 'from-purple-500 to-purple-600'
                          : benefit.color === 'orange'
                            ? 'from-orange-500 to-orange-600'
                            : benefit.color === 'red'
                              ? 'from-red-500 to-red-600'
                              : 'from-indigo-500 to-indigo-600'
                  } rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                >
                  <benefit.icon className='w-10 h-10 text-white' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>{benefit.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 dark:from-blue-800 dark:via-blue-900 dark:to-purple-900 text-white rounded-xl mx-6 mb-8'>
        <div className='container mx-auto px-6'>
          <div className='text-center max-w-4xl mx-auto'>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>Sẵn sàng trải nghiệm? 🚀</h2>
            <p className='text-xl text-blue-100 dark:text-blue-200 mb-8 leading-relaxed'>
              Bắt đầu sử dụng công cụ ngay hôm nay để tối ưu hóa quá trình học tập và đạt được những mục tiêu académic
              mong muốn!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/tools/gpa-calculator'>
                <Button className='bg-white text-blue-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
                  <Calculator className='w-5 h-5 mr-2' />
                  Tính toán GPA ngay
                  <ArrowRight className='ml-2 w-5 h-5' />
                </Button>
              </Link>
              <Link href='/'>
                <Button variant='outline' className='border-white text-gray-700 hover:bg-white/10'>
                  Tìm hiểu thêm dịch vụ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
