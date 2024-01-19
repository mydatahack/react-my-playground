import { Route, Routes } from 'react-router-dom'

import { About } from '../TestPages/About'
import { Home } from '../TestPages/Home'
import { More } from '../TestPages/More'
import { Products } from '../TestPages/Products'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/more" element={<More />} />
    </Routes>
  )
}
