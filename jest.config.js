/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  /* Use babel-jest to transpile tests with the next/babel preset
  https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  // Jest initial setup
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
