import React from "react";
import ActionComponent from "./ActionComponent";
import DisplayComponent from "./DisplayComponent";

export default function ParentComponent() {
  const [bgColor, setBgColor] = React.useState("black");
  return (
    <div>
      <ActionComponent setColor={setBgColor} />
      <DisplayComponent bgColor={bgColor} />
    </div>
  );
}
