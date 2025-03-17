import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from './pages/signin';
import MarketinPageSide from './pages/MarketingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/"element={<MarketinPageSide/>} />
      </Routes>
    </Router>
  );
}

export default App;
