import { Card, CardContent } from '@/components/ui/card'
import type { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  value: string
  label: string
  icon: LucideIcon
  color: 'blue' | 'green' | 'purple' | 'orange'
}

export function StatsCard({ value, label, icon: Icon, color }: StatsCardProps) {
  const colorClasses = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    purple: 'text-purple-600 dark:text-purple-400',
    orange: 'text-orange-600 dark:text-orange-400'
  }

  return (
    <Card className='text-center hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0'>
      <CardContent className='p-6'>
        <div className='flex items-center justify-center mb-3'>
          <Icon className={`w-8 h-8 ${colorClasses[color]}`} />
        </div>
        <div className={`text-3xl font-bold ${colorClasses[color]} mb-2`}>{value}</div>
        <div className='text-sm text-gray-600 dark:text-gray-400 font-medium'>{label}</div>
      </CardContent>
    </Card>
  )
}
