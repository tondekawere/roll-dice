import React, { useState } from "react";
import { Card, CardContent, Button, Typography, Grid } from "@mui/material";
import "../App.css";

function Dice() {
  const [dice, setDice] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [isFrozen, setIsFrozen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const rollDice = () => {
    const newDice = dice.map((die, index) => {
      if (!isFrozen[index]) {
        return Math.ceil(Math.random() * 6);
      }
      return die;
    });
    setDice(newDice);
  };

  const toggleFreeze = (index) => {
    const newIsFrozen = [...isFrozen];
    newIsFrozen[index] = !newIsFrozen[index];
    setIsFrozen(newIsFrozen);
  };

  const allDiceAreSame = () => {
    return new Set(dice).size === 1;
  };

  return (
    <Card
      className="dice-card"
      sx={{
        background: "#0B2434",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: "10%",
        width: "40%",
        minHeight: "60vh",
        "@media (max-width: 1100px)": {
          minHeight: "40vh",
          marginTop: "40%",
          width: "60%",
        },
        "@media (max-width: 700px)": {
          minHeight: "100vh",
          marginTop: "0%",
          width: "100%",
        },
      }}
    >
      <CardContent
        sx={{
          background: "#F5F5F5",
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          alignItems: "center",
          padding: "7% 0% 10% 0%",
          width: "80%",
          "@media (max-width: 1100px)": {
            width: "60%",
          },
          "@media (max-width: 992px)": {
            width: "70%",
          },
          "@media (max-width: 700px)": {
            width: "90%",
          },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          mb={0}
          style={{
            fontWeight: "800",
            fontSize: "27px",
            color: "#2B283A",
            fontFamily: "Karla, sans-serif",
          }}
        >
          Tenzies
        </Typography>
        <Typography
          variant="subtitle1"
          paragraph
          style={{
            fontSize: "14.11px",
            color: "#4A4E74",
            width: "250px",
            textAlign: "center",
            lineHeight: "17.86px",
          }}
        >
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {dice.slice(0, 5).map((die, index) => (
            <Grid item key={index} p={"0"}>
              <Button
                p={"0"}
                variant="contained"
                className={`die ${isFrozen[index] ? "frozen" : ""}`}
                onClick={() => toggleFreeze(index)}
                style={{
                  width: "35px",
                  minWidth: "unset",
                  height: "35px",
                  fontSize: "21px",
                  fontWeight: "700",
                  fontFamily: "Karla, sans-serif",
                  color: isFrozen[index] ? "#2B283A" : "#2B283A",
                  backgroundColor: isFrozen[index] ? "#59E391" : "#FFFFFF",
                  boxShadow: isFrozen[index]
                    ? "0px 2px 2px 0px #00000026"
                    : "0px 2px 2px 0px #00000026",
                }}
              >
                {die}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3} mt={1} justifyContent="center">
          {dice.slice(5, 10).map((die, index) => (
            <Grid item key={index + 5}>
              <Button
                variant="contained"
                className={`die ${isFrozen[index + 5] ? "frozen" : ""}`}
                onClick={() => toggleFreeze(index + 5)}
                style={{
                  width: "35px",
                  minWidth: "unset",
                  height: "30px",
                  fontSize: "21px",
                  fontWeight: "700",
                  fontFamily: "Karla, sans-serif",
                  color: isFrozen[index + 5] ? "#2B283A" : "#2B283A",
                  backgroundColor: isFrozen[index + 5] ? "#59E391" : "#FFFFFF",
                  boxShadow: isFrozen[index + 5]
                    ? "0px 2px 2px 0px #00000026"
                    : "0px 2px 2px 0px #00000026",
                }}
              >
                {die}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          color="primary"
          mb={3}
          onClick={rollDice}
          disabled={allDiceAreSame()}
          style={{
            marginTop: "20px",
            background: "#5035FF",
            fontSize: "16.38px",
            textTransform: "none",
            fontWeight: "700",
            width: "92.16px",
          }}
        >
          Roll
        </Button>
      </CardContent>
    </Card>
  );
}

export default Dice;
