"use client";

import { FC, useState } from "react";
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
                ? filterActions.filterByGenre(item.name)
                : filterActions.filterByCinema(item.name)
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
  type StateType = { hasModal: boolean; target: Element | null };

  const initialState: StateType = {
    hasModal: false,
    target: null,
  };
  const [state, setState] = useState(initialState);

  const filterState = useSelector(selectFilterModule);

  //TODO:useRef!!!!

  //TODO: обработать клик вне выпадашки! В кастомный хук?
  //useEfect -отписаться от listener!!!

  const currFilter = filterState[`${type}Filter`] || placeHolder;

  return (
    <div className={classnames(styles.filter__item)}>
      <div>{title}</div>
      <div
        className={classnames(styles.input, {
          [styles.input__active]: state.hasModal,
        })}
        onClick={(e) => {
          e.stopPropagation();
          setState((prev) => ({
            ...prev,
            hasModal: !prev.hasModal,
            target: e.target as Element,
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
        state.target &&
        createPortal(
          <Modal
            data={data}
            type={type}
            closeModal={() =>
              setState((prev) => ({ ...prev, hasModal: !prev.hasModal }))
            }
          />,
          state.target
        )}
    </div>
  );
};
