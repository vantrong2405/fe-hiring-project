export interface GPAResult {
  status: 'invalid' | 'achieved' | 'exceeded' | 'completed' | 'impossible' | 'achievable' | 'need_perfect'
  message: string
  maxPossibleGPA?: number
  isAchievable: boolean
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme'
  icon: string
  color: string
  advice: string
  warning?: string
  improvementCreditsNeeded?: number
  hasImprovementWarning?: boolean
  graduationRank?: string
  rankDescription?: string
}

export interface GPAFormData {
  completed_credits: number
  current_gpa: number
  remaining_credits: number
  target_gpa: number
}

export interface CreditAllocation {
  id: string
  credits: number
  expectedGrade: string
  gradePoint: number
}

export interface DetailedGPAResult {
  status: 'invalid' | 'calculated' | 'warning' | 'excellent'
  message: string
  finalGPA: number
  currentGPA: number
  newSemesterGPA: number
  totalCredits: number
  completedCredits: number
  remainingCredits: number
  allocations: CreditAllocation[]
  graduationRank: string
  rankDescription: string
  icon: string
  color: string
  advice: string
  warning?: string
  hasImprovementWarning?: boolean
  improvementCreditsCount?: number
  needImprovementAllocations?: CreditAllocation[]
}

export interface DetailedGPAFormData {
  completed_credits: number
  current_gpa: number
  remaining_credits: number
  allocations: CreditAllocation[]
}

export interface PhysicalEducationResult {
  status: 'invalid' | 'pass' | 'fail'
  message: string
  averageGPA: number
  isPass: boolean
  icon: string
  color: string
  advice: string
  subjectScores: {
    subject1: number
    subject2: number
    subject3: number
  }
}

export interface PhysicalEducationFormData {
  subject1_gpa: number
  subject2_gpa: number
  subject3_gpa: number
}
