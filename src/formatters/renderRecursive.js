import _ from 'lodash';

const setGaps = (gap) => `${' '.repeat(gap)}`;

const stringify = (object, gap) => {
  const keys = Object.keys(object);
  const result = keys
    .map((key) => `${setGaps(gap)}${key}: ${object[key]}`)
    .join('');
  return `{\n${result}\n${setGaps(gap - 4)}}`;
};

const render = (ast, blank = 0) => {
  const makeLine = {
    nested: (node) => `  ${node.key}: ${render(node.children, blank + 4)}`,
    changed: (node) => [`- ${node.key}: ${node.value1}`, `+ ${node.key}: ${node.value2}`],
    added: (node) => `+ ${node.key}: ${node.value2}`,
    deleted: (node) => `- ${node.key}: ${node.value1}`,
    unchanged: (node) => `  ${node.key}: ${node.value1}`,
  };

  const result = ast
    .map((node) => {
      const value1 = _.isObject(node.value1) ? stringify(node.value1, blank + 8) : node.value1;
      const value2 = _.isObject(node.value2) ? stringify(node.value2, blank + 8) : node.value2;
      const updatedNode = { ...node, value1, value2 };
      return makeLine[node.status](updatedNode);
    })
    .flat()
    .map((line) => `${setGaps(blank + 2)}${line}`)
    .join('\n');

  return `{\n${result}\n${setGaps(blank)}}`;
};

export default render;
