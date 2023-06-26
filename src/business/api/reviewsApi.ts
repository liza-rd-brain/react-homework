import { DataType } from "@/app/page";
import { ReviewItem } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getReview: builder.query<Array<ReviewItem>, string>({
      query: (cinemaId) => `reviews?movieId=${cinemaId}`,
    }),
  }),
});

export const { useGetReviewQuery } = reviewsApi;
