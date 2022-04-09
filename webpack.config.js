
const path=require("path");
const webpack = require('webpack');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');


const serverConfig = {
  target: 'node',
  entry:"./buildModule.js",
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'statementMaker.js'
  }
  
};

const prodConfig = {
  target: 'web', // <=== can be omitted as default is 'web'
  
  entry:"./build.js",
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"acss.js"
	},
	devServer:{
		static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
	devtool:"source-map",
	plugins: [
        new UnminifiedWebpackPlugin()
    ]
  //…
};
//prod
const clientConfig = {
  mode: 'production',
  
  entry:"./build.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"acss.min.js"
  },
  
  plugins: [
        new UnminifiedWebpackPlugin()
    ]
  //…
};
module.exports = [ serverConfig, clientConfig,prodConfig ];
