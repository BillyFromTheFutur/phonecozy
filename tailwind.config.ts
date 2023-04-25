import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "9": "repeat(9, 1fr)",
        "12": "repeat(12, 1fr)",
        "16": "repeat(16, 1fr)",
        "18": "repeat(18, 1fr)",
        "20": "repeat(20, 1fr)",
      },
      scale: {
        "102": "1.02",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
