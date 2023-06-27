"use client";

import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

import classnames from "classnames";
import styles from "./styles.module.scss";

import { DataItem } from "@/types";
import { useGetMoviesQuery } from "@/business/api/movieApi";
import { selectFilterModule } from "@/business/feature/filter/selector";

import { GENRE_LIST } from "@/shared";
import { Filter } from "@/component/Filter";
import { MovieCard } from "@/component/MovieCard";

export type DataType = Array<DataItem>;

export default function Page() {
  const filterState = useSelector(selectFilterModule);
  const { data, isLoading, error, refetch } = useGetMoviesQuery(
    filterState.cinemaFilter?.id
  );

  const filteredData = useMemo(() => {
    if (!data) {
      return null;
    } else {
      let newData = data;

      if (filterState?.genreFilter.name) {
        const genreItem = GENRE_LIST.find(
          (item) => item.name === filterState.genreFilter.name
        );
        newData = data?.filter((item) => {
          return genreItem?.eng === item.genre;
        });
      }

      if (filterState.nameFilter) {
        newData = newData?.filter((item) => {
          const currTitle = item.title.toLowerCase();
          const currFilter = filterState.nameFilter?.toLowerCase() as string;
          return currTitle.includes(currFilter);
        });
      }

      return newData;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState.genreFilter, filterState.nameFilter, data]);

  const currData = filteredData || data;

  //для серверной перерисовки
  useEffect(
    () => {
      refetch();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filterState?.cinemaFilter]
  );

  if (isLoading) {
    return <div className={classnames(styles.main)}>Loading...</div>;
  }

  if (!data || error) {
    return <div className={classnames(styles.main)}>NotFound</div>;
  }

  type DataType = {
    id: string;
    title: string;
    genre: string;
    posterUrl: string;
  };

  return (
    <>
      <Filter />
      <div className={classnames(styles.movie)}>
        {currData?.map(({ id, title, genre, posterUrl }: DataType) => {
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
      </div>
    </>
  );
}
