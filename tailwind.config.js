/** @type {import('tailwindcss').Config} */
export default {
  prefix: "ext-orel-", // Add a unique prefix to all Tailwind classes
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius-ext-orel)",
        md: "calc(var(--radius-ext-orel) - 2px)",
        sm: "calc(var(--radius-ext-orel) - 4px)",
      },
      colors: {
        background: "hsl(var(--background-ext-orel))",
        foreground: "hsl(var(--foreground-ext-orel))",
        card: {
          DEFAULT: "hsl(var(--card-ext-orel))",
          foreground: "hsl(var(--card-foreground-ext-orel))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover-ext-orel))",
          foreground: "hsl(var(--popover-foreground-ext-orel))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary-ext-orel))",
          foreground: "hsl(var(--primary-foreground-ext-orel))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary-ext-orel))",
          foreground: "hsl(var(--secondary-foreground-ext-orel))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted-ext-orel))",
          foreground: "hsl(var(--muted-foreground-ext-orel))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent-ext-orel))",
          foreground: "hsl(var(--accent-foreground-ext-orel))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive-ext-orel))",
          foreground: "hsl(var(--destructive-foreground-ext-orel))",
        },
        border: "hsl(var(--border-ext-orel))",
        input: "hsl(var(--input-ext-orel))",
        ring: "hsl(var(--ring-ext-orel))",
        chart: {
          1: "hsl(var(--chart-1-ext-orel))",
          2: "hsl(var(--chart-2-ext-orel))",
          3: "hsl(var(--chart-3-ext-orel))",
          4: "hsl(var(--chart-4-ext-orel))",
          5: "hsl(var(--chart-5-ext-orel))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
