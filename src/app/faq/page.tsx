"use client";

import { initialState } from "@/business/feature/filter";
import {
  ReactElement,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

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

    return <span>on</span>;
  };

  ToggleCompound.TextOff = function TextOff() {
    const { isOn } = useContext(ToggleContext) as ContextType;

    if (isOn) {
      return null;
    }

    return <span>off</span>;
  };

  ToggleCompound.SwitchButton = function SwitchButton() {
    const { isOn, setIsOn } = useContext(ToggleContext) as ContextType;
    return <button onClick={() => setIsOn(!isOn)}>switch</button>;
  };

  ToggleCompound.CustomSwitchButton = function SwitchButton() {
    const { isOn, setIsOn } = useContext(ToggleContext) as ContextType;
    return <button onClick={() => setIsOn(!isOn)}>switch</button>;
  };

  const MenuContext = createContext<MenuContextType | false>(false);

  const MenuAccordion = ({ children }: { children?: ReactNode }) => {
    const [activeGroup, setActiveGroup] = useState();

    //TODO: разрезолвить any
    const switchGroup = useCallback((newTitle: any) => {
      setActiveGroup((title) => (title === newTitle ? undefined : newTitle));
    }, []);

    return (
      <MenuContext.Provider value={{ activeGroup, switchGroup }}>
        {children}
      </MenuContext.Provider>
    );
  };

  MenuAccordion.Group = function MenuGroup({
    children,
    title,
  }: {
    children?: ReactNode;
    title: string;
  }) {
    const { activeGroup, switchGroup } = useContext(
      MenuContext
    ) as MenuContextType;
    return (
      <div>
        <button onClick={() => switchGroup(title)}>{title}</button>
        {activeGroup === title && <div>{children}</div>}
      </div>
    );
  };

  MenuAccordion.Item = function MenuItem({
    children,
    title,
  }: {
    children?: ReactNode;
    title: string;
  }) {
    return <div>{title}</div>;
  };

  return (
    <div>
      <MenuAccordion>
        <MenuAccordion.Item title="Главная" />
        <MenuAccordion.Group title="Фильм">
          <MenuAccordion.Item title="Топ" />
          <MenuAccordion.Item title="Популярные" />
          <MenuAccordion.Item title="Мои любимые" />
        </MenuAccordion.Group>
        <MenuAccordion.Group title="Сериал">
          <MenuAccordion.Item title="Топ" />
          <MenuAccordion.Item title="Популярные" />
          <MenuAccordion.Item title="Мои любимые" />
        </MenuAccordion.Group>
        <MenuAccordion.Group title="Служебное">
          <MenuAccordion.Item title="О нас" />
          <MenuAccordion.Item title="Вопросы" />
          <MenuAccordion.Item title="Ответы" />
        </MenuAccordion.Group>
      </MenuAccordion>
    </div>
  );
}
