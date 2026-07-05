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
    soal: 'Sampah sebaiknya dibuang ke...',
    opsi: ['Sungai', 'Tempat sampah', 'Selokan', 'Laut'],
    jawaban: 1,
    fakta: 'Membuang sampah pada tempatnya mencegah pencemaran dan menjaga kebersihan lingkungan.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Ikan bernapas menggunakan...',
    opsi: ['Paru-paru', 'Hidung', 'Insang', 'Kulit'],
    jawaban: 2,
    fakta: 'Insang menyerap oksigen yang terlarut di dalam air untuk pernapasan ikan.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Menanam pohon dapat membuat lingkungan menjadi...',
    opsi: ['Panas', 'Gersang', 'Sejuk', 'Kotor'],
    jawaban: 2,
    fakta: 'Pohon menyerap panas dan menghasilkan oksigen sehingga udara menjadi lebih sejuk.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Jika selesai menggunakan air, kita harus...',
    opsi: ['Membiarkan keran terbuka', 'Menutup keran', 'Membuka keran lebih besar', 'Mengalirkan air terus'],
    jawaban: 1,
    fakta: 'Menutup keran setelah digunakan membantu menghemat air bersih.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Contoh ikan air tawar adalah...',
    opsi: ['Tuna', 'Lele', 'Kakap', 'Tongkol'],
    jawaban: 1,
    fakta: 'Lele hidup dan berkembang biak di perairan tawar seperti sungai, kolam, dan danau.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Udara bersih baik untuk...',
    opsi: ['Kesehatan', 'Sampah', 'Polusi', 'Banjir'],
    jawaban: 0,
    fakta: 'Udara bersih mengandung oksigen yang cukup dan minim polutan sehingga baik bagi kesehatan.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Kegiatan yang menjaga kebersihan sekolah adalah...',
    opsi: ['Membuang sampah sembarangan', 'Piket kelas', 'Mencoret tembok', 'Mengotori halaman'],
    jawaban: 1,
    fakta: 'Piket kelas adalah kegiatan rutin membersihkan ruang kelas secara bergiliran.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Terumbu karang berfungsi sebagai...',
    opsi: ['Rumah ikan', 'Jalan kapal', 'Tempat parkir', 'Bendungan'],
    jawaban: 0,
    fakta: 'Terumbu karang menjadi habitat dan tempat berlindung bagi banyak spesies ikan laut.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Sampah daun termasuk sampah...',
    opsi: ['Anorganik', 'Organik', 'Elektronik', 'Kaca'],
    jawaban: 1,
    fakta: 'Sampah organik seperti daun dapat terurai secara alami dan dijadikan kompos.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Menghemat listrik dapat dilakukan dengan...',
    opsi: ['Menyalakan TV seharian', 'Menyalakan lampu siang hari', 'Mematikan alat yang tidak digunakan', 'Membuka kulkas terus-menerus'],
    jawaban: 2,
    fakta: 'Mematikan alat elektronik yang tidak dipakai mengurangi pemborosan energi listrik.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Pohon menghasilkan...',
    opsi: ['Debu', 'Asap', 'Oksigen', 'Sampah'],
    jawaban: 2,
    fakta: 'Melalui fotosintesis, pohon melepaskan oksigen yang dibutuhkan makhluk hidup.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Hutan mangrove banyak ditemukan di daerah...',
    opsi: ['Pegunungan', 'Pantai', 'Gurun', 'Sawah'],
    jawaban: 1,
    fakta: 'Hutan mangrove tumbuh di daerah pesisir pantai yang terkena pasang surut air laut.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Air bersih penting untuk...',
    opsi: ['Polusi', 'Penyakit', 'Kesehatan', 'Sampah'],
    jawaban: 2,
    fakta: 'Air bersih diperlukan untuk minum, memasak, dan menjaga kesehatan tubuh.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Apa manfaat utama daur ulang?',
    opsi: ['Menambah sampah', 'Mengurangi jumlah sampah', 'Menambah polusi', 'Menambah limbah'],
    jawaban: 1,
    fakta: 'Daur ulang mengubah sampah menjadi barang baru sehingga mengurangi timbunan sampah.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Gerakan Gemar Makan Ikan bertujuan...',
    opsi: ['Menambah sampah', 'Menyehatkan masyarakat', 'Mengurangi belajar', 'Mengurangi olahraga'],
    jawaban: 1,
    fakta: 'Ikan kaya protein dan gizi yang baik untuk kesehatan dan pertumbuhan.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Saat hujan turun, kita dapat menggunakan...',
    opsi: ['Helm', 'Kipas', 'Payung', 'Tas'],
    jawaban: 2,
    fakta: 'Payung melindungi tubuh kita agar tidak basah saat hujan turun.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Jika menemukan sampah di halaman sekolah, sebaiknya...',
    opsi: ['Dibiarkan', 'Ditendang', 'Dipungut dan dibuang', 'Disimpan di meja'],
    jawaban: 2,
    fakta: 'Memungut sampah dan membuangnya pada tempatnya menjaga kebersihan sekolah.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Aquaponik adalah gabungan antara...',
    opsi: ['Budidaya ikan dan tanaman', 'Peternakan dan sawah', 'Kehutanan dan peternakan', 'Tambang dan pertanian'],
    jawaban: 0,
    fakta: 'Aquaponik memanfaatkan kotoran ikan sebagai nutrisi bagi tanaman yang ditanam bersamanya.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Contoh sampah anorganik adalah...',
    opsi: ['Daun', 'Kulit buah', 'Botol plastik', 'Rumput'],
    jawaban: 2,
    fakta: 'Botol plastik sulit terurai secara alami dan termasuk sampah anorganik.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Lingkungan yang bersih membuat kita merasa...',
    opsi: ['Nyaman', 'Takut', 'Marah', 'Bingung'],
    jawaban: 0,
    fakta: 'Lingkungan bersih memberikan rasa nyaman dan mendukung kesehatan penghuninya.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Mengapa kita harus menghemat air?',
    opsi: ['Agar air tidak cepat habis', 'Agar banjir', 'Agar keran rusak', 'Agar air kotor'],
    jawaban: 0,
    fakta: 'Air bersih terbatas jumlahnya sehingga perlu digunakan secara bijak.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Plankton merupakan...',
    opsi: ['Sampah laut', 'Hewan darat', 'Organisme kecil yang menjadi makanan ikan', 'Tumbuhan gurun'],
    jawaban: 2,
    fakta: 'Plankton adalah organisme mikroskopis di air yang menjadi sumber makanan utama banyak ikan.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Polusi udara dapat berasal dari...',
    opsi: ['Pohon', 'Rumput', 'Asap kendaraan', 'Bunga'],
    jawaban: 2,
    fakta: 'Asap kendaraan bermotor mengandung zat berbahaya yang mencemari udara.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Membuang sampah ke selokan dapat menyebabkan...',
    opsi: ['Pelangi', 'Banjir', 'Udara bersih', 'Pohon tumbuh'],
    jawaban: 1,
    fakta: 'Sampah yang menyumbat selokan menghambat aliran air dan menyebabkan banjir.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Sungai yang bersih membuat ikan...',
    opsi: ['Mati', 'Hilang', 'Sehat', 'Takut'],
    jawaban: 2,
    fakta: 'Air sungai yang bersih menyediakan oksigen dan habitat yang baik bagi ikan.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Apa kepanjangan dari 3R?',
    opsi: ['Read, Run, Rest', 'Reduce, Reuse, Recycle', 'Reduce, Rest, Repeat', 'Reuse, Run, Read'],
    jawaban: 1,
    fakta: 'Reduce, Reuse, Recycle adalah prinsip mengurangi, memakai ulang, dan mendaur ulang sampah.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Tumbuhan membutuhkan ... untuk tumbuh.',
    opsi: ['Mainan', 'Televisi', 'Cahaya matahari', 'Sepeda'],
    jawaban: 2,
    fakta: 'Cahaya matahari diperlukan tumbuhan untuk proses fotosintesis.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Menangkap ikan dengan racun dapat...',
    opsi: ['Menjaga lingkungan', 'Merusak ekosistem', 'Menambah ikan', 'Membersihkan laut'],
    jawaban: 1,
    fakta: 'Racun mencemari air dan membunuh biota laut secara tidak terkendali, merusak ekosistem.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Kegiatan gotong royong bertujuan untuk...',
    opsi: ['Mengotori lingkungan', 'Membersihkan lingkungan bersama', 'Bermain sepanjang hari', 'Membuat sampah'],
    jawaban: 1,
    fakta: 'Gotong royong adalah kerja sama warga untuk membersihkan dan merawat lingkungan bersama.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Reduce berarti...',
    opsi: ['Mengurangi sampah', 'Menambah sampah', 'Membakar sampah', 'Menyimpan sampah'],
    jawaban: 0,
    fakta: 'Reduce berarti mengurangi penggunaan barang yang berpotensi menjadi sampah.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Kendaraan yang tidak menghasilkan asap adalah...',
    opsi: ['Motor', 'Mobil', 'Truk', 'Sepeda'],
    jawaban: 3,
    fakta: 'Sepeda digerakkan dengan tenaga manusia sehingga tidak menghasilkan emisi gas buang.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Jika banyak ikan mati di sungai, kemungkinan penyebabnya adalah...',
    opsi: ['Air tercemar', 'Banyak tanaman', 'Air terlalu bersih', 'Banyak awan'],
    jawaban: 0,
    fakta: 'Pencemaran air mengurangi kadar oksigen dan meracuni ikan hingga menyebabkan kematian.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Kompos dibuat dari...',
    opsi: ['Plastik', 'Besi', 'Sampah organik', 'Kaca'],
    jawaban: 2,
    fakta: 'Kompos dihasilkan dari pembusukan sampah organik seperti sisa makanan dan daun.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Membawa tumbler dapat membantu mengurangi...',
    opsi: ['Sampah plastik', 'Oksigen', 'Pohon', 'Air hujan'],
    jawaban: 0,
    fakta: 'Menggunakan tumbler mengurangi kebutuhan botol plastik sekali pakai.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Terumbu karang yang rusak dapat menyebabkan...',
    opsi: ['Habitat ikan berkurang', 'Jumlah ikan bertambah', 'Air menjadi tawar', 'Laut menjadi dangkal'],
    jawaban: 0,
    fakta: 'Kerusakan terumbu karang menghilangkan tempat tinggal dan berkembang biak banyak ikan.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Apa manfaat utama menjaga lingkungan tetap bersih?',
    opsi: ['Menjaga kesehatan dan kenyamanan', 'Menambah sampah', 'Menambah penyakit', 'Menambah polusi'],
    jawaban: 0,
    fakta: 'Lingkungan bersih mengurangi risiko penyakit dan membuat hidup lebih nyaman.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Salah satu manfaat kolam budidaya ikan adalah...',
    opsi: ['Menambah sampah', 'Menghasilkan ikan untuk konsumsi', 'Mengurangi air bersih', 'Merusak lingkungan'],
    jawaban: 1,
    fakta: 'Budidaya ikan di kolam menyediakan sumber pangan protein bagi masyarakat.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Mengapa penggunaan plastik sekali pakai perlu dikurangi?',
    opsi: ['Sulit terurai', 'Mudah hilang', 'Menambah oksigen', 'Menyuburkan tanah'],
    jawaban: 0,
    fakta: 'Plastik membutuhkan waktu ratusan tahun untuk terurai secara alami di lingkungan.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Membersihkan lingkungan dapat mencegah...',
    opsi: ['Penyakit', 'Pelangi', 'Angin', 'Awan'],
    jawaban: 0,
    fakta: 'Lingkungan yang bersih mengurangi tempat berkembangnya kuman dan sumber penyakit.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Menangkap ikan yang masih kecil dapat menyebabkan...',
    opsi: ['Populasi ikan berkurang', 'Populasi ikan bertambah', 'Laut lebih luas', 'Air lebih jernih'],
    jawaban: 0,
    fakta: 'Ikan kecil belum sempat berkembang biak, sehingga populasi ikan bisa menurun drastis.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Apa manfaat biopori?',
    opsi: ['Menambah sampah', 'Membantu penyerapan air hujan', 'Mengurangi oksigen', 'Mengeringkan tanaman'],
    jawaban: 1,
    fakta: 'Lubang biopori membantu air hujan meresap ke tanah dan mencegah genangan.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Hewan yang hidup di kolam adalah...',
    opsi: ['Kucing', 'Elang', 'Lele', 'Kambing'],
    jawaban: 2,
    fakta: 'Lele adalah salah satu ikan yang umum dibudidayakan di kolam.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Apa yang terjadi jika pohon terus ditebang?',
    opsi: ['Lingkungan lebih panas', 'Udara lebih segar', 'Sungai lebih bersih', 'Hujan lebih banyak'],
    jawaban: 0,
    fakta: 'Berkurangnya pohon mengurangi penyerapan panas dan menyebabkan suhu lingkungan meningkat.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Salah satu upaya menjaga kelestarian sumber daya ikan adalah...',
    opsi: ['Menggunakan bom ikan', 'Menangkap semua ikan', 'Menangkap ikan sesuai aturan', 'Menangkap ikan kecil sebanyak mungkin'],
    jawaban: 2,
    fakta: 'Menangkap ikan sesuai aturan menjaga populasi ikan agar tetap lestari.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Recycle berarti...',
    opsi: ['Menyimpan barang', 'Mendaur ulang', 'Membakar barang', 'Menjual barang'],
    jawaban: 1,
    fakta: 'Recycle adalah proses mengolah kembali sampah menjadi barang yang bermanfaat.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Mengapa kita tidak boleh membuang sampah ke sungai?',
    opsi: ['Dapat mencemari air dan menyebabkan banjir', 'Membuat sungai lebih bersih', 'Menambah ikan', 'Menambah air'],
    jawaban: 0,
    fakta: 'Sampah di sungai mencemari air dan dapat menyumbat aliran hingga menyebabkan banjir.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Hutan mangrove membantu melindungi pantai dari...',
    opsi: ['Abrasi', 'Kabut', 'Pelangi', 'Hujan'],
    jawaban: 0,
    fakta: 'Akar pohon mangrove menahan tanah pantai sehingga mengurangi pengikisan oleh ombak (abrasi).'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Apa manfaat taman kota?',
    opsi: ['Tempat rekreasi dan penghijauan', 'Tempat sampah', 'Tempat pembakaran', 'Tempat parkir'],
    jawaban: 0,
    fakta: 'Taman kota menyediakan ruang hijau dan tempat rekreasi bagi warga.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Mengapa kita perlu menjaga sungai dan laut tetap bersih?',
    opsi: ['Agar ekosistem tetap sehat', 'Agar ikan sulit hidup', 'Agar air keruh', 'Agar sampah bertambah'],
    jawaban: 0,
    fakta: 'Sungai dan laut yang bersih menjaga keseimbangan ekosistem dan kehidupan biota air.'
  },
  {
    type: 'pilgan',
    kategori: 'Lingkungan 🌍',
    soal: 'Siapa yang bertanggung jawab menjaga lingkungan?',
    opsi: ['Guru saja', 'Orang tua saja', 'Pemerintah saja', 'Semua orang'],
    jawaban: 3,
    fakta: 'Menjaga lingkungan adalah tanggung jawab bersama seluruh anggota masyarakat.'
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


