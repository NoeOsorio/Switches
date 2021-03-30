import React from "react";
import "./Led.css";

export default function Led({ color = "green", active = false }) {
  return (
    <div class="container">
      <div class="led-box">
        <div class={`led-${color}-${active ? "on" : "off"}`}></div>
      </div>
    </div>
  );
}
