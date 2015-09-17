var gulp = require("gulp");
var css = require("gulp-css");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var sass = require("gulp-sass");

var paths =
{
    sass_files: "sass/**/*.scss",
    css: "css",
    css_files: "css/**/*.css"
};

gulp.task("css", ["sass"], function()
{
    return gulp.src(paths.css_files)
        .pipe(plumber())
        .pipe(css())
        .pipe(rename(function(path)
        {
            if (path.basename.indexOf(".min") < 0)
                path.basename += ".min";
        }))
        .pipe(gulp.dest(paths.css));
});

gulp.task("sass", function()
{
    return gulp.src(paths.sass_files)
        .pipe(plumber())
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(paths.css))
});

gulp.task("sass:watch", function()
{
    gulp.watch(paths.sass_files, ["sass", "css"]);
});

gulp.task("default", ["sass:watch", "sass", "css"]);
