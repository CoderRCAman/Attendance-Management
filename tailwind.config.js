// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/admin/**/*.{js,ts,jsx,tsx}', './src/user/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}