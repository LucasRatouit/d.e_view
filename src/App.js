import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./App.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/Châteaux" element={Home} />
      </Routes>
    </Router>
  );
}

export default App;
