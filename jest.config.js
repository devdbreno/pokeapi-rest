module.exports = {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testEnvironment: 'node',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: ['.module.ts', 'main.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@trainer/(.*)': '<rootDir>/src/modules/trainer/$1',
    '@entities/(.*)': '<rootDir>/src/entities/$1',
    '@gateways/(.*)': '<rootDir>/src/gateways/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1'
  }
}
