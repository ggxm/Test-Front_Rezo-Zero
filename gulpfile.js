const { src, dest, parallel, watch, series } = require('gulp');
const useref = require('gulp-useref');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync');
const server = browserSync.create();

// HTML
function html() {
  return src('./app/*.html')
    .pipe(useref())
    .pipe(dest('./dist'));
}

// Scss
function scss() {
  return src('./app/scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('./app/css'));
}

// CSS
function css() {
  return src('./app/css/**/*.css')
    .pipe(minifyCSS())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest('./dist/css'));
}

// Scripts
function js() {
  return src('./app/js/*.js', { sourcemaps: true })
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(dest('./dist/js', { sourcemaps: true }));
}

// Vendor
function vendor() {
  return src('./app/js/vendor/*.js', { sourcemaps: true })
    .pipe(dest('./dist/js/vendor', { sourcemaps: true }));
}

// Images
function img() {
  return src('./app/img/*.+(png|jpg|jpeg|gif|svg|mp4)')
    .pipe(imagemin())
    .pipe(dest('./dist/img'));
}

// Fonts
function fonts() {
  return src('./app/fonts/**/*')
    .pipe(dest('./dist/fonts'));
}

// Clean
const clean = () => del(['dist']);

// Server functions
function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './app'
    }
  });
  done();
}

// Watcher
function watcher() {
  watch('app/scss/**/*.scss', series(scss, reload));
  watch('app/*.html', reload);
  watch('app/js/**/*.js', reload);
}

// Dev
const dev = series(clean, html, scss, css, js, vendor, img, fonts, serve, watcher);

// Build
const build = series(clean, html, scss, css, js, vendor, img, fonts);


// Exports for Gulp command line
exports.default = dev;
exports.build = build;
