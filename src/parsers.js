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

const mapping = {
  json: (data) => JSON.parse(data),
  yml: (data) => yaml.safeLoad(data),
  ini: (data) => changeStrToNumber(ini.parse(data)),
};

export default (data, type) => mapping[type](data);
