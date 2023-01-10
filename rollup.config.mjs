import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
   input: 'src/index.ts',
   output: {
      file: 'dist/bundle.js',
      format: 'cjs'
   },
   external: ['react/jsx-runtime'],
   plugins: [typescript(), commonjs(), terser()]
};
