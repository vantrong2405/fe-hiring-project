'use client'

import { Icons } from '@/components/icons/icon'

export function DetailedGPAHelpContent() {
  return (
    <div className='space-y-6'>
      <div className='flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700'>
        <Icons.Info className='w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0' />
        <div className='text-sm text-blue-800 dark:text-blue-200'>
          <p className='font-semibold mb-1'>Tính toán GPA chi tiết</p>
          <p>
            Công cụ này giúp bạn dự đoán GPA cuối cùng dựa trên việc phân bổ tín chỉ còn lại với các điểm mong muốn.
          </p>
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white flex items-center'>
          <Icons.Target className='w-5 h-5 mr-2 text-green-600' />
          Cách sử dụng
        </h3>

        <div className='space-y-3'>
          <div className='flex items-start space-x-3'>
            <span className='flex-shrink-0 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center'>
              1
            </span>
            <div>
              <h4 className='font-medium text-gray-900 dark:text-white'>Nhập thông tin cơ bản</h4>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Số tín chỉ đã học, GPA hiện tại và số tín chỉ còn lại cần hoàn thành.
              </p>
            </div>
          </div>

          <div className='flex items-start space-x-3'>
            <span className='flex-shrink-0 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center'>
              2
            </span>
            <div>
              <h4 className='font-medium text-gray-900 dark:text-white'>Phân bổ tín chỉ</h4>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Thêm các phân bổ tín chỉ với điểm mong muốn. Ví dụ: 15 tín chỉ với điểm A, 5 tín chỉ với điểm B+.
              </p>
            </div>
          </div>

          <div className='flex items-start space-x-3'>
            <span className='flex-shrink-0 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center'>
              3
            </span>
            <div>
              <h4 className='font-medium text-gray-900 dark:text-white'>Kiểm tra tổng tín chỉ</h4>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Đảm bảo tổng tín chỉ đã phân bổ bằng với số tín chỉ còn lại để có thể tính toán.
              </p>
            </div>
          </div>

          <div className='flex items-start space-x-3'>
            <span className='flex-shrink-0 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center'>
              4
            </span>
            <div>
              <h4 className='font-medium text-gray-900 dark:text-white'>Xem kết quả</h4>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Nhận kết quả GPA cuối cùng, xếp loại tốt nghiệp và lời khuyên cụ thể.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white flex items-center'>
          <Icons.Calculator className='w-5 h-5 mr-2 text-purple-600' />
          Ví dụ minh họa
        </h3>

        <div className='p-4 bg-gray-50 dark:bg-gray-800 rounded-lg'>
          <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Tình huống:</h4>
          <ul className='text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside'>
            <li>Đã học 80 tín chỉ với GPA 3.0</li>
            <li>Còn lại 20 tín chỉ cần hoàn thành</li>
            <li>Muốn biết GPA cuối cùng nếu đạt 15 tín chỉ điểm A và 5 tín chỉ điểm B</li>
          </ul>

          <h4 className='font-medium text-gray-900 dark:text-white mt-3 mb-2'>Phân bổ:</h4>
          <div className='space-y-1 text-sm'>
            <div className='flex justify-between p-2 bg-white dark:bg-gray-700 rounded'>
              <span>15 tín chỉ</span>
              <span className='font-bold text-purple-600'>A (4.0)</span>
            </div>
            <div className='flex justify-between p-2 bg-white dark:bg-gray-700 rounded'>
              <span>5 tín chỉ</span>
              <span className='font-bold text-blue-600'>B (3.0)</span>
            </div>
          </div>

          <h4 className='font-medium text-gray-900 dark:text-white mt-3 mb-2'>Kết quả dự kiến:</h4>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            GPA cuối cùng: <span className='font-bold text-green-600'>3.15</span> (Xếp loại Khá)
          </p>
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white flex items-center'>
          <Icons.Lightbulb className='w-5 h-5 mr-2 text-yellow-600' />
          Mẹo sử dụng
        </h3>

        <div className='grid md:grid-cols-2 gap-4'>
          <div className='p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700'>
            <h4 className='font-medium text-green-800 dark:text-green-300 mb-1'>Phân bổ linh hoạt</h4>
            <p className='text-xs text-green-700 dark:text-green-200'>
              Bạn có thể chọn bất kỳ số tín chỉ nào, không bắt buộc phải chia đều.
            </p>
          </div>

          <div className='p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700'>
            <h4 className='font-medium text-blue-800 dark:text-blue-300 mb-1'>Thử nghiệm scenario</h4>
            <p className='text-xs text-blue-700 dark:text-blue-200'>Tạo nhiều phân bổ khác nhau để so sánh kết quả.</p>
          </div>

          <div className='p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700'>
            <h4 className='font-medium text-purple-800 dark:text-purple-300 mb-1'>Cảnh báo học lại</h4>
            <p className='text-xs text-purple-700 dark:text-purple-200'>
              Hệ thống sẽ cảnh báo nếu có quá nhiều điểm D/F ảnh hưởng xếp loại.
            </p>
          </div>

          <div className='p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700'>
            <h4 className='font-medium text-orange-800 dark:text-orange-300 mb-1'>Xóa và chỉnh sửa</h4>
            <p className='text-xs text-orange-700 dark:text-orange-200'>
              Dễ dàng xóa hoặc chỉnh sửa các phân bổ đã tạo.
            </p>
          </div>
        </div>
      </div>

      <div className='p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700'>
        <div className='flex items-start space-x-3'>
          <Icons.AlertCircle className='w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0' />
          <div className='text-sm text-yellow-800 dark:text-yellow-200'>
            <p className='font-semibold mb-1'>Lưu ý quan trọng</p>
            <ul className='space-y-1 list-disc list-inside'>
              <li>Tổng tín chỉ phân bổ phải bằng đúng số tín chỉ còn lại</li>
              <li>Kết quả chỉ mang tính dự đoán, GPA thực tế có thể khác</li>
              <li>Nếu có {'>'}5% tín chỉ điểm D/F sẽ ảnh hưởng xếp loại tốt nghiệp</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
