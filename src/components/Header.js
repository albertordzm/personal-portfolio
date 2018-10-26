import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/header.scss';

const getNavigationItemStyle = (activeItem, currentItem) => activeItem === currentItem ? 'navigation__item--active' : 'navigation__item';

const Header = (props) => {
  const { activeItem, scrolling, updateActiveItem } = props;
  const headerStyle = `${!scrolling ? 'header--show' : 'header--hide'}`;
  const navigationItemStyles = {
    home: getNavigationItemStyle(activeItem, 'home'),
    bio: getNavigationItemStyle(activeItem, 'bio'),
    skills: getNavigationItemStyle(activeItem, 'skills'),
    exp: getNavigationItemStyle(activeItem, 'exp'),
    contact: getNavigationItemStyle(activeItem, 'contact')
  };

  return (
    <header styleName={headerStyle}>
      <nav styleName="navigation">
        <a styleName={navigationItemStyles.home} onClick={() => { updateActiveItem('home'); }}
          href="#">
          HOME
        </a>
        <a styleName={navigationItemStyles.bio} onClick={() => { updateActiveItem('bio'); }}
          href="#bio">
          BIO
        </a>
        <a styleName={navigationItemStyles.skills} onClick={() => { updateActiveItem('skills'); }}
          href="#skills">
          SKILLS
        </a>
        <a styleName={navigationItemStyles.exp} onClick={() => { updateActiveItem('exp'); }}
          href="#exp">
          EXPERIENCE
        </a>
        <a styleName={navigationItemStyles.contact} onClick={() => { updateActiveItem('contact'); }}
          href="#contact">
          CONTACT
        </a>
      </nav>
    </header>
  )
};

Header.propTypes = {
  scrolling: PropTypes.bool.isRequired,
  activeItem: PropTypes.string.isRequired
};

export default CSSModules(Header, styles);
