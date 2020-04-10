/* eslint-disable no-undef */

import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

let expectedRecursive;
let expectedPlain;
let expectedJson;

beforeAll(() => {
  expectedRecursive = readFile('resultRecursive.txt').trim();
  expectedPlain = readFile('resultPlain.txt').trim();
  expectedJson = readFile('resultJson.txt').trim();
});

describe.each([
  [getFixturePath('before.json'), getFixturePath('after.json')],
  [getFixturePath('before.yml'), getFixturePath('after.yml')],
  [getFixturePath('before.ini'), getFixturePath('after.ini')],
])('%# (0 - json, 1 - yml, 2 - ini)', (b, a) => {
  test('--flag recursive', () => {
    expect(genDiff(b, a)).toBe(expectedRecursive);
  });

  test('--flag plain', () => {
    expect(genDiff(b, a, 'plain')).toBe(expectedPlain);
  });

  test('--flag json', () => {
    expect(genDiff(b, a, 'json')).toBe(expectedJson);
  });
});
