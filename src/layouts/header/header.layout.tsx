import React from 'react';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['header__logo']}>autopad</h1>
    </header>
  );
};
