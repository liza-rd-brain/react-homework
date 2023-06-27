import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "../Icon/Close";
import { SmallButton } from "../SmallButton";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { selectTicketAmount } from "@/business/feature/cart/selector";
import { cartActions } from "@/business/feature/cart";

type ControllerType = {
  min?: number;
  max?: number;
  count?: number;
  id: string;
};

const MIN_AMOUNT = 0;
const MAX_AMOUNT = 30;

export const Controller = ({ id }: ControllerType) => {
  const dispatch = useDispatch();

  const ticketAmount = useSelector((state) =>
    selectTicketAmount(state as Parameters<typeof selectTicketAmount>[0], id)
  );

  return (
    <div className={classnames(styles.controller__container)}>
      <div className={classnames(styles.controller)}>
        <SmallButton
          isActive={ticketAmount > MIN_AMOUNT}
          iconType={"minus"}
          onClick={() => {
            ticketAmount > MIN_AMOUNT && dispatch(cartActions.decrement(id));
          }}
        />
        <div className={classnames(styles.count)}>{ticketAmount}</div>
        <SmallButton
          isActive={ticketAmount < MAX_AMOUNT}
          iconType={"plus"}
          onClick={() => {
            ticketAmount < MAX_AMOUNT && dispatch(cartActions.increment(id));
          }}
        />
      </div>
      {ticketAmount > MIN_AMOUNT && (
        <div
          className={classnames(styles.icon__wrapper)}
          onClick={() => {
            dispatch(cartActions.reset(id));
          }}
        >
          <CloseIcon color="#333333" />
        </div>
      )}
    </div>
  );
};
