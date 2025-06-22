'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Icons } from '@/components/icons/icon'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import TargetCalculator from '@/components/core/gpa-calculator/target-calculator'
import DetailedCalculator from '@/components/core/gpa-calculator/detailed-calculator'
import AIQuestion from '@/components/core/gpa-calculator/ai-question'
import ResultDisplay from '@/components/core/gpa-calculator/result-display'
import { GPAResult } from '@/types'

export default function GPACalculatorForm() {
  const [calculatorTarget, setCalculatorTarget] = useState<GPAResult | null>(null)

  return (
    <div className='max-w-6xl mx-auto space-y-8 py-12 px-6'>
      <div className='text-center space-y-4'>
        <div className='inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium'>
          <Icons.Calculator className='w-4 h-4 mr-2' />
          Công cụ tính GPA thông minh
        </div>
        <h1 className='text-4xl lg:text-5xl font-bold'>
          <span className='bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent'>
            Tính toán GPA
          </span>
          <br />
          <span className='bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
            & Dự đoán kết quả
          </span>
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
          Dự đoán kết quả học tập, tính toán GPA chi tiết hoặc hỏi AI để có lời khuyên thông minh về việc học
        </p>
      </div>

      <Tabs defaultValue='form' className='w-full'>
        <TabsList className='grid w-full grid-cols-3 mb-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-2'>
          <TabsTrigger
            value='form'
            className='data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-500'
          >
            <Icons.Target className='w-4 h-4 mr-2' />
            Tính toán mục tiêu
          </TabsTrigger>
          <TabsTrigger
            value='detailed'
            className='data-[state=active]:bg-green-600 data-[state=active]:text-white dark:data-[state=active]:bg-green-500'
          >
            <Icons.Calculator className='w-4 h-4 mr-2' />
            Tính toán GPA
          </TabsTrigger>
          <TabsTrigger
            value='question'
            className='data-[state=active]:bg-purple-600 data-[state=active]:text-white dark:data-[state=active]:bg-purple-500'
          >
            <Icons.Brain className='w-4 h-4 mr-2' />
            Hỏi AI
          </TabsTrigger>
        </TabsList>

        <div className='grid lg:grid-cols-2 gap-8'>
          <div className='space-y-6'>
            <TabsContent value='form' className='mt-0'>
              <TargetCalculator onResultChange={setCalculatorTarget} />
            </TabsContent>

            <TabsContent value='detailed' className='mt-0'>
              <DetailedCalculator />
            </TabsContent>

            <TabsContent value='question' className='mt-0'>
              <AIQuestion />
            </TabsContent>
          </div>

          <div className='space-y-6'>
            <ResultDisplay result={calculatorTarget} />
          </div>
        </div>
      </Tabs>

      <Card className='shadow-xl border-0 bg-white dark:bg-gray-800'>
        <CardHeader>
          <CardTitle className='flex items-center text-xl font-bold text-gray-900 dark:text-white'>
            <Icons.BookOpen className='w-5 h-5 mr-3 text-indigo-600' />
            Thang điểm Duy Tân (tham khảo)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b border-gray-200 dark:border-gray-600'>
                  <th className='text-left py-3 px-2 font-semibold text-gray-900 dark:text-white'>Xếp loại</th>
                  <th className='text-center py-3 px-2 font-semibold text-gray-900 dark:text-white'>Thang điểm 10</th>
                  <th className='text-center py-3 px-2 font-semibold text-gray-900 dark:text-white'>Điểm chữ</th>
                  <th className='text-center py-3 px-2 font-semibold text-gray-900 dark:text-white'>Thang điểm 4</th>
                  <th className='text-center py-3 px-2 font-semibold text-gray-900 dark:text-white'>Trạng thái</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100 dark:divide-gray-700'>
                <tr className='hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors'>
                  <td className='py-3 px-2 font-medium text-purple-700 dark:text-purple-300'>Giỏi</td>
                  <td className='py-3 px-2 text-center text-gray-600 dark:text-gray-400'>9.5 - 10.0</td>
                  <td className='py-3 px-2 text-center font-bold text-purple-600 dark:text-purple-400'>A+</td>
                  <td className='py-3 px-2 text-center font-bold text-purple-600 dark:text-purple-400'>4.0</td>
                  <td className='py-3 px-2 text-center'>
                    <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'>
                      Đạt
                    </span>
                  </td>
                </tr>
                <tr className='hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors'>
                  <td className='py-3 px-2 font-medium text-purple-700 dark:text-purple-300'></td>
                  <td className='py-3 px-2 text-center text-gray-600 dark:text-gray-400'>8.5 - 9.4</td>
                  <td className='py-3 px-2 text-center font-bold text-purple-600 dark:text-purple-400'>A</td>
                  <td className='py-3 px-2 text-center font-bold text-purple-600 dark:text-purple-400'>4.0</td>
                  <td className='py-3 px-2 text-center'>
                    <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'>
                      Đạt
                    </span>
                  </td>
                </tr>

                <tr className='hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors'>
                  <td className='py-3 px-2 font-medium text-blue-700 dark:text-blue-300'>Khá</td>
                  <td className='py-3 px-2 text-center text-gray-600 dark:text-gray-400'>8.0 - 8.4</td>
                  <td className='py-3 px-2 text-center font-bold text-blue-600 dark:text-blue-400'>A-</td>
                  <td className='py-3 px-2 text-center font-bold text-blue-600 dark:text-blue-400'>3.65</td>
                  <td className='py-3 px-2 text-center'>
                    <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'>
                      Đạt
                    </span>
                  </td>
                </tr>
                <tr className='hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors'>
                  <td className='py-3 px-2 font-medium text-blue-700 dark:text-blue-300'></td>
                  <td className='py-3 px-2 text-center text-gray-600 dark:text-gray-400'>7.5 - 7.9</td>
                  <td className='py-3 px-2 text-center font-bold text-blue-600 dark:text-blue-400'>B+</td>
                  <td className='py-3 px-2 text-center font-bold text-blue-600 dark:text-blue-400'>3.33</td>
                  <td className='py-3 px-2 text-center'>
                    <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'>
                      Đạt
                    </span>
                  </td>
                </tr>
                <tr className='hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors'>
                  <td className='py-3 px-2 font-medium text-blue-700 dark:text-blue-300'></td>
                  <td className='py-3 px-2 text-center text-gray-600 dark:text-gray-400'>7.0 - 7.4</td>
                  <td className='py-3 px-2 text-center font-bold text-blue-600 dark:text-blue-400'>B</td>
                  <td className='py-3 px-2 text-center font-bold text-blue-600 dark:text-blue-400'>3.0</td>
                  <td className='py-3 px-2 text-center'>
                    <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'>
                      Đạt
                    </span>
                  </td>
                </tr>

                <tr className='hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors'>
                  <td className='py-3 px-2 font-medium text-green-700 dark:text-green-300'>Trung bình</td>
                  <td className='py-3 px-2 text-center text-gray-600 dark:text-gray-400'>6.5 - 6.9</td>
                  <td className='py-3 px-2 text-center font-bold text-green-600 dark:text-green-400'>B-</td>
                  <td className='py-3 px-2 text-center font-bold text-green-600 dark:text-green-400'>2.65</td>
                  <td className='py-3 px-2 text-center'>
                    <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'>
                      Đạt
                    </span>
                  </td>
                </tr>
                <tr className='hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors'>
                  <td className='py-3 px-2 font-medium text-green-700 dark:text-green-300'></td>
                  <td className='py-3 px-2 text-center text-gray-600 dark:text-gray-400'>6.0 - 6.4</td>
                  <td className='py-3 px-2 text-center font-bold text-green-600 dark:text-green-400'>C+</td>
                  <td className='py-3 px-2 text-center font-bold text-green-600 dark:text-green-400'>2.33</td>
                  <td className='py-3 px-2 text-center'>
                    <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'>
                      Đạt
                    </span>
                  </td>
                </tr>
                <tr className='hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors'>
                  <td className='py-3 px-2 font-medium text-green-700 dark:text-green-300'></td>
                  <td className='py-3 px-2 text-center text-gray-600 dark:text-gray-400'>5.5 - 5.9</td>
                  <td className='py-3 px-2 text-center font-bold text-green-600 dark:text-green-400'>C</td>
                  <td className='py-3 px-2 text-center font-bold text-green-600 dark:text-green-400'>2.0</td>
                  <td className='py-3 px-2 text-center'>
                    <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'>
                      Đạt
                    </span>
                  </td>
                </tr>

                <tr className='hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors'>
                  <td className='py-3 px-2 font-medium text-yellow-700 dark:text-yellow-300'>Trung bình yếu</td>
                  <td className='py-3 px-2 text-center text-gray-600 dark:text-gray-400'>4.5 - 5.4</td>
                  <td className='py-3 px-2 text-center font-bold text-yellow-600 dark:text-yellow-400'>C-</td>
                  <td className='py-3 px-2 text-center font-bold text-yellow-600 dark:text-yellow-400'>1.65</td>
                  <td className='py-3 px-2 text-center'>
                    <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'>
                      Đạt
                    </span>
                  </td>
                </tr>

                <tr className='hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors'>
                  <td className='py-3 px-2 font-medium text-orange-700 dark:text-orange-300'>Không đạt</td>
                  <td className='py-3 px-2 text-center text-gray-600 dark:text-gray-400'>4.0 - 4.4</td>
                  <td className='py-3 px-2 text-center font-bold text-orange-600 dark:text-orange-400'>D</td>
                  <td className='py-3 px-2 text-center font-bold text-orange-600 dark:text-orange-400'>1.0</td>
                  <td className='py-3 px-2 text-center'>
                    <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'>
                      Có điều kiện
                    </span>
                  </td>
                </tr>

                <tr className='hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors'>
                  <td className='py-3 px-2 font-medium text-red-700 dark:text-red-300'>Kém</td>
                  <td className='py-3 px-2 text-center text-gray-600 dark:text-gray-400'>0.0 - 3.9</td>
                  <td className='py-3 px-2 text-center font-bold text-red-600 dark:text-red-400'>F</td>
                  <td className='py-3 px-2 text-center font-bold text-red-600 dark:text-red-400'>0.0</td>
                  <td className='py-3 px-2 text-center'>
                    <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'>
                      Không đạt
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700'>
            <div className='flex items-start space-x-3'>
              <Icons.Lightbulb className='w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0' />
              <div className='text-sm text-blue-800 dark:text-blue-200'>
                <p className='font-semibold mb-1'>Lưu ý quan trọng:</p>
                <ul className='space-y-1 list-disc list-inside'>
                  <li>Thang điểm 4 là thang điểm đánh giá chính thức để xét học vụ, tốt nghiệp và xếp hạng</li>
                  <li>Điểm D được xem là đạt có điều kiện, cần học cải thiện nếu quá 5% tổng tín chỉ</li>
                  <li>Điểm F không được tích lũy, bắt buộc phải học lại</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
