import React from 'react';
import PropType from 'prop-types';
import './components/styles.css';

const YoutubeEmbed = ({ link }) => (
  <div className="video-responsive">
    <iframe
      width="750"
      height="422"
      src={link}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube Video"
    ></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  link: PropType.string,
};

export default YoutubeEmbed;
