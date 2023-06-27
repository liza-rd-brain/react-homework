"use client";

import { FC } from "react";
import Image from "next/image";
import classnames from "classnames";
import styles from "./styles.module.scss";
import portraitPlug from "../../../../public/portraitPlug.png";

import { useGetMovieQuery } from "@/business/api/movieApi";

import { useGetReviewQuery } from "@/business/api/reviewsApi";
import { Controller } from "@/component/Controller";
import { GENRE_LIST } from "@/shared";

const Review: FC<{ id: string }> = ({ id }) => {
  const { data, isLoading, error } = useGetReviewQuery(id);

  console.log("reviews", data);

  if (isLoading) {
    return <div className={classnames(styles.main)}>Loading...</div>;
  }

  if (!data || error) {
    return <div className={classnames(styles.main)}>NotFound</div>;
  }

  return (
    <div className={classnames(styles.review)}>
      {data?.map((item, index) => {
        return (
          <div key={index} className={classnames(styles.movie__card)}>
            <div className={classnames(styles.review__image)}>
              <Image
                src={portraitPlug}
                alt={item.name}
                width={32}
                height={32}
                className={classnames(styles.image)}
              />
            </div>
            <div className={classnames(styles.review__text)}>
              <div className={classnames(styles.review__header)}>
                <div className={classnames(styles.review__title)}>
                  {item.name}
                </div>
                <div className={classnames(styles.review__rating)}>
                  <span>Оценка: </span>
                  {item.rating}
                </div>
              </div>
              <div className={classnames(styles.review__description)}>
                {item.text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

//TODO: extra request for  reviews
export default function Movie({ params }: { params: { id: string } }) {
  const { data, isLoading, error } = useGetMovieQuery(params.id);

  if (isLoading) {
    return <div className={classnames(styles.main)}>Loading...</div>;
  }

  if (!data || error) {
    return <div className={classnames(styles.main)}>NotFound</div>;
  }

  const rusGenre = GENRE_LIST.find((item) => item.eng === data.genre);

  return (
    <div className={classnames(styles.movie__wrapper)}>
      <div className={classnames(styles.movie__card)}>
        <Image
          src={data.posterUrl}
          alt={data.title}
          width={400}
          height={500}
          className={classnames(styles.image)}
        />
        <div className={classnames(styles.card__text)}>
          <div className={classnames(styles.card__caption)}>
            {data.title} <Controller id={params.id} />
          </div>
          <div className={classnames(styles.table)}>
            <div className={classnames(styles.table__row)}>
              <div>жанр: </div>
              <div>{rusGenre?.name}</div>
            </div>
            <div className={classnames(styles.table__row)}>
              <div>год выпуска: </div>
              <div>{data.releaseYear}</div>
            </div>
            <div className={classnames(styles.table__row)}>
              <div>рейтинг: </div>
              <div>{data.rating}</div>
            </div>
            <div className={classnames(styles.table__row)}>
              <div>режиссер: </div>
              <div>{data.director}</div>
            </div>
          </div>

          <div className={classnames(styles.description)}>
            <div className={classnames(styles.description__title)}>
              описание
            </div>
            <div className={classnames(styles.description__text)}>
              {data.description}
            </div>
          </div>
        </div>
      </div>
      <Review id={params.id} />
    </div>
  );
}
