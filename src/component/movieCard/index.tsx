import { FC } from "react";

import styles from "./styles.module.scss";
import classnames from "classnames";
import { SmallButton } from "../SmallButton";
import { CloseIcon } from "../Icon/Close";

// карточка на главной и в корзине
//TODO: image from NEXT вместо класса image

export const MovieCard: FC<{}> = () => {
  return (
    <div className={classnames(styles.card__wrapper)}>
      <div className={classnames(styles.image)}></div>
      <div className={classnames(styles.card__items__wrapper)}>
        <div className={classnames(styles.card__text)}>
          <div className={classnames(styles.card__header)}>
            Властелин колец: Братство кольца
          </div>
          <div className={classnames(styles.card__genre)}>Фэнтези</div>
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
