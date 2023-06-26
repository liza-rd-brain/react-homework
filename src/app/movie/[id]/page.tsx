"use client";
import Image from "next/image";

import { useGetMovieQuery } from "@/business/api/movieApi";
import styles from "./styles.module.scss";

import classnames from "classnames";
import { useGetReviewQuery } from "@/business/api/reviewsApi";

const ReviewItem = () => {
  return <div></div>;
};

//TODO: extra request for  reviews
export default function Movie({ params }: any) {
  const { data, isLoading, error } = useGetMovieQuery(params.id);
  const {
    data: reviews,
    isLoading: isLoadingR,
    error: errorR,
  } = useGetReviewQuery(params.id);

  if (isLoading) {
    return <div className={classnames(styles.main)}>Loading...</div>;
  }

  if (!data || error) {
    return <div className={classnames(styles.main)}>NotFound</div>;
  }

  console.log("data", data);
  console.log("reviews", reviews);

  console.log("на странице", params.id);
  return (
    <div className={classnames(styles.movie__wrapper)}>
      <div className={classnames(styles.movie__card)}>
        {/* <div className={classnames(styles.image)}> */}
        <Image
          src={data.posterUrl}
          alt={data.title}
          width={400}
          height={500}
          className={classnames(styles.image)}
        />
        {/*    </div> */}
        <div className={classnames(styles.card__text)}>
          <div className={classnames(styles.card__header)}>{data.title}</div>
          <div>жанр</div>
          <div>год выпуска</div>
          <div>рейтинг</div>
          <div>режиссер</div>
          <div>описание</div>
        </div>
      </div>
      <div className={classnames(styles.review)}></div>
    </div>
  );
}
