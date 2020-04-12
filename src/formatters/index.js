import renderRecursive from './renderRecursive';
import renderPlain from './renderPlain';
import renderJson from './renderJson';

export default (dataAst, format) => {
  if (format === 'plain') {
    return renderPlain(dataAst);

  } else if (format === 'json') {
    return renderJson(dataAst);
  }

  return renderRecursive(dataAst);
};
