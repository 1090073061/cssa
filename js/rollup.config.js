import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import builtins from 'rollup-plugin-node-builtins'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'index.js',
  output: {
    format: 'iife',
    file: '../static/js/bundle.js',
  },
  plugins: [
    commonjs({
      include: [
        'node_modules/**',
      ],
      sourceMap: false,
      namedExports: {
        'node_modules/react/index.js': ['Component', 'cloneElement', 'Children', 'createElement'],
        'node_modules/react-dom/index.js': ['render', 'findDOMNode'],
      },
    }),
    postcss({
      extensions: ['.css'],
    }),
    resolve({
      browser: true,
      preferBuiltins: true,
    }),
    replace({
      values: {
        'process.env.NODE_ENV': JSON.stringify('production'),
      },
    }),
    babel({
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/env', {
            modules: false,
          },
        ],
        '@babel/react',
      ],
    }),
    json(),
    builtins(),
    uglify({
      compress: {
        typeofs: false,
      },
    }),
  ],
  onwarn: (warning) => {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return
    }
    console.error(warning.message)
  },
}
