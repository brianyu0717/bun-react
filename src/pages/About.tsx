import { Container, Typography } from "@mui/material";
import BorderedBox from "../components/BorderedBox/BorderedBox";

export default function About() {
  return (
    <Container maxWidth="lg">
      <BorderedBox>
        <h1>About</h1>
        <Typography>
          T-bone cillum jerky pancetta spare ribs, anim pig. Ut ad sed pariatur,
          pork laboris turducken velit nostrud aliquip drumstick beef t-bone
          kevin cillum. Deserunt labore pig, jerky adipisicing aute tempor.
        </Typography>
      </BorderedBox>
    </Container>
  );
}
