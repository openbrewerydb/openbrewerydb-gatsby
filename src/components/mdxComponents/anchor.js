import React from 'react';
import PropType from 'prop-types';

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
  children: PropType.oneOfType([PropType.array, PropType.string]),
  href: PropType.string,
};

export default AnchorTag;
