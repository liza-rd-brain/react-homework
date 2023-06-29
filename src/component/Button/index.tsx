import { FC, FunctionComponent, ReactNode } from "react";

import { PlusIcon } from "../Icons/Plus";
import { MinusIcon } from "../Icons/Minus";

import styles from "./styles.module.scss";
import classnames from "classnames/bind";

type ButtonProps = {
  text: string;
  isFilled: boolean;
  onClick: () => void;
};

let cx = classnames.bind(styles);

export const Button: FC<ButtonProps> = ({ isFilled, onClick, text }) => {
  const classList = cx({
    button: true,
    button__filled: isFilled,
    button__outlined: !isFilled,
  });

  return (
    <button className={classList} onClick={onClick}>
      {text}
    </button>
  );
};
