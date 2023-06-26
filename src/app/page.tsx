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
    if (!data || !filterState.genreFilter) {
      return null;
    } else {
      //фильтровать по жанру -
      const genreItem = GENRE_LIST.find(
        (item) => item.name === filterState.genreFilter.name
      );
      //

      const newData = data?.filter((item) => {
        return genreItem?.eng === item.genre;
      });
      console.log(newData, "newData");
      return newData;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState.genreFilter, filterState.nameFilter]);

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
    <div className={classnames(styles.main)}>
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
      {/* <SmallButton isActive={true} color={"red"} iconType={"minus"} />
      <MovieCard />
      <>TEXT</> */}
    </div>
  );
}
