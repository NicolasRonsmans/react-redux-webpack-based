'user strict';

import webpack from 'webpack';
import webpackConfig from './webpack.config';

const compiler = webpack(webpackConfig, (err, stats) => {
  console.log(stats.toString({
    colors: true
  }));
});
