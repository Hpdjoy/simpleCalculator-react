import React, { useState } from "react";
import "./App.css";

function App() {
  const inpbox = {
    height: 30,
    backgroundColor: "#AB1C34",
    paddingTop: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  };
  const buttonStyle = {
    height: 50,
    width: 50,
    padding: "10px 20px",
    margin: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    fontWeight: 800,
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const boxStyle = {
    backgroundColor: "#87CEEB",
    height: 300,
    width: 310,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    borderRadius: 8,
    justifyContent: "center",
  };
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const addition = () => {
    console.log("+++");
    setResult(parseFloat(num1) + parseFloat(num2));
  };
  const substraction = () => {
    console.log("--");
    setResult(parseFloat(num1) - parseFloat(num2));
  };
  const multiplication = () => {
    console.log("**");
    setResult(parseFloat(num1) * parseFloat(num2));
  };
  const Division = () => {
    console.log("//");
    if (num2 != "0") setResult(parseFloat(num1) / parseFloat(num2));
    else alert("Can't devide by zero!");
  };
  const remainder = () => {
    console.log("%%");
    if (num2 != "0") setResult(parseFloat(num1) % parseFloat(num2));
    else alert("can't devide by zero!");
  };

  return (
    <>
      <div style={boxStyle}>
        <div
          style={{
            color: "black",
            fontSize: "large",
            paddingBottom: "10px",
            fontWeight: 600,
          }}
        >
          Simple Calculator
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            placeholder="Enter first number"
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            style={inpbox}
          />

          <input
            type="number"
            placeholder="Enter second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            style={inpbox}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button style={buttonStyle} onClick={addition}>
            +
          </button>
          <button style={buttonStyle} onClick={substraction}>
            -
          </button>
          <button style={buttonStyle} onClick={multiplication}>
            *
          </button>
          <button style={buttonStyle} onClick={Division}>
            /
          </button>
          <button style={buttonStyle} onClick={remainder}>
            %
          </button>
        </div>
        <div
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "#ffA500",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          result: {result}
        </div>
      </div>
    </>
  );
}

export default App;
