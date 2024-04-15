/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "rgb(var(--primary-bg))",
        secondaryBg: 'rgb(var(--secondary-bg))',
        primaryClr: 'rgb(var(--text-primary))',
        "primary-b": 'rgb(var(--primary-border))',
        "primary-hover": 'rgb(var(--primary-hover))',
        "accent-hover": 'rgb(var(--accent-hover))',
        "secondary-hover": 'rgb(var(--secondary-hover))',
        secondaryClr: 'rgb(var(--txt-secondary))',
        navBtns: 'rgb(var(--nav-buttons))',
      }
    },
  },
  plugins: [],
  darkMode: 'media',
}

