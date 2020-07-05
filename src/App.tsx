import React from "react";
import { MainLayout } from "./layouts/main-layout/main-layout";
import { Header } from "./layouts/header/header.layout";
import { WritingPad } from "./containers/writing-pad/writing-pad.container";

function App() {
  return (
    <MainLayout>
      <Header />
      <WritingPad />
    </MainLayout>
  );
}

export default App;
