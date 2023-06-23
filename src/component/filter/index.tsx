import styles from "./styles.module.scss";
import classnames from "classnames";

//TODO: два фильтра с порталами вынести в общий компонент?
export const Filter = () => {
  return (
    <div className={classnames(styles.filter__wrapper)}>
      <span>Фильтр поиска</span>
      <div>Название</div>
      <input type="text" />
    </div>
  );
};
