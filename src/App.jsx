import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

// imported react router dom
import {  Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./Pages/Home";
import Contact from "../src/Pages/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/" Component={Home } />
          <Route path="/contact" Component={Contact } />
          <Route path="/about" Component={About} />
        </Routes>
        <Footer />
      
    </>
  );
}

export default App;
