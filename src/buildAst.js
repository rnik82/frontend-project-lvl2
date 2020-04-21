import _ from 'lodash';

const buildNode = (key, obj1, obj2) => {
  const value1 = obj1[key];
  const value2 = obj2[key];

  if (!value1) {
    return { status: 'added', key, value: value2 };
  }

  if (!value2) {
    return { status: 'deleted', key, value: value1 };
  }

  if (_.isObject(value1) && _.isObject(value2)) {
    return { status: 'unchanged', key, children: buildAst(value1, value2) };
  }

  if (value1 !== value2) {
    return { status: 'changed', key, value: value1, value2 };
  }
  
  return { status: 'unchanged', key, value: value1 };
};

const buildAst = (obj1, obj2) => {
  const keys = Object.keys({ ...obj1, ...obj2 });
  return keys.map((key) => buildNode(key, obj1, obj2));
};

export default buildAst;
  