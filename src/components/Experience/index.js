import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './experience.scss';

import ExperienceList from './List';
import ExperienceData from '../../data/Experience';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: ExperienceData,
      showJobDescription: false
    }
  }

  render () {
    let { experience, showJobDescription } = this.state;

    return (
      <section id="exp" styleName="experience">
        <h2 styleName="experience__title">Experience</h2>
        <ExperienceList jobs={experience} showJobDescription={showJobDescription} />
      </section>
    )
  }
}

export default CSSModules(Experience, styles);
