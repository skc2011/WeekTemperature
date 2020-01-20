exports.config = {
    directConnect: true,
    multiCapabilities: [{
        'browserName': 'firefox'
    }],

    framework: 'jasmine2',
    specs: ['Tests/spec.js'],
    onPrepare: function () { 
        browser.manage().window().setSize(710, 900);
        browser.waitForAngularEnabled(false);
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 33000,
        showColors: true
    },
};