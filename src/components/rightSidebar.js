import React from 'react';
import PropType from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'react-emotion';
import './styles.css';
import config from '../../config';

const Sidebar = styled('aside')`
  width: 100%;
  background-color: #fff;
  border-right: 1px solid #ede7f3;
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 24px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

const ListItem = styled(({ key, to, children }) => (
  <li key={key}>
    <a href={to}>{children}</a>
  </li>
))`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: rgb(116, 76, 188) !important;
    }
  }
`;

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let finalNavItems;
      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        allMdx.edges.map(item => {
          if (item === undefined) return [];

          let innerItems;
          const fullSlugPath = config.gatsby.pathPrefix + item.node.fields.slug;

          if (
            item.node.fields.slug === location.pathname ||
            fullSlugPath === location.pathname
          ) {
            if (item.node.tableOfContents.items) {
              innerItems = item.node.tableOfContents.items.map(
                (innerItem, index) => {
                  const itemId = innerItem.title
                    ? innerItem.title.replace(/\s+/g, '').toLowerCase()
                    : '#';
                  return (
                    <ListItem key={index} to={`#${itemId}`} level={1}>
                      {innerItem.title}
                    </ListItem>
                  );
                }
              );
            }
          }

          return innerItems;
        });
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <Sidebar>
            <ul className="rightSideBarUL">
              <div className="rightSideTitle">CONTENTS</div>
              {finalNavItems}
            </ul>
          </Sidebar>
        );
      }
      return (
        <Sidebar>
          <ul></ul>
        </Sidebar>
      );
    }}
  />
);

SidebarLayout.propTypes = {
  location: PropType.string,
};

export default SidebarLayout;
