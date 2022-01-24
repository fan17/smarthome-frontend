import React from "react";
import { HumidifierStateInterface } from "./type";

const HumidifierState: React.FC<HumidifierStateInterface> = ({ isOn }) => {
  return <>humidifier is {isOn ? "on" : "off"}</>;
};

export default HumidifierState;
