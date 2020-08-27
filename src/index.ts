/* eslint-disable @typescript-eslint/no-var-requires */
import {promises as fs} from 'fs'
import {promisify} from 'util'
import glob_ from 'glob'
import * as htmlMinifier from 'html-minifier'
import {createFilter} from '@rollup/pluginutils'
const glob = promisify(glob_)

module.exports = function plugin(
  _: any,
  {
    htmlMinifierOptions,
    include,
    exclude,
  }: SnowpackPluginHtmlMinifierOptions = {}
) {
  const filter = createFilter(include, exclude)

  return {
    name: 'snowpack-plugin-minify-html',
    async optimize({buildDirectory}: {buildDirectory: string}) {
      const files = await glob('**/*.html', {
        cwd: buildDirectory,
        absolute: true,
      })

      const fileContents = await Promise.all(
        files
          .filter((file) => filter(file))
          .map((file) => fs.readFile(file, 'utf-8'))
      )

      await Promise.all(
        fileContents.map((file, i) =>
          fs.writeFile(files[i], htmlMinifier.minify(file, htmlMinifierOptions))
        )
      )
    },
  }
}

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
