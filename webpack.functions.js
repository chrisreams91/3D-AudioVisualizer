const nodeExternals = require("webpack-node-externals");

module.exports = {
  optimization: { minimize: false },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
};
