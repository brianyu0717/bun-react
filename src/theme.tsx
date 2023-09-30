import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: {
    // mode: "dark",
  },
  typography: {
    fontFamily: [
        'monospace'
    ].join(',')
  },
  components: {
    MuiGrid2: {
      defaultProps: {
        sx: {
          border: 2,
          borderColor: '#2CD',
          borderStyle: 'dashed'
        }
      }
    }
  }
});

export default theme;
