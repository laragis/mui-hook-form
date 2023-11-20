import { defineConfig } from 'tsup'
import { legacyConfig, modernConfig } from '@laragis/tsup-config'
// import { publishPackage } from 'yalc'
// import { resolve } from 'path'

// function sleep(ms: number) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

export default defineConfig([
  modernConfig({
    entry: ['src/*.ts', 'src/*.tsx'],
    minify: false,
    async onSuccess() {
      // await sleep(3000)
      // await publishPackage({
      //   workingDir: resolve(__dirname),
      //   push: true,
      //   changed: true,
      // })
    },
  }),
  legacyConfig({
    entry: ['src/*.ts', 'src/*.tsx'],
    minify: false,
    async onSuccess() {
      // await sleep(3000)
      // await publishPackage({
      //   workingDir: resolve(__dirname),
      //   push: true,
      //   changed: true,
      //   npm: true
      // })
    },
  }),
])
