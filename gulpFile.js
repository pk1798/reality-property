const gulp = require("gulp");
const sass = require("gulp-sass");
const browsersync = require("browser-sync");
const { stream } = require("browser-sync");
const imagemin = require("gulp-imagemin");

function style() {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist/css/"))
    .pipe(browsersync.reload({ stream: true }));
}

function compress() {
  return gulp
    .src("./src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/img/"));
}

function watch() {
  browsersync.init({
    server: {
      baseDir: "./dist",
    },
  });
  gulp.watch("./src/sass/**/*.scss", style);
  gulp.watch("./src/img/**",compress);
  gulp.watch("./dist/*.html").on("change", browsersync.reload);
}

exports.style = style;
exports.watch = watch;
exports.compress = compress;

