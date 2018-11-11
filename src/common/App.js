import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './app.scss';

import Footer from './Footer';
import Header from './Header';

import ExperienceData from '../data/Experience';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Index from '../components/Home';
import Skills from '../components/Skills';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: ExperienceData,
      showJobDescription: false,
      activeItem: 'home'
    }

    this.updateActiveItem = this.updateActiveItem.bind(this);
  }

  updateActiveItem(newActiveItem) {
    this.setState({
      activeItem: newActiveItem
    });
  }

  render() {
    const {
      activeItem,
      experience,
      showJobDescription
    } = this.state;

    return (
      <Router>
        <Fragment>
          <Header activeItem={activeItem}
          updateActiveItem={this.updateActiveItem} />
          <main styleName="main">
            <Route path="/" exact component={Index} />
            <Route path="/bio" component={Bio} />
            <Route path="/skills" component={Skills} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />
          </main>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App
