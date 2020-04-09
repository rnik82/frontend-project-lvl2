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
    const valueForCheck = Number(value);
    const newValue = !_.isBoolean(value) && !_.isNaN(valueForCheck)
      ? valueForCheck : value;

    return { ...acc, [key]: newValue };
  }, {});
};

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
  
  return format === '.ini' ? changeStrToNumber(parse(data)) : parse(data);
};
