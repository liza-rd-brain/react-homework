import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "../Icon/Close";
import { SmallButton } from "../SmallButton";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { selectProductAmount } from "@/business/feature/cart/selector";
import { cartActions } from "@/business/feature/cart";

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
    <div className={classnames(styles.controller__container)}>
      <div className={classnames(styles.controller)}>
        <SmallButton
          isActive={true}
          color={"red"}
          iconType={"minus"}
          onClick={() => {
            console.log("click");
            dispatch(cartActions.decrement(id));
          }}
        />
        <div className={classnames(styles.count)}>{amount}</div>
        <SmallButton
          isActive={true}
          color={"red"}
          iconType={"plus"}
          onClick={() => {
            dispatch(cartActions.increment(id));
          }}
        />
      </div>
      <div className={classnames(styles.icon__wrapper)}>
        <CloseIcon color="#333333" />
      </div>
    </div>
  );
};
