# 📁 Portfolio System - Node.js

Sistem backend sederhana berbasis Node.js untuk mengelola dan mempublikasikan data portfolio pengguna. Proyek ini menyediakan autentikasi berbasis JWT, manajemen data portfolio, dan endpoint publik untuk menampilkan portfolio pengguna.

---

## 🔁 Alur Sistem

### 🔐 Autentikasi

1. Pengguna dapat **register** atau **login**.
2. Sistem mengembalikan **JWT token** setelah berhasil login.
3. Token digunakan untuk mengakses **endpoint privat**.

### 🗂️ Manajemen Data

Pengguna dapat mengelola berbagai data portfolio melalui endpoint berikut:

- **Profil**
- **Pendidikan**
- **Pengalaman**
- **Skill**
- **Proyek**

Setiap entitas mendukung metode:

- `GET` - mengambil data
- `POST` - membuat data baru
- `PUT` - memperbarui data
- `DELETE` - menghapus data

### 🌐 Publikasi Portfolio

- Portfolio pengguna dapat diakses secara publik melalui endpoint berdasarkan:
  - `username` atau
  - `user_id`
- Frontend menampilkan data tersebut dalam bentuk halaman portfolio yang elegan.

---

## 🚀 Fitur Utama

- Autentikasi JWT
- RESTful API lengkap
- Validasi data
- Modular dan mudah dikembangkan
- Endpoint publik untuk konsumsi frontend

---

## 🛠️ Teknologi

- **Node.js**
- **Express.js**
- **JWT (jsonwebtoken)**
- **dotenv**
- **Nodemon** (dev)
- **PostgreSQL / MongoDB** (tergantung implementasi database)

---

## 📦 Instalasi

```bash
git clone https://github.com/username/portfolio-BE.git
cd portfolio-BE
npm install


Tambahkan file .env dengan isi:
PORT=3000
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_pass
DB_NAME=your_db_name
DB_HOST=localhost
JWT_SECRET=your_secret_key

▶️ Menjalankan Server
npm run dev

📚 Struktur Folder
src/
├── routes/
│   ├── auth.routes.js
│   └── profile.routes.js
├── controllers/
├── models/
├── middlewares/
├── app.js
└── server.js

📄 Lisensi

---

Jika kamu sudah tentukan apakah pakai PostgreSQL, MongoDB, atau lainnya, bagian teknologi bisa disesuaikan. Mau saya bantu buat template `.env` otomatis juga?
```
