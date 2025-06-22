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
