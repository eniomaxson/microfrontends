const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "spms",
    projectName: "sclinico-shared",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    target: ["es5", "web"]
    // modify the webpack config however you'd like to by adding to this object
  });
};
