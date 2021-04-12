import React from "react";
import Footer from "./Footer";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <Weather city="Madrid" />
        <Footer />
      </div>
    </div>
  );
}
