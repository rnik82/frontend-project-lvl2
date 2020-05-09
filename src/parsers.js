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
    if (_.isBoolean(value) || _.isNaN(_.toNumber(value))) {
      return { ...acc, [key]: value };
    }
    return { ...acc, [key]: _.toNumber(value) };
  }, {});
};

export default (data, type) => {
  switch (type) {
    case '.json':
      return JSON.parse(data);
      break;
    case '.yml':
      return yaml.safeLoad(data);
      break;
    case '.ini':
      return changeStrToNumber(ini.parse(data));
      break;
    default:
      throw new Error(`Unknown type: '${type}'!`);
  }
};
