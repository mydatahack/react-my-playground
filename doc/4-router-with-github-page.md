
`BrowserRouter` doesn't work with git page because the root is not `/` with my setup. `BrowserRouter` will work if we push this into the root of the git page repo.

```tsx
import { HashRouter, Route, Routes } from 'react-router-dom'

import { App } from './App'
import { worker } from './mock/browser'
import { CardListPageTest } from './pages/CardListPageTest/CardListPageTest'
import { MswTest } from './pages/msw-test/MswTest'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const root = ReactDOM.createRoot(
  document.getElementById('app-example-1') as HTMLElement
)
root.render(
  <React.StrictMode>
    {/* Note that we're using HashRouter for a workaround */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list" element={<CardListPageTest />} />
        <Route path="/msw-test" element={<MswTest />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)


```