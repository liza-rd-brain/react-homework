import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "../Icon/Close";
import { SmallButton } from "../SmallButton";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { selectProductAmount } from "@/business/feature/cart/selector";

type ControllerType = {
  min?: number;
  max?: number;
  count?: number;
  id: string;
};

export const Controller = ({ min, max, count = 0, id }: ControllerType) => {
  const dispatch = useDispatch();

  // @ts-ignore
  const amount = useSelector((state) => selectProductAmount(state, id));

  console.log("amount", amount);
  //достаем id из мо

  return (
    <div
      className={classnames(styles.controller__container)}
      onClick={(e) => {
        console.log("click controller");
        e.stopPropagation();
      }}
    >
      <div className={classnames(styles.controller)}>
        <SmallButton isActive={true} color={"red"} iconType={"minus"} />
        <span>{count}</span>
        <SmallButton isActive={true} color={"red"} iconType={"plus"} />
      </div>
      <CloseIcon color="#333333" />
    </div>
  );
};
