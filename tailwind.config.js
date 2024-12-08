/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ejs,html}"],
  theme: {
    extend: {
      fontFamily: {
        parkinsans: ["Parkinsans", "Nunito Sans", "monospace"],
      },
    },
  },
  plugins: [],
};
