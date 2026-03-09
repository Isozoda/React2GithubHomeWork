import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Page1 from './pages/page1'
import Dostavka from './pages/Dostavka'
import Aksiya from './pages/aksiya'
import FAQ from './pages/FAQ'
import Otviz from './pages/Otviz'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pitaniya" element={<Page1 />} />
          <Route path="/dostavka" element={<Dostavka />} />
          <Route path="/aksiya" element={<Aksiya />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/Otviz" element={<Otviz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
