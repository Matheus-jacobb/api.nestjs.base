export default () => ({
  NODE_ENV: process.env.NODE_ENV,
  LOG_LEVEL: process.env.LOG_LEVEL,
  VERSION: process.env.npm_package_version,
});
