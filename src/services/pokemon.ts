import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon } from "../types/Pokemon";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonById: builder.query<Pokemon, number>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonByIdQuery } = pokemonApi;
