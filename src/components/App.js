import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/app.scss';

import Footer from './Footer';
import Header from './Header';

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
      ],
      atTop: true,
      atBottom: false
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    // console.log('Scrolling!');
    this.setState({
      atTop: window.scrollY === 0,
      atBottom: (window.scrollY + window.innerHeight) === document.body.scrollHeight
    });
  }

  render() {
    return (
      <Fragment>
        <Header atTop={this.state.atTop} />
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
          <section id="contact" styleName="section">
            <h2>Contact</h2>
          </section>
        </main>
        <Footer atBottom={this.state.atBottom} />
      </Fragment>
    );
  }
}

export default CSSModules(App, styles)
