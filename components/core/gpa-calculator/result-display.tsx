'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/icons/icon'
import { GPAResult, DetailedGPAResult, PhysicalEducationResult } from '@/types/gpa-calculator'

interface ResultDisplayProps {
  result: GPAResult | null
  detailedResult?: DetailedGPAResult | null
  physicalEducationResult?: PhysicalEducationResult | null
}

export default function ResultDisplay({ result, detailedResult, physicalEducationResult }: ResultDisplayProps) {
  const activeResult = physicalEducationResult || detailedResult || result

  if (!activeResult) {
    return (
      <Card className='shadow-xl border-0 bg-gray-50 dark:bg-gray-800'>
        <CardContent className='text-center py-16'>
          <Icons.Calculator className='w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4' />
          <h3 className='text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2'>Sẵn sàng tính toán</h3>
          <p className='text-gray-500 dark:text-gray-500'>Nhập thông tin hoặc đặt câu hỏi để xem kết quả dự đoán</p>
        </CardContent>
      </Card>
    )
  }

  if (physicalEducationResult) {
    return (
      <Card
        className={`shadow-xl border-0 ${
          physicalEducationResult.color === 'green'
            ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
            : 'bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20'
        }`}
      >
        <CardHeader>
          <CardTitle className='flex items-center text-2xl font-bold text-gray-900 dark:text-white'>
            Kết quả GPA thể dục
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
            <div className='text-6xl mb-4'>{physicalEducationResult.icon}</div>
            <div
              className={`text-4xl font-bold mb-2 ${
                physicalEducationResult.color === 'green'
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {physicalEducationResult.message}
            </div>
          </div>

          <div className='p-4 bg-white dark:bg-gray-800 rounded-lg'>
            <div className='text-center'>
              <span className='text-sm text-gray-600 dark:text-gray-400'>GPA trung bình thể dục</span>
              <div
                className={`text-4xl font-bold ${
                  physicalEducationResult.averageGPA >= 2.0
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {physicalEducationResult.averageGPA}
              </div>
              <span
                className={`text-lg font-semibold ${
                  physicalEducationResult.isPass
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {physicalEducationResult.isPass ? 'ĐẬU' : 'RỚT'}
              </span>
            </div>
          </div>

          <div className='grid grid-cols-3 gap-3'>
            <div className='p-3 bg-white dark:bg-gray-800 rounded-lg text-center'>
              <span className='text-xs text-gray-600 dark:text-gray-400'>Môn 1</span>
              <div className='text-xl font-bold text-blue-600 dark:text-blue-400'>
                {physicalEducationResult.subjectScores.subject1}
              </div>
            </div>
            <div className='p-3 bg-white dark:bg-gray-800 rounded-lg text-center'>
              <span className='text-xs text-gray-600 dark:text-gray-400'>Môn 2</span>
              <div className='text-xl font-bold text-blue-600 dark:text-blue-400'>
                {physicalEducationResult.subjectScores.subject2}
              </div>
            </div>
            <div className='p-3 bg-white dark:bg-gray-800 rounded-lg text-center'>
              <span className='text-xs text-gray-600 dark:text-gray-400'>Môn 3</span>
              <div className='text-xl font-bold text-blue-600 dark:text-blue-400'>
                {physicalEducationResult.subjectScores.subject3}
              </div>
            </div>
          </div>

          <div
            className={`p-6 bg-gradient-to-r rounded-xl ${
              physicalEducationResult.color === 'green'
                ? 'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30'
                : 'from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30'
            }`}
          >
            <div className='flex items-start space-x-3'>
              <Icons.Lightbulb
                className={`w-6 h-6 mt-1 flex-shrink-0 ${
                  physicalEducationResult.color === 'green'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              />
              <div>
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>Phân tích:</h4>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>{physicalEducationResult.advice}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (detailedResult) {
    return (
      <Card
        className={`shadow-xl border-0 ${
          detailedResult.color === 'green'
            ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
            : detailedResult.color === 'blue'
              ? 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
              : detailedResult.color === 'purple'
                ? 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20'
                : detailedResult.color === 'yellow'
                  ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
                  : 'bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20'
        }`}
      >
        <CardHeader>
          <CardTitle className='flex items-center text-2xl font-bold text-gray-900 dark:text-white'>
            Kết quả GPA chi tiết
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
            <div className='text-6xl mb-4'>{detailedResult.icon}</div>
            <div
              className={`text-4xl font-bold mb-2 ${
                detailedResult.color === 'green'
                  ? 'text-green-600 dark:text-green-400'
                  : detailedResult.color === 'blue'
                    ? 'text-blue-600 dark:text-blue-400'
                    : detailedResult.color === 'purple'
                      ? 'text-purple-600 dark:text-purple-400'
                      : detailedResult.color === 'yellow'
                        ? 'text-yellow-600 dark:text-yellow-400'
                        : 'text-red-600 dark:text-red-400'
              }`}
            >
              {detailedResult.message}
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            <div className='p-4 bg-white dark:bg-gray-800 rounded-lg'>
              <div className='text-center'>
                <span className='text-sm text-gray-600 dark:text-gray-400'>GPA hiện tại</span>
                <div className='text-2xl font-bold text-gray-900 dark:text-white'>
                  {detailedResult.currentGPA.toFixed(2)}
                </div>
              </div>
            </div>
            <div className='p-4 bg-white dark:bg-gray-800 rounded-lg'>
              <div className='text-center'>
                <span className='text-sm text-gray-600 dark:text-gray-400'>GPA cuối cùng</span>
                <div
                  className={`text-2xl font-bold ${
                    detailedResult.finalGPA >= 3.6
                      ? 'text-purple-600 dark:text-purple-400'
                      : detailedResult.finalGPA >= 3.2
                        ? 'text-blue-600 dark:text-blue-400'
                        : detailedResult.finalGPA >= 2.5
                          ? 'text-green-600 dark:text-green-400'
                          : detailedResult.finalGPA >= 2.0
                            ? 'text-yellow-600 dark:text-yellow-400'
                            : 'text-red-600 dark:text-red-400'
                  }`}
                >
                  {detailedResult.finalGPA}
                </div>
                <span className='text-xs text-gray-500 dark:text-gray-400'>Sau khi hoàn thành</span>
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-4'>
            <div className='p-4 bg-white dark:bg-gray-800 rounded-lg text-center'>
              <span className='text-sm text-gray-600 dark:text-gray-400'>Tín chỉ học thêm</span>
              <div className='text-xl font-bold text-blue-600 dark:text-blue-400'>
                {detailedResult.remainingCredits}
              </div>
              <span className='text-xs text-gray-500 dark:text-gray-400'>tín chỉ</span>
            </div>
            <div className='p-4 bg-white dark:bg-gray-800 rounded-lg text-center'>
              <span className='text-sm text-gray-600 dark:text-gray-400'>Tổng tín chỉ</span>
              <div className='text-xl font-bold text-gray-900 dark:text-white'>{detailedResult.totalCredits}</div>
              <span className='text-xs text-gray-500 dark:text-gray-400'>tín chỉ</span>
            </div>
          </div>

          <div
            className={`p-6 bg-gradient-to-r rounded-xl ${
              detailedResult.color === 'green'
                ? 'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30'
                : detailedResult.color === 'blue'
                  ? 'from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30'
                  : detailedResult.color === 'purple'
                    ? 'from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30'
                    : detailedResult.color === 'yellow'
                      ? 'from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30'
                      : 'from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30'
            }`}
          >
            <div className='flex items-start space-x-3'>
              <Icons.Lightbulb
                className={`w-6 h-6 mt-1 flex-shrink-0 ${
                  detailedResult.color === 'green'
                    ? 'text-green-600 dark:text-green-400'
                    : detailedResult.color === 'blue'
                      ? 'text-blue-600 dark:text-blue-400'
                      : detailedResult.color === 'purple'
                        ? 'text-purple-600 dark:text-purple-400'
                        : detailedResult.color === 'yellow'
                          ? 'text-yellow-600 dark:text-yellow-400'
                          : 'text-red-600 dark:text-red-400'
                }`}
              />
              <div>
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>Phân tích:</h4>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>{detailedResult.advice}</p>
              </div>
            </div>
          </div>

          <div
            className={`p-6 bg-gradient-to-r rounded-xl ${
              detailedResult.graduationRank === 'Xuất sắc'
                ? 'from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30'
                : detailedResult.graduationRank === 'Giỏi'
                  ? 'from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30'
                  : detailedResult.graduationRank === 'Khá'
                    ? 'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30'
                    : detailedResult.graduationRank === 'Trung bình'
                      ? 'from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30'
                      : 'from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30'
            }`}
          >
            <div className='flex items-start space-x-3'>
              <Icons.Award
                className={`w-6 h-6 mt-1 flex-shrink-0 ${
                  detailedResult.graduationRank === 'Xuất sắc'
                    ? 'text-purple-600 dark:text-purple-400'
                    : detailedResult.graduationRank === 'Giỏi'
                      ? 'text-blue-600 dark:text-blue-400'
                      : detailedResult.graduationRank === 'Khá'
                        ? 'text-green-600 dark:text-green-400'
                        : detailedResult.graduationRank === 'Trung bình'
                          ? 'text-yellow-600 dark:text-yellow-400'
                          : 'text-red-600 dark:text-red-400'
                }`}
              />
              <div>
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>Xếp loại tốt nghiệp dự kiến:</h4>
                <p className='text-gray-700 dark:text-gray-300'>
                  <span
                    className={`font-bold ${
                      detailedResult.graduationRank === 'Xuất sắc'
                        ? 'text-purple-600 dark:text-purple-400'
                        : detailedResult.graduationRank === 'Giỏi'
                          ? 'text-blue-600 dark:text-blue-400'
                          : detailedResult.graduationRank === 'Khá'
                            ? 'text-green-600 dark:text-green-400'
                            : detailedResult.graduationRank === 'Trung bình'
                              ? 'text-yellow-600 dark:text-yellow-400'
                              : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {detailedResult.graduationRank}
                  </span>{' '}
                  - {detailedResult.rankDescription}
                </p>
              </div>
            </div>
          </div>

          {detailedResult.warning && (
            <div className='p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg'>
              <div className='flex items-start space-x-3'>
                <div className='flex-shrink-0'>
                  <svg className='w-5 h-5 text-yellow-600 dark:text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h4 className='text-sm font-bold text-yellow-800 dark:text-yellow-300 mb-1'>Lưu ý quan trọng</h4>
                  <p className='text-sm text-yellow-700 dark:text-yellow-200 leading-relaxed'>
                    {detailedResult.warning}
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  if (!result) {
    return null
  }

  return (
    <Card
      className={`shadow-xl border-0 ${
        result.color === 'green'
          ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
          : result.color === 'blue'
            ? 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
            : result.color === 'orange'
              ? 'bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20'
              : 'bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20'
      }`}
    >
      <CardHeader>
        <CardTitle className='flex items-center text-2xl font-bold text-gray-900 dark:text-white'>
          Kết quả đánh giá
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
          <div
            className={`text-4xl font-bold mb-2 ${
              result.color === 'green'
                ? 'text-green-600 dark:text-green-400'
                : result.color === 'blue'
                  ? 'text-blue-600 dark:text-blue-400'
                  : result.color === 'orange'
                    ? 'text-orange-600 dark:text-orange-400'
                    : 'text-red-600 dark:text-red-400'
            }`}
          >
            {result.message}
          </div>
        </div>

        <div
          className={`p-6 bg-gradient-to-r rounded-xl ${
            result.color === 'green'
              ? 'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30'
              : result.color === 'blue'
                ? 'from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30'
                : result.color === 'orange'
                  ? 'from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30'
                  : 'from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30'
          }`}
        >
          <div className='flex items-start space-x-3'>
            <Icons.Lightbulb
              className={`w-6 h-6 mt-1 flex-shrink-0 ${
                result.color === 'green'
                  ? 'text-green-600 dark:text-green-400'
                  : result.color === 'blue'
                    ? 'text-blue-600 dark:text-blue-400'
                    : result.color === 'orange'
                      ? 'text-orange-600 dark:text-orange-400'
                      : 'text-red-600 dark:text-red-400'
              }`}
            />
            <div>
              <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>Lời khuyên:</h4>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>{result.advice}</p>
            </div>
          </div>
        </div>

        {result.graduationRank && (
          <div
            className={`p-6 bg-gradient-to-r rounded-xl ${
              result.graduationRank === 'Xuất sắc'
                ? 'from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30'
                : result.graduationRank === 'Giỏi'
                  ? 'from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30'
                  : result.graduationRank === 'Khá'
                    ? 'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30'
                    : result.graduationRank === 'Trung bình'
                      ? 'from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30'
                      : 'from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30'
            }`}
          >
            <div className='flex items-start space-x-3'>
              <Icons.Award
                className={`w-6 h-6 mt-1 flex-shrink-0 ${
                  result.graduationRank === 'Xuất sắc'
                    ? 'text-purple-600 dark:text-purple-400'
                    : result.graduationRank === 'Giỏi'
                      ? 'text-blue-600 dark:text-blue-400'
                      : result.graduationRank === 'Khá'
                        ? 'text-green-600 dark:text-green-400'
                        : result.graduationRank === 'Trung bình'
                          ? 'text-yellow-600 dark:text-yellow-400'
                          : 'text-red-600 dark:text-red-400'
                }`}
              />
              <div>
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>Xếp loại tốt nghiệp:</h4>
                <p className='text-gray-700 dark:text-gray-300'>
                  <span
                    className={`font-bold ${
                      result.graduationRank === 'Xuất sắc'
                        ? 'text-purple-600 dark:text-purple-400'
                        : result.graduationRank === 'Giỏi'
                          ? 'text-blue-600 dark:text-blue-400'
                          : result.graduationRank === 'Khá'
                            ? 'text-green-600 dark:text-green-400'
                            : result.graduationRank === 'Trung bình'
                              ? 'text-yellow-600 dark:text-yellow-400'
                              : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {result.graduationRank}
                  </span>{' '}
                  - {result.rankDescription}
                </p>
              </div>
            </div>
          </div>
        )}

        {result.maxPossibleGPA && (
          <div className='flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg'>
            <span className='text-gray-600 dark:text-gray-400'>GPA tối đa có thể đạt (nếu full A):</span>
            <span className='font-bold text-purple-600 dark:text-purple-400 text-xl'>{result.maxPossibleGPA}</span>
          </div>
        )}

        <div className='flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg'>
          <span className='text-gray-600 dark:text-gray-400'>Khả năng thực hiện:</span>
          <span
            className={`font-bold text-lg ${result.isAchievable ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
          >
            {result.isAchievable ? '✅ Khả thi' : '❌ Không khả thi'}
          </span>
        </div>

        {result.warning && (
          <div className='p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg'>
            <div className='flex items-start space-x-3'>
              <div className='flex-shrink-0'>
                <svg className='w-5 h-5 text-yellow-600 dark:text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='flex-1'>
                <h4 className='text-sm font-bold text-yellow-800 dark:text-yellow-300 mb-1'>Lưu ý quan trọng</h4>
                <p className='text-sm text-yellow-700 dark:text-yellow-200 leading-relaxed'>{result.warning}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
