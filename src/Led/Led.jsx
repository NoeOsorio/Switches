import React from "react";
import { useSelector } from "react-redux";
import { getOutput } from "../Redux/selectors";
import "./Led.css";

const key = [true, false, false, true, false, false, true, true];

export default function Led({ color = "green", index }) {
  const leds = useSelector(getOutput);

  const active = leds[index] === key[index];
  return (
    <div className="container">
      <div className="led-box">
        <div className={`led-${color}-${active ? "on" : "off"}`}></div>
      </div>
    </div>
  );
}
