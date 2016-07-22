var $ = require('./common.js');
var config = require('./config.js');

// HTML includes
var fileinclude = require('gulp-file-include');

$.gulp.task('views', function() {
    $.gulp.src([config.src + 'views/*.html'])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }).on('error', $.notify.onError('<%= error.message %>')))
    .pipe($.gulp.dest(config.dest));
});
