# Team-10
Demo web mã hóa và giải mã file an toàn 
# 🔐 Secure File Encryption Web Demo

## 🧩 Giới thiệu
Trang web này minh họa cách **mã hóa và giải mã file an toàn** ngay trên trình duyệt.  
Thuật toán sử dụng là **AES-GCM 256-bit** kết hợp với **PBKDF2 (SHA-256)** để tạo khóa từ mật khẩu người dùng.  
Mọi xử lý đều diễn ra **hoàn toàn phía client** — không có dữ liệu hoặc mật khẩu nào được gửi lên máy chủ.

## 🚀 Cách dùng
1. Chọn file bạn muốn mã hóa hoặc giải mã.  
2. Nhập mật khẩu (passphrase) — nên dùng mật khẩu mạnh.  
3. Nhấn **Mã hóa 🔒** để tạo file `.enc` hoặc **Giải mã 🔓** nếu bạn có file `.enc`.  
4. File kết quả sẽ tự động tải xuống sau khi hoàn tất.

## 🌐 Chạy trực tiếp
Khi bật GitHub Pages:  
👉 https://<tên-github>.github.io/secure-encryption-demo/

## 🧠 Giải thích nhanh
- Khóa AES được sinh từ mật khẩu bằng **PBKDF2 (100,000 vòng lặp)** và một **salt ngẫu nhiên (16 byte)**.  
- Dữ liệu được mã hóa bằng **AES-GCM**, kèm **IV (12 byte)** để đảm bảo mỗi lần mã hóa là khác nhau.
