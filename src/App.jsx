import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout_page/Layout'
import Home from './pages/home_/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
       
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
