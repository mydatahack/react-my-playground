import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { App } from './App'
import { worker } from './mock/browser'
import { CardListPageTest } from './pages/CardListPageTest/CardListPageTest'
import { MswTest } from './pages/msw-test/MswTest'
import { Router } from './pages/Router/Router'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const root = ReactDOM.createRoot(
  document.getElementById('app-example-1') as HTMLElement
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Router />} />
        <Route path="/app" element={<App />} />
        <Route path="/list" element={<CardListPageTest />} />
        <Route path="/msw-test" element={<MswTest />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
