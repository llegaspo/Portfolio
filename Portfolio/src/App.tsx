// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Github from "./pages/github";
import Contact from "./pages/contact";
import ProjectDetails from "./pages/projectDetails";
import Resume from "./pages/resume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/github" element={<Github />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
