import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./imageMessage.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary
}));

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%"
});

export default function OtherImage({ image }) {
  return (
    <div className="otherImageMessage">
      <Grid container spacing={2} wrap="nowrap">
        <Grid item sx={{ width: 80, height: 80 }}>
          <Item>
            <Img alt="User" src="../her.jpeg" />
          </Item>
        </Grid>
        <Grid item xs={8} zeroMinWidth>
          <Item style={{ overflowWrap: "break-word" }}>
            <Img alt="Image" src={image} />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
