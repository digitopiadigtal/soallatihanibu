const questions = [
  {
    question: "Tujuan utama pemeliharaan arsip adalah untuk…",
    options: [
      "Menambah jumlah ruangan penyimpanan",
      "Menjamin keselamatan fisik dan informasi arsip",
      "Membuat arsip terlihat lebih estetik",
      "Mengurangi jam kerja pegawai"
    ],
    answer: 1,
    explanation: "Pemeliharaan itu biar arsip panjang umur Bu… bukan rambut yang pakai vitamin 🤣."
  },
  {
    question: "Langkah awal dalam pengamanan arsip adalah…",
    options: [
      "Mengunci lemari arsip dengan dua gembok",
      "Mengidentifikasi tingkat kerentanan dan risiko arsip",
      "Menyembunyikan arsip di tempat rahasia",
      "Memindahkan arsip ke ruangan paling dingin"
    ],
    answer: 1,
    explanation: "Identifikasi dulu Bu… jangan asal sembunyi kayak sembunyiin chat WA 😭."
  },
  {
    question: "Bahan penyimpanan arsip harus bersifat…",
    options: [
      "Asam tinggi",
      "Netral atau bebas asam",
      "Berwarna mencolok",
      "Tipis dan mudah robek"
    ],
    answer: 1,
    explanation: "Kalau asam tinggi nanti arsipnya kayak lambung kambuh Bu 😭."
  },
  {
    question: "Suhu ideal untuk penyimpanan arsip kertas adalah…",
    options: [
      "5–10°C seperti kulkas",
      "18–22°C dengan kelembaban terkontrol",
      "35°C biar cepat kering",
      "Terserah AC kantor"
    ],
    answer: 1,
    explanation: "Jangan kayak kulkas Bu, nanti arsipnya ikut beku kayak perasaan 😎."
  },
  {
    question: "Kelembaban ideal untuk ruang arsip adalah…",
    options: [
      "10–20%",
      "30–50%",
      "60–80%",
      "Tergantung mood awan"
    ],
    answer: 1,
    explanation: "30–50% itu sehat Bu. Di atas 60% arsip bisa jamuran kayak roti lupa ditutup 😭."
  },
  {
    question: "Serangga perusak arsip biasanya berasal dari kelompok…",
    options: ["Reptil", "Insekta", "Mamalia", "Hewan mitos"],
    answer: 1,
    explanation: "Hewan mitos belum ditemukan makan arsip Bu… naga mungkin tapi belum riset 🤣."
  },
  {
    question: "Pengamanan arsip vital dilakukan dengan cara…",
    options: [
      "Membuat duplikasi atau backup",
      "Menghapus arsip asli",
      "Menyimpan arsip di meja pegawai",
      "Mengirim arsip ke grup WhatsApp"
    ],
    answer: 0,
    explanation: "Backup itu wajib Bu. Jangan sampai arsip vital hilang kayak password email 😭."
  },
  {
    question: "Penyebab utama kerusakan arsip kertas adalah…",
    options: [
      "Paparan cahaya berlebih",
      "Banyaknya tanda tangan",
      "Terlalu sering dibaca",
      "Ditaruh di dashboard motor"
    ],
    answer: 0,
    explanation: "Cahaya itu jahat Bu… arsip bisa gosong kayak kulit habis tanning 🤣."
  },
  {
    question: "Fungsi utama restorasi arsip adalah…",
    options: [
      "Mengubah isi arsip menjadi lebih modern",
      "Memperbaiki kerusakan fisik arsip",
      "Mencetak ulang arsip",
      "Membuat arsip menjadi souvenir"
    ],
    answer: 1,
    explanation: "Restorasi = perawatan serius Bu. Arsipnya masuk salon premium 😭."
  },
  {
    question: "Penyimpanan arsip sebaiknya menggunakan boks arsip yang…",
    options: [
      "Bersifat asam",
      "Bebas asam dan standar arsip",
      "Berwarna-warni pastel",
      "Tipis agar hemat ruang"
    ],
    answer: 1,
    explanation: "Arsip bukan TikToker Bu… tidak butuh warna pastel 🤣."
  },
  {
    question: "Bahan metal yang digunakan untuk rak arsip harus…",
    options: ["Mudah berkarat", "Anti karat", "Berwarna emas", "Dipernis"],
    answer: 1,
    explanation: "Kalau karatan nanti arsip jadi dapet tetesan *air karat special edition* 😭."
  },
  {
    question: "Penyebab jamur pada arsip adalah…",
    options: [
      "Kelembaban tinggi",
      "Arsip terlalu rapi",
      "Jarang dibaca pegawai",
      "Arsip ditiup angin malam"
    ],
    answer: 0,
    explanation: "Jamur suka lembab Bu… sama kayak perasaan kalau gak dikabarin 🤣."
  },
  {
    question: "Pengendalian hama dapat dilakukan dengan…",
    options: [
      "Membakar arsip",
      "Fumigasi atau pengasapan terkontrol",
      "Menyiram arsip dengan deterjen",
      "Menggunakan obat nyamuk bakar"
    ],
    answer: 1,
    explanation: "Fumigasi ya Bu… obat nyamuk bakar bikin arsip wangi gosong 😭."
  },
  {
    question: "Tujuan utama pengamanan arsip adalah…",
    options: [
      "Mengurangi jumlah arsip",
      "Mencegah akses dan kerusakan yang tidak sah",
      "Mempercepat proses pinjam arsip",
      "Membuat arsip terlihat besar"
    ],
    answer: 1,
    explanation: "Keamanan Bu… bukan pamer ukuran arsip 🤣."
  },
  {
    question: "Dokumen elektronik rentan rusak karena…",
    options: [
      "Kabel terlalu pendek",
      "Kerusakan hardware atau serangan malware",
      "Warnanya kurang bagus",
      "Keyboard terlalu keras"
    ],
    answer: 1,
    explanation: "Malware itu jahat Bu… tiba-tiba arsip hilang kayak mantan 😭."
  },
  {
    question: "Komponen penting dalam sistem keamanan arsip elektronik adalah…",
    options: ["Password kuat", "Wallpaper lucu", "Font estetik", "Nama file panjang"],
    answer: 0,
    explanation: "Password jangan '12345' Bu… hacker bisa ketawa sambil buka arsip 🤣."
  },
  {
    question: "Bahan arsip fotografi mudah rusak karena…",
    options: [
      "Suka terkena gosip",
      "Sensitif terhadap cahaya dan suhu",
      "Tidak tahan air mata penonton drama Korea",
      "Warnanya terlalu vintage"
    ],
    answer: 1,
    explanation: "Foto itu sensitif Bu. Kayak rasa rindu 🤭."
  },
  {
    question: "Sistem pengamanan berlapis diperlukan untuk…",
    options: [
      "Memperindah ruangan",
      "Mengurangi risiko kehilangan atau manipulasi data",
      "Mempercepat akses arsip",
      "Membuat petugas lebih sibuk"
    ],
    answer: 1,
    explanation: "Keamanan berlapis, bukan kue lapis Bu 😭."
  },
  {
    question: "Arsip suara (audio) rawan rusak karena…",
    options: [
      "Gangguan magnetik",
      "Suara terlalu kencang",
      "Jenis musiknya tidak disukai",
      "Diputar saat hujan"
    ],
    answer: 0,
    explanation: "Magnet itu musuh bebuyutan Bu. Jangan dekatkan ke speaker liar 🤣."
  },
  {
    question: "Pemeliharaan preventif dilakukan untuk…",
    options: [
      "Merusak arsip sebelum rusak",
      "Mencegah kerusakan sebelum terjadi",
      "Mengubah jenis arsip",
      "Menambah jumlah duplikasi"
    ],
    answer: 1,
    explanation: "Preventif = before drama terjadi Bu 😎."
  },
  {
    question: "Tingkat keamanan tertinggi arsip biasanya digunakan untuk…",
    options: [
      "Arsip anggaran kuliah",
      "Arsip rahasia negara",
      "Arsip poster konser",
      "Arsip catatan absen pegawai"
    ],
    answer: 1,
    explanation: "Rahasia negara Bu… bukan rahasia gebetan 🤭."
  },
  {
    question: "Restorasi fisik arsip dilakukan jika…",
    options: [
      "Arsip masih baru",
      "Arsip mengalami kerusakan robek atau patah",
      "Arsip ingin dipamerkan",
      "Arsip warnanya kusam"
    ],
    answer: 1,
    explanation: "Robek itu bisa diperbaiki Bu, beda sama hati yang ditinggal pas sayang-sayangnya 😭."
  },
  {
    question: "Bahan penyimpanan arsip yang buruk akan menyebabkan…",
    options: ["Arsip makin wangi", "Kerusakan kimia", "Arsip makin kuat", "Arsip bercahaya"],
    answer: 1,
    explanation: "Bahan buruk = kerusakan. Arsip bukan tanaman hias Bu 🤣."
  },
  {
    question: "Salah satu metode duplikasi arsip adalah…",
    options: ["Scanning digital", "Menggambar ulang pakai pensil", "Menulis ulang manual", "Mengfotokopi dengan mata tertutup"],
    answer: 0,
    explanation: "Scanning itu teknologi Bu… bukan seni rupa 🤣."
  },
  {
    question: "Pemantauan kondisi arsip dilakukan untuk…",
    options: [
      "Menambah pekerjaan",
      "Memastikan arsip tetap dalam kondisi stabil",
      "Mengurangi pencahayaan ruangan",
      "Mencari kesalahan pegawai"
    ],
    answer: 1,
    explanation: "Pemantauan = ngecek Bu. Arsip juga harus dipantau kayak hubungan LDR 😭."
  },
  {
    question: "Faktor manusia dapat menyebabkan kerusakan arsip melalui…",
    options: [
      "Pelipatan sembarangan",
      "Niat jahat",
      "Ketidaktahuan prosedur",
      "Semua jawaban benar"
    ],
    answer: 3,
    explanation: "Manusia itu unpredictable Bu… termasuk yang seenaknya melipat arsip 😤."
  },
  {
    question: "Sistem pengendalian lingkungan meliputi…",
    options: [
      "Suhu dan kelembaban",
      "Kecepatan internet",
      "Warna tembok",
      "Jenis tanaman hias"
    ],
    answer: 0,
    explanation: "Arsip gak butuh tanaman aesthetic Bu 🤣 butuh suhu stabil."
  },
  {
    question: "Arsip yang rusak akibat banjir termasuk kerusakan…",
    options: ["Biologis", "Fisik", "Kimiawi", "Spiritual"],
    answer: 1,
    explanation: "Banjir itu fisik Bu… bukan spiritual, kecuali arsipnya terseret sampai hilang 😭."
  },
  {
    question: "Pengamanan arsip elektronik memerlukan…",
    options: [
      "Proteksi antivirus",
      "Printer yang bagus",
      "Hard disk warna pink",
      "Mouse wireless"
    ],
    answer: 0,
    explanation: "Antivirus penting Bu… jangan sampai arsip jadi zombie 🤣."
  },
  {
    question: "Arsip yang terkena serangan rayap mengalami kerusakan…",
    options: ["Kimia", "Biologis", "Magnetik", "Elektronik"],
    answer: 1,
    explanation: "Rayap itu musuh bebuyutan arsip kertas Bu 😭."
  },
  {
    question: "Tujuan penyimpanan arsip dengan box khusus adalah…",
    options: [
      "Membuat arsip terlihat imut",
      "Melindungi arsip dari debu, cahaya, dan kelembaban",
      "Menyamakan warna lemari",
      "Mengurangi berat arsip"
    ],
    answer: 1,
    explanation: "Lindungi arsip Bu… bukan buat fashion storage 😎."
  },
  {
    question: "Salah satu penyebab kerusakan kimia arsip adalah…",
    options: [
      "Reaksi oksidasi",
      "Disimpan di bawah bantal",
      "Ketiban buku berat",
      "Dilipat jadi pesawat kertas"
    ],
    answer: 0,
    explanation: "Oksidasi itu jahat Bu… bikin arsip tua sebelum waktunya 😭."
  },
  {
    question: "Metode penyimpanan arsip digital yang paling aman adalah…",
    options: [
      "Backup berlapis di beberapa lokasi",
      "Simpan di satu flashdisk saja",
      "Kirim via email ke diri sendiri",
      "Upload ke grup alumni"
    ],
    answer: 0,
    explanation: "Backup berlapis Bu, bukan backup satu flashdisk yang suka hilang 🤣."
  },
  {
    question: "Pengamanan fisik ruang arsip meliputi…",
    options: [
      "Pintu, kunci, dan pengawasan",
      "Karpet, sofa, dan galon air",
      "Hiasan dinding",
      "Tanaman kaktus untuk estetika"
    ],
    answer: 0,
    explanation: "Ruang arsip butuh keamanan, bukan dekor rumah minimalis Bu 😭."
  },
  {
    question: "Sistem alarm kebakaran penting dipasang di ruang arsip untuk…",
    options: [
      "Mengejutkan pegawai",
      "Melindungi arsip dari kerusakan fatal",
      "Menguji keberanian staf",
      "Menghemat listrik"
    ],
    answer: 1,
    explanation: "Api itu musuh terbesar arsip Bu… sekali nyala langsung modar 🤣."
  },
  {
    question: "Pencahayaan yang terlalu kuat dapat menyebabkan…",
    options: [
      "Arsip semakin tajam",
      "Pemudaran tinta",
      "Arsip menjadi glossy",
      "Pegawai makin semangat"
    ],
    answer: 1,
    explanation: "Tinta memudar Bu… bukan kulit yang jadi glowing 🤭."
  }
];
  
