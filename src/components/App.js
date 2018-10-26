import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/app.scss';

import ExperienceList from './ExperienceList';
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
          start: 'Apr 2011',
          end: 'Jun 2013',
          description: `A description here!!`
        },
        {
          company: 'Towa Software',
          role: 'Software Engineer',
          start: 'Jul 2013',
          end: 'May 2015',
          description: `Web development on projects for two financial institutions, using technologies ranging from C# and SQL Server 2008 to ColdFusion and Sybase.

          Led a team of three developers.`
        },
        {
          company: 'Inflection Point Systems',
          role: 'Software Engineer',
          start: 'Jun 2015',
          end: 'Jul 2017',
          description: `Worked remotely for a client based in the United States as part of a Scrum team, having constant communication with business analysts and quality assurance engineers. The stack used was comprised of classic ASP pages combined with ASP.NET webforms using Visual Basic and C#, as well as SQL Server 2012.

          My main duties were fixing both front and backend issues, but I also participated in the creation and release of new features such as a React-based module with a WCF service backend.`
        },
        {
          company: 'Diply',
          role: 'Web Developer',
          start: 'Aug 2017',
          end: 'Sep 2018',
          description: `At Diply I form part of the web team, in which I've developed new features and helped with the maintenance of Diply's website (diply.com). I have also been involved in the development of API's that provide data to our front end solution.

          Our stack consists of C#, ASP.NET Core MVC, Javascript (including jQuery), Handlebars templates and SASS.`
        }
      ],
      atTop: true,
      atBottom: false,
      scrolling: false,
      showJobDescription: false
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
    this.setState({
      atTop: window.scrollY === 0,
      atBottom: (window.scrollY + window.innerHeight) >= (document.body.scrollHeight - 1)
    });
  }

  render() {
    const {
      atTop,
      atBottom,
      experience,
      scrolling,
      showJobDescription
    } = this.state;

    return (
      <Fragment>
        <Header atTop={atTop} scrolling={scrolling} />
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
          <section id="skills" styleName="section">
            <h2 styleName="subtitle">Skills</h2>
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
