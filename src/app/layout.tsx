"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

import "./globals.css";
import { roboto } from "./font";
import classnames from "classnames";
import styles from "./styles.module.scss";

import { CartIcon } from "../component/Icons/Cart";
import { StoreProvider } from "@/business/StoreProvider";
import { selectAllTicket } from "@/business/feature/cart/selector";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Header = () => {
  const ticketAmount = useSelector(selectAllTicket);

  return (
    <header className={classnames(styles.header)}>
      <div className={classnames(styles.nav__wrapper)}>
        <div>
          <Link href="/">Билетопоиск</Link>
        </div>
        <div className={classnames(styles.counter__wrapper)}>
          {ticketAmount !== 0 && (
            <div className={classnames(styles.counter)}>{ticketAmount}</div>
          )}
          <Link href="/cart">
            <div className={classnames(styles.icon__wrapper)}>
              <CartIcon />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className={classnames(styles.footer)}>
      <div className={classnames(styles.nav__wrapper)}>
        <div>
          <Link href="/faq">Вопросы-ответы</Link>
        </div>
        <Link href="/about">О нас</Link>
      </div>
    </footer>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div
          id="portalContainer"
          className={classnames(styles.container, styles.container__main_page)}
        >
          <StoreProvider>
            <Header />
            <div className={classnames(styles.main)}>{children}</div>
            <Footer />
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
