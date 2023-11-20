// tests/unit/test.js
const { test, expect } = require('@jest/globals');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, '../../src/index.html'), 'utf8');

let dom;

beforeEach(() => {
  // Create a new JSDOM instance for each test
  dom = new JSDOM(html, { runScripts: 'dangerously' });
});

test('Example unit test for HTML content', () => {
  // Test your HTML content here using Jest assertions
  const titleElement = dom.window.document.querySelector('.title');
  expect(titleElement.textContent).toBe('Create Amazing Website');
  // Add more HTML content assertions as needed
});
