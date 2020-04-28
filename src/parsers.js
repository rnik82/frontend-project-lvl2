import path from 'path';
import process from 'process';
import fs from 'fs';
import yaml from 'js-yaml';
import ini from 'ini';
import _ from 'lodash';

const changeStrToNumber = (object) => {
  const keys = Object.keys(object);

  return keys.reduce((acc, key) => {
    const value = object[key];
    if (_.isObject(value)) {
      return { ...acc, [key]: changeStrToNumber(value) };
    }
    if (_.isBoolean(value) || _.isNaN(Number(value))) {
      return { ...acc, [key]: value };
    }
    return { ...acc, [key]: Number(value) };
  }, {});
};

export default (pathToFile) => {
  const data = process.cwd()
    |> path.resolve(#, pathToFile)
    |> fs.readFileSync(#, 'utf-8');

  const extension = path.extname(pathToFile);

  if (extension === '.json') {
    return JSON.parse(data);
  }
  if (extension === '.yml') {
    return yaml.safeLoad(data);
  }
  return changeStrToNumber(ini.parse(data));
};
