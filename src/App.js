// import "./App.css";
// import Home from "./pages/Home";

// function App() {
//   return (
//       <Home />
//   );
// }

// export default App;


//updated code 

// src/App.js
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./components/Projects/ProjectDetail/ProjectDetail";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  );
}
