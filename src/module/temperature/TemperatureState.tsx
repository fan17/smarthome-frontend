import React from "react";
import { TemperatureStateInterface } from "module/temperature/type";

const Temperature: React.FC<TemperatureStateInterface> = ({ value }) => {
  return <>{value} °C</>;
};

export default Temperature;
