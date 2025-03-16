import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from './pages/signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInSide />} />
      </Routes>
    </Router>
  );
}

export default App;
