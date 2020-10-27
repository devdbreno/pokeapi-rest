module.exports = {
  ...require('./jest.config'),
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  coverageDirectory: 'coverage/unit'
}
