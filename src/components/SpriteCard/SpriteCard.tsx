import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  useGetPokemonByIdQuery,
  useGetPokemonByNameQuery,
} from "../../services/pokemon";

export type SpriteCardProps = {
  query: number | string;
};

export default function SpriteCard(props: SpriteCardProps) {
  const { query } = props;
  const { data, error, isLoading } =
    typeof query === "number"
      ? useGetPokemonByIdQuery(query)
      : useGetPokemonByNameQuery(query);

  if (error) {
    return <>Oh no there was an error!</>;
  } else if (isLoading) {
    return <>Loading...</>;
  } else if (data) {
    return (
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={data.sprites.front_shiny}
          alt={data.species.name}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h3">
              {data.species.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {data.species.name}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    );
  }
}
