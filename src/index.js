import path from 'path';
import process from 'process';
import fs from 'fs';
import buildAst from './buildAst';
import render from './formatters/index';
import parse from './parsers';

const getFileInfo = (pathToFile) => {
  const relativPath = process.cwd();
  const absolutPath = path.resolve(relativPath, pathToFile);
  const extension = path.extname(pathToFile);
  return { absolutPath, extension };
};

export default (pathToFile1, pathToFile2, format) => {
  const fileInfo1 = getFileInfo(pathToFile1);
  const fileInfo2 = getFileInfo(pathToFile2);

  const data1 = fs.readFileSync(fileInfo1.absolutPath, 'utf-8');
  const data2 = fs.readFileSync(fileInfo2.absolutPath, 'utf-8');

  const parsedData1 = parse(data1, fileInfo1.extension);
  const parsedData2 = parse(data2, fileInfo2.extension);

  const dataAst = buildAst(parsedData1, parsedData2);

  return render(dataAst, format);
};
