import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  color: 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'pink'
  features: string[]
}

export function FeatureCard({ title, description, icon: Icon, color, features }: FeatureCardProps) {
  const colorVariants = {
    blue: {
      gradient: 'from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500',
      badge: 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300',
      border: 'border-blue-200 dark:border-blue-700'
    },
    green: {
      gradient: 'from-green-500 to-green-600 dark:from-green-400 dark:to-green-500',
      badge: 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300',
      border: 'border-green-200 dark:border-green-700'
    },
    purple: {
      gradient: 'from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500',
      badge: 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300',
      border: 'border-purple-200 dark:border-purple-700'
    },
    orange: {
      gradient: 'from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500',
      badge: 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300',
      border: 'border-orange-200 dark:border-orange-700'
    },
    teal: {
      gradient: 'from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500',
      badge: 'bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300',
      border: 'border-teal-200 dark:border-teal-700'
    },
    pink: {
      gradient: 'from-pink-500 to-pink-600 dark:from-pink-400 dark:to-pink-500',
      badge: 'bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-300',
      border: 'border-pink-200 dark:border-pink-700'
    }
  }

  const variant = colorVariants[color]

  return (
    <Card
      className={`group hover:shadow-2xl transition-all duration-300 border-2 ${variant.border} hover:-translate-y-2 bg-white dark:bg-gray-800`}
    >
      <CardHeader className='text-center pb-4'>
        <div
          className={`w-16 h-16 bg-gradient-to-br ${variant.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          <Icon className='w-8 h-8 text-white' />
        </div>
        <CardTitle className='text-xl font-bold text-gray-900 dark:text-white'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <p className='text-gray-600 dark:text-gray-300 text-center'>{description}</p>
        <div className='space-y-2'>
          {features.map((feature, index) => (
            <Badge key={index} variant='outline' className={`${variant.badge} text-xs font-medium`}>
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
