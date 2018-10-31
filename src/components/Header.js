import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './header.scss';

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
        <NavLink styleName={navigationItemStyles.home} onClick={() => { updateActiveItem('home'); }}
          to="/">
          HOME
        </NavLink>
        <NavLink styleName={navigationItemStyles.bio} onClick={() => { updateActiveItem('bio'); }}
          to="/bio">
          BIO
        </NavLink>
        <NavLink styleName={navigationItemStyles.skills} onClick={() => { updateActiveItem('skills'); }} to="/skills">
          SKILLS
        </NavLink>
        <NavLink styleName={navigationItemStyles.exp} onClick={() => { updateActiveItem('exp'); }}
          to="/experience">
          EXPERIENCE
        </NavLink>
        <NavLink styleName={navigationItemStyles.contact} onClick={() => { updateActiveItem('contact'); }} to="/contact">
          CONTACT
        </NavLink>
      </nav>
    </header>
  )
};

Header.propTypes = {
  scrolling: PropTypes.bool,
  activeItem: PropTypes.string.isRequired
};

export default CSSModules(Header, styles);
