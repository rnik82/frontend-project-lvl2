"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buildAst = _interopRequireDefault(require("./buildAst"));

var _parsers = _interopRequireDefault(require("./parsers"));

var _render = _interopRequireDefault(require("./formatters/render"));

var _renderPlain = _interopRequireDefault(require("./formatters/renderPlain"));

var _renderJson = _interopRequireDefault(require("./formatters/renderJson"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (pathToFile1, pathToFile2, format) => {
  const dataAst = (0, _buildAst.default)((0, _parsers.default)(pathToFile1), (0, _parsers.default)(pathToFile2));

  if (format === 'plain') {
    return (0, _renderPlain.default)(dataAst);
  } else if (format === 'json') {
    return (0, _renderJson.default)(dataAst);
  }

  return (0, _render.default)(dataAst);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwYXRoVG9GaWxlMSIsInBhdGhUb0ZpbGUyIiwiZm9ybWF0IiwiZGF0YUFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O2VBRWUsQ0FBQ0EsV0FBRCxFQUFjQyxXQUFkLEVBQTJCQyxNQUEzQixLQUFzQztBQUNuRCxRQUFNQyxPQUFPLEdBQUcsdUJBQVMsc0JBQVFILFdBQVIsQ0FBVCxFQUErQixzQkFBUUMsV0FBUixDQUEvQixDQUFoQjs7QUFFQSxNQUFJQyxNQUFNLEtBQUssT0FBZixFQUF3QjtBQUN0QixXQUFPLDBCQUFZQyxPQUFaLENBQVA7QUFFRCxHQUhELE1BR08sSUFBSUQsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDNUIsV0FBTyx5QkFBV0MsT0FBWCxDQUFQO0FBQ0Q7O0FBRUQsU0FBTyxxQkFBT0EsT0FBUCxDQUFQO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZEFzdCBmcm9tICcuL2J1aWxkQXN0JztcbmltcG9ydCBwYXJzZXJzIGZyb20gJy4vcGFyc2Vycyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vZm9ybWF0dGVycy9yZW5kZXInO1xuaW1wb3J0IHJlbmRlclBsYWluIGZyb20gJy4vZm9ybWF0dGVycy9yZW5kZXJQbGFpbic7XG5pbXBvcnQgcmVuZGVySnNvbiBmcm9tICcuL2Zvcm1hdHRlcnMvcmVuZGVySnNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IChwYXRoVG9GaWxlMSwgcGF0aFRvRmlsZTIsIGZvcm1hdCkgPT4ge1xuICBjb25zdCBkYXRhQXN0ID0gYnVpbGRBc3QocGFyc2VycyhwYXRoVG9GaWxlMSksIHBhcnNlcnMocGF0aFRvRmlsZTIpKTtcblxuICBpZiAoZm9ybWF0ID09PSAncGxhaW4nKSB7XG4gICAgcmV0dXJuIHJlbmRlclBsYWluKGRhdGFBc3QpO1xuXG4gIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnanNvbicpIHtcbiAgICByZXR1cm4gcmVuZGVySnNvbihkYXRhQXN0KTtcbiAgfVxuXG4gIHJldHVybiByZW5kZXIoZGF0YUFzdCk7XG59O1xuIl19