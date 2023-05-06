import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'

import { App } from './App'
import { worker } from './mock/browser'
import { MswTest } from './pages/msw-test/MswTest'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const root = ReactDOM.createRoot(
  document.getElementById('app-example-1') as HTMLElement
)
root.render(
  <React.StrictMode>
    {/* BrowserRouter doesn't work with gitpage because the root is not `/` */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/msw-test" element={<MswTest />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
