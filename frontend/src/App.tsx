import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Privacy from "./components/Privacy/Privacy";
import Summary from "./components/Summary/Summary";
import Supervised from "./components/Supervised/Supervised";
import Unsupervised from "./components/Unsupervised/Unsupervised";
import Login from "./components/Login/loginPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        {/* Navigation and other components can go here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/supervised" element={<Supervised />} />
          <Route path="/unsupervised" element={<Unsupervised />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <div className="container"></div>
      </div>
    </Router>
  );
}

export default App;
