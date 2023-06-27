"use client";

import { FC } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import classnames from "classnames";

import { SmallButton } from "../SmallButton";
import { CloseIcon } from "../Icon/Close";
import { TicketControl } from "../TicketControl";
import Link from "next/link";
import { GENRE_LIST } from "@/shared";

type CardPropsType = {
  id: string;
  title: string;
  genre: string;
  posterUrl: string;
  withModal?: boolean;
};

export const MovieCard: FC<CardPropsType> = ({
  id,
  title,
  genre,
  posterUrl,
  withModal,
}) => {
  const currLink = `/movie/${id}`;

  const rusGenre = GENRE_LIST.find((item) => item.eng === genre);

  return (
    <div className={classnames(styles.card__container)}>
      <Link href={currLink} className={classnames(styles.card__wrapper)}>
        <div className={classnames(styles.card__wrapper)}>
          <Image
            src={posterUrl}
            alt={title}
            width={100}
            height={120}
            className={classnames(styles.image)}
          />

          <div
            className={classnames(styles.card__items__wrapper)}
            onClick={(e) => {
              e.stopPropagation();
              dispatchEvent;
            }}
          >
            <div className={classnames(styles.card__text)}>
              <div className={classnames(styles.card__header)}>{title}</div>
              <div className={classnames(styles.card__genre)}>
                {rusGenre?.name}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <TicketControl id={id} withModal={withModal} />
    </div>
  );
};
