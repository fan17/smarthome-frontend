import React from "react";

interface Props {
  isOpen: boolean;
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  windowName?: string;
}

const WindowState: React.FC<Props> = ({ isOpen, windowName }) => {
  return <>{`${windowName ?? "window"} is ${isOpen ? "open" : "close"}`}</>;
};

export default WindowState;
