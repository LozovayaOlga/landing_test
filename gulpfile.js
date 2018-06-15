var gulp= require('gulp');
var pug= require('gulp-pug');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var csso = require('gulp-csso');


gulp.task('serve', ['cssfile'], function() {

    browserSync.init({
        server: "dist",
		index: "index.html"
    });
    	gulp.watch('src/pug/**/**.pug', ['pug']);
  gulp.watch('src/sass/**/**.sass', ['sass']);
    gulp.watch('dist/css/**.css', ['cssfile']);
    gulp.watch("dist/*.html").on('change', browserSync.reload);
		gulp.watch("dist/style.css").on('change', browserSync.reload);
    
    
});



gulp.task('pug', function() {
   
        return gulp.src('src/pug/**.pug')
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(pug())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist'))
    
});


//отдельным таском запускать
gulp.task('minhtml', function() { 
  return gulp.src('dist/**.html')
     .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(htmlmin({collapseWhitespace: true}))
	   .pipe(sourcemaps.write())
    .pipe(gulp.dest('minhtml'));
    
});



gulp.task('sass', function(){
        return gulp.src('src/sass/**/**.sass')
            .pipe(plumber())
             .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist/css'))
 });



	
gulp.task('cssfile', function() {     
  return gulp.src( [ 'src/css/sprite.css', 'src/css/font.css', 'dist/css/main.css'])
     .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
     .pipe(sourcemaps.write())     
    .pipe(gulp.dest('dist'));
 });

//отдельным таском запускать
gulp.task('mincss', function() {
  return gulp.src('dist/style.css', 'dist/css/normalize.css')
     .pipe(plumber())
     .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
      .pipe(csso({
      comments: false
    }))
	  .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/mincss'));
   
});

gulp.task('watch', function() {
	gulp.watch('src/pug/**/**.pug', ['pug']);
  gulp.watch('src/sass/**/**.sass', ['sass']);
    gulp.watch('dist/css/**.css', ['cssfile']);
	gulp.watch("dist/style.css").on('change', browserSync.reload);
    gulp.watch("dist/**.html").on('change', browserSync.reload);
   
});

gulp.task('default', [
    'pug',
    'sass',
    'cssfile',
    'serve',
    'watch'
    
   ]);
