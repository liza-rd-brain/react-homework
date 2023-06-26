import { FC, FunctionComponent, ReactNode } from "react";

import { PlusIcon } from "../Icon/Plus";
import { MinusIcon } from "../Icon/Minus";

import styles from "./styles.module.scss";
import classnames from "classnames/bind";

type ButtonProps = {
  isActive: boolean;
  color: string;
  iconType: "plus" | "minus";
  onClick: () => void;
};

const getIcons = ({ iconType }: Pick<ButtonProps, "iconType">) => {
  switch (iconType) {
    case "plus": {
      return <PlusIcon color="#FFFFFF" />;
    }
    case "minus": {
      return <MinusIcon color="#FFFFFF" />;
    }
  }
};

let cx = classnames.bind(styles);

export const SmallButton: FC<ButtonProps> = ({
  isActive,
  color,
  iconType,
  onClick,
}) => {
  //TODO: add isActive class,color
  /*  const btnClass = classnames({ btn: true, btn__small: true }); */

  const classList = cx({
    button: true,
    button_small: true,
  });

  return (
    <button className={classList} onClick={onClick}>
      {getIcons({ iconType })}
    </button>
  );
};
