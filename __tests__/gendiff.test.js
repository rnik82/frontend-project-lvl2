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

test.each([
  ['before.json', 'after.json'],
  ['before.yml', 'after.yml'],
  ['before.ini', 'after.ini'],
])('gendiff %s %s', (b, a) => {
  const pathToBefore = getFixturePath(b);
  const pathToAfter = getFixturePath(a);
  expect(genDiff(pathToBefore, pathToAfter)).toBe(expectedRecursive);
  expect(genDiff(pathToBefore, pathToAfter, 'plain')).toBe(expectedPlain);
  expect(genDiff(pathToBefore, pathToAfter, 'json')).toBe(expectedJson);
  });
