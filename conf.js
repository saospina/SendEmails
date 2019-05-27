exports.config = {
    framework: 'jasmine',
    jasmineNodeOpts: {defaultTimeoutInterval: 30000},
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      'browserName': 'chrome'
    },
    specs: ['spec/sendEmail.js'],
    onPrepare: () => {
      browser.manage().window().maximize();
    }
  };