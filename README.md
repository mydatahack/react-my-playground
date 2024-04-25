# My Playground React App

This is an stand alone react app. It is migrated to https://github.com/mydatahack/nx-monorepo-react-playground.

## Get started

```bash
nvm use # to load the correct node version from .nvmrc
yarn install
yarn start
```

## Libraries

- Formik
- [Material UI with styled-component](./doc/1-using-material-ui.md)
- Vite for development & build
- jest & react-testing-library

## Project Configuration Reference

`.nvmrc` is a configuration file to tell us which node version we are using. So if we run `nvm use`, it will read the version from the file and use the same version. It doesn't load the specific node version automatically.
