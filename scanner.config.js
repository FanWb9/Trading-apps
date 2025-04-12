module.exports = {
    input: [
      'src/**/*.{js,jsx,ts,tsx}', // Sesuaikan dengan folder dan jenis file kamu
    ],
    output: './locales/$LOCALE/$NAMESPACE.json', // Folder output untuk file JSON hasil ekstraksi
    options: {
      debug: true,
      lngs: ['en', 'id'], // Bahasa yang didukung (bisa ditambah sesuai kebutuhan)
      defaultLng: 'en',
      defaultNs: 'translation',
      resource: {
        loadPath: './locales/$LOCALE/$NAMESPACE.json',
        savePath: './locales/$LOCALE/$NAMESPACE.json',
      },
      ns: ['translation'],
      keySeparator: false, // Tidak menggunakan separator untuk kunci
      interpolation: {
        escapeValue: false,
      },
    },
  };
  