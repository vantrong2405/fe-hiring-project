import { Subject } from '../types/subjects.type'

export const programmingSubjects: Subject[] = [
  { code: 'CS 211', name: 'Lập Trình Cơ Sở', credits: '4 ĐVHT', price: '150K - 250K', tech: 'C/C++, Python, Java' },
  { code: 'CS 311', name: 'Lập Trình Hướng Đối Tượng', credits: '4 ĐVHT', price: '200K - 300K', tech: 'Java, C#, OOP' },
  {
    code: 'CR 424',
    name: 'Lập Trình Ứng Dụng Di Động',
    credits: '3 ĐVHT',
    price: '250K - 400K',
    tech: 'Android, iOS, React Native'
  },
  {
    code: 'CS 464',
    name: 'Lập Trình Ứng Dụng .NET',
    credits: '3 ĐVHT',
    price: '200K - 350K',
    tech: 'ASP.NET, WinForms, WPF'
  }
]

export const systemSubjects: Subject[] = [
  {
    code: 'CS 420',
    name: 'Hệ Phân Tán (J2EE, .NET)',
    credits: '3 ĐVHT',
    price: '300K - 500K',
    tech: 'Distributed Systems'
  },
  {
    code: 'CS 226',
    name: 'Hệ Điều Hành Unix/Linux',
    credits: '2 ĐVHT',
    price: '150K - 250K',
    tech: 'Shell, System Admin'
  },
  { code: 'CS 252', name: 'Mạng Máy Tính', credits: '3 ĐVHT', price: '200K - 350K', tech: 'Network, Security' },
  {
    code: 'CR 250',
    name: 'Nền Tảng Hệ Thống Máy Tính',
    credits: '3 ĐVHT',
    price: '200K - 300K',
    tech: 'Computer Architecture'
  }
]

export const databaseSubjects: Subject[] = [
  { code: 'IS 301', name: 'Cơ Sở Dữ Liệu', credits: '3 ĐVHT', price: '200K - 350K', tech: 'SQL, Database Design, ERD' },
  {
    code: 'IS 401',
    name: 'Hệ Quản Trị Cơ Sở Dữ Liệu',
    credits: '3 ĐVHT',
    price: '250K - 400K',
    tech: 'MySQL, PostgreSQL, Oracle'
  }
]

export const algorithmSubjects: Subject[] = [
  {
    code: 'CS 316',
    name: 'Cấu Trúc Dữ Liệu & Giải Thuật',
    credits: '3 ĐVHT',
    price: '200K - 350K',
    tech: 'Data Structures, Algorithms'
  },
  { code: 'CS 417', name: 'Trí Tuệ Nhân Tạo', credits: '3 ĐVHT', price: '300K - 500K', tech: 'Machine Learning, AI' }
]

export const softwareSubjects: Subject[] = [
  {
    code: 'CS 303',
    name: 'Phân Tích & Thiết Kế Hệ Thống',
    credits: '3 ĐVHT',
    price: '200K - 350K',
    tech: 'System Analysis'
  },
  {
    code: 'CS 353',
    name: 'Phân Tích & Thiết Kế Hướng Đối Tượng',
    credits: '2 ĐVHT',
    price: '150K - 250K',
    tech: 'OOA&D'
  },
  { code: 'CS 403', name: 'Công Nghệ Phần Mềm', credits: '3 ĐVHT', price: '200K - 350K', tech: 'Software Engineering' },
  {
    code: 'CS 462',
    name: 'Kiểm Thử & Đảm Bảo Chất Lượng',
    credits: '3 ĐVHT',
    price: '200K - 350K',
    tech: 'Testing, QA'
  },
  {
    code: 'CS 434',
    name: 'Công Cụ & Phương Pháp Thiết Kế',
    credits: '2 ĐVHT',
    price: '150K - 250K',
    tech: 'Design Tools'
  }
]

export const projectSubjects: Subject[] = [
  { code: 'CS 297', name: 'Đồ Án CDIO (Năm 2)', credits: 'CDIO', price: '800K - 1.5M', tech: 'Basic Project' },
  {
    code: 'SE 347',
    name: 'Đồ Án CDIO (Năm 3 - HK1)',
    credits: 'CDIO',
    price: '1.2M - 2.5M',
    tech: 'Intermediate Project'
  },
  { code: 'SE 397', name: 'Đồ Án CDIO (Năm 3 - HK2)', credits: 'CDIO', price: '1.5M - 3M', tech: 'Advanced Project' },
  { code: 'SE 447', name: 'Đồ Án CDIO (Năm 4 - HK1)', credits: 'CDIO', price: '2M - 4M', tech: 'Complex Project' },
  {
    code: 'CS 445',
    name: 'Đồ Án Chuyên Ngành: Tích Hợp Hệ Thống',
    credits: 'Chuyên ngành',
    price: '3M - 6M',
    tech: 'System Integration'
  },
  { code: 'SE 449', name: 'Khóa Luận Tốt Nghiệp', credits: 'Tốt nghiệp', price: '5M - 12M', tech: 'Thesis Project' }
]

export const essaySubjects: Subject[] = [
  {
    code: 'POS 151',
    name: 'Kinh Tế Chính Trị Marx - Lenin',
    credits: '2 ĐVHT',
    price: '80K - 150K',
    tech: 'Tiểu luận, Báo cáo'
  },
  {
    code: 'HIS 362',
    name: 'Lịch Sử Đảng Cộng Sản Việt Nam',
    credits: '2 ĐVHT',
    price: '80K - 150K',
    tech: 'Tiểu luận, Báo cáo'
  },
  { code: 'POS 361', name: 'Tư Tưởng Hồ Chí Minh', credits: '2 ĐVHT', price: '80K - 150K', tech: 'Tiểu luận, Báo cáo' },
  {
    code: 'POS 351',
    name: 'Chủ Nghĩa Xã Hội Khoa Học',
    credits: '2 ĐVHT',
    price: '80K - 150K',
    tech: 'Tiểu luận, Báo cáo'
  },
  {
    code: 'CS 201',
    name: 'Tin Học Ứng Dụng',
    credits: '3 ĐVHT',
    price: '100K - 200K',
    tech: 'Word, Excel, PowerPoint'
  }
]

export const presentationSubjects: Subject[] = [
  {
    code: 'Slide',
    name: 'Thiết Kế Slide Thuyết Trình',
    credits: 'Dịch vụ',
    price: '50K - 200K',
    tech: 'PowerPoint, Canva, Figma'
  },
  {
    code: 'Report',
    name: 'Làm Báo Cáo Word Chuyên Nghiệp',
    credits: 'Dịch vụ',
    price: '30K - 150K',
    tech: 'Word, Template Design'
  },
  {
    code: 'Excel',
    name: 'Xử Lý Dữ Liệu Excel',
    credits: 'Dịch vụ',
    price: '50K - 300K',
    tech: 'Excel, VBA, Dashboard'
  },
  {
    code: 'Design',
    name: 'Thiết Kế Poster, Banner',
    credits: 'Dịch vụ',
    price: '100K - 500K',
    tech: 'Photoshop, Illustrator'
  }
]
