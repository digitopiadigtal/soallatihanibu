const questions = [
  {
    question: "Istilah 'arsip' berasal dari bahasa Yunani yaitu…",
    options: ["Archivum", "Archeion", "Archival", "Archibus"],
    answer: 1,
    explanation: "Asalnya dari 'Archeion'. Zaman toga, Bu… bukan toga wisuda 🤣."
  },
  {
    question: "Pada peradaban kuno, penyimpanan arsip umumnya dilakukan di…",
    options: ["Istana", "Kuil", "Rumah pejabat", "Ruang administratif"],
    answer: 1,
    explanation: "Kuil dianggap tempat suci jadi arsip ikut suci, Bu. Cloud storage versi batu."
  },
  {
    question: "Peradaban yang dikenal paling awal menerapkan sistem kearsipan adalah…",
    options: ["Romawi", "Yunani", "Mesir Kuno", "Persia"],
    answer: 2,
    explanation: "Mesir Kuno rajin banget nyatet. Sampai jadwal mandi Firaun mungkin ikut dicatet 🤣."
  },
  {
    question: "Pada masa Romawi, gedung penyimpanan arsip dikenal sebagai…",
    options: ["Tabularium", "Scriptorium", "Documentum", "Archival Hall"],
    answer: 0,
    explanation: "Tabularium: pusat arsipnya Romawi. Keren namanya, Bu. Cocok buat nama cafe estetik."
  },
  {
    question: "Sistem kearsipan di Indonesia pertama kali berkembang tertata pada masa…",
    options: ["Kerajaan Nusantara", "Kolonial Belanda", "Pendudukan Jepang", "Awal Kemerdekaan"],
    answer: 1,
    explanation: "Belanda itu perfeksionis Bu, bahkan arsip pun diatur rapi kayak meja resepsionis hotel."
  },
  {
    question: "Arsip Nasional Republik Indonesia (ANRI) didirikan pada tahun…",
    options: ["1945", "1950", "1967", "1980"],
    answer: 2,
    explanation: "Tahun 1967 Bu, ANRI mulai unjuk taring kearsipannya."
  },
  {
    question: "Pada masa awal, arsip memiliki fungsi utama sebagai…",
    options: ["Sarana pembuktian hukum", "Penyimpanan sejarah", "Dokumentasi seni", "Penyimpanan pribadi"],
    answer: 0,
    explanation: "Arsip itu bukti hukum. Kalau ada yang ngeles, arsip tinggal dibuka, auto diem 🤣."
  },
  {
    question: "Institusi yang mengelola arsip negara pada masa kolonial Belanda disebut…",
    options: ["Landsarchief", "Archief Centrum", "Document Kamer", "Staatsarchief"],
    answer: 0,
    explanation: "Landsarchief. Kedengerannya kayak nama klub bola Belanda, Bu."
  },
  {
    question: "Pada abad pertengahan, tempat penyalinan dokumen disebut…",
    options: ["Library Hall", "Scriptorium", "Arsiparia", "Document Chamber"],
    answer: 1,
    explanation: "Scriptorium itu coworking space-nya para biarawan sebelum ada Starbucks 🤭."
  },
  {
    question: "Perkembangan arsip modern sangat dipengaruhi oleh…",
    options: ["Revolusi Industri", "Perang Dunia", "Reformasi administrasi", "Perkembangan literatur"],
    answer: 0,
    explanation: "Dokumen numpuk kayak chat grup WA, Bu. Jadilah arsip modern diciptakan."
  },
  {
    question: "Arsip dinamis adalah arsip yang…",
    options: ["Sudah tidak dipakai", "Masih digunakan dalam kegiatan organisasi", "Memiliki nilai seni", "Hanya berisi laporan keuangan"],
    answer: 1,
    explanation: "Dinamis = aktif Bu. Beda sama hati yang pas lagi pasif 🤣."
  },
  {
    question: "Arsip statis merupakan arsip yang…",
    options: ["Masih digunakan setiap hari", "Tidak bernilai informasi", "Bernilai sejarah dan disimpan permanen", "Bersifat sementara"],
    answer: 2,
    explanation: "Statis itu abadi. Kayak kenangan Bu Syafira di hati para pengarsip 🤭."
  },
  {
    question: "Tokoh yang mempelopori sistem arsip modern di Eropa adalah…",
    options: ["Napoleon Bonaparte", "Julius Caesar", "Otto von Bismarck", "Henry VIII"],
    answer: 0,
    explanation: "Napoleon kecil-kecil cabe rawit, ngatur arsip juga jago 😎."
  },
  {
    question: "Sistem kearsipan Indonesia banyak mengadopsi tradisi dari…",
    options: ["Jepang", "Cina", "Belanda", "Inggris"],
    answer: 2,
    explanation: "Belanda meninggalkan banyak hal… termasuk sistem arsip yang rapi Bu."
  },
  {
    question: "Media arsip tertua yang pernah ditemukan adalah…",
    options: ["Kertas", "Tablet tanah liat", "Papirus modern", "Kulit binatang sintetis"],
    answer: 1,
    explanation: "Tablet tanah liat, Bu. Zaman itu belum ada binder lucu."
  },
  {
    question: "Alat tulis yang digunakan pada tablet tanah liat disebut…",
    options: ["Stylus", "Pena bulu", "Pisau kecil", "Pulpen tinta"],
    answer: 0,
    explanation: "Stylus jadul, Bu. Bukan yang buat tablet Samsung 🤣."
  },
  {
    question: "Arsip modern berkembang cepat karena ditemukannya…",
    options: ["Televisi", "Komputer", "Mesin jahit", "Radio"],
    answer: 1,
    explanation: "Komputer bikin arsip lebih tertata. Asal listriknya nggak mati ya Bu 😭."
  },
  {
    question: "Bahan papirus berasal dari…",
    options: ["Tumbuhan air", "Serat hewan", "Batu lunak", "Tanaman keras"],
    answer: 0,
    explanation: "Papirus itu OG-nya kertas Bu. Paper sebelum jadi paper."
  },
  {
    question: "Lembaga yang bertanggung jawab atas arsip statis di Indonesia adalah…",
    options: ["Perpustakaan Nasional", "ANRI", "Museum Nasional", "Kementerian Pendidikan"],
    answer: 1,
    explanation: "ANRI = bapak ibunya semua arsip statis."
  },
  {
    question: "Arsip dianggap instrumen penting negara karena…",
    options: ["Untuk promosi instansi", "Mendukung bukti hukum dan administrasi", "Berfungsi sebagai hiburan", "Digunakan sebagai dekorasi"],
    answer: 1,
    explanation: "Arsip itu saksi bisu Bu, bukan boneka Barbie 🤣."
  },
  {
    question: "Pada masa Babilonia, arsip ditulis menggunakan…",
    options: ["Tinta cair", "Stylus", "Pena bulu", "Arang"],
    answer: 1,
    explanation: "Stylus untuk mencetak simbol. Zaman itu belum ada pulpen fancy Bu."
  },
  {
    question: "Kata 'archive' dalam bahasa Inggris diserap dari bahasa…",
    options: ["Prancis", "Yunani", "Latin", "Belanda"],
    answer: 2,
    explanation: "'Archivum' versi Latin. Elegan banget, Bu."
  },
  {
    question: "Akar konsep arsip berasal dari kebutuhan masyarakat untuk…",
    options: ["Mencatat peristiwa penting", "Menghibur masyarakat", "Mencatat lagu rakyat", "Menyimpan karya seni"],
    answer: 0,
    explanation: "Nyatet sejak dulu penting banget. Kalau nggak dicatet, lupa 😭."
  },
  {
    question: "Arsip kuno berperan penting dalam memahami…",
    options: ["Perekonomian modern", "Sejarah peradaban", "Ilmu komputer", "Pendidikan seni"],
    answer: 1,
    explanation: "Tanpa arsip kuno, sejarah cuma jadi rumor, Bu 🤣."
  },
  {
    question: "Lembaga arsip pertama kali dibuat untuk tujuan…",
    options: ["Penyimpanan barang pribadi", "Administrasi dan bukti hukum", "Sarana edukasi", "Perdagangan"],
    answer: 1,
    explanation: "Arsip itu originalnya alat bukti, bukan alat debat."
  },
  {
    question: "Arsip yang tidak lagi digunakan tetapi memiliki nilai sejarah disebut…",
    options: ["Arsip inaktif", "Arsip vital", "Arsip statis", "Arsip darurat"],
    answer: 2,
    explanation: "Arsip statis = VIP-nya arsip Bu."
  },
  {
    question: "Salah satu tujuan pengarsipan pada masa kuno adalah…",
    options: ["Pencatatan hukum", "Penyimpanan karya seni", "Dekorasi ruang", "Dokumentasi keluarga"],
    answer: 0,
    explanation: "Hukum harus dicatet. Kalau engga nanti bingung siapa yang salah 🤣."
  },
  {
    question: "Benda papirus digunakan terutama di peradaban…",
    options: ["Tiongkok", "Mesir Kuno", "Romawi", "Persia"],
    answer: 1,
    explanation: "Papirus = buku tulis premium versi zaman Firaun."
  },
  {
    question: "Arsip pada peradaban awal dunia umumnya berisi tentang…",
    options: ["Lagu tradisional", "Catatan pajak dan perdagangan", "Cerita rakyat", "Katalog perpustakaan"],
    answer: 1,
    explanation: "Pajak Bu… dari dulu manusia hobi nagih pajak 😭."
  },
  {
    question: "Media penyimpanan arsip yang pertama kali menyerupai kertas modern adalah…",
    options: ["Papirus", "Kulit kayu", "Bambu tipis", "Tanah liat"],
    answer: 0,
    explanation: "Papirus = nenek moyangnya buku catatan Bu."
  },
  {
    question: "Salah satu ciri khas arsip kuno adalah…",
    options: ["Ditulis dengan mesin", "Ditulis manual pada media alam", "Sudah diketik rapi", "Berbentuk digital"],
    answer: 1,
    explanation: "Belum ada printer Bu… jangankan printer, listrik aja belum 🤣."
  },
  {
    question: "Arsip merupakan bagian penting dari identitas bangsa karena…",
    options: ["Menambah nilai seni", "Menyimpan sejarah kolektif", "Digunakan untuk kompetisi", "Untuk dekorasi ruang kerja"],
    answer: 1,
    explanation: "Arsip = memori negara. Tanpanya negara bisa amnesia Bu 😭."
  },
  {
    question: "Penemuan kertas modern dipelopori oleh bangsa…",
    options: ["Mesir", "Cina", "Romawi", "Arab"],
    answer: 1,
    explanation: "Cina juara inovasi sejak dulu Bu, bukan cuma mie instan."
  },
  {
    question: "Dokumen negara pertama yang diprioritaskan untuk disimpan adalah…",
    options: ["Cerita hiburan", "Catatan hukum", "Catatan seni", "Puisi rakyat"],
    answer: 1,
    explanation: "Hukum dulu Bu… hiburan belakangan 🤣."
  },
  {
    question: "Arsip memainkan peran penting dalam studi sejarah karena…",
    options: ["Menyediakan bukti autentik", "Membantu hiburan", "Mengurangi konflik", "Digunakan dalam seni"],
    answer: 0,
    explanation: "Arsip adalah CCTV masa lalu Bu."
  },
  {
    question: "Bukti arsip tertua ditemukan di wilayah…",
    options: ["Mesopotamia", "Eropa Timur", "India Utara", "Tiongkok"],
    answer: 0,
    explanation: "Mesopotamia itu juara arsip, Bu. Highly dedicated."
  },
  {
    question: "Arsip pada masa lampau membantu masyarakat dalam…",
    options: ["Mendokumentasikan acara hiburan", "Mengatur pemerintahan", "Mengatur seni tari", "Mengembangkan musik"],
    answer: 1,
    explanation: "Pemerintahan tanpa arsip? Chaos Bu 😭."
  },
  {
    question: "Arsip dianggap penting sejak awal karena…",
    options: ["Menjadi identitas keluarga", "Menjamin keberlangsungan administrasi", "Sebagai dekorasi", "Sebagai hiburan"],
    answer: 1,
    explanation: "Arsip = mesin pengingat negara Bu."
  },
  {
    question: "Sistem kearsipan modern mulai berkembang pada abad…",
    options: ["17", "18", "19", "20"],
    answer: 2,
    explanation: "Abad 19 = era industri. Dokumen numpuk kayak cucian Bu 😭."
  }
];
