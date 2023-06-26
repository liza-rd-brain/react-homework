"use client";
import { useSelector } from "react-redux";

import classnames from "classnames";
import styles from "./styles.module.scss";

import { DataType } from "../page";
import { MovieCard } from "@/component/MovieCard";
import { useGetMoviesQuery } from "@/business/api/movieApi";
import { selectTicketInCart } from "@/business/feature/cart/selector";
import { DataItem } from "@/types";

//TODO: portal!!!

export default function Page() {
  const ticketList = useSelector(selectTicketInCart);

  const { data, isLoading, error, refetch } = useGetMoviesQuery(undefined);

  const filteredData = ticketList.map((item) => {
    return data?.find((filmItem) => filmItem.id === item);
  });

  const filledData = filteredData.filter(
    (item) => item !== undefined
  ) as DataItem[];

  console.log({ filteredData, filledData, ticketList });

  if (isLoading) {
    return <div className={classnames(styles.main)}>Loading...</div>;
  }

  if (!data || error) {
    return <div className={classnames(styles.main)}>NotFound</div>;
  }

  return (
    <>
      {filledData &&
        filledData.map(({ id, title, genre, posterUrl }) => {
          return (
            <MovieCard
              key={id}
              id={id}
              title={title}
              genre={genre}
              posterUrl={posterUrl}
            />
          );
        })}
    </>
  );
}
