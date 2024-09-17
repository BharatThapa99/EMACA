import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Objectives from './components/Objectives';
import Footer from './components/Footer';
import Gallery from './components/Gallery'; // Import Gallery component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutUs />
              <Objectives />
              <Footer />
            </>
          }
        />
        
        {/* Gallery route */}
        <Route path="/gallery" element={<Gallery />} /> {/* This renders the Gallery component only when "/gallery" is visited */}
      </Routes>
    </Router>
  );
}

export default App;
