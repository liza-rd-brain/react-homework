import styles from "./styles.module.scss";
import classnames from "classnames";

//TODO: аватарки нет - грузим картинку
const ReviewItem = () => {
  return <div></div>;
};

export default function Page() {
  return (
    <div className={classnames(styles.movie__wrapper)}>
      <div className={classnames(styles.movie__card)}>
        <div className={classnames(styles.image)}></div>
        <div className={classnames(styles.card__text)}>
          <div className={classnames(styles.card__header)}>
            Властелин колец: Братство кольца
          </div>
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
