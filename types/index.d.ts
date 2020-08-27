import * as htmlMinifier from 'html-minifier'
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
