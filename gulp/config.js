module.exports = {
    watch: false,
    prod: false,
    src: 'source/',
    dest: './output/',
    contentDir: './output/assets/',
    watchDest: ['output/**/*', '!output/**/*.html'],
    extensionlessRoutes: false // WARNING: Experimental
};
