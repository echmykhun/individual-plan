/**
 * Created by Евгений on 23.06.2015.
 */
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

var htmlFilesArray = require('./app/html/_html-files-array');

gulp.task('default', ['js', 'css', 'html']);
gulp.task('js', function () {
    //Single entry point to browserify
    gulp.src('app/js/app.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    var opts = {
        conditionals: true,
        spare: true
    };

    return gulp.src(htmlFilesArray)
        .pipe(minifyHTML(opts))
        .pipe(concat('template.html'))
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});


gulp.task('css', function () {
    return gulp.src(
        [
            'app/css/*.css',
            'app/css/*/*.css'
        ]
    )
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(concatCss('style.min.css'))
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('app/js/*.js', ['js']);
    gulp.watch('app/js/*/*.js', ['js']);

    gulp.watch('app/css/*.css', ['css']);
    gulp.watch('app/css/*/*.css', ['css']);

    gulp.watch('app/html/*.html', ['html']);
    gulp.watch('app/html/*/*.html', ['html']);
    gulp.watch('app/html/_html-files-array.js', ['html']);

});

gulp.task('webserver', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('serve', ['default', 'webserver', 'watch']);