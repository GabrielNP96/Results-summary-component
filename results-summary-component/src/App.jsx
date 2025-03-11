import React from "react";
import Result from "./components/Result";
import Info from "./components/Info";

function App() {
  return (
    <div className="results">
      <h1>Your Result</h1>
      <Result />
      <Info />
    </div>
  )
}

export default App