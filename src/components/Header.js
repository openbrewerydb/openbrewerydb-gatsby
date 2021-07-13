import React from 'react';
import PropType from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn';
import Link from './link';
import Search from './search/index';
import Sidebar from './sidebar';
import config from '../../config.js';
import './styles.css';

const help = require('./images/help.svg');
const unlockedSVG = require('./images/unlocked.svg');
const beerSVG = require('./images/beer-pint.svg');
const databaseSVG = require('./images/database.svg');
const twitter = require('./images/twitter.svg');

const isSearchEnabled = !!(
  config.header.search && config.header.search.enabled
);

const searchIndices = [];
if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

const Header = ({ location }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            helpUrl
            tweetText
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={data => {
      const {
        site: {
          siteMetadata: {
            headerTitle,
            githubUrl,
            helpUrl,
            tweetText,
            logo,
            headerLinks,
          },
        },
      } = data;
      const finalLogoLink = logo.link !== '' ? logo.link : '/';

      return (
        <div className="navBarWrapper">
          <nav className="navbar navbar-default navBarDefault">
            <div className="navbar-header navBarHeader">
              <Link to={finalLogoLink} className="navbar-brand navBarBrand">
                <img
                  className="img-responsive"
                  src={unlockedSVG}
                  alt="Open (lock)"
                />
                <img className="img-responsive" src={beerSVG} alt="Brewery" />
                <img className="img-responsive" src={databaseSVG} alt="DB" />
                <div className="headerTitle">{headerTitle}</div>
              </Link>
              <button
                type="button"
                className="navbar-toggle collapsed navBarToggle"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            {isSearchEnabled ? (
              <div className="searchWrapper hidden-xs navBarUL">
                <Search collapse indices={searchIndices} />
              </div>
            ) : null}
            <div
              id="navbar"
              className="navbar-collapse collapse navBarCollapse"
            >
              <div className="visible-xs">
                <Sidebar location={location} />
                <hr />
                {isSearchEnabled ? (
                  <div className="searchWrapper navBarUL">
                    <Search collapse indices={searchIndices} />
                  </div>
                ) : null}
              </div>
              <ul className="nav navbar-nav navBarUL navBarNav navbar-right navBarULRight">
                {headerLinks.map((link, key) => {
                  if (link.link === '' || link.text === '') return '';
                  return (
                    <li key={key}>
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    </li>
                  );
                })}
                {helpUrl !== '' ? (
                  <li>
                    <a href={helpUrl}>
                      <img src={help} alt="Help icon" />
                    </a>
                  </li>
                ) : null}
                {tweetText !== '' || githubUrl !== '' ? (
                  <li className="divider hidden-xs"></li>
                ) : null}
                {tweetText !== '' ? (
                  <li>
                    <a
                      href={`https://twitter.com/intent/tweet?&text=${tweetText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="shareIcon" src={twitter} alt="Twitter" />
                    </a>
                  </li>
                ) : null}
                {githubUrl !== '' ? (
                  <li className="githubBtn">
                    <GitHubButton
                      href={githubUrl}
                      data-show-count="true"
                      aria-label="Star on GitHub"
                    >
                      Star
                    </GitHubButton>
                  </li>
                ) : null}
              </ul>
            </div>
          </nav>
        </div>
      );
    }}
  />
);

Header.propTypes = {
  location: PropType.object,
};

export default Header;
