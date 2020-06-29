import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import styled from '@emotion/styled-base';
import { Layout } from '../components';
import NextPrevious from '../components/NextPrevious';
import GithubLink from '../GithubLink';
import '../components/styles.css';
import config from '../../config';

const { forcedNavOrder } = config.sidebar;

const Edit = styled('div')`
  text-align: right;
  padding: 1rem;
`;

function MDXRuntimeTest({ location, data }) {
  const {
    allMdx,
    mdx,
    site: {
      siteMetadata: { docsLocation, title },
    },
  } = data;

  const navItems = allMdx.edges
    .map(({ node }) => node.fields.slug)
    .filter(slug => slug !== '/')
    .sort()
    .reduce(
      (acc, cur) => {
        if (forcedNavOrder.find(url => url === cur)) {
          return { ...acc, [cur]: [cur] };
        }

        const prefix = cur.split('/')[1];

        if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
          return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
        }
        return { ...acc, items: [...acc.items, cur] };
      },
      { items: [] }
    );

  const nav = forcedNavOrder
    .reduce((acc, cur) => acc.concat(navItems[cur]), [])
    .concat(navItems.items)
    .map(slug => {
      if (slug) {
        const { node } = allMdx.edges.find(
          // eslint-disable-next-line no-shadow
          ({ node }) => node.fields.slug === slug
        );

        return { title: node.fields.title, url: node.fields.slug };
      }
      return {};
    });

  // meta tags
  const { metaTitle } = mdx.frontmatter;
  const { metaDescription } = mdx.frontmatter;
  let canonicalUrl = config.gatsby.siteUrl;
  canonicalUrl =
    config.gatsby.pathPrefix !== '/'
      ? canonicalUrl + config.gatsby.pathPrefix
      : canonicalUrl;
  canonicalUrl += mdx.fields.slug;

  return (
    <Layout location={location}>
      <Helmet>
        {metaTitle ? <title>{metaTitle}</title> : null}
        {metaTitle ? <meta name="title" content={metaTitle} /> : null}
        {metaDescription ? (
          <meta name="description" content={metaDescription} />
        ) : null}
        {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
        {metaDescription ? (
          <meta property="og:description" content={metaDescription} />
        ) : null}
        {metaTitle ? (
          <meta property="twitter:title" content={metaTitle} />
        ) : null}
        {metaDescription ? (
          <meta property="twitter:description" content={metaDescription} />
        ) : null}
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className="titleWrapper">
        <h1 className="title">{mdx.fields.title}</h1>
        <Edit className="mobileView">
          <GithubLink
            link={`${docsLocation}/${mdx.parent.relativePath}`}
            text="Edit on GitHub"
          />
        </Edit>
      </div>
      <div className="mainWrapper">
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
      <div className="addPaddTopBottom">
        <NextPrevious mdx={mdx} nav={nav} />
      </div>
    </Layout>
  );
}

MDXRuntimeTest.propTypes = {
  data: PropType.object,
  location: PropType.object,
};

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
      }
    }
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
`;

export default MDXRuntimeTest;
