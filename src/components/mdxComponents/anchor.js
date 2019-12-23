import React from 'react';
import PropTypes from 'prop-types';

const AnchorTag = ({ children: link, href }) => {
  if (link) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    );
  }
  return null;
};

AnchorTag.propTypes = {
  children: PropTypes.array,
  href: PropTypes.string,
};

export default AnchorTag;
