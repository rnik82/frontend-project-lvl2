import _ from 'lodash';
import parsers from './parsers';
import render from './formatters/render';
import renderPlain from './formatters/renderPlain';

const buildAst = (data1, data2) => {

  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);

  const commonKeys = _.uniq(keys1.concat(keys2));

  const result = commonKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.has(data1, key) && _.has(data2, key)) {
      if (typeof value1 === 'object' && typeof value2 === 'object') {
        return { status: 'unchanged', key, children: buildAst(value1, value2)};
      }
      if (value1 !== value2) {
        return { status: 'changed', key, value: value1, value2 };
      }
      return { status: 'unchanged', key, value: value1};
    }
    if (_.has(data1, key) && !_.has(data2, key)) {
      return { status: 'deleted', key, value: value1};
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return { status: 'added', key, value: value2 };
      }
    });
  return _.flatten(result);
};

export default (pathToFile1, pathToFile2, format) => {
  const parsedData1 = parsers(pathToFile1);
  const parsedData2 = parsers(pathToFile2);
  const dataAst = buildAst(parsedData1, parsedData2);
  return format === 'plain' ? renderPlain(dataAst) : render(dataAst);
};
