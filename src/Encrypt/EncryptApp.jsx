import "./EncryptApp.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Encrypt from "./Encrypt";
import Decrypt from "./Decrypt";
import { useSelector } from "react-redux";
import { getOutput } from "../Redux/selectors";
import { key } from "../App";
import { BooleanToBits } from "../Logic/Converter";

export default function EncryptApp() {
  const output = useSelector(getOutput);
  console.log("Llave", BooleanToBits(key));
  console.log("Output", BooleanToBits(output));

  const visible = BooleanToBits(key) === BooleanToBits(output);

  return (
    <Router>
      {visible ? (
        <div style={{ "margin-top": "1em" }}>
          <nav>
            <ul>
              <li>
                <Link to="/">Cifrar</Link>
              </li>
              <li>
                <Link to="/decrypt">Descifrar</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/decrypt">
              <Decrypt />
            </Route>
            <Route path="/">
              <Encrypt />
            </Route>
          </Switch>
        </div>
      ) : (
        <div></div>
      )}
    </Router>
  );
}
