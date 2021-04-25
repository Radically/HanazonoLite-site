module.exports = {
  siteMetadata: {
    title: "Hanazono Lite",
    description:
      "Lightweight, automatically generated version of the pan-CJK HanaMin font",
    url: "https://radically.github.io/hanazonolite",
    twitterUsername: "@transfusian",
    siteUrl: "https://radically.github.io/hanazonolite",
    image: "/ogp.png",
  },
  plugins: [
    {
      resolve: "@transfusion/gatsby-plugin-use-query-params",
      options: {
        preventScrollIfIncludes: ["?"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-snippets`,
        path: `${__dirname}/src/markdown-snippets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: "›",
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "user",
                host: "machine",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        dark: { mainColor: "#4db6ac", backgroundColor: "#303030" },
        light: { mainColor: "#00695c", backgroundColor: "#fafafa" },
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
