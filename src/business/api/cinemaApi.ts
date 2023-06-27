import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cinemaApi = createApi({
  reducerPath: "cinemaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getCinemaList: builder.query<
      Array<{ id: string; name: string; movieIds: Array<string> }>,
      void
    >({ query: () => "cinemas" }),
  }),
});

export const { useGetCinemaListQuery } = cinemaApi;
