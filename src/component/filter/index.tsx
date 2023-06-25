import { useGetCinemaListQuery } from "@/business/api/cinemaApi";
import { ArrowIcon } from "../Icon/Arrow";
import { DropDown } from "./DropDown";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { GENRE_LIST } from "@/shared";

//TODO: два фильтра с порталами вынести в общий компонент?
export const Filter = () => {
  //TODO: здесь  будет место запросы списка кинотеатров?
  const { data: cinemaList, isLoading, error } = useGetCinemaListQuery({});

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
        <DropDown
          title={"Жанр"}
          type="genre"
          data={GENRE_LIST}
          placeHolder="Выберите жанр"
        ></DropDown>
        <DropDown
          title={"Кинотеатр"}
          type="cinema"
          data={cinemaList}
          placeHolder="Выберите кинотеатр"
        ></DropDown>
      </div>
    </div>
  );
};
