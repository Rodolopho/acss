
const path=require("path");
const webpack = require('webpack');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const fs=require("fs");


const serverConfig = {
  target: 'node',
  entry:"./buildModule.js",
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'statementMaker.js'
  }
  
};

const clientConfig = {
  target: 'web', // <=== can be omitted as default is 'web'
  
  entry:"./build.js",
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"acss.js"
	},
	devServer:{
		contentBase:'./',
		before: function(app, server) {
      		app.post('/acss-live-update/', function(req, res) {
      			req.pipe(fs.createWriteStream('./public/css/ajax.css'));
      		});
		},
	},
	devtool:"source-map",
	plugins: [
        new UnminifiedWebpackPlugin()
    ]
  //…
};

module.exports = [ serverConfig, clientConfig ];
// module.exports={
// 	entry:{
// 		acss:"./build.js",
// 		 statementMaker:'./buildModule.js',
// 	},
// 	output:{
// 		path:path.resolve(__dirname,"dist"),
// 		filename:"[name].js"
// 	},
// 	devServer:{
// 		contentBase:'./',
// 		before: function(app, server) {
//       		app.post('/acss-live-update/', function(req, res) {
//       			req.pipe(fs.createWriteStream('./public/css/ajax.css'));
//       		});
// 		},
// 	},
// 	module: {
// 	  rules: [
// 	    {
// 	      test: /Maker\.js$/,
// 	      exclude: /(node_modules|bower_components)/,
// 	      use: {
// 	        loader: 'babel-loader',
// 	        options: {
// 	          presets: ['@babel/preset-env']
// 	        }
// 	      }
// 	    }
// 	  ]
// 	},
// 	devtool:"inline-source-map",
// 	plugins: [
//         new UnminifiedWebpackPlugin()
//     ]
// }