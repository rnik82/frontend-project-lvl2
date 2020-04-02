"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _process = _interopRequireDefault(require("process"));

var _fs = _interopRequireDefault(require("fs"));

var _jsYaml = _interopRequireDefault(require("js-yaml"));

var _ini = _interopRequireDefault(require("ini"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = pathToFile => {
  const relativPath = _process.default.cwd();

  const format = _path.default.extname(pathToFile);

  const absolutePath = _path.default.resolve(relativPath, pathToFile);

  const data = _fs.default.readFileSync(absolutePath, 'utf8');

  let parse;

  if (format === '.json') {
    parse = JSON.parse;
  } else if (format === '.yml') {
    parse = _jsYaml.default.safeLoad;
  } else if (format === '.ini') {
    parse = _ini.default.parse;
  }

  return parse(data);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZXJzLmpzIl0sIm5hbWVzIjpbInBhdGhUb0ZpbGUiLCJyZWxhdGl2UGF0aCIsInByb2Nlc3MiLCJjd2QiLCJmb3JtYXQiLCJwYXRoIiwiZXh0bmFtZSIsImFic29sdXRlUGF0aCIsInJlc29sdmUiLCJkYXRhIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJwYXJzZSIsIkpTT04iLCJ5YW1sIiwic2FmZUxvYWQiLCJpbmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztlQUdnQkEsVUFBRCxJQUFnQjtBQUM3QixRQUFNQyxXQUFXLEdBQUdDLGlCQUFRQyxHQUFSLEVBQXBCOztBQUVBLFFBQU1DLE1BQU0sR0FBR0MsY0FBS0MsT0FBTCxDQUFhTixVQUFiLENBQWY7O0FBQ0EsUUFBTU8sWUFBWSxHQUFHRixjQUFLRyxPQUFMLENBQWFQLFdBQWIsRUFBMEJELFVBQTFCLENBQXJCOztBQUNBLFFBQU1TLElBQUksR0FBR0MsWUFBR0MsWUFBSCxDQUFnQkosWUFBaEIsRUFBOEIsTUFBOUIsQ0FBYjs7QUFFQSxNQUFJSyxLQUFKOztBQUNBLE1BQUlSLE1BQU0sS0FBSyxPQUFmLEVBQXdCO0FBQ3RCUSxJQUFBQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBYjtBQUNELEdBRkQsTUFFTyxJQUFJUixNQUFNLEtBQUssTUFBZixFQUF1QjtBQUM1QlEsSUFBQUEsS0FBSyxHQUFHRSxnQkFBS0MsUUFBYjtBQUNELEdBRk0sTUFFQSxJQUFJWCxNQUFNLEtBQUssTUFBZixFQUF1QjtBQUM1QlEsSUFBQUEsS0FBSyxHQUFHSSxhQUFJSixLQUFaO0FBQ0Q7O0FBRUQsU0FBT0EsS0FBSyxDQUFDSCxJQUFELENBQVo7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcHJvY2VzcyBmcm9tICdwcm9jZXNzJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeWFtbCBmcm9tICdqcy15YW1sJztcbmltcG9ydCBpbmkgZnJvbSAnaW5pJztcblxuXG5leHBvcnQgZGVmYXVsdCAocGF0aFRvRmlsZSkgPT4ge1xuICBjb25zdCByZWxhdGl2UGF0aCA9IHByb2Nlc3MuY3dkKCk7XG5cbiAgY29uc3QgZm9ybWF0ID0gcGF0aC5leHRuYW1lKHBhdGhUb0ZpbGUpO1xuICBjb25zdCBhYnNvbHV0ZVBhdGggPSBwYXRoLnJlc29sdmUocmVsYXRpdlBhdGgsIHBhdGhUb0ZpbGUpO1xuICBjb25zdCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGFic29sdXRlUGF0aCwgJ3V0ZjgnKTtcblxuICBsZXQgcGFyc2U7XG4gIGlmIChmb3JtYXQgPT09ICcuanNvbicpIHtcbiAgICBwYXJzZSA9IEpTT04ucGFyc2U7XG4gIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnLnltbCcpIHtcbiAgICBwYXJzZSA9IHlhbWwuc2FmZUxvYWQ7XG4gIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnLmluaScpIHtcbiAgICBwYXJzZSA9IGluaS5wYXJzZTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZShkYXRhKTtcbn07XG4iXX0=