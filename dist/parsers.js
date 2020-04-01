"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _process = _interopRequireDefault(require("process"));

var _fs = _interopRequireDefault(require("fs"));

var _jsYaml = _interopRequireDefault(require("js-yaml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = pathToFile => {
  const relativPath = _process.default.cwd();

  const format = _path.default.extname(pathToFile);

  const absolutePath = _path.default.resolve(relativPath, pathToFile);

  const data = _fs.default.readFileSync(absolutePath);

  let parse;

  if (format === '.json') {
    parse = JSON.parse;
  } else if (format === '.yml') {
    parse = _jsYaml.default.safeLoad;
  }

  return parse(data);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZXJzLmpzIl0sIm5hbWVzIjpbInBhdGhUb0ZpbGUiLCJyZWxhdGl2UGF0aCIsInByb2Nlc3MiLCJjd2QiLCJmb3JtYXQiLCJwYXRoIiwiZXh0bmFtZSIsImFic29sdXRlUGF0aCIsInJlc29sdmUiLCJkYXRhIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJwYXJzZSIsIkpTT04iLCJ5YW1sIiwic2FmZUxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztlQUdnQkEsVUFBRCxJQUFnQjtBQUM3QixRQUFNQyxXQUFXLEdBQUdDLGlCQUFRQyxHQUFSLEVBQXBCOztBQUVBLFFBQU1DLE1BQU0sR0FBR0MsY0FBS0MsT0FBTCxDQUFhTixVQUFiLENBQWY7O0FBQ0EsUUFBTU8sWUFBWSxHQUFHRixjQUFLRyxPQUFMLENBQWFQLFdBQWIsRUFBMEJELFVBQTFCLENBQXJCOztBQUNBLFFBQU1TLElBQUksR0FBR0MsWUFBR0MsWUFBSCxDQUFnQkosWUFBaEIsQ0FBYjs7QUFFQSxNQUFJSyxLQUFKOztBQUNBLE1BQUlSLE1BQU0sS0FBSyxPQUFmLEVBQXdCO0FBQ3RCUSxJQUFBQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBYjtBQUNELEdBRkQsTUFFTyxJQUFJUixNQUFNLEtBQUssTUFBZixFQUF1QjtBQUM1QlEsSUFBQUEsS0FBSyxHQUFHRSxnQkFBS0MsUUFBYjtBQUNEOztBQUVELFNBQU9ILEtBQUssQ0FBQ0gsSUFBRCxDQUFaO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAncHJvY2Vzcyc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHlhbWwgZnJvbSAnanMteWFtbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHBhdGhUb0ZpbGUpID0+IHtcbiAgY29uc3QgcmVsYXRpdlBhdGggPSBwcm9jZXNzLmN3ZCgpO1xuXG4gIGNvbnN0IGZvcm1hdCA9IHBhdGguZXh0bmFtZShwYXRoVG9GaWxlKTtcbiAgY29uc3QgYWJzb2x1dGVQYXRoID0gcGF0aC5yZXNvbHZlKHJlbGF0aXZQYXRoLCBwYXRoVG9GaWxlKTtcbiAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhhYnNvbHV0ZVBhdGgpO1xuXG4gIGxldCBwYXJzZTtcbiAgaWYgKGZvcm1hdCA9PT0gJy5qc29uJykge1xuICAgIHBhcnNlID0gSlNPTi5wYXJzZTtcbiAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICcueW1sJykge1xuICAgIHBhcnNlID0geWFtbC5zYWZlTG9hZDtcbiAgfVxuXG4gIHJldHVybiBwYXJzZShkYXRhKTtcbn07XG4iXX0=