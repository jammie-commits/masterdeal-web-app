import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Combine the imports
import Navbar from "./components/Navbar";

import Home from "./pages/home";
import About from "./pages/about";
import Properties from "./pages/properties";
import Testimonials from "./pages/testimonials";
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/contact";
import Diaspora from "./pages/diaspora";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/diaspora" element={<Diaspora />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
