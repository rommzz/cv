// Contoh di .eslintrc.js
module.exports = {
  // ... konfigurasi lainnya
  extends: [
    // Pastikan 'prettier' ada di akhir
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    // ... aturan lain
    'prettier', // <== HARUS DI SINI
  ],
}
