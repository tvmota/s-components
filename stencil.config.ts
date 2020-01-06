import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';

const purge = purgecss({
  content: ['./src/**/*.tsx', './src/**/*.css', './src/index.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  globalStyle: 'src/global/app.css',
  namespace: 's-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: [
        tailwindcss(),
        autoprefixer(),
        ...(process.env.NODE_ENV === 'production' ? [purge, cssnano] : []),
      ],
    }),
  ],
};
