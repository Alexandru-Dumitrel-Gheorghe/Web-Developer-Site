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
import Blog from "./pages/Blog/Blog";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import WhatsAppButton from "./components/Diverse/WhatsAppButton";
import Loader from "./components/Diverse/Loader";
import "./styles/App.css";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/über-mich" element={<About />} />
            <Route path="/projekte" element={<Projects />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <ScrollToTopButton />
          <WhatsAppButton /> {/* Adaugă butonul WhatsApp */}
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
