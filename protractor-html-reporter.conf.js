// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');
//var ScreenshotProcessor = require('./e2e/helpers/screen_shot_reporter.ts');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'tmp/screenshots',
  filename: 'test-report.html',
  cleanDestination: true,
  ignoreSkippedSpecs: true,
  captureOnlyFailedSpecs: false
});


exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'firefox'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
    jasmine.getEnv().addReporter(new SpecReporter());
  },
};