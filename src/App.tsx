import React from "react";
import { Header } from "./layouts/header/header.layout";
import { WritingPad } from "./containers/writing-pad/writing-pad.container";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      <WritingPad />
    </div>
  );
}

export default App;
