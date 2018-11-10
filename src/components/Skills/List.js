import React from 'react';
import PropTypes from 'prop-types';
import './skills.scss';

import CssIcon from '../../icons/CssIcon';
import CSharpIcon from '../../icons/CSharpIcon';
import DotNetIcon from '../../icons/DotNetIcon';
import HtmlIcon from '../../icons/HtmlIcon';
import NodeIcon from '../../icons/NodeIcon';
import ReactIcon from '../../icons/ReactIcon';
import SassIcon from '../../icons/SassIcon';
import SqlServerIcon from '../../icons/SqlServerIcon';

class SkillList extends React.Component {
  render () {
    return (
      <div styleName="skills__list">
        <div styleName="skills__section">
          <HtmlIcon />
          <CssIcon />
          <SassIcon />
          <ReactIcon />
        </div>
        <hr styleName="skills__separator" />
        <div styleName="skills__section">
          <CSharpIcon />
          <DotNetIcon />
          <NodeIcon />
          <SqlServerIcon />
        </div>
      </div>
    )
  }
}

export default SkillList;
