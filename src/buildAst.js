import _ from 'lodash';

const buildAst = (data1, data2) => {

    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
  
    const commonKeys = _.uniq(keys1.concat(keys2));
  
    const result = commonKeys.map((key) => {
      const value1 = data1[key];
      const value2 = data2[key];
      if (_.has(data1, key) && _.has(data2, key)) {
        if (_.isObject(value1) && _.isObject(value2)) {
          return { status: 'unchanged', key, children: buildAst(value1, value2)};
        }
        if (value1 !== value2) {
          return { status: 'changed', key, value: value1, value2 };
        }
        return { status: 'unchanged', key, value: value1};
      }
      if (_.has(data1, key) && !_.has(data2, key)) {
        return { status: 'deleted', key, value: value1};
      }
      if (!_.has(data1, key) && _.has(data2, key)) {
        return { status: 'added', key, value: value2 };
        }
      });
    return result;
  };

  export default buildAst;
  