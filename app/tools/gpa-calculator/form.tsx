'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Icons } from '@/components/icons/icon'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import TargetCalculator from '@/components/core/gpa-calculator/target-calculator'
import DetailedCalculator from '@/components/core/gpa-calculator/detailed-calculator'
import PhysicalEducationCalculator from '@/components/core/gpa-calculator/physical-education-calculator'
import { PassingGradeCalculator } from '@/components/core/gpa-calculator/passing-grade-calculator'
import { PassingGradeResultDisplay } from '@/components/core/gpa-calculator/passing-grade-result'

import AIQuestion from '@/components/core/gpa-calculator/ai-question'
import ResultDisplay from '@/components/core/gpa-calculator/result-display'
import { GPAResult, DetailedGPAResult, PhysicalEducationResult, PassingGradeResult } from '@/types/gpa-calculator'

export default function GPACalculatorForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [calculatorTarget, setCalculatorTarget] = useState<GPAResult | null>(null)
  const [calculatorDetailed, setCalculatorDetailed] = useState<DetailedGPAResult | null>(null)
  const [calculatorPhysicalEducation, setCalculatorPhysicalEducation] = useState<PhysicalEducationResult | null>(null)
  const [passingGradeResult, setPassingGradeResult] = useState<PassingGradeResult | null>(null)

  const getInitialTab = () => {
    const tab = searchParams.get('tab')
    const validTabs = ['form', 'detailed', 'physical', 'passing', 'question']
    return tab && validTabs.includes(tab) ? tab : 'form'
  }

  const [activeTab, setActiveTab] = useState('form')

  const handleTabChange = (value: string) => {
    if (value !== activeTab) {
      setCalculatorTarget(null)
      setCalculatorDetailed(null)
      setCalculatorPhysicalEducation(null)
      setPassingGradeResult(null)
      setActiveTab(value)

      const newSearchParams = new URLSearchParams(searchParams.toString())
      newSearchParams.set('tab', value)
      router.push(`?${newSearchParams.toString()}`, { scroll: false })
    }
  }

  // Set initial tab from URL on mount
  useEffect(() => {
    const initialTab = getInitialTab()
    setActiveTab(initialTab)
  }, [])

  // Sync state with URL changes
  useEffect(() => {
    const currentTab = getInitialTab()
    if (currentTab !== activeTab) {
      setActiveTab(currentTab)
      setCalculatorTarget(null)
      setCalculatorDetailed(null)
      setCalculatorPhysicalEducation(null)
      setPassingGradeResult(null)
    }
  }, [searchParams])

  return (
    <div className='max-w-6xl mx-auto space-y-6 sm:space-y-8 py-8 sm:py-12 px-4 sm:px-6'>
      <div className='text-center space-y-3 sm:space-y-4'>
        <div className='inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium'>
          <Icons.Calculator className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2' />
          Công cụ tính GPA thông minh
        </div>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
          <span className='bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent'>
            Tính toán GPA
          </span>
          <br />
          <span className='bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
            & Dự đoán kết quả
          </span>
        </h1>
        <p className='text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0'>
          Dự đoán kết quả học tập, tính toán GPA chi tiết hoặc hỏi AI để có lời khuyên thông minh về việc học
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className='w-full'>
        <div className='mb-6 sm:mb-8 overflow-x-auto'>
          <TabsList className='flex w-max min-w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-2 gap-1'>
            <TabsTrigger
              value='form'
              className='data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-500 flex-shrink-0 px-3 py-2 text-sm'
            >
              <Icons.Target className='w-4 h-4 mr-2' />
              <span className='whitespace-nowrap'>Tính toán mục tiêu</span>
            </TabsTrigger>
            <TabsTrigger
              value='detailed'
              className='data-[state=active]:bg-green-600 data-[state=active]:text-white dark:data-[state=active]:bg-green-500 flex-shrink-0 px-3 py-2 text-sm'
            >
              <Icons.Calculator className='w-4 h-4 mr-2' />
              <span className='whitespace-nowrap'>Tính toán GPA</span>
            </TabsTrigger>
            <TabsTrigger
              value='physical'
              className='data-[state=active]:bg-orange-600 data-[state=active]:text-white dark:data-[state=active]:bg-orange-500 flex-shrink-0 px-3 py-2 text-sm'
            >
              <Icons.Activity className='w-4 h-4 mr-2' />
              <span className='whitespace-nowrap'>GPA thể dục</span>
            </TabsTrigger>
            <TabsTrigger
              value='passing'
              className='data-[state=active]:bg-red-600 data-[state=active]:text-white dark:data-[state=active]:bg-red-500 flex-shrink-0 px-3 py-2 text-sm'
            >
              <Icons.Target className='w-4 h-4 mr-2' />
              <span className='whitespace-nowrap'>Tính điểm qua môn</span>
            </TabsTrigger>
            <TabsTrigger
              value='question'
              className='data-[state=active]:bg-purple-600 data-[state=active]:text-white dark:data-[state=active]:bg-purple-500 flex-shrink-0 px-3 py-2 text-sm'
            >
              <Icons.Brain className='w-4 h-4 mr-2' />
              <span className='whitespace-nowrap'>Hỏi AI</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <div className='grid xl:grid-cols-2 gap-6 lg:gap-8'>
          <div className='space-y-4 sm:space-y-6'>
            <TabsContent value='form' className='mt-0'>
              <TargetCalculator onResultChange={setCalculatorTarget} />
            </TabsContent>

            <TabsContent value='detailed' className='mt-0'>
              <DetailedCalculator onResultChange={setCalculatorDetailed} />
            </TabsContent>

            <TabsContent value='physical' className='mt-0'>
              <PhysicalEducationCalculator onResultChange={setCalculatorPhysicalEducation} />
            </TabsContent>

            <TabsContent value='passing' className='mt-0'>
              <PassingGradeCalculator onResult={setPassingGradeResult} />
            </TabsContent>

            <TabsContent value='question' className='mt-0'>
              <AIQuestion />
            </TabsContent>
          </div>

          <div className='space-y-4 sm:space-y-6'>
            {activeTab === 'passing' && passingGradeResult ? (
              <PassingGradeResultDisplay result={passingGradeResult} />
            ) : (
              <ResultDisplay
                result={activeTab === 'form' ? calculatorTarget : null}
                detailedResult={activeTab === 'detailed' ? calculatorDetailed : null}
                physicalEducationResult={activeTab === 'physical' ? calculatorPhysicalEducation : null}
              />
            )}
          </div>
        </div>
      </Tabs>

      <Card className='shadow-xl border-0 bg-white dark:bg-gray-800'>
        <CardHeader className='pb-3 sm:pb-4'>
          <CardTitle className='flex items-center text-lg sm:text-xl font-bold text-gray-900 dark:text-white'>
            <Icons.Award className='w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-indigo-600' />
            Xếp loại tốt nghiệp Duy Tân
          </CardTitle>
        </CardHeader>
        <CardContent className='pt-0'>
          <div className='grid sm:grid-cols-2 gap-3 sm:gap-4 text-sm'>
            <div className='space-y-2 sm:space-y-3'>
              <div className='flex items-center justify-between p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700'>
                <span className='font-semibold text-purple-700 dark:text-purple-300 text-xs sm:text-sm'>Xuất sắc</span>
                <span className='font-bold text-purple-600 dark:text-purple-400 text-xs sm:text-sm'>3.60 - 4.00</span>
              </div>
              <div className='flex items-center justify-between p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700'>
                <span className='font-semibold text-blue-700 dark:text-blue-300 text-xs sm:text-sm'>Giỏi</span>
                <span className='font-bold text-blue-600 dark:text-blue-400 text-xs sm:text-sm'>3.20 - 3.59</span>
              </div>
            </div>
            <div className='space-y-2 sm:space-y-3'>
              <div className='flex items-center justify-between p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700'>
                <span className='font-semibold text-green-700 dark:text-green-300 text-xs sm:text-sm'>Khá</span>
                <span className='font-bold text-green-600 dark:text-green-400 text-xs sm:text-sm'>2.50 - 3.19</span>
              </div>
              <div className='flex items-center justify-between p-2 sm:p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700'>
                <span className='font-semibold text-yellow-700 dark:text-yellow-300 text-xs sm:text-sm'>
                  Trung bình
                </span>
                <span className='font-bold text-yellow-600 dark:text-yellow-400 text-xs sm:text-sm'>2.00 - 2.49</span>
              </div>
            </div>
          </div>
          <div className='mt-3 sm:mt-4 p-2 sm:p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700'>
            <div className='flex items-start space-x-2'>
              <Icons.Lightbulb className='w-3 h-3 sm:w-4 sm:h-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0' />
              <p className='text-xs text-orange-800 dark:text-orange-200'>
                <strong>Lưu ý:</strong> Hạng tốt nghiệp có thể bị giảm nếu có {'>'}5% tín chỉ học lại hoặc bị kỷ luật.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className='shadow-xl border-0 bg-white dark:bg-gray-800'>
        <CardHeader>
          <CardTitle className='flex items-center text-lg sm:text-xl font-bold text-gray-900 dark:text-white'>
            <Icons.BookOpen className='w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-indigo-600' />
            Thang điểm Duy Tân (tham khảo)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='overflow-x-auto'>
            <table className='w-full text-xs sm:text-sm min-w-[600px]'>
              <thead>
                <tr className='border-b border-gray-200 dark:border-gray-600'>
                  <th className='text-left py-2 sm:py-3 px-2 font-semibold text-gray-900 dark:text-white whitespace-nowrap'>
                    Xếp loại
                  </th>
                  <th className='text-center py-2 sm:py-3 px-2 font-semibold text-gray-900 dark:text-white whitespace-nowrap'>
                    Thang điểm 10
                  </th>
                  <th className='text-center py-2 sm:py-3 px-2 font-semibold text-gray-900 dark:text-white whitespace-nowrap'>
                    Điểm chữ
                  </th>
                  <th className='text-center py-2 sm:py-3 px-2 font-semibold text-gray-900 dark:text-white whitespace-nowrap'>
                    Thang điểm 4
                  </th>
                  <th className='text-center py-2 sm:py-3 px-2 font-semibold text-gray-900 dark:text-white whitespace-nowrap'>
                    Trạng thái
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100 dark:divide-gray-700 [&_td]:py-2 sm:[&_td]:py-3 [&_td]:px-2 [&_span]:px-1.5 sm:[&_span]:px-2 [&_span]:py-0.5 sm:[&_span]:py-1'>
                <tr className='hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors'>
                  <td className='font-medium text-purple-700 dark:text-purple-300'>Giỏi</td>
                  <td className='text-center text-gray-600 dark:text-gray-400'>9.5 - 10.0</td>
                  <td className='text-center font-bold text-purple-600 dark:text-purple-400'>A+</td>
                  <td className='text-center font-bold text-purple-600 dark:text-purple-400'>4.0</td>
                  <td className='text-center'>
                    <span className='inline-flex items-center rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'>
                      Đạt
                    </span>
                  </td>
                </tr>
                <tr className='hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors'>
                  <td className='font-medium text-purple-700 dark:text-purple-300'></td>
                  <td className='text-center text-gray-600 dark:text-gray-400'>8.5 - 9.4</td>
                  <td className='text-center font-bold text-purple-600 dark:text-purple-400'>A</td>
                  <td className='text-center font-bold text-purple-600 dark:text-purple-400'>4.0</td>
                  <td className='text-center'>
                    <span className='inline-flex items-center rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'>
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

          <div className='mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700'>
            <div className='flex items-start space-x-2 sm:space-x-3'>
              <Icons.Lightbulb className='w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0' />
              <div className='text-xs sm:text-sm text-blue-800 dark:text-blue-200'>
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
