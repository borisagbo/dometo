module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        "bounce-entry": 'bounce-entry 100s linear infinite',
      },
      keyframes: {
        "bounce-entry": {
            "0%,100%": {transform: "translateY(-20px)",},
            "50%": { transform: "translateY(0)" },
        }
      },
      fontFamily:{
        sans:'Poppins',
        'roboto':"Roboto"
      },
      colors:{
        'primary':'#A98352',
        'primary_01':'#A38156'
      }
    },
  },
  plugins: [],
}
