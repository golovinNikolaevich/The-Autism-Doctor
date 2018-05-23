var gulp = require("gulp"),
    sass = require("gulp-sass"),
    cssmin = require("gulp-cssmin"),
    browserSync = require("browser-sync"),
    pug = require("gulp-pug");

gulp.task("buildCSS", function(){
  return gulp.src("app/sass/**/*.sass")
  .pipe(sass())
  .pipe(cssmin())
  .pipe(gulp.dest("app/css"))
})

gulp.task("pug", function(){
  return gulp.src("app/pug/*pug")
  .pipe(pug())
  .pipe(gulp.dest("app"))
})