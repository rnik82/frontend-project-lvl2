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
        added: `Property '${property}' was added with value: ${value1}`,
        deleted: `Property '${property}' was deleted`,
    }
    const line = chooseRow[status];
    return line;
};

const renderPlain = (ast, ancestors = [], accR = '') => {
    const result = ast.reduce((acc, { status, key, value, value2, children }) => {
        const newAncestors = [...ancestors, key];
        if (children) {
            return renderPlain(children, newAncestors, acc);
        }

        if (status === 'unchanged') {
            return acc;
        }
        const newLine = makeLine(status, newAncestors, makeValue(value), makeValue(value2));
        return `${acc}\n${newLine}`;
    }, accR);
    return result.trim();
};

export default renderPlain;
