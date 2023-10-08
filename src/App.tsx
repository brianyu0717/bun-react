import { Container, CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import { Provider as ReduxProvider } from "react-redux";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import { useAppSelector } from "./hooks";
import { store } from "./store";
import theme from "./theme";

const Wrapped = () => {
  return (
    <ThemeProvider theme={theme(useAppSelector((state) => state.theme))}>
      <CssBaseline />
      <Grid container>
        <ResponsiveAppBar />
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Grid>
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Wrapped />
    </ReduxProvider>
  );
}
