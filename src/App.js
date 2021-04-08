import React from "react";
import Footer from "./Footer";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
