import { FC, FunctionComponent, ReactNode } from "react";

import { IconProps } from "../icon/types";

import { PlusIcon } from "../icon/Plus";
import { MinusIcon } from "../icon/Minus";

import styles from "./styles.module.css";
import classnames from "classnames/bind";

type ButtonProps = {
  isActive: boolean;
  color: string;
  iconType: "plus" | "minus";
};

const getIcons = ({ iconType }: Pick<ButtonProps, "iconType">) => {
  switch (iconType) {
    case "plus": {
      return <PlusIcon color="#FFFFFF" />;
    }
    case "minus": {
      return <MinusIcon color="red" />;
    }
  }
};

let cx = classnames.bind(styles);

export const SmallButton: FC<ButtonProps> = ({ isActive, color, iconType }) => {
  //TODO: add isActive class,color
  /*  const btnClass = classnames({ btn: true, btn__small: true }); */

  console.log("test");

  const classList = cx({
    button: true,
    button_small: true,
  });

  return <button className={classList}>{getIcons({ iconType })}</button>;
};
