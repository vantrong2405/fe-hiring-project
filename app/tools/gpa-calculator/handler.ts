import { GPAResult, GPAFormData } from '@/types'

function getGraduationRank(gpa: number): { rank: string; description: string } {
  if (gpa >= 3.6) {
    return { rank: 'Xuất sắc', description: 'GPA từ 3.6 - 4.0' }
  } else if (gpa >= 3.2) {
    return { rank: 'Giỏi', description: 'GPA từ 3.2 - 3.59' }
  } else if (gpa >= 2.5) {
    return { rank: 'Khá', description: 'GPA từ 2.5 - 3.19' }
  } else if (gpa >= 2.0) {
    return { rank: 'Trung bình', description: 'GPA từ 2.0 - 2.49' }
  } else {
    return { rank: 'Yếu', description: 'GPA dưới 2.0' }
  }
}

export function evaluateGPATarget(
  currentGPA: number,
  targetGPA: number,
  remainingCredits: number,
  completedCredits: number
): GPAResult {
  if (targetGPA > 4.0) {
    return {
      status: 'invalid',
      message: 'GPA mục tiêu không hợp lệ',
      isAchievable: false,
      difficulty: 'extreme',
      icon: '❌',
      color: 'red',
      advice: 'Vui lòng nhập GPA mục tiêu từ 0.0 đến 4.0'
    }
  }

  const totalCredits = completedCredits + remainingCredits
  const improvementThreshold = Math.ceil(totalCredits * 0.05)

  const maxPossibleGPA =
    remainingCredits > 0 ? (currentGPA * completedCredits + 4.0 * remainingCredits) / totalCredits : currentGPA

  const scenario =
    currentGPA === targetGPA
      ? 'equal'
      : currentGPA > targetGPA
        ? 'exceeded'
        : remainingCredits === 0
          ? 'no_credits'
          : 'need_improve'

  switch (scenario) {
    case 'equal':
      const equalRank = getGraduationRank(targetGPA)
      return {
        status: 'achieved',
        message: 'Bạn đang đạt đúng GPA mục tiêu',
        maxPossibleGPA: Math.round(maxPossibleGPA * 100) / 100,
        isAchievable: true,
        difficulty: 'medium',
        icon: '🎯',
        color: 'blue',
        advice: `Bạn đã đạt mục tiêu. Giữ ổn định kết quả hiện tại để duy trì xếp loại ${equalRank.rank.toLowerCase()}.`,
        graduationRank: equalRank.rank,
        rankDescription: equalRank.description
      }

    case 'exceeded':
      const exceededRank = getGraduationRank(currentGPA)
      return {
        status: 'exceeded',
        message: 'Bạn đã vượt mục tiêu',
        maxPossibleGPA: Math.round(maxPossibleGPA * 100) / 100,
        isAchievable: true,
        difficulty: 'easy',
        icon: '🏆',
        color: 'green',
        advice: `Bạn đã vượt mục tiêu. Duy trì phong độ để đạt loại ${exceededRank.rank.toLowerCase()} hoặc hơn.`,
        graduationRank: exceededRank.rank,
        rankDescription: exceededRank.description
      }

    case 'no_credits':
      if (currentGPA >= targetGPA) {
        const completedRank = getGraduationRank(currentGPA)
        return {
          status: 'completed',
          message: 'Bạn đã hoàn tất và đạt được GPA mục tiêu',
          maxPossibleGPA: Math.round(maxPossibleGPA * 100) / 100,
          isAchievable: true,
          difficulty: 'easy',
          icon: '🎓',
          color: 'green',
          advice: `Bạn đã đạt mục tiêu. Giữ ổn định kết quả hiện tại để duy trì xếp loại ${completedRank.rank.toLowerCase()}.`,
          graduationRank: completedRank.rank,
          rankDescription: completedRank.description
        }
      } else {
        const improvementCreditsNeeded = Math.ceil(((targetGPA - currentGPA) * completedCredits) / (4.0 - currentGPA))
        const hasImprovementWarning = improvementCreditsNeeded > improvementThreshold
        const currentRank = getGraduationRank(currentGPA)

        return {
          status: 'impossible',
          message: 'Không thể đạt GPA mục tiêu',
          maxPossibleGPA: Math.round(maxPossibleGPA * 100) / 100,
          isAchievable: false,
          difficulty: 'extreme',
          icon: '❌',
          color: 'red',
          advice: `Không thể đạt ${targetGPA} nếu không học cải thiện. Kết quả sẽ giữ ở mức ${currentRank.rank.toLowerCase()}. Ưu tiên cải thiện môn dưới B.`,
          improvementCreditsNeeded,
          hasImprovementWarning,
          graduationRank: currentRank.rank,
          rankDescription: currentRank.description,
          warning: hasImprovementWarning
            ? `⚠️ Cảnh báo: Cần học cải thiện ${improvementCreditsNeeded} tín chỉ (>${improvementThreshold} tín chỉ = 5% tổng chương trình). Có thể bị hạ bằng tốt nghiệp đối với giỏi và xuất sắc!`
            : undefined
        }
      }

    case 'need_improve':
      const currentTotalPoints = currentGPA * completedCredits
      const targetTotalPoints = targetGPA * totalCredits
      const requiredPoints = targetTotalPoints - currentTotalPoints

      if (maxPossibleGPA < targetGPA) {
        const improvementCreditsNeeded = Math.ceil(((targetGPA - maxPossibleGPA) * totalCredits) / (4.0 - currentGPA))
        const hasImprovementWarning = improvementCreditsNeeded > improvementThreshold
        const maxRank = getGraduationRank(maxPossibleGPA)

        return {
          status: 'impossible',
          message: 'Không khả thi để đạt GPA mục tiêu',
          maxPossibleGPA: Math.round(maxPossibleGPA * 100) / 100,
          isAchievable: false,
          difficulty: 'extreme',
          icon: '❌',
          color: 'red',
          advice: `Dù bạn đạt toàn bộ A cũng không thể lên ${targetGPA}. Tối đa chỉ đạt ${maxPossibleGPA.toFixed(3)} (${maxRank.rank.toLowerCase()}). Hãy cân nhắc học cải thiện.`,
          improvementCreditsNeeded,
          hasImprovementWarning,
          graduationRank: maxRank.rank,
          rankDescription: `Tối đa có thể đạt: ${maxRank.description}`,
          warning: hasImprovementWarning
            ? `⚠️ Cảnh báo: Cần học cải thiện ${improvementCreditsNeeded} tín chỉ (>${improvementThreshold} tín chỉ = 5% tổng chương trình). Có thể bị hạ bằng tốt nghiệp đối với giỏi và xuất sắc!`
            : undefined
        }
      } else if (Math.abs(maxPossibleGPA - targetGPA) < 0.01) {
        const targetRank = getGraduationRank(targetGPA)
        return {
          status: 'need_perfect',
          message: 'Cần đạt toàn bộ A để đạt mục tiêu',
          maxPossibleGPA: Math.round(maxPossibleGPA * 100) / 100,
          isAchievable: true,
          difficulty: 'extreme',
          icon: '🔥',
          color: 'orange',
          advice: `Để đạt ${targetGPA}, bạn cần đạt tối thiểu điểm A (4.0) ở toàn bộ môn còn lại.`,
          graduationRank: targetRank.rank,
          rankDescription: targetRank.description
        }
      } else {
        const averageGradeNeeded = requiredPoints / remainingCredits
        const difficultyLevel =
          averageGradeNeeded >= 4.0
            ? 'extreme'
            : averageGradeNeeded > 3.65
              ? 'extreme'
              : averageGradeNeeded > 3.0
                ? 'hard'
                : 'medium'
        const targetRank = getGraduationRank(targetGPA)

        let gradeDescription = ''
        if (averageGradeNeeded >= 4.0) {
          gradeDescription = 'A/A+ (4.0)'
        } else if (averageGradeNeeded > 3.65) {
          gradeDescription = 'A/A+ (4.0)'
        } else if (averageGradeNeeded > 3.33) {
          gradeDescription = 'A- (3.65)'
        } else if (averageGradeNeeded > 3.0) {
          gradeDescription = 'B+ (3.33)'
        } else if (averageGradeNeeded > 2.65) {
          gradeDescription = 'B (3.0)'
        } else if (averageGradeNeeded > 2.33) {
          gradeDescription = 'B- (2.65)'
        } else if (averageGradeNeeded > 2.0) {
          gradeDescription = 'C+ (2.33)'
        } else if (averageGradeNeeded > 1.65) {
          gradeDescription = 'C (2.0)'
        } else if (averageGradeNeeded > 1.0) {
          gradeDescription = 'C- (1.65)'
        } else {
          gradeDescription = 'D (1.0)'
        }

        let specificAdvice = ''
        if (averageGradeNeeded >= 4.0) {
          specificAdvice = `Cần đạt điểm A/A+ (4.0) cho toàn bộ môn còn lại.`
        } else if (averageGradeNeeded > 3.65) {
          specificAdvice = `Cần đạt tối thiểu ${gradeDescription} mỗi môn trong phần còn lại.`
        } else if (averageGradeNeeded >= 2.0) {
          specificAdvice = `Để đạt ${targetGPA}, bạn cần đạt tối thiểu ${gradeDescription} mỗi môn còn lại.`
        } else {
          specificAdvice = `Cần đạt tối thiểu ${gradeDescription} cho ${remainingCredits} tín chỉ còn lại. Mục tiêu dễ đạt được.`
        }

        return {
          status: 'achievable',
          message: 'Khả thi! Có thể đạt được GPA mục tiêu',
          maxPossibleGPA: Math.round(maxPossibleGPA * 100) / 100,
          isAchievable: true,
          difficulty: difficultyLevel,
          icon: '💪',
          color: 'green',
          advice: specificAdvice,
          graduationRank: targetRank.rank,
          rankDescription: targetRank.description
        }
      }

    default:
      return {
        status: 'invalid',
        message: 'Dữ liệu không hợp lệ',
        isAchievable: false,
        difficulty: 'extreme',
        icon: '❌',
        color: 'red',
        advice: 'Vui lòng kiểm tra lại thông tin đầu vào.'
      }
  }
}
