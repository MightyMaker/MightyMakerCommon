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

gulp.task("css", function()
{
    return gulp.src(paths.sass_files)
        .pipe(plumber())
        // SASS compilation
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(paths.css))
        // CSS minification
        .pipe(css())
        .pipe(rename(function(path) { path.basename += ".min"; }))
        .pipe(gulp.dest(paths.css));
});

gulp.task("default", ["css"])
{
    process.title = "Prime47 BUILD";
    gulp.watch(paths.sass_files, ["css"]);
}
