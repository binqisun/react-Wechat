import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./textMessage.css";

// if text messages sent from myself:
// display profile pictures on the right, messages on the left
export default function MeText({ text, userName }) {
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
    <div className="meTextMessage">
      {/* set messages fit in the grid */}
      <Grid container spacing={2} justifyContent="flex-end" wrap="nowrap">
        <Grid item xs={8}>
          {/* set styles for message */}
          <span className="spanMyName">{userName}</span>
          <Item
            style={{
              overflowWrap: "break-word",
              backgroundColor: "#90EE90"
            }}
          >
            {text}
          </Item>
        </Grid>
        <Grid item sx={{ width: 80, height: 80 }}>
          <Item>
            <Img alt="User" src="../me.jpeg" />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
