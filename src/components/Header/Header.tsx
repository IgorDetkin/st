import React from 'react';
import classes from './Header.module.scss';

interface HeaderProps {
    handleFunc: () => void
}

const Header: React.FC<HeaderProps> = ({ handleFunc }) => {
  return (
    <header className={classes.header}>
    <h1 className={classes.title}>Список пользователей</h1>
    <button className={classes.buttonReload} onClick={handleFunc}>Обновить &#8635;</button>
  </header>
  )
}

export default Header