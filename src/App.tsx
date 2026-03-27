import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./page/Home"
import Info from "./page/Info"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
