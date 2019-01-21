import React from "react";
import ReactDOM from "react-dom";
import PassionateNav from "./example/PassionateNavigaton"
// import TopNav from "./components/TopNav"
// import Menu from "./components/Menu"


import "./styles.css";

function App() {
  return (
    <PassionateNav />
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
