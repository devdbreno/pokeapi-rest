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
    '@shared/(.*)': '<rootDir>/src/modules/shared/$1',
    '@trainer/(.*)': '<rootDir>/src/modules/trainer/$1',
    '@pokeapi/(.*)': '<rootDir>/src/services/pokeapi/$1'
  }
}
