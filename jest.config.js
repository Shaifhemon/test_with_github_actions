module.exports = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  transformIgnorePatterns: ['/node_modules/(?!puppeteer)']
  // Other Jest configurations...
};
