import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PartnerAI from './pages/PartnerAI';

const App = () => (
  <Router>
    <Routes>
      <Route path="/partner-ai" element={<PartnerAI />} />
    </Routes>
  </Router>
);

export default App;