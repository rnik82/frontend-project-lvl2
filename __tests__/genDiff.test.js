import genDiff from 'genDiff';

const correctValue = `{
  host: hexlet.io
- timeout: 50
+ timeout: 20
- proxy: 123.234.53.22
- follow: false
+ verbose: true
}`;

const path1 = './__tests__/fixtures/before.json';
const path2 = './__tests__/fixtures/after.json';

const absolutPath1 = `${__dirname}/fixtures/before.json`;
const absolutPath2 = `${__dirname}/fixtures/after.json`;

test('genDiff', () => {
  expect(genDiff(path1, path2)).toEqual(correctValue);
  expect(genDiff(absolutPath1, absolutPath2)).toEqual(correctValue);
});
