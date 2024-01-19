# Adding react router

Followed this tutorial from the react router documentation.

https://reactrouter.com/en/main/start/tutorial#adding-a-router

```
yarn add react-router-dom
```

## DataAPI

We use `createBrowserRouter` instead of `<BrowserRouter />` because using the hook will give us access to the data APIs (https://reactrouter.com/en/main/routers/picking-a-router#data-apis). That's why the tutorial (https://reactrouter.com/en/main/start/tutorial) is using `createBrowserRouter`.
