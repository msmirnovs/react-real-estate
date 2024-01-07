import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import HousesPage from './pages/Houses.js';
import GuidePage from './pages/Guide.js';
import AboutPage from './pages/About.js';
import TestimonialsPage from './pages/Testimonials.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/houses" element={<HousesPage />} />
         
      <Route path="/guide" element={<GuidePage />} />
         
      <Route path="/about" element={<AboutPage />} />
         
      <Route path="/testimonials" element={<TestimonialsPage />} />
    </Routes>
  );
}

export default App;
