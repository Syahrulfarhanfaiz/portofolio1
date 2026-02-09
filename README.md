## 🎮 Game-Themed Personal Portfolio

- Website portofolio pribadi dengan tema game yang modern, estetik, dan responsif. Dibangun menggunakan HTML, CSS, dan JavaScript murni tanpa framework, sehingga mudah dijalankan, dipahami, dan dikembangkan.

- Proyek ini cocok digunakan sebagai:

- Portofolio pribadi

- Media belajar web dasar

- Showcase skill dan project

## ✨ Fitur Utama

- Dark Mode & Light Mode (tersimpan otomatis)

- Tampilan bertema game dengan efek glow

- Responsif (desktop, tablet, mobile)

- Animasi halus saat scroll dan hover

- Struktur kode sederhana dan mudah diedit

- Section foto (Home & About Me)

- Tanpa dependency tambahan

## 📁 Struktur Folder

portfolio/
├── index.html # Struktur halaman utama
├── style.css # Styling, warna, dan animasi
├── script.js # Interaksi dan toggle tema
└── README.md # Dokumentasi proyek

## 🚀 Cara Menjalankan Aplikasi

- Cara 1: Langsung (Paling Mudah)

1. Buka folder proyek
2. Klik dua kali file index.html
3. Website akan terbuka di browser
4. Tidak perlu install apa pun.

- Cara 2: Menggunakan Local Server (Disarankan)

1. Menggunakan Python
2. Pastikan Python sudah terinstall.
3. python -m http.server 8000
   Buka browser dan akses:
   http://localhost:8000

## 🎨 Cara Mengedit Konten

1. Mengganti Nama dan Deskripsi
Buka index.html, lalu ubah bagian berikut:
<h1 class="hero-name">Syahrul Farhan</h1>
<p class="hero-title">Information Systems Student</p>
<p class="hero-bio">
Mahasiswa Sistem Informasi yang menikmati vibe coding dan eksplorasi teknologi.
</p>

2. Mengganti Foto
Cari bagian berikut di index.html:
<img src="your-photo.jpg" alt="Profile Photo">
Ganti your-photo.jpg dengan foto milikmu.
Menambahkan Project
Duplikat card project ini:
<div class="project-card">
    <h3>Judul Project</h3>
    <p>Deskripsi singkat project.</p>
    <a href="https://github.com/username/nama-repo" target="_blank">
        View Code →
    </a>
</div>

3. Mengatur Skill
   Gunakan level skill berikut:
   <span class="skill-badge" data-level="advanced">HTML</span>
   <span class="skill-badge" data-level="intermediate">CSS</span>
   <span class="skill-badge" data-level="beginner">JavaScript</span>
   Keterangan level:
   advanced → sangat dikuasai
   intermediate → cukup dikuasai
   beginer → masih dipelajari

## 🌓 Dark & Light Mode

Default: Dark Mode
Bisa diganti melalui tombol toggle
Preferensi tersimpan otomatis
Warna dapat diubah di style.css melalui CSS variable.

## 🌐 Deployment (Upload ke Internet)

GitHub Pages
Push project ke GitHub
Masuk ke Settings → Pages
Pilih branch main dan root folder
Website aktif di GitHub Pages
Alternatif Hosting
Netlify
Vercel
Firebase Hosting
Hosting biasa (karena static)

## 🛠️ Troubleshooting

Gambar tidak muncul → cek path file
Animasi tidak jalan → cek script.js
Tema tidak tersimpan → cek localStorage

## 📝 Lisensi

Proyek ini bebas digunakan untuk keperluan pribadi dan pembelajaran.

## 👤 Author

Syahrul Farhan
Information Systems Student
Vibe Coding & Web Exploration
