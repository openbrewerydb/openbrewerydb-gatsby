import React from 'react';
import PropType from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';

const Link = ({ to, className, children }) =>
  isAbsoluteUrl(to) ? (
    <a href={to} className={className}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={to} className={className}>
      {children}
    </GatsbyLink>
  );

Link.propTypes = {
  to: PropType.string,
  children: PropType.array,
  className: PropType.string,
};

export default Link;
