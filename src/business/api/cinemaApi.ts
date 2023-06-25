import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cinemaApi = createApi({
  reducerPath: "cinemaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getCinemaList: builder.query({ query: () => "cinemas" }),
    getMovieByCinema: builder.query({ query: (cinemaId) => `movies?cinemaId=${cinemaId}` }),
  }),
});

export const { useGetCinemaListQuery, useGetMovieByCinemaQuery } = cinemaApi;
