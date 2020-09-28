const mix = require("laravel-mix");

// TODO: Add svg / images / js / scss build pipelines
// let assetPath = "resources";
// let publicPath = "public/front";

// let sassSource = assetPath + '/sass/';
// let jsSource = assetPath + '/js/';
// let imagesSource = assetPath + "/images/";
// let svgSource = assetPath + '/svg/';

// mix.setPublicPath(publicPath);
// mix.disableNotifications();

// Sync
// mix.browserSync({
//     proxy: process.env.APP_URL,
//     watchEvents: ["add", "change"],
//     open: false,
//     reload: false,
//     files: [
//         "public/front/css/**/*.css",
//         "public/front/js/**/*.js",
//         "**/*.php",
//         imagesSource + "/**/*",
//         "!vendor/**"
//     ]
// });

mix.js("resources/js/app.js", "public/js").postCss(
    "resources/css/app.css",
    "public/css",
    [require("postcss-import"), require("tailwindcss")]
);

// if (mix.inProduction()) {
//     mix.options({
//         cssNano: { discardComments: { removeAll: true } },
//         terser: { terserOptions: { compress: { drop_console: true } } }
//     }).version();
// } else {
//     mix.sourceMaps(false, "source-map");
// }
