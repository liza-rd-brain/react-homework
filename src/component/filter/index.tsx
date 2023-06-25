import { ArrowIcon } from "../Icon/Arrow";
import { DropDown } from "./DropDown";
import styles from "./styles.module.scss";
import classnames from "classnames";

//TODO: два фильтра с порталами вынести в общий компонент?
export const Filter = () => {
  return (
    <div className={classnames(styles.filter__wrapper)}>
      <span>Фильтр поиска</span>
      <div className={classnames(styles.filter__container)}>
        <div className={classnames(styles.filter__item)}>
          {/* <div>Название</div> */}
          <label htmlFor="name">
            Название
            <input
              name="name"
              className={classnames(styles.input)}
              type="text"
              autoComplete="off"
              placeholder="Введите название"
            />
          </label>
        </div>
        {/*         <div className={classnames(styles.filter__item)}>
          <div>Жанр</div>
          <input
            className={classnames(styles.input)}
            type="text"
            placeholder="Выберите жанр"
          />
        </div> */}
        <DropDown title={"Выберите жанр"}></DropDown>
        <DropDown title={"Выберите кинотеатр"}></DropDown>
      </div>
    </div>
  );
};
