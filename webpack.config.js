const path = require('path') // import path from 'path'
const webpack = require('webpack') // import webpack extras

// Extra plugiun to inject the bundle tag into our HTML file
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Export a function that will receive command line args and return
// the webpack config object.

const electronConfig = (env, argv) => {
  const config = {
    target: 'electron-main',
    // Main code entrypoint
    entry: {
      electron: path.join(__dirname, 'client/electron/main.js')
    },

    node: {
      __dirname: false,
      __filename: false
    },

    // Bundled output
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, 'public')
    },

    // Rules for processing all included files
    module: {
      rules: [{
        // JS & JSX files: Transpiles with Babel to legacy JavaScript
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-async-to-generator']
          }
        }
      }]
    }
  }

  // Add minification of files when in production mode
  if (argv.mode === 'production') {
    config.module.rules[0].use.options.presets.push('minify')
    config.module.rules[0].use.options.plugins.push('transform-remove-console')
  }

  // Enable extra development mode options (source maps and the dev server)
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map'
  }

  return config
}

const clientConfig = (env, argv) => {
  const config = {
    // Main code entrypoint
    entry: {
      app: path.join(__dirname, 'client/calculator.js')
    },

    // Bundled output
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, 'public')
    },

    // Extract 3rd party libs
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },

    // Rules for processing all included files
    module: {
      rules: [{
        // CSS files: Transpiles to JSS
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        // JS & JSX files: Transpiles with Babel to legacy JavaScript
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-async-to-generator']
          }
        }
      }]
    },

    // Define extra webpack plugins
    plugins: [
      // Configure our HTML script injection plugin
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'client/calculator.html'),
        filename: path.join(__dirname, 'public/calculator.html')
      })
    ]
  }

  // Add minification of files when in production mode
  if (argv.mode === 'production') {
    config.module.rules[1].use.options.presets.push('minify')
    config.module.rules[1].use.options.plugins.push('transform-remove-console')
  }

  // Enable extra development mode options (source maps and the dev server)
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map'
  }

  return config
}

module.exports = [electronConfig, clientConfig]

// module.exports = (env, argv) => {
//   const config = {
//     target: 'electron-main',
//     // Main code entrypoint
//     entry: {
//       app: path.join(__dirname, 'client/calculator.js'),
//       electron: path.join(__dirname, 'client/electron/main.js')
//     },

//     // Bundled output
//     output: {
//       filename: '[name].bundle.js',
//       path: path.join(__dirname, 'public')
//     },

//     // Extract 3rd party libs
//     optimization: {
//       splitChunks: {
//         cacheGroups: {
//           commons: {
//             test: /[\\/]node_modules[\\/]/,
//             name: 'vendors',
//             chunks: 'all'
//           }
//         }
//       }
//     },

//     // Rules for processing all included files
//     module: {
//       rules: [{
//         // CSS files: Transpiles to JSS, needed for Bootstrap, may be removable here
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       }, {
//         // JS & JSX files: Transpiles with Babel to legacy JavaScript
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//             plugins: ['@babel/plugin-transform-async-to-generator']
//           }
//         }
//       }]
//     },

//     // Define extra webpack plugins
//     plugins: [
//       // Configure our HTML script injection plugin
//       new HtmlWebpackPlugin({
//         template: path.join(__dirname, 'client/calculator.html'),
//         filename: path.join(__dirname, 'public/calculator.html'),
//         excludeChunks: ['electron']
//       }),
//       // Add global references to jquery and popper (for Bootstrap), may be removable
//       new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery',
//         'window.jQuery': 'jquery',
//         Popper: ['popper.js', 'default']
//       })
//     ]
//   }

//   // Add minification of files when in production mode
//   if (argv.mode === 'production') {
//     config.module.rules[1].use.options.presets.push('minify')
//     config.module.rules[1].use.options.plugins.push('transform-remove-console')
//   }

//   // Enable extra development mode options (source maps and the dev server)
//   if (argv.mode === 'development') {
//     config.devtool = 'inline-source-map'
//   }

//   // Return the final webpack configuration
//   return config
// }
