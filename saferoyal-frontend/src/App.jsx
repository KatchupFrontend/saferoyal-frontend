import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Detailpage from "../src/pages/Detailpage";
import Checkout from "./pages/Checkout";
import Campus from "./components/Campus";
import Properties from "./components/Properties";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/Properties/:slug/:id" element={<Properties />} />
        <Route path="/details/:id" element={<Detailpage />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/Services" element={<Services />} />

             </Routes>
    </BrowserRouter>
  );
};

export default App;
