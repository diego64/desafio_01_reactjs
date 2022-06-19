import React from 'react';
import logoImg from '../../assets/Logo.svg';

import './styles.css';

export function Header() {
  return (
    <header className="header">
      <div>
        <img src={logoImg} alt="to.do"/>
      </div>
    </header>
  )
}