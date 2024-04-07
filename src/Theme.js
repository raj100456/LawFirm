import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#E3B748", // Yellow
    },
    page: {
      main: "#1D1D1D", // Black
      secondary: "#111111", // Dark Black
    },
    text: {
      primary: "#ffffff",
    },
    icon: {
      primary: "#FDD65B", // Yellow
    },
    newsLetter: {
      background: "rgba(71, 71, 71, 0.50)", // Grey
    },
    footer: {
      background: "#111111", // Dark Black
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "2.6875rem",
          background: "#E3B748",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Inter",
          color: "#ffffff",
          // fontSizeAdjust: "0.5",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: "0.8rem",
          cursor: "pointer",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#1d1d1d",
          boxShadow: "none",
          "&.Mui-expanded": {
            margin: 0,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-input": {
            // color: '#fff', // Change this to your desired color
            backgroundColor: "#fff",
          },
          // '& .MuiOutlinedInput-notchedOutline': {
          //   borderColor: '#f00', // Change this to your desired color
          // },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          paddingRight: "0", // Override the padding right here
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
