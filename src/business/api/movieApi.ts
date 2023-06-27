import { DataType } from "@/app/page";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<DataType, string | void>({
      query: (cinemaId) =>
        cinemaId //
          ? `movies?cinemaId=${cinemaId}`
          : "movies",
    }),

    getMovie: builder.query({ query: (movieId) => `movie?movieId=${movieId}` }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = movieApi;
