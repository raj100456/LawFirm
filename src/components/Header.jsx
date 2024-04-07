import React from "react";
import { Box, Link } from "@mui/material";
import logo from "../assets/logo.svg";
import { Link as ScrollLink } from "react-scroll";
// import { Link as MuiLink } from "@mui/material";

const Header = () => {
  return (
    <Box
      id="section1"
      sx={{
        width: "100%",
        maxWidth: "-webkit-fill-available",
        height: "110px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: "page.secondary",
      }}
      mx={5}
      px={3}
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
      <Link
        variant="contained"
        sx={{
          border: "2px solid #fff",
          fontWeight: "bold",
          fontSize: "1rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "page.main",
            // backgroundColor: "primary.main",
          },
        }}
      >
        Contact Now
      </Link>
    </Box>
  );
};

export default Header;
