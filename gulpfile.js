var gulp = require("gulp");
var sass = require("gulp-sass");

var paths =
{
    sass_files: "sass/**/*.scss",
    css: "css"
};

gulp.task("sass", function()
{
    return gulp.src(paths.sass_files)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(paths.css))
});

gulp.task("sass:watch", function()
{
    gulp.watch(paths.sass_files, ["sass"]);
});

gulp.task("default", ["sass:watch", "sass"]);
