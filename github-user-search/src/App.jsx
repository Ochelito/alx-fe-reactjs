import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Pages (you should create these files in a /pages folder)
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div>
        {/* Simple Navbar */}
        <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Page content */}
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;