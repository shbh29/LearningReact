import ReactDOM from "react-dom";
// import { Welcome } from "./App";
import App from "./App";

const rootEl = document.getElementById("root");

// new HelloWorld(props) = <HelloWorld />
// let app = (
//   <div>
//     <Welcome name="abc" />
//     <Welcome name="abcd" />
//     <Welcome name="abcdef" />
//   </div>
// );

let app = (
  <div>
    <App />
    <App />
    <App />
  </div>
);

ReactDOM.render(app, rootEl);
