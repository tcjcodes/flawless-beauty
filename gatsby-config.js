module.exports = {
  siteMetadata: {
    title: 'Flawless Beauty with E&C',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'great vibes',
          `raleway\:400,400i,600`
        ]
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
  ],
};
