import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchange from "./components/Exchange";
import CoinDetails from "./components/CoinDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

// export const server = process.env.REACT_APP_SERVER_URL;
export const server = import.meta.env.VITE_SERVER_URL;
console.log(server);

const App = () => {
  // localStorage.clear();

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
          {/* <Route path="/" element={</>}/> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
