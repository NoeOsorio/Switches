import "./EncryptApp.css";
import { useState } from "react";
import axios from "axios";

import { BooleanToBits } from "../Logic/Converter";
import { getOutput } from "../Redux/selectors";
import { useSelector } from "react-redux";

export default function Encrypt() {
  const [plaintext, setMessage] = useState("");
  const [decrypt, setDecrypt] = useState("");
  const key = useSelector(getOutput);
  const copyToClipboard = () => {
    console.log(decrypt);
    navigator.clipboard.writeText(decrypt);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://us-central1-cripto-buap.cloudfunctions.net/encrypt", {
        plaintext,
        key,
      })
      .then((res) => {
        setDecrypt(res.data);
      })
      .catch(() => {
        console.log("Error");
      });
  };

  return (
    <div className="App">
      <header>
        <span>
          <strong>{decrypt}</strong>
        </span>
      </header>
      <div className="main">
        <form onSubmit={onSubmit}>
          <p>
            <label htmlFor="email">Message:</label>
            <textarea
              rows="5"
              id="message"
              name="message"
              type="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="password">Key:</label>
            <input
              disabled
              id="key"
              name="key"
              type="key"
              value={BooleanToBits(key)}
              // onChange={(e) => setKey(e.target.value)}
            />
          </p>
          <button>Cifrar</button>
        </form>
        <button type="button" onClick={copyToClipboard}>
          Copiar a portapapeles
        </button>
      </div>
    </div>
  );
}
