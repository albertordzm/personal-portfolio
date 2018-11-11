import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './experience.scss';

class ExperienceItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    };

    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDescription() {
    this.setState({
      showDescription: !this.state.showDescription
    });
  }

  render() {
    const { job } = this.props;

    return (
      <Fragment>
        <div styleName="jobs__item" onClick={this.toggleDescription}>
          <h3 styleName="jobs__title">{job.role}</h3>
          <p styleName="jobs__company">{job.company}</p>
          <p styleName="jobs__duration">{`${job.start} - ${job.end}`}</p>
        </div>

      </Fragment>
    );
  }
}

ExperienceItem.propTypes = {
  job: PropTypes.object.isRequired
};

export default ExperienceItem;
