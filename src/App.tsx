import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./page/Home"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
