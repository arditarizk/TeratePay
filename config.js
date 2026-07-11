// ==========================================
// KONFIGURASI UTAMA SISTEM TERATEPAY
// ==========================================

const TERATE_CONFIG = {
    // URL Default Google Apps Script
    API_URL: 'https://script.google.com/macros/s/AKfycbwWsB0MkJgitVw6_XMG4M1ZL_JLXG5oQw7V55r_4nWGT2lDi9rTp0JoD6kKVFf_PSul/exec',
    
    // Kunci Default Gemini AI (Pastikan menggunakan versi API v1)
    GEMINI_API_KEY: 'AIzaSyAfSIqmU3-LKrp2xEKlQpc9_5yp9LytXRM',
    
    // Informasi Dasar Aplikasi
    APP_NAME: 'TeratePay Rayon Japanan',
    APP_VERSION: '2.0.0',

    // Pengaturan Default (Fallback)
    DEFAULT_PIN_PELATIH: '192201',
    DEFAULT_PIN_ADMIN: '192299',
    DEFAULT_PDF_URL: '',
    DEFAULT_PENGUMUMAN_TIPE: 'info',
    DEFAULT_PENGUMUMAN_JUDUL: 'Informasi Terkini',
    DEFAULT_PENGUMUMAN_ISI: 'Belum ada pengumuman baru dari pelatih.'
};
