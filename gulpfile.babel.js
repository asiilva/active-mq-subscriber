import gulp from 'gulp';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import clean from 'gulp-clean';
import path from 'path';

const paths = {
  JS: ['./**/*.js', '!dist/**', '!node_modules/**'],
  CONFIG: './config/**/*',
  DIST: 'dist'
};

gulp.task('lint', () => {
  gulp.src(paths.JS)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('clean', () => {
  gulp.src(paths.DIST)
    .pipe(clean());
});

gulp.task('pack', () => {
  gulp.src([...paths.JS, '!gulpfile.babel.js','!public/**/*.js', '!test/**/*.js'], { base: '.' })
    .pipe(babel())
    .pipe(gulp.dest(paths.DIST));
});

gulp.task('config', () => {
  gulp.src(paths.CONFIG)
    .pipe(gulp.dest(path.join(paths.DIST, 'config')));
});

gulp.task('default', ['pack', 'config']);
