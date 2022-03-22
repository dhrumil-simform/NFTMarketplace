import React from "react";
import "./App.css";
import Navbar from "./Components/Nav-Bar/NavBar";
import { Switch, Router, Route, Link } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/footer/Footer";
import { CreateNft } from "./Components/createNftSection/CreateNft";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState({ isConnected: false });
  return (
    <React.Fragment>
      <Navbar stateData={state} setStateData={setState} />

      <Switch>
        <Route path="/" exact>
          <Hero />
          <CreateNft />
        </Route>
      </Switch>

      <footer className="footer">
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
