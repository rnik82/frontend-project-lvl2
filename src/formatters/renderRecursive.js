import _ from 'lodash';

const setGaps = (gap) => `${' '.repeat(gap)}`;

const stringify = (object, gap) => {
  const keys = Object.keys(object);
  const result = keys
    .map((key) => `${setGaps(gap)}${key}: ${object[key]}`)
    .join('');
  return `{\n${result}\n${setGaps(gap - 4)}}`;
};

const makeLine = {
  changed: ({ key, value1, value2 }) => [`- ${key}: ${value1}`, `+ ${key}: ${value2}`],
  added: ({ key, value2 }) => `+ ${key}: ${value2}`,
  deleted: ({ key, value1 }) => `- ${key}: ${value1}`,
  unchanged: ({ key, value1 }) => `  ${key}: ${value1}`,
};

const render = (ast, blank = 0) => {
  const result = ast
    .map((node) => {
      if (node.status === 'nested') {
        return `${setGaps(blank + 2)}  ${node.key}: ${render(node.children, blank + 4)}`;
      }
      const value1 = _.isObject(node.value1) ? stringify(node.value1, blank + 8) : node.value1;
      const value2 = _.isObject(node.value2) ? stringify(node.value2, blank + 8) : node.value2;
      const keyAndValues = { key: node.key, value1, value2 };
      const newLine = makeLine[node.status](keyAndValues);
      return _.isArray(newLine)
        ? `${setGaps(blank + 2)}${newLine[0]}\n${setGaps(blank + 2)}${newLine[1]}`
        : `${setGaps(blank + 2)}${newLine}`;
    })
    .join('\n');
  return `{\n${result}\n${setGaps(blank)}}`;
};

export default render;
