const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://www.openbrewerydb.org',
    gaTrackingId: 'UA-122476813-1',
  },
  header: {
    logo: '',
    logoLink: 'https://www.openbrewerydb.org',
    title: 'Open Brewery DB',
    githubUrl: 'https://github.com/openbrewerydb/openbrewerydb-gatsby',
    helpUrl: '',
    tweetText: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/',
      '/documentation',
      '/projects',
      '/faq',
      '/dataset',
      '/credits',
    ],
    links: [],
    frontline: false,
    ignoreIndex: false,
  },
  siteMetadata: {
    title: 'Open Brewery DB',
    description:
      'Open Brewery DB is a public database and API of United States breweries built for web developers.',
    ogImage: '/obdb-og.jpg',
    docsLocation:
      'https://github.com/openbrewerydb/openbrewerydb-gatsby/tree/master/content',
    favicon: '/favicon.ico',
  },
};

module.exports = config;
