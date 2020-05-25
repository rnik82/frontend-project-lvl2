import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const renderPlain = (ast, ancestors = []) => {
  const makeLine = {
    nested: (property, node) => renderPlain(node.children, property),
    unchanged: () => null,
    changed: (property, node) => `Property '${property.join('.')}' was changed from ${node.value1} to ${node.value2}`,
    added: (property, node) => `Property '${property.join('.')}' was added with value: ${node.value2}`,
    deleted: (property) => `Property '${property.join('.')}' was deleted`,
  };

  const result = ast.map((node) => {
    const newAncestors = [...ancestors, node.key];
    const value1 = stringify(node.value1);
    const value2 = stringify(node.value2);
    const updatedNode = { ...node, value1, value2 };
    return makeLine[node.status](newAncestors, updatedNode);
  });
  return result.filter((n) => n).join('\n');
};

export default renderPlain;
