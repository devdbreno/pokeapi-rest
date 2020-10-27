module.exports = {
  ...require('./jest.config'),
  testMatch: ['<rootDir>/test/**/*.e2e-spec.ts'],
  coverageDirectory: 'coverage/e2e'
}
