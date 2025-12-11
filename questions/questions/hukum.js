const questions = [
  {
    question: "Hukum kearsipan pada dasarnya merupakan seperangkat ketentuan yang mengatur…",
    options: [
      "Tata cara promosi instansi pemerintah",
      "Pengelolaan, penyimpanan, dan pemanfaatan arsip",
      "Tata kelola peralatan kantor",
      "Etika komunikasi organisasi"
    ],
    answer: 1,
    explanation: "Hukum kearsipan mengatur siklus hidup arsip. Tenang Bu, bukan siklus hidup mantan 🤣."
  },
  {
    question: "Landasan hukum kearsipan utama di Indonesia saat ini adalah…",
    options: ["UU No. 43 Tahun 2009", "UU No. 14 Tahun 2005", "UU No. 11 Tahun 2008", "UU No. 20 Tahun 2003"],
    answer: 0,
    explanation: "UU 43/2009 adalah kitab sucinya dunia arsip, Bu. Bukan kitab zodiak."
  },
  {
    question: "Arsip dianggap sebagai alat bukti hukum karena…",
    options: [
      "Memiliki nilai estetika",
      "Mengandung informasi autentik dan terpercaya",
      "Berisi dekorasi kantor",
      "Dibuat oleh pejabat terkenal"
    ],
    answer: 1,
    explanation: "Autentik di sini Bu, bukan 'autentik skincare' 🤣."
  },
  {
    question: "Asas legalitas dalam kearsipan berarti…",
    options: [
      "Semua arsip harus disimpan di ruang tertutup",
      "Penyelenggaraan arsip harus berdasarkan ketentuan hukum",
      "Arsip hanya boleh digunakan oleh pejabat tertentu",
      "Arsip wajib disimpan secara manual"
    ],
    answer: 1,
    explanation: "Legalitas = sesuai hukum. Bukan sesuai mood staf admin Bu 😭."
  },
  {
    question: "Arsip dinyatakan memiliki autentisitas apabila…",
    options: [
      "Ditandatangani oleh pihak lain",
      "Dibuat sesuai prosedur dan tidak mengalami perubahan",
      "Dibuat menggunakan media mahal",
      "Dibuat lebih dari satu lembar"
    ],
    answer: 1,
    explanation: "Autentisitas = asli. Kayak Bu Syafira, gak ada duanya 😎."
  },
  {
    question: "Kewenangan tertinggi dalam pengelolaan arsip statis dimiliki oleh…",
    options: ["ANRI", "BKN", "Kemendikbud", "Kementerian Sosial"],
    answer: 0,
    explanation: "ANRI ini boss-nya arsip statis Bu. Kalau arsip punya presiden, itu ANRI."
  },
  {
    question: "Kearsipan di Indonesia menganut asas akuntabilitas, artinya…",
    options: [
      "Arsip harus mudah disembunyikan",
      "Arsip dapat dipertanggungjawabkan",
      "Arsip tidak perlu dibuka untuk publik",
      "Arsip boleh dimodifikasi sewaktu-waktu"
    ],
    answer: 1,
    explanation: "Akuntabilitas = dapat dipertanggungjawabkan. Tidak seperti alasan telat masuk ya Bu 🤣."
  },
  {
    question: "PP No. 28 Tahun 2012 mengatur tentang…",
    options: [
      "Sertifikasi Arsiparis",
      "Pelaksanaan UU Kearsipan",
      "Pengelolaan Keuangan Negara",
      "Administrasi Kependudukan"
    ],
    answer: 1,
    explanation: "PP 28/2012 adalah panduan teknis UU 43/2009. Penting banget Bu!"
  },
  {
    question: "Salah satu unsur penting agar arsip dapat menjadi alat bukti di pengadilan adalah…",
    options: ["Jenis kertas", "Autentisitas arsip", "Jumlah lampiran", "Ukuran dokumen"],
    answer: 1,
    explanation: "Hakim gak nanya ‘kertasnya ivory apa HVS Bu?’ 😭 Yang penting autentik!"
  },
  {
    question: "Arsip yang wajib dilindungi karena berkaitan dengan hak-hak warga negara disebut…",
    options: ["Arsip vital", "Arsip dinamis", "Arsip sementara", "Arsip duplikasi"],
    answer: 0,
    explanation: "Arsip vital = nyawa instansi. Hilang? Bisa chaos Bu 😱."
  },
  {
    question: "Kerahasiaan arsip merupakan penerapan asas…",
    options: ["Transparansi", "Perlindungan", "Efisiensi", "Otensitas"],
    answer: 1,
    explanation: "Gak semua arsip boleh diumbar Bu. Beda sama status WA 🤣."
  },
  {
    question: "Klasifikasi keamanan arsip bertujuan untuk…",
    options: [
      "Menghias dokumen agar menarik",
      "Menentukan tingkat akses terhadap arsip",
      "Membatasi jumlah arsip",
      "Mempercepat proses tanda tangan"
    ],
    answer: 1,
    explanation: "Arsip itu kayak hati Bu… tidak semua orang boleh akses 😌."
  },
  {
    question: "Perusakan arsip negara tanpa izin termasuk tindak…",
    options: ["Etik", "Administratif ringan", "Pidana", "Disiplin biasa"],
    answer: 2,
    explanation: "Hati-hati Bu. Hancurin arsip = bisa hancur masa depan instansi 🤣."
  },
  {
    question: "Arsip publik dapat diakses masyarakat setelah…",
    options: [
      "Dokumen dibakar",
      "Masa retensi dan ketentuan akses terpenuhi",
      "Pemerintah mengumumkan di televisi",
      "Arsip dipindahkan ke museum"
    ],
    answer: 1,
    explanation: "Sabar Bu… ada durasi tunggunya. Bukan kayak nunggu ojek online."
  },
  {
    question: "Arsip yang mengandung informasi rahasia negara termasuk kategori…",
    options: ["Arsip vital", "Arsip terlarang", "Arsip terklasifikasi", "Arsip publik"],
    answer: 2,
    explanation: "Terklasifikasi Bu. Jangan bocorin ke gebetan 🤭."
  },
  {
    question: "Salah satu tujuan penyusunan jadwal retensi arsip adalah…",
    options: [
      "Memperbanyak arsip",
      "Menentukan jangka simpan dan nasib akhir arsip",
      "Mengurangi jumlah pegawai arsip",
      "Membuat arsip menjadi lebih indah"
    ],
    answer: 1,
    explanation: "Retensi = jadwal hidup arsip. Kapan dia pensiun Bu 😎."
  },
  {
    question: "Asas transparansi dalam kearsipan berarti…",
    options: [
      "Arsip boleh digunakan bebas tanpa aturan",
      "Arsip dapat diakses sesuai ketentuan hukum",
      "Semua arsip harus diunggah ke internet",
      "Arsip tidak perlu dilindungi"
    ],
    answer: 1,
    explanation: "Transparan itu bukan buka semua, Bu. Ada aturannya 🤣."
  },
  {
    question: "Arsip yang sudah kedaluwarsa nilai gunanya tetapi wajib disimpan karena bernilai sejarah termasuk arsip…",
    options: ["Dinamis aktif", "Dinamis inaktif", "Statis", "Vital"],
    answer: 2,
    explanation: "Arsip statis = VIP arsip. Gak bisa dibuang, Bu 😤."
  },
  {
    question: "Pihak yang memiliki wewenang menetapkan kebijakan kearsipan nasional adalah…",
    options: ["ANRI", "Kemenkominfo", "KPU", "Bappenas"],
    answer: 0,
    explanation: "ANRI = jenderal besar kearsipan Bu 😎."
  },
  {
    question: "Pelanggaran terhadap ketentuan retensi arsip dapat menyebabkan…",
    options: ["Sanksi administratif atau pidana", "Bonus tahunan", "Kenaikan jabatan", "Tidak ada dampak"],
    answer: 0,
    explanation: "Salah simpan arsip bisa runyam Bu. Jangan sok-sokan dibuang 🤣."
  },
  {
    question: "Arsip elektronik wajib dijamin integritasnya, artinya…",
    options: [
      "Boleh diubah sedikit",
      "Harus terjaga keutuhan datanya",
      "Wajib diprint setiap bulan",
      "Tidak boleh digunakan"
    ],
    answer: 1,
    explanation: "Integritas = jangan diedit-edit Bu. Ini arsip, bukan foto selfie 😭."
  },
  {
    question: "Ketentuan mengenai akses arsip publik diatur dalam…",
    options: ["UU ITE", "UU Kearsipan", "UU Perpustakaan", "UU Kepegawaian"],
    answer: 1,
    explanation: "UU 43/2009 lagi Bu. Bintang utama kearsipan."
  },
  {
    question: "Arsip vital harus mendapat perlindungan khusus karena…",
    options: [
      "Berbentuk surat cinta",
      "Mengandung informasi menyangkut kelangsungan organisasi",
      "Jumlahnya sedikit",
      "Sulit dicetak ulang"
    ],
    answer: 1,
    explanation: "Vital Bu… kayak nadi organisasi, bukan nadi gebetan 😌."
  },
  {
    question: "Pejabat yang bertanggung jawab terhadap pengelolaan arsip dinamis di instansi adalah…",
    options: ["Arsiparis", "Pustakawan", "Sekretaris Jenderal", "Kepala HRD"],
    answer: 0,
    explanation: "Arsiparis itu Avengers-nya per-arsipan Bu."
  },
  {
    question: "Hak masyarakat untuk mendapatkan arsip publik disebut…",
    options: [
      "Hak konsumsi informasi",
      "Hak akses informasi",
      "Hak konsultasi",
      "Hak penyimpanan"
    ],
    answer: 1,
    explanation: "Hak akses itu hak masyarakat, bukan hak untuk gosip Bu 🤣."
  },
  {
    question: "Salah satu indikator informasi arsip dapat dibuka untuk publik adalah…",
    options: [
      "Tidak mengandung rahasia negara",
      "Memiliki sampul menarik",
      "Jumlah halamannya sedikit",
      "Tersimpan di komputer"
    ],
    answer: 0,
    explanation: "Kalau ada rahasia negara? Sorry Bu, ga boleh ngintip 🤭."
  },
  {
    question: "Pemusnahan arsip dilakukan apabila…",
    options: [
      "Arsip sudah jelek secara fisik",
      "Arsip kadaluarsa sesuai jadwal retensi",
      "Arsip tidak rapi",
      "Arsip tidak disukai pegawai"
    ],
    answer: 1,
    explanation: "Pemusnahan gak boleh asal Bu. Bukan cuci gudang Shopee 😭."
  },
  {
    question: "Penyelenggaraan kearsipan bertujuan untuk…",
    options: [
      "Menambah pekerjaan pegawai",
      "Menjamin ketersediaan informasi yang akurat",
      "Mengurangi jumlah pegawai",
      "Membuat dokumen menjadi indah"
    ],
    answer: 1,
    explanation: "Informasi akurat itu penting Bu. Gak kayak ramalan zodiak."
  },
  {
    question: "Akses terhadap arsip terklasifikasi hanya diberikan kepada…",
    options: [
      "Publik umum",
      "Pegawai tanpa batasan",
      "Pihak yang berwenang",
      "Semua mahasiswa"
    ],
    answer: 2,
    explanation: "Bukan untuk konsumsi umum Bu… jangan iseng buka 😭."
  },
  {
    question: "Sistem kearsipan menjadi dasar penyelenggaraan pemerintahan karena…",
    options: [
      "Mendukung kelancaran administrasi",
      "Meningkatkan kecepatan internet",
      "Memperindah ruang kantor",
      "Mengurangi kertas"
    ],
    answer: 0,
    explanation: "Administrasi lancar = negara aman. Arsip itu underrated Bu 😎."
  },
  {
    question: "Salah satu bentuk perlindungan arsip elektronik adalah…",
    options: [
      "Menghapus file lama",
      "Memastikan backup dan keamanan data",
      "Membuat password mudah ditebak",
      "Membiarkan file tanpa proteksi"
    ],
    answer: 1,
    explanation: "Backup itu wajib Bu. Jangan nunggu laptop hang baru panik 😭."
  },
  {
    question: "Arsip memiliki fungsi hukum apabila…",
    options: [
      "Memiliki stempel lucu",
      "Memenuhi unsur autentisitas dan integritas",
      "Diberi sampul baru",
      "Dipindahkan ke folder biru"
    ],
    answer: 1,
    explanation: "Hukum itu butuh arsip yang ASLI Bu, bukan ASLI dari Shopee 😎."
  },
  {
    question: "Jadwal retensi arsip ditetapkan oleh…",
    options: ["ANRI", "Lembaga Arsip Daerah", "Instansi pencipta arsip", "KPU"],
    answer: 2,
    explanation: "Yang bikin arsip = yang nentuin retensi. Logis Bu."
  },
  {
    question: "Sanksi bagi pegawai yang menghilangkan arsip negara dapat berupa…",
    options: ["Teguran ringan", "Pemotongan gaji", "Pidana", "Tidak ada sanksi"],
    answer: 2,
    explanation: "Hilangin arsip negara? Waduh Bu… bisa hilang juga kebebasannya 😭."
  },
  {
    question: "Akses arsip publik dapat ditutup apabila…",
    options: [
      "Arsip belum selesai diketik",
      "Arsip mengandung informasi sensitif",
      "Arsip tidak memiliki sampul",
      "Arsip terlalu panjang"
    ],
    answer: 1,
    explanation: "Sensitif kayak perasaan Bu kalau belum sarapan 🤣."
  },
  {
    question: "Arsip elektronik harus dijaga keamanannya untuk mencegah…",
    options: [
      "Perubahan tidak sah",
      "Penggunaan kertas berlebihan",
      "Kebosanan pegawai",
      "Penggunaan tinta palsu"
    ],
    answer: 0,
    explanation: "Dihack? Bahaya Bu. Nanti arsip berubah jadi resep mie goreng 😭."
  },
  {
    question: "Arsip statis berfungsi sebagai…",
    options: [
      "Bukti sejarah dan memori kolektif bangsa",
      "Sarana dekorasi ruang kerja",
      "Laporan keuangan mingguan",
      "Dokumen cadangan sementara"
    ],
    answer: 0,
    explanation: "Arsip statis = memori bangsa Bu. Jangan disamakan dengan memo belanja 😎."
  }
];
