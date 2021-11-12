import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./imageMessage.css";

// if image messages sent from myself:
// display profile pictures on the right, messages on the left
export default function MeImage({ image, userName }) {
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
    <div className="meImageMessage">
      <Grid container spacing={2} justifyContent="flex-end" wrap="nowrap">
        <Grid item xs={8} zeroMinWidth>
          <Item style={{ overflowWrap: "break-word" }}>
            <span className="spanMyName">{userName}</span>
            <Img alt="Image" src={image} />
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
