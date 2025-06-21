import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import type { Subject } from '@/types/subjects.type'
import type { LucideIcon } from 'lucide-react'

interface PricingTableProps {
  title: string
  description: string
  subjects: Subject[]
  icon: LucideIcon
  color: string
}

export function PricingTable({ title, description, subjects, icon: Icon, color }: PricingTableProps) {
  const headerClasses = {
    blue: 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600',
    green: 'bg-gradient-to-r from-green-600 to-green-700 dark:from-green-500 dark:to-green-600',
    purple: 'bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600',
    orange: 'bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-500 dark:to-orange-600',
    red: 'bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600',
    indigo: 'bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-500 dark:to-indigo-600',
    teal: 'bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-500 dark:to-teal-600',
    pink: 'bg-gradient-to-r from-pink-600 to-pink-700 dark:from-pink-500 dark:to-pink-600'
  }

  const hoverClasses = {
    blue: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    green: 'hover:bg-green-50 dark:hover:bg-green-900/20',
    purple: 'hover:bg-purple-50 dark:hover:bg-purple-900/20',
    orange: 'hover:bg-orange-50 dark:hover:bg-orange-900/20',
    red: 'hover:bg-red-50 dark:hover:bg-red-900/20',
    indigo: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
    teal: 'hover:bg-teal-50 dark:hover:bg-teal-900/20',
    pink: 'hover:bg-pink-50 dark:hover:bg-pink-900/20'
  }

  const codeClasses = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    purple: 'text-purple-600 dark:text-purple-400',
    orange: 'text-orange-600 dark:text-orange-400',
    red: 'text-red-600 dark:text-red-400',
    indigo: 'text-indigo-600 dark:text-indigo-400',
    teal: 'text-teal-600 dark:text-teal-400',
    pink: 'text-pink-600 dark:text-pink-400'
  }

  const badgeClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300',
    green: 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300',
    purple: 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300',
    orange: 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300',
    red: 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300',
    indigo: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300',
    teal: 'bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300',
    pink: 'bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-300'
  }

  return (
    <Card className='shadow-2xl border-0 bg-white dark:bg-gray-800'>
      <CardHeader className={`${headerClasses[color as keyof typeof headerClasses]} text-white rounded-t-lg`}>
        <CardTitle className='text-2xl flex items-center'>
          <Icon className='w-6 h-6 mr-3' />
          {title}
        </CardTitle>
        <CardDescription className='text-white/90'>{description}</CardDescription>
      </CardHeader>
      <CardContent className='p-0'>
        <Table>
          <TableHeader>
            <TableRow className='bg-gray-50 dark:bg-gray-700'>
              <TableHead className='font-semibold text-gray-900 dark:text-gray-100'>Mã môn</TableHead>
              <TableHead className='font-semibold text-gray-900 dark:text-gray-100'>Tên môn học</TableHead>
              <TableHead className='font-semibold text-gray-900 dark:text-gray-100'>Tín chỉ</TableHead>
              <TableHead className='font-semibold text-gray-900 dark:text-gray-100'>Công nghệ</TableHead>
              <TableHead className='font-semibold text-gray-900 dark:text-gray-100 text-right'>Giá</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.map((subject, index) => (
              <TableRow key={index} className={`${hoverClasses[color as keyof typeof hoverClasses]} transition-colors`}>
                <TableCell className={`font-mono font-semibold ${codeClasses[color as keyof typeof codeClasses]}`}>
                  {subject.code}
                </TableCell>
                <TableCell className='font-medium text-gray-900 dark:text-gray-100'>{subject.name}</TableCell>
                <TableCell>
                  <Badge
                    variant='outline'
                    className='text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600'
                  >
                    {subject.credits}
                  </Badge>
                </TableCell>
                <TableCell className='text-sm text-gray-600 dark:text-gray-400'>{subject.tech}</TableCell>
                <TableCell className='text-right'>
                  <Badge className={`${badgeClasses[color as keyof typeof badgeClasses]} font-semibold`}>
                    {subject.price}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
