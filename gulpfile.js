var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function() {
    jsBuild('frontend/**/*.js', 'index.js', '../../frontend/');
});


function jsBuild(source, filename, sourceMapRoot) {
    gulp.src(source)
        .pipe(sourcemaps.init())
        .pipe(concat(filename))
        .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: sourceMapRoot}))
        .pipe(gulp.dest('docs/js'));
}