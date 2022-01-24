import React from "react";
import { LampStateInterface } from "./type";

const LampState: React.FC<LampStateInterface> = ({ isOn }) => {
  return <>lamp is {isOn ? "on" : "off"}</>;
};

export default LampState;
