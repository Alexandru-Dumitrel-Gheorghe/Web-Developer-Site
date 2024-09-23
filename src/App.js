import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import Loader from "./components/Diverse/Loader";
import "./styles/App.css";

function App() {
  const location = useLocation(); // Hook to get the current route
  const [loading, setLoading] = useState(true); // Start with loading true

  // Simulate loading during route changes
  useEffect(() => {
    setLoading(true); // Start the loader as soon as the location changes
    const timer = setTimeout(() => {
      setLoading(false); // Delay page load to simulate loader
    }, 500); // Adjust the delay time

    return () => clearTimeout(timer); // Cleanup timer
  }, [location]);

  return (
    <>
      {loading && <Loader />} {/* Show the loader when loading is true */}
      {!loading && ( // Only show page content when not loading
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/über-mich" element={<About />} />
            <Route path="/projekte" element={<Projects />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
          <ScrollToTopButton /> {/* The ScrollToTop button */}
        </>
      )}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
