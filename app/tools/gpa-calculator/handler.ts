import {
  GPAResult,
  GPAFormData,
  DetailedGPAResult,
  DetailedGPAFormData,
  CreditAllocation,
  PhysicalEducationResult
} from '@/types/gpa-calculator'

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

export function getGradePoint(grade: string): number {
  const gradeMap: { [key: string]: number } = {
    'A+': 4.0,
    A: 4.0,
    'A-': 3.65,
    'B+': 3.33,
    B: 3.0,
    'B-': 2.65,
    'C+': 2.33,
    C: 2.0,
    'C-': 1.65,
    D: 1.0,
    F: 0.0
  }
  return gradeMap[grade] || 0.0
}

function calculateDetailedGPA(currentGPA: number, completedCredits: number, allocations: CreditAllocation[]): number {
  const currentTotalPoints = currentGPA * completedCredits
  const newTotalPoints = allocations.reduce((sum, allocation) => sum + allocation.gradePoint * allocation.credits, 0)
  const newTotalCredits = allocations.reduce((sum, allocation) => sum + allocation.credits, 0)
  const totalCredits = completedCredits + newTotalCredits

  if (totalCredits === 0) return 0

  return (currentTotalPoints + newTotalPoints) / totalCredits
}

function calculateSemesterGPA(allocations: CreditAllocation[]): number {
  const totalPoints = allocations.reduce((sum, allocation) => sum + allocation.gradePoint * allocation.credits, 0)
  const totalCredits = allocations.reduce((sum, allocation) => sum + allocation.credits, 0)

  if (totalCredits === 0) return 0

  return totalPoints / totalCredits
}

export function evaluateDetailedGPA(
  currentGPA: number,
  completedCredits: number,
  remainingCredits: number,
  allocations: CreditAllocation[]
): DetailedGPAResult {
  if (allocations.length === 0 || remainingCredits === 0) {
    return {
      status: 'invalid',
      message: 'Chưa có phân bổ tín chỉ',
      finalGPA: currentGPA,
      currentGPA,
      newSemesterGPA: 0,
      totalCredits: completedCredits,
      completedCredits,
      remainingCredits,
      allocations: [],
      graduationRank: 'Chưa xác định',
      rankDescription: 'Cần phân bổ tín chỉ để tính toán',
      icon: '📝',
      color: 'gray',
      advice: 'Vui lòng phân bổ tín chỉ còn lại để tính toán GPA chi tiết.'
    }
  }

  const allocatedCredits = allocations.reduce((sum, allocation) => sum + allocation.credits, 0)

  if (allocatedCredits !== remainingCredits) {
    return {
      status: 'invalid',
      message: 'Phân bổ tín chỉ không đúng',
      finalGPA: currentGPA,
      currentGPA,
      newSemesterGPA: 0,
      totalCredits: completedCredits + remainingCredits,
      completedCredits,
      remainingCredits,
      allocations,
      graduationRank: 'Lỗi',
      rankDescription: `Đã phân bổ ${allocatedCredits}/${remainingCredits} tín chỉ`,
      icon: '❌',
      color: 'red',
      advice: `Cần phân bổ đúng ${remainingCredits} tín chỉ. Hiện tại đã phân bổ ${allocatedCredits} tín chỉ.`
    }
  }

  const totalCredits = completedCredits + remainingCredits
  const finalGPA = calculateDetailedGPA(currentGPA, completedCredits, allocations)
  const newSemesterGPA = calculateSemesterGPA(allocations)

  const needImprovementAllocations = allocations.filter((allocation) => allocation.gradePoint <= 1.0)
  const improvementCreditsCount = needImprovementAllocations.reduce((sum, allocation) => sum + allocation.credits, 0)
  const improvementThreshold = Math.ceil(totalCredits * 0.05)
  const hasImprovementWarning = improvementCreditsCount > improvementThreshold

  const finalRank = getGraduationRank(finalGPA)
  const currentRank = getGraduationRank(currentGPA)

  const isImprovement = finalGPA > currentGPA
  const isDecline = finalGPA < currentGPA

  let status: 'invalid' | 'calculated' | 'warning' | 'excellent'
  let message: string
  let icon: string
  let color: string
  let advice: string

  if (finalGPA >= 3.6) {
    status = 'excellent'
    message = 'Kết quả xuất sắc!'
    icon = '🏆'
    color = 'purple'
    advice = `Tuyệt vời! Bạn sẽ đạt xếp loại ${finalRank.rank.toLowerCase()}. Tiếp tục duy trì phong độ học tập.`
  } else if (finalGPA >= 3.2) {
    status = 'excellent'
    message = 'Kết quả rất tốt!'
    icon = '🌟'
    color = 'blue'
    advice = `Rất tốt! Bạn sẽ đạt xếp loại ${finalRank.rank.toLowerCase()}. Cố gắng thêm để lên xuất sắc.`
  } else if (finalGPA >= 2.5) {
    status = 'calculated'
    message = 'Kết quả ổn định'
    icon = '📊'
    color = 'green'
    advice = `Bạn sẽ đạt xếp loại ${finalRank.rank.toLowerCase()}. Cần cải thiện để lên loại giỏi.`
  } else if (finalGPA >= 2.0) {
    status = 'warning'
    message = 'Cần cải thiện'
    icon = '⚠️'
    color = 'yellow'
    advice = `Kết quả đạt loại ${finalRank.rank.toLowerCase()}. Nên cải thiện điểm để đạt loại cao hơn.`
  } else {
    status = 'warning'
    message = 'Kết quả yếu - cần cải thiện ngay'
    icon = '🚨'
    color = 'red'
    advice = `GPA ${finalGPA.toFixed(2)} đạt loại ${finalRank.rank.toLowerCase()}. Cần nỗ lực cải thiện điểm số.`
  }

  let detailedAdvice = advice
  if (isImprovement) {
    detailedAdvice += ` GPA tăng từ ${currentGPA.toFixed(2)} (${currentRank.rank.toLowerCase()}) lên ${finalGPA.toFixed(2)}.`
  } else if (isDecline) {
    detailedAdvice += ` Lưu ý: GPA giảm từ ${currentGPA.toFixed(2)} (${currentRank.rank.toLowerCase()}) xuống ${finalGPA.toFixed(2)}.`
  }

  const warning = hasImprovementWarning
    ? `⚠️ Cảnh báo: Có ${improvementCreditsCount} tín chỉ điểm D/F (>${improvementThreshold} tín chỉ = 5% tổng chương trình). Có thể bị hạ bằng tốt nghiệp đối với loại giỏi và xuất sắc!`
    : undefined

  return {
    status,
    message,
    finalGPA: Math.round(finalGPA * 100) / 100,
    currentGPA,
    newSemesterGPA: Math.round(newSemesterGPA * 100) / 100,
    totalCredits,
    completedCredits,
    remainingCredits,
    allocations,
    graduationRank: finalRank.rank,
    rankDescription: finalRank.description,
    icon,
    color,
    advice: detailedAdvice,
    warning,
    hasImprovementWarning,
    improvementCreditsCount,
    needImprovementAllocations
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

export function evaluatePhysicalEducationGPA(
  subject1GPA: number,
  subject2GPA: number,
  subject3GPA: number
): PhysicalEducationResult {
  if (subject1GPA < 0 || subject1GPA > 4 || subject2GPA < 0 || subject2GPA > 4 || subject3GPA < 0 || subject3GPA > 4) {
    return {
      status: 'invalid',
      message: 'Điểm GPA không hợp lệ',
      averageGPA: 0,
      isPass: false,
      icon: '❌',
      color: 'red',
      advice: 'Vui lòng nhập GPA từ 0.0 đến 4.0 cho tất cả môn thể dục.',
      subjectScores: {
        subject1: subject1GPA,
        subject2: subject2GPA,
        subject3: subject3GPA
      }
    }
  }

  const averageGPA = (subject1GPA + subject2GPA + subject3GPA) / 3
  const isPass = averageGPA >= 2.0

  if (isPass) {
    let icon: string
    let advice: string

    if (averageGPA >= 3.5) {
      icon = '🏆'
      advice = `Xuất sắc! Bạn đã hoàn thành xuất sắc chương trình thể dục với GPA ${averageGPA.toFixed(2)}.`
    } else if (averageGPA >= 3.0) {
      icon = '🌟'
      advice = `Rất tốt! Bạn đã hoàn thành tốt chương trình thể dục với GPA ${averageGPA.toFixed(2)}.`
    } else if (averageGPA >= 2.5) {
      icon = '✅'
      advice = `Tốt! Bạn đã đậu chương trình thể dục với GPA ${averageGPA.toFixed(2)}.`
    } else {
      icon = '📋'
      advice = `Đậu! Bạn đã hoàn thành chương trình thể dục với GPA ${averageGPA.toFixed(2)}.`
    }

    return {
      status: 'pass',
      message: 'Đậu chương trình thể dục',
      averageGPA: Math.round(averageGPA * 100) / 100,
      isPass: true,
      icon,
      color: 'green',
      advice,
      subjectScores: {
        subject1: subject1GPA,
        subject2: subject2GPA,
        subject3: subject3GPA
      }
    }
  } else {
    const shortfall = 2.0 - averageGPA
    const additionalPointsNeeded = shortfall * 3

    return {
      status: 'fail',
      message: 'Chưa đậu chương trình thể dục',
      averageGPA: Math.round(averageGPA * 100) / 100,
      isPass: false,
      icon: '❌',
      color: 'red',
      advice: `Chưa đạt yêu cầu. GPA trung bình ${averageGPA.toFixed(2)} < 2.0. Cần cải thiện thêm ${additionalPointsNeeded.toFixed(2)} điểm tổng để đạt yêu cầu đậu.`,
      subjectScores: {
        subject1: subject1GPA,
        subject2: subject2GPA,
        subject3: subject3GPA
      }
    }
  }
}
