import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PassingGradeResult } from '@/types/gpa-calculator'
import { Icons } from '@/components/icons/icon'
import { getGradeClassification } from '@/lib/utils'

export function PassingGradeResultDisplay({ result }: { result: PassingGradeResult }) {
  const {
    status,
    message,
    currentTotal,
    finalExamPercentage,
    requiredFinalScore,
    isAchievable,
    icon,
    color,
    advice,
    columns,
    totalPercentageUsed,
    warning
  } = result

  const [predictedFinalScore, setPredictedFinalScore] = useState<string>('')
  const [showPrediction, setShowPrediction] = useState(false)
  const [predictionError, setPredictionError] = useState<string>('')

  const handlePredict = () => {
    const score = parseFloat(predictedFinalScore)
    if (isNaN(score) || score < 0 || score > 10) {
      setPredictionError('Vui lòng nhập điểm từ 0 đến 10')
      setShowPrediction(false)
      return
    }
    setPredictionError('')
    setShowPrediction(true)
  }

  return (
    <div className='space-y-6'>
      {/* Main Result Card */}
      <Card
        className={
          status === 'already_passed'
            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
            : status === 'possible'
              ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
              : status === 'impossible'
                ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
        }
      >
        <CardHeader>
          <CardTitle className='flex items-center gap-3'>
            {status === 'already_passed' ? (
              <Icons.CheckCircle className='w-6 h-6 text-green-600' />
            ) : status === 'possible' ? (
              <Icons.Target className='w-6 h-6 text-blue-600' />
            ) : status === 'impossible' ? (
              <Icons.AlertTriangle className='w-6 h-6 text-red-600' />
            ) : (
              <Icons.AlertTriangle className='w-6 h-6 text-yellow-600' />
            )}
            <span className='text-xl font-bold'>Kết quả tính toán</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='text-center'>
            <div className='text-4xl mb-2'>{icon}</div>
            <h3 className={`text-xl font-bold ${color}`}>{message}</h3>
            <p className='text-gray-600 dark:text-gray-400 mt-2'>{advice}</p>
          </div>

          {warning && (
            <div className='bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4'>
              <div className='flex items-start gap-2'>
                <Icons.AlertTriangle className='w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5' />
                <p className='text-sm text-yellow-800 dark:text-yellow-200'>{warning}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Detail Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* Current Score */}
        <Card>
          <CardContent className='pt-4 sm:pt-6'>
            <div className='text-center'>
              <Icons.TrendingUp className='w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2' />
              <h4 className='font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base'>Điểm hiện tại</h4>
              <p className='text-xl sm:text-2xl font-bold text-blue-600'>{currentTotal.toFixed(2)}</p>
              <p className='text-xs sm:text-sm text-gray-500'>/ 10.0</p>
            </div>
          </CardContent>
        </Card>

        {/* Final Exam Contribution */}
        <Card>
          <CardContent className='pt-4 sm:pt-6'>
            <div className='text-center'>
              <Icons.Target className='w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2' />
              <h4 className='font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base'>Đóng góp cuối kỳ</h4>
              <p className='text-xl sm:text-2xl font-bold text-purple-600'>
                {isAchievable
                  ? `${status === 'already_passed' ? '' : '≥'}${((requiredFinalScore / 10) * finalExamPercentage).toFixed(2)}%`
                  : 'N/A'}
              </p>
              <p className='text-xs sm:text-sm text-gray-500'>đóng góp thực tế</p>
            </div>
          </CardContent>
        </Card>

        {/* Required Score */}
        <Card className='sm:col-span-2 lg:col-span-1'>
          <CardContent className='pt-4 sm:pt-6'>
            <div className='text-center'>
              <Icons.CheckCircle className='w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2' />
              <h4 className='font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base'>Điểm cần thiết</h4>
              <p className={`text-xl sm:text-2xl font-bold ${isAchievable ? 'text-green-600' : 'text-red-600'}`}>
                {status === 'already_passed' ? requiredFinalScore.toFixed(2) : `≥${requiredFinalScore.toFixed(2)}`}
              </p>
              <p className='text-xs sm:text-sm text-gray-500'>để qua môn</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Breakdown Table */}
      <Card>
        <CardHeader>
          <CardTitle className='text-base sm:text-lg font-semibold'>Chi tiết các cột điểm</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='overflow-x-auto'>
            <table className='w-full text-xs sm:text-sm min-w-[500px]'>
              <thead>
                <tr className='border-b border-gray-200 dark:border-gray-700'>
                  <th className='text-left py-2 sm:py-3 px-2 font-medium text-gray-900 dark:text-gray-100'>Tên cột</th>
                  <th className='text-center py-2 sm:py-3 px-2 font-medium text-gray-900 dark:text-gray-100'>Tỷ lệ</th>
                  <th className='text-center py-2 sm:py-3 px-2 font-medium text-gray-900 dark:text-gray-100'>Điểm</th>
                  <th className='text-center py-2 sm:py-3 px-2 font-medium text-gray-900 dark:text-gray-100'>
                    Đóng góp
                  </th>
                </tr>
              </thead>
              <tbody>
                {columns.map((column, index) => {
                  const contributionPercent = (column.currentScore / 10) * column.percentage
                  return (
                    <tr key={column.id} className='border-b border-gray-100 dark:border-gray-800'>
                      <td className='py-2 sm:py-3 px-2 font-medium text-gray-900 dark:text-gray-100'>{column.name}</td>
                      <td className='text-center py-2 sm:py-3 px-2'>
                        <Badge variant='outline' className='text-xs'>
                          {column.percentage}%
                        </Badge>
                      </td>
                      <td className='text-center py-2 sm:py-3 px-2 text-blue-600 font-medium'>
                        {column.currentScore}/10
                      </td>
                      <td className='text-center py-2 sm:py-3 px-2 text-green-600 font-medium'>
                        {contributionPercent.toFixed(1)}%
                      </td>
                    </tr>
                  )
                })}

                {/* Current Total Row */}
                <tr className='border-b border-gray-100 dark:border-gray-800 bg-yellow-50 dark:bg-yellow-900/20'>
                  <td className='py-2 sm:py-3 px-2 font-medium text-gray-900 dark:text-gray-100'>Tổng hiện tại</td>
                  <td className='text-center py-2 sm:py-3 px-2'>
                    <Badge variant='outline' className='text-xs'>
                      {totalPercentageUsed}%
                    </Badge>
                  </td>
                  <td className='text-center py-2 sm:py-3 px-2'>-</td>
                  <td className='text-center py-2 sm:py-3 px-2 text-orange-600 font-medium'>
                    {(currentTotal * 10).toFixed(1)}%
                  </td>
                </tr>

                {/* Final Exam Row */}
                {finalExamPercentage > 0 && (
                  <tr className='border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50'>
                    <td className='py-2 sm:py-3 px-2 font-medium text-gray-900 dark:text-gray-100'>Cuối kỳ</td>
                    <td className='text-center py-2 sm:py-3 px-2'>
                      <Badge variant='default' className='text-xs'>
                        {finalExamPercentage}%
                      </Badge>
                    </td>
                    <td className='text-center py-2 sm:py-3 px-2 text-blue-600 font-medium'>
                      {isAchievable
                        ? `${status === 'already_passed' ? '' : '≥'}${requiredFinalScore.toFixed(2)}/10`
                        : 'N/A'}
                    </td>
                    <td className='text-center py-2 sm:py-3 px-2 text-green-600 font-medium'>
                      {isAchievable
                        ? `${status === 'already_passed' ? '' : '≥'}${((requiredFinalScore / 10) * finalExamPercentage).toFixed(2)}%`
                        : 'N/A'}
                    </td>
                  </tr>
                )}

                {/* Total Row */}
                <tr className='bg-blue-50 dark:bg-blue-900/20 font-semibold'>
                  <td className='py-2 sm:py-3 px-2 text-gray-900 dark:text-gray-100'>Tổng cộng</td>
                  <td className='text-center py-2 sm:py-3 px-2'>
                    <Badge variant='secondary' className='text-xs'>
                      {totalPercentageUsed + finalExamPercentage}%
                    </Badge>
                  </td>
                  <td className='text-center py-2 sm:py-3 px-2'>-</td>
                  <td className='text-center py-2 sm:py-3 px-2 text-blue-600'>
                    {status === 'already_passed' ? '40.0%' : '≥40.0%'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Prediction Section */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-3'>
            <Icons.Calculator className='w-6 h-6 text-indigo-600' />
            <span className='text-lg font-semibold'>Dự đoán kết quả cuối kỳ</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex flex-col sm:flex-row items-start sm:items-end gap-4'>
            <div className='flex-1 w-full'>
              <Label htmlFor='predicted-score' className='text-sm font-medium'>
                Nhập điểm cuối kỳ dự đoán (0-10)
              </Label>
              <Input
                id='predicted-score'
                type='number'
                min='0'
                max='10'
                step='0.1'
                value={predictedFinalScore}
                onChange={(e) => {
                  setPredictedFinalScore(e.target.value)
                  setShowPrediction(false)
                  setPredictionError('')
                }}
                placeholder='VD: 8.5'
                className='mt-2'
              />
              {predictionError && <p className='text-sm text-red-500 mt-1'>{predictionError}</p>}
            </div>
            <Button onClick={handlePredict} className='bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto'>
              <Icons.Calculator className='w-4 h-4 mr-2' />
              Dự đoán
            </Button>
          </div>

          {showPrediction && predictedFinalScore && (
            <div className='mt-6'>
              {(() => {
                const finalScore = parseFloat(predictedFinalScore)
                const predictedTotal = isNaN(finalScore) ? 0 : currentTotal + (finalScore * finalExamPercentage) / 100
                const classification = getGradeClassification(predictedTotal)

                return (
                  <div
                    className={`p-4 sm:p-6 rounded-lg border ${classification.bgColor} border-gray-200 dark:border-gray-700`}
                  >
                    <div className='text-center space-y-4'>
                      <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100'>Kết quả dự đoán</h3>

                      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                        <div className='text-center'>
                          <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400'>Điểm tổng</p>
                          <p className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100'>
                            {predictedTotal.toFixed(2)}
                          </p>
                        </div>

                        <div className='text-center'>
                          <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400'>Điểm chữ</p>
                          <p className={`text-2xl sm:text-3xl font-bold ${classification.color}`}>
                            {classification.grade}
                          </p>
                        </div>

                        <div className='text-center'>
                          <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400'>GPA 4.0</p>
                          <p className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100'>
                            {classification.gpa}
                          </p>
                        </div>
                      </div>

                      <div className='text-center space-y-2'>
                        <Badge
                          variant='outline'
                          className={`text-xs sm:text-sm ${classification.color} border-current`}
                        >
                          {classification.classification} - {classification.status}
                        </Badge>

                        {predictedTotal >= 4.0 && parseFloat(predictedFinalScore) >= 1.0 ? (
                          <p className='text-green-600 font-medium text-sm'>✅ Đạt yêu cầu qua môn</p>
                        ) : (
                          <p className='text-red-600 font-medium text-sm'>
                            ❌ Chưa đạt yêu cầu qua môn
                            {predictedTotal < 4.0 && ' (tổng điểm < 4.0)'}
                            {parseFloat(predictedFinalScore) < 1.0 && ' (điểm cuối kỳ < 1.0)'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
