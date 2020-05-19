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

const makeLine = {
  unchanged: () => null,
  changed: (ancestors, values) => `Property '${ancestors.join('.')}' was changed from ${values.value1} to ${values.value2}`,
  added: (ancestors, values) => `Property '${ancestors.join('.')}' was added with value: ${values.value2}`,
  deleted: (ancestors) => `Property '${ancestors.join('.')}' was deleted`,
};

const renderPlain = (ast, ancestors = []) => {
  if (ast.length === 0) { // наверное лучше убрать
    return null;
  }
  const result = ast.map((child) => {
    const newAncestors = [...ancestors, child.key];
    if (child.status === 'nested') {
      return renderPlain(child.children, newAncestors);
    }
    const value1 = makeValue(child.value1);
    const value2 = makeValue(child.value2);
    return makeLine[child.status](newAncestors, { value1, value2 });
  });
  return result.filter((n) => n).join('\n');
};

export default renderPlain;
