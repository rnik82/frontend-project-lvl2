import { uniq, has } from 'lodash';
import parsers from './parsers';

export default (pathToFile1, pathToFile2) => {

  const object1 = parsers(pathToFile1);
  const object2 = parsers(pathToFile2);
  
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  const commonKeys = uniq(keys1.concat(keys2));

  const result = commonKeys.reduce((acc, key) => {
    if (has(object1, key) && has(object2, key) && object1[key] === object2[key]) {
      return [...acc, `  ${key}: ${object1[key]}`];
    }
    if (has(object1, key) && has(object2, key) && object1[key] !== object2[key]) {
      return [...acc, `- ${key}: ${object1[key]}`, `+ ${key}: ${object2[key]}`];
    }
    if (has(object1, key) && !has(object2, key)) {
      return [...acc, `- ${key}: ${object1[key]}`];
    }
    return [...acc, `+ ${key}: ${object2[key]}`];
  }, []);

  return `{\n${result.join('\n')}\n}`;
};
