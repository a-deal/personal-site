module.exports = {
  siteMetadata: {
    title: 'Andrew Deal',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Andrew Deal's Website",
        short_name: 'Andrew Deal',
        start_url: '/',
        icon: 'src/images/favicon.png',
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
  ],
}
