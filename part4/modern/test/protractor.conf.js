exports.config = {
  baseUrl: 'http://localhost:19876/',

  // use `npm run e2e`
  specs: [
    'e2e/**/*.ts'
  ],
  exclude: [],

  framework: 'jasmine',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: true,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function() {
    require('ts-babel-node-extendable').register({ compilerOptions: { allowJs: false }, disableWarnings: true, fast: true });
  },

  plugins: [{
    package: 'aurelia-tools/plugins/protractor'
  }]
};
