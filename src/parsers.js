import path from 'path';
import process from 'process';
import fs from 'fs';
import yaml from 'js-yaml';
import ini from 'ini';


export default (pathToFile) => {
  const relativPath = process.cwd();

  const format = path.extname(pathToFile);
  const absolutePath = path.resolve(relativPath, pathToFile);
  const data = fs.readFileSync(absolutePath, 'utf8');

  let parse;
  if (format === '.json') {
    parse = JSON.parse;
  } else if (format === '.yml') {
    parse = yaml.safeLoad;
  } else if (format === '.ini') {
    parse = ini.parse;
  }

  return parse(data);
};
