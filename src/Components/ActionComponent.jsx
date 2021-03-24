import React from "react";

export default function ActionComponent({ setColor }) {
  return (
    <div
      style={{
        height: "100%",
        padding: "10%",
      }}
      className="container"
    >
      <div
        style={{
          width: "50%",
        }}
        className="leftArea"
      >
        <button onClick={() => setColor("Red")}>Apply Red</button>
        <button onClick={() => setColor("Blue")}>Apply Blue</button>
      </div>
    </div>
  );
}
