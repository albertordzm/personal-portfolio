import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/footer.scss';

const Footer = (props) => {
  const footerStyle = `${props.atBottom ? 'footer--show' : 'footer--hide'}`;

  return (
    <footer styleName={footerStyle}>
      <nav styleName="social">
        <a styleName="social__item" target="_blank" href="https://twitter.com/albertorodm">
          twitter
        </a> |
        <a styleName="social__item" target="_blank" href="https://www.linkedin.com/in/alberto-rodriguez-medina">
          linkedin
        </a> |
        <a styleName="social__item" target="_blank" href="https://github.com/albertordzm">
          github
        </a> |
        <a styleName="social__item" href="#home">
          return to top
        </a>
      </nav>
    </footer>
  )
}

export default CSSModules(Footer, styles);
