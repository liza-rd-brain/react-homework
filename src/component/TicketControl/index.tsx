"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import classnames from "classnames";
import styles from "./styles.module.scss";

import { cartActions } from "@/business/feature/cart";
import { selectTicketAmount } from "@/business/feature/cart/selector";

import { CloseIcon } from "../Icon/Close";
import { SmallButton } from "../SmallButton";
import { MAX_AMOUNT, MIN_AMOUNT } from "@/shared";
import { Button } from "../Button";

type ControllerType = {
  id: string;
  withModal?: boolean;
};

const WarningWindow = ({
  closePortal,
  deleteTicket,
}: {
  closePortal: () => void;
  deleteTicket: () => void;
}) => {
  return (
    <div id="modalPortal" className={classnames(styles.warning__container)}>
      <div id="modalPortal" className={classnames(styles.warning)}>
        <div className={classnames(styles.warning__caption)}>
          Удаление билета
          <div
            onClick={closePortal}
            className={classnames(styles.warning__icon)}
          >
            <CloseIcon color="black" />
          </div>
        </div>
        <div className={classnames(styles.warning__text)}>
          Вы уверены, что хотите удалить билет?
        </div>
        <div className={classnames(styles.warning__control)}>
          <Button text="да" isFilled={true} onClick={deleteTicket} />
          <Button text="нет" isFilled={false} onClick={closePortal} />
        </div>
      </div>
    </div>
  );
};

export const TicketControl = ({ id, withModal }: ControllerType) => {
  const dispatch = useDispatch();

  const [isPortalOpen, changePortalOpen] = useState(false);

  const ticketAmount = useSelector((state) =>
    selectTicketAmount(state as Parameters<typeof selectTicketAmount>[0], id)
  );

  const target = document.getElementById("portalContainer");

  const needOpenModal = ticketAmount === 1;

  return (
    <div className={classnames(styles.controller__container)}>
      <div className={classnames(styles.controller)}>
        <SmallButton
          isActive={ticketAmount > MIN_AMOUNT}
          iconType={"minus"}
          onClick={() => {
            withModal && needOpenModal
              ? changePortalOpen(true)
              : dispatch(cartActions.decrement(id));
          }}
        />
        <div className={classnames(styles.count)}>{ticketAmount}</div>
        <SmallButton
          isActive={ticketAmount < MAX_AMOUNT}
          iconType={"plus"}
          onClick={() => {
            dispatch(cartActions.increment(id));
          }}
        />
      </div>
      {ticketAmount > MIN_AMOUNT && (
        <div
          className={classnames(styles.icon__wrapper)}
          onClick={() => {
            withModal && needOpenModal
              ? changePortalOpen(true)
              : dispatch(cartActions.reset(id));
          }}
        >
          <CloseIcon color="#333333" />
        </div>
      )}
      {isPortalOpen &&
        target &&
        createPortal(
          <WarningWindow
            deleteTicket={() => {
              dispatch(cartActions.decrement(id));
            }}
            closePortal={() => changePortalOpen(false)}
          />,
          target
        )}
    </div>
  );
};
