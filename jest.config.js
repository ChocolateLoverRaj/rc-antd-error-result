module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      babelConfig: './babelConfigCjs.json'
    }
  },
  setupFilesAfterEnv: ['jest-mock-console/dist/setupTestFramework.js']
}
