import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import ExperienceItem from './ExperienceItem';
import styles from '../styles/experience.scss';

class ExperienceList extends React.Component {
  render() {
    const { jobs } = this.props;

    return (
      <section id="exp" styleName="jobs">
        <h2>Experience</h2>
        <div styleName="jobs__list">
          {jobs.map((job, index) => <ExperienceItem key={index} job={job} />)}
        </div>
      </section>
    );
  }
};

ExperienceList.propTypes = {
  jobs: PropTypes.array.isRequired
};

export default CSSModules(ExperienceList, styles);
