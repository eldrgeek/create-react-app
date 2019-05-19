//From https://github.com/cdharris/react-app-rewire-hot-loader

const rewireReactHotLoader = require('react-app-rewire-hot-loader')

module.exports = function override (config, env) {
  console.log("overriding");
  config = rewireReactHotLoader(config, env)
  return config
}