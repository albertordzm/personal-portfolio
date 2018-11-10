import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './experience.scss';

import ExperienceItem from './Item';

class ExperienceList extends React.Component {
  render() {
    const { jobs, showJobDescription, jobDescription } = this.props;
    const descriptionStyle = showJobDescription ? 'jobs__description--show' : 'jobs__description--hide';

    return (
      <>
        <div styleName="jobs__list">
          {jobs.map((job, index) => <ExperienceItem key={index} job={job} />)}
        </div>
        <div styleName={descriptionStyle}>
          {jobDescription}
        </div>
      </>
    );
  }
};

ExperienceList.propTypes = {
  jobs: PropTypes.array.isRequired,
  jobDescription: PropTypes.string,
  showJobDescription: PropTypes.bool.isRequired
};

export default ExperienceList;
