import React from "react";
import MainContainer from "./components/MainContainer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes</h1>
      </header>
      <div className="App-body">
        <MainContainer></MainContainer>
      </div>
    </div>
  );
}

export default App;
