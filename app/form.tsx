'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PricingTable } from '@/components/core/DuyTanITSupport/pricing-table'
import { HeroSection } from '@/components/core/DuyTanITSupport/hero-section'
import { ServicesSection } from '@/components/core/DuyTanITSupport/services-section'
import {
  Code2,
  Database,
  Brain,
  Server,
  Settings,
  GraduationCap,
  BookOpen,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  CheckCircle,
  Award,
  HeadphonesIcon,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { faqData, testimonials, features } from '@/seeds/content'

import { Navigation } from '@/components/core/DuyTanITSupport/navigation'
import { FloatingContact } from '@/components/core/DuyTanITSupport/floating-contact'
import { TestimonialCard } from '@/components/core/DuyTanITSupport/testimonial-card'
import {
  programmingSubjects,
  systemSubjects,
  databaseSubjects,
  algorithmSubjects,
  softwareSubjects,
  projectSubjects,
  essaySubjects,
  presentationSubjects
} from '../seeds/subject'

export default function DuyTanITSupport() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300'>
      {/* Floating Contact Button */}
      <FloatingContact />

      {/* Header */}
      <Navigation />

      <HeroSection />
      <ServicesSection />

      {/* Detailed Pricing Tables */}
      <section
        id='pricing'
        className='py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300'
      >
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-300 bg-clip-text text-transparent'>
                Bảng giá chi tiết
              </span>
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Giá cả minh bạch, hợp lý cho từng môn học. Cọc trước 25% để bắt đầu dự án
            </p>
          </div>

          <Tabs defaultValue='programming' className='w-full'>
            <TabsList className='grid w-full grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 mb-12 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-2'>
              <TabsTrigger
                value='programming'
                className='data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-500'
              >
                <Code2 className='w-4 h-4 mr-2' />
                Lập trình
              </TabsTrigger>
              <TabsTrigger
                value='system'
                className='data-[state=active]:bg-green-600 data-[state=active]:text-white dark:data-[state=active]:bg-green-500'
              >
                <Server className='w-4 h-4 mr-2' />
                Hệ thống
              </TabsTrigger>
              <TabsTrigger
                value='database'
                className='data-[state=active]:bg-purple-600 data-[state=active]:text-white dark:data-[state=active]:bg-purple-500'
              >
                <Database className='w-4 h-4 mr-2' />
                CSDL
              </TabsTrigger>
              <TabsTrigger
                value='ai'
                className='data-[state=active]:bg-orange-600 data-[state=active]:text-white dark:data-[state=active]:bg-orange-500'
              >
                <Brain className='w-4 h-4 mr-2' />
                AI
              </TabsTrigger>
              <TabsTrigger
                value='software'
                className='data-[state=active]:bg-red-600 data-[state=active]:text-white dark:data-[state=active]:bg-red-500'
              >
                <Settings className='w-4 h-4 mr-2' />
                Phần mềm
              </TabsTrigger>
              <TabsTrigger
                value='projects'
                className='data-[state=active]:bg-indigo-600 data-[state=active]:text-white dark:data-[state=active]:bg-indigo-500'
              >
                <GraduationCap className='w-4 h-4 mr-2' />
                Đồ án
              </TabsTrigger>
              <TabsTrigger
                value='essays'
                className='data-[state=active]:bg-teal-600 data-[state=active]:text-white dark:data-[state=active]:bg-teal-500'
              >
                <BookOpen className='w-4 h-4 mr-2' />
                Tiểu luận
              </TabsTrigger>
              <TabsTrigger
                value='presentations'
                className='data-[state=active]:bg-pink-600 data-[state=active]:text-white dark:data-[state=active]:bg-pink-500'
              >
                <Settings className='w-4 h-4 mr-2' />
                Slide & Design
              </TabsTrigger>
            </TabsList>

            <TabsContent value='programming'>
              <PricingTable
                title='Các môn lập trình cốt lõi'
                description='Hỗ trợ các ngôn ngữ lập trình từ cơ bản đến nâng cao'
                subjects={programmingSubjects}
                icon={Code2}
                color='blue'
              />
            </TabsContent>

            <TabsContent value='system'>
              <PricingTable
                title='Các môn công nghệ & hệ thống'
                description='Hệ điều hành, mạng máy tính, hệ phân tán'
                subjects={systemSubjects}
                icon={Server}
                color='green'
              />
            </TabsContent>

            <TabsContent value='database'>
              <PricingTable
                title='Các môn cơ sở dữ liệu'
                description='Thiết kế và quản trị cơ sở dữ liệu'
                subjects={databaseSubjects}
                icon={Database}
                color='purple'
              />
            </TabsContent>

            <TabsContent value='ai'>
              <PricingTable
                title='Các môn thuật toán & AI'
                description='Cấu trúc dữ liệu, giải thuật và trí tuệ nhân tạo'
                subjects={algorithmSubjects}
                icon={Brain}
                color='orange'
              />
            </TabsContent>

            <TabsContent value='software'>
              <PricingTable
                title='Các môn phát triển phần mềm'
                description='Phân tích, thiết kế và kiểm thử phần mềm'
                subjects={softwareSubjects}
                icon={Settings}
                color='red'
              />
            </TabsContent>

            <TabsContent value='projects'>
              <PricingTable
                title='Các đồ án CDIO & tốt nghiệp'
                description='Đồ án lớn, khóa luận tốt nghiệp và dự án chuyên ngành'
                subjects={projectSubjects}
                icon={GraduationCap}
                color='indigo'
              />
            </TabsContent>

            <TabsContent value='essays'>
              <PricingTable
                title='Các môn tiểu luận & báo cáo'
                description='Tư tưởng chính trị, lịch sử và tin học ứng dụng'
                subjects={essaySubjects}
                icon={BookOpen}
                color='teal'
              />
            </TabsContent>

            <TabsContent value='presentations'>
              <PricingTable
                title='Dịch vụ slide & thiết kế'
                description='Slide thuyết trình, báo cáo Word, Excel và thiết kế đồ họa'
                subjects={presentationSubjects}
                icon={Settings}
                color='pink'
              />
            </TabsContent>
          </Tabs>

          {/* Pricing Notes */}
          <div className='mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg'>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center'>
              💡 Thông tin thanh toán
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <CheckCircle className='w-8 h-8 text-white' />
                </div>
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>Cọc 25%</h4>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>Thanh toán trước 25% để bắt đầu dự án</p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <Settings className='w-8 h-8 text-white' />
                </div>
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>Setup miễn phí</h4>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>Hỗ trợ cài đặt môi trường, tools</p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <BookOpen className='w-8 h-8 text-white' />
                </div>
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>Giảng giải</h4>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>Hướng dẫn chi tiết logic và cách làm</p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <Clock className='w-8 h-8 text-white' />
                </div>
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>Đúng deadline</h4>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>Hoàn thành đúng thời gian cam kết</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id='about' className='py-24 bg-white dark:bg-gray-900 transition-colors duration-300'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-300 bg-clip-text text-transparent'>
                Tại sao chọn chúng mình?
              </span>
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Với kinh nghiệm và sự tận tâm, chúng mình cam kết mang đến dịch vụ tốt nhất cho sinh viên Duy Tân
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-12'>
            {features.map((feature, index) => (
              <div key={index} className='text-center group'>
                <div
                  className={`w-24 h-24 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 dark:from-${feature.color}-400 dark:to-${feature.color}-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                >
                  {index === 0 && <Award className='w-12 h-12 text-white' />}
                  {index === 1 && <GraduationCap className='w-12 h-12 text-white' />}
                  {index === 2 && <HeadphonesIcon className='w-12 h-12 text-white' />}
                </div>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>{feature.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-300 bg-clip-text text-transparent'>
                Sinh viên nói gì về chúng mình
              </span>
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Những phản hồi chân thực từ các bạn sinh viên đã tin tưởng và sử dụng dịch vụ
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-white dark:bg-gray-900 transition-colors duration-300'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-300 bg-clip-text text-transparent'>
                Câu hỏi thường gặp
              </span>
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Những thắc mắc phổ biến về dịch vụ hỗ trợ đồ án của chúng mình
            </p>
          </div>

          <div className='max-w-4xl mx-auto space-y-6'>
            {faqData.map((faq, index) => (
              <Card
                key={index}
                className='cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800'
                onClick={() => toggleFaq(index)}
              >
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-4'>
                  <CardTitle className='text-lg font-semibold text-gray-900 dark:text-white pr-4'>
                    {faq.question}
                  </CardTitle>
                  <div className='flex-shrink-0'>
                    {openFaq === index ? (
                      <ChevronUp className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                    ) : (
                      <ChevronDown className='w-6 h-6 text-gray-400 dark:text-gray-500' />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className='pt-0'>
                    <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section
        id='contact'
        className='py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 dark:from-blue-800 dark:via-blue-900 dark:to-purple-900 text-white relative overflow-hidden'
      >
        <div className='absolute inset-0 bg-black/20 dark:bg-black/40'></div>
        <div className='container mx-auto px-6 relative'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold mb-6'>Sẵn sàng bắt đầu dự án của bạn? 🚀</h2>
            <p className='text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto leading-relaxed'>
              Đừng để deadline làm bạn căng thẳng nữa. Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết!
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center'>
            <div className='space-y-8'>
              <div className='space-y-6'>
                <h3 className='text-3xl font-bold'>Liên hệ qua Facebook</h3>
                <p className='text-blue-100 dark:text-blue-200 text-lg leading-relaxed'>
                  Tham gia cộng đồng Hỗ Trợ Đồ Án CNTT Duy Tân để được hỗ trợ nhanh nhất và cập nhật thông tin mới nhất!
                </p>
                <div className='space-y-4'>
                  <Link
                    href='https://www.facebook.com/profile.php?id=61577172849172'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button className='bg-white text-blue-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
                      <Facebook className='mr-3 w-6 h-6' />
                      Ghé thăm trang Facebook
                      <ArrowRight className='ml-3 w-5 h-5' />
                    </Button>
                  </Link>
                  <Link href='https://m.me/61577172849172' target='_blank' rel='noopener noreferrer'>
                    <Button className='bg-green-600 hover:bg-green-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
                      <MessageCircle className='mr-3 w-6 h-6' />
                      Chat qua Messenger
                      <ArrowRight className='ml-3 w-5 h-5' />
                    </Button>
                  </Link>
                </div>
                <p className='text-sm text-blue-200 dark:text-blue-300'>
                  ⚡ Phản hồi nhanh nhất qua Messenger • 🕐 Online 24/7 • 💬 Tư vấn miễn phí
                </p>
              </div>
            </div>

            <div className='flex items-center justify-center'>
              <Link
                href='https://www.facebook.com/profile.php?id=61577172849172'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='relative group'>
                  <Image
                    src='/images/hire-it-project-logo.jpeg'
                    alt='Hire IT Project Facebook Page'
                    width={500}
                    height={350}
                    className='rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl'></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                    href='#'
                    className='hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block'
                  >
                    Slide & Thiết kế
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
  )
}
