import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { App } from './App'
import { MswTest } from './pages/msw-test/MswTest'

const root = ReactDOM.createRoot(
  document.getElementById('app-example-1') as HTMLElement
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/msw-test" element={<MswTest />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
