import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './skills.scss';

import SkillList from './List';

const Skills = () => {
  return (
    <section id="skills" styleName="skills">
      <h2 styleName="skills__title">Skills</h2>
      <SkillList />
    </section>
  )
}

export default CSSModules(Skills, styles);
