import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './components/index-page'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} key={'/'} element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
