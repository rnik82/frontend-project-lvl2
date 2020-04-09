/* eslint-disable no-undef */

import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

let expected;
let expectedPlain;

beforeAll(() => {
  expected = readFile('result.txt').trim();
  expectedPlain = readFile('resultPlain.txt').trim();
});

test('json', () => {
  const before = getFixturePath('before.json');
  const after = getFixturePath('after.json');
  expect(genDiff(before, after)).toBe(expected);
  expect(genDiff(before, after, 'plain')).toBe(expectedPlain);
});

test('yml', () => {
  const before = getFixturePath('before.yml');
  const after = getFixturePath('after.yml');
  expect(genDiff(before, after)).toEqual(expected);
  expect(genDiff(before, after, 'plain')).toBe(expectedPlain);
});

test('ini', () => {
  const before = getFixturePath('before.ini');
  const after = getFixturePath('after.ini');
  expect(genDiff(before, after)).toEqual(expected);
  expect(genDiff(before, after, 'plain')).toBe(expectedPlain);
});
