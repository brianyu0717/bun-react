/**  Example response: GET https://pokeapi.co/api/v2/pokemon/bulbasaur.
 * There are more fields but just typing the ones we use.
*/
export type Pokemon = {
   species: {
    name: string;
   },
   sprites: {
    front_shiny: string;
   }
}