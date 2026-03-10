import { BrowserRouter, Route, Routes } from 'react-router'
import Info from './page/info'
import Home from './page/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/info/:id' element={<Info />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
