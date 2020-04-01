import path from 'path';
import process from 'process';
import fs from 'fs';
import yaml from 'js-yaml';


export default (pathToFile) => {
  const relativPath = process.cwd();

  const format = path.extname(pathToFile);
  const absolutePath = path.resolve(relativPath, pathToFile);
  const data = fs.readFileSync(absolutePath);

  let parse;
  if (format === '.json') {
    parse = JSON.parse;
  } else if (format === '.yml') {
    parse = yaml.safeLoad;
  }

  return parse(data);
};
