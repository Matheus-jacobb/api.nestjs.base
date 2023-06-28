import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  rootDir: '.',
  testRegex: [
    '.*\\.e2e-spec\\.ts$',
    '.*\\.spec\\.ts$',
  ],
  transform: {
    ".+\\.(t|j)s$": "ts-jest"
  },
  collectCoverageFrom: [
    'src/**/*.(t|j)s',
    'libs/**/*.(t|j)s',
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  roots: [
    '<rootDir>/src/',
    '<rootDir>/test/',
    '<rootDir>/libs/',
  ],
  moduleNameMapper: {
    "@common/swagger/(.*)": "<rootDir>/libs/swagger/src/$1",
    "@common/swagger": "<rootDir>/libs/swagger/src",
    "@common/body-parser/(.*)": "<rootDir>/libs/body-parser/src/$1",
    "@common/body-parser": "<rootDir>/libs/body-parser/src",
    "@common/validation/(.*)": "<rootDir>/libs/validation/src/$1",
    "@common/validation": "<rootDir>/libs/validation/src",
    "@common/logger(.*)": "<rootDir>/libs/logger/src/$1",
    "@common/logger": "<rootDir>/libs/logger/src",
    "@common/config/(.*)": "<rootDir>/libs/config/src/$1",
    "@common/config": "<rootDir>/libs/config/src",
    "common/paginated/(.*)": "<rootDir>/libs/paginated/src/$1",
    "common/paginated": "<rootDir>/libs/paginated/src",
    "@common/authorization/(.*)": "<rootDir>/libs/authorization/src/$1",
    "@common/authorization": "<rootDir>/libs/authorization/src",
    "@common/typeorm/(.*)": "<rootDir>/libs/typeorm/src/$1",
    "@common/typeorm": "<rootDir>/libs/typeorm/src",
    "@common/authentication/(.*)": "<rootDir>/libs/authentication/src/$1",
    "@common/authentication": "<rootDir>/libs/authentication/src"
  },
};

export default config;
