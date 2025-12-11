const questions = [
  {
    question: "Arsip vital adalah arsip yang…",
    options: [
      "Bernilai sejarah tinggi namun tidak digunakan lagi",
      "Sangat penting bagi kelangsungan operasional dan legalitas organisasi",
      "Hanya berisi catatan rapat biasa",
      "Dibuat untuk kepentingan dekoratif"
    ],
    answer: 1,
    explanation: "Arsip vital = nyawanya organisasi Bu. Hilang? Auto chaos kayak listrik mati pas ujian 😭."
  },
  {
    question: "Tujuan utama pengelolaan arsip vital adalah…",
    options: [
      "Membuat arsip terlihat premium",
      "Menjamin ketersediaan informasi kritis dalam keadaan darurat",
      "Mengurangi jumlah arsip aktif",
      "Menambah beban pegawai"
    ],
    answer: 1,
    explanation: "Vital itu harus ready kapanpun Bu, bukan kayak orang yang ghosting 🤣."
  },
  {
    question: "Arsip vital biasanya terkait dengan…",
    options: [
      "Kehadiran pegawai",
      "Hak-hak organisasi dan individu",
      "Daftar menu kantin",
      "Undangan acara senam"
    ],
    answer: 1,
    explanation: "Hak organisasi = serius Bu. Bukan daftar menu bakso 😎."
  },
  {
    question: "Faktor risiko utama bagi arsip vital adalah…",
    options: [
      "Pencurian, bencana alam, dan manipulasi data",
      "Pegawai terlalu rajin bekerja",
      "AC terlalu dingin",
      "Ruangan terlalu sepi"
    ],
    answer: 0,
    explanation: "Vital harus dijaga dari maling Bu… bukan hanya maling hati 🤣."
  },
  {
    question: "Metode perlindungan arsip vital yang paling efektif adalah…",
    options: [
      "Menyimpannya di laci tanpa kunci",
      "Duplikasi dan penyimpanan terpisah (off-site storage)",
      "Menyimpannya di meja resepsionis",
      "Mengunggah foto arsip ke Instagram"
    ],
    answer: 1,
    explanation: "Off-site itu penting Bu. Jangan cuma satu tempat kayak cadangan perasaan 😭."
  },
  {
    question: "Program arsip vital biasanya mencakup…",
    options: [
      "Identifikasi, perlindungan, penyimpanan, dan pemulihan",
      "Fotokopi massal tanpa tujuan",
      "Perbaikan tata letak ruang kantor",
      "Penataan meja pegawai"
    ],
    answer: 0,
    explanation: "Programnya serius Bu… bukan sekedar beberes lemari 🤣."
  },
  {
    question: "Contoh arsip vital pada instansi pendidikan adalah…",
    options: [
      "Daftar menu kantin",
      "Ijazah dan transkrip nilai",
      "Jadwal piket kelas",
      "Daftar presensi acara senam"
    ],
    answer: 1,
    explanation: "Ijazah itu hidup mati mahasiswa Bu… jangan sampai ilang 😭."
  },
  {
    question: "Arsip vital berbeda dengan arsip penting karena…",
    options: [
      "Arsip vital wajib tersedia meskipun terjadi bencana besar",
      "Arsip penting tidak perlu dijaga",
      "Arsip vital tidak boleh disimpan",
      "Arsip penting hanya untuk hiasan"
    ],
    answer: 0,
    explanation: "Vital = survive in chaos. Kayak Bu Syafira survive deadline 😎."
  },
  {
    question: "Arsip vital harus diprioritaskan dalam…",
    options: [
      "Penyusutan arsip",
      "Rencana kontinuitas bisnis (business continuity plan)",
      "Pemindahan ruang rapat",
      "Pengadaan kursi kantor"
    ],
    answer: 1,
    explanation: "Tanpa arsip vital, organisasi bingung mau lanjut gimana Bu 😭."
  },
  {
    question: "Identifikasi arsip vital dilakukan agar…",
    options: [
      "Arsip bisa diberi stiker lucu",
      "Organisasi mengetahui dokumen mana yang harus diselamatkan dahulu",
      "Arsip bisa dijumlahkan",
      "Arsip tampak lebih tebal"
    ],
    answer: 1,
    explanation: "Prioritas dulu Bu… jangan semua dianggap vital kayak mantan yang bilang ‘kamu spesial’ 🤣."
  },
  {
    question: "Ciri arsip vital yang utama adalah…",
    options: [
      "Memiliki nilai estetika tinggi",
      "Tanpa arsip tersebut organisasi tidak dapat beroperasi",
      "Berwarna kuning kecokelatan",
      "Sering dipinjam pegawai"
    ],
    answer: 1,
    explanation: "Kalau hilang, alamat bubar Bu… gak cuma bubar hubungan 😭."
  },
  {
    question: "Risiko paling serius jika arsip vital hilang adalah…",
    options: [
      "Organisasi perlu mengecat ulang kantor",
      "Terhentinya operasional dan kehilangan hak legal",
      "Pegawai menjadi sedih",
      "Website menjadi lambat"
    ],
    answer: 1,
    explanation: "Hilang arsip vital = game over Bu 😭 bukan ‘cuma sedih’."
  },
  {
    question: "Duplikasi arsip vital dapat dilakukan dalam bentuk…",
    options: [
      "Salinan digital atau salinan fisik yang disimpan terpisah",
      "Salinan lisan",
      "Tulisan di tisu",
      "Catatan di kalender dinding"
    ],
    answer: 0,
    explanation: "Tisu itu buat makan bakso Bu, bukan buat backup arsip 🤣."
  },
  {
    question: "Faktor lingkungan yang sering merusak arsip vital fisik adalah…",
    options: ["Cahaya UV", "Angin sepoi-sepoi", "Wangi parfum ruangan", "Getaran keyboard"],
    answer: 0,
    explanation: "Cahaya UV itu kejam Bu… bikin arsip pudar kayak janji manis 😭."
  },
  {
    question: "Backup digital arsip vital harus dilakukan dengan prinsip…",
    options: [
      "Single storage",
      "Multiple redundancy",
      "Upload ke media sosial",
      "Backup hanya saat mood"
    ],
    answer: 1,
    explanation: "Redundansi itu bukan berlebihan Bu… tapi wajib untuk survive 😎."
  },
  {
    question: "Salah satu strategi perlindungan arsip vital ketika terjadi bencana adalah…",
    options: [
      "Alarm selfie",
      "Disaster recovery plan",
      "Menyembunyikan arsip di bawah meja",
      "Mengunci pintu rapat"
    ],
    answer: 1,
    explanation: "DRP itu penyelamat Bu. Bukan penyelamat cinta 🤣."
  },
  {
    question: "Program arsip vital harus diperbarui…",
    options: [
      "Setiap bulan",
      "Secara periodik sesuai perubahan organisasi",
      "Setiap pergantian pegawai",
      "Tidak perlu diperbarui"
    ],
    answer: 1,
    explanation: "Organisasi berubah… arsip vital ikut adaptasi Bu, bukan ngambek 😭."
  },
  {
    question: "Jenis arsip vital yang bersifat operasional adalah…",
    options: [
      "Kontrak kerja aktif",
      "Poster ulang tahun kantor",
      "Daftar makanan favorit bos",
      "Foto kenangan pegawai"
    ],
    answer: 0,
    explanation: "Kontrak kerja = nyawa legal Bu. Poster ulang tahun? Hehe next ❌."
  },
  {
    question: "Arsip vital elektronik harus diamankan dengan…",
    options: [
      "Firewall dan enkripsi",
      "Kipas angin",
      "Monitor ukuran besar",
      "Folder bernama 'Jangan Dibuka'"
    ],
    answer: 0,
    explanation: "Folder 'jangan dibuka' justru bikin hacker penasaran Bu 🤣."
  },
  {
    question: "Arsip vital biasanya disimpan pada lokasi…",
    options: [
      "Akses terbatas dan aman",
      "Dekat jendela yang panas",
      "Di rak pojok kantor",
      "Di meja rapat"
    ],
    answer: 0,
    explanation: "Vital = VIP Bu. Jangan ditaruh di pojokan kayak murid nakal 😭."
  },
  {
    question: "Pengamanan arsip vital harus mencakup aspek…",
    options: [
      "Fisik dan digital",
      "Estetika dan aroma",
      "Jumlah rak",
      "Akses WiFi"
    ],
    answer: 0,
    explanation: "Aroma lemon itu bonus Bu… bukan bagian dari keamanan 🤣."
  },
  {
    question: "Contoh arsip vital dalam pemerintahan adalah…",
    options: [
      "Daftar menu rapat",
      "Dokumen pendirian daerah",
      "Jadwal apel pagi",
      "Daftar snack meeting"
    ],
    answer: 1,
    explanation: "Pendirian daerah = serius Bu. Snack? Hmm enak tapi bukan vital 😎."
  },
  {
    question: "Prosedur akses arsip vital harus…",
    options: [
      "Ketat dan diawasi",
      "Bebas untuk semua pegawai",
      "Ditentukan oleh siapa yang datang lebih dulu",
      "Dilakukan tanpa pencatatan"
    ],
    answer: 0,
    explanation: "Ketat Bu… bukan kayak pintu minimarket 🤣."
  },
  {
    question: "Arsip vital keuangan harus dilindungi karena…",
    options: [
      "Berisi dekorasi anggaran",
      "Menjadi dasar legal pengelolaan dana",
      "Mudah dibaca",
      "Terlalu banyak angka"
    ],
    answer: 1,
    explanation: "Uang itu sensitif Bu… sedikit salah langsung heboh 😭."
  },
  {
    question: "Pengelolaan arsip vital menuntut adanya…",
    options: [
      "SOP yang jelas dan terdokumentasi",
      "Instruksi verbal semata",
      "Pendapat pegawai secara spontan",
      "Keputusan dadakan"
    ],
    answer: 0,
    explanation: "Kalau spontan? Itu mah konten TikTok Bu, bukan SOP 😎."
  },
  {
    question: "Arsip vital digital harus dipantau untuk mencegah…",
    options: [
      "Pencurian data",
      "Monitor low battery",
      "Pegawai mengantuk",
      "Harddisk berdebu"
    ],
    answer: 0,
    explanation: "Data dicuri itu lebih sakit dari dicuri hatinya Bu 🤣."
  },
  {
    question: "Strategi penyimpanan arsip vital fisik biasanya melibatkan…",
    options: [
      "Fireproof cabinet",
      "Lemari plastik biasa",
      "Kardus bekas mie instan",
      "Piring kaca"
    ],
    answer: 0,
    explanation: "Fireproof Bu… bukan mie instan packaging 😭."
  },
  {
    question: "Arsip vital SDM meliputi…",
    options: [
      "Riwayat hidup dan kontrak kerja",
      "Daftar teman gosip",
      "Jadwal makan siang",
      "Playlist Spotify"
    ],
    answer: 0,
    explanation: "CV itu penting Bu. Playlist? Penting tapi bukan vital 🤣."
  },
  {
    question: "Arsip vital harus segera dipulihkan setelah…",
    options: [
      "Bencana atau insiden kerusakan",
      "Hari libur nasional",
      "Pergantian kursi kantor",
      "Event Car Free Day"
    ],
    answer: 0,
    explanation: "Recovery itu segera Bu… bukan nunggu ‘mood kembali’ 😭."
  },
  {
    question: "Analisis risiko arsip vital dilakukan untuk…",
    options: [
      "Mengetahui potensi bahaya terhadap kelangsungan arsip",
      "Menentukan warna rak",
      "Menentukan aroma ruangan",
      "Mengingatkan pegawai untuk lembur"
    ],
    answer: 0,
    explanation: "Risiko itu nyata Bu… bukan cuma di hubungan PDKT 🤣."
  },
  {
    question: "Dokumen pendukung legal seperti akta pendirian termasuk arsip vital karena…",
    options: [
      "Sering difotokopi",
      "Menjadi dasar legitimasi organisasi",
      "Warnanya antik",
      "Ditandatangani banyak orang"
    ],
    answer: 1,
    explanation: "Tanpa akta? Organisasi jadi ilegal Bu… kayak hubungan tanpa status 😭."
  },
  {
    question: "Ketahanan arsip vital dapat ditingkatkan dengan…",
    options: [
      "Digitalisasi dan penyimpanan cloud",
      "Menambah pewangi ruangan",
      "Menggantung dokumen di dinding",
      "Memakai spidol highlighter"
    ],
    answer: 0,
    explanation: "Cloud itu penyelamat Bu. Jangan ditaruh di dinding pamer karya 🤣."
  },
  {
    question: "Sistem keamanan akses arsip vital harus mencatat…",
    options: [
      "Siapa yang mengakses dan waktu akses",
      "Zodiak pengguna",
      "Mood pegawai saat itu",
      "Pilihan warna favorit"
    ],
    answer: 0,
    explanation: "Audit trail itu penting Bu… bukan ramalan bintang 😎."
  },
  {
    question: "Arsip vital yang hanya ada satu-satunya disebut…",
    options: [
      "Single master record",
      "Dokumen nostalgia",
      "Arsip sentimental",
      "Arsip egois"
    ],
    answer: 0,
    explanation: "Single master… jangan sampai jadi ‘single selamanya’ Bu 😭."
  },
  {
    question: "Dalam pemulihan arsip vital, prioritas utama adalah…",
    options: [
      "Mengembalikan fungsi informasinya",
      "Mengganti kertasnya dengan warna pink",
      "Mencari binder lucu",
      "Menulis ulang manual"
    ],
    answer: 0,
    explanation: "Fungsinya dulu Bu. Pink boleh nanti kalau mau estetik 🤣."
  },
  {
    question: "Program arsip vital harus melibatkan…",
    options: [
      "Semua unit kerja terkait",
      "Hanya bagian IT",
      "Pegawai magang saja",
      "Outsourcing random"
    ],
    answer: 0,
    explanation: "Kerja tim Bu… bukan lempar tanggung jawab kayak mahasiswa kelompok 😎."
  },
  {
    question: "Ketika arsip vital dipinjam, prosedur wajib adalah…",
    options: [
      "Mencatat peminjam dan batas waktu",
      "Membebaskannya tanpa kontrol",
      "Mengizinkan peminjam membawa pulang",
      "Menyerahkan arsip tanpa identifikasi"
    ],
    answer: 0,
    explanation: "Catat Bu… kalau ilang bisa jadi drama Korea 😭."
  }
];
