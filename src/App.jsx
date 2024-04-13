import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./page/About";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Services from "./page/Services";
import Footer from "./utils/Footer";
import Navbar from "./utils/Navbar";
import './index.css'

import "./style/style.css";
import "./style/utils.css";



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
