import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/footer.scss';

import GithubIcon from '../icons/GithubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import TwitterIcon from '../icons/TwitterIcon';

const Footer = (props) => {
  const footerStyle = `${!props.scrolling ? 'footer--show' : 'footer--hide'}`;

  return (
    <footer styleName={footerStyle}>
      <nav styleName="social">
        <a styleName="social__item" target="_blank" href="https://twitter.com/albertorodm">
          <TwitterIcon />
        </a> |
        <a styleName="social__item" target="_blank" href="https://www.linkedin.com/in/alberto-rodriguez-medina">
          <LinkedInIcon />
        </a> |
        <a styleName="social__item" target="_blank" href="https://github.com/albertordzm">
          <GithubIcon />
        </a> |
        <a styleName="social__item" href="#home">
          return to top
        </a>
      </nav>
    </footer>
  )
}

export default CSSModules(Footer, styles);
