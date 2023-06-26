"use client";

import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./../styles.module.scss";
import classnames from "classnames";

import { ArrowIcon } from "@/component/Icon/Arrow";
import { useGetCinemaListQuery } from "@/business/api/cinemaApi";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "@/business/feature/filter";
import { selectFilterModule } from "@/business/feature/filter/selector";

type ModalType = {
  closeModal: () => void; //
  type: "genre" | "cinema";
  data: Array<any>;
};

type DropDownType = {
  title: string;
  type: "genre" | "cinema";
  data: Array<any>;
  placeHolder: string;
};

const Modal = ({ closeModal, data, type }: ModalType) => {
  const dispatch = useDispatch();

  return (
    <div className={classnames(styles.dropdown)}>
      <div
        className={classnames(styles.dropdown__item)}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(
            type === "genre"
              ? filterActions.filterByGenre(null)
              : filterActions.filterByCinema(null)
          );
          closeModal();
        }}
      >
        не выбрано
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className={classnames(styles.dropdown__item)}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              type === "genre"
                ? filterActions.filterByGenre({ name: item.name })
                : filterActions.filterByCinema({ name: item.name, id: item.id })
            );
            closeModal();
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export const DropDown: FC<DropDownType> = ({
  title,
  type,
  data,
  placeHolder,
}) => {
  type StateType = { hasModal: boolean };

  const [state, setState] = useState<StateType>({
    hasModal: false,
  });

  const filterState = useSelector(selectFilterModule);

  const currTarget = document.getElementById(type) as HTMLElement;

  /*   console.log("currTarget", currTarget); */

  //TODO: обработать клик вне выпадашки! В кастомный хук?
  //useEfect -отписаться от listener!!!

  useEffect(
    () => {
      const closeModalCallback: Parameters<
        typeof document.addEventListener
      >[1] = (e) => {
        if (!state.hasModal) {
          return;
        }

        e.stopPropagation();
        setState({ hasModal: false });
      };

      document.addEventListener("click", closeModalCallback);
      return () => document.removeEventListener("click", closeModalCallback);
    }, //
    [state.hasModal]
  );

  const currFilter = filterState[`${type}Filter`]?.name || placeHolder;

  return (
    <div className={classnames(styles.filter__item)}>
      <div>{title}</div>
      <div
        id={type}
        className={classnames(styles.input, {
          [styles.input__active]: state.hasModal,
        })}
        onClick={(e) => {
          e.stopPropagation();
          setState((prev) => ({
            hasModal: !prev.hasModal,
          }));
        }}
      >
        <div>{currFilter}</div>
        <div
          className={classnames(styles.icon__wrapper, {
            [styles.icon__wrapper__reversed]: state.hasModal,
          })}
        >
          <ArrowIcon color="#999FA6" />
        </div>
      </div>

      {state.hasModal &&
        createPortal(
          <Modal
            data={data}
            type={type}
            closeModal={() =>
              setState((prev) => ({ hasModal: !prev.hasModal }))
            }
          />,
          currTarget
        )}
    </div>
  );
};
