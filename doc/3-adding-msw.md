# Adding MSW

## Installation

https://mswjs.io/docs/getting-started/install

```
yarn -D add msw
```

## Setting up

1. run this to save mockServiceWorker.js into the public folder

```
npx msw init public/ --save
```

In order to ease the future updates to the worker script,
we recommend saving the path to the worker directory in your package.json.

2. Defining mock

https://mswjs.io/docs/getting-started/mocks/graphql-api

`src/mock/handlers.ts`

3. Configuring worker

https://mswjs.io/docs/getting-started/integrate/browser

using `src/mock/browser.ts` in `index.tsx`
