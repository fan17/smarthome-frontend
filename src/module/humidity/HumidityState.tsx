import React from "react";
import { HumidityStateInterface } from "./type";

const HumidityState: React.FC<HumidityStateInterface> = ({ value }) => {
  return <>{value}%</>;
};

export default HumidityState;
