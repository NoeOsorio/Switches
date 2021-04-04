import React from "react";
import "./Led.css";

export default function Led({ color = "green", active = false }) {
  return (
    <div className="container">
      <div className="led-box">
        <div className={`led-${color}-${active ? "on" : "off"}`}></div>
      </div>
    </div>
  );
}
