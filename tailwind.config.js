import franken from 'franken-ui/shadcn-ui/preset-quick';

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [franken()],
    content: [
       "./layouts/**/*.{htm,js}",
       "./pages/**/*.{htm,js}",
       "./partials/**/*.{htm,js}",
       "./content/**/*.{htm,js}"
    ],
    safelist: [
        {
            pattern: /^uk-/
        },
    ],
    theme: {
       extend: {},
    },
    plugins: [],
}

