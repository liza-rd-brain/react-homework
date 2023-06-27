"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

import classnames from "classnames";
import styles from "./styles.module.scss";
import { ArrowIcon } from "@/component/Icon/Arrow";

type ContextType = { isOn: boolean; setIsOn: (isOn: boolean) => void };
type MenuContextType = {
  activeGroup: string | undefined;
  switchGroup: (title: string) => void;
};

export default function FAQ() {
  const ToggleContext = createContext<{} | ContextType>({} as ContextType);

  const ToggleCompound = ({
    children,
    initialValue,
  }: {
    children?: ReactNode;
    initialValue: ContextType;
  }) => {
    const [isOn, setIsOn] = useState(initialValue);
    return (
      <ToggleContext.Provider value={{ isOn, setIsOn }}>
        {children}
      </ToggleContext.Provider>
    );
  };

  ToggleCompound.TextOn = function TextOn() {
    const { isOn } = useContext(ToggleContext) as ContextType;

    if (!isOn) {
      return null;
    }

    return <div>on</div>;
  };

  ToggleCompound.TextOff = function TextOff() {
    const { isOn } = useContext(ToggleContext) as ContextType;

    if (isOn) {
      return null;
    }

    return <div>off</div>;
  };

  ToggleCompound.SwitchButton = function SwitchButton() {
    const { isOn, setIsOn } = useContext(ToggleContext) as ContextType;
    return <div onClick={() => setIsOn(!isOn)}>switch</div>;
  };

  ToggleCompound.CustomSwitchButton = function SwitchButton() {
    const { isOn, setIsOn } = useContext(ToggleContext) as ContextType;
    return <div onClick={() => setIsOn(!isOn)}>switch</div>;
  };

  const MenuContext = createContext<MenuContextType | false>(false);

  const FaqAccordion = ({ children }: { children?: ReactNode }) => {
    const [activeGroup, setActiveGroup] = useState<string | undefined>();

    const switchGroup = useCallback((newTitle?: string) => {
      setActiveGroup((title) => (title === newTitle ? undefined : newTitle));
    }, []);

    return (
      <MenuContext.Provider value={{ activeGroup, switchGroup }}>
        {children}
      </MenuContext.Provider>
    );
  };

  FaqAccordion.Group = function MenuGroup({
    children,
    title,
    hasInteract = true,
  }: {
    children?: ReactNode;
    title: string;
    hasInteract?: boolean;
  }) {
    const { activeGroup, switchGroup } = useContext(
      MenuContext
    ) as MenuContextType;
    return (
      <details className={classnames(styles.details)}>
        <summary
          onClick={() => switchGroup(title)}
          className={classnames(styles.summary, {
            [styles.summary__caption]: !hasInteract,
          })}
        >
          <div className={classnames(styles.summary__header)}>
            <div>{title}</div>
            {hasInteract && (
              <div
                className={classnames(styles.icon__wrapper, {
                  [styles.icon__wrapper__reversed]: activeGroup === title,
                })}
              >
                <ArrowIcon color="#999FA6" />
              </div>
            )}
          </div>

          {activeGroup === title && <div>{children}</div>}
        </summary>
        <div className={classnames(styles.icon__wrapper)}></div>
      </details>
    );
  };

  FaqAccordion.Item = function MenuItem({
    children,
    title,
  }: {
    children?: ReactNode;
    title: string;
  }) {
    return <div className={classnames(styles.accordion__item)}>{title}</div>;
  };

  return (
    <div className={classnames(styles.accordion__container)}>
      <FaqAccordion>
        <FaqAccordion.Group title="Вопросы-ответы" hasInteract={false} />
        <FaqAccordion.Group title="Что такое Билетопоиск?">
          <FaqAccordion.Item title="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов." />
        </FaqAccordion.Group>
        <FaqAccordion.Group title="Какой компании принадлежит Билетопоиск?">
          <FaqAccordion.Item title="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов." />
        </FaqAccordion.Group>
        <FaqAccordion.Group title="Как купить билет на Билетопоиск?">
          <FaqAccordion.Item title="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов." />
        </FaqAccordion.Group>
        <FaqAccordion.Group title="Как оставить отзыв на Билетопоиск?">
          <FaqAccordion.Item title="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов." />
        </FaqAccordion.Group>
      </FaqAccordion>
    </div>
  );
}
