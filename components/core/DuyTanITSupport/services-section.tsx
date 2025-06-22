import { ServiceCard } from '@/components/core/DuyTanITSupport/service-card'
import { Code2, Database, Brain, GraduationCap, BookOpen, Settings } from 'lucide-react'

const services = [
  {
    title: 'Lập trình cơ bản',
    description: 'C/C++, Java, Python, OOP và các ngôn ngữ lập trình cơ bản',
    icon: Code2,
    color: 'blue'
  },
  {
    title: 'Cơ sở dữ liệu',
    description: 'SQL, Database Design, MySQL, PostgreSQL, Oracle',
    icon: Database,
    color: 'green'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Trí tuệ nhân tạo, thuật toán, cấu trúc dữ liệu',
    icon: Brain,
    color: 'purple'
  },
  {
    title: 'Đồ án & Luận văn',
    description: 'CDIO, đồ án chuyên ngành, khóa luận tốt nghiệp',
    icon: GraduationCap,
    color: 'orange'
  },
  {
    title: 'Tiểu luận & Báo cáo',
    description: 'Tư tưởng HCM, Lịch sử Đảng, Kinh tế chính trị, Tin học ứng dụng',
    icon: BookOpen,
    color: 'teal'
  },
  {
    title: 'Slide & Design',
    description: 'Slide thuyết trình, Word, Excel, Poster, Banner chuyên nghiệp',
    icon: Settings,
    color: 'pink'
  }
]

export function ServicesSection() {
  return (
    <section id='services' className='py-24 bg-white dark:bg-gray-900 transition-colors duration-300'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-300 bg-clip-text text-transparent'>
              Dịch vụ của chúng mình
            </span>
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Từ những bài tập nhỏ đến khóa luận tốt nghiệp, chúng mình hỗ trợ toàn diện với chất lượng cao và tận tâm
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8'>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
