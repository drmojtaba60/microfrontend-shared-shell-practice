// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f62fe",     // رنگ سفارشی آبی
        secondary: "#393939",   // رنگ سفارشی خاکستری تیره
      },
    },
  },
  plugins: [],
}
