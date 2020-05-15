import _ from 'lodash';

const makeValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const renderPlain = (ast, ancestors = []) => {
  const makeLine = (node, arrOfAncestors) => {
    const {
      status, value1, value2, children,
    } = node;

    const property = arrOfAncestors.join('.');
    const updetedValie1 = makeValue(value1);
    const updetedValie2 = makeValue(value2);

    const chooseRow = {
      nested: renderPlain(children, ancestors),
      unchanged: '',
      changed: `Property '${property}' was changed from ${updetedValie1} to ${updetedValie2}`,
      added: `Property '${property}' was added with value: ${updetedValie2}`,
      deleted: `Property '${property}' was deleted`,
    };

    const line = chooseRow[status];
    return line;
  };

  if (_.isPlainObject(ast)) {
    return makeLine(ast, ancestors);
  }
  const result = ast.map((child) => {
    const newAncestors = [...ancestors, child.key];
    return renderPlain(child, newAncestors);
  });
  return result.filter((n) => n).join('\n');
};

export default renderPlain;
