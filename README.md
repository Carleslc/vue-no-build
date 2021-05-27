# vue-no-build

Vue 3 example app without compile and build step when you cannot use `node` or `npm` to build Vue SPA for whatever reason.

[Vue is installed via CDN](https://v3.vuejs.org/guide/installation.html#cdn)

Some **restrictions** apply:

- Cannot use `webpack` to minify bundle and tree shake (higher download size and less performant)
- Cannot use `babel` to transpile
  - `TypeScript` not supported
  - CSS preprocessors like `Sass` not supported
  - [Browsers without `ES6 Modules`](https://caniuse.com/es6-module) not supported
- Cannot use `.vue` files ([Single Vue Components](https://v3.vuejs.org/guide/single-file-component.html))
  - Use of [on-the-fly `template` runtime compilation](https://v3.vuejs.org/guide/tooling/deployment.html#pre-compiling-templates) is slower than [Single Vue Components](https://v3.vuejs.org/guide/single-file-component.html)
  - Cannot use [`Component-scoped CSS`](https://vue-loader.vuejs.org/en/features/scoped-css.html)
  - Uglier and harder to mantain
- If component modules are not preloaded in `index.html` then they will be loaded in waterfall (synchronous and time expensive), also easy to forget and hard to scale
- Other functionality that requires a `npm` build or `node` dependencies not available via CDN

## Develop

Start a development server to serve project files to `localhost:3000`.

```bash
npm run serve
```

This avoids `CORS` errors because `index.html` cannot be opened via `file://` protocol, `http(s)://` is needed.

Development dependency `browser-sync` will be installed. This is the only depedency using `npm` and it is only for local development, not production.

### .vscode

Install `pushqrdx.inline-html` extension for syntax highlighting with render `html` and template `/*html*/` tags.

## Production

Just add `src` folder to your production server.

No `node`, `npm` nor `npm run build` required.

## Special thanks

- [Building Vue.js Applications Without webpack](https://markus.oberlehner.net/blog/goodbye-webpack-building-vue-applications-without-webpack/)
- [maoberlehner/goodbye-webpack-building-vue-applications-without-webpack](https://github.com/maoberlehner/goodbye-webpack-building-vue-applications-without-webpack)
