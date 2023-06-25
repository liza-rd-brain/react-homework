"use client";

import { FC } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import classnames from "classnames";

import { SmallButton } from "../SmallButton";
import { CloseIcon } from "../Icon/Close";

// карточка на главной и в корзине
//TODO: image from NEXT вместо класса image

type CardPropsType = {
  id: number;
  title: string;
  genre: string;
  posterUrl: string;
};

export const MovieCard: FC<CardPropsType> = ({
  id,
  title,
  genre,
  posterUrl,
}) => {
  return (
    <div className={classnames(styles.card__wrapper)}>
      <Image
        src={posterUrl}
        alt={title}
        width={100}
        height={120}
        className={classnames(styles.image)}
      />
      {/* <div className={classnames(styles.image)}></div> */}
      <div className={classnames(styles.card__items__wrapper)}>
        <div className={classnames(styles.card__text)}>
          <div className={classnames(styles.card__header)}>{title}</div>
          <div className={classnames(styles.card__genre)}>{genre}</div>
        </div>
        <div className={classnames(styles.card__controller)}>
          <SmallButton isActive={true} color={"red"} iconType={"minus"} />
          <span>0</span>
          <SmallButton isActive={true} color={"red"} iconType={"plus"} />
          <CloseIcon color="#333333" />
        </div>
      </div>
    </div>
  );
};
