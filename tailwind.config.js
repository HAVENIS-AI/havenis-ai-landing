export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hav-cyan": "#00D9FF",
        "hav-graphite": "#1a1a1a",
        "hav-graphite-light": "#2d2d2d",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(135deg, rgba(0,217,255,0.1) 0%, rgba(26,26,26,1) 100%)",
        "section-gradient": "linear-gradient(180deg, rgba(0,217,255,0.05) 0%, rgba(26,26,26,1) 100%)",
      },
      boxShadow: {
        "cyan-glow-lg": "0 0 30px rgba(0, 217, 255, 0.5)",
      },
    },
  },
  plugins: [],
}
