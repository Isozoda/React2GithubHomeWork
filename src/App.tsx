import { BrowserRouter, Route, Routes } from "react-router"
import Layout from './pages/Layout'
import Zustand from './pages/Zustand'
import Jotai from './pages/Jotai'
import Redux from "./pages/Redux"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Zustand />} />
          <Route path='/jotai' element={<Jotai />} />
          <Route path='/redux' element={<Redux />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
