import React, { useState } from "react";
import "./Switch.scss";

export default function Switch({ changeLed, cipher }) {
  const [checked, setchecked] = useState(false);

  const change = () => {
    changeLed(!checked);
    setchecked(!checked);
    setTimeout(cipher, 1000);
  };

  return (
    <div className="container">
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={change} />
        <div className="button">
          <div className="light"></div>
          <div className="dots"></div>
          <div className="characters"></div>
          <div className="shine"></div>
          <div className="shadow"></div>
        </div>
      </label>
    </div>
  );
}
