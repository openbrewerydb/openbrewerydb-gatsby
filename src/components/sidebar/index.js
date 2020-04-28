import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled-base';
import { ExternalLink } from 'react-feather';
import Tree from './tree';
import NewsletterSignup from '../NewsletterSignup';
import '../styles.css';
import config from '../../../config';

const ListItem = styled(({ key, to, children }) => (
  <li key={key}>
    <a href={to}>{children}</a>
  </li>
))`
  list-style: none;

  a {
    color: #000;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: #000 !important;
    }

    ${props =>
      props.active &&
      `
      color: rgb(255, 188, 0);
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;

const Sidebar = styled('aside')`
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 0px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  padding-right: 0;
  background-color: rgb(255, 188, 0);
  /* Safari 4-5, Chrome 1-9 */
  background: linear-gradient(rgb(255, 188, 0), rgb(200, 150, 0));
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(rgb(255, 188, 0)),
    to(rgb(200, 150, 0))
  );
  /* Safari 5.1, Chrome 10+ */
  background: -webkit-linear-gradient(top, rgb(255, 188, 0), rgb(200, 150, 0));
  /* Firefox 3.6+ */
  background: -moz-linear-gradient(top, rgb(255, 188, 0), rgb(200, 150, 0));
  /* IE 10 */
  background: -ms-linear-gradient(top, rgb(255, 188, 0), rgb(200, 150, 0));
  /* Opera 11.10+ */
  background: -o-linear-gradient(top, rgb(255, 188, 0), rgb(200, 150, 0));
  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    background-color: rgb(255, 188, 0);
    background: rgb(255, 188, 0);
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 1023px) {
    width: 100%;
    height: 100vh;
  }
`;

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid rgb(30, 30, 30, 0.3);
  }
`;

const SidebarLayout = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => (
      <Sidebar>
        <ul className="sideBarUL">
          <Tree edges={allMdx.edges} />
          <Divider />
          {config.sidebar.links.map((link, key) => {
            if (link.link === '' || link.text === '') return '';
            return (
              <ListItem key={key} to={link.link}>
                {link.text}
                <ExternalLink size={14} />
              </ListItem>
            );
          })}
        </ul>
        <NewsletterSignup />
      </Sidebar>
    )}
  />
);

export default SidebarLayout;
