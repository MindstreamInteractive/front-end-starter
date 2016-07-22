module.exports = {
    watch: false,
    prod: false,
    src: 'source/',
    dest: './output/',
    watchDest: ['output/**/*', '!output/**/*.html'],
    extensionlessRoutes: false // WARNING: Experimental
};
