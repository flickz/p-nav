import React from "react";
import ReactDOM from "react-dom";
import TopNav from "./components/navigation/others/TopNav"

import "./styles.css";

function App() {
  return (
    <TopNav />
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
