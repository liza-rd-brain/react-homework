/* "use client"; */

import { FC, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./../styles.module.scss";
import classnames from "classnames";

const testString = "I'm a modal dialog";
const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={classnames(styles.filter__dropdown)}>
      <div>здесь будет список элементов</div>
    </div>
  );
};

export const DropDown: FC<{ title: string }> = ({ title }) => {
  const [showModal, setShowModal] = useState(false);
  console.log("showModal", showModal);

  //TODO: обработать клик вне выпадашки!

  const selectElem = document.getElementById("select") as HTMLElement;
  return (
    <div id="select" className={classnames(styles.filter__item)}>
      <div>Кинотеатр</div>
      {/*  <label htmlFor="theater">Кинотеатр</label> */}
      <div
        className={classnames(styles.input)}
        onClick={() => {
          console.log("click");
          setShowModal(!showModal);
        }}
      >
        Выберите кинотеатр
      </div>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(!showModal)} />,
          selectElem
        )}
    </div>
  );
};
