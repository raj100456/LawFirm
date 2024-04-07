import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const IntroPanel = () => {
  return (
    <Box
     id="section2"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60vh",
      }}
    >
      <Typography variant="h3">Let's Introduce Ourself</Typography>
      <Divider
        variant="middle"
        sx={{
          display: "flex",
          backgroundColor: "#6A6A6A",
          borderWidth: "2px",
          height: "50%",
        }}
        
      />
      <Box>
        <Typography variant="body1">Criminal Lawyer</Typography>
        <br />
        <Typography variant="caption" sx={{opacity:"0.3"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
      </Box>
    </Box>
  );
};

export default IntroPanel;
