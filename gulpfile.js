var gulp = require('gulp');
var rename = require('gulp-rename');
var loopbackAngular = require('gulp-loopback-sdk-angular');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');

gulp.task('default', function() {
  var YOUR_LOCALS = {};
  gulp.src('./client/src/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./client/www/'))

  gulp.src('./client/src/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./client/www/'));

  // sdk-loopback-angular
  gulp.src('./server/server.js')
    .pipe(loopbackAngular())
    .pipe(rename('lb-services.js'))
    .pipe(gulp.dest('./client/js/'));
});
