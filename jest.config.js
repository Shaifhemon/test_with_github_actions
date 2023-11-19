// jest.config.js
module.exports = {
    testEnvironment: 'jsdom', // For DOM-related testing
    testMatch: ['<rootDir>/tests/**/*.test.js'], // Unit tests
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'], // Setup file for Jest environment
    // Other Jest configurations...
  };
  