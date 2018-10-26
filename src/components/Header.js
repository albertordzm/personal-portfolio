import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/header.scss';

const Header = (props) => {
  const headerStyle = `${!props.scrolling ? 'header--show' : 'header--hide'}`;

  return (
    <header styleName={headerStyle}>
      <nav styleName="navigation">
        <a styleName="navigation__item" href="#">HOME</a>
        <a styleName="navigation__item" href="#bio">BIO</a>
        <a styleName="navigation__item" href="#skills">SKILLS</a>
        <a styleName="navigation__item" href="#exp">EXPERIENCE</a>
        <a styleName="navigation__item" href="#contact">CONTACT</a>
      </nav>
    </header>
  )
};

export default CSSModules(Header, styles);
