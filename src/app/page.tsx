"use client";

import { useDispatch, useSelector } from "react-redux";

import styles from "./styles.module.scss";
import classnames from "classnames";

import { Filter } from "@/component/Filter";
import { MovieCard } from "@/component/MovieCard";
import { useGetMovieQuery, useGetMoviesQuery } from "@/business/api/movieApi";
//main page????

const testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export default function Page() {
  const { data, isLoading, error } = useGetMoviesQuery({});

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  console.log("data", data);
  //отсюда через useSelector достаем данные
  return (
    <div className={classnames(styles.main)}>
      <Filter />
      <div className={classnames(styles.movie__list)}>
        {data.map(({ id, title }: { id: any; title: any }) => {
          return <MovieCard key={id} title={title} />;
        })}
      </div>
      {/* <SmallButton isActive={true} color={"red"} iconType={"minus"} />
      <MovieCard />
      <>TEXT</> */}
    </div>
  );
}
