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

const makeLine = (status, ancestors, value1, value2, children) => {

    if (status === 'nested') {
        return renderPlain(children, ancestors);
    }

    if (status === 'unchanged') {
        return;
    }
    
    const property = ancestors.join('.');
    const updetedValie1 = makeValue(value1);
    const updetedValie2 = makeValue(value2);

    const chooseRow = {
        changed: `Property '${property}' was changed from ${updetedValie1} to ${updetedValie2}`,
        added: `Property '${property}' was added with value: ${updetedValie2}`,
        deleted: `Property '${property}' was deleted`,
    };
    const line = chooseRow[status];
    return line;
};

const renderPlain = (ast, ancestors = []) => {
    const result = ast.map(({ status, key, value1, value2, children }) => {
        const newAncestors = [...ancestors, key];
        return makeLine(status, newAncestors, value1, value2, children);
    });
    return result.filter(node => node).join('\n');
};

export default renderPlain;
