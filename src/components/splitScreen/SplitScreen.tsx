import React from "react";

interface Props {
  children: [React.ReactNode, React.ReactNode];
  leftWidth: number;
  rightWidth: number;
}
const SplitScreen = ({ children, leftWidth, rightWidth }: Props) => {
  const [left, right] = children;
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: leftWidth }}>{left}</div>
      <div style={{ flex: rightWidth }}>{right}</div>
    </div>
  );
};

export default SplitScreen;
