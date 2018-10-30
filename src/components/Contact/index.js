import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './contact.scss';

const Contact = () => {
  return (
    <section id="contact" styleName="contact">
      <h2 styleName="contact__title">Contact</h2>
    </section>
  )
}

export default CSSModules(Contact, styles);
