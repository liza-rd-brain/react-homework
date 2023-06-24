import styles from "./styles.module.scss";
import classnames from "classnames";

//TODO: два фильтра с порталами вынести в общий компонент?
export const Filter = () => {
  return (
    <div className={classnames(styles.filter__wrapper)}>
      <span>Фильтр поиска</span>
      <div className={classnames(styles.filter__container)}>
        <div className={classnames(styles.filter__item)}>
          <div>Название</div>
          <input
            className={classnames(styles.input)}
            type="text"
            placeholder="Название"
          />
        </div>
        <div className={classnames(styles.filter__item)}>
          <div>Жанр</div>
          <input
            className={classnames(styles.input)}
            type="text"
            placeholder="Выберите жанр"
          />
        </div>
        <div className={classnames(styles.filter__item)}>
          <div>Кинотеатр</div>
          <input
            className={classnames(styles.input)}
            type="text"
            placeholder="Выберите кинотеатр"
          />
        </div>
      </div>
    </div>
  );
};
