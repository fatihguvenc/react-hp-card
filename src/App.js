import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}
