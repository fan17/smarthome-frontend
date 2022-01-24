import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

interface Props {
  title: string;
}

const StyledRoom = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "60px",
}));

const Room: React.FC<Props> = ({ title, children }) => {
  return (
    <StyledRoom>
      <Typography variant="h4">{title}</Typography>
      {children}
    </StyledRoom>
  );
};

export default Room;
