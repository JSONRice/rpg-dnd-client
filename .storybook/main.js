// main.js
module.exports = {
  stories: [
    '../**/*.stories.@(ts|tsx|js|jsx)',
    '../**/*.stories.mdx',
    '../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    },
  ],
  core: { builder: 'webpack5' },
  webpackFinal: async (config) => { // the Chakra UI-critical part
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": "@emotion/react",
          "@emotion/styled": "@emotion/styled",
          "emotion-theming": "@emotion/react",
        },
      },
    };
  },
};
