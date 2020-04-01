import genDiff from '../src';

const correctValue = `{
  host: hexlet.io
- timeout: 50
+ timeout: 20
- proxy: 123.234.53.22
- follow: false
+ verbose: true
}`;

const path1JSON = './__tests__/fixtures/before.json';
const path2JSON = './__tests__/fixtures/after.json';

const absolutPath1JSON = `${__dirname}/fixtures/before.json`;
const absolutPath2JSON = `${__dirname}/fixtures/after.json`;

const path1YAML = './__tests__/fixtures/before.yml';
const path2YAML = './__tests__/fixtures/after.yml';

const absolutPath1YAML = `${__dirname}/fixtures/before.yml`;
const absolutPath2YAML = `${__dirname}/fixtures/after.yml`;

test('genDiffJSON', () => {
  expect(genDiff(path1JSON, path2JSON)).toEqual(correctValue);
  expect(genDiff(absolutPath1JSON, absolutPath2JSON)).toEqual(correctValue);
});

test('genDiffYAML', () => {
  expect(genDiff(path1YAML, path2YAML)).toEqual(correctValue);
  expect(genDiff(absolutPath1YAML, absolutPath2YAML)).toEqual(correctValue);
});
