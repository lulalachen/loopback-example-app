/**
 * Force memory adapter
 */

process.env.DB = 'memory';

/**
 * Utils
 */

request = require('supertest');
app = require('../app');
assert = require('assert');
importer = require('../test-data/import');

/**
 * Test Data
 */

testData = {
  weapons: require('../test-data/weapons'),
  locations: require('../test-data/locations')
};

before(function (done) {
  importer.on('error', done);
  importer.on('done', done);
});