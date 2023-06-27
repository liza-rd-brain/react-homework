"use client";
import { useSelector } from "react-redux";

import classnames from "classnames";
import styles from "./styles.module.scss";

import { DataItem } from "@/types";
import { MovieCard } from "@/component/MovieCard";
import { useGetMoviesQuery } from "@/business/api/movieApi";
import {
  selectAllTicket,
  selectTicketInCart,
} from "@/business/feature/cart/selector";

export default function Page() {
  const ticketList = useSelector(selectTicketInCart);
  const ticketAmount = useSelector(selectAllTicket);

  const { data, isLoading, error, refetch } = useGetMoviesQuery();

  const filteredData = ticketList.map((item) => {
    return data?.find((filmItem) => filmItem.id === item);
  });

  const filledData = filteredData.filter(
    (item) => item !== undefined
  ) as DataItem[];

  if (isLoading) {
    return <div className={classnames(styles.main)}>Loading...</div>;
  }

  if (!data || error) {
    return <div className={classnames(styles.main)}>NotFound</div>;
  }

  return (
    <div className={classnames(styles.wrapper)}>
      <div className={classnames(styles.list)}>
        {filledData &&
          filledData.map(({ id, title, genre, posterUrl }) => {
            return (
              <MovieCard
                key={id}
                id={id}
                title={title}
                genre={genre}
                posterUrl={posterUrl}
                withModal={true}
              />
            );
          })}
      </div>
      <div className={classnames(styles.summary)}>
        <div>Итого билетов: </div>
        <div>{ticketAmount}</div>
      </div>
    </div>
  );
}
