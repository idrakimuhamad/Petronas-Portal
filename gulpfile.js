var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  mainBowerFiles = require('main-bower-files');

gulp.task('sass', function () {
  console.log('Running SASS');

  return gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./app/css'));
});

// gulp.task('bowerFiles', function(){
//   gulp.src(mainBowerFiles())
//   .pipe(uglify())
//   .pipe(concat('all.min.js'))
//   .pipe(gulp.dest('./Scripts/'));
// });

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 3000
  });
});

gulp.task('html', function () {
  console.log('Running HTML');
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/sass/**/*.scss'], ['sass', 'html']);
  gulp.watch(['./app/js/**/*.js'], ['html']);
  gulp.watch(['./app/**/**/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
