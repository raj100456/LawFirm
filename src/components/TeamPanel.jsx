import { Box, Typography } from "@mui/material";
import React from "react";
import daniel from "../assets/team/danial.svg";
import sanfole from "../assets/team/sanfole.svg";
import cesforila from "../assets/team/cesforila.svg";
import colleen from "../assets/team/colleen.svg";
import haldone from "../assets/team/haldone.svg";
import nik from "../assets/team/nik.svg";

const TeamPanel = () => {
  return (
    <Box id="section4" py={8}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold" }}
        my={4}
      >
        Our Team
      </Typography>
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        mx={8}
        mb={4}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <img src={daniel} alt="" />
          <Box>
            <Typography variant="h6">Danial Def</Typography>
            <Typography variant="span" style={{ opacity: "0.3" }}>
              301 Cases
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            backgroundColor: "primary.main",
            width: "20rem",
            padding: "0.5rem",
            justifyContent: "flex-start",
            borderRadius: "0.875rem",
          }}
        >
          <img src={sanfole} alt="" />
          <Box>
            <Typography variant="h6">Sanfole</Typography>
            <Typography variant="span" style={{ opacity: "0.3" }}>
              850 Cases
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <img src={cesforila} alt="" />
          <Box>
            <Typography variant="h6">Cesforila</Typography>
            <Typography variant="span" style={{ opacity: "0.3" }}>
              470 Cases
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        mx={8}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <img src={colleen} alt="" />
          <Box>
            <Typography variant="h6">Colleen</Typography>
            <Typography variant="span" style={{ opacity: "0.3" }}>
              180 Cases
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <img src={haldone} alt="" />
          <Box>
            <Typography variant="h6">Haldone</Typography>
            <Typography variant="span" style={{ opacity: "0.3" }}>
              212 Cases
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <img src={nik} alt="" />
          <Box>
            <Typography variant="h6">Nik jeo</Typography>
            <Typography variant="span" style={{ opacity: "0.3" }}>
              350 Cases
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamPanel;
