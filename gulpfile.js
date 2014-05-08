// Required packages
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// SASS/Compass
gulp.task('compass', function() {
    return gulp.src('scss/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            sourcemap: true,
            css: 'css',
            sass: 'scss'
        }))
        .pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'ie 7', 'Android 2', 'iOS 5', 'Opera 10', 'Safari 5', 'Firefox 3', { cascade: true }))
        .pipe(gulp.dest('css'));
});

// Autoprefix & Minify CSS
gulp.task('css', function() {
    return gulp.src(['css/normalize.css', 'css/style.css'])
        .pipe(concat('main.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css/min'));
});

// Concatenate & Minify JS Files
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
      .pipe(concat('main.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('js/min'));
});

// Concatenate & Minify JS Files
gulp.task('vendor-update', function() {
    return gulp.src(['bower_components/html5-boilerplate/js/vendor/*','bower_components/respond/dest/respond.min.js'])
      .pipe(gulp.dest('js/vendor'));
});

// Watch
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['compass']);
    gulp.watch('css/*.css', ['css']);
    gulp.watch('js/*.js', ['scripts']);
});

// Define default tasks
gulp.task('default', ['compass','css','scripts','watch']);