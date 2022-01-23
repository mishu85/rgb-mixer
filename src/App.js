import React, { useState } from "react";

function Color(props) {
  const [state, setState] = useState(props.startValue);

  const handleClick = (value) => {
    if (value > 255) {
      value = 255;
    } else if (value < 0) value = 0; // ???????????????
    props.onUpdate({
      color: props.color,
      level: value,
      startValue: props.startValue,
    });
    setState(value);
  };

  let re = props.shadow;
  let bl = props.shadow;
  let gr = props.shadow;

  if (props.color === "r") {
    re = state;
  } else if (props.color === "g") {
    gr = state;
  } else if (props.color === "b") {
    bl = state;
  }

  let colorPad = {
    margin: "5px",
    width: "60px",
    height: "40px",
    // backgroundColor:
    //   "rgb" +
    //   "(" +
    //   re.toString() +
    //   "," +
    //   gr.toString() +
    //   "," +
    //   bl.toString() +
    //   ")",
    backgroundColor: `rgb(${re.toString()},${gr.toString()},${bl.toString()})`,
  }; //? ${}
  //Unexpected template string expression no-template-curly-in-string

  // const colorN = (props) => {
  //     if (props.color === "r"){setColorState("Red");}
  //     else if (props.color === "g") {setColorState("Green");}
  //     else if (props.color === "b") {setColorState("Blue");}
  //     else {return null;} ????????????????????????????????????????????
  // }

  function colorName(props) {
    switch (props.color) {
      case "r":
        return "Red";
      case "g":
        return "Green";
      case "b":
        return "Blue";
      default:
        return null;
    }
    // if (props.color === "r") {
    //   return "Red";
    // } else if (props.color === "g") {
    //   return "Green";
    // } else if (props.color === "b") {
    //   return "Blue";
    // } else {
    //   return null;
    // } // something to stop the entire component to be rendered
  }

  return (
    <div>
      <p> {colorName(props)} levels</p>
      <button className="color-buttons" onClick={() => handleClick(state + 10)}>
        Lift{" "}
      </button>
      <button className="color-buttons" onClick={() => handleClick(state + 1)}>
        Fine Lift
      </button>
      <button className="color-buttons" onClick={() => handleClick(state + 1)}>
        Fine Lift
      </button>
      <button className="color-buttons" onClick={() => handleClick(state - 10)}>
        Reduce
      </button>
      <button className="color-buttons" onClick={() => handleClick(state - 1)}>
        Fine Reduce
      </button>
      <button className="color-buttons" onClick={() => handleClick(255)}>
        Maximum
      </button>
      <button className="color-buttons" onClick={() => handleClick(0)}>
        Nullify
      </button>
      <div style={colorPad}></div>
    </div>
  );
}

function App() {
  const [re, setRe] = useState(0);
  const [bl, setBl] = useState(0);
  const [gr, setGr] = useState(0);

  const handleUpdate = (levels) => {
    if (levels.color === "r") {
      setRe(levels.level);
    } else if (levels.color === "b") {
      setBl(levels.level);
    } else if (levels.color === "g") {
      setGr(levels.level);
    }
  };

  let mixerStyle = {
    border: "45px",
    width: "210px",
    height: "140px",
    backgroundColor:
      "rgb" +
      "(" +
      re.toString() +
      "," +
      gr.toString() +
      "," +
      bl.toString() +
      ")",
  };

  return (
    <div>
      <Color color={"r"} startValue={0} shadow={0} onUpdate={handleUpdate} />
      <Color color={"g"} startValue={0} shadow={0} onUpdate={handleUpdate} />
      <Color color={"b"} startValue={0} shadow={0} onUpdate={handleUpdate} />

      <div>
        <h2>Result</h2>
      </div>
      <div style={{ display: "flex" }}>
        <div style={mixerStyle}></div>
        <div style={{ font: "bold" }}>
          <ul>red: {re}</ul>
          <ul>green: {gr}</ul>
          <ul>blue: {bl}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
