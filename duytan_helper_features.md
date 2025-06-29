# 📘 Dự án Web hỗ trợ sinh viên Duy Tân

## 🎯 Mục tiêu chính

- Xây dựng một nền tảng hỗ trợ sinh viên Đại học Duy Tân
- Ưu tiên giao diện đơn giản, tốc độ nhanh, dễ dùng
- Hỗ trợ học tập, chia sẻ tài liệu, tính GPA, quản lý tín chỉ
- Có tiềm năng **thu phí / cho thuê** nếu phát triển ổn định

---

## ✅ Các tính năng đã làm (FE)

### 1. 🔢 Tính điểm GPA (client-side only)

- Tính GPA tích lũy
- Tính điểm cần thiết để đạt loại Giỏi / Xuất sắc
- Không cần lưu DB → xử lý toàn bộ ở FE

Link: [https://fe-hiring-project-m6ia3r87m-van-trongs-projects.vercel.app/tools/gpa-calculator](https://fe-hiring-project-m6ia3r87m-van-trongs-projects.vercel.app/tools/gpa-calculator)

---

## 🚀 Các tính năng đề xuất thêm (có thể làm BE)

### 📂 2. Chia sẻ tài liệu học tập / đề thi

**Chức năng chính:**

- Upload tài liệu PDF, DOCX, ZIP đề thi, slide...
- Gắn tags: môn học, học kỳ, loại tài liệu
- Tìm kiếm, xem, tải file
- Đánh giá (upvote/downvote), bình luận
- Quyền truy cập theo loại tài khoản (miễn phí / trả phí)

**Tech đề xuất:**

- BE: Rails API hoặc Next.js API
- File: AWS S3 / Cloudinary
- DB: PostgreSQL (tài liệu, vote, comment, user)

---

### 🧠 3. Tính năng mở rộng theo mô hình E-learning DTU

**3.1 Upload đề thi + đáp án**

- Người dùng (giảng viên/sinh viên) có thể upload đề trắc nghiệm dạng file Word/PDF có sẵn đáp án.
- Hệ thống xử lý tự động: đọc đề, tách câu hỏi, đáp án.

**3.2 Xáo trộn câu hỏi + sinh bộ đề mới**

- Cho phép sinh nhiều đề thi khác nhau từ 1 đề gốc (xáo thứ tự, thay biến số...).
- Tùy chọn số lượng câu hỏi lấy từ ngân hàng đề.

**3.3 Sinh câu hỏi mới bằng AI**

- Dùng AI để tạo thêm câu hỏi trắc nghiệm dựa trên nội dung đề đã upload.
- Có thể sinh đáp án đúng + giải thích vì sao chọn đáp án đó.

**3.4 Gợi ý quiz luyện tập từ đề thi**

- Tự động sinh quiz dựa trên đề người dùng upload.
- Người học có thể làm thử và xem đáp án, giải thích.

---

### 📝 4. Công cụ đánh giá giảng viên tự động (nếu crawl được API)

**Chức năng chính:**

- Auto đánh giá dựa trên tool (đã có mã nguồn)
- Chọn môn học → tự động đánh giá trên trang trường

**Tương lai:** Cho thuê, hoặc mở rộng cho các trường khác

---

### 🗂 5. Đăng ký tín chỉ hỗ trợ (có thể auto đăng ký nếu crawl API)

**Chức năng:**

- Giao diện chọn môn
- Proxy call API trường (hoặc tự động điền form nếu cần)
- Ưu tiên xử lý nhanh, lỗi ít

---

### 🧭 6. Hỗ trợ sắp xếp tín chỉ thông minh (AI + Crawling)

**Chức năng:**

- Nhập danh sách các mã môn cần học hoặc còn nợ tín chỉ
- Tự động crawl dữ liệu từ trang đăng ký học phần (dựa trên URL dạng `https://.../ma-mon-hoc`)
- Lấy thông tin môn học: thời gian học, giảng viên, số tín chỉ, học kỳ...
- Gợi ý cách sắp xếp thời khóa biểu hợp lý, tránh trùng lịch
- Có thể tích hợp tính năng AI để đề xuất lịch học tối ưu theo mục tiêu GPA, số tín cần tích lũy

**Tùy chọn mở rộng:**

- Cho phép người dùng lưu các tổ hợp đã chọn
- Đánh giá tổ hợp (tỉ lệ trùng lịch, độ khó, độ tiện thời gian...)

---

### 🤖 7. Tư vấn mục tiêu bằng AI (mini chatbot)

**Chức năng:**

- ChatGPT mini hỗ trợ tính toán: "em cần điểm gì để lên loại Giỏi?"
- Có thể dùng Gemini API key, hoặc TinyLLaMA offline
- Dùng LangChain để train nội dung custom

---

### 👤 8. Hệ thống tài khoản và phân quyền quản lý

**8.1 Đăng nhập / Đăng ký người dùng:**

- Xác thực bằng email + Devise hoặc JWT
- Reset mật khẩu qua email

**8.2 Phân quyền:**

- `Student`: xem và tải tài liệu, làm quiz, tạo tài khoản
- `Uploader`: được phép upload đề + tài liệu, gợi ý câu hỏi AI
- `Admin`: toàn quyền duyệt nội dung, xóa bài vi phạm, thống kê người dùng

**8.3 Dashboard quản trị:**

- Theo dõi số lượng tài liệu, số lượt tải, số câu hỏi quiz tạo ra
- Thống kê top người dùng upload nhiều nhất
- Duyệt / ẩn tài liệu vi phạm
- Khóa / mở khóa tài khoản vi phạm

**8.4 Giới hạn quyền:**

- Giới hạn số lần upload/ngày với tài khoản thường
- Tăng giới hạn nếu tài khoản xác thực hoặc mời được bạn

**8.5 Kiểm soát quyền truy cập tài liệu:**

- Chỉ tài khoản đã trả phí hoặc được cấp phép mới có thể xem tài liệu nâng cao
- Hệ thống nạp tiền và kiểm tra token truy cập tài liệu

---

### 🔐 9. Đăng nhập bằng Google / Facebook / Github

**Chức năng:**

- Đăng nhập nhanh bằng Google, Facebook, Github
- Ưu tiên email @dtu.edu.vn cho xác thực nội bộ
- Tự tạo tài khoản nếu lần đầu đăng nhập
- Gắn với Devise Omniauth (Rails) hoặc NextAuth (Next.js)

---

### 📊 10. Lịch sử học tập & kết quả quiz

**Chức năng:**

- Lưu kết quả mỗi lần làm quiz: điểm số, câu sai, thời gian
- Cho phép xem lại bài làm, gợi ý ôn tập cá nhân
- Thống kê tiến độ học tập theo thời gian

---

### 🗣️ 11. Bảng tin / cộng đồng nhẹ (giống Facebook Group)

**Chức năng:**

- Sinh viên đăng bài, bình luận, upvote
- Gắn tag môn học, học kỳ, nhóm ngành
- Admin có thể ghim bài, gắn thông báo

---

### 📚 12. Kho học liệu theo ngành học

**Chức năng:**

- Phân loại tài liệu theo ngành: IT, Kinh tế, Du lịch...
- Sub-folder theo học kỳ, môn học
- Mô tả ngắn, số tín chỉ liên quan, người upload
- Bookmark tài liệu yêu thích

---

### 🔍 13. Tìm kiếm nâng cao

**Chức năng:**

- Tìm theo tên môn, mã môn, loại tài liệu, người đăng
- Hỗ trợ fuzzy search (tìm gần đúng)

---

## 💡 Mở rộng dài hạn

- Đăng nhập: Devise (hoặc JWT nhẹ)
- Phân quyền user / admin
- Token vote giới hạn theo tài khoản
- Mỗi tài khoản có thể upload tối đa X file
- Kiếm tiền bằng: upload premium, cho thuê tool đăng ký tín chỉ, AI hỗ trợ học thuật, chia sẻ đề thi + tạo đề trắc nghiệm tự động

---

## 📁 Cấu trúc thư mục đề xuất

```
backend/
  app/
  config/
  controllers/
  models/
  ...
frontend/
  pages/
  components/
  tools/
    gpa-calculator/
  public/
uploads/ → sử dụng Cloudinary hoặc AWS S3
```

---

## 📌 Kết luận

Bạn nên làm BE trước cho tính năng **chia sẻ đề + tài liệu học**, vì đây là:

- Dễ triển khai
- Có tiềm năng kiếm traffic và dữ liệu
- Là nền để gắn thêm AI xử lý tài liệu, sinh câu hỏi, luyện thi về sau

