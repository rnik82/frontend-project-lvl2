import buildAst from './buildAst';
import render from './formatters/index';
import parse from './parsers';

export default (pathToFile1, pathToFile2, format) => {
  const parsedData1 = parse(pathToFile1);
  const parsedData2 = parse(pathToFile2);
  
  const dataAst = buildAst(parsedData1, parsedData2);

  return render(dataAst, format);
};
