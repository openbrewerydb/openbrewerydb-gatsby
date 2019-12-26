import React from 'react';
import PropType from 'prop-types';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({
  className = '',
  setCollapsed,
  collapsed,
  url,
  title,
  items,
}) => {
  const isCollapsed = collapsed[url];
  const collapse = () => {
    setCollapsed(url);
  };
  const hasChildren = items.length !== 0;
  let location;
  if (typeof document !== 'undefined') {
    location = document.location;
  }
  const active =
    location &&
    (location.pathname === url ||
      location.pathname === config.gatsby.pathPrefix + url);
  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;
  return (
    <li className={calculatedClassName}>
      {!config.sidebar.frontLine && title && hasChildren ? (
        <button type="button" onClick={collapse} className="collapser">
          {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
        </button>
      ) : null}

      {title && <Link to={url}>{title}</Link>}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map(item => (
            <TreeNode
              key={item.url}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

TreeNode.propTypes = {
  className: PropType.string,
  setCollapsed: PropType.func,
  collapsed: PropType.object,
  url: PropType.string,
  title: PropType.string,
  items: PropType.array,
  rest: PropType.array,
};

export default TreeNode;
