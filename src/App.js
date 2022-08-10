import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/style.scss";

import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
