var gulp = require("gulp"),
    sass = require("gulp-sass"),
    cssmin = require("gulp-cssmin"),
    browserSync = require("browser-sync"),
    pug = require("gulp-pug"),
    del = require("del");

gulp.task("buildCSS", function(){
  return gulp.src("app/sass/**/*.sass")
  .pipe(sass())
  .pipe(cssmin())
  .pipe(gulp.dest("app/css"))
})

gulp.task("pug", function(){
  return gulp.src("app/pug/**/*.pug")
  .pipe(pug())
  .pipe(gulp.dest("app"))
});

gulp.task("clean", function(){
  return del.sync("app/_include")
})

gulp.task("server", function(){
  browserSync({
    server: {
      port: 9000,
      baseDir: "app"
    }
  });
  gulp.watch("app/**/**[.sass, .pug, .html]", ["buildCSS", "pug"]).on("change", browserSync.reload);
});