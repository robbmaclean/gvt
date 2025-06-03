module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-jasmine-html-reporter'),
      require('karma-spec-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: require('path').join(__dirname, 'coverage'),
      subdir: '.',
      check: {
        global: {
          statements: 0,
          branches: 0,
          functions: 0,
          lines: 0
        }
      }
    },
    browsers: ['ChromeHeadless'],
    restartOnFileChange: true
  });
};
