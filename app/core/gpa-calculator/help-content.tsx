import { Icons } from '@/components/icons/icon'
import { Badge } from '@/components/ui/badge'

export const GPAHelpContent = () => (
  <div className='space-y-6 text-sm'>
    <div className='space-y-3'>
      <h3 className='font-semibold text-base flex items-center'>
        <Icons.Target className='w-4 h-4 mr-2 text-green-600' />
        Công cụ này giúp gì?
      </h3>
      <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
        Dự đoán <strong>GPA tối thiểu cần đạt</strong> trong các môn còn lại để đạt được GPA mục tiêu. Kèm theo phân
        tích xếp loại tốt nghiệp và cảnh báo cải thiện.
      </p>
    </div>

    <div className='space-y-4'>
      <h3 className='font-semibold text-base flex items-center'>
        <Icons.BookOpen className='w-4 h-4 mr-2 text-blue-600' />
        Cách điền thông tin:
      </h3>

      <div className='grid gap-4'>
        <div className='p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700'>
          <div className='flex items-start gap-3'>
            <Badge variant='outline' className='bg-blue-100 text-blue-800 border-blue-300'>
              1
            </Badge>
            <div>
              <p className='font-medium text-blue-900 dark:text-blue-100'>Số tín chỉ đã học</p>
              <p className='text-blue-700 dark:text-blue-300 mt-1'>
                Tổng số tín chỉ đã hoàn thành (có điểm). VD: 84 tín chỉ
              </p>
            </div>
          </div>
        </div>

        <div className='p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700'>
          <div className='flex items-start gap-3'>
            <Badge variant='outline' className='bg-green-100 text-green-800 border-green-300'>
              2
            </Badge>
            <div>
              <p className='font-medium text-green-900 dark:text-green-100'>GPA hiện tại</p>
              <p className='text-green-700 dark:text-green-300 mt-1'>GPA tích lũy hiện tại của bạn. VD: 3.15</p>
            </div>
          </div>
        </div>

        <div className='p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700'>
          <div className='flex items-start gap-3'>
            <Badge variant='outline' className='bg-purple-100 text-purple-800 border-purple-300'>
              3
            </Badge>
            <div>
              <p className='font-medium text-purple-900 dark:text-purple-100'>GPA mục tiêu</p>
              <p className='text-purple-700 dark:text-purple-300 mt-1'>
                GPA bạn muốn đạt được khi tốt nghiệp. VD: 3.2 (Khá)
              </p>
            </div>
          </div>
        </div>

        <div className='p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700'>
          <div className='flex items-start gap-3'>
            <Badge variant='outline' className='bg-orange-100 text-orange-800 border-orange-300'>
              4
            </Badge>
            <div>
              <p className='font-medium text-orange-900 dark:text-orange-100'>Số tín chỉ còn lại</p>
              <p className='text-orange-700 dark:text-orange-300 mt-1'>
                Số tín chỉ cần học thêm để tốt nghiệp. VD: 36 tín chỉ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='space-y-3'>
      <h3 className='font-semibold text-base flex items-center'>
        <Icons.Calculator className='w-4 h-4 mr-2 text-indigo-600' />
        Kết quả hiển thị:
      </h3>
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <Icons.ArrowRight className='w-3 h-3 text-gray-500' />
          <span>
            <strong>GPA tối thiểu cần đạt:</strong> Điểm trung bình cần có trong các môn còn lại
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <Icons.ArrowRight className='w-3 h-3 text-gray-500' />
          <span>
            <strong>Độ khó:</strong> Đánh giá mức độ khả thi (Dễ/Trung bình/Khó/Không thể)
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <Icons.ArrowRight className='w-3 h-3 text-gray-500' />
          <span>
            <strong>Xếp loại tốt nghiệp:</strong> Dự đoán xếp loại (Xuất sắc/Giỏi/Khá/TB)
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <Icons.ArrowRight className='w-3 h-3 text-gray-500' />
          <span>
            <strong>Cảnh báo:</strong> Thông báo nếu vượt 5% tín chỉ cải thiện
          </span>
        </div>
      </div>
    </div>

    <div className='p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700'>
      <div className='flex items-start gap-3'>
        <Icons.AlertCircle className='w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0' />
        <div>
          <p className='font-semibold text-amber-900 dark:text-amber-100'>Lưu ý quan trọng:</p>
          <ul className='mt-2 space-y-1 text-amber-800 dark:text-amber-200 list-disc list-inside'>
            <li>Kết quả chỉ mang tính chất tham khảo</li>
            <li>Dựa trên thang điểm 4.0 của Duy Tân University</li>
            <li>Điểm D (1.0) không được vượt quá 5% tổng tín chỉ</li>
            <li>Điểm F (0.0) bắt buộc phải học lại</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
