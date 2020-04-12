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
  
  const parse = {
    '.json': (data) => JSON.parse(data),
    '.yml': (data) => yaml.safeLoad(data),
    '.ini': (data) => changeStrToNumber(ini.parse(data)),
  };

  const data = process.cwd()
    |> path.resolve(#, pathToFile)
    |> fs.readFileSync(#, 'utf-8');
  
  
  const result = path.extname(pathToFile)
    |> parse[#](data);

  return result;
};
