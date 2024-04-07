import { Box, Button, Typography } from "@mui/material";
import React from "react";
import gift from "../assets/giftbox.svg";

const WhyChooseUs = () => {
  return (
    <div>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
        }}
        my={4}
      >
        Why Choose Us
      </Typography>
      <br />
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          "@media (max-width:600px)": {
            flexDirection: "column",
          },
        }}
        mx={5}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "flex-start",
            borderRadius: "0.875rem",
            border: "1.4px solid rgba(255, 255, 255, 0.10)",
            background: "page.main",
          }}
          p={3}
        >
          <img src={gift} width={100} height={100} alt="icon" />
          <Typography variant="h5">98% Success Rate</Typography>
          <Typography variant="body1" sx={{ opacity: "0.3" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            voluptatum.
          </Typography>
          <Button variant="contained">Read More</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "flex-start",
            borderRadius: "0.875rem",
            border: "1.4px solid rgba(255, 255, 255, 0.10)",
            background: "#2E2E2E",
          }}
          p={3}
        >
          <img src={gift} width={100} height={100} alt="icon" />
          <Typography variant="h5">100% Success Rate</Typography>
          <Typography variant="body1" sx={{ opacity: "0.3" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            voluptatum.
          </Typography>
          <Button variant="contained">Read More</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "flex-start",
            borderRadius: "0.875rem",
            border: "1.4px solid rgba(255, 255, 255, 0.10)",
            background: "page.main",
          }}
          p={3}
        >
          <img src={gift} width={100} height={100} alt="icon" />
          <Typography variant="h5">100% Success Rate</Typography>
          <Typography variant="body1" sx={{ opacity: "0.3" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            voluptatum.
          </Typography>
          <Button variant="contained">Read More</Button>
        </Box>
      </Box>
    </div>
  );
};

export default WhyChooseUs;
