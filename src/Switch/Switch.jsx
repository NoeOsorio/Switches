import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBits } from "../Redux/actions";
import "./Switch.scss";

export default function Switch({ changeLed, cipher, index }) {
  const [checked, setchecked] = useState(false);
  const dispatch = useDispatch();

  const change = () => {
    setchecked(!checked);
    dispatch(updateBits(index, !checked));
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
