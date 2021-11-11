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

export default function MeImage({ image }) {
  return (
    <div className="meImageMessage">
      <Grid container spacing={2} justifyContent="flex-end" wrap="nowrap">
        <Grid item xs={8} zeroMinWidth>
          <Item style={{ overflowWrap: "break-word" }}>
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
