var webpack = require('webpack');

module.exports = {
  devtool: 'eval', // eval, source-map, eval-source-map
  externals: {
    // Add global variables you would like to import
    'react': 'React',
    'react-router': 'ReactRouter',
    'react-router-ssr': 'ReactRouterSSR',
    'react-meteor-data': 'ReactMeteorData',
    'blaze-to-react': 'BlazeToReact'
  },
  devServer: {
    // You can change this to your server IP address to access it remotely
    host: 'localhost'
  },
  resolve: {
    root: __dirname + '/..',
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss']
  }
};
