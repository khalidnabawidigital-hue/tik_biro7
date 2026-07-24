/* =========================================================================
   DATA ROADMAP — Informatika SMP Kelas VII (Kurikulum Merdeka)
   Sumber: Buku Siswa Informatika Kelas VII, Kemendikbudristek
   Ubah / tambah konten di sini. Setiap chapter.link adalah PLACEHOLDER,
   silakan ganti ke bab1.html, bab2.html, dst sesuai materi masing-masing.
   ========================================================================= */

const CHAPTERS = [
  {
    num: 1,
    slug: "bab1",
    title: "Informatika dan Keterampilan Generik",
    shortTitle: "Kenalan dengan Informatika",
    icon: "fa-compass",
    color: "#7C4DFF",
    colorSoft: "rgba(124,77,255,0.16)",
    badge: "Pemula",
    meetings: "6 Pertemuan",
    semester: 1,
    cp: "Memahami pentingnya Informatika, mengenal 8 elemen ilmu Informatika (BK, TIK, SK, JKI, AD, AP, DSI, PLB), serta mengasah keterampilan generik: bekerja dalam kelompok, merencanakan pekerjaan, dan mengomunikasikan hasil kerja secara efektif dan menarik.",
    points: [
      "Apa dan mengapa perlu belajar Informatika",
      "8 elemen ilmu Informatika & apa yang dipelajari di kelas VII",
      "Informatika dan Profil Pelajar Pancasila",
      "Bekerja dalam kelompok",
      "Mengomunikasikan hasil kerja"
    ],
    why: "Sebelum masuk materi teknis, kalian perlu tahu peta besar ilmu Informatika dan melatih cara kerja sama tim — dua bekal yang akan dipakai di setiap bab selanjutnya sepanjang tahun ini.",
    projects: ["Presentasi kelompok", "Infografis", "Buku kerja kolaborasi"]
  },
  {
    num: 2,
    slug: "bab2",
    title: "Berpikir Komputasional",
    shortTitle: "Melatih Cara Berpikir",
    icon: "fa-diagram-project",
    color: "#00E5FF",
    colorSoft: "rgba(0,229,255,0.16)",
    badge: "Mudah",
    meetings: "6 Pertemuan",
    semester: 1,
    cp: "Mengenal cara berpikir komputasional untuk menyelesaikan persoalan sehari-hari yang efektif dan efisien, melalui konsep algoritma, optimasi penjadwalan, struktur data, dan representasi data.",
    points: [
      "Apa itu berpikir komputasional",
      "Algoritma",
      "Optimasi penjadwalan",
      "Struktur data",
      "Representasi data"
    ],
    why: "Berpikir komputasional melatih kalian memecah masalah rumit jadi langkah-langkah kecil yang logis — kemampuan yang tetap berguna bahkan tanpa menyentuh komputer sama sekali.",
    projects: ["Studi kasus algoritma harian", "Simulasi penjadwalan", "Peta struktur data"]
  },
  {
    num: 3,
    slug: "bab3",
    title: "Teknologi Informasi dan Komunikasi",
    shortTitle: "Kuasai Perkakas Digital",
    icon: "fa-desktop",
    color: "#2EE6A8",
    colorSoft: "rgba(46,230,168,0.16)",
    badge: "Mudah",
    meetings: "8 Pertemuan",
    semester: 1,
    cp: "Mampu memanfaatkan tools (perkakas) yang banyak digunakan untuk urusan perkantoran: membuat surel, laporan, surat, presentasi, mengelola folder/file, serta mencari informasi dengan peramban dan search engine.",
    points: [
      "Pengenalan antarmuka pengguna (GUI)",
      "Folder, file, dan ekstensi file",
      "Peramban & search engine",
      "Surel (email)",
      "Aplikasi perkantoran / word processing"
    ],
    why: "Tools ini kalian pakai nyaris setiap hari — untuk sekolah maupun nanti bekerja. Menguasainya sejak dini membuat kalian jauh lebih produktif dan rapi mengelola data digital.",
    projects: ["Membuat surel resmi", "Dokumen laporan digital", "Pencarian informasi terverifikasi"]
  },
  {
    num: 4,
    slug: "bab4",
    title: "Sistem Komputer",
    shortTitle: "Bongkar Isi Komputer",
    icon: "fa-microchip",
    color: "#FFB020",
    colorSoft: "rgba(255,176,32,0.16)",
    badge: "Sedang",
    meetings: "8 Pertemuan",
    semester: 1,
    cp: "Menjelaskan bagian-bagian sebuah sistem komputer (perangkat keras & lunak), bagaimana sistem komputer bekerja dan berinteraksi dengan perangkat lain, serta memahami dasar bilangan biner sebagai cara data dikodifikasi.",
    points: [
      "Perangkat keras: input, proses, output, penyimpanan",
      "Perangkat lunak: sistem operasi & aplikasi",
      "Interaksi antarperangkat",
      "Spesifikasi perangkat keras",
      "Bilangan biner"
    ],
    why: "Memahami 'isi dalam' komputer membantu kalian memilih dan merawat perangkat dengan tepat, sekaligus paham bahasa dasar yang dipakai semua komputer di dunia: angka biner.",
    projects: ["Analisis spesifikasi laptop/HP", "Konversi bilangan biner", "Poster anatomi komputer"]
  },
  {
    num: 5,
    slug: "bab5",
    title: "Jaringan Komputer dan Internet",
    shortTitle: "Jelajah Dunia Maya",
    icon: "fa-wifi",
    color: "#FF2E92",
    colorSoft: "rgba(255,46,146,0.16)",
    badge: "Sedang",
    meetings: "6 Pertemuan",
    semester: 1,
    cp: "Memahami internet dan jaringan lokal dengan kabel atau nirkabel, cara menghubungkan perangkat dengan internet, serta melindungi data melalui teknik enkripsi sederhana.",
    points: [
      "Pengantar jaringan komputer & internet",
      "Koneksi Wi-Fi (Wireless LAN)",
      "Tethering",
      "Proteksi data & file",
      "Enkripsi dan Caesar's Cipher"
    ],
    why: "Internet itu seperti jalan raya data — memahami cara kerjanya membuat kalian lebih aman, bijak, dan percaya diri saat terkoneksi ke dunia maya.",
    projects: ["Simulasi enkripsi Caesar's Cipher", "Peta topologi jaringan rumah", "Praktik tethering aman"]
  },
  {
    num: 6,
    slug: "bab6",
    title: "Analisis Data",
    shortTitle: "Bicara Lewat Data",
    icon: "fa-chart-column",
    color: "#4D9EFF",
    colorSoft: "rgba(77,158,255,0.16)",
    badge: "Menantang",
    meetings: "10 Pertemuan",
    semester: 2,
    cp: "Mengolah dan menganalisis sekumpulan data menggunakan perkakas pengolah lembar kerja (spreadsheet), lalu menyajikannya dalam berbagai bentuk representasi: numerik, teks, dan gambar/grafik.",
    points: [
      "Mengenal data & satuan ukuran data",
      "Worksheet, freeze panes & cell reference",
      "Fungsi dasar & fungsi statistik",
      "Sort, filter & data validation",
      "Share and protect data"
    ],
    why: "Dari uang jajan sampai riset ilmiah, keputusan yang baik selalu lahir dari data yang diolah dengan benar — kemampuan ini dipakai di hampir semua profesi masa depan.",
    projects: ["Analisis data kelas dengan spreadsheet", "Dashboard grafik sederhana", "Studi kasus analisis data unplugged"]
  },
  {
    num: 7,
    slug: "bab7",
    title: "Algoritma dan Pemrograman",
    shortTitle: "Jadi Programmer Cilik",
    icon: "fa-code",
    color: "#FF6B4D",
    colorSoft: "rgba(255,107,77,0.16)",
    badge: "Menantang",
    meetings: "8 Pertemuan",
    semester: 2,
    cp: "Menjelaskan lingkungan pemrograman blok/visual (Scratch) serta mampu membuat dan memodifikasi program blok untuk tujuan tertentu sesuai contoh, guna menghasilkan karya kreatif.",
    points: [
      "Mengapa & bagaimana belajar programming",
      "Mengenal Scratch dan membuat akun",
      "Mengenal \"universe\" Scratch",
      "Eksplorasi fungsi dasar",
      "Robot manual (unplugged coding)"
    ],
    why: "Ini saatnya kalian jadi 'sutradara' komputer — menyusun instruksi blok demi blok menjadi animasi, game, atau cerita interaktif hasil karya sendiri.",
    projects: ["Program animasi Scratch", "Game sederhana", "Aktivitas Robot Manual"]
  },
  {
    num: 8,
    slug: "bab8",
    title: "Dampak Sosial Informatika",
    shortTitle: "Jadi Warga Digital Cerdas",
    icon: "fa-shield-halved",
    color: "#B24DFF",
    colorSoft: "rgba(178,77,255,0.16)",
    badge: "Sedang",
    meetings: "6 Pertemuan",
    semester: 2,
    cp: "Memahami dampak positif dan negatif teknologi informasi & komunikasi terhadap kehidupan masyarakat, cara berkolaborasi secara sehat di dunia maya, serta memahami informasi pribadi dan hukum privasi.",
    points: [
      "Perkembangan & pengaruh TIK bagi masyarakat",
      "Dampak positif dan negatif TIK",
      "Kolaborasi di dunia maya",
      "Media sosial",
      "Informasi pribadi & hukum privasi"
    ],
    why: "Teknologi itu ibarat pedang bermata dua — memahami dampaknya membuat kalian jadi warga digital yang cerdas dan bertanggung jawab, bukan sekadar pengguna.",
    projects: ["Kampanye digital citizenship", "Poster keamanan data pribadi", "Diskusi studi kasus media sosial"]
  },
  {
    num: 9,
    slug: "bab9",
    title: "Praktika Lintas Bidang Informatika",
    shortTitle: "Panggung Karya Nyata",
    icon: "fa-flask",
    color: "#2EFFB0",
    colorSoft: "rgba(46,255,176,0.16)",
    badge: "Project",
    meetings: "8 Pertemuan",
    semester: 2,
    cp: "Mengembangkan artefak komputasional lintas bidang dengan menggabungkan seluruh kemampuan yang telah dipelajari sepanjang tahun, dimulai dari eksplorasi bermain menggunakan perangkat seperti Makey Makey.",
    points: [
      "Starter Makey Makey: bermain dengan alat",
      "Pengembangan synthesizer dengan media air",
      "Aktivitas unplugged: bermain strategi",
      "Menggabungkan BK, TIK, SK, JKI, AD, AP & DSI"
    ],
    why: "Inilah panggung final: seluruh ilmu setahun digabung jadi satu proyek nyata dan seru yang bisa kalian pamerkan serta banggakan ke teman dan keluarga.",
    projects: ["Synthesizer Makey Makey", "Instalasi interaktif", "Proyek lintas bidang tim"]
  }
];

const TARGETS = [
  { icon: "fa-diagram-project", text: "Menerapkan berpikir komputasional" },
  { icon: "fa-desktop", text: "Mahir menggunakan perkakas TIK & Microsoft Office" },
  { icon: "fa-microchip", text: "Memahami cara kerja komputer" },
  { icon: "fa-wifi", text: "Menggunakan internet secara aman & bijak" },
  { icon: "fa-chart-column", text: "Mengelola dan menganalisis data" },
  { icon: "fa-code", text: "Membuat program dengan Scratch" },
  { icon: "fa-shield-halved", text: "Menjaga privasi & bersikap bijak di dunia maya" },
  { icon: "fa-flask", text: "Menyelesaikan proyek Informatika lintas bidang" }
];
