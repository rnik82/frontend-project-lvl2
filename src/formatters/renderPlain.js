import _ from 'lodash';

const makeLine = (status, ancestors, value1, value2) => {
    const property = ancestors.join('.');

    const newValue1 = _.isString(value1) && value1 !== '[complex value]' ? `'${value1}'` : value1;
    const newValue2 = _.isString(value2) && value2 !== '[complex value]' ? `'${value2}'` : value2;

    const chooseRow = {
        changed: `Property '${property}' was changed from ${newValue1} to ${newValue2}`,
        added: `Property '${property}' was added with value: ${newValue1}`,
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

        const newValue = _.isObject(value) ? '[complex value]' : value;
        const newValue2 = _.isObject(value2) ? '[complex value]' : value2;

        if (status === 'unchanged') {
            return acc;
        }
        const newLine = makeLine(status, newAncestors, newValue, newValue2);
        return `${acc}\n${newLine}`;
    }, accR);
    return result.trim();
};

export default renderPlain;
