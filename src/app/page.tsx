"use client";

import { useDispatch, useSelector } from "react-redux";

import styles from "./styles.module.scss";
import classnames from "classnames";

import { Filter } from "@/component/Filter";
import { MovieCard } from "@/component/MovieCard";
import { useGetMovieQuery, useGetMoviesQuery } from "@/business/api/movieApi";
import { useEffect, useMemo } from "react";
import { selectFilterModule } from "@/business/feature/filter/selector";
import { GENRE_LIST } from "@/shared";
//main page????

type DataItem = {
  description: "string";
  id: string;
  genre: string;
  title: string;
  rating: number;
  director: string;
  releaseYear: 2001;
  posterUrl: string;
  reviewIds: Array<string>;
};

export type DataType = Array<DataItem>;

export default function Page() {
  const filterState = useSelector(selectFilterModule);
  const { data, isLoading, error, refetch } = useGetMoviesQuery(
    filterState.cinemaFilter?.id
  );

  //сделать фильтрацию!
  // console.log("filter", filterState);

  //! здесь пока фильтровка только по жанру
  const filteredData = useMemo(() => {
    //если нет фильмов или фильтров вернем null
    if (!data /* || !filterState.genreFilter */) {
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

  console.log("на экране", filteredData);

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
      <div className={classnames(styles.movie__list)}>
        {currData?.map(({ id, title, genre, posterUrl }: DataType) => {
          return (
            <MovieCard
              id={id}
              key={id}
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
