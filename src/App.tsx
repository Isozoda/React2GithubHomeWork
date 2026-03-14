
import { BrowserRouter, Route, Routes } from "react-router"
import Redux from './pages/Redux'
import Zustand from './pages/Zustand'
import Jotai from './pages/Jotai'
import Layout from './pages/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/redux' element={<Redux />} />
          <Route path='/zustand' element={<Zustand />} />
          <Route index element={<Jotai />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
