module.exports = {
  siteMetadata: {
    title: "My first Gatsby project",
    description: "some random description",
    author: "rahul singh",
    data: ["item1", "item2"],
    person: {
      name: "raj",
      age: 28,
    },
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
    },
  ],
}
