import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './home.scss';

const Home = (props) => {
  return (
    <section id="home" styleName="home">
      <h1 styleName="home__title">Alberto Rodriguez Medina</h1>
      <h2>Software Developer</h2>
    </section>
  )
}

export default CSSModules(Home, styles)
