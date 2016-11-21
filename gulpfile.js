var gulp = require('gulp'),
	/*htmlBeautify = require('gulp-prettify'),
	cssBeautify = require('gulp-cssbeautify'),
	jsBeautify = require('gulp-beautify'),
	jshint = require('gulp-jshint');*/
  //minify
  htmlMinify = require('gulp-htmlmin'),
  cssMinify = require('gulp-clean-css');
  jsMinify = require('gulp-jsmin');

gulp.task('htmlMinify', function() {
  gulp.src('src/*.html')
    .pipe(htmlMinify({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
  gulp.src('src/views/*.html')
    .pipe(htmlMinify({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/views'));
});

gulp.task('cssMinify', function() {
  gulp.src('src/css/*')
    .pipe(cssMinify())
    .pipe(gulp.dest('dist/css'));
  gulp.src('src/views/css/*')
    .pipe(cssMinify())
    .pipe(gulp.dest('dist/views/css'));
});

gulp.task('jsMinify', function() {
  gulp.src('src/js/*')
    .pipe(jsMinify())
    .pipe(gulp.dest('dist/js'));
  gulp.src('src/views/js/*')
    .pipe(jsMinify())
    .pipe(gulp.dest('dist/views/js'));
});

gulp.task('htmlBeautify', function(){
  gulp.src('src/*.html')
    .pipe(htmlBeautify({indent_size: 4}))
    .pipe(gulp.dest('dist'));
});

gulp.task('cssBeautify', function(){
  gulp.src('src/css/*')
    .pipe(cssBeautify({indent: '    '}))
    .pipe(gulp.dest('src/css'));
});

gulp.task('jsBeautify', function(){
  gulp.src('src/js/*.js')
    .pipe(jsBeautify({indentSize: 4}))
    .pipe(gulp.dest('src/js'));
});

gulp.task('lint', function(){
  gulp.src('src/js/*.js')
    .pipe(jshint({ linter: require('jshint-jsx').JSXHINT }))
    .pipe(jshint.reporter('default'));
});

gulp.src('src/images/*')
    .pipe(gulp.dest('dist/images'));

gulp.task('default', ['htmlMinify', 'cssMinify', 'jsMinify']);
