import { FC, FunctionComponent, ReactNode } from "react";

import { PlusIcon } from "../Icon/Plus";
import { MinusIcon } from "../Icon/Minus";

import styles from "./styles.module.scss";
import classnames from "classnames/bind";

type ButtonProps = {
  isActive: boolean;
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
  iconType,
  onClick,
}) => {
  const classList = cx({
    button: true,
    button__small: true,
    button__active: isActive,
  });

  return (
    <button className={classList} onClick={onClick}>
      {getIcons({ iconType })}
    </button>
  );
};
