/** @type {import('tailwindcss').Config} */
export default {
  prefix: "ext-",
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "ext-lg": "var(--radius-ext-orel)",
        "ext-md": "calc(var(--radius-ext-orel) - 2px)",
        "ext-sm": "calc(var(--radius-ext-orel) - 4px)",
      },
      colors: {
        "ext-background": "hsl(var(--background-ext-orel))",
        "ext-foreground": "hsl(var(--foreground-ext-orel))",
        "ext-card": {
          DEFAULT: "hsl(var(--popover-ext-orel))",
          foreground: "hsl(var(--popover-foreground-ext-orel))",
        },
        "ext-primary": {
          DEFAULT: "hsl(var(--primary-ext-orel))",
          foreground: "hsl(var(--primary-foreground-ext-orel))",
        },
        "ext-secondary": {
          DEFAULT: "hsl(var(--secondary-ext-orel))",
          foreground: "hsl(var(--secondary-foreground-ext-orel))",
        },
        "ext-muted": {
          DEFAULT: "hsl(var(--muted-ext-orel))",
          foreground: "hsl(var(--muted-foreground-ext-orel))",
        },
        "ext-accent": {
          DEFAULT: "hsl(var(--accent-ext-orel))",
          foreground: "hsl(var(--accent-foreground-ext-orel))",
        },
        "ext-destructive": {
          DEFAULT: "hsl(var(--destructive-ext-orel))",
          foreground: "hsl(var(--destructive-foreground-ext-orel))",
        },
        "ext-border": "hsl(var(--border-ext-orel))",
        "ext-input": "hsl(var(--input-ext-orel))",
        "ext-ring": "hsl(var(--ring-ext-orel))",
        "ext-chart": {
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
