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
        icon: 'src/images/uxpin-icon-set_like.png',
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
  ],
}
