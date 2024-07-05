import { defineConfig } from '@rsbuild/core';
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';

export default defineConfig({
    html: {
    template({ entryName }) {
      const templates = {
        foo: './public/index.html',
        bar: './public/bar.html',
      };
      return templates[entryName] || './public/index.html';
    },
  },
  dev: {
    assetPrefix: 'auto',
  },
  output: {
    assetPrefix: 'auto',
    distPath: {
      root: 'build',
    },
  },
  plugins: [
    pluginReact(),
    pluginTypeCheck({ enable: false }),
    pluginSvgr({ mixedImport: true }),
    pluginNodePolyfill(),
  ],
  source: {
    entry: {
      foo: './src/index.tsx',
      bar: './src/bar/index.tsx',
    },
  }
});
