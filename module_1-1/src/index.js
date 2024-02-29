import React from "react";
import ReactDOM from "react-dom/client";
import { Card } from "./components/Card";

// import "./index.css";

// const paragraph = React.createElement("p", {
//   id: "test-p-id",
//   children: ["i am p"],
// });

// const title = <h1>{paragraph}</h1>;

// const div = React.createElement("div", {
//   name: "main",
//   id: "test:id",
//   className: "test-class",
//   //   children: ["Hello Word ", " UA ", " Lviv"],
//   children: title,
// });

ReactDOM.createRoot(document.getElementById("root")).render(<Card />);
