import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: ['C#', 'JavaScript', 'React', 'Azure', 'ASP.NET'],
      experience: [
        {
          company: 'Diverza',
          role: 'Project Manager',
          description: ''
        },
        {
          company: 'Towa Software',
          role: 'Software Engineer',
          description: ''
        },
        {
          company: 'Inflection Point Systems',
          role: 'Software Engineer',
          description: ''
        },
        {
          company: 'Diply',
          role: 'Web Developer',
          description: ''
        }
      ]
    }
  }

  render() {
    return (
      <Fragment>
        <header styleName="header">
          <nav styleName="navigation">
            <a styleName="navigation__item" href="#home">HOME</a> |
            <a styleName="navigation__item" href="#bio">BIO</a> |
            <a styleName="navigation__item" href="#skills">SKILLS</a> |
            <a styleName="navigation__item" href="#exp">EXPERIENCE</a>
          </nav>
        </header>
        <main styleName="main">
          <section id="home" styleName="section">
            <h1 styleName="title">Alberto Rodriguez Medina | Software Developer</h1>
          </section>
          <section id="bio" styleName="section">
            <h2>Bio</h2>
            <p>
              Hi there!
            </p>
          </section>
          <section id="skills" styleName="section">
            <h2>Skills</h2>
          </section>
          <section id="exp" styleName="section">
            <h2>Experience</h2>
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
