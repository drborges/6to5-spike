var gulp = require("gulp")
  , sourcemaps = require("gulp-sourcemaps")
  , to5 = require("gulp-6to5")
  , concat = require("gulp-concat")

gulp.task("default", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(to5({ modules:'common' }))
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"))
})

