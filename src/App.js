import React from "react";

import "./App.css";
import Led from "./Led/Led";
import Switch from "./Switch/Switch";

import { useState } from "react";
import { PBox } from "./Logic/Boxes";

function App() {
  const [led0, setled0] = useState(false);
  const [led1, setled1] = useState(false);
  const [led2, setled2] = useState(false);
  const [led3, setled3] = useState(false);
  const [led4, setled4] = useState(false);
  const [led5, setled5] = useState(false);
  const [led6, setled6] = useState(false);
  const [led7, setled7] = useState(false);

  const [input, setinput] = useState([
    led0,
    led1,
    led2,
    led3,
    led4,
    led5,
    led6,
    led7,
  ]);

  const cipher = () => {
    console.log("Input", [led0, led1, led2, led3, led4, led5, led6, led7]);
    const output = PBox(input);
    console.log("Output", output);
  };

  return (
    <div className="grid-container">
      <Led active={input[0]} />
      <Led active={input[1]} />
      <Led active={input[2]} />
      <Led active={input[3]} />
      <Led active={input[4]} />
      <Led active={input[5]} />
      <Led active={input[6]} />
      <Led active={input[7]} />

      <Switch key={0} changeLed={setled0} cipher={cipher} />
      <Switch key={1} changeLed={setled1} cipher={cipher} />
      <Switch key={2} changeLed={setled2} cipher={cipher} />
      <Switch key={3} changeLed={setled3} cipher={cipher} />
      <Switch key={4} changeLed={setled4} cipher={cipher} />
      <Switch key={5} changeLed={setled5} cipher={cipher} />
      <Switch key={6} changeLed={setled6} cipher={cipher} />
      <Switch key={7} changeLed={setled7} cipher={cipher} />
    </div>
  );
}

export default App;
