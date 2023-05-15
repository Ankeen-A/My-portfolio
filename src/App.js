import React from "react";
import "./App.css";
import { Navbar, Footer } from "./components";
import { Home, Projects, Resume, About } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* whatever is outside of Routes tag will be present on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
