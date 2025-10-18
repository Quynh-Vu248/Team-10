# Team-10
# 🔐 Secure File Encryption Web Demo — Vigenère Cipher
      Demo web mã hóa và giải mã file an toàn 

## 🧩 Giới thiệu
Trang web này minh họa cách **mã hóa và giải mã file an toàn bằng thuật toán Vigenère**,  
được thực hiện **hoàn toàn phía client (trình duyệt)** — không gửi bất kỳ dữ liệu nào lên máy chủ.  

Thuật toán **Vigenère Cipher** là một dạng mã hóa đối xứng, mở rộng từ Caesar Cipher,  
sử dụng **chuỗi khóa (key)** để mã hóa dữ liệu theo từng byte.  

---

## 🚀 Cách dùng
1. **Chọn file** bạn muốn mã hóa hoặc giải mã.  
2. **Nhập khóa (key)** — nên chọn chuỗi ký tự đủ dài và khó đoán.  
3. Nhấn **Mã hóa 🔒** để tạo file `.enc`, hoặc **Giải mã 🔓** nếu bạn có file đã được mã hóa.  
4. **File kết quả** sẽ tự động tải xuống sau khi hoàn tất.

---

## 🌐 Chạy trực tiếp trên codespace của git

## 🧠 Giải thích nhanh
- Mỗi byte trong dữ liệu được cộng hoặc trừ với giá trị byte tương ứng trong **khóa (key)**.  
- Công thức:
  - **Mã hóa:** `C[i] = (P[i] + K[i % keylen]) mod 256`
  - **Giải mã:** `P[i] = (C[i] - K[i % keylen] + 256) mod 256`
- Thuật toán này đơn giản nhưng giúp hiểu rõ nguyên lý mã hóa đối xứng.  


## ⚙️ Công nghệ sử dụng
- **HTML / CSS / JavaScript**  
- **Client-side only** — toàn bộ xử lý diễn ra trong trình duyệt.  
- **Không cần backend**, không upload dữ liệu ra internet.
## 👥 Thành viên nhóm
- Vũ Mai Quỳnh - 23010223
- Nguyễn Minh Phương-23010190  


