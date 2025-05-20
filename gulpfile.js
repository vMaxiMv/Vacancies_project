const gulp = require('gulp')
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer').default;
const sass = require('gulp-sass')(require('sass'));
const sync = require('browser-sync').create()
const {deleteAsync} = require('del')
const ts = require('gulp-typescript')

const tsProject = ts.createProject('tsconfig.json');

const path = {
  build: {
    html: 'build/',
    css: 'build/css/',
    js: 'build/js/',
    img: 'build/img/',
    fonts: 'build/fonts/'
  },
  src: {
    html: 'src/*.*',
    css: 'src/styles/*.scss',
    js: 'src/js/**/*.js',
    ts: 'src/js/**/*.ts',
    img: 'src/img/**/*.{jpg,jpeg,png,svg,gif}',
    fonts: 'src/fonts/**/*.{woff,woff2,ttf,eot,svg}'
  },
  watch: {
    html: 'src/*.*',
    css: 'src/styles/**/*.scss',
    js: 'src/js/**/*.js',
    ts: 'src/js/**/*.ts',
    img: 'src/img/**/*.{jpg,jpeg,png,svg,gif}',
    fonts: 'src/fonts/**/*.{woff,woff2,ttf,eot,svg}'
  },
  clean: 'build'
};

const clean = () => deleteAsync(['build/**/*'])

const buildHtml = () => {
  return gulp
    .src(path.src.html)
    .on('error', function (e) {
      gutil.log(e.plugin, gutil.colors.red(e.message));
    })
    .pipe(gulp.dest(path.build.html))
    .pipe(sync.stream());
  }

const buildCSS = () =>{
 return gulp
    .src(path.src.css)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errLogToConsole: true,
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: false,
        remove: true,
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.build.css))
    .pipe(sync.stream());
  }

const buildJs = () =>{
 return gulp
    .src(path.src.js)
    .on('error', function (e) {
      gutil.log(e.plugin, gutil.colors.red(e.message));
    })
    .pipe(gulp.dest(path.build.js))
    .pipe(sync.stream());
  }

  const buildTS = () => {
    return gulp
      .src(path.src.ts)
      .on('error', function (e) {
        gutil.log(e.plugin, gutil.colors.red(e.message));
      })
      .pipe(sourcemaps.init())
      .pipe(tsProject())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(path.build.js))
      .pipe(sync.stream());
  };

const buildImg = () => {
 return gulp
    .src(path.src.img)
    .pipe(gulp.dest(path.build.img))
    .pipe(sync.stream());
}

const buildFonts = () => {
 return gulp
    .src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
    .pipe(sync.stream());
}


const buildFunction = () =>{
 return gulp.series(clean, buildHtml, buildJs,buildTS, buildCSS, buildImg, buildFonts);
}
const serverFunction = () =>
  sync.init({
    server: {
      baseDir: ['build', 'src']
    },
    tunnel: false,
    host: 'localhost',
    port: 3000,
  });

const watchFunction = () => {
  gulp.watch([path.watch.html], gulp.series(buildHtml));
  gulp.watch([path.watch.css], gulp.series(buildCSS));
  gulp.watch([path.watch.js], gulp.series(buildJs));
  gulp.watch([path.watch.ts], gulp.series(buildTS));
  gulp.watch([path.watch.img], gulp.series(buildImg));
};


exports.build = buildFunction();
exports.dev = gulp.parallel(buildFunction, watchFunction, serverFunction);



