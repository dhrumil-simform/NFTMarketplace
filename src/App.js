import React from "react";
import "./App.css";
import Navbar from "./Components/Nav-Bar/NavBar";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/footer/Footer";
import { Features } from "./Components/createNftSection/Features";
import { useEffect, useState } from "react";
function App() {
  const [state, setState] = useState({ isConnected: false });

  return (
    <>
      <Navbar stateData={state} setStateData={setState} />

      <Routes>
        <Route path="/" exact element={<Hero />}>
          {/* <Features /> */}
        </Route>
      </Routes>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
