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

export default (data, extension) => {
// Решил оставить extension, иначе придется раздувать index.js чтобы удалить это точку.
// Или это все-таки тот случай, когда "Парсинг не работает с понятиями файловой системы,
// он работает с данными и их типом"?
  switch (extension) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
      return yaml.safeLoad(data);
    case '.ini':
      return changeStrToNumber(ini.parse(data));
    default:
      throw new Error(`Unknown extension: '${extension}'!`);
  }
};
