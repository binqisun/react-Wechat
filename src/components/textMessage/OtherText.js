import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./textMessage.css";

// if text messages sent from others:
// display profile pictures on the left, messages on the right
export default function OtherText({ text, userName }) {
  // set grid item styles
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary
  }));

  // set styles for user profile picture
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  });

  return (
    <div className="otherTextMessage">
      {/* set messages fit in the grid */}
      <Grid container spacing={2} wrap="nowrap">
        <Grid item sx={{ width: 80, height: 80 }}>
          <Item>
            <Img alt="User" src="../her.jpeg" />
          </Item>
        </Grid>
        <Grid item xs={8} zeroMinWidth>
          <span className="spanOtherName">{userName}</span>
          <Item style={{ overflowWrap: "break-word" }}>{text}</Item>
        </Grid>
      </Grid>
    </div>
  );
}
