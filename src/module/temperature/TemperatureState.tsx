import React from "react";
import { TemperatureStateInterface } from "./type";

const TemperatureState: React.FC<TemperatureStateInterface> = ({ value }) => {
  return <>{value} °C</>;
};

export default TemperatureState;
