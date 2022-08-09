import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/style.scss";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
