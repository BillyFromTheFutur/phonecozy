import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "9": "repeat(9, 1fr)",
        "12": "repeat(12, 1fr)",
      },
      scale: {
        "102": "1.02",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
