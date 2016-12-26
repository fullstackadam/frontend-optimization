var gulp = require('gulp'),
  htmlMinify = require('gulp-htmlmin'),
  cssMinify = require('gulp-clean-css'),
  jsMinify = require('gulp-jsmin');
  imageOptimize = require('gulp-imagemin'),
  imageResize = require('gulp-image-resize')
  rename = require('gulp-rename');

gulp.task('htmlMinify', () => {
  gulp.src('src/*.html')
    .pipe(htmlMinify({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
  gulp.src('src/views/*.html')
    .pipe(htmlMinify({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/views'));
});

gulp.task('cssMinify', () => {
  gulp.src('src/css/*')
    .pipe(cssMinify())
    .pipe(gulp.dest('dist/css'));
  gulp.src('src/views/css/*')
    .pipe(cssMinify())
    .pipe(gulp.dest('dist/views/css'));
});

gulp.task('jsMinify', () => {
  gulp.src('src/js/*')
    .pipe(jsMinify())
    .pipe(gulp.dest('dist/js'));
  gulp.src('src/views/js/*')
    .pipe(jsMinify())
    .pipe(gulp.dest('dist/views/js'));
});

gulp.task('imageResize', () => {
  gulp.src('src/views/images/2048.jpg')
    .pipe(imageResize({
      width : 558,
      quality : 4,
      upscale : false
    }))
    .pipe(imageOptimize({ progressive: true }))
    .pipe(gulp.dest('dist/views/images/'));  

  gulp.src('src/views/images/mobilewebdev.jpg')
    .pipe(imageResize({
      width : 602,
      quality : 4,
      upscale : false
    }))
    .pipe(imageOptimize({ progressive: true }))
    .pipe(gulp.dest('dist/views/images/'));

  gulp.src('src/views/images/pizzeria.jpg')
    .pipe(imageResize({
      width : 720,
      quality : 4,
      upscale : false
    }))
    .pipe(imageOptimize({ progressive: true }))
    .pipe(gulp.dest('dist/views/images/'));

  gulp.src('src/views/images/pizzeria.jpg')
    .pipe(imageResize({
      width : 116,
      quality : 4,
      upscale : false
    }))
    .pipe(rename(path => {path.basename += "_small";}))
    .pipe(imageOptimize({ progressive: true }))
    .pipe(gulp.dest('dist/views/images/'));

});

gulp.task('imageOptimize', () => {
  gulp.src('src/img/*')
    .pipe(imageOptimize({ progressive: true }))
    .pipe(gulp.dest('dist/img'));

  gulp.src('src/views/images/*')
    .pipe(imageOptimize({ progressive: true }))
    .pipe(gulp.dest('dist/views/images'));
});



gulp.task('default', ['htmlMinify', 'cssMinify', 'jsMinify', 'imageResize']);

