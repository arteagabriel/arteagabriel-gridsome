// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gabriel Arteaga',
  css: {
    loaderOptions: {
      css: {
        localIdentName: process.env.NODE_ENV === 'production' ? 'css-[hash:base64:8]' : '[local]_[hash:base64:8]'
      }
    }
  },
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        // Token is only required if dataset is private
        // or `overlayDrafts` is set to true
        overlayDrafts: false,
        watchMode: false
      }
    }
  ]
};
