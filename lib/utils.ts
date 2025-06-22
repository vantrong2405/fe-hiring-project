import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getGradeClassification(score: number) {
  if (score >= 9.5)
    return {
      grade: 'A+',
      gpa: 4.0,
      classification: 'Giỏi',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      status: 'Đạt'
    }
  if (score >= 8.5)
    return {
      grade: 'A',
      gpa: 4.0,
      classification: 'Giỏi',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      status: 'Đạt'
    }
  if (score >= 8.0)
    return {
      grade: 'A-',
      gpa: 3.65,
      classification: 'Khá',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      status: 'Đạt'
    }
  if (score >= 7.5)
    return {
      grade: 'B+',
      gpa: 3.33,
      classification: 'Khá',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      status: 'Đạt'
    }
  if (score >= 7.0)
    return {
      grade: 'B',
      gpa: 3.0,
      classification: 'Khá',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      status: 'Đạt'
    }
  if (score >= 6.5)
    return {
      grade: 'B-',
      gpa: 2.65,
      classification: 'Trung bình',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      status: 'Đạt'
    }
  if (score >= 6.0)
    return {
      grade: 'C+',
      gpa: 2.33,
      classification: 'Trung bình',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      status: 'Đạt'
    }
  if (score >= 5.5)
    return {
      grade: 'C',
      gpa: 2.0,
      classification: 'Trung bình',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      status: 'Đạt'
    }
  if (score >= 4.5)
    return {
      grade: 'C-',
      gpa: 1.65,
      classification: 'Trung bình yếu',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      status: 'Đạt'
    }
  if (score >= 4.0)
    return {
      grade: 'D',
      gpa: 1.0,
      classification: 'Không đạt',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      status: 'Có điều kiện'
    }
  return {
    grade: 'F',
    gpa: 0.0,
    classification: 'Kém',
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    status: 'Không đạt'
  }
}

export const percentageOptions = [
  ...Array.from({ length: 100 }, (_, i) => i + 1).map((num) => ({
    value: num.toString(),
    label: `${num}%`
  }))
]
