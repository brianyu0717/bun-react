import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: [
        'monospace'
    ].join(',')
  }
});

export default theme;
