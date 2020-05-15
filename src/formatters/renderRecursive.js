import _ from 'lodash';

const stringify = (object, gap) => {
  const keys = Object.keys(object);
  const result = keys
    .map((key) => `${' '.repeat(gap)}${key}: ${object[key]}`)
    .join('');
  return `{\n${result}\n${' '.repeat(gap - 4)}}`;
};

const render = (ast, blank = 0) => {
  const makeLine = (node, gap) => {
    const {
      status, key, value1, value2, children,
    } = node;
    const newValue1 = _.isObject(value1) ? stringify(value1, gap + 8) : value1;
    const newValue2 = _.isObject(value2) ? stringify(value2, gap + 8) : value2;

    const chooseRow = {
      nested: `${' '.repeat(gap + 2)}  ${key}: ${render(children, gap + 4)}`,
      changed: `${' '.repeat(gap + 2)}- ${key}: ${newValue1}
      + ${key}: ${newValue2}`,
      added: `${' '.repeat(gap + 2)}+ ${key}: ${newValue2}`,
      deleted: `${' '.repeat(gap + 2)}- ${key}: ${newValue1}`,
      unchanged: `${' '.repeat(gap + 2)}  ${key}: ${newValue1}`,
    };

    const line = chooseRow[status];
    return line;
  };

  if (_.isPlainObject(ast)) {
    return makeLine(ast, blank);
  }
  const result = ast.map((child) => render(child, blank))
    .join('\n');
  return `{\n${result}\n${' '.repeat(blank)}}`;
};

export default render;
