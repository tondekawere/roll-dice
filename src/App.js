import React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/system";
import Dice from "./components/Dice";

const Root = styled(Container)({
  fontFamily: "Inter, sans-serif",
  padding:"0",
  width:"100vw",
});

function App() {
  return (
    <Root >
      <Dice />
    </Root>
  );
}

export default App;
