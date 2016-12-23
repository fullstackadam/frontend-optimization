var gulp = require('gulp'),
	/*htmlBeautify = require('gulp-prettify'),
	cssBeautify = require('gulp-cssbeautify'),
	jshint = require('gulp-jshint'),*/
  //minify
  htmlMinify = require('gulp-htmlmin'),
  cssMinify = require('gulp-clean-css'),
  jsMinify = require('gulp-jsmin'),
  imageOptimize = require('gulp-imagemin');
  //imageResize = require('gulp-image-resize');

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

/*gulp.task('imageResize', function () {
  gulp.src('src/img/*')
    .pipe(imageResize({
      width : 100,
      height : 100,
      quality : 7,
      upscale : false
    }))
    .pipe(gulp.dest('dist/img'));

  gulp.src('src/views/images/*')
    .pipe(imageResize({
      width : 100,
      height : 100,
      quality : 7,
      upscale : false
    }))
    .pipe(gulp.dest('dist/views/images'));
});*/

gulp.task('imageOptimize', function() {
  gulp.src('src/img/*')
    .pipe(imageOptimize({ progressive: true }))
    .pipe(gulp.dest('dist/img'));

  gulp.src('src/views/images/*')
    .pipe(imageOptimize({ progressive: true }))
    .pipe(gulp.dest('dist/views/images'));
});

//beautify tasks for src

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

gulp.task('lint', function(){
  gulp.src('src/js/*.js')
    .pipe(jshint({ linter: require('jshint-jsx').JSXHINT }))
    .pipe(jshint.reporter('default'));
});

gulp.src('src/images/*')
    .pipe(gulp.dest('dist/images'));

gulp.task('default', ['htmlMinify', 'cssMinify', 'jsMinify', 'imageOptimize']);

gulp.task('clean', ['htmlBeautify', 'cssBeautify'])
