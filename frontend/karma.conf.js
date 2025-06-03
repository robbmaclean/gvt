module.exports = function (config) {
  config.set({
    // ... other config options
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },
    // Add this to avoid issues with sandboxing in GitHub Actions
    browserNoActivityTimeout: 60000
  });
};
