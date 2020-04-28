import renderRecursive from './renderRecursive';
import renderPlain from './renderPlain';

export default (dataAst, format) => {
  if (format === 'plain') {
    return renderPlain(dataAst);

  } else if (format === 'json') {
    return JSON.stringify(dataAst);
  }

  return renderRecursive(dataAst);
};
