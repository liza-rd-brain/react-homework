"use client";

import { useDispatch, useSelector } from "react-redux";

import styles from "./styles.module.scss";
import classnames from "classnames";

import { Filter } from "@/component/Filter";
import { MovieCard } from "@/component/MovieCard";
//main page????

const testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export default function Page() {
  return (
    <div className={classnames(styles.main)}>
      <Filter />
      <div className={classnames(styles.movie__list)}>
        {testList.map((item, id) => {
          return <MovieCard key={id} />;
        })}
      </div>
      {/* <SmallButton isActive={true} color={"red"} iconType={"minus"} />
      <MovieCard />
      <>TEXT</> */}
    </div>
  );
}
