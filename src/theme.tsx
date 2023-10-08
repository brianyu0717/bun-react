import createTheme from "@mui/material/styles/createTheme";
import { ThemeState } from "./services/theme";

const theme = ({ isLight, isDebug }: ThemeState) =>
  createTheme({
    palette: {
      mode: isLight ? "light" : "dark",
    },
    typography: {
      fontFamily: ["monospace"].join(","),
    },
    components: {
      MuiContainer: {
        defaultProps: {
          sx: isDebug
            ? {
                border: 2,
                borderColor: (theme) => theme.palette.warning.main,
                borderStyle: "dashed",
              }
            : undefined,
        },
      },
      MuiGrid2: {
        defaultProps: {
          sx: isDebug
            ? {
                border: 2,
                borderColor: "#2CD",
                borderStyle: "dashed",
              }
            : undefined,
        },
      },
    },
  });

export default theme;
