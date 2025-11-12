import { Herb } from "@/interfaces/herbs";

export const HERBS: Herb[] = [
  {
    id: "herb-1",
    name: "Tawar Lasun Ilang (Ramuan Bawang Putih untuk Sakit Gigi)",
    image:
      "https://media.istockphoto.com/id/185328758/id/foto/bubuk-bawang-putih.jpg?s=2048x2048&w=is&k=20&c=megBvwwKCWKLQJdLy0LW1KthSRlHjLiHRoKzXfGk1yU=",
    description:
      "Ramuan tradisional sederhana yang menggunakan bawang putih untuk meredakan sakit gigi. Ramuan ini dipercaya secara turun-temurun oleh masyarakat Gayo karena sifat antibakterinya yang dapat membantu mengurangi rasa nyeri dan membunuh kuman penyebab infeksi.",
    plants: [
      {
        id: "plant-1",
        name: "Bawang Putih",
        latin: "Allium sativum",
        gayo: "Lasun Ilang",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-7",
        type: "Ringan",
        name: "Sakit Gigi",
      },
    ],
    benefits: [
      "Meredakan nyeri pada gigi yang sakit",
      "Membunuh bakteri penyebab infeksi",
      "Mengurangi pembengkakan pada gusi",
    ],
    ingredients: ["3–4 siung bawang putih", "Sedikit garam dapur"],
    dosage: [
      {
        gender: "umum",
        ageRange: ["6", null],
        amount: "Dioleskan langsung pada bagian gigi yang sakit",
        frequency: "2× sehari atau sesuai kebutuhan",
      },
    ],
    method: [
      "Kupas dan haluskan bawang putih.",
      "Tambahkan sedikit garam dan aduk hingga merata.",
      "Oleskan campuran tersebut pada bagian gigi yang sakit menggunakan kapas atau jari bersih.",
      "Diamkan beberapa menit lalu berkumur dengan air hangat.",
      "Ulangi 2 kali sehari hingga nyeri berkurang.",
    ],
  },
  {
    id: "herb-2",
    name: "Tawar Dedingin (Ramuan Daun Sedingin untuk Demam dan Pusing)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Ramuan tradisional Gayo yang menggunakan daun sedingin (dedingin) untuk menurunkan panas tubuh dan meredakan sakit kepala. Ramuan ini dipercaya mampu memberikan efek menyegarkan dan membantu menstabilkan suhu tubuh secara alami.",
    plants: [
      {
        id: "plant-12",
        name: "Daun Sedingin",
        latin: "Elaeocarpus floribundus (perkiraan spesies lokal)",
        gayo: "Dedingin",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-8",
        type: "Ringan",
        name: "Demam",
      },
      {
        id: "disease-9",
        type: "Ringan",
        name: "Sakit Kepala",
      },
    ],
    benefits: [
      "Menurunkan panas tubuh (demam)",
      "Meredakan pusing atau sakit kepala",
      "Memberikan efek segar dan menenangkan tubuh",
    ],
    ingredients: ["6 lembar daun dedingin segar", "Air bersih secukupnya"],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "½ gelas",
        frequency: "1× sehari atau sesuai kebutuhan",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "½ gelas",
        frequency: "1× sehari atau sesuai kebutuhan",
      },
    ],
    method: [
      "Cuci bersih daun dedingin.",
      "Haluskan daun hingga lumat menggunakan tangan atau tumbukan kayu.",
      "Peras daun yang telah dihaluskan untuk diambil airnya.",
      "Air perasan diminum langsung.",
      "Sisa daun yang telah dihaluskan dapat ditempelkan pada dahi atau kepala untuk membantu menurunkan panas.",
    ],
  },

  {
    id: "herb-4",
    name: "Tawar Kumer-Singkam (Ramuan Kunyit dan Batang Tingkem)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Ramuan tradisional Gayo yang dikenal sebagai *Tawar Kumer-Singkam*, dibuat dari kunyit (kumer) dan batang tingkem (singkam). Ramuan ini digunakan secara turun-temurun untuk menurunkan demam, melancarkan pencernaan, serta menjaga daya tahan tubuh. Dalam tradisi Gayo, tawar berarti obat alami yang dibuat dari bahan tumbuhan sekitar.",
    plants: [
      {
        id: "plant-3",
        name: "Kunyit",
        latin: "Curcuma longa",
        gayo: "Kumer",
        image: require("@/assets/images/react-logo.png"),
      },
      {
        id: "plant-15",
        name: "Batang Tingkem",
        latin: "Cinnamomum javanicum Blume",
        gayo: "Singkam / Ingkam",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-10",
        type: "Ringan",
        name: "Demam",
      },
      {
        id: "disease-11",
        type: "Ringan",
        name: "Gangguan Pencernaan",
      },
      {
        id: "disease-12",
        type: "Umum",
        name: "Menurunnya Daya Tahan Tubuh",
      },
    ],
    benefits: [
      "Menurunkan panas tubuh",
      "Membantu melancarkan pencernaan",
      "Menjaga daya tahan tubuh",
      "Melawan peradangan dan bakteri",
      "Menjaga kesehatan kulit",
    ],
    ingredients: [
      "1 ruas jari kunyit",
      "1 ruas jari batang tingkem",
      "1 gelas air bersih",
    ],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "⅕ gelas",
        frequency: "1× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "⅕ gelas",
        frequency: "1× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih kunyit dan batang tingkem.",
      "Geprek atau iris tipis kedua bahan tersebut.",
      "Rebus dengan 1 gelas air hingga tersisa sekitar ⅕ gelas.",
      "Saring air rebusan, lalu minum selagi hangat.",
    ],
  },
  {
    id: "herb-5",
    name: "Tawar Ewun-Puyang-Tangkis (Ramuan Jahe, Lengkuas, dan Serai untuk Alergi Kulit)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Ramuan tradisional Gayo yang disebut *Tawar Ewun-Puyang-Tangkis*, terbuat dari jahe (ewun), lengkuas (puyang), dan serai (tangkis). Ramuan ini digunakan untuk meredakan alergi kulit, mengurangi peradangan, serta membantu meningkatkan daya tahan tubuh. Kombinasi ketiga bahan ini juga memiliki sifat antibakteri dan antioksidan alami.",
    plants: [
      {
        id: "plant-1",
        name: "Jahe",
        latin: "Zingiber officinale",
        gayo: "Ewun",
        image: require("@/assets/images/react-logo.png"),
      },
      {
        id: "plant-8",
        name: "Lengkuas",
        latin: "Alpinia galanga",
        gayo: "Puyang",
        image: require("@/assets/images/react-logo.png"),
      },
      {
        id: "plant-2",
        name: "Serai",
        latin: "Cymbopogon citratus",
        gayo: "Tangkis",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-13",
        type: "Ringan",
        name: "Alergi Kulit",
      },
      {
        id: "disease-14",
        type: "Ringan",
        name: "Peradangan Kulit",
      },
    ],
    benefits: [
      "Meredakan alergi dan gatal-gatal pada kulit",
      "Mengurangi peradangan dari dalam tubuh",
      "Meningkatkan daya tahan tubuh",
      "Memiliki sifat antibakteri dan antioksidan alami",
    ],
    ingredients: [
      "1 ruas jahe",
      "1 ruas lengkuas",
      "1–2 batang serai",
      "3 gelas air bersih",
    ],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "½ gelas",
        frequency: "2× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "½ gelas",
        frequency: "2× sehari setelah makan",
      },
      {
        gender: "anak-anak",
        ageRange: ["3", "12"],
        amount: "3 sendok makan",
        frequency: "1× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih semua bahan herbal.",
      "Iris tipis atau geprek jahe, lengkuas, dan serai.",
      "Rebus dengan 3 gelas air hingga tersisa kira-kira 1 gelas.",
      "Saring air rebusan, kemudian biarkan hangat.",
      "Minum ½ gelas untuk dewasa dan 3 sendok makan untuk anak-anak.",
    ],
  },
  {
    id: "herb-6",
    name: "Tawar Tau Ilang (Ramuan Tebu Merah untuk Anemia)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Ramuan tradisional Gayo bernama *Tawar Tau Ilang* dibuat dari tebu merah (tau ilang). Ramuan ini digunakan untuk membantu mengatasi anemia, meningkatkan energi, dan memperkuat sistem kekebalan tubuh. Air perasan tebu merah dipercaya mengandung zat besi alami serta antioksidan yang membantu pembentukan sel darah merah dan menjaga daya tahan tubuh.",
    plants: [
      {
        id: "plant-20",
        name: "Tebu Merah",
        latin: "Saccharum officinarum",
        gayo: "Tau Ilang",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-15",
        type: "Ringan",
        name: "Anemia",
      },
    ],
    benefits: [
      "Meningkatkan kadar hemoglobin dan membantu mengatasi anemia",
      "Menambah energi dan vitalitas tubuh",
      "Meningkatkan daya tahan tubuh",
      "Melindungi sel dari kerusakan berkat kandungan antioksidan alami",
    ],
    ingredients: ["1 batang tebu merah yang sudah tua dan segar"],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "1× sehari setelah makan pagi",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "1× sehari setelah makan pagi",
      },
    ],
    method: [
      "Kupas kulit luar tebu merah hingga bersih.",
      "Potong-potong kecil lalu peras untuk diambil airnya.",
      "Saring air perasan agar bersih dari ampas.",
      "Minum 1 gelas air tebu merah segar, sebaiknya tidak lebih dari 30 menit setelah diperas.",
    ],
  },
  {
    id: "herb-7",
    name: "Tawar Sere Bing (Ramuan Serai dan Jahe untuk Masuk Angin)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Ramuan tradisional Gayo bernama *Tawar Sere Bing* dibuat dari serai (sere) dan jahe (bing). Ramuan ini digunakan untuk mengatasi masuk angin, menghangatkan tubuh, dan melancarkan pencernaan. Kandungan senyawa aktif dalam jahe dan serai membantu meredakan peradangan, nyeri otot, serta meningkatkan daya tahan tubuh secara alami.",
    plants: [
      {
        id: "plant-2",
        name: "Serai",
        latin: "Cymbopogon citratus",
        gayo: "Sere",
        image: require("@/assets/images/react-logo.png"),
      },
      {
        id: "plant-1",
        name: "Jahe",
        latin: "Zingiber officinale",
        gayo: "Bing",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-1",
        type: "Ringan",
        name: "Masuk Angin",
      },
    ],
    benefits: [
      "Menghangatkan tubuh dan mengatasi masuk angin",
      "Meredakan mual dan memperlancar pencernaan",
      "Mengurangi peradangan dan nyeri otot",
      "Membantu proses detoksifikasi tubuh",
      "Mendukung penurunan berat badan melalui efek diuretik alami",
    ],
    ingredients: [
      "3 batang serai",
      "1 ruas jahe",
      "Gula aren secukupnya",
      "3 gelas air bersih",
    ],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "3× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "3× sehari setelah makan",
      },
      {
        gender: "anak",
        ageRange: ["5", "12"],
        amount: "½ gelas",
        frequency: "3× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih semua bahan.",
      "Potong batang serai menjadi beberapa bagian.",
      "Geprek jahe agar aromanya keluar.",
      "Rebus serai, jahe, dan gula aren dalam 3 gelas air hingga tersisa 1 gelas.",
      "Saring, lalu minum selagi hangat setelah makan.",
    ],
  },
  {
    id: "herb-8",
    name: "Tawar Kumer (Ramuan Kunyit untuk Sakit Perut)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Ramuan tradisional Gayo bernama *Tawar Kumer* dibuat dari kunyit (kumer) dan gula aren. Ramuan ini digunakan untuk mengatasi sakit perut, nyeri haid, serta gangguan pencernaan seperti asam lambung dan kembung. Kunyit memiliki sifat antioksidan dan antiradang yang membantu meningkatkan daya tahan tubuh serta menenangkan sistem pencernaan.",
    plants: [
      {
        id: "plant-3",
        name: "Kunyit",
        latin: "Curcuma longa",
        gayo: "Kumer",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-3",
        type: "Ringan",
        name: "Sakit Perut",
      },
    ],
    benefits: [
      "Meredakan sakit perut dan gangguan pencernaan",
      "Mengatasi kembung dan asam lambung",
      "Mengurangi nyeri haid secara alami",
      "Meningkatkan daya tahan tubuh berkat kandungan antioksidan",
      "Membantu menenangkan sistem pencernaan",
    ],
    ingredients: [
      "3 ruas jari induk kunyit segar",
      "Gula aren secukupnya",
      "3 gelas air bersih",
    ],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "3× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "3× sehari setelah makan",
      },
      {
        gender: "anak",
        ageRange: ["5", "12"],
        amount: "½ gelas",
        frequency: "3× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih kunyit dan parut halus.",
      "Tambahkan gula aren dan 3 gelas air.",
      "Rebus hingga tersisa sekitar 1 gelas air.",
      "Saring air rebusan, lalu minum selagi hangat setelah makan.",
    ],
  },
  {
    id: "herb-9",
    name: "Tawar Gume (Ramuan Daun Sirih Hutan untuk Lambung)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Tawar Gume merupakan ramuan tradisional Gayo yang menggunakan daun sirih hutan (gume), putih telur, dan gambir. Ramuan ini digunakan secara luar untuk mengatasi gangguan lambung, perut mulas, serta membantu meredakan peradangan pada bagian tubuh tertentu. Daun gume memiliki sifat antioksidan, antimikroba, dan anti-inflamasi yang menenangkan kulit dan jaringan di bawahnya.",
    plants: [
      {
        id: "plant-12",
        name: "Sirih Hutan",
        latin: "Piper peltatum",
        gayo: "Gume",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-9",
        type: "Sedang",
        name: "Gangguan Lambung",
      },
    ],
    benefits: [
      "Meredakan nyeri dan peradangan pada area lambung",
      "Menenangkan kulit dan jaringan yang mengalami iritasi",
      "Mempercepat penyembuhan luka luar",
      "Membantu meredakan rasa panas di perut atau dada",
      "Mengandung antioksidan alami dari daun gume",
    ],
    ingredients: [
      "2 butir putih telur",
      "1 buah gambir kering, dihaluskan",
      "3 lembar daun gume (sirih hutan)",
    ],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "Digunakan secukupnya",
        frequency:
          "Ditempelkan pada bagian perut atau kulit yang sakit hingga terasa lega",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "Digunakan secukupnya",
        frequency:
          "Ditempelkan pada bagian perut atau kulit yang sakit hingga terasa lega",
      },
    ],
    method: [
      "Haluskan gambir kering.",
      "Campurkan dengan putih telur dan aduk rata hingga menjadi pasta.",
      "Letakkan campuran tersebut di atas daun sirih hutan (gume).",
      "Tempelkan pada bagian perut atau area yang terasa sakit.",
      "Biarkan hingga rasa nyeri berkurang atau selama beberapa jam, lalu ganti dengan yang baru bila perlu.",
    ],
  },
  {
    id: "herb-11",
    name: "Tawar Kuyun (Ramuan Jeruk Nipis untuk Paru-paru)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Tawar Kuyun merupakan ramuan tradisional Gayo yang menggunakan jeruk nipis (asam kuyun) untuk membersihkan paru-paru, meredakan batuk berdahak, dan membantu proses detoksifikasi alami tubuh. Air perasan jeruk nipis kaya vitamin C dan antioksidan yang melindungi jaringan paru dari radikal bebas serta membantu melarutkan lendir dan racun yang menumpuk.",
    plants: [
      {
        id: "plant-14",
        name: "Jeruk Nipis",
        latin: "Citrus aurantifolia",
        gayo: "Asam Kuyun",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-11",
        type: "Sedang",
        name: "Gangguan Paru-paru / Batuk Berdahak",
      },
    ],
    benefits: [
      "Membersihkan lendir dan racun dari paru-paru",
      "Sebagai antioksidan kuat untuk perlindungan paru",
      "Meredakan peradangan pada sistem pernapasan",
      "Meningkatkan daya tahan tubuh",
      "Membantu mengatasi batuk dan sesak napas ringan",
    ],
    ingredients: ["6 buah jeruk nipis (asam kuyun)"],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "½ gelas air perasan jeruk",
        frequency: "Diminum 1–2 kali sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "½ gelas air perasan jeruk",
        frequency: "Diminum 1–2 kali sehari setelah makan",
      },
    ],
    method: [
      "Belah dua jeruk nipis (asam kuyun).",
      "Peras untuk mengambil airnya.",
      "Tuangkan ke dalam gelas dan dapat diminum langsung atau ditambahkan sedikit madu.",
      "Konsumsi secara rutin untuk membersihkan paru-paru dan meredakan batuk berdahak.",
    ],
  },
  {
    id: "herb-12",
    name: "Tawar Gume Pijer (Ramuan Daun Sirih Hutan untuk Kanker Payudara)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Tawar Gume Pijer merupakan ramuan luar tradisional Gayo yang digunakan untuk membantu mengatasi benjolan atau nyeri pada area payudara. Ramuan ini dibuat dari daun sirih hutan (gume), putih telur, dan pijer (minyak alami, biasanya minyak kelapa atau serai wangi). Daun gume memiliki sifat antioksidan, antimikroba, dan anti-inflamasi yang membantu meredakan peradangan serta mempercepat pemulihan jaringan kulit dan otot di sekitar area yang sakit.",
    plants: [
      {
        id: "plant-12",
        name: "Sirih Hutan",
        latin: "Piper peltatum",
        gayo: "Gume",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-12",
        type: "Berat",
        name: "Kanker Payudara",
      },
    ],
    benefits: [
      "Membantu mengurangi peradangan pada jaringan payudara",
      "Menenangkan area nyeri atau bengkak",
      "Membantu melancarkan sirkulasi di sekitar benjolan",
      "Meningkatkan elastisitas kulit melalui minyak alami pijer",
      "Mendukung penyembuhan alami jaringan tubuh",
    ],
    ingredients: [
      "3 lembar daun sirih hutan (gume)",
      "3 butir putih telur",
      "Pijer (minyak kelapa atau serai wangi) secukupnya",
    ],
    dosage: [
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "Digunakan secukupnya",
        frequency: "Ditempelkan pada area payudara yang sakit 1–2 kali sehari",
      },
    ],
    method: [
      "Cuci bersih daun sirih hutan (gume).",
      "Letakkan daun di atas wadah, tambahkan putih telur dan pijer di bagian atasnya.",
      "Aduk atau ratakan sedikit agar bahan tercampur.",
      "Tempelkan pada area payudara yang terasa nyeri atau terdapat benjolan.",
      "Diamkan selama beberapa jam, lalu ganti dengan ramuan baru setiap pagi dan sore.",
    ],
  },
  {
    id: "herb-13",
    name: "Tawar Kicit Manok (Ramuan Melada Pahit untuk Diabetes)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Tawar Kicit Manok merupakan ramuan tradisional Gayo yang digunakan untuk membantu menurunkan kadar gula darah dan meredakan peradangan akibat penyakit kronis seperti diabetes. Terbuat dari daun melada pahit (Kicit Manok), ramuan ini dikenal karena rasa pahitnya yang kuat namun berkhasiat untuk membersihkan darah dan memperbaiki fungsi pankreas.",
    plants: [
      {
        id: "plant-13",
        name: "Melada Pahit",
        latin: "Brucea javanica (L.) Merr",
        gayo: "Kicit Manok",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-13",
        type: "Kronis",
        name: "Diabetes",
      },
    ],
    benefits: [
      "Membantu menurunkan kadar gula darah",
      "Membersihkan darah dari racun tubuh",
      "Meredakan peradangan dan nyeri kronis",
      "Meningkatkan metabolisme tubuh",
      "Menjaga kesehatan organ hati dan pankreas",
    ],
    ingredients: [
      "5 lembar daun Kicit Manok (Melada Pahit)",
      "1,5 liter air bersih",
    ],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "2× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "2× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih daun Kicit Manok (Melada Pahit).",
      "Rebus dengan 1,5 liter air hingga tersisa sekitar 2 gelas.",
      "Saring air rebusannya.",
      "Minum 1 gelas pagi dan sore setelah makan.",
      "Konsumsi secara teratur hingga kondisi membaik.",
    ],
  },
  {
    id: "herb-14",
    name: "Tawar Ulung Sop (Ramuan Seledri untuk Darah Tinggi)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Tawar Ulung Sop merupakan ramuan tradisional Gayo yang menggunakan daun seledri (Ulung Sop) untuk membantu menurunkan tekanan darah tinggi, menjaga kesehatan jantung, dan menormalkan kolesterol. Ramuan ini bekerja dengan efek diuretik alami dari seledri yang membantu melancarkan buang air kecil dan mengurangi tekanan darah.",
    plants: [
      {
        id: "plant-14",
        name: "Seledri",
        latin: "Apium graveolens L.",
        gayo: "Ulung Sop",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-14",
        type: "Kronis",
        name: "Darah Tinggi",
      },
    ],
    benefits: [
      "Menurunkan tekanan darah tinggi",
      "Menjaga kesehatan jantung",
      "Menurunkan kadar kolesterol",
      "Melancarkan buang air kecil",
      "Membersihkan darah dan racun tubuh",
    ],
    ingredients: ["3 batang daun seledri (Ulung Sop)", "2 gelas air bersih"],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "3× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "3× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih daun seledri (Ulung Sop).",
      "Rebus dengan 2 gelas air hingga tersisa sekitar 1 gelas.",
      "Saring air rebusannya.",
      "Minum 1 gelas setelah makan, 3 kali sehari secara teratur.",
    ],
  },
  {
    id: "herb-15",
    name: "Tawar Asam Kuyun (Ramuan Jeruk Nipis untuk Gigitan Ular)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Tawar Asam Kuyun merupakan ramuan tradisional Gayo yang menggunakan jeruk nipis (Asam Kuyun) untuk membantu menetralisir racun akibat gigitan ular. Ramuan ini bekerja dengan cara alami membersihkan racun di area gigitan, mengurangi peradangan, serta memberikan efek antiseptik alami dari jeruk nipis.",
    plants: [
      {
        id: "plant-15",
        name: "Jeruk Nipis",
        latin: "Citrus aurantifolia",
        gayo: "Asam Kuyun",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-15",
        type: "Darurat",
        name: "Gigitan Ular",
      },
    ],
    benefits: [
      "Menetralisir racun akibat gigitan ular",
      "Mengurangi pembengkakan dan peradangan",
      "Membersihkan area luka dari kotoran dan bisa",
      "Memberikan efek antiseptik alami",
      "Meningkatkan daya tahan tubuh",
    ],
    ingredients: ["1 buah jeruk nipis (Asam Kuyun)", "Air hangat secukupnya"],
    dosage: [
      {
        gender: "semua",
        ageRange: ["0", null],
        amount: "Dioleskan pada bagian yang tergigit",
        frequency: "Beberapa kali hingga bengkak dan nyeri mereda",
      },
    ],
    method: [
      "Cuci bersih jeruk nipis.",
      "Giling atau haluskan jeruk nipis hingga mengeluarkan air dan ampasnya.",
      "Tambahkan sedikit air hangat dan aduk rata.",
      "Tempelkan ampas jeruk nipis pada bagian tubuh yang tergigit ular.",
      "Ulangi beberapa kali hingga kondisi membaik.",
    ],
  },
  {
    id: "herb-16",
    name: "Tawar Kacang Ranting (Ramuan Daun Kacang Panjang untuk Sakit Ulu Hati)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Tawar Kacang Ranting merupakan ramuan tradisional Gayo yang menggunakan daun kacang panjang (Vigna unguiculata ssp. sesquipedalis) untuk membantu meredakan sakit ulu hati, menjaga kesehatan jantung, dan menormalkan kolesterol. Kandungan kalium dan serat di dalamnya membantu mengontrol tekanan darah serta melancarkan sistem pencernaan.",
    plants: [
      {
        id: "plant-16",
        name: "Kacang Panjang",
        latin: "Vigna unguiculata ssp. sesquipedalis",
        gayo: "Kacang Ranting",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-16",
        type: "Pencernaan",
        name: "Sakit Ulu Hati",
      },
    ],
    benefits: [
      "Meredakan nyeri ulu hati",
      "Menurunkan kadar kolesterol",
      "Menjaga kesehatan jantung",
      "Mengontrol tekanan darah",
      "Melancarkan pencernaan",
    ],
    ingredients: [
      "6 lembar daun kacang panjang (Kacang Ranting)",
      "3 gelas air bersih",
      "Gula aren secukupnya",
    ],
    dosage: [
      {
        gender: "semua",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "3× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih daun kacang panjang (Kacang Ranting).",
      "Peras daun hingga keluar sarinya.",
      "Tambahkan 3 gelas air bersih dan sedikit gula aren.",
      "Aduk hingga merata.",
      "Minum 1 gelas, 3 kali sehari setelah makan.",
    ],
  },
  {
    id: "herb-17",
    name: "Tawar Nenas (Ramuan Nanas untuk Amandel)",
    image: require("@/assets/images/partial-react-logo.png"),
    description:
      "Tawar Nenas merupakan ramuan tradisional Gayo yang menggunakan buah nanas (Nenas) sebagai bahan utama untuk membantu meredakan radang amandel. Nanas mengandung enzim bromelain yang berkhasiat mengurangi peradangan, melancarkan pencernaan, serta meningkatkan sistem kekebalan tubuh.",
    plants: [
      {
        id: "plant-17",
        name: "Nanas",
        latin: "Ananas comosus",
        gayo: "Nenas",
        image: require("@/assets/images/react-logo.png"),
      },
    ],
    diseases: [
      {
        id: "disease-17",
        type: "Peradangan",
        name: "Amandel",
      },
    ],
    benefits: [
      "Meredakan peradangan pada amandel dan tenggorokan",
      "Meningkatkan sistem kekebalan tubuh",
      "Melancarkan pencernaan",
      "Menjaga kesehatan kulit dan tulang",
      "Membantu mengurangi lendir berlebih",
    ],
    ingredients: [
      "1 buah nanas yang sudah dikupas (Nenas)",
      "Garam secukupnya",
    ],
    dosage: [
      {
        gender: "semua",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "3× sehari setelah makan",
      },
    ],
    method: [
      "Kupas buah nanas hingga bersih.",
      "Parut dan peras untuk mengambil sarinya.",
      "Tambahkan garam secukupnya ke dalam air perasan nanas.",
      "Aduk rata dan minum setelah makan.",
      "Ulangi 3 kali sehari hingga gejala amandel berkurang.",
    ],
  },
];
