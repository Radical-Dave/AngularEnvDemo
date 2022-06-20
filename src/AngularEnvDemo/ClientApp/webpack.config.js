const webpack = require('webpack')
const keyPrefix = 'ENV_DEMO_';
const keys = Object.keys(process.env).filter((key) => key.startsWith(keyPrefix));
//const keys = ["ENVIRONMENT", "ENV_DEMO_KEY", "ENV_DEMO_NAME", "ENV_DEMO_URL"]
let env = {};
keys.forEach(key => env[key] = JSON.stringify(process.env[key]));
console.log('env=', env);


module.exports = {
  resolve: {
    fallback: {
      "fs": require.resolve("fs-extra/lib/fs"),
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser")
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
      ...buildVariables
    }
    })
  ]
}
