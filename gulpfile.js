(function() {
  const gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    istanbul = require('gulp-istanbul'),
    mocha = require("gulp-mocha"),
    chalk = require('chalk');

  const TEST_LIB = "tests"; //where our test lib is
  const filesToBeTested = ["config/**/*.js", "lib/**/*.js", "./*.js", "!gulpfile.js"]; //globs we are testing
  const specGlob = TEST_LIB + '/*.spec.js';

  function handleError(err) {
    console.log(err.toString());
    this.emit('end');
  }

  //Watch all our files we want tested, and all the tests we have, then run mocha
  gulp.task('watch-test', function WatchTest(done) {
    gulp.watch(filesToBeTested.concat([TEST_LIB + '/*.spec.js']), gulp.series('unit'));
    done();
  });

  //Start the application/webserver
  gulp.task('start', function StartServer(done) {
    nodemon({
      script: 'index.js',
      ext: 'js',
      env: { 'NODE_ENV': 'development' },
      ignore: ["coverage/*", TEST_LIB + "/*", "gulpfile.js"]
    });
    setTimeout(function() {
      done();
    }, 1000)
  });

  //Run mocha and get converage via istanbul
  gulp.task('test', function Test() {
    return gulp.src(filesToBeTested)
      // Covering files
      .pipe(istanbul({ includeUntested: true }))
      .pipe(istanbul.hookRequire())
      .on('finish', function() {
        gulp.src([TEST_LIB + '/*.spec.js'])
          .pipe(mocha({
            reporter: 'spec'
          }))
          .on("error", handleError)
          // Creating the reports after tests ran
          .pipe(istanbul.writeReports())
          .on("error", handleError)
      })
  });

  //Run only mocha
  gulp.task('unit', function Unit() {
    return gulp.src([TEST_LIB + '/**/*.spec.js'])
      .pipe(mocha({
        reporter: 'list'
      }))
      .on("error", handleError);
  })

  gulp.task('default', gulp.series(gulp.series("watch-test", "test"), "start"));
}());