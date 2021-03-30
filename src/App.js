import logo from "./logo.svg";
import "./App.css";
import Led from "./Led/Led";
import Switch from "./Switch/Switch";

import { useState } from "react";

function App() {
  const [led1, setled1] = useState(false);
  const [led2, setled2] = useState(false);
  const [led3, setled3] = useState(false);
  const [led4, setled4] = useState(false);
  const [led5, setled5] = useState(false);
  const [led6, setled6] = useState(false);
  const [led7, setled7] = useState(false);
  const [led8, setled8] = useState(false);

  return (
    <div class="grid-container">
      <Led active={led1} />
      <Led active={led2} />
      <Led active={led3} />
      <Led active={led4} />
      <Led active={led5} />
      <Led active={led6} />
      <Led active={led7} />
      <Led active={led8} />

      <Switch changeLed={setled1} />
      <Switch changeLed={setled2} />
      <Switch changeLed={setled3} />
      <Switch changeLed={setled4} />
      <Switch changeLed={setled5} />
      <Switch changeLed={setled6} />
      <Switch changeLed={setled7} />
      <Switch changeLed={setled8} />
    </div>
  );
}

export default App;
