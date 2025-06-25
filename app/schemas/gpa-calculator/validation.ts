import { z } from 'zod'

export const gpaTargetSchema = z.object({
  completed_credits: z
    .number()
    .min(1, 'Số tín chỉ đã học phải >= 1')
    .max(200, 'Số tín chỉ đã học không được vượt quá 200'),
  current_gpa: z.number().min(0.01, 'GPA hiện tại phải > 0.0').max(4, 'GPA hiện tại không được vượt quá 4.0'),
  remaining_credits: z
    .number()
    .min(1, 'Số tín chỉ còn lại phải >= 1')
    .max(200, 'Số tín chỉ còn lại không được vượt quá 200'),
  target_gpa: z.number().min(0.01, 'GPA mục tiêu phải > 0.0').max(4, 'GPA mục tiêu không được vượt quá 4.0')
})

export const detailedGPASchema = z.object({
  completed_credits: z
    .number()
    .min(1, 'Số tín chỉ đã học phải >= 1')
    .max(200, 'Số tín chỉ đã học không được vượt quá 200'),
  current_gpa: z.number().min(0.01, 'GPA hiện tại phải > 0.0').max(4, 'GPA hiện tại không được vượt quá 4.0'),
  remaining_credits: z
    .number()
    .min(1, 'Số tín chỉ còn lại phải >= 1')
    .max(200, 'Số tín chỉ còn lại không được vượt quá 200'),
  allocations: z.array(
    z.object({
      id: z.string(),
      credits: z.number().min(1, 'Tín chỉ phải >= 1'),
      expectedGrade: z.string(),
      gradePoint: z.number().min(0).max(4)
    })
  )
})

export const physicalEducationSchema = z.object({
  subject1_gpa: z.number().min(0.01, 'GPA môn thể dục 1 phải > 0.0').max(4, 'GPA không được vượt quá 4.0'),
  subject2_gpa: z.number().min(0.01, 'GPA môn thể dục 2 phải > 0.0').max(4, 'GPA không được vượt quá 4.0'),
  subject3_gpa: z.number().min(0.01, 'GPA môn thể dục 3 phải > 0.0').max(4, 'GPA không được vượt quá 4.0')
})

export const gradeColumnSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Tên cột không được để trống'),
  percentage: z.number().min(0.1, 'Tỷ lệ phải lớn hơn 0%').max(100, 'Tỷ lệ không được vượt quá 100%'),
  currentScore: z.number().min(0, 'Điểm phải từ 0 trở lên').max(10, 'Điểm không được vượt quá 10')
})

export const passingGradeSchema = z.object({
  columns: z.array(gradeColumnSchema).min(1, 'Phải có ít nhất 1 cột điểm')
})

export const basicFormSchema = z.object({
  ready: z.boolean()
})

// Type definitions
export type GPATargetFormData = z.infer<typeof gpaTargetSchema>
export type DetailedGPAFormData = z.infer<typeof detailedGPASchema>
export type PhysicalEducationFormData = z.infer<typeof physicalEducationSchema>
export type GradeColumnFormData = z.infer<typeof gradeColumnSchema>
export type PassingGradeFormData = z.infer<typeof passingGradeSchema>
export type BasicFormData = z.infer<typeof basicFormSchema>
