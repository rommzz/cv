export interface Data {
  firstName: string
  lastName?: string
  summary: string
  workExperience: WorkExperience[]
  skills: Skill[]
  education: Education[]
  licenses?: Licenses[]
  contacts: Contacts
  links?: string[]
}

export interface WorkExperience {
  jobTitle: string
  company: string
  startDate: string
  endDate?: string
  location: string
  description: string[]
}

export interface Skill {
  items: string[]
  level?: 1 | 2 | 3 | 4
  icon?: string
  category?: string
}

export interface Education {
  institution: string
  jurusan: string
  startYear: string
  endYear?: string
  location?: string
}
export interface Licenses {
  name: string
  issuingOrganization: string
  issueDate: string
  expirationDate: string
  credentialId: string
  credentialUrl: string
  skills: string[]
  media?: string[]
}
export interface Contacts {
  email: string
  phone: string
  location?: string
}
const cv: Data = {
  firstName: 'Rommy Zohara',
  lastName: 'Shoma',
  contacts: {
    email: 'rommy_zohara@yahoo.com',
    phone: '+62 812-5225-5232',
    location: 'Malang, Jawa Timur, Indonesia',
  },
  links: ['https://www.linkedin.com/in/rommy-zohara-a10b751aa/'],
  summary:
    'Software Engineer dengan 5+ tahun pengalaman, spesialisasi di Vue.js dan pengembangan aplikasi web yang kompleks, skalabel, serta berfokus pada pengguna (e.g., sistem manajemen rumah sakit). Menguasai clean architecture dan memiliki kemampuan full-stack (Laravel, Node.js) untuk integrasi yang efektif. Berpengalaman dalam pengembangan cross-platform dengan Flutter dan menangani seluruh siklus produk: dari fitur baru, optimasi, pemeliharaan, hingga dukungan teknis langsung.',
  workExperience: [
    {
      jobTitle: 'Software Engineer',
      company: 'PT. Ada Ide Langsung Jalan',
      startDate: '2024-10',
      location: 'Hybird',
      description: [
        'Melakukan maintenance dan bug fixing pada aplikasi yang sudah di-deploy.',
        'Bertanggung jawab atas troubleshooting sistem dari laporan bug Customer Service.',
        'Memastikan stabilitas server dan layanan aplikasi berjalan semestinya.',
        'Memberikan rekomendasi teknis dan sistem kepada IT Manager untuk perbaikan.',
      ],
    },
    {
      jobTitle: 'Frontend Developer',
      company: 'Freelance',
      startDate: '2024-04',
      endDate: '2024-08',
      location: 'Hybird',
      description: [
        // Poin 1: Menekankan peran kunci dalam tim dan koordinasi vendor
        'Melakukan analisa kebutuhan sistem dari klien dengan topik simulasi pajak untuk kebutuhan kampus di kota Malang',

        // Poin 2: Menyoroti kualitas kode dan arsitektur
        'Merancang dan mengembangkan seluruh aplikasi frontend menggunakan Vue.js, TypeScript, ',

        // Poin 3: Menyoroti deployment
        'Bertanggung jawab penuh atas deployment aplikasi Vue.js (bundling, hosting statis, dan konfigurasi frontend server) hingga lingkungan produksi.',
      ],
    },
    {
      jobTitle: 'Frontend Developer',
      company: 'PT. Ada Ide Langsung Jalan',
      location: 'Malang',
      startDate: '2022-03',
      endDate: '2024-10',
      description: [
        'Memimpin pengembangan aplikasi web utama (fitur baru dan pemeliharaan) menggunakan Vue.js.',
        'Mengembangkan fitur dan aplikasi cross-platform dengan Vue.js dan Flutter berdasarkan permintaan stakeholder.',
        'Melakukan bug fixing dan pemeliharaan pada legacy code untuk menjamin stabilitas aplikasi.',
        'Membangun Landing Page yang modern dan interaktif menggunakan Next.js.',
        'Berperan aktif dalam kolaborasi tim (backend developer, designer) sepanjang siklus pengembangan produk.',
      ],
    },
    {
      jobTitle: 'Frontend Developer (Full-Stack Exposure)',
      company: 'PT. Clavata Extra Sukses',
      startDate: '2020-06',
      endDate: '2022-03',
      location: 'Malang',
      description: [
        'Membangun sistem manajemen rumah sakit secara full-stack (Vue.js Frontend & Laravel Backend).',
        'Melakukan pemeliharaan, optimasi, dan perbaikan bug pada aplikasi yang di deliver ke klien.',
        'Memberikan dukungan teknis pada perangkat lunak dan keras untuk klien, baik secara remote maupun kunjungan langsung.',
        'Menangani dan menyelesaikan masalah klien secara cepat dan efektif.',
      ],
    },
  ],
  education: [
    {
      institution: 'Institut Teknologi Nasional',
      jurusan: 'S1 - Teknik Informatika',
      startYear: '2016-08',
      endYear: '2020-03',
    },
  ],
  skills: [
    {
      category: 'Frontend & Mobile',
      items: [
        'Vue.js',
        'JavaScript',
        'TypeScript',
        'Flutter',
        'Dart',
        'Next.js',
      ], // Menambahkan Next.js
    },
    {
      category: 'Backend & Languages',
      items: ['Laravel', 'PHP', 'Node.js'],
    },
    {
      category: 'Development Practices',
      items: [
        'Scrum/Agile',
        'Debugging',
        'System Troubleshooting',
        'Technical Documentation',
      ],
    },
  ],
  licenses: [
    // Data lisensi tetap sama karena sudah ringkas
    {
      name: 'Belajar Membuat Aplikasi Web dengan React',
      issuingOrganization: 'Dicoding Indonesia',
      issueDate: '2023-10',
      expirationDate: '2026-10',
      credentialId: '98XWV067WPM3',
      credentialUrl: 'https://www.dicoding.com/certificates/98XWV067WPM3',
      skills: ['Front-End Development'],
    },
    {
      name: 'Belajar Membuat Front-End Web untuk Pemula',
      issuingOrganization: 'Dicoding Indonesia',
      issueDate: '2023-10',
      expirationDate: '2026-10',
      credentialId: 'JLX1W9ERJP72',
      credentialUrl: 'https://www.dicoding.com/certificates/JLX1W9ERJP72',
      skills: ['Front-End Development'],
    },
    // {
    //   name: 'Belajar Dasar Pemrograman JavaScript',
    //   issuingOrganization: 'Dicoding Indonesia',
    //   issueDate: '2023-09',
    //   expirationDate: '2026-09',
    //   credentialId: '53XE4QLWVZRN',
    //   credentialUrl: 'https://www.dicoding.com/certificates/53XE4QLWVZRN',
    //   skills: ['Front-End Development'],
    // },
    // {
    //   name: 'Belajar Dasar Pemrograman Web',
    //   issuingOrganization: 'Dicoding Indonesia',
    //   issueDate: '2023-09',
    //   expirationDate: '2026-09',
    //   credentialId: 'JLX1W28OJP72',
    //   credentialUrl: 'https://www.dicoding.com/certificates/JLX1W28OJP72',
    //   skills: ['Front-End Development'],
    // },
  ],
}

export default cv
