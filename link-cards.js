/* ================================================
   DATA KARTU LINK-BOARD
   Teman-teman bisa tambah/edit KUIS_DATA, TANTANGAN_DATA, dan KESEMPATAN_DATA di file ini.
   ================================================ */

const KUIS_DATA = [
  // -------- PILIHAN GANDA (Lingkungan) --------
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Gas apakah yang paling banyak berkontribusi terhadap efek rumah kaca buatan manusia?',
    opsi: ['Oksigen (O₂)', 'Karbon Dioksida (CO₂)', 'Nitrogen (N₂)', 'Uap Air (H₂O)'],
    jawaban: 1,
    fakta: 'CO₂ dari pembakaran bahan bakar fosil adalah kontributor terbesar perubahan iklim buatan manusia.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Berapa lama waktu rata-rata yang dibutuhkan botol plastik untuk terurai di alam?',
    opsi: ['10–50 tahun', '100–200 tahun', '400–500 tahun', '1.000+ tahun'],
    jawaban: 2,
    fakta: 'Botol plastik PET membutuhkan sekitar 400–500 tahun untuk terurai di alam.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Apa nama proses daur ulang alam yang mengubah sampah organik menjadi pupuk?',
    opsi: ['Evaporasi', 'Fermentasi', 'Komposting', 'Distilasi'],
    jawaban: 2,
    fakta: 'Komposting adalah proses penguraian bahan organik oleh mikroorganisme menjadi kompos/pupuk alami.'
  },
  {
    type: 'pilgan',
    kategori: 'Kesehatan 💊',
    soal: 'Berapa minimal jam tidur yang direkomendasikan untuk orang dewasa per malam?',
    opsi: ['4–5 jam', '6–7 jam', '7–9 jam', '10–12 jam'],
    jawaban: 2,
    fakta: 'WHO merekomendasikan 7–9 jam tidur per malam untuk orang dewasa demi kesehatan optimal.'
  },
  {
    type: 'pilgan',
    kategori: 'Kesehatan 💊',
    soal: 'Vitamin apakah yang diproduksi kulit manusia saat terkena sinar matahari?',
    opsi: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'],
    jawaban: 3,
    fakta: 'Kulit mensintesis Vitamin D saat terkena sinar UVB matahari. Vitamin ini penting untuk kesehatan tulang dan imun.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Manakah yang merupakan contoh energi terbarukan?',
    opsi: ['Batu bara', 'Minyak bumi', 'Gas alam', 'Tenaga angin'],
    jawaban: 3,
    fakta: 'Tenaga angin adalah energi terbarukan karena angin tidak akan habis. Batu bara, minyak, dan gas adalah fosil yang terbatas.'
  },
  // -------- FAKTA-MITOS --------
  {
    type: 'faktamitos',
    kategori: 'Kesehatan 💊',
    pernyataan: 'Minum air putih minimal 8 gelas sehari adalah keharusan mutlak bagi semua orang.',
    jawaban: false,
    fakta: 'Mitos. Kebutuhan air setiap orang berbeda tergantung berat badan, aktivitas fisik, dan cuaca. "8 gelas" adalah pedoman umum, bukan aturan ketat.'
  },
  {
    type: 'faktamitos',
    kategori: 'Lingkungan 🌍',
    pernyataan: 'Hutan Amazon menghasilkan sekitar 20% oksigen di bumi.',
    jawaban: false,
    fakta: 'Mitos! Amazon memang menghasilkan oksigen besar, tetapi juga mengonsumsinya sendiri untuk respirasi. Kontribusi neto ke atmosfer global lebih kecil dari 20%.'
  },
  {
    type: 'faktamitos',
    kategori: 'Kesehatan 💊',
    pernyataan: 'Mencuci tangan dengan sabun adalah cara paling efektif mencegah penyebaran penyakit infeksi.',
    jawaban: true,
    fakta: 'Fakta! WHO menyatakan cuci tangan dengan sabun dapat mencegah hingga 50% kasus diare dan 30% kasus infeksi saluran pernapasan.'
  },
  {
    type: 'faktamitos',
    kategori: 'Lingkungan 🌍',
    pernyataan: 'Menanam satu pohon sudah cukup untuk mengimbangi jejak karbon aktivitas harian seseorang.',
    jawaban: false,
    fakta: 'Mitos. Satu pohon dewasa menyerap ~22 kg CO₂/tahun. Rata-rata orang Indonesia menghasilkan ~2.200 kg CO₂/tahun—butuh 100+ pohon per orang!'
  },
  {
    type: 'faktamitos',
    kategori: 'Kesehatan 💊',
    pernyataan: 'Konsumsi gula berlebih bisa menyebabkan diabetes tipe 2.',
    jawaban: true,
    fakta: 'Fakta. Gula berlebih berkontribusi pada obesitas yang merupakan faktor risiko utama diabetes tipe 2, selain genetik dan gaya hidup.'
  },
  // -------- TEBAK GAMBAR --------
  {
    type: 'tebakgambar',
    kategori: 'Lingkungan 🌍',
    gambar: '☀️🌿🌊',
    petunjuk: 'Ini adalah tiga sumber energi yang tidak akan habis...',
    opsi: ['Energi Fosil', 'Energi Terbarukan', 'Energi Nuklir', 'Energi Kimia'],
    jawaban: 1,
    fakta: 'Matahari, tumbuhan (biomassa), dan air adalah contoh sumber energi terbarukan yang ramah lingkungan.'
  },
  {
    type: 'tebakgambar',
    kategori: 'Kesehatan 💊',
    gambar: '🫀',
    petunjuk: 'Organ ini memompa darah ke seluruh tubuh dan berdetak ±100.000 kali sehari.',
    opsi: ['Paru-paru', 'Hati', 'Jantung', 'Ginjal'],
    jawaban: 2,
    fakta: 'Jantung memompa sekitar 5 liter darah per menit dan ±7.200 liter per hari! Olahraga rutin menjaga jantung tetap sehat.'
  },
  {
    type: 'tebakgambar',
    kategori: 'Lingkungan 🌍',
    gambar: '🔄♻️🔄',
    petunjuk: 'Simbol universal untuk sebuah proses mengubah barang bekas menjadi bahan baru...',
    opsi: ['Pembuangan', 'Daur Ulang', 'Pembakaran', 'Penimbunan'],
    jawaban: 1,
    fakta: 'Daur ulang menghemat energi, mengurangi polusi, dan memperpanjang umur sumber daya alam. 1 ton kertas didaur ulang = 17 pohon diselamatkan!'
  },
];

const TANTANGAN_DATA = [
  {
    emoji: '💧',
    judul: 'Hemat Air Sprint!',
    deskripsi: 'Siapa yang bisa menyebutkan paling banyak cara hemat air dalam kehidupan sehari-hari? Waktu 30 detik, silakan mulai!',
    tipe: 'kecepatan'
  },
  {
    emoji: '🌱',
    judul: 'Guru Lingkungan',
    deskripsi: 'Siapa yang bisa menjelaskan apa itu "jejak karbon" dengan kalimat sederhana yang bisa dipahami anak SD? Waktu 45 detik!',
    tipe: 'penjelasan'
  },
  {
    emoji: '🧘',
    judul: 'Keseimbangan Hidup',
    deskripsi: 'Berdiri dengan satu kaki selama mungkin! Siapa yang bertahan paling lama tanpa menyentuh lantai dengan kaki yang diangkat?',
    tipe: 'fisik'
  },
  {
    emoji: '🥦',
    judul: 'Si Raja Buah & Sayur',
    deskripsi: 'Siapa yang paling banyak menyebutkan nama buah atau sayuran yang baik untuk imunitas tubuh? Waktu 30 detik, tidak boleh mengulang!',
    tipe: 'kecepatan'
  },
  {
    emoji: '🫁',
    judul: 'Tahan Napas Terlama',
    deskripsi: 'Tarik napas dalam-dalam, lalu tahan! Siapa yang bisa menahan napas paling lama? Tidak boleh ada nafas pendek-pendek ya!',
    tipe: 'fisik'
  },
  {
    emoji: '🚯',
    judul: 'Pilah Sampah Kilat',
    deskripsi: 'Sebutkan sebanyak mungkin contoh sampah organik dan sampah anorganik bergantian! Siapa yang paling banyak dan benar dalam 30 detik?',
    tipe: 'kecepatan'
  },
  {
    emoji: '🌡️',
    judul: 'Detektif Kesehatan',
    deskripsi: 'Sebutkan 5 gejala umum yang menandakan seseorang kurang tidur! Waktu 20 detik. Siapa yang lebih banyak dan benar?',
    tipe: 'pengetahuan'
  },
  {
    emoji: '🌿',
    judul: 'Cinta Bumi',
    deskripsi: 'Sebutkan manfaat-manfaat pohon bagi manusia dan lingkungan! Siapa yang lebih banyak dalam 30 detik? GO!',
    tipe: 'kecepatan'
  },
];

const KESEMPATAN_DATA = [
  {
    emoji: '♻️',
    judul: 'Pahlawan Daur Ulang',
    deskripsi: 'Kamu berhasil memilah dan mendaur ulang sampah rumah tangga minggu ini. Lingkungan berterima kasih!',
    efek: { tipe: 'add', nilai: 30 },
    warna: 'positive'
  },
  {
    emoji: '🌬️',
    judul: 'Polusi Udara Meningkat',
    deskripsi: 'Kualitas udara di kotamu memburuk karena pabrik sekitar. Kamu harus membeli masker dan alat penjernih udara.',
    efek: { tipe: 'minus', nilai: 25 },
    warna: 'negative'
  },
  {
    emoji: '🌳',
    judul: 'Festival Tanam Pohon',
    deskripsi: 'Kamu ikut berpartisipasi dalam program tanam pohon nasional. Kontribusimu dihargai pemerintah!',
    efek: { tipe: 'add', nilai: 40 },
    warna: 'positive'
  },
  {
    emoji: '🤒',
    judul: 'Kurang Tidur!',
    deskripsi: 'Kamu begadang terlalu sering minggu ini. Imunitas menurun dan kamu jatuh sakit. Istirahat dulu!',
    efek: { tipe: 'minus', nilai: 20 },
    warna: 'negative'
  },
  {
    emoji: '🚲',
    judul: 'Bersepeda ke Kantor',
    deskripsi: 'Kamu memilih bersepeda selama seminggu penuh! Tubuh sehat, emisi karbon berkurang. Luar biasa!',
    efek: { tipe: 'add', nilai: 35 },
    warna: 'positive'
  },
  {
    emoji: '🌊',
    judul: 'Banjir Rob',
    deskripsi: 'Naiknya air laut akibat perubahan iklim menyebabkan banjir di wilayahmu. Kerugian cukup besar.',
    efek: { tipe: 'minus', nilai: 40 },
    warna: 'negative'
  },
  {
    emoji: '🥗',
    judul: 'Pola Makan Sehat',
    deskripsi: 'Kamu konsisten mengonsumsi sayuran dan buah setiap hari selama sebulan. Kesehatan meningkat!',
    efek: { tipe: 'add', nilai: 25 },
    warna: 'positive'
  },
  {
    emoji: '💡',
    judul: 'Hemat Listrik',
    deskripsi: 'Kamu beralih ke lampu LED dan selalu mematikan peralatan elektronik yang tidak digunakan. Tagihan listrik turun!',
    efek: { tipe: 'add', nilai: 20 },
    warna: 'positive'
  },
  {
    emoji: '🏭',
    judul: 'Asap Pabrik',
    deskripsi: 'Pabrik di dekat rumahmu membuang limbah sembarangan. Kamu terdampak dan harus menanggung biaya kesehatan.',
    efek: { tipe: 'minus', nilai: 30 },
    warna: 'negative'
  },
  {
    emoji: '🎁',
    judul: 'Bonus Lingkungan!',
    deskripsi: 'Kamu memenangkan lomba inovasi ramah lingkungan tingkat kota. Selamat, pionir hijau!',
    efek: { tipe: 'add', nilai: 50 },
    warna: 'positive'
  },
];


