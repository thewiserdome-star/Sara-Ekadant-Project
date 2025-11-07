module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined Classic tokens
        'brand-navy': '#07122A',
        'brand-navy-2': '#0B2540',
        'brand-navy-3': '#10283A',
        'brand-gold': '#D4AF37',
        'brand-gold-600': '#B88622',
        'brand-cream': '#F6F2EA',
        'muted-gray': '#B8C0C9',
        'muted-cta': '#EDE6D9',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        body: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-card': '0 8px 24px rgba(3,8,20,0.45)',
      },
      borderRadius: {
        'lg-md': '12px',
      },
    },
  },
  plugins: [],
};
