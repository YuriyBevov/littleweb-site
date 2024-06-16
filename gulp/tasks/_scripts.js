import _config from '../gulp.config.js';
const { config } = _config;

import gulp from 'gulp';
const { src, dest } = gulp;

import rollup from 'gulp-better-rollup';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import rename from 'gulp-rename';
import gulpIf from 'gulp-if';
import uglify from 'gulp-uglify';
import stripDebug from 'gulp-strip-debug';

export const scripts = (done) => {
  src(config.scripts.src, { sourcemaps: config.isProd ? false : true })
    .pipe(
      rollup(
        {
          input: config.scripts.entry,
          plugins: [
            resolve(),
            commonjs(),
            babel({
              presets: ['@babel/env'],
            }),
          ],
        },
        'umd'
      )
    )
    .pipe(rename('bundle.js'))
    .pipe(gulpIf(config.isProd, rename({ suffix: '.min' })))
    .pipe(gulpIf(config.isProd, stripDebug()))
    .pipe(gulpIf(config.isProd, uglify()))
    .pipe(dest(config.scripts.dest, { sourcemaps: '.' }));

  done();
};

// import nodeResolve from 'rollup-plugin-node-resolve';
// import commonJs from 'rollup-plugin-commonjs';
// import typeScript from 'rollup-plugin-typescript2';
// import postcss from 'rollup-plugin-postcss';
// import html from 'rollup-plugin-html';
// import visualizer from 'rollup-plugin-visualizer';
// import {sizeSnapshot} from "rollup-plugin-size-snapshot";
// import {terser} from 'rollup-plugin-terser';

// export default [{
//     input: 'src/index.ts',
//     output: [{ file: 'dist/index.r.min.js', format: 'iife' }],
//     plugins: [
//         nodeResolve(), // подключение модулей node
//         commonJs(), // подключение модулей commonjs
//         postcss(), // подключение препроцессора postcc, а также стилей scss и less
//         html(), // подключение html файлов
//         typeScript({tsconfig: "tsconfig.json"}), // подключение typescript
//         sizeSnapshot(), // напишет в консоль размер бандла
//         terser(), // минификатор совместимый с ES2015+, форк и наследник UglifyES
//         visualizer() // анализатор бандла
//     ]
// }];
