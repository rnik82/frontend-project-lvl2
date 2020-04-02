/* eslint-disable no-undef */

import genDiff from '../src';

const expected = `{
  host: hexlet.io
- timeout: 50
+ timeout: 20
- proxy: 123.234.53.22
- follow: false
+ verbose: true
}`;

const pathToBefore = './__tests__/fixtures/before';
const pathToAfter = './__tests__/fixtures/after';
const absolutPathToBefore = `${__dirname}/fixtures/before`;
const absolutPathToAfter = `${__dirname}/fixtures/after`;

describe.each([
  [`${pathToBefore}.json`, `${pathToAfter}.json`,
  `${absolutPathToBefore}.json`, `${absolutPathToAfter}.json`],
  [`${pathToBefore}.yml`, `${pathToAfter}.yml`,
  `${absolutPathToBefore}.yml`, `${absolutPathToAfter}.yml`],
  [`${pathToBefore}.ini`, `${pathToAfter}.yml`,
  `${absolutPathToBefore}.yml`, `${absolutPathToAfter}.yml`],
])('genDiff', (a, b, c, d) => {
  test('check .json', () => {
    expect(genDiff(a, b)).toBe(expected);
    expect(genDiff(c, d)).toBe(expected);
  });

  test('check .yml', () => {
    expect(genDiff(a, b)).toBe(expected);
    expect(genDiff(c, d)).toBe(expected);
  });

  test('check .ini', () => {
    expect(genDiff(a, b)).toBe(expected);
    expect(genDiff(c, d)).toBe(expected);
  });
});
