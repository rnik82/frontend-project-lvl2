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

describe('testing gendiff', () => {
  test('.json', () => {
    const pathToBefore = getFixturePath('before.json');
    const pathToAfter = getFixturePath('after.json');
    expect(genDiff(pathToBefore, pathToAfter)).toBe(expectedRecursive);
    expect(genDiff(pathToBefore, pathToAfter, 'plain')).toBe(expectedPlain);
    expect(genDiff(pathToBefore, pathToAfter, 'json')).toBe(expectedJson);
  });

  test('.yml', () => {
    const pathToBefore = getFixturePath('before.yml');
    const pathToAfter = getFixturePath('after.yml');
    expect(genDiff(pathToBefore, pathToAfter)).toBe(expectedRecursive);
    expect(genDiff(pathToBefore, pathToAfter, 'plain')).toBe(expectedPlain);
    expect(genDiff(pathToBefore, pathToAfter, 'json')).toBe(expectedJson);
  });

  test('.ini', () => {
    const pathToBefore = getFixturePath('before.ini');
    const pathToAfter = getFixturePath('after.ini');
    expect(genDiff(pathToBefore, pathToAfter)).toBe(expectedRecursive);
    expect(genDiff(pathToBefore, pathToAfter, 'plain')).toBe(expectedPlain);
    expect(genDiff(pathToBefore, pathToAfter, 'json')).toBe(expectedJson);
  });
});
