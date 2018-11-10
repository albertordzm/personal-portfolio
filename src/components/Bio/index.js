import React from 'react';
import PropTypes from 'prop-types';
import './bio.scss';

const Bio = (props) => {
  return (
    <section id="bio" styleName="bio">
      <h2 styleName="bio__title">Bio</h2>
      <article styleName="bio__body">
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
  )
};

export default Bio;
