import { Herb } from "@/interfaces/herbs";

export const HERBS: Herb[] = [
  {
    id: "herb-1",
    name: "Tawar Lasun Ilang (Ramuan Bawang Putih untuk Sakit Gigi)",
    image:
      "https://videos.openai.com/az/vg-assets/task_01k9rw49bze24tkkgfhh934cyg%2F1762845233_img_1.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-11T01%3A09%3A13Z&ske=2025-11-18T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=IHqZSKHiOQ%2B5gJraH5or62xF49So3QweUrwcqWMuvl0%3D&ac=oaivgprodscus2",
    description:
      "Ramuan tradisional sederhana yang menggunakan bawang putih untuk meredakan sakit gigi. Ramuan ini dipercaya secara turun-temurun oleh masyarakat Gayo karena sifat antibakterinya yang dapat membantu mengurangi rasa nyeri dan membunuh kuman penyebab infeksi.",
    plants: [
      {
        id: "plant-1",
        name: "Bawang Putih",
        latin: "Allium sativum",
        gayo: "Lasun Ilang",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/bawang%20putih.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-1",
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
        gender: "Pria",
        ageRange: ["6", null],
        amount: "Dioleskan langsung pada bagian gigi yang sakit",
        frequency: "2× sehari atau sesuai kebutuhan",
      },
      {
        gender: "Wanita",
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
    image:
      "https://videos.openai.com/az/vg-assets/task_01k9rqb87se0y8ae6ddejvrkr6%2F1762840210_img_0.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-11T01%3A09%3A13Z&ske=2025-11-18T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=eX5bAKdcONokx2dSeW6avQp3VP%2BHWr6%2BcoewS/mJGTE%3D&ac=oaivgprodscus2",
    description:
      "Ramuan tradisional Gayo yang menggunakan daun sedingin (dedingin) untuk menurunkan panas tubuh dan meredakan sakit kepala. Ramuan ini dipercaya mampu memberikan efek menyegarkan dan membantu menstabilkan suhu tubuh secara alami.",
    plants: [
      {
        id: "plant-2",
        name: "Daun Sedingin",
        latin: "Kalanchoe pinnata",
        gayo: "Dedingin",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/sedingin.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-2",
        type: "Ringan",
        name: "Demam",
      },
      {
        id: "disease-3",
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
    id: "herb-3",
    name: "Tawar Kumer-Singkam (Ramuan Kunyit dan Batang Tingkem)",
    image:
      "https://videos.openai.com/az/vg-assets/task_01k9rt5h18erjarg10yhsph12y%2F1762843168_img_1.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-11T01%3A09%3A13Z&ske=2025-11-18T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=EOnLoVhEXcN3XaRckpY7WKYKDBXYsE0VyaL0lLvFhBI%3D&ac=oaivgprodscus2",
    description:
      "Ramuan tradisional Gayo yang dikenal sebagai *Tawar Kumer-Singkam*, dibuat dari kunyit (kumer) dan batang tingkem (singkam). Ramuan ini digunakan secara turun-temurun untuk menurunkan demam, melancarkan pencernaan, serta menjaga daya tahan tubuh. Dalam tradisi Gayo, tawar berarti obat alami yang dibuat dari bahan tumbuhan sekitar.",
    plants: [
      {
        id: "plant-3",
        name: "Kunyit",
        latin: "Curcuma longa",
        gayo: "Kumer",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/kunyit.jpg",
      },
      {
        id: "plant-4",
        name: "Sikkam",
        latin: "Cinnamomum javanicum Blume",
        gayo: "Batang Tikem",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/singkkam.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-2",
        type: "Ringan",
        name: "Demam",
      },
      {
        id: "disease-4",
        type: "Ringan",
        name: "Gangguan Pencernaan",
      },
      {
        id: "disease-5",
        type: "Ringan",
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
    id: "herb-4",
    name: "Tawar Ewun-Puyang-Tangkis (Ramuan Jahe, Lengkuas, dan Serai untuk Alergi Kulit)",
    image:
      "https://videos.openai.com/az/vg-assets/task_01k9rss6rpewzshg797wyhd867%2F1762842764_img_0.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-11T01%3A09%3A13Z&ske=2025-11-18T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=SLNf4bIjDWanBqbtepFTQM/yUpG7TQCJuWQFcmcrQK8%3D&ac=oaivgprodscus2",
    description:
      "Ramuan tradisional Gayo yang disebut *Tawar Ewun-Puyang-Tangkis*, terbuat dari jahe (ewun), lengkuas (puyang), dan serai (tangkis). Ramuan ini digunakan untuk meredakan alergi kulit, mengurangi peradangan, serta membantu meningkatkan daya tahan tubuh. Kombinasi ketiga bahan ini juga memiliki sifat antibakteri dan antioksidan alami.",
    plants: [
      {
        id: "plant-5",
        name: "Jahe",
        latin: "Zingiber officinale",
        gayo: "Ewun",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/jahe.jpg",
      },
      {
        id: "plant-6",
        name: "Lengkuas",
        latin: "Alpinia galanga",
        gayo: "Puyang",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/lengkuas.jpg",
      },
      {
        id: "plant-7",
        name: "Serai",
        latin: "Cymbopogon citratus",
        gayo: "Tangkis",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/serai.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-6",
        type: "Ringan",
        name: "Alergi Kulit",
      },
      {
        id: "disease-7",
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
        gender: "pria",
        ageRange: ["3", "12"],
        amount: "3 sendok makan",
        frequency: "1× sehari setelah makan",
      },
      {
        gender: "wanita",
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
    id: "herb-5",
    name: "Tawar Tau Ilang (Ramuan Tebu Merah untuk Anemia)",
    image:
      "https://videos.openai.com/az/vg-assets/task_01k9rsbr6afd3rmcryr3xvc0gx%2F1762842335_img_0.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-11T01%3A09%3A13Z&ske=2025-11-18T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=HYnYkENEAXv6K07xs2WjU6MTPuSoTn/SChlnDFjQz%2BY%3D&ac=oaivgprodscus2",
    description:
      "Ramuan tradisional Gayo bernama *Tawar Tau Ilang* dibuat dari tebu merah (tau ilang). Ramuan ini digunakan untuk membantu mengatasi anemia, meningkatkan energi, dan memperkuat sistem kekebalan tubuh. Air perasan tebu merah dipercaya mengandung zat besi alami serta antioksidan yang membantu pembentukan sel darah merah dan menjaga daya tahan tubuh.",
    plants: [
      {
        id: "plant-8",
        name: "Tebu Merah",
        latin: "Saccharum officinarum",
        gayo: "Tau Ilang",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/tebu%20merah.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-8",
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
    id: "herb-6",
    name: "Ramuan Bawang Merah untuk Migrain",
    image:
      "https://videos.openai.com/az/vg-assets/task_01k9rtp824e48865sprwq0j7ak%2F1762843716_img_0.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-11T01%3A09%3A13Z&ske=2025-11-18T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=vgSk0m9A6Nyp5ShEqDCtv%2Btv7GSG6SXVXCjgizb/cns%3D&ac=oaivgprodscus2",
    description:
      "Ramuan tradisional yang menggunakan bawang merah untuk membantu meredakan migrain dan sakit kepala. Ramuan ini dikenal memiliki manfaat dalam meningkatkan sirkulasi darah, mengurangi peradangan, dan memberikan efek hangat pada tubuh.",
    plants: [
      {
        id: "plant-15",
        name: "Bawang Merah",
        latin: "Allium cepa L. var. Aggregatum",
        gayo: "Lasun Ilang",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/bawang%20merah.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-19",
        type: "Ringan",
        name: "Migrain",
      },
    ],
    benefits: [
      "Melindungi kesehatan jantung",
      "Mengontrol kadar gula darah",
      "Meningkatkan sistem imun",
      "Mengurangi risiko kanker",
      "Meredakan sakit kepala dan migrain",
    ],
    ingredients: [
      "2 siung bawang merah",
      "Balsem secukupnya",
      "1 sendok makan minyak makan atau minyak kelapa",
    ],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "Dioleskan pada bagian kepala atau pelipis yang sakit",
        frequency: "2× sehari atau saat migrain kambuh",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "Dioleskan pada bagian kepala atau pelipis yang sakit",
        frequency: "2× sehari atau saat migrain kambuh",
      },
    ],
    method: [
      "Kupas dan iris bawang merah.",
      "Campurkan irisan bawang merah dengan balsem secukupnya dan minyak makan atau minyak kelapa.",
      "Aduk hingga merata.",
      "Oleskan ramuan pada bagian kepala atau pelipis yang terasa sakit.",
      "Ulangi pemakaian saat migrain kambuh.",
    ],
  },
  {
    id: "herb-7",
    name: "Tawar Sere Bing (Ramuan Serai dan Jahe untuk Masuk Angin)",
    image:
      "https://videos.openai.com/az/vg-assets/task_01k9rwftecf3krz2d7tsxwwa05%2F1762845606_img_1.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-11T01%3A09%3A13Z&ske=2025-11-18T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=eLgjS9j6qFP1ISCHbBmdn8ZkMmRpxJetT5fAlsHwn2o%3D&ac=oaivgprodscus2",
    description:
      "Ramuan tradisional Gayo bernama *Tawar Sere Bing* dibuat dari serai (sere) dan jahe (bing). Ramuan ini digunakan untuk mengatasi masuk angin, menghangatkan tubuh, dan melancarkan pencernaan. Kandungan senyawa aktif dalam jahe dan serai membantu meredakan peradangan, nyeri otot, serta meningkatkan daya tahan tubuh secara alami.",
    plants: [
      {
        id: "plant-7",
        name: "Serai",
        latin: "Cymbopogon citratus",
        gayo: "Tangkis",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/serai.jpg",
      },
      {
        id: "plant-5",
        name: "Jahe",
        latin: "Zingiber officinale",
        gayo: "Ewun",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/jahe.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-9",
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
    image:
      "https://videos.openai.com/az/vg-assets/task_01k9rwp1jjfwva3kaab51jswr4%2F1762845806_img_0.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-11T01%3A09%3A13Z&ske=2025-11-18T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=z1gCHM9YQpxQBfzOJwV%2B0iusSIKGB5e/yiOvEL7a9eo%3D&ac=oaivgprodscus2",
    description:
      "Ramuan tradisional Gayo bernama *Tawar Kumer* dibuat dari kunyit (kumer) dan gula aren. Ramuan ini digunakan untuk mengatasi sakit perut, nyeri haid, serta gangguan pencernaan seperti asam lambung dan kembung. Kunyit memiliki sifat antioksidan dan antiradang yang membantu meningkatkan daya tahan tubuh serta menenangkan sistem pencernaan.",
    plants: [
      {
        id: "plant-3",
        name: "Kunyit",
        latin: "Curcuma longa",
        gayo: "Kumer",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/kunyit.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-10",
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
    image: "",
    description:
      "Tawar Gume merupakan ramuan tradisional Gayo yang menggunakan daun sirih hutan (gume), putih telur, dan gambir. Ramuan ini digunakan secara luar untuk mengatasi gangguan lambung, perut mulas, serta membantu meredakan peradangan pada bagian tubuh tertentu. Daun gume memiliki sifat antioksidan, antimikroba, dan anti-inflamasi yang menenangkan kulit dan jaringan di bawahnya.",
    plants: [
      {
        id: "plant-9",
        name: "Sirih Hutan",
        latin: "Piper peltatum",
        gayo: "Gume",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/sirih%20hutan.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-11",
        type: "Ringan",
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
    id: "herb-10",
    name: "Tawar Kuyun (Ramuan Jeruk Nipis untuk Paru-paru)",
    image:
      "https://videos.openai.com/az/vg-assets/task_01k9ryq0x9fdns7hjkayn8e9s8%2F1762847943_img_0.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-11T01%3A09%3A13Z&ske=2025-11-18T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=IPSCIGpyoyKrJ5SKOUofKNNIlr38b96j6WTdFF5PD10%3D&ac=oaivgprodscus2",
    description:
      "Tawar Kuyun merupakan ramuan tradisional Gayo yang menggunakan jeruk nipis (asam kuyun) untuk membersihkan paru-paru, meredakan batuk berdahak, dan membantu proses detoksifikasi alami tubuh. Air perasan jeruk nipis kaya vitamin C dan antioksidan yang melindungi jaringan paru dari radikal bebas serta membantu melarutkan lendir dan racun yang menumpuk.",
    plants: [
      {
        id: "plant-10",
        name: "Jeruk Nipis",
        latin: "Citrus aurantifolia",
        gayo: "Asam Kuyun",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/jeruk%20nipis.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-12",
        type: "Berat",
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
    id: "herb-11",
    name: "Tawar Gume Pijer (Ramuan Daun Sirih Hutan untuk Kanker Payudara)",
    image:
      "https://videos.openai.com/az/vg-assets/task_01k9rz039me4d9x3r6hnptq0ht%2F1762848250_img_1.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=1af02b11-169c-463d-b441-d2ccfc9f02c8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-11T01%3A07%3A47Z&ske=2025-11-18T01%3A12%3A47Z&sks=b&skv=2024-08-04&sig=RDnRUoy1B8/d7ZQEiZTQHjReMUFYRhdv1cD9RaKP7SY%3D&ac=oaivgprodscus2",
    description:
      "Tawar Gume Pijer merupakan ramuan luar tradisional Gayo yang digunakan untuk membantu mengatasi benjolan atau nyeri pada area payudara. Ramuan ini dibuat dari daun sirih hutan (gume), putih telur, dan pijer (minyak alami, biasanya minyak kelapa atau serai wangi). Daun gume memiliki sifat antioksidan, antimikroba, dan anti-inflamasi yang membantu meredakan peradangan serta mempercepat pemulihan jaringan kulit dan otot di sekitar area yang sakit.",
    plants: [
      {
        id: "plant-9",
        name: "Sirih Hutan",
        latin: "Piper peltatum",
        gayo: "Gume",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/sirih%20hutan.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-13",
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
    id: "herb-12",
    name: "Tawar Kicit Manok (Ramuan Melada Pahit untuk Diabetes)",
    image: "",
    description:
      "Tawar Kicit Manok merupakan ramuan tradisional Gayo yang digunakan untuk membantu menurunkan kadar gula darah dan meredakan peradangan akibat penyakit kronis seperti diabetes. Terbuat dari daun melada pahit (Kicit Manok), ramuan ini dikenal karena rasa pahitnya yang kuat namun berkhasiat untuk membersihkan darah dan memperbaiki fungsi pankreas.",
    plants: [
      {
        id: "plant-11",
        name: "Melada Pahit",
        latin: "Brucea javanica (L.) Merr",
        gayo: "Kicit Manok",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/melada%20pahit.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-14",
        type: "Berat",
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
    id: "herb-13",
    name: "Tawar Ulung Sop (Ramuan Seledri untuk Darah Tinggi)",
    image: "",
    description:
      "Tawar Ulung Sop merupakan ramuan tradisional Gayo yang menggunakan daun seledri (Ulung Sop) untuk membantu menurunkan tekanan darah tinggi, menjaga kesehatan jantung, dan menormalkan kolesterol. Ramuan ini bekerja dengan efek diuretik alami dari seledri yang membantu melancarkan buang air kecil dan mengurangi tekanan darah.",
    plants: [
      {
        id: "plant-12",
        name: "Seledri",
        latin: "Apium graveolens L.",
        gayo: "Ulung Sop",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/seledri.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-15",
        type: "Berat",
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
    id: "herb-14",
    name: "Tawar Asam Kuyun (Ramuan Jeruk Nipis untuk Gigitan Ular)",
    image: "",
    description:
      "Tawar Asam Kuyun merupakan ramuan tradisional Gayo yang menggunakan jeruk nipis (Asam Kuyun) untuk membantu menetralisir racun akibat gigitan ular. Ramuan ini bekerja dengan cara alami membersihkan racun di area gigitan, mengurangi peradangan, serta memberikan efek antiseptik alami dari jeruk nipis.",
    plants: [
      {
        id: "plant-10",
        name: "Jeruk Nipis",
        latin: "Citrus aurantifolia",
        gayo: "Asam Kuyun",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/jeruk%20nipis.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-16",
        type: "Berat",
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
    id: "herb-15",
    name: "Tawar Kacang Ranting (Ramuan Daun Kacang Panjang untuk Sakit Ulu Hati)",
    image: "",
    description:
      "Tawar Kacang Ranting merupakan ramuan tradisional Gayo yang menggunakan daun kacang panjang (Vigna unguiculata ssp. sesquipedalis) untuk membantu meredakan sakit ulu hati, menjaga kesehatan jantung, dan menormalkan kolesterol. Kandungan kalium dan serat di dalamnya membantu mengontrol tekanan darah serta melancarkan sistem pencernaan.",
    plants: [
      {
        id: "plant-13",
        name: "Kacang Panjang",
        latin: "Vigna unguiculata ssp. sesquipedalis",
        gayo: "Kacang Ranting",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/daun%20kacang%20panjang.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-17",
        type: "Berat",
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
    id: "herb-16",
    name: "Tawar Nenas (Ramuan Nanas untuk Amandel)",
    image: "",
    description:
      "Tawar Nenas merupakan ramuan tradisional Gayo yang menggunakan buah nanas (Nenas) sebagai bahan utama untuk membantu meredakan radang amandel. Nanas mengandung enzim bromelain yang berkhasiat mengurangi peradangan, melancarkan pencernaan, serta meningkatkan sistem kekebalan tubuh.",
    plants: [
      {
        id: "plant-14",
        name: "Nanas",
        latin: "Ananas comosus",
        gayo: "Nenas",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/nanas.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-18",
        type: "Berat",
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

  // data baru
  {
    id: "herb-17",
    name: "Tawar Ulung Belo",
    image: "",
    description:
      "Ramuan tradisional Gayo yang menggunakan daun sirih untuk menghentikan mimisan. Sirih dikenal memiliki sifat antiseptik, antimikroba, dan penyembuh luka yang efektif, serta membantu menjaga kesehatan saluran pernapasan dan pencernaan.",
    plants: [
      {
        id: "plant-4",
        name: "Daun Sirih",
        latin: "Piper betle",
        gayo: "Ulung Belo",
        image: "",
      },
    ],
    diseases: [
      {
        id: "disease-20",
        type: "Ringan",
        name: "Mimisan",
      },
    ],
    benefits: [
      "Menghentikan pendarahan mimisan",
      "Menjaga kesehatan mulut dan gigi",
      "Membantu penyembuhan luka",
      "Mencegah infeksi bakteri dan jamur",
      "Menyehatkan saluran pencernaan",
      "Membantu menurunkan kadar gula darah",
      "Mencerahkan kulit wajah",
    ],
    ingredients: ["2 lembar daun sirih segar"],
    dosage: [
      {
        gender: "pria",
        ageRange: ["6", null],
        amount: "Ditempelkan pada lubang hidung yang berdarah",
        frequency: "Sekali setiap kali mimisan terjadi",
      },
      {
        gender: "wanita",
        ageRange: ["6", null],
        amount: "Ditempelkan pada lubang hidung yang berdarah",
        frequency: "Sekali setiap kali mimisan terjadi",
      },
    ],
    method: [
      "Ambil 2 lembar daun sirih segar.",
      "Cuci bersih daun sirih.",
      "Haluskan daun sirih hingga agak lembut.",
      "Tempelkan hasil halusan pada lubang hidung yang berdarah.",
      "Biarkan hingga mimisan berhenti.",
    ],
  },
  {
    id: "herb-18",
    name: "Tawar Ulung Kepile",
    image: "",
    description:
      "Ramuan tradisional Gayo yang menggunakan daun ubi jalar (Ulung Kepile) untuk mengatasi sariawan dan memperkuat daya tahan tubuh. Ramuan ini dipercaya mampu mempercepat penyembuhan luka di mulut serta menenangkan peradangan ringan.",
    plants: [
      {
        id: "plant-16",
        name: "Daun Ubi Jalar",
        latin: "Ipomoea batatas (L.) Lam",
        gayo: "Ulung Kepile",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/daun%20ubi%20jalar.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-19",
        type: "Ringan",
        name: "Sariawan",
      },
    ],
    benefits: [
      "Menyembuhkan sariawan",
      "Menjaga kesehatan mulut dan tenggorokan",
      "Meningkatkan daya tahan tubuh",
      "Menyembuhkan luka di mulut",
    ],
    ingredients: [
      "2 lembar daun ubi jalar",
      "1 gelas air hangat",
      "2 sendok makan gula",
    ],
    dosage: [
      {
        gender: "pria",
        amount: "1 gelas",
        ageRange: ["5", null],
        frequency: "3× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["5", null],
        amount: "1 gelas",
        frequency: "3× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih daun ubi jalar.",
      "Remas daun hingga keluar sarinya.",
      "Campurkan dengan air hangat dan sedikit gula.",
      "Aduk rata dan minum selagi hangat.",
    ],
  },
  {
    id: "herb-19",
    name: "Tawar Ulung Pertik",
    image: "",
    description:
      "Ramuan tradisional Gayo yang menggunakan daun pepaya (Ulung Pertik) sebagai obat alami untuk membantu meredakan malaria dan menurunkan demam. Ramuan ini dikenal karena kandungan antioksidan, vitamin, dan mineralnya yang membantu memulihkan stamina tubuh.",
    plants: [
      {
        id: "plant-17",
        name: "Daun Pepaya",
        latin: "Carica papaya",
        gayo: "Ulung Pertik",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/daun%20kates.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-20",
        type: "Berat",
        name: "Malaria",
      },
    ],
    benefits: [
      "Membantu menurunkan demam akibat malaria",
      "Membersihkan darah dari racun",
      "Meningkatkan daya tahan tubuh",
      "Menambah energi saat masa pemulihan",
    ],
    ingredients: [
      "1 lembar daun kates (pepaya)",
      "Sedikit garam",
      "½ gelas air bersih",
    ],
    dosage: [
      {
        gender: "pria",
        ageRange: ["8", null],
        amount: "½ gelas",
        frequency: "2× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["8", null],
        amount: "½ gelas",
        frequency: "2× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih daun kates.",
      "Peras daun dan ambil airnya.",
      "Tambahkan sedikit garam dan air setengah gelas.",
      "Aduk hingga rata dan minum setelah makan pagi dan sore.",
    ],
  },
  {
    id: "herb-20",
    name: "Tawar Kacang Ranting",
    description:
      "Ramuan tradisional Gayo yang menggunakan kombinasi daun kacang panjang (Kacang Ranting), kemiri, dan daun sirih hutan (Gume) untuk membantu meredakan flu, memperkuat daya tahan tubuh, dan menghangatkan badan. Ramuan ini dipercaya dapat membersihkan lendir pada saluran pernapasan dan mempercepat pemulihan saat demam.",
    image: "",
    plants: [
      {
        id: "plant-13",
        name: "Kacang Panjang",
        latin: "Vigna unguiculata ssp. sesquipedalis",
        gayo: "Kacang Ranting",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/daun%20kacang%20panjang.jpg",
      },
      {
        id: "plant-18",
        name: "Kemiri",
        latin: "Aleurites moluccana",
        gayo: "Kemiri",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Buah_kemiri_dan_kulitnya.jpg/640px-Buah_kemiri_dan_kulitnya.jpg",
      },
      {
        id: "plant-9",
        name: "Sirih Hutan",
        latin: "Piper peltatum",
        gayo: "Gume",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/sirih%20hutan.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-21",
        type: "Ringan",
        name: "Flu",
      },
    ],
    benefits: [
      "Meredakan gejala flu dan pilek",
      "Membantu menghangatkan tubuh",
      "Melancarkan pernapasan",
      "Meningkatkan daya tahan tubuh",
    ],
    ingredients: [
      "5 helai daun kacang panjang",
      "2 buah kemiri",
      "1 helai daun sirih hutan",
    ],
    dosage: [
      {
        gender: "pria",
        amount: "1 gelas",
        ageRange: ["6", null],
        frequency: "3× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["6", null],
        amount: "1 gelas",
        frequency: "3× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih semua bahan.",
      "Haluskan daun kacang panjang, kemiri, dan daun sirih hutan.",
      "Tambahkan sedikit air jika perlu.",
      "Peras dan minum airnya 3 kali sehari setelah makan.",
    ],
  },
  {
    id: "herb-21",
    name: "Tawar Kacang Ranting",
    description:
      "Ramuan tradisional Gayo yang menggunakan kombinasi daun kacang panjang (Kacang Ranting), kemiri, dan daun sirih hutan (Gume) untuk membantu meredakan flu, memperkuat daya tahan tubuh, dan menghangatkan badan. Ramuan ini dipercaya dapat membersihkan lendir pada saluran pernapasan dan mempercepat pemulihan saat demam.",
    image: "",
    plants: [
      {
        id: "plant-13",
        name: "Kacang Panjang",
        latin: "Vigna unguiculata ssp. sesquipedalis",
        gayo: "Kacang Ranting",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/daun%20kacang%20panjang.jpg",
      },
      {
        id: "plant-18",
        name: "Kemiri",
        latin: "Aleurites moluccana",
        gayo: "Kemiri",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Buah_kemiri_dan_kulitnya.jpg/640px-Buah_kemiri_dan_kulitnya.jpg",
      },
      {
        id: "plant-9",
        name: "Sirih Hutan",
        latin: "Piper peltatum",
        gayo: "Gume",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/sirih%20hutan.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-21",
        type: "Ringan",
        name: "Flu",
      },
    ],
    benefits: [
      "Meredakan gejala flu dan pilek",
      "Membantu menghangatkan tubuh",
      "Melancarkan pernapasan",
      "Meningkatkan daya tahan tubuh",
    ],
    ingredients: [
      "5 helai daun kacang panjang",
      "2 buah kemiri",
      "1 helai daun sirih hutan",
    ],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", "59"],
        amount: "1 gelas",
        frequency: "3× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["13", "59"],
        amount: "1 gelas",
        frequency: "3× sehari setelah makan",
      },
      {
        gender: "pria",
        ageRange: ["6", "12"],
        amount: "½ gelas",
        frequency: "3× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["6", "12"],
        amount: "½ gelas",
        frequency: "3× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih semua bahan.",
      "Haluskan daun kacang panjang, kemiri, dan daun sirih hutan.",
      "Tambahkan sedikit air jika perlu.",
      "Peras dan minum airnya 3 kali sehari setelah makan.",
    ],
  },
  {
    id: "herb-22",
    name: "Serbuk Kopi Tawar",
    description:
      "Ramuan tradisional Gayo yang memanfaatkan bubuk kopi (Coffea sp.) dan kuning telur sebagai obat luar untuk mengobati luka bakar ringan. Campuran ini membantu menenangkan kulit yang terbakar, mengurangi peradangan, serta mencegah infeksi dengan sifat antimikroba alami dari kopi.",
    image: "",
    plants: [
      {
        id: "plant-19",
        name: "Kopi",
        latin: "Coffea sp.",
        gayo: "Kupi",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/bubuk%20kopi.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-22",
        type: "Luka Luar",
        name: "Luka Bakar",
      },
    ],
    benefits: [
      "Mengurangi rasa perih pada luka bakar ringan",
      "Mencegah infeksi pada kulit",
      "Menenangkan dan mempercepat regenerasi kulit",
      "Membantu mengangkat sel kulit mati (eksfoliasi alami)",
    ],
    ingredients: ["Bubuk kopi secukupnya", "Kuning telur secukupnya"],
    dosage: [
      {
        gender: "semua",
        ageRange: ["13", "59"],
        amount: "Oleskan secukupnya pada area luka",
        frequency: "2× sehari sampai sembuh",
      },
      {
        gender: "pria",
        ageRange: ["6", "12"],
        amount: "Oleskan tipis pada luka",
        frequency: "2× sehari sampai membaik",
      },
      {
        gender: "wanita",
        ageRange: ["6", "12"],
        amount: "Oleskan tipis pada luka",
        frequency: "2× sehari sampai membaik",
      },
    ],
    method: [
      "Campurkan bubuk kopi dengan kuning telur hingga menjadi pasta.",
      "Oleskan secara merata pada bagian kulit yang terkena luka bakar ringan.",
      "Diamkan hingga mengering, kemudian bilas dengan air bersih.",
      "Ulangi 2 kali sehari sampai luka mengering.",
    ],
  },
  {
    id: "herb-23",
    name: "Ramuan Terong Padul Gondokan",
    description:
      "Ramuan tradisional Gayo yang menggunakan daun terong padul (Solanum lycopersicum var. cerasiforme) yang dikenal memiliki sifat anti-inflamasi dan pereda nyeri alami. Dicampur dengan sedikit blau, ramuan ini dioleskan secara langsung untuk membantu meredakan pembengkakan pada gondokan (parotitis).",
    image: "",
    plants: [
      {
        id: "plant-20",
        name: "Tomat Cherry",
        latin: "Solanum lycopersicum var. cerasiforme",
        gayo: "Terong Padul",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/daun%20tomat%20Cherry.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-23",
        type: "Pembengkakan",
        name: "Gondokan",
      },
    ],
    benefits: [
      "Mengurangi pembengkakan pada kelenjar gondok (parotitis)",
      "Membantu meredakan peradangan dan nyeri",
      "Menjaga kesehatan kulit",
      "Mendukung sistem kekebalan tubuh",
    ],
    ingredients: [
      "5 lembar daun terong padul (tomat cherry)",
      "Blau secukupnya",
    ],
    dosage: [
      {
        gender: "semua",
        ageRange: ["13", "59"],
        amount: "Dioleskan langsung pada bagian gondok yang bengkak",
        frequency: "2–3× sehari hingga bengkak mereda",
      },
      {
        gender: "pria",
        ageRange: ["6", "12"],
        amount: "Oleskan tipis pada area gondok",
        frequency: "2× sehari sampai kondisi membaik",
      },
      {
        gender: "wanita",
        ageRange: ["6", "12"],
        amount: "Oleskan tipis pada area gondok",
        frequency: "2× sehari sampai kondisi membaik",
      },
    ],
    method: [
      "Haluskan 5 lembar daun terong padul.",
      "Tambahkan blau secukupnya dan aduk hingga merata.",
      "Oleskan campuran pada bagian leher yang bengkak akibat gondokan.",
      "Ulangi pengolesan ketika lapisan sebelumnya mengering, hingga pembengkakan berkurang.",
    ],
  },
  {
    id: "herb-24",
    name: "Ramuan Gambir Kering Cacar Air",
    description:
      "Ramuan tradisional Gayo menggunakan gambir kering (Uncaria gambir Roxb), dikenal sebagai obat alami untuk mengatasi cacar air, sariawan, dan gangguan kulit. Kandungan antibakteri dan antioksidan di dalamnya membantu penyembuhan luka serta menjaga kesehatan kulit.",
    image: "",
    plants: [
      {
        id: "plant-21",
        name: "Gambir Kering",
        latin: "Uncaria gambir Roxb",
        gayo: "Kacu",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/Gambir%20kering.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-24",
        type: "Kulit",
        name: "Cacar Air",
      },
    ],
    benefits: [
      "Membantu mempercepat penyembuhan cacar air",
      "Bersifat antibakteri dan antiradang alami",
      "Menjaga kesehatan kulit dan mencegah infeksi",
      "Mengurangi rasa gatal dan iritasi pada kulit",
    ],
    ingredients: ["1 buah gambir kering", "½ gelas air cucian beras ketiga"],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "Dioleskan pada bagian tubuh yang terkena cacar air",
        frequency: "2× sehari hingga luka mengering",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "Dioleskan pada bagian tubuh yang terkena cacar air",
        frequency: "2× sehari hingga luka mengering",
      },
      {
        gender: "pria",
        ageRange: ["6", "12"],
        amount: "Oleskan tipis pada area cacar yang muncul",
        frequency: "1–2× sehari sampai membaik",
      },
      {
        gender: "wanita",
        ageRange: ["6", "12"],
        amount: "Oleskan tipis pada area cacar yang muncul",
        frequency: "1–2× sehari sampai membaik",
      },
    ],
    method: [
      "Haluskan 1 buah gambir kering hingga menjadi serbuk.",
      "Tambahkan ½ gelas air cucian beras ketiga, aduk hingga rata.",
      "Oleskan campuran pada bagian kulit yang terkena cacar air.",
      "Gunakan secara rutin hingga luka cacar mengering dan sembuh.",
    ],
  },
  {
    id: "herb-25",
    name: "Ramuan Daun Kacang Panjang untuk Congek",
    description:
      "Ramuan tradisional Gayo menggunakan daun kacang panjang (Vigna unguiculata ssp. sesquipedalis) yang dikenal memiliki sifat antibakteri, antiinflamasi, dan antimikroba. Ramuan ini digunakan secara alami untuk membantu mengatasi infeksi telinga tengah (congek), menurunkan kolesterol, serta menjaga kesehatan jantung dan pencernaan.",
    image: "",
    plants: [
      {
        id: "plant-17",
        name: "Daun Kacang Panjang",
        latin: "Vigna unguiculata ssp. sesquipedalis",
        gayo: "Ulung Kacang Ranting",
        image: "",
      },
    ],
    diseases: [
      {
        id: "disease-25",
        type: "Infeksi",
        name: "Infeksi Telinga Tengah (Congek)",
      },
    ],
    benefits: [
      "Membantu meredakan infeksi telinga tengah (congek)",
      "Bersifat antibakteri dan antiradang alami",
      "Menjaga kesehatan jantung dan sistem pencernaan",
      "Mendukung kekebalan tubuh dan menurunkan kolesterol",
    ],
    ingredients: ["6 lembar daun kacang panjang segar"],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "3 tetes ke telinga",
        frequency: "1× sehari sampai sembuh",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "3 tetes ke telinga",
        frequency: "1× sehari sampai sembuh",
      },
      {
        gender: "pria",
        ageRange: ["6", "12"],
        amount: "2 tetes ke telinga",
        frequency: "1× sehari selama 3 hari berturut-turut",
      },
      {
        gender: "wanita",
        ageRange: ["6", "12"],
        amount: "2 tetes ke telinga",
        frequency: "1× sehari selama 3 hari berturut-turut",
      },
    ],
    method: [
      "Cuci bersih 6 lembar daun kacang panjang.",
      "Haluskan hingga keluar airnya.",
      "Saring airnya lalu teteskan 3 tetes ke dalam telinga yang sakit.",
      "Ulangi sehari sekali sampai gejala mereda.",
    ],
  },
  {
    id: "herb-26",
    name: "Ramuan Terong Belanda dan Jambu Biji untuk Gula Rendah",
    description:
      "Ramuan tradisional Gayo yang menggunakan perpaduan terong belanda (Solanum betaceum) dan jambu biji (Psidium guajava). Keduanya kaya vitamin C, A, folat, dan antioksidan yang membantu meningkatkan daya tahan tubuh, menjaga kesehatan mata, otak, dan jantung, serta mengontrol kadar gula darah dan mencegah penyakit kronis seperti diabetes dan kanker.",
    image: "",
    plants: [
      {
        id: "plant-22",
        name: "Terong Belanda",
        latin: "Solanum betaceum",
        gayo: "Agur",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/terong%20Belanda.jpg",
      },
      {
        id: "plant-23",
        name: "Jambu Biji",
        latin: "Psidium guajava",
        gayo: "Gelime",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/jambu%20biji.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-26",
        type: "Metabolik",
        name: "Gula Darah Rendah",
      },
    ],
    benefits: [
      "Membantu menstabilkan kadar gula darah",
      "Menjaga kesehatan jantung dan pembuluh darah",
      "Meningkatkan kekebalan tubuh",
      "Menjaga kesehatan mata dan otak",
    ],
    ingredients: [
      "2 buah jambu biji matang",
      "3 buah terong belanda segar",
      "1 gelas air putih",
    ],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "1× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "1 gelas",
        frequency: "1× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih jambu biji dan terong belanda.",
      "Potong-potong bahan dan masukkan ke blender.",
      "Tambahkan 1 gelas air putih lalu haluskan.",
      "Saring hasil blender, lalu minum airnya hingga habis.",
    ],
  },
  {
    id: "herb-27",
    name: "Ramuan Pucuk Padul Gume",
    description:
      "Ramuan tradisional Gayo yang menggunakan pucuk tomat cherry (Solanum lycopersicum var. cerasiforme) dan daun sirih hutan (Piper peltatum). Ramuan ini berkhasiat untuk mengobati bisul atau barah secara alami, karena mengandung sifat antiinflamasi, antibakteri, dan antimikroba yang membantu mempercepat penyembuhan luka serta mencegah infeksi kulit.",
    image: "",
    plants: [
      {
        id: "plant-20",
        name: "Tomat Cherry",
        latin: "Solanum lycopersicum var. cerasiforme",
        gayo: "Terong Padul",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/daun%20tomat%20Cherry.jpg",
      },
      {
        id: "plant-9",
        name: "Sirih Hutan",
        latin: "Piper peltatum",
        gayo: "Gume",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/sirih%20hutan.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-27",
        type: "Kulit",
        name: "Bisul / Barah",
      },
    ],
    benefits: [
      "Membantu mengobati bisul atau barah secara alami",
      "Mengurangi peradangan dan infeksi pada kulit",
      "Mempercepat penyembuhan luka luar",
      "Menjaga kesehatan kulit dari bakteri",
    ],
    ingredients: [
      "Pucuk tomat cherry sebanyak 7 lembar",
      "Sedikit kapur sirih",
    ],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "Diusapkan pada area kulit yang sakit",
        frequency: "2× sehari hingga sembuh",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "Diusapkan pada area kulit yang sakit",
        frequency: "2× sehari hingga sembuh",
      },
    ],
    method: [
      "Cuci bersih pucuk tomat cherry atau terong padul.",
      "Haluskan hingga membentuk pasta.",
      "Tambahkan sedikit kapur sirih, aduk hingga rata.",
      "Oleskan pada daun sirih hutan (gume).",
      "Tempelkan ramuan pada bagian kulit yang terkena bisul atau barah.",
      "Ganti dua kali sehari hingga luka mengering.",
    ],
  },
  {
    id: "herb-28",
    name: "Ramuan Ranting Gume Kemiri",
    description:
      "Ramuan tradisional yang memadukan daun kacang panjang (Vigna unguiculata ssp. sesquipedalis), sirih hutan (Piper peltatum), dan kemiri (Aleurites moluccanus). Ramuan ini dipercaya secara turun-temurun untuk membantu meredakan gejala usus buntu, mengurangi peradangan dalam perut, serta menjaga kesehatan sistem pencernaan.",
    image: "",
    plants: [
      {
        id: "plant-13",
        name: "Kacang Panjang",
        latin: "Vigna unguiculata ssp. sesquipedalis",
        gayo: "Kacang Ranting",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/daun%20kacang%20panjang.jpg",
      },
      {
        id: "plant-9",
        name: "Sirih Hutan",
        latin: "Piper peltatum",
        gayo: "Gume",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/sirih%20hutan.jpg",
      },
      {
        id: "plant-18",
        name: "Kemiri",
        latin: "Aleurites moluccana",
        gayo: "Kemiri",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Buah_kemiri_dan_kulitnya.jpg/640px-Buah_kemiri_dan_kulitnya.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-28",
        type: "Pencernaan",
        name: "Usus Buntu",
      },
    ],
    benefits: [
      "Membantu meredakan peradangan pada usus buntu",
      "Menjaga kesehatan sistem pencernaan",
      "Mengurangi rasa nyeri di perut bagian kanan bawah",
      "Mendukung proses detoksifikasi alami tubuh",
    ],
    ingredients: [
      "5–6 buah kacang panjang",
      "1 lembar daun sirih hutan",
      "2 buah kemiri",
    ],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "1 gelas diminum",
        frequency: "2× sehari, pagi dan sore setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "1 gelas diminum",
        frequency: "2× sehari, pagi dan sore setelah makan",
      },
    ],
    method: [
      "Cuci bersih semua bahan: kacang panjang, daun sirih hutan, dan kemiri.",
      "Blender semua bahan dengan 1 gelas air hingga halus.",
      "Saring airnya, lalu minum ramuan ini dua kali sehari.",
      "Konsumsi rutin hingga gejala berkurang.",
    ],
  },
  {
    id: "herb-29",
    name: "Ramuan Awal Gelime",
    description:
      "Ramuan tradisional Gayo yang memadukan pisang muda (Musa x paradisiaca L.) dan pucuk jambu biji (Psidium guajava L.). Dikenal secara turun-temurun untuk membantu meredakan gejala tipes, menstabilkan pencernaan, serta meningkatkan daya tahan tubuh berkat kandungan antioksidan dan antibakterinya.",
    image: "",
    plants: [
      {
        id: "plant-24",
        name: "Pisang Muda",
        latin: "Musa x paradisiaca L.",
        gayo: "Awal Mude",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/pisang%20muda.jpg",
      },
      {
        id: "plant-25",
        name: "Pucuk Jambu Biji",
        latin: "Psidium guajava L.",
        gayo: "Pucuk Gelime",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/pucuk%20jambu.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-29",
        type: "Pencernaan",
        name: "Tipes",
      },
    ],
    benefits: [
      "Membantu meredakan gejala tipes secara alami",
      "Menyehatkan sistem pencernaan",
      "Menurunkan demam dan mempercepat pemulihan tubuh",
      "Bersifat antibakteri dan antioksidan alami",
    ],
    ingredients: ["1 buah pisang muda", "2–3 pucuk daun jambu biji"],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "1 gelas diminum",
        frequency: "3× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "1 gelas diminum",
        frequency: "3× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih pisang muda dan pucuk daun jambu biji.",
      "Rebus bersama dalam 2 gelas air hingga tersisa 1 gelas.",
      "Saring air rebusan dan minum hangat-hangat.",
      "Konsumsi rutin tiga kali sehari setelah makan.",
    ],
  },
  {
    id: "herb-30",
    name: "Ramuan Duren Kemiri",
    description:
      "Ramuan tradisional Gayo yang memanfaatkan kombinasi daun durian (Durio zibethinus L.) dan daun kemiri (Aleurites moluccanus). Digunakan secara turun-temurun untuk membantu meredakan gangguan kencing batu, melancarkan pencernaan, serta meningkatkan daya tahan tubuh.",
    image: "",
    plants: [
      {
        id: "plant-26",
        name: "Daun Durian",
        latin: "Durio zibethinus L.",
        gayo: "Ulung Duren",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/daun%20durian.jpg",
      },
      {
        id: "plant-27",
        name: "Daun Kemiri",
        latin: "Aleurites moluccanus",
        gayo: "Ulung Kemiri",
        image:
          "https://raw.githubusercontent.com/isadadi/etnomedicine-gayo-storage/refs/heads/main/daun%20kemiri.jpg",
      },
    ],
    diseases: [
      {
        id: "disease-30",
        type: "Ginjal",
        name: "Kencing Batu",
      },
    ],
    benefits: [
      "Melancarkan buang air kecil dan membantu mengeluarkan batu ginjal",
      "Mengurangi peradangan saluran kemih",
      "Meningkatkan daya tahan tubuh dan menurunkan demam",
      "Mendukung pencernaan dan metabolisme tubuh",
    ],
    ingredients: [
      "3 lembar daun durian",
      "3 lembar daun kemiri",
      "Gula aren secukupnya",
    ],
    dosage: [
      {
        gender: "pria",
        ageRange: ["13", null],
        amount: "1 gelas diminum",
        frequency: "3× sehari setelah makan",
      },
      {
        gender: "wanita",
        ageRange: ["13", null],
        amount: "1 gelas diminum",
        frequency: "3× sehari setelah makan",
      },
    ],
    method: [
      "Cuci bersih daun durian dan daun kemiri.",
      "Rebus bersama dalam 2 gelas air hingga tersisa 1 gelas.",
      "Tambahkan sedikit gula aren.",
      "Saring dan minum hangat-hangat tiga kali sehari.",
    ],
  },
];
