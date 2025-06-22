export const totalCreditOptions = [
  { value: '0', label: '0 tín chỉ' },
  ...Array.from({ length: 200 }, (_, i) => i + 1).map((num) => ({
    value: num.toString(),
    label: `${num} tín chỉ`
  }))
]

export const courseCreditOptions = [
  { value: '1', label: '1 tín chỉ' },
  { value: '2', label: '2 tín chỉ' },
  { value: '3', label: '3 tín chỉ' },
  { value: '4', label: '4 tín chỉ' },
  { value: '5', label: '5 tín chỉ' }
]

export const gradeOptions = [
  { value: 'A+', label: 'A+ (4.0) - Giỏi' },
  { value: 'A', label: 'A (4.0) - Giỏi' },
  { value: 'A-', label: 'A- (3.65) - Giỏi' },
  { value: 'B+', label: 'B+ (3.33) - Khá' },
  { value: 'B', label: 'B (3.0) - Khá' },
  { value: 'B-', label: 'B- (2.65) - Trung bình' },
  { value: 'C+', label: 'C+ (2.33) - Trung bình' },
  { value: 'C', label: 'C (2.0) - Trung bình' },
  { value: 'C-', label: 'C- (1.65) - Trung bình yếu' },
  { value: 'D', label: 'D (1.0) - Không đạt có điều kiện' },
  { value: 'F', label: 'F (0.0) - Kém' }
]
