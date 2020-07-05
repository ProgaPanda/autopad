import React from "react";
import styles from "./main-layout.module.scss";

export const MainLayout: React.FC = ({ children }) => {
  return <main className={styles["main-layout"]}>{children}</main>;
};
