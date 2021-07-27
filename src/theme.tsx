import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background:
            "linear-gradient(rgba(255,255,255,1) 0%, rgba(241,243,244,1) 13%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#120C22",
    },
    secondary: {
      main: "#7134FF",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F1F3F4",
    },
  },
});

export default theme;
