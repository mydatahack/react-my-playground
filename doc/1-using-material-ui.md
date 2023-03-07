# Using Material UI

To use [Material UI](https://mui.com/) with styled-component, we need to install styled-component engine with Material UI.

```bash
yarn add @mui/material @mui/styled-engine-sc styled-components
```

Then, we need to configure it (https://mui.com/material-ui/guides/styled-engine/), otherwise you'll get a bunch of errors like `Cannot resolve @emotion/react...`, `Can't resolve @emotion/styled...` and so on.

Add this in `package.json` after running the installation script above.

```json
"dependencies": {
    "@mui/styled-engine": "npm:@mui/styled-engine-sc@latest",
  },
  "resolutions": {
    "@mui/styled-engine": "npm:@mui/styled-engine-sc@latest"
  },

```

Add this in `tsconfig`

```json
"paths": {
  "@mui/styled-engine": ["./node_modules/@mui/styled-engine-sc"]
},
```
