import Home from "./page/Home";
import InfoPage from "./page/infoPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
