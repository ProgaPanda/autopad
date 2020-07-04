import React from "react";
import styles from "./header.module.scss";
import { WORDING } from "../../shared/i18n/en.wording";

const t = WORDING;

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <h1 className={styles["header__logo"]}>{t.LOGO}</h1>
    </header>
  );
};
