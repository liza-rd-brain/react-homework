import { ChangeEventHandler, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";

import { useGetCinemaListQuery } from "@/business/api/cinemaApi";
import { filterActions } from "@/business/feature/filter";

import { DropDown } from "./DropDown";

import styles from "./styles.module.scss";
import classnames from "classnames";

import { GENRE_LIST } from "@/shared";
import { selectFilterModule } from "@/business/feature/filter/selector";

export const Filter = () => {
  const { data: cinemaList, isLoading, error } = useGetCinemaListQuery({});
  const { nameFilter } = useSelector(selectFilterModule);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
  const changeInput: ChangeEventHandler<HTMLInputElement> = useCallback(
    debounce(
      (e) => {
        dispatch(filterActions.filterByName(e.target.value));
      },
      300,
      { trailing: true }
    ),
    []
  );

  if (isLoading) {
    return <div className={classnames(styles.filter__wrapper)}>Loading...</div>;
  }

  if (!cinemaList || error) {
    return <div className={classnames(styles.filter__wrapper)}>NotFound</div>;
  }

  return (
    <div className={classnames(styles.filter__wrapper)}>
      <span>Фильтр поиска</span>
      <div className={classnames(styles.filter__container)}>
        <div className={classnames(styles.filter__item)}>
          <label htmlFor="name">
            Название
            <input
              name="name"
              className={classnames(styles.input)}
              type="text"
              autoComplete="off"
              placeholder="Введите название"
              defaultValue={nameFilter || ""}
              onChange={changeInput}
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
