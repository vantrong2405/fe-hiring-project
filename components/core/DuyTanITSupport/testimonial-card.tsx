import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
import type { Testimonial } from '@/types/subjects.type'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const avatarColors = ['blue', 'pink', 'green', 'purple', 'orange', 'teal']
  const colorIndex = testimonial.name.charCodeAt(0) % avatarColors.length
  const color = avatarColors[colorIndex]

  const avatarClasses = {
    blue: 'from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500',
    pink: 'from-pink-500 to-pink-600 dark:from-pink-400 dark:to-pink-500',
    green: 'from-green-500 to-green-600 dark:from-green-400 dark:to-green-500',
    purple: 'from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500',
    orange: 'from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500',
    teal: 'from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500'
  }

  return (
    <Card className='p-8 shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 bg-white dark:bg-gray-800 hover:-translate-y-1'>
      <CardContent className='p-0 space-y-6'>
        <div className='flex items-center space-x-1'>
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className='w-5 h-5 fill-yellow-400 text-yellow-400' />
          ))}
        </div>

        <blockquote className='text-gray-700 dark:text-gray-300 leading-relaxed italic text-lg'>
          "{testimonial.content}"
        </blockquote>

        <div className='flex items-center space-x-4 pt-4 border-t border-gray-100 dark:border-gray-700'>
          <div
            className={`w-12 h-12 bg-gradient-to-br ${avatarClasses[color as keyof typeof avatarClasses]} rounded-full flex items-center justify-center shadow-lg`}
          >
            <span className='text-white font-bold text-lg'>{testimonial.avatar}</span>
          </div>
          <div>
            <p className='font-semibold text-gray-900 dark:text-white text-lg'>{testimonial.name}</p>
            <Badge variant='outline' className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
              {testimonial.role}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
