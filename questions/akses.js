const questions = [
  {
    question: "Akses arsip adalah kemampuan seseorang untuk…",
    options: [
      "Mengedit arsip sesuai kebutuhan",
      "Mendapatkan informasi tanpa melanggar ketentuan hukum",
      "Menggandakan arsip kapan saja",
      "Menghapus arsip jika tidak relevan"
    ],
    answer: 1,
    explanation: "Akses itu bukan 'akses all area' konser K-Pop Bu… tetap ada aturannya 😎."
  },
  {
    question: "Prinsip dasar akses arsip publik menurut UU Kearsipan adalah…",
    options: [
      "Hak publik dibatasi sepenuhnya",
      "Arsip terbuka kecuali yang ditetapkan tertutup",
      "Semua arsip bersifat rahasia",
      "Akses hanya diberikan pada peneliti"
    ],
    answer: 1,
    explanation: "Default-nya *open*. Tapi jangan sok-sokan buka yang *classified* Bu 😭."
  },
  {
    question: "Layanan arsip bertujuan untuk…",
    options: [
      "Memperbanyak jumlah arsip",
      "Memberikan informasi akurat kepada pengguna",
      "Mengurangi beban pegawai arsip",
      "Menggantikan fungsi sistem TI"
    ],
    answer: 1,
    explanation: "Intinya bantu pengguna. Pegawai arsip bukan pesulap, tapi mendekati 🤣."
  },
  {
    question: "Arsip yang masih memiliki batas waktu akses disebut…",
    options: ["Arsip vital", "Arsip terklasifikasi", "Arsip dinamis", "Arsip umum"],
    answer: 1,
    explanation: "Terklasifikasi = hati-hati Bu, jangan asal bocorin. Ini bukan rahasia dapur 😭."
  },
  {
    question: "Salah satu tanggung jawab lembaga kearsipan dalam layanan adalah…",
    options: [
      "Mengubah isi arsip agar lebih enak dibaca",
      "Menjamin keaslian informasi dalam arsip",
      "Menunda akses tanpa alasan",
      "Menghapus arsip periode lama"
    ],
    answer: 1,
    explanation: "Keaslian itu penting Bu. Arsip gak boleh jadi fanfic 🤣."
  },
  {
    question: "Hak akses arsip diberikan kepada publik berdasarkan asas…",
    options: ["Efisiensi", "Transparansi", "Perlindungan total", "Kerahasiaan"],
    answer: 1,
    explanation: "Transparansi = boleh lihat, tapi gak boleh macam-macam Bu 😎."
  },
  {
    question: "Arsip yang masih mengandung informasi berdampak negatif bagi keamanan negara harus…",
    options: [
      "Segera dimusnahkan",
      "Ditutup aksesnya sampai jangka waktu tertentu",
      "Dibagikan ke media",
      "Dibebaskan melalui pengumuman"
    ],
    answer: 1,
    explanation: "Ditutup dulu Bu. Jangan jadi sumber gosip nasional 🤣."
  },
  {
    question: "Salah satu hambatan umum dalam layanan arsip adalah…",
    options: [
      "Kurangnya daftar arsip yang memadai",
      "Terlalu sedikit arsip yang dibuat",
      "Pengguna tidak suka membaca",
      "Tidak adanya meja layanan"
    ],
    answer: 0,
    explanation: "Tanpa daftar arsip, nyari arsip kayak nyari jodoh Bu… susah 😭."
  },
  {
    question: "Arsip statis tersedia untuk publik setelah…",
    options: [
      "Ditetapkan open access oleh lembaga kearsipan",
      "Dikembalikan ke instansi pencipta",
      "Diupload ke media sosial",
      "Disetujui oleh semua pegawai"
    ],
    answer: 0,
    explanation: "Bukan upload ke TikTok Bu 😭… keputusan resmi!"
  },
  {
    question: "Jenis layanan arsip yang diberikan untuk kepentingan penelitian ilmiah disebut…",
    options: ["Layanan rujukan", "Layanan konsultasi", "Layanan studi", "Layanan restorasi"],
    answer: 2,
    explanation: "Peneliti itu butuh layanan spesial Bu. Mereka serius, bukan cari gosip 🤣."
  },
  {
    question: "Keamanan arsip dalam layanan harus memenuhi prinsip…",
    options: ["Integrity, confidentiality, availability", "Copy, paste, print", "Speed, style, show", "Access all files"],
    answer: 0,
    explanation: "CIA Bu… bukan badan intelijen Amerika, tapi konsep keamanan 😎."
  },
  {
    question: "Arsip yang memuat data pribadi hanya boleh dibuka jika…",
    options: [
      "Pengguna ingin tahu",
      "Ada persetujuan pemilik data",
      "Pegawai sedang mood",
      "Datanya sedang diskon"
    ],
    answer: 1,
    explanation: "Privasi itu penting Bu. Jangan jadi pelanggar UU 27/2022 🤣."
  },
  {
    question: "Layanan arsip proaktif adalah layanan yang…",
    options: [
      "Menunggu pengguna datang",
      "Menghadirkan arsip yang relevan tanpa diminta",
      "Menutup semua akses publik",
      "Mengirim arsip secara acak"
    ],
    answer: 1,
    explanation: "Proaktif = nyamperin Bu. Kayak cowok gentle 🤭."
  },
  {
    question: "Pengguna arsip dikelompokkan berdasarkan…",
    options: ["Profesi", "Kebutuhan informasi", "Pendidikan terakhir", "Tempat tinggal"],
    answer: 1,
    explanation: "Fokus kebutuhan Bu. Bukan fokus zodiac pengguna 🤣."
  },
  {
    question: "Arsip yang dapat meningkatkan identitas nasional disebut…",
    options: ["Arsip vital", "Arsip sejarah", "Arsip dinamis", "Arsip administratif"],
    answer: 1,
    explanation: "Arsip sejarah = jati diri bangsa. Bukan jati diri mantan Bu 😭."
  },
  {
    question: "Bentuk layanan arsip yang memerlukan ruang khusus adalah…",
    options: ["Layanan baca", "Peminjaman arsip", "Layanan restorasi", "Layanan online"],
    answer: 2,
    explanation: "Restorasi itu butuh space Bu… bukan di kasur kos-kosan 🤣."
  },
  {
    question: "Permintaan arsip harus dicatat agar…",
    options: [
      "Pegawai tidak lupa",
      "Terdapat jejak akses yang dapat diaudit",
      "Pengguna tidak bosan",
      "Arsip terlihat lebih ramai"
    ],
    answer: 1,
    explanation: "Audit trail itu penting Bu. Biar ketahuan siapa yang usil-usil 😎."
  },
  {
    question: "Arsip audio visual membutuhkan…",
    options: [
      "AC 25 derajat",
      "Teknik penanganan khusus",
      "Hanya rak besi biasa",
      "Box kardus"
    ],
    answer: 1,
    explanation: "AV itu sensitif Bu. Kayak hati kalau lagi PMS 🤣."
  },
  {
    question: "Standar layanan arsip berfungsi untuk…",
    options: [
      "Membatasi hak pengguna",
      "Menjamin mutu layanan",
      "Mengurangi frekuensi permintaan",
      "Menaikkan tarif layanan"
    ],
    answer: 1,
    explanation: "Standar = biar layanan gak kayak mood swing pegawai Bu 😭."
  },
  {
    question: "Akses arsip elektronik harus memperhatikan aspek…",
    options: ["Kecepatan internet", "Keamanan digital", "Ukuran file", "Monitor yang dipakai"],
    answer: 1,
    explanation: "Hacker tuh dimana-mana Bu. Arsip jangan sampai dibajak jadi meme 🤣."
  },
  {
    question: "Layanan referensi arsip dilakukan dengan…",
    options: [
      "Mengizinkan pengguna mengedit arsip",
      "Menyediakan petunjuk, daftar arsip, dan panduan",
      "Mengirimkan arsip ke rumah pengguna",
      "Mengizinkan foto tanpa batas"
    ],
    answer: 1,
    explanation: "Referensi = peta harta karun Bu. Biar pengguna gak nyasar 😎."
  },
  {
    question: "Arsip yang membuka peluang penelitian sejarah disebut…",
    options: ["Arsip vital", "Arsip dinamis", "Arsip statis", "Arsip administratif"],
    answer: 2,
    explanation: "Statis itu primadonanya peneliti Bu 🤓."
  },
  {
    question: "Monitoring layanan arsip digunakan untuk…",
    options: [
      "Mengukur kualitas pelayanan",
      "Memperpanjang jam kerja pegawai",
      "Mengurangi jumlah arsip",
      "Melacak file hilang"
    ],
    answer: 0,
    explanation: "Monitoring = cek performa. Bukan cek mantan 😭."
  },
  {
    question: "Akses terhadap arsip sensitif diberikan setelah…",
    options: [
      "Dibayar dengan tarif premium",
      "Jangka waktu akses terpenuhi",
      "Pegawai sedang santai",
      "Gebetan bekerja di ANRI"
    ],
    answer: 1,
    explanation: "Ada waktunya Bu. Sabar… kayak nunggu paket COD 🤣."
  },
  {
    question: "Arsip digital lebih rentan karena…",
    options: [
      "Mudah dicetak",
      "Rentan diretas atau rusak",
      "Tidak dapat disimpan lama",
      "Tidak dapat dibuat duplikasi"
    ],
    answer: 1,
    explanation: "Digital itu rawan. Sekali crash, hilang semua Bu 😭."
  },
  {
    question: "Lembaga kearsipan wajib menyediakan layanan yang…",
    options: ["Cepat, tepat, dan akurat", "Murah dan ramai", "Eksklusif", "Tanpa batasan"],
    answer: 0,
    explanation: "3T itu wajib Bu… Cepat-Tepat-Tidak Baper 😎."
  },
  {
    question: "Arsip terklasifikasi dibuka setelah…",
    options: [
      "Mendapat izin pejabat berwenang",
      "17 Agustus",
      "Arsip dipindahkan ke gudang",
      "Pegawai sedang baik hati"
    ],
    answer: 0,
    explanation: "Izin dulu Bu. Jangan buka seenaknya kayak buka chat gebetan 🤣."
  },
  {
    question: "Surat atau dokumen yang memuat strategi pemerintah termasuk arsip…",
    options: ["Statis", "Rahasia", "Vital", "Umum"],
    answer: 1,
    explanation: "Arsip rahasia = jangan sampai bocor Bu. Bukan spoiler film."
  },
  {
    question: "Hak publik terhadap arsip bertujuan untuk…",
    options: [
      "Mengawasi pemerintah",
      "Memperbanyak arsip",
      "Menentukan gaji pegawai",
      "Mengurangi arsip"
    ],
    answer: 0,
    explanation: "Akses publik = kontrol sosial Bu. Demokrasi jalan 👍."
  },
  {
    question: "Arsip yang dapat dibuka setelah 25–30 tahun biasanya terkait…",
    options: [
      "Rahasia negara",
      "Laporan studi",
      "Arsip pendidikan",
      "Surat edaran"
    ],
    answer: 0,
    explanation: "Rahasia negara gak bisa dibuka cepat Bu. Nanti negara deg-degan 😭."
  },
  {
    question: "Peraturan akses arsip dibuat untuk…",
    options: [
      "Mengatur penyusutan arsip",
      "Melindungi informasi dan hak publik",
      "Mengurangi tugas pegawai",
      "Meningkatkan jumlah arsip yang tampil"
    ],
    answer: 1,
    explanation: "Hukum akses = payung Bu. Biar arsip gak kehujanan gosip 🤣."
  },
  {
    question: "Akses fisik arsip dapat dibatasi karena…",
    options: [
      "Kondisi arsip rapuh",
      "Pegawai sedang rapat",
      "Meja layanan penuh",
      "Ruangan terlalu dingin"
    ],
    answer: 0,
    explanation: "Arsip rapuh = jangan disentuh sembarangan Bu. Nanti patah hati 😭."
  },
  {
    question: "Layanan digital arsip memudahkan pengguna karena…",
    options: [
      "Menghilangkan semua batasan",
      "Mengakses arsip dari mana saja",
      "Tidak memerlukan verifikasi",
      "Dapat mengubah isi arsip"
    ],
    answer: 1,
    explanation: "Online = enak Bu. Bisa sambil rebahan 🌚."
  },
  {
    question: "Arsip elektronik harus disertai metadata agar…",
    options: [
      "Tampil menarik",
      "Dapat diidentifikasi dan ditelusuri",
      "Dapat diubah",
      "Dapat dikirim lewat WA"
    ],
    answer: 1,
    explanation: "Metadata = KTP-nya arsip digital Bu 😎."
  },
  {
    question: "Konflik akses terjadi jika…",
    options: [
      "Pegawai lupa password",
      "Hak publik dan perlindungan informasi saling bertentangan",
      "Tidak ada daftar arsip",
      "Pengguna datang terlambat"
    ],
    answer: 1,
    explanation: "Kadang hukum dan privasi suka rebutan Bu… kayak rebutan kursi KRL 🤣."
  },
  {
    question: "Arsiparis harus menjaga netralitas dalam layanan arsip agar…",
    options: [
      "Tidak disangka pilih kasih",
      "Bisa menentukan siapa yang ganteng",
      "Dapat memberi prioritas teman dekat",
      "Bisa menolak semua permintaan"
    ],
    answer: 0,
    explanation: "Profesional Bu… bukan kayak admin yang mood-nya random 😭."
  }
];
