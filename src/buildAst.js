import _ from 'lodash';

const buildAst = (config1, config2) => {
  const buildNode = (key, obj1, obj2) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (!_.has(obj1, key)) {
      return {
        status: 'added', key, value1: null, value2, children: [],
      };
    }
    if (!_.has(obj2, key)) {
      return {
        status: 'deleted', key, value1, value2: null, children: [],
      };
    }
    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        status: 'nested', key, children: buildAst(value1, value2),
      };
    }
    if (value1 !== value2) {
      return {
        status: 'changed', key, value1, value2, children: [],
      };
    }
    return {
      status: 'unchanged', key, value1, children: [],
    };
  };

  const keys = _.union(_.keys(config1), _.keys(config2));

  return keys.map((key) => buildNode(key, config1, config2));
};

export default buildAst;
