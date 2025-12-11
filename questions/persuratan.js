const questions = [
  {
    question: "Pengurusan surat merupakan bagian dari administrasi perkantoran yang bertujuan untuk…",
    options: [
      "Meningkatkan jumlah pegawai",
      "Mengatur arus informasi secara tertib dan efisien",
      "Mempersulit proses birokrasi",
      "Memperbanyak penggunaan kertas"
    ],
    answer: 1,
    explanation: "Tujuannya biar informasi mengalir mulus, Bu. Bukan kayak sinyal WiFi kos-kosan 🤣."
  },
  {
    question: "Surat resmi adalah surat yang dibuat oleh…",
    options: [
      "Individu tanpa jabatan",
      "Organisasi atau instansi dalam rangka urusan kedinasan",
      "Kelompok masyarakat umum",
      "Mahasiswa yang sedang belajar mengetik"
    ],
    answer: 1,
    explanation: "Surat resmi itu punya wibawa Bu… beda sama chat ‘p’ di WhatsApp 😭."
  },
  {
    question: "Fungsi nomor surat dalam tata persuratan adalah…",
    options: [
      "Sebagai hiasan surat",
      "Mengidentifikasi surat secara unik",
      "Memberi kesan profesional",
      "Menentukan tingkat kerahasiaan"
    ],
    answer: 1,
    explanation: "Nomor surat itu ID kartu lahirnya surat Bu. Biar ga ketuker 😎."
  },
  {
    question: "Kearsipan surat masuk dimulai dari tahap…",
    options: [
      "Distribusi",
      "Pencatatan",
      "Penyimpanan",
      "Penyusutan"
    ],
    answer: 1,
    explanation: "Setiap surat masuk dicatat dulu. Masa mau langsung disimpen tanpa kenalan Bu? 🤣"
  },
  {
    question: "Lembar disposisi digunakan untuk…",
    options: [
      "Mengirim surat keluar",
      "Mencatat instruksi pimpinan atas surat masuk",
      "Menggantikan arsip utama",
      "Melaporkan surat rusak"
    ],
    answer: 1,
    explanation: "Disposisi itu kaya ‘pesan rahasia bos’, tapi legal Bu 😎."
  },
  {
    question: "Surat keluar harus ditandatangani oleh…",
    options: [
      "Pegawai biasa",
      "Pejabat berwenang",
      "Staf cleaning service",
      "Mahasiswa magang"
    ],
    answer: 1,
    explanation: "Harus pejabat berwenang Bu. Kalau cleaning service tanda tangan nanti salah fokus 😭."
  },
  {
    question: "Agenda surat masuk berfungsi untuk…",
    options: [
      "Menghias meja",
      "Mencatat semua surat masuk secara kronologis",
      "Mengarsipkan surat secara digital",
      "Menentukan prioritas kerahasiaan"
    ],
    answer: 1,
    explanation: "Agenda itu diary-nya surat Bu. Tapi tanpa curhat-curhatan galau."
  },
  {
    question: "Konsep asas kecepatan dalam tata persuratan berarti…",
    options: [
      "Surat harus diproses secepat mungkin",
      "Surat tidak boleh diproses sebelum rapat selesai",
      "Surat dikirim tanpa pemeriksaan",
      "Surat diproses jika pegawai sedang tidak sibuk"
    ],
    answer: 0,
    explanation: "Cepat, tapi jangan ngasal Bu. Bukan lomba lari estafet 😎."
  },
  {
    question: "Surat dinas yang berisi permintaan informasi disebut…",
    options: ["Surat perintah", "Surat permohonan", "Surat edaran", "Nota dinas"],
    answer: 1,
    explanation: "Permohonan = minta info Bu. Bukan minta diskon skincare 🤣."
  },
  {
    question: "Pencatatan surat keluar diperlukan untuk…",
    options: [
      "Mengetahui siapa yang mengetik surat",
      "Menjadi bukti legal pengiriman surat",
      "Mengurangi risiko kehilangan file digital",
      "Membuat ruangan lebih rapi"
    ],
    answer: 1,
    explanation: "Jadi kalau ada yang bilang 'belum dikirim', buka buku agenda Bu… TINGG!!"
  },
  {
    question: "Kode klasifikasi surat digunakan untuk…",
    options: [
      "Menentukan ukuran amplop",
      "Mengelompokkan surat berdasarkan isi atau perihal",
      "Menentukan jadwal rapat",
      "Mengatur distribusi gaji"
    ],
    answer: 1,
    explanation: "Kode klasifikasi = alamat rumahnya surat Bu. Biar ga nyasar~"
  },
  {
    question: "Surat yang bersifat 'rahasia' biasanya ditandai dengan…",
    options: ["Stempel penting", "Stempel confidential", "Amplop warna-warni", "Tanda bintang"],
    answer: 1,
    explanation: "Confidential itu serius Bu. Jangan dibuka sambil makan cimol 🤣."
  },
  {
    question: "Nota dinas digunakan untuk…",
    options: [
      "Komunikasi kedinasan internal",
      "Mengirim barang",
      "Mengumumkan acara publik",
      "Melaporkan kegiatan informal"
    ],
    answer: 0,
    explanation: "Nota dinas itu WA resminya kantor Bu."
  },
  {
    question: "Surat edaran diterbitkan untuk…",
    options: [
      "Instruksi internal",
      "Informasi umum untuk banyak pihak",
      "Dokumentasi rapat",
      "Mengganti memo"
    ],
    answer: 1,
    explanation: "Surat edaran = pengumuman resmi. Bukan selebaran promo Odading Mang Oleh 😭."
  },
  {
    question: "Tata naskah dinas mengatur tentang…",
    options: [
      "Gaya bahasa untuk rapat daring",
      "Format dan bentuk surat dinas",
      "Struktur bangunan kantor",
      "Prosedur pembayaran pajak"
    ],
    answer: 1,
    explanation: "Tata naskah = grammar-nya surat dinas Bu 🤓."
  },
  {
    question: "Dalam pengurusan surat, prinsip 'ketepatan' berarti…",
    options: [
      "Surat harus dibalas cepat",
      "Isi surat harus sesuai konteks dan tujuan",
      "Surat harus diketik dua kali",
      "Penulisan dilakukan tanpa mengecek data"
    ],
    answer: 1,
    explanation: "Tepat isi, tepat tujuan. Bukan surat nyasar ke mantan Bu 😭."
  },
  {
    question: "Penyimpanan surat yang menggunakan urutan abjad termasuk sistem…",
    options: ["Sistem subjek", "Sistem abjad", "Sistem wilayah", "Sistem nomor"],
    answer: 1,
    explanation: "Abjad itu basic tapi efektif Bu. Kayak A—Awal mula cinta 🤣."
  },
  {
    question: "Surat keluar harus dilengkapi dengan…",
    options: ["Nomor telepon pegawai", "Nomor surat", "Nomor meja kerja", "Kode amplifier"],
    answer: 1,
    explanation: "Nomor surat = identitas resmi. Jangan diganti nomor WA Bu 😭."
  },
  {
    question: "Lampiran surat dicantumkan untuk…",
    options: [
      "Gaya-gayaan",
      "Memberi tahu ada dokumen tambahan",
      "Mengurangi panjang surat",
      "Menaikkan jabatan"
    ],
    answer: 1,
    explanation: "Lampiran itu penting Bu. Buktinya gak bisa dihapal doang 😎."
  },
  {
    question: "Dalam sistem tanda tangan elektronik, hal yang wajib dipenuhi adalah…",
    options: ["Nama panjang", "Sertifikat elektronik", "Stempel basah", "Nomor surat manual"],
    answer: 1,
    explanation: "TTE itu legal Bu. Jangan takut, bukan kiriman santet digital 🤣."
  },
  {
    question: "Surat yang berisi pemberitahuan resmi disebut…",
    options: ["Surat perintah", "Surat pemberitahuan", "Surat rahasia", "Memo"],
    answer: 1,
    explanation: "Namanya udah jelas Bu. Jangan dipikir keras 😭."
  },
  {
    question: "Surat permohonan biasanya berisi…",
    options: [
      "Perintah dari atasan",
      "Permintaan bantuan atau persetujuan",
      "Penawaran barang",
      "Informasi acara kantor"
    ],
    answer: 1,
    explanation: "Permohonan = minta tolong. Bukan minta balikan Bu 😭."
  },
  {
    question: "Pencatatan surat masuk biasanya dilakukan menggunakan…",
    options: ["Buku agenda", "Buku tamu", "Buku panduan", "Buku rapor"],
    answer: 0,
    explanation: "Agenda = buku ngumpulin semua cerita surat Bu."
  },
  {
    question: "Distribusi surat masuk dilakukan setelah…",
    options: ["Perekaman", "Penyimpanan", "Penyusunan", "Penandatanganan"],
    answer: 0,
    explanation: "Dicatat dulu baru dibagi Bu. Bukan kayak bagi-bagi amplop di kondangan 🤣."
  },
  {
    question: "Surat keluar yang telah ditandatangani harus…",
    options: ["Dibuang", "Dicatat dan dikirim", "Disimpan pribadi", "Dibawa pulang"],
    answer: 1,
    explanation: "Jangan dibawa pulang Bu… itu bukan oleh-oleh 🤣."
  },
  {
    question: "Sistem penyimpanan nomor digunakan ketika…",
    options: [
      "Surat banyak dan berulang",
      "Surat memiliki perihal yang sama",
      "Surat tidak memiliki identitas",
      "Pegawai tidak ingin repot"
    ],
    answer: 0,
    explanation: "Nomor = efisien. Cocok buat instansi yang rajin bikin surat 😎."
  },
  {
    question: "Surat tugas digunakan untuk…",
    options: [
      "Menugaskan pegawai melaksanakan pekerjaan tertentu",
      "Memanggil pegawai untuk rapat",
      "Mengumumkan kegiatan umum",
      "Mengawasi arsip vital"
    ],
    answer: 0,
    explanation: "Surat tugas = SK mini Bu."
  },
  {
    question: "Memo biasanya digunakan untuk…",
    options: [
      "Komunikasi internal singkat",
      "Pengumuman umum",
      "Surat rahasia",
      "Surat keputusan"
    ],
    answer: 0,
    explanation: "Memo itu pendek Bu. Tapi tidak sependek kesabaran admin 🤣."
  },
  {
    question: "Konsep disposisi berarti…",
    options: [
      "Penandatanganan surat",
      "Instruksi lanjutan pimpinan",
      "Persetujuan rapat",
      "Pengarsipan langsung"
    ],
    answer: 1,
    explanation: "Disposisi = chat dari atasan versi legal Bu 😎."
  },
  {
    question: "Surat dinas harus ditulis menggunakan bahasa…",
    options: ["Gaul santai", "Baku dan formal", "Campuran slang", "Bahasa daerah"],
    answer: 1,
    explanation: "Sayangnya surat dinas tidak boleh pakai 'ciyus miapah' ya Bu 😭."
  },
  {
    question: "Dalam pengurusan surat, penyimpanan dilakukan agar…",
    options: [
      "Arsip bertambah banyak",
      "Surat mudah ditemukan kembali",
      "Ruangan cepat penuh",
      "Pegawai sibuk"
    ],
    answer: 1,
    explanation: "Tujuannya simpel Bu: biar gak panik pas dicari 🤣."
  },
  {
    question: "Surat keluar biasanya mencantumkan lampiran pada bagian…",
    options: ["Kop surat", "Isi surat", "Bawah sebelum tanda tangan", "Footer"],
    answer: 2,
    explanation: "Sebelum tanda tangan Bu. Biar rapi dan profesional."
  },
  {
    question: "Penanganan surat rahasia harus mengikuti prinsip…",
    options: [
      "Kerahasiaan dan keamanan",
      "Kecepatan dan hiburan",
      "Transparansi total",
      "Kepemilikan publik"
    ],
    answer: 0,
    explanation: "Jaga rahasia Bu. Jangan kesebar di grup tetangga 🤣."
  },
  {
    question: "Surat edaran bersifat…",
    options: ["Individual", "Massal", "Rahasia", "Internal saja"],
    answer: 1,
    explanation: "Edaran itu… ya diedarkan Bu. Banyak yang dapat."
  },
  {
    question: "Tujuan utama tata persuratan adalah…",
    options: [
      "Menciptakan informasi yang rapi, cepat, dan akurat",
      "Menambah beban kerja pegawai",
      "Menyulitkan koordinasi",
      "Mengurangi jumlah surat"
    ],
    answer: 0,
    explanation: "Biar gak berantakan Bu. Surat kalau berantakan, hati ikut berantakan 😭."
  },
  {
    question: "Surat dinas biasanya memiliki bagian utama berupa…",
    options: ["Kop surat, nomor, perihal, isi, tanda tangan", "Judul dan penutup saja", "Isi tanpa struktur", "Foto pejabat"],
    answer: 0,
    explanation: "Format baku ini kayak resep wajib Bu. Gak boleh asal-asalan."
  },
  {
    question: "Surat pribadi tidak termasuk surat dinas karena…",
    options: [
      "Tidak dibuat oleh instansi",
      "Tidak memiliki nomor",
      "Tidak memiliki kop surat",
      "Tidak dapat diketik"
    ],
    answer: 0,
    explanation: "Pribadi ya pribadi Bu. Jangan dicampur sama urusan kantor 🤣."
  },
  {
    question: "Sistem penyimpanan geografis digunakan untuk mengelompokkan surat berdasarkan…",
    options: ["Jenis surat", "Nama orang", "Wilayah atau daerah", "Nomor urut"],
    answer: 2,
    explanation: "Cocok buat instansi yang sering surat-suratan antar daerah Bu."
  },
  {
    question: "Arsip surat keluar harus disimpan sebagai…",
    options: ["Bukti kegiatan organisasi", "Dekorasi kantor", "Lampiran rapat", "Pelengkap dokumen pajak"],
    answer: 0,
    explanation: "Surat keluar itu jejak langkah organisasi Bu. Jejak mantan beda lagi 🤣."
  }
];
    
