/**
 * Created by Евгений on 23.06.2015.
 */
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var addStream = require('add-stream');

var angularTemplateCache = require('gulp-angular-templatecache');


gulp.task('default', ['js', 'css']);
gulp.task('js', function () {
    //Single entry point to browserify
    gulp.src('app/js/app.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(addStream.obj(prepareTemplates()))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

function prepareTemplates() {
    return gulp.src('app/html/*.html')
        //.pipe(minify and preprocess the template html here)
        .pipe(angularTemplateCache());
}


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

    gulp.watch('app/html/*.html', ['js']);
    gulp.watch('app/html/*/*.html', ['js']);

});

gulp.task('webserver', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('serve', ['default', 'webserver', 'watch']);