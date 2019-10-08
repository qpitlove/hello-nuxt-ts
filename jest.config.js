module.exports = {
  rootDir: 'src',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'jsx', 'vue', 'json', 'ts', 'tsx'],
  transform: {
    // '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  'collectCoverage': true,
  'collectCoverageFrom': [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ]
};

// module.exports = {
//   moduleFileExtensions: [
//     'js',
//     'jsx',
//     'json',
//     'vue',
//     'ts',
//     'tsx'
//   ],
//   transform: {
//     '^.+\\.vue$': 'vue-jest',
//     '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
//     '^.+\\.tsx?$': 'ts-jest'
//   },
//   transformIgnorePatterns: [
//     '/node_modules/'
//   ],
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1',
//     '^~/(.*)$': '<rootDir>/src/$1',
//   },
//   coverageReporters: ["html", "text-summary"],
//   coverageDirectory: "<rootDir>/tmp/coverage",
//   collectCoverage: false, // default: disable
//   collectCoverageFrom: [
//     'src/**/*'
//   ],
//   snapshotSerializers: [
//     'jest-serializer-vue'
//   ],
//   testMatch: [
//     '**/tests/unit/**/*.(test|spec).(js|jsx|ts|tsx)|**(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx|ts|tsx)'
//   ],
//   testURL: 'http://localhost/',
//   watchPlugins: [
//     'jest-watch-typeahead/filename',
//     'jest-watch-typeahead/testname'
//   ],
//   globals: {
//     'ts-jest': {
//       babelConfig: true
//     }
//   }
// };
