import React, { useState } from "react";
import "./Switch.scss";

export default function Switch({ changeLed }) {
  const [checked, setchecked] = useState(false);

  const change = () => {
    changeLed(!checked);
    setchecked(!checked);
  };

  return (
    <div className="container">
      <label class="switch">
        <input type="checkbox" checked={checked} onChange={change} />
        <div class="button">
          <div class="light"></div>
          <div class="dots"></div>
          <div class="characters"></div>
          <div class="shine"></div>
          <div class="shadow"></div>
        </div>
      </label>
    </div>
  );
}
