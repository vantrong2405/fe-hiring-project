'use client'

import CustomDialog from '@/components/ui/CustomDialog'
import { IDialogConfig } from '@/types/common.i'
import { GPAHelpContent } from '../../core/gpa-calculator/help-content'
import { DetailedGPAHelpContent } from '@/app/core/gpa-calculator/detailed-help-content'

export interface IGPAHelpDialogProps {
  targetDialog: {
    isOpen: boolean
    onClose: () => void
  }
  detailedDialog: {
    isOpen: boolean
    onClose: () => void
  }
  physicalDialog: {
    isOpen: boolean
    onClose: () => void
  }
}

export default function GPAHelpDialog(params: IGPAHelpDialogProps) {
  const { targetDialog, detailedDialog, physicalDialog } = params

  const targetHelpDialogConfig: IDialogConfig = {
    content: <GPAHelpContent />,
    title: 'Hướng dẫn sử dụng - Tính toán mục tiêu GPA',
    description: 'Hướng dẫn chi tiết cách sử dụng công cụ tính toán GPA mục tiêu',
    isOpen: targetDialog.isOpen,
    onClose: targetDialog.onClose,
    className: 'max-w-4xl max-h-[80vh] overflow-y-auto'
  }

  const detailedHelpDialogConfig: IDialogConfig = {
    content: <DetailedGPAHelpContent />,
    title: 'Hướng dẫn sử dụng - Tính toán GPA chi tiết',
    description: 'Hướng dẫn chi tiết cách sử dụng công cụ tính toán GPA với phân bổ tín chỉ',
    isOpen: detailedDialog.isOpen,
    onClose: detailedDialog.onClose,
    className: 'max-w-4xl max-h-[80vh] overflow-y-auto'
  }

  const physicalHelpDialogConfig: IDialogConfig = {
    content: (
      <div className='p-4 text-center text-gray-600 dark:text-gray-400'>
        <p className='text-lg mb-2'>🏃‍♂️ Tính toán GPA thể dục</p>
        <p>Chức năng đơn giản: nhập GPA của 3 môn thể dục, hệ thống tự động tính trung bình.</p>
        <p className='text-sm mt-2'>Trung bình ≥ 2.0 = Đậu | {'<'} 2.0 = Rớt</p>
      </div>
    ),
    title: 'GPA thể dục - Đơn giản & nhanh',
    description: 'Chỉ cần nhập GPA 3 môn thể dục, hệ thống sẽ tính trung bình tự động',
    isOpen: physicalDialog.isOpen,
    onClose: physicalDialog.onClose,
    className: 'max-w-2xl max-h-[80vh] overflow-y-auto'
  }

  return (
    <div>
      <CustomDialog config={targetHelpDialogConfig} />
      <CustomDialog config={detailedHelpDialogConfig} />
      <CustomDialog config={physicalHelpDialogConfig} />
    </div>
  )
}
