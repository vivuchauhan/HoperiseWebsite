import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./content/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


