import React from 'react';
import PropType from 'prop-types';
import './components/styles.css';

const githubIcon = require('./components/images/github.svg');

const GithubLink = ({ link, text }) => (
  <a href={link} className="githubButton">
    <img className="githubIcon" src={githubIcon} alt="Github Icon" />
    <span className="githubText">{text}</span>
  </a>
);

GithubLink.propTypes = {
  link: PropType.string,
  text: PropType.string,
};

export default GithubLink;
