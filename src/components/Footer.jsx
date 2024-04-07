import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

// icons
import logo from "../assets/logo.svg";
import facebook from "../assets/Facebook icon.svg";
import twitter from "../assets/Twitter Icon.svg";
import instagram from "../assets/Insta Icon.svg";
import pinterest from "../assets/Pinterest Icon.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "footer.background",
        height: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: "5rem",
      }}
      px={3}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        // mt={5}
        mx={4} // 2
      >
        <img src={logo} alt="logo" />
        <Box
          sx={{
            display: "flex",
            gap: "3rem",
          }}
        >
          <ScrollLink to="section1" smooth={true}>
            <Link>Home</Link>
          </ScrollLink>
          <ScrollLink to="section2" smooth={true}>
            <Link>Attorney</Link>
          </ScrollLink>
          <ScrollLink to="section3" smooth={true}>
            <Link>Practice Areas</Link>
          </ScrollLink>
          <ScrollLink to="section4" smooth={true}>
            <Link>About Us</Link>
          </ScrollLink>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1.5rem",
          }}
        >
          <Link href="/">
            <img src={instagram} alt="instagram" />
          </Link>
          <Link href="/">
            <img src={facebook} alt="facebook" />
          </Link>
          <Link href="/">
            <img src={twitter} alt="twitter" />
          </Link>
          <Link href="/">
            <img src={pinterest} alt="pinterest" />
          </Link>
        </Box>
      </Box>
      <Stack sx={{ alignItems: "center", textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "4rem",
            gap: "2rem",
          }}
        >
          <Typography variant="span" sx={{ opacity: "0.5" }}>
            © 2023 All Rights Reserved
          </Typography>
          <Typography variant="span" sx={{ opacity: "0.5" }}>
            Privacy Policy
          </Typography>
          <Typography variant="span" sx={{ opacity: "0.5" }}>
            Terms of Service
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
