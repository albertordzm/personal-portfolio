import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/app.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header styleName="header">
          <nav styleName="navigation">
            <a styleName="navigation__item" href="#bio">BIO</a> |
            <a styleName="navigation__item" href="#skills">SKILLS</a> |
            <a styleName="navigation__item" href="#exp">EXPERIENCE</a>
          </nav>
        </header>
        <main styleName="main">
          <section styleName="section">
            <h1 styleName="title">Alberto Rodriguez Medina | Full Stack Developer</h1>
          </section>
          <section id="bio" styleName="section">
            Bio
          </section>
          <section id="skills" styleName="section">
            Skills
          </section>
          <section id="exp" styleName="section">
            Experience
          </section>
          <footer styleName="footer">
            <nav styleName="social">
              <a styleName="social__item">twitter</a> |
                <a styleName="social__item">linkedin</a> |
                  <a styleName="social__item">github</a>
                </nav>
              </footer>
        </main>
      </Fragment>
    );
  }
}

export default CSSModules(App, styles)
