import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Users from "./pages/users";
import SignupForm from "./pages/signup";
import Properties from "./pages/properties";
import Testimonials from "./pages/testimonials";
import LoginForm from "./pages/Login";
import PlannedTrips from "./pages/trips";
import ViewTrips from "./pages/viewtrips";
import Contact from "./pages/contact";
import Diaspora from "./pages/diaspora";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/trips" element={<PlannedTrips />} />
        <Route path="/viewtrips" element={<ViewTrips />} />
        <Route
          path="/properties"
          element={<Properties />}
        />
        <Route path="/testimonials" element={<Testimonials />} />
        
        <Route path="/Diaspora" element={<Diaspora />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/sign-up"
          element={<SignupForm />}
        />
      </Routes>
    </Router>
  );
}