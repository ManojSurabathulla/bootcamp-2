import React from "react";

export default function DisplayComponent({ bgColor }) {
  return (
    <div style={{ height: "100vh", backgroundColor: bgColor, width: "50%" }} />
  );
}
