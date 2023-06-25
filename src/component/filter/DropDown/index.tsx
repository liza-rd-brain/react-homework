"use client";

import { FC, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./../styles.module.scss";
import classnames from "classnames";
/* import classnames from "classnames/bind"; */

import { ArrowIcon } from "@/component/Icon/Arrow";
/* let cx = classnames.bind(styles); */

const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={classnames(styles.filter__dropdown)}>
      <div>здесь будет список элементов</div>
    </div>
  );
};

export const DropDown: FC<{ title: string }> = ({ title }) => {
  type StateType = { hasModal: boolean; target: Element | null };

  const initialState: StateType = {
    hasModal: false,
    target: null,
  };
  const [state, setState] = useState(initialState);

  //TODO: обработать клик вне выпадашки! В кастомный хук?

  return (
    <div className={classnames(styles.filter__item)}>
      <div>Кинотеатр</div>
      {/*  <label htmlFor="theater">Кинотеатр</label> */}
      <div
        className={classnames(styles.input, {
          [styles.input__active]: state.hasModal,
        })}
        onClick={(e) => {
          console.log(e);
          console.log("click");
          setState((prev) => ({
            ...prev,
            hasModal: !prev.hasModal,
            target: e.target as Element,
          }));
        }}
      >
        <div>Выберите кинотеатр</div>
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
            onClose={() =>
              setState((prev) => ({ ...prev, hasModal: !prev.hasModal }))
            }
          />,
          state.target
        )}
    </div>
  );
};
