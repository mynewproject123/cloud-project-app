export default {
  plugins: [
    require("@tailwindcss/postcss"),  // Ensure correct Tailwind PostCSS plugin
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
