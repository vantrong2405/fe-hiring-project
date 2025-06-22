import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  color: string
}

export function ServiceCard({ title, description, icon: Icon, color }: ServiceCardProps) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500',
    green: 'from-green-500 to-green-600 dark:from-green-400 dark:to-green-500',
    purple: 'from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500',
    orange: 'from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500',
    teal: 'from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500',
    pink: 'from-pink-500 to-pink-600 dark:from-pink-400 dark:to-pink-500'
  }

  return (
    <Card className='group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white dark:bg-gray-800'>
      <CardHeader className='text-center pb-4'>
        <div
          className={`w-16 h-16 bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className='w-8 h-8 text-white' />
        </div>
        <CardTitle className='text-xl font-bold text-gray-900 dark:text-white'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='text-center'>
        <p className='text-gray-600 dark:text-gray-300'>{description}</p>
      </CardContent>
    </Card>
  )
}
