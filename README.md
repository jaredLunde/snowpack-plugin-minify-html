<hr/>

# snowpack-plugin-minify-html

> Minify HTML in production using [html-minifier](https://github.com/kangax/html-minifier#readme) with Snowpack

```sh
npm i snowpack-plugin-minify-html
```

<p>
  <a aria-label="Types" href="https://www.npmjs.com/package/snowpack-plugin-minify-html">
    <img alt="Types" src="https://img.shields.io/npm/types/snowpack-plugin-minify-html?style=for-the-badge&labelColor=24292e">
  </a>
  <!--
  <a aria-label="Code coverage report" href="https://codecov.io/gh/jaredLunde/snowpack-plugin-terser">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/jaredLunde/snowpack-plugin-terser?style=for-the-badge&labelColor=24292e">
  </a>
  -->
  <a aria-label="Build status" href="https://travis-ci.com/jaredLunde/snowpack-plugin-minify-html">
    <img alt="Build status" src="https://img.shields.io/travis/com/jaredLunde/snowpack-plugin-minify-html?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/snowpack-plugin-minify-html">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/snowpack-plugin-minify-html?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/snowpack-plugin-minify-html?style=for-the-badge&labelColor=24292e">
  </a>
</p>

---

## When to use this

You should only use this if you aren't already using a bundler (Webpack, Parcel, Rollup) to
build your production site.

## Quick start

```js
// snowpack.config.js
module.exports = {
  plugins: [
    [
      'snowpack-plugin-minify-html',
      {
        /**
         * @see Plugin Options below
         */
        htmlMinifierOptions: {
          sortAttributes: true,
          removeComments: true,
        },
      },
    ],
  ],
}
```

## Plugin Options

```ts
export interface SnowpackPluginHtmlMinifierOptions {
  /**
   * An array of glob patterns for files you want to explicitly include
   * for html-minifier minification. By default all HTML files are included.
   */
  include?: string[]
  /**
   * An array of glob patterns for files you want to exclude from
   * html-minifier minification
   */
  exclude?: string[]
  /**
   * html-minifier minify() options passed directly to html-minifier
   * @see https://github.com/kangax/html-minifier#options-quick-reference
   */
  htmlMinifierOptions?: htmlMinifier.Options
}
```

## LICENSE

MIT
