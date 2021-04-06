import "./EncryptApp.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getOutput } from "../Redux/selectors";
import { BooleanToBits } from "../Logic/Converter";
import { decrypt } from "../Led/Backend";

export default function Decrypt() {
  const [ciphertext, setMessage] = useState(
    localStorage.getItem("cipher") || ""
  );
  const [plaintext, setDecrypt] = useState("");
  const key = useSelector(getOutput);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(plaintext);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    try {
      const plain = decrypt(ciphertext, key);

      setDecrypt(plain);
      localStorage.setItem("plain", plain);
      localStorage.removeItem("cipher");
    } catch (error) {
      console.error(error);
    }
    // axios
    //   .post("https://us-central1-cripto-buap.cloudfunctions.net/decrypt", {
    //     ciphertext,
    //     key,
    //   })
    //   .then((res) => {
    //     setDecrypt(res.data);
    //   })
    //   .catch(() => {
    //     console.log("Error");
    //   });
  };

  return (
    <div className="App">
      <header>
        <span>
          <strong>{plaintext}</strong>
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
          <button>Descifrar</button>
        </form>
        <button type="button" onClick={copyToClipboard}>
          Copiar a portapapeles
        </button>
      </div>
    </div>
  );
}
