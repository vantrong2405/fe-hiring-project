'use client'

import CustomDialog from '@/components/ui/CustomDialog'
import { IDialogConfig } from '@/types/common.i'
import { GPAHelpContent } from '../../core/gpa-calculator/help-content'

interface GPAHelpDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function GPAHelpDialog({ open, onOpenChange }: GPAHelpDialogProps) {
  const helpDialogConfig: IDialogConfig = {
    content: <GPAHelpContent />,
    title: 'Hướng dẫn sử dụng - Tính toán mục tiêu GPA',
    description: 'Hướng dẫn chi tiết cách sử dụng công cụ tính toán GPA mục tiêu',
    isOpen: open,
    onClose: () => onOpenChange(false),
    className: 'max-w-4xl max-h-[80vh] overflow-y-auto'
  }

  return <CustomDialog config={helpDialogConfig} />
}
