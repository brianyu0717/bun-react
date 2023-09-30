import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import Grid from "@mui/material/Unstable_Grid2";
import Buttons from "../components/Buttons/Buttons";
import SpriteCard from "../components/SpriteCard/SpriteCard";
import Avatar from "../components/Avatar/Avatar";
import { Container } from "@mui/material";

export default function TestPage() {
  const avatars = ["xxv", "aad", "sde", "vvd", "ioiu", "icic"].map(
    (theSeed) => (
      <Grid md={2} key={theSeed}>
        <Avatar seed={theSeed} />
      </Grid>
    )
  );
  
  return (
    <Grid container>
      <Grid md={12}>
        <Buttons color="error" icon={<AccessAlarmsIcon />} />
      </Grid>
      <Grid md={2}>
        <Buttons color="info" />
        <Buttons color="info" />
        <Buttons color="info" />
        <Buttons color="info" />
      </Grid>
      <Grid md={8} container>
        <Container maxWidth="md">
          <Grid md={12} container>
            <Grid md={12}>
              <Buttons color="secondary" />
              <SpriteCard query={12} />
              <SpriteCard query={12} />
              <SpriteCard query="bulbasaur" />
            </Grid>
            <Grid md={4}><Buttons /></Grid>
            <Grid md={4}><Buttons /></Grid>
            <Grid md={4}><Buttons /></Grid>
            <Grid md={3}><Buttons /></Grid>
            <Grid md={9}><Buttons icon={<DirectionsCarFilledIcon />} /></Grid>
            {avatars}
            <Grid md={12}>
              <Buttons color="secondary" />
              <SpriteCard query={112} />
              <SpriteCard query="bulbasaur" />
            </Grid>
            <Grid md={12}><Buttons /></Grid>
            <Grid md={12}><Buttons /></Grid>
            <Grid md={12}><Buttons /></Grid>
            <Grid md={12}><Buttons /></Grid>
          </Grid>  
        </Container>
      </Grid>
      <Grid md={2}>
        <Buttons color="success" />
      </Grid>
    </Grid>
  );
}
