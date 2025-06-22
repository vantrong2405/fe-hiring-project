'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/icons/icon'
import { GPAResult } from '@/types'

export default function ResultDisplay({ result }: { result: GPAResult | null }) {
  if (!result) {
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
