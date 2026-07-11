// ==========================================
// KONFIGURASI UTAMA SISTEM TERATEPAY
// ==========================================

const TERATE_CONFIG = {
    // 1. Database & AI Server
    API_URL: 'https://script.google.com/macros/s/AKfycbzYtCZ1iALMbdxluw2FQMiCVNg1lv-NBiMpCUFb6tWt-nyA9GvnEXKSrPQMPD-IgSlR/exec',
    GEMINI_API_KEY: 'AIzaSyAfSIqmU3-LKrp2xEKlQpc9_5yp9LytXRM',
    
    // 2. Informasi Dasar Aplikasi
    APP_NAME: 'TeratePay Rayon Japanan',
    APP_VERSION: '2.0.0',

    // ==========================================
    // PENGATURAN DEFAULT APLIKASI
    // (Ubah nilai di bawah ini sebelum Anda upload ke Hosting)
    // ==========================================
    
    // Keamanan Akses
    DEFAULT_PIN_PELATIH: '192201',
    DEFAULT_PIN_ADMIN: '192299',
    
    // Konten Beranda (Index)
    DEFAULT_NO_WA: '6289660061234',
    DEFAULT_TANGGAL_SURO: '2027-06-06',
    
    // Dokumen Publik (Gunakan akhiran /view atau /preview)
    DEFAULT_PDF_URL: '',
    
    // Live Announcement (Pengumuman Beranda & Portal)
    DEFAULT_PENGUMUMAN_TIPE: 'info', // Pilih: 'info' atau 'penting'
    DEFAULT_PENGUMUMAN_JUDUL: 'Informasi Terkini',
    DEFAULT_PENGUMUMAN_ISI: 'Belum ada pengumuman baru dari pelatih.'
};
