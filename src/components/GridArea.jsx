import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import business1 from "../assets/Business law.svg";
import business2 from "../assets/business law 2.svg";
import partnership from "../assets/partnership law.svg";
import realEstate from "../assets/real estate law.svg";
import landlord from "../assets/landlord disputes.svg";
import elderAbuse from "../assets/elder abuse.svg";

const GridArea = () => {
  return (
    <Box id="section3">
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold" }}
        my={10}
      >
        Area of Practices
      </Typography>
      <br />
      <Stack sx={{ alignItems: "center", gap: "1rem" }} mb={5}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            justifyContent: "center",
            width: "min-content",
            gap: "1rem",
            "@media (max-width:600px)": {
              gridTemplateColumns: "repeat(1, 1fr)",
            },
          }}
          mx={5}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              height: "100%",
              position: "relative",
            }}
          >
            <img src={business1} alt="business law" style={{ flexGrow: 1 }} />
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", position: "absolute" }}
            >
              Business Law
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              height: "100%",
              position: "relative",
            }}
          >
            <img
              src={partnership}
              alt="partnership law"
              style={{ flexGrow: 1 }}
            />
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", position: "absolute" }}
            >
              Partnership Law
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            justifyContent: "center",
            width: "min-content",
            gap: "1rem",
            "@media (max-width:600px)": {
              gridTemplateColumns: "repeat(1, 1fr)",
            },
          }}
          mx={5}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              height: "100%",
              position: "relative",
            }}
          >
            <img
              src={realEstate}
              alt="real estate law"
              style={{ flexGrow: 1 }}
            />
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", position: "absolute" }}
            >
              Real Estate Law
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              height: "100%",
              position: "relative",
            }}
          >
            <img src={business2} alt="business law" style={{ flexGrow: 1 }} />
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", position: "absolute" }}
            >
              Business Law
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            justifyContent: "center",
            width: "min-content",
            gap: "1rem",
            "@media (max-width:600px)": {
              gridTemplateColumns: "repeat(1, 1fr)",
            },
          }}
          mx={5}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              height: "100%",
              position: "relative",
            }}
          >
            <img
              src={landlord}
              alt="landlord disputes"
              style={{ flexGrow: 1 }}
            />
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", position: "absolute" }}
            >
              Landlord Disputes
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              height: "100%",
              position: "relative",
            }}
          >
            <img src={elderAbuse} alt="elder abuse" style={{ flexGrow: 1 }} />
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", position: "absolute" }}
            >
              Elder Abuse
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default GridArea;
