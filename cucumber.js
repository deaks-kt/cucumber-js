common = '--strict --format rerun:@rerun.txt'

module.exports = {
  build: common + ' --format progress',
  'default': common,
  'ignore-es6': '--tags ~@es6'
};
