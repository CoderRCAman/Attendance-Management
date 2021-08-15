// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/admin/**/*.{js,ts,jsx,tsx}', './src/user/**/*.{js,ts,jsx,tsx}', './src/Authentication/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins'],
                'roboto': ['Roboto']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}