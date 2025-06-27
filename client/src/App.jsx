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
import Team from "./pages/team";
import Awards from "./pages/awards";
import CSR from "./pages/csr";
import Newsletter from "./pages/newsletter";
import NewYear from "./pages/newyear";
import Gallery from "./pages/gallery";

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
        <Route path="/team" element={<Team />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/newyear" element={<NewYear />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}
