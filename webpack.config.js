module.exports = {
  entry: [
    './app/app.jsx',
  ],
  output: {
    path: __dirname ,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Property: __dirname + '/app/components/signupflow/Property.jsx',
      NavBar: __dirname +'/app/components/signupflow/NavBar.jsx',
      Tenant: __dirname + '/app/components/signupflow/Tenant.jsx',
      Rent: __dirname + '/app/components/signupflow/Rent.jsx',
      BankInfo: __dirname + '/app/components/signupflow/BankInfo.jsx',
      SignUpSuccess: __dirname + '/app/components/signupflow/SignUpSuccess.jsx',
      reducers: __dirname + '/app/reducers/reducers.jsx',
      actions: __dirname + '/app/actions/actions.jsx',
      configureStore: __dirname + '/app/store/configureStore.jsx',
      Navigation: __dirname + '/app/components/signupflow/Navigation.jsx',
      SignUpContainer: __dirname + '/app/components/SignUpContainer.jsx',
      LandingPageContainer : __dirname + '/app/components/LandingPageContainer.jsx',
      Main: __dirname + '/app/components/Main.jsx',
      App:  __dirname + '/app/app.jsx',
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {

    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0']
            }
        }]
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }

    ]
  },

  devtool: 'cheap-module-eval-source-map'
};
