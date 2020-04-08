import path from 'path';
import process from 'process';
import fs from 'fs';
import yaml from 'js-yaml';
import ini from 'ini';

export default (pathToFile) => {
  const relativPath = process.cwd();

  const format = path.extname(pathToFile);

  const absolutePath = path.resolve(relativPath, pathToFile);
  const data = fs.readFileSync(absolutePath, 'utf-8');

  const chooseParser = {
    '.json': JSON.parse,
    '.yml': yaml.safeLoad,
    '.ini': ini.parse,
  };
  const parse = chooseParser[format];

  return parse(data);
};
