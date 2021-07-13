import React from "react";
import "./styles.css";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="App">
      <div className="HeaderBox">
        <h1 className="Header">Forcast Web App</h1>
        <h2 className="SubHeader">
          Explore weather conditions and it refreshes every day!
        </h2>
      </div>
      <Main />
    </div>
  );
}
