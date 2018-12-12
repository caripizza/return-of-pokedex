/* eslint-env node */
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins:
          [
            require('postcss-simple-vars')(),
            require('autoprefixer')(),
            require('postcss-nested')()
          ],
      } 
    }
  }
};
