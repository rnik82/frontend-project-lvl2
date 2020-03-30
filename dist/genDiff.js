"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _process = _interopRequireDefault(require("process"));

var _lodash = _interopRequireDefault(require("lodash"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (pathToFile1, pathToFile2) => {
  const relativPath = _process.default.cwd();

  const path1 = _path.default.resolve(relativPath, pathToFile1);

  const path2 = _path.default.resolve(relativPath, pathToFile2);

  const data1 = _fs.default.readFileSync(path1);

  const data2 = _fs.default.readFileSync(path2);

  const object1 = JSON.parse(data1);
  const object2 = JSON.parse(data2);
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  const commonKeys = _lodash.default.uniq(keys1.concat(keys2));

  const result = commonKeys.reduce((acc, key) => {
    if (_lodash.default.has(object1, key) && _lodash.default.has(object2, key) && object1[key] === object2[key]) {
      return [...acc, `  ${key}: ${object1[key]}`];
    }

    if (_lodash.default.has(object1, key) && _lodash.default.has(object2, key) && object1[key] !== object2[key]) {
      return [...acc, `- ${key}: ${object1[key]}`, `+ ${key}: ${object2[key]}`];
    }

    if (_lodash.default.has(object1, key) && !_lodash.default.has(object2, key)) {
      return [...acc, `- ${key}: ${object1[key]}`];
    }

    return [...acc, `+ ${key}: ${object2[key]}`];
  }, []);
  return `{\n${result.join('\n')}\n}`;
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW5EaWZmLmpzIl0sIm5hbWVzIjpbInBhdGhUb0ZpbGUxIiwicGF0aFRvRmlsZTIiLCJyZWxhdGl2UGF0aCIsInByb2Nlc3MiLCJjd2QiLCJwYXRoMSIsInBhdGgiLCJyZXNvbHZlIiwicGF0aDIiLCJkYXRhMSIsImZzIiwicmVhZEZpbGVTeW5jIiwiZGF0YTIiLCJvYmplY3QxIiwiSlNPTiIsInBhcnNlIiwib2JqZWN0MiIsImtleXMxIiwiT2JqZWN0Iiwia2V5cyIsImtleXMyIiwiY29tbW9uS2V5cyIsIl8iLCJ1bmlxIiwiY29uY2F0IiwicmVzdWx0IiwicmVkdWNlIiwiYWNjIiwia2V5IiwiaGFzIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O2VBRWUsQ0FBQ0EsV0FBRCxFQUFjQyxXQUFkLEtBQThCO0FBQzNDLFFBQU1DLFdBQVcsR0FBR0MsaUJBQVFDLEdBQVIsRUFBcEI7O0FBRUEsUUFBTUMsS0FBSyxHQUFHQyxjQUFLQyxPQUFMLENBQWFMLFdBQWIsRUFBMEJGLFdBQTFCLENBQWQ7O0FBQ0EsUUFBTVEsS0FBSyxHQUFHRixjQUFLQyxPQUFMLENBQWFMLFdBQWIsRUFBMEJELFdBQTFCLENBQWQ7O0FBRUEsUUFBTVEsS0FBSyxHQUFHQyxZQUFHQyxZQUFILENBQWdCTixLQUFoQixDQUFkOztBQUNBLFFBQU1PLEtBQUssR0FBR0YsWUFBR0MsWUFBSCxDQUFnQkgsS0FBaEIsQ0FBZDs7QUFFQSxRQUFNSyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixLQUFYLENBQWhCO0FBQ0EsUUFBTU8sT0FBTyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBV0gsS0FBWCxDQUFoQjtBQUVBLFFBQU1LLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlOLE9BQVosQ0FBZDtBQUNBLFFBQU1PLEtBQUssR0FBR0YsTUFBTSxDQUFDQyxJQUFQLENBQVlILE9BQVosQ0FBZDs7QUFFQSxRQUFNSyxVQUFVLEdBQUdDLGdCQUFFQyxJQUFGLENBQU9OLEtBQUssQ0FBQ08sTUFBTixDQUFhSixLQUFiLENBQVAsQ0FBbkI7O0FBRUEsUUFBTUssTUFBTSxHQUFHSixVQUFVLENBQUNLLE1BQVgsQ0FBa0IsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDN0MsUUFBSU4sZ0JBQUVPLEdBQUYsQ0FBTWhCLE9BQU4sRUFBZWUsR0FBZixLQUF1Qk4sZ0JBQUVPLEdBQUYsQ0FBTWIsT0FBTixFQUFlWSxHQUFmLENBQXZCLElBQThDZixPQUFPLENBQUNlLEdBQUQsQ0FBUCxLQUFpQlosT0FBTyxDQUFDWSxHQUFELENBQTFFLEVBQWlGO0FBQy9FLGFBQU8sQ0FBQyxHQUFHRCxHQUFKLEVBQVUsS0FBSUMsR0FBSSxLQUFJZixPQUFPLENBQUNlLEdBQUQsQ0FBTSxFQUFuQyxDQUFQO0FBQ0Q7O0FBQ0QsUUFBSU4sZ0JBQUVPLEdBQUYsQ0FBTWhCLE9BQU4sRUFBZWUsR0FBZixLQUF1Qk4sZ0JBQUVPLEdBQUYsQ0FBTWIsT0FBTixFQUFlWSxHQUFmLENBQXZCLElBQThDZixPQUFPLENBQUNlLEdBQUQsQ0FBUCxLQUFpQlosT0FBTyxDQUFDWSxHQUFELENBQTFFLEVBQWlGO0FBQy9FLGFBQU8sQ0FBQyxHQUFHRCxHQUFKLEVBQVUsS0FBSUMsR0FBSSxLQUFJZixPQUFPLENBQUNlLEdBQUQsQ0FBTSxFQUFuQyxFQUF1QyxLQUFJQSxHQUFJLEtBQUlaLE9BQU8sQ0FBQ1ksR0FBRCxDQUFNLEVBQWhFLENBQVA7QUFDRDs7QUFDRCxRQUFJTixnQkFBRU8sR0FBRixDQUFNaEIsT0FBTixFQUFlZSxHQUFmLEtBQXVCLENBQUNOLGdCQUFFTyxHQUFGLENBQU1iLE9BQU4sRUFBZVksR0FBZixDQUE1QixFQUFpRDtBQUMvQyxhQUFPLENBQUMsR0FBR0QsR0FBSixFQUFVLEtBQUlDLEdBQUksS0FBSWYsT0FBTyxDQUFDZSxHQUFELENBQU0sRUFBbkMsQ0FBUDtBQUNEOztBQUNELFdBQU8sQ0FBQyxHQUFHRCxHQUFKLEVBQVUsS0FBSUMsR0FBSSxLQUFJWixPQUFPLENBQUNZLEdBQUQsQ0FBTSxFQUFuQyxDQUFQO0FBQ0QsR0FYYyxFQVdaLEVBWFksQ0FBZjtBQWFBLFNBQVEsTUFBS0gsTUFBTSxDQUFDSyxJQUFQLENBQVksSUFBWixDQUFrQixLQUEvQjtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ3Byb2Nlc3MnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChwYXRoVG9GaWxlMSwgcGF0aFRvRmlsZTIpID0+IHtcbiAgY29uc3QgcmVsYXRpdlBhdGggPSBwcm9jZXNzLmN3ZCgpO1xuXG4gIGNvbnN0IHBhdGgxID0gcGF0aC5yZXNvbHZlKHJlbGF0aXZQYXRoLCBwYXRoVG9GaWxlMSk7XG4gIGNvbnN0IHBhdGgyID0gcGF0aC5yZXNvbHZlKHJlbGF0aXZQYXRoLCBwYXRoVG9GaWxlMik7XG5cbiAgY29uc3QgZGF0YTEgPSBmcy5yZWFkRmlsZVN5bmMocGF0aDEpO1xuICBjb25zdCBkYXRhMiA9IGZzLnJlYWRGaWxlU3luYyhwYXRoMik7XG5cbiAgY29uc3Qgb2JqZWN0MSA9IEpTT04ucGFyc2UoZGF0YTEpO1xuICBjb25zdCBvYmplY3QyID0gSlNPTi5wYXJzZShkYXRhMik7XG5cbiAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhvYmplY3QxKTtcbiAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyhvYmplY3QyKTtcblxuICBjb25zdCBjb21tb25LZXlzID0gXy51bmlxKGtleXMxLmNvbmNhdChrZXlzMikpO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGNvbW1vbktleXMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGlmIChfLmhhcyhvYmplY3QxLCBrZXkpICYmIF8uaGFzKG9iamVjdDIsIGtleSkgJiYgb2JqZWN0MVtrZXldID09PSBvYmplY3QyW2tleV0pIHtcbiAgICAgIHJldHVybiBbLi4uYWNjLCBgICAke2tleX06ICR7b2JqZWN0MVtrZXldfWBdO1xuICAgIH1cbiAgICBpZiAoXy5oYXMob2JqZWN0MSwga2V5KSAmJiBfLmhhcyhvYmplY3QyLCBrZXkpICYmIG9iamVjdDFba2V5XSAhPT0gb2JqZWN0MltrZXldKSB7XG4gICAgICByZXR1cm4gWy4uLmFjYywgYC0gJHtrZXl9OiAke29iamVjdDFba2V5XX1gLCBgKyAke2tleX06ICR7b2JqZWN0MltrZXldfWBdO1xuICAgIH1cbiAgICBpZiAoXy5oYXMob2JqZWN0MSwga2V5KSAmJiAhXy5oYXMob2JqZWN0Miwga2V5KSkge1xuICAgICAgcmV0dXJuIFsuLi5hY2MsIGAtICR7a2V5fTogJHtvYmplY3QxW2tleV19YF07XG4gICAgfVxuICAgIHJldHVybiBbLi4uYWNjLCBgKyAke2tleX06ICR7b2JqZWN0MltrZXldfWBdO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGB7XFxuJHtyZXN1bHQuam9pbignXFxuJyl9XFxufWA7XG59O1xuIl19