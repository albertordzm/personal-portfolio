import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.scss';

import Footer from './Footer';
import Header from './Header';
import ExperienceList from './Experience/List';
import SkillList from './Skills/List';
import ExperienceData from '../data/Experience';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: ExperienceData,
      atTop: true,
      atBottom: false,
      scrolling: false,
      showJobDescription: false,
      activeItem: 'home'
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.updateActiveItem = this.updateActiveItem.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({
      atTop: window.scrollY === 0,
      atBottom: (window.scrollY + window.innerHeight) >= (document.body.scrollHeight - 1)
    });
  }

  updateActiveItem(newActiveItem) {
    this.setState({
      activeItem: newActiveItem
    });
  }

  render() {
    const {
      activeItem,
      atTop,
      atBottom,
      experience,
      scrolling,
      showJobDescription
    } = this.state;

    return (
      <Fragment>
        <Header atTop={atTop} scrolling={scrolling} activeItem={activeItem}
          updateActiveItem={this.updateActiveItem} />
        <main styleName="main">
          <section id="home" styleName="section">
            <h1 styleName="title">Alberto Rodriguez Medina</h1>
            <h2>Software Developer</h2>
          </section>
          <section id="bio" styleName="section">
            <h2 styleName="subtitle">Bio</h2>
            <article styleName="bio">
              <p>
                Hi there!
              </p>
              <p>
                I'm a software engineer with 5+ years of experience in web development, working for
                companies in diverse industries including financial, healthcare and entertainment.
                Full stack experience with technologies like SQL Server, C#, ASP.NET Core, Node,
                JavaScript (including libraries such as jQuery and React), SASS and Handlebars.

                Love to learn new technologies and tackle interesting and challenging problems.
              </p>
            </article>
          </section>
          <section id="skills" styleName="section--skills">
            <h2 styleName="subtitle">Skills</h2>
            <SkillList />
          </section>
          <section id="exp" styleName="section">
            <h2 styleName="subtitle">Experience</h2>
            <ExperienceList jobs={experience} showJobDescription={showJobDescription} />
          </section>
          <section id="contact" styleName="section">
            <h2 styleName="subtitle">Contact</h2>
          </section>
        </main>
        <Footer atBottom={atBottom} scrolling={scrolling} />
      </Fragment>
    );
  }
}

export default CSSModules(App, styles)
