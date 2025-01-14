const mix = require('laravel-mix');

require('mix-tailwindcss');

mix.webpackConfig({
    stats: {
        children: true
    }
});

// what to mix
mix.js('assets/resources/app.js', 'assets/public').setPublicPath('assets/public')
   .postCss('assets/resources/app.css', 'assets/public')
   .tailwind();

mix.browserSync({
    proxy: 'localhost:8090',
    host: 'localhost',
    files: ['./assets/public/*.css', './assets/public/*.js', './**/*.htm'],
});
