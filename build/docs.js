(function() {
  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var SASS_INCLUDE_PATHS = [path.join(__dirname, '..', 'node_modules')];
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del'],
  });

  //styles
  gulp.task('docs', function() {
    return gulp
      .src('docs/style.scss')
      .pipe(
        $.sass({
          outputStyle: 'expanded',
          includePaths: SASS_INCLUDE_PATHS,
        }).on('error', $.sass.logError)
      )
      .pipe(gulp.dest('docs'));
  });
})();
