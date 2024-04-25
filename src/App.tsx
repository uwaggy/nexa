// Import necessary components from react and react-router-dom
// import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Add from './Add.tsx';
import Subtract from './Subtract.tsx';
import Practice from './practice.tsx';
import Home from './home.tsx';
import Pass from './pass.tsx';
import Fail from './fail.tsx';
import Test from './Test.tsx'

// Main application component
const App = () => {
  return (
    <Router>
      <Routes>
      <Route  path="" element={<Home />} />
        <Route path="/Add" element={<Add/>} />
        <Route path="/Subtract" element={<Subtract/>} />
        <Route path="/Practice" element={<Practice/>} />
        <Route path="/Pass" element={<Pass/>} />
        <Route path="/Fail" element={<Fail/>} />
        <Route path="/Test" element={<Test/>} />
        {/* Catch-all route for unknown paths */}
        
      </Routes>
    </Router>
  );
};

export default App;
