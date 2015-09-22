var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var cached = require("gulp-cached");
var css = require("gulp-css");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var sass = require("gulp-sass");

var paths =
{
    src:                "source",
    src_css:            "source/sass",
    src_css_files:      "source/sass/**/*.scss",
    dest:               "prime47",
    dest_css:           "prime47/css",
    dest_css_files:     "prime47/css/**/*.css"
};

gulp.task("css", function()
{
    return gulp.src(paths.src_css_files)
        .pipe(plumber())
        // SASS compilation
        .pipe(sass().on("error", sass.logError))
        .pipe(cached("sass:compiled"))
        // CSS prefixing
        .pipe(autoprefixer())
        // CSS minification
        .pipe(css())
        .pipe(rename(function(path) { path.basename += ".min"; }))
        .pipe(gulp.dest(paths.dest_css));
});

gulp.task("default", ["css"], function()
{
    process.title = "Prime47 BUILD";
    gulp.watch(paths.src_css_files, ["css"]);
});
