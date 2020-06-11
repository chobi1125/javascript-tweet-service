var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function (cb) {
    gulp.src(
        ['./pug/**/*.pug', '!./pug/**/_*.pug']
    )
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'))

        cb();
    // gulp.src(
    //     ['./pug/test/**/*.pug', '!./pug/**/_*.pug']
    // )
    //     .pipe(pug({
    //         pretty: true
    //     }))
    //     .pipe(gulp.dest('./dist/test'))

    //     cb();
});