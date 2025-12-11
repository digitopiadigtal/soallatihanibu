const questions = [
  {
    question: "Jadwal Retensi Arsip (JRA) digunakan untuk…",
    options: [
      "Menentukan warna map arsip",
      "Menetapkan masa simpan dan nasib akhir arsip",
      "Mengatur tata letak ruang arsip",
      "Menambah jumlah arsip setiap tahun"
    ],
    answer: 1,
    explanation: "JRA itu menentukan hidup-matinya arsip Bu… bukan menentukan warna map unyu 🤣."
  },
  {
    question: "Dasar hukum utama penyusunan JRA adalah…",
    options: [
      "UU No. 43 Tahun 2009",
      "UU No. 3 Tahun 2014",
      "PP tentang Kearsipan Daerah",
      "Surat edaran kepala kantor"
    ],
    answer: 0,
    explanation: "UU 43/2009 = kitab sucinya arsip Bu. Bukan hasil bisikan senior 😎."
  },
  {
    question: "Retensi arsip ditetapkan berdasarkan…",
    options: [
      "Perkiraan pegawai",
      "Nilai guna arsip",
      "Tingkat kesukaan pegawai",
      "Tanggal lahir pimpinan"
    ],
    answer: 1,
    explanation: "Nilai guna ya Bu… bukan nilai estetik 😭."
  },
  {
    question: "Arsip keuangan biasanya memiliki retensi yang relatif panjang karena…",
    options: [
      "Banyak isinya",
      "Memiliki fungsi pertanggungjawaban hukum",
      "Sulit dibaca",
      "Angkanya terlalu kecil"
    ],
    answer: 1,
    explanation: "Keuangan itu sensitif Bu… salah angka bisa gempa instansi 🤣."
  },
  {
    question: "Retensi aktif adalah masa ketika arsip…",
    options: [
      "Masih digunakan untuk kegiatan kerja",
      "Sudah tidak dipakai lagi",
      "Siap untuk dipamerkan",
      "Dibuang sementara"
    ],
    answer: 0,
    explanation: "Aktif = masih dipakai Bu. Kayak chat gebetan yang tiba-tiba intens 🤭."
  },
  {
    question: "Retensi inaktif adalah masa ketika arsip…",
    options: [
      "Tidak digunakan secara rutin tetapi masih disimpan",
      "Harus segera dihancurkan",
      "Dipamerkan di museum",
      "Dibawa pulang pegawai"
    ],
    answer: 0,
    explanation: "Inaktif = masih hidup tapi cuma tidur-tidur cantik 😎."
  },
  {
    question: "Nasib akhir arsip ditentukan oleh…",
    options: [
      "Arsiparis yang sedang lapar",
      "Fungsi retensinya",
      "Jumlah halaman",
      "Letak penyimpanan"
    ],
    answer: 1,
    explanation: "Retensi menentukan apakah arsip pensiun damai atau dimusnahkan 😭."
  },
  {
    question: "Arsip dengan retensi permanen biasanya adalah arsip yang…",
    options: [
      "Memiliki nilai guna sejarah tinggi",
      "Sering dipinjam mahasiswa",
      "Warnanya kusam",
      "Jumlahnya sedikit"
    ],
    answer: 0,
    explanation: "Permanen = jadi legenda Bu… kayak tokoh favorit 😎."
  },
  {
    question: "Dalam penyusunan JRA, analisis fungsi dilakukan untuk…",
    options: [
      "Mengetahui warna sampul arsip",
      "Menilai pentingnya arsip dalam proses kerja",
      "Menghitung jumlah meja kantor",
      "Menentukan jadwal rapat"
    ],
    answer: 1,
    explanation: "Fungsi arsip itu inti Bu… bukan aksesoris 😭."
  },
  {
    question: "Arsip yang wajib disimpan permanen sering dikategorikan sebagai…",
    options: [
      "Arsip vital sejarah",
      "Arsip biasa",
      "Arsip sementara",
      "Arsip non-formal"
    ],
    answer: 0,
    explanation: "Vital sejarah = VIP-nya arsip Bu. Tidak bisa dimusnahkan 🤣."
  },
  {
    question: "Retensi arsip ditentukan oleh…",
    options: [
      "Nilai guna administrasi, hukum, keuangan, dan sejarah",
      "Nilai dekoratif",
      "Jumlah foto di dalamnya",
      "Ketersediaan map baru"
    ],
    answer: 0,
    explanation: "Nilai banyak Bu… bukan nilai estetik map pelangi 😎."
  },
  {
    question: "Penilaian arsip (appraisal) dilakukan untuk…",
    options: [
      "Menilai kualitas kertas",
      "Menentukan apakah arsip disimpan atau dimusnahkan",
      "Menentukan harga jual arsip",
      "Menambah jumlah halaman"
    ],
    answer: 1,
    explanation: "Appraisal itu penentu nasib Bu… kayak guru menentukan nilai akhir 😭."
  },
  {
    question: "Arsip yang memiliki retensi pendek biasanya termasuk kategori…",
    options: [
      "Arsip penting",
      "Arsip pembantu atau administratif sederhana",
      "Arsip sejarah",
      "Arsip vital"
    ],
    answer: 1,
    explanation: "Arsip pembantu itu bagaikan cemilan Bu… cepat habis 🤣."
  },
  {
    question: "Parameter penting dalam penentuan retensi adalah…",
    options: [
      "Frekuensi penggunaan",
      "Warna arsip",
      "Jenis staples",
      "Ukuran font"
    ],
    answer: 0,
    explanation: "Kalau sering dipakai ya jangan cepat dibuang Bu 😭."
  },
  {
    question: "JRA dikembangkan oleh…",
    options: [
      "ANRI bekerja sama dengan instansi pencipta arsip",
      "Komunitas hobi",
      "Sekolah tari",
      "Influencer TikTok"
    ],
    answer: 0,
    explanation: "ANRI + instansi = power duo Bu 😎."
  },
  {
    question: "Salah satu tujuan pembuatan JRA adalah…",
    options: [
      "Menghemat ruang penyimpanan",
      "Menambah beban kerja",
      "Menghias ruang arsip",
      "Memperbanyak rak"
    ],
    answer: 0,
    explanation: "JRA bikin ruang lega Bu… bukan makin sempit kayak hati pas lihat mantan 😭."
  },
  {
    question: "Arsip dengan nilai guna keuangan disimpan untuk…",
    options: [
      "Sebagai bukti audit",
      "Hiasan meja",
      "Tutorial membuat laporan",
      "Menghitung diskon"
    ],
    answer: 0,
    explanation: "Audit itu hal sensitif Bu… jangan sampai arsipnya kabur 🤣."
  },
  {
    question: "Arsip yang tidak memiliki nilai guna lagi harus…",
    options: [
      "Dipajang",
      "Dimusnahkan sesuai prosedur",
      "Dibawa ke rumah",
      "Dimasukkan ke kardus bekas"
    ],
    answer: 1,
    explanation: "Musnahkan dengan hormat Bu… bukan dibuang kayak tugas kuliah 😭."
  },
  {
    question: "Fungsi hukum arsip menentukan retensi karena…",
    options: [
      "Arsip hukum sering tebal",
      "Arsip hukum wajib tersedia hingga sengketa selesai",
      "Pegawai takut salah",
      "Arsip hukum tampil rapi"
    ],
    answer: 1,
    explanation: "Hukum itu lama Bu… kadang lebih lama dari PDKT 🤣."
  },
  {
    question: "Arsip dengan nilai guna sejarah tinggi biasanya…",
    options: [
      "Permanen",
      "3 bulan",
      "1 minggu",
      "Disesuaikan cuaca"
    ],
    answer: 0,
    explanation: "Sejarah itu abadi Bu… kayak kenangan pahit 😭."
  },
  {
    question: "JRA yang baik harus…",
    options: [
      "Memiliki kejelasan, legalitas, dan konsistensi",
      "Berwarna-warni",
      "Mudah dihapus",
      "Dipenuhi coretan"
    ],
    answer: 0,
    explanation: "Kalau coretan? Itu buku anak TK Bu 🤣."
  },
  {
    question: "Tahap awal dalam penyusunan JRA adalah…",
    options: [
      "Analisis fungsi dan kegiatan",
      "Membeli map baru",
      "Membuat grup WhatsApp",
      "Mengisi absen"
    ],
    answer: 0,
    explanation: "Mulai dari analisis Bu… bukan mulai dari belanja map 😭."
  },
  {
    question: "Arsip retensi pendek biasanya memiliki nilai guna…",
    options: ["Administratif rutin", "Sejarah tinggi", "Vital nasional", "Liturgi upacara"],
    answer: 0,
    explanation: "Rutin = cepat lewat Bu. Kayak bulan gajian 🤣."
  },
  {
    question: "Arsip retensi panjang memiliki karakteristik…",
    options: [
      "Masih diperlukan untuk kepentingan hukum atau akuntabilitas",
      "Memiliki warna cerah",
      "Berukuran besar",
      "Susah diangkat"
    ],
    answer: 0,
    explanation: "Retensi panjang = butuh waktu, kayak healing 😎."
  },
  {
    question: "Pemusnahan arsip dilakukan setelah…",
    options: [
      "Masa retensi berakhir dan tidak ada nilai guna lanjutan",
      "Pegawai sedang mood",
      "Hari Jumat",
      "Mendapat komentar netizen"
    ],
    answer: 0,
    explanation: "Musnahkan sesuai aturan Bu… jangan halu 😭."
  },
  {
    question: "Salah satu prinsip penyusunan JRA adalah…",
    options: [
      "Keseragaman struktur kegiatan",
      "Kebebasan kreatif pegawai",
      "Penetapan warna sampul",
      "Penulisan kaligrafi"
    ],
    answer: 0,
    explanation: "Struktur itu penting Bu… bukan hiasan kaligrafi 🤣."
  },
  {
    question: "Arsip retensi permanen biasanya diserahkan ke…",
    options: ["ANRI atau LKD", "Koperasi", "Bank sampah", "Tempat fotokopi"],
    answer: 0,
    explanation: "ANRI = rumahnya arsip legenda Bu 😎."
  },
  {
    question: "Retensi ditetapkan berdasarkan…",
    options: [
      "Kebutuhan hukum, administrasi, dan pertanggungjawaban",
      "Jumlah kertas",
      "Ukuran laci",
      "Saran random staf"
    ],
    answer: 0,
    explanation: "Retensi itu sains Bu… bukan voted by admin 🤣."
  },
  {
    question: "Kegiatan penciptaan arsip menjadi dasar…",
    options: [
      "Penentuan kelompok kegiatan dalam JRA",
      "Menentukan warna map",
      "Menambah jumlah pegawai",
      "Mengatur meja kerja"
    ],
    answer: 0,
    explanation: "JRA lahir dari kegiatan Bu… bukan dari tebak-tebakan 😭."
  },
  {
    question: "Dalam penyusunan JRA, siklus hidup arsip digunakan untuk…",
    options: [
      "Menentukan tahap aktif, inaktif, dan nasib akhir",
      "Menentukan gaji pegawai",
      "Menilai kualitas rak",
      "Menghitung ketersediaan kertas"
    ],
    answer: 0,
    explanation: "Siklus hidup arsip Bu… bukan siklus mantan comeback 🤣."
  },
  {
    question: "Arsip retensi permanen tidak boleh dimusnahkan karena…",
    options: [
      "Memiliki nilai sejarah tinggi",
      "Warnanya lucu",
      "Banyak kertasnya",
      "Sering dipinjam"
    ],
    answer: 0,
    explanation: "Sejarah itu mahal Bu… jangan dibuang kayak struk belanja 😭."
  },
  {
    question: "Penetapan retensi harus mempertimbangkan…",
    options: [
      "Siklus kegiatan organisasi",
      "Ramalan cuaca",
      "Jumlah lemari",
      "Ketersediaan printer"
    ],
    answer: 0,
    explanation: "Cuaca tidak relevan Bu… kecuali arsip ditaruh di genteng 🤣."
  },
  {
    question: "JRA membantu instansi untuk…",
    options: [
      "Mengelola arsip secara efisien dan terstandar",
      "Mengurangi jam istirahat",
      "Memperindah ruang rapat",
      "Menghemat tinta printer"
    ],
    answer: 0,
    explanation: "Efisien Bu… bukan dekor 😎."
  },
  {
    question: "Arsip dengan nilai guna pembuktian hukum disimpan sampai…",
    options: [
      "Kasus selesai atau masa daluwarsa hukum terpenuhi",
      "Pegawai bosan",
      "Kantor direnovasi",
      "Dokumen berubah warna"
    ],
    answer: 0,
    explanation: "Kasus hukum lama Bu… sabar kayak nunggu gaji ke-13 😭."
  },
  {
    question: "Unit pencipta arsip harus terlibat dalam penyusunan JRA karena…",
    options: [
      "Mereka paling tahu fungsi arsip",
      "Mereka butuh hiburan",
      "Mereka ingin map baru",
      "Supaya ruangan ramai"
    ],
    answer: 0,
    explanation: "Yang bikin arsip ya yang tau paling dalam Bu 😎."
  },
  {
    question: "Penyusunan JRA melibatkan analisis…",
    options: [
      "Kegiatan, fungsi, dasar hukum, dan risiko",
      "Warna map",
      "Gaya tulisan",
      "Kesukaan pegawai"
    ],
    answer: 0,
    explanation: "Analisis serius Bu… bukan analisis estetika 🤣."
  },
  {
    question: "Arsip retensi menengah biasanya terkait dengan…",
    options: [
      "Kegiatan yang berpotensi audit atau sengketa",
      "Kegiatan hobi pegawai",
      "Draf catatan random",
      "Daftar pesanan snack"
    ],
    answer: 0,
    explanation: "Audit itu tidak main-main Bu. Snack? Hmm yummy tapi bukan retensi menengah 😭."
  },
  {
    question: "Pemusnahan arsip harus…",
    options: [
      "Melalui berita acara resmi",
      "Dilakukan tengah malam",
      "Tanpa saksi",
      "Menggunakan lilin aromaterapi"
    ],
    answer: 0,
    explanation: "BA itu wajib Bu… bukan ritual tengah malam 😭."
  }
];
