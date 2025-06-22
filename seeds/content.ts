import { FAQ, Testimonial } from '../types/subjects.type'

export const faqData: FAQ[] = [
  {
    question: 'Anh có đảm bảo đồ án sẽ pass không?',
    answer:
      'Chúng mình cam kết làm đồ án đúng yêu cầu với chất lượng cao nhất. Tuy nhiên, điểm số cuối cùng phụ thuộc vào nhiều yếu tố như cách thuyết trình, câu hỏi của giảng viên. Chúng mình sẽ hỗ trợ bạn chuẩn bị thuyết trình và giải đáp mọi thắc mắc để bạn tự tin nhất.'
  },
  {
    question: 'Thời gian hoàn thành đồ án là bao lâu?',
    answer:
      'Thời gian hoàn thành phụ thuộc vào độ phức tạp: Đồ án môn học đơn giản (3-7 ngày), đồ án phức tạp (1-3 tuần), đồ án CDIO (2-6 tuần), khóa luận tốt nghiệp (1-3 tháng). Chúng mình sẽ thống nhất timeline cụ thể khi tư vấn.'
  },

  {
    question: 'Có thể làm đồ án online không?',
    answer:
      'Hoàn toàn có thể! Chúng mình làm việc online 100%, hỗ trợ qua Zalo, Telegram hoặc email. Bạn có thể theo dõi tiến độ và trao đổi mọi lúc, rất tiện lợi và hiệu quả.'
  },
  {
    question: 'Nếu nhờ anh hỗ trợ, có thể xin thêm tài liệu cũ để ôn thi không?',
    answer:
      'Có nhé! Nếu có tài liệu liên quan đến môn học đó, mình sẽ gửi bạn để tham khảo thêm. Điều này giúp bạn hiểu sâu hơn và chuẩn bị tốt cho kỳ thi.'
  }
]

export const testimonials: Testimonial[] = [
  {
    name: 'Nguyễn Văn A',
    role: 'Sinh viên CNTT K25 • CS 311',
    content:
      'Anh hỗ trợ rất tận tình, code chạy mượt mà và báo cáo rất chuyên nghiệp. Đồ án của em được điểm cao nhờ sự giúp đỡ của anh. Đặc biệt là anh còn giải thích chi tiết để em hiểu!',
    rating: 5,
    avatar: 'N'
  },
  {
    name: 'Trần Thị B',
    role: 'Sinh viên KHMT K24 • CS 417',
    content:
      'Mình đã stuck với đồ án AI suốt 2 tuần, nhờ anh mà chỉ trong 3 ngày đã hoàn thành. Hỗ trợ tận tâm, chất lượng tuyệt vời! Anh còn hướng dẫn em setup môi trường nữa.',
    rating: 5,
    avatar: 'T'
  },
  {
    name: 'Lê Văn C',
    role: 'Sinh viên CNTT K23 • SE 449',
    content:
      'Đồ án tốt nghiệp của em được anh hỗ trợ từ A-Z. Từ ý tưởng, thiết kế đến code và báo cáo. Kết quả vượt ngoài mong đợi! Thầy cô khen ngợi rất nhiều.',
    rating: 5,
    avatar: 'L'
  }
]

export const stats = [
  { value: '500+', label: 'Đồ án hoàn thành', color: 'blue' },
  { value: '98%', label: 'Tỷ lệ hài lòng', color: 'green' },
  { value: '24/7', label: 'Hỗ trợ online', color: 'purple' }
]

export const features = [
  {
    title: 'Kinh nghiệm thực tế',
    description:
      'Nhiều năm làm việc trong ngành IT, hiểu rõ yêu cầu thực tế của các dự án và xu hướng công nghệ mới nhất',
    color: 'blue'
  },
  {
    title: 'Hiểu chương trình Duy Tân',
    description: 'Nắm rõ yêu cầu của từng môn học, tiêu chí chấm điểm và phong cách giảng dạy tại trường Duy Tân',
    color: 'green'
  },
  {
    title: 'Hỗ trợ tận tình',
    description: 'Luôn sẵn sàng support và giải đáp thắc mắc 24/7, đến khi bạn hoàn thành và hiểu rõ đồ án',
    color: 'purple'
  }
]
