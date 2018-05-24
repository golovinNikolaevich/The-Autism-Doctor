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
});

gulp.task("pug", function(){
  return gulp.src("app/pug/**/*.pug")
  .pipe(pug())
  .pipe(gulp.dest("app"))
});

gulp.task("browser-sync", function(){
  browserSync({
    server: {
      baseDir: "app"
    },
    notify: false
  });
});

gulp.task("watch", ["browser-sync", "buildCSS", "pug"], function(){
  gulp.watch("app/sass/*.sass", ["buildCSS"]);
  gulp.watch("app/pug/**/*.pug", ["pug"]);
  gulp.watch("app/**/*html", browserSync.reload);
});