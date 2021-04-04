import React from "react";

import "./App.css";
import Led from "./Led/Led";
import Switch from "./Switch/Switch";

function App() {
  return (
    <div className="grid-container">
      <Led index={0} />
      <Led index={1} />
      <Led index={2} />
      <Led index={3} />
      <Led index={4} />
      <Led index={5} />
      <Led index={6} />
      <Led index={7} />

      <Switch index={0} />
      <Switch index={1} />
      <Switch index={2} />
      <Switch index={3} />
      <Switch index={4} />
      <Switch index={5} />
      <Switch index={6} />
      <Switch index={7} />
    </div>
  );
}

export default App;
