import _ from 'lodash';

const stringify = (object, gap) => {
    const keys = Object.keys(object);
    const result = keys.reduce((acc, key) => `${acc}${' '.repeat(gap)}${key}: ${object[key]}`, '');
    return `{\n${result}\n${' '.repeat(gap - 4)}}`
};

const render = (ast, gap = 0) => {
    
  const result = ast.reduce((acc, { status, key, value1, value2, children }) => {
    if (status === 'nested') {
      return `${acc}\n${' '.repeat(gap + 2)}  ${key}: ${render(_.flatten(children), gap + 4)}`;
    }
    const newValue1 = _.isObject(value1) ? stringify(value1, gap + 8) : value1;
    const newValue2 = _.isObject(value2) ? stringify(value2, gap + 8) : value2;
    
    if (status === 'changed') {
      return `${acc}\n${' '.repeat(gap + 2)}- ${key}: ${newValue1}
      ${' '.repeat(gap - 4)}+ ${key}: ${newValue2}`;
    }
    if (status === 'added') {
      return `${acc}\n${' '.repeat(gap + 2)}+ ${key}: ${newValue2}`;
    }
    if (status === 'deleted') {
      return `${acc}\n${' '.repeat(gap + 2)}- ${key}: ${newValue1}`;
    }
    return `${acc}\n${' '.repeat(gap + 2)}  ${key}: ${newValue1}`;
  }, '');
  return `{${result}\n${' '.repeat(gap)}}`;
};

export default render;
