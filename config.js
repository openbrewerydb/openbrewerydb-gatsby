const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://www.openbrewerydb.org',
    gaTrackingId: 'UA-122476813-1',
  },
  header: {
    logo:
      'https://res.cloudinary.com/wanderingleafstudios/image/upload/v1572317242/openbrewerydb/OpenBreweryDBLogo.png',
    logoLink: 'https://www.openbrewerydb.org',
    title: 'Open Brewery DB',
    githubUrl: 'https://github.com/chrisjm/openbrewerydb-gatsby',
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
    ogImage:
      'https://res.cloudinary.com/wanderingleafstudios/image/upload/v1572317242/openbrewerydb/OpenBreweryDBLogo.png',
    docsLocation:
      'https://github.com/chrisjm/openbrewerydb-gatsby/tree/master/content',
    favicon:
      'https://res.cloudinary.com/wanderingleafstudios/image/upload/c_scale,w_48/v1572317576/openbrewerydb/OpenBreweryDBLogo-500x500.ico',
  },
};

module.exports = config;
