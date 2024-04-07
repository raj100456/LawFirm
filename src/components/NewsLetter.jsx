import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const NewsLetter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "newsLetter.background",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
      p={2}
>
      <Box>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: "bold" }}
          my={4}
        >
          Subscribe to our Newsletter
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "0.3rem",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-input": {
                borderRadius: "0.5rem 0 0 0.5rem",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "0.5rem 0 0 0.5rem",
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
          />
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                padding: "0.7rem 3rem",
                borderRadius: "0 0.5rem 0.5rem 0",
              }}
            >
              SEND
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;
