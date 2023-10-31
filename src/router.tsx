import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './components/index-page'
import EmprestimosPage from './components/emprestimos-page'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} key={'/'} element={<IndexPage />} />
        <Route path={'/emprestimos'} key={'/emprestimos'} element={<EmprestimosPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
