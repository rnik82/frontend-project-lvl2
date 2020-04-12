import _ from 'lodash';

const stringify = (object, gap) => {
    const keys = Object.keys(object);
    const result = keys.reduce((acc, key) => `${acc}${' '.repeat(gap)}${key}: ${object[key]}`, '');
    return `{\n${result}\n${' '.repeat(gap - 4)}}`
};

const render = (ast, gap = 0) => {
  const sign = {
    unchanged: '  ',
    added: '+ ',
    deleted: '- ',
  };
    
  const result = ast.reduce((acc, { status, key, value, value2, children }) => {
    if (children) {
      return `${acc}\n${' '.repeat(gap + 2)}${sign[status]}${key}: ${render(_.flatten(children), gap + 4)}`;
    }
    const newValue = _.isObject(value) ? stringify(value, gap + 8) : value;
    if (value2) {
      const newValue2 = _.isObject(value2) ? stringify(value2, gap + 8) : value2;
      return `${acc}\n${' '.repeat(gap + 2)}${sign['deleted']}${key}: ${newValue}
      ${' '.repeat(gap - 4)}${sign['added']}${key}: ${newValue2}`;
    }
    return `${acc}\n${' '.repeat(gap + 2)}${sign[status]}${key}: ${newValue}`;
  }, '');
  return `{${result}\n${' '.repeat(gap)}}`;
};

export default render;
