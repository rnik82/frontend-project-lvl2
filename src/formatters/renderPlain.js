import _ from 'lodash';

const makeValue = (value) => {
    const newValue = _.isObject(value) ? '[complex value]' : value;
    return _.isString(newValue) && newValue !== '[complex value]'
        ? `'${newValue}'` : newValue;
};

const makeLine = (status, ancestors, value1, value2) => {
    const property = ancestors.join('.');

    const chooseRow = {
        changed: `Property '${property}' was changed from ${value1} to ${value2}`,
        added: `Property '${property}' was added with value: ${value2}`,
        deleted: `Property '${property}' was deleted`,
    }
    const line = chooseRow[status];
    return line;
};

const renderPlain = (ast, ancestors = []) => {
    const result = ast.map(({ status, key, value1, value2, children }) => {
        const newAncestors = [...ancestors, key];
        if (status === 'nested') {
            return renderPlain(children, newAncestors);
        }
        if (status === 'unchanged') {
            return;
        }
        const newLine = makeLine(status, newAncestors, makeValue(value1), makeValue(value2));
        return newLine;
    });
    return result.filter(node => node).join('\n');
};

export default renderPlain;
