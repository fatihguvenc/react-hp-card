import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import HP_DATA from "./data/data.js";

export default function App() {
  const cardComp = HP_DATA.map(item => <Card item={item} />);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-5">{cardComp}</div>
      </div>
      <Footer />
    </div>
  );
}
