const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['uniforms-bridge-json-schema', 'uniforms', 'uniforms-semantic']);

const nextConfig = {};
module.exports = withPlugins([withTM], nextConfig);
