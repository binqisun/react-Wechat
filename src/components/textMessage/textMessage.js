import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./textMessage.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  display: "block"
}));

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%"
});

export default function textMessage() {
  return (
    <div className="textMessage">
      <div className="meTextMessage">
        <Grid container spacing={2} wrap="nowrap">
          <Grid item sx={{ width: 80, height: 80 }}>
            <Item>
              <Img alt="User" src="../me.jpeg" />
            </Item>
          </Grid>
          <Grid item xs={10} zeroMinWidth>
            <Item style={{ overflowWrap: "break-word" }}>
              ThisistextMessagekkkkkkkkasdasdasdasdasdasd
              kkkasdasdasdasdasdasdasdasdjkashdkjasdkh
            </Item>
          </Grid>
        </Grid>
      </div>
      <div></div>
      <div className="meTextMessage">
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item xs={9}>
            <Item>
              ThisistextMessagekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
              hhhhhhhhhhhhhhhhhhhhajhs dkhashdkaksdkahskdhkashkdhkhhhhhhhhhhh
            </Item>
          </Grid>
          <Grid item sx={{ width: 80, height: 80 }}>
            <Item>
              <Img alt="User" src="../me.jpeg" />
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
