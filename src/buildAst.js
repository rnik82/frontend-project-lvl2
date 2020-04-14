import _ from 'lodash';

const build = (key, obj1, obj2) => {
  const value1 = obj1[key];
  const value2 = obj2[key];

  if (!value1 || !value2) {
    return value1 ? { status: 'deleted', key, value: value1 }
      : { status: 'added', key, value: value2 };
  }

  if (_.isObject(value1) && _.isObject(value2)) {
    return { status: 'unchanged', key, children: buildAst(value1, value2) };
  }

  return value1 !== value2
    ? { status: 'changed', key, value: value1, value2 }
    : { status: 'unchanged', key, value: value1 };
};

const buildAst = (obj1, obj2) => {
  const keys = Object.keys({ ...obj1, ...obj2 });
  return keys.map((key) => build(key, obj1, obj2));
};

export default buildAst;
  