var webdriver = require('selenium-webdriver');
require('chai').should();

var browser = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.firefox())
    .build();

var steps = function () {
  this.When(/^I go the Google page$/, function (callback) {
    browser.get('http://www.google.com').then(function () { callback(); });
  });

  this.Then(/^the title is Google$/, function (callback) {
    browser.getTitle().then(function (title) {
      title.should.include('Google');
      callback();
    });
  });
};

module.exports = steps;
