import React from "react";

interface Props {
  isOpen: boolean;
  // eslint-disable-next-line react/require-default-props
  doorName?: string;
}

const DoorState: React.FC<Props> = ({ isOpen, doorName }) => {
  return <>{`${doorName ?? "door"} is ${isOpen ? "open" : "close"}`}</>;
};

export default DoorState;
