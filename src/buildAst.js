import _ from 'lodash';

const buildNode = (key, obj1, obj2) => {
  const value1 = obj1[key];
  const value2 = obj2[key];

  if (!value1) {
    return { status: 'added', key, value1: null, value2 };
  }

  if (!value2) {
    return { status: 'deleted', key, value1, value2: null };
  }

  if (_.isObject(value1) && _.isObject(value2)) {
    return { status: 'nested', key, children: buildAst(value1, value2) };
  }

  if (value1 !== value2) {
    return { status: 'changed', key, value1, value2 };
  }
  
  return { status: 'unchanged', key, value1, value2 };
};

const buildAst = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  return keys.map((key) => buildNode(key, obj1, obj2));
};

export default buildAst;
  