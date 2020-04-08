import _ from 'lodash';

const stringify = (object, gap) => {
    const keys = Object.keys(object);
    const result = keys.reduce((acc, key) => `${acc}${' '.repeat(gap)}${key}: ${object[key]}`, '');
    return `{\n${result}\n${' '.repeat(gap - 4)}}`
};

const diff = (ast, gap = 0) => {
  const sign = {
    unchanged: '  ',
    added: '+ ',
    removed: '- ',
  };
    
  const result = ast.reduce((acc, { status, key, value, children }) => {
    if (children) {
      return `${acc}\n${' '.repeat(gap + 2)}${sign[status]}${key}: ${diff(_.flatten(children), gap + 4)}`;
    }
    const newValue = typeof value === 'object' ? stringify(value, gap + 8) : value;
    return `${acc}\n${' '.repeat(gap + 2)}${sign[status]}${key}: ${newValue}`;
  }, '');
  return `{${result}\n${' '.repeat(gap)}}`;
};

export default diff;
