export const gpaValidationRules = {
  completed_credits: {
    required: 'Số tín chỉ đã học là bắt buộc',
    min: {
      value: 0,
      message: 'Số tín chỉ đã học phải >= 0'
    },
    max: {
      value: 200,
      message: 'Số tín chỉ đã học không được vượt quá 200'
    }
  },
  current_gpa: {
    required: 'GPA hiện tại là bắt buộc',
    min: {
      value: 0,
      message: 'GPA hiện tại phải >= 0.0'
    },
    max: {
      value: 4,
      message: 'GPA hiện tại không được vượt quá 4.0'
    }
  },
  remaining_credits: {
    required: 'Số tín chỉ còn lại là bắt buộc',
    min: {
      value: 0,
      message: 'Số tín chỉ còn lại phải >= 0'
    },
    max: {
      value: 200,
      message: 'Số tín chỉ còn lại không được vượt quá 200'
    }
  },
  target_gpa: {
    required: 'GPA mục tiêu là bắt buộc',
    min: {
      value: 0,
      message: 'GPA mục tiêu phải >= 0.0'
    },
    max: {
      value: 4,
      message: 'GPA mục tiêu không được vượt quá 4.0'
    }
  }
}
