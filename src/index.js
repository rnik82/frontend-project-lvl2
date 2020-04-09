import buildAst from './buildAst';
import parsers from './parsers';
import render from './formatters/render';
import renderPlain from './formatters/renderPlain';
import renderJson from './formatters/renderJson';

export default (pathToFile1, pathToFile2, format) => {
  const dataAst = buildAst(parsers(pathToFile1), parsers(pathToFile2));

  if (format === 'plain') {
    return renderPlain(dataAst);

  } else if (format === 'json') {
    return renderJson(dataAst);
  }

  return render(dataAst);
};
