"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buildAst = _interopRequireDefault(require("./buildAst"));

var _index = _interopRequireDefault(require("./formatters/index"));

var _parsers = _interopRequireDefault(require("./parsers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (pathToFile1, pathToFile2, format) => {
  const [parsedData1, parsedData2] = (0, _parsers.default)(pathToFile1, pathToFile2);
  const dataAst = (0, _buildAst.default)(parsedData1, parsedData2);
  return (0, _index.default)(dataAst, format);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwYXRoVG9GaWxlMSIsInBhdGhUb0ZpbGUyIiwiZm9ybWF0IiwicGFyc2VkRGF0YTEiLCJwYXJzZWREYXRhMiIsImRhdGFBc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztlQUVlLENBQUNBLFdBQUQsRUFBY0MsV0FBZCxFQUEyQkMsTUFBM0IsS0FBc0M7QUFDbkQsUUFBTSxDQUFDQyxXQUFELEVBQWNDLFdBQWQsSUFBNkIsc0JBQU1KLFdBQU4sRUFBbUJDLFdBQW5CLENBQW5DO0FBQ0EsUUFBTUksT0FBTyxHQUFHLHVCQUFTRixXQUFULEVBQXNCQyxXQUF0QixDQUFoQjtBQUVBLFNBQU8sb0JBQU9DLE9BQVAsRUFBZ0JILE1BQWhCLENBQVA7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkQXN0IGZyb20gJy4vYnVpbGRBc3QnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2Zvcm1hdHRlcnMvaW5kZXgnO1xuaW1wb3J0IHBhcnNlIGZyb20gJy4vcGFyc2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IChwYXRoVG9GaWxlMSwgcGF0aFRvRmlsZTIsIGZvcm1hdCkgPT4ge1xuICBjb25zdCBbcGFyc2VkRGF0YTEsIHBhcnNlZERhdGEyXSA9IHBhcnNlKHBhdGhUb0ZpbGUxLCBwYXRoVG9GaWxlMilcbiAgY29uc3QgZGF0YUFzdCA9IGJ1aWxkQXN0KHBhcnNlZERhdGExLCBwYXJzZWREYXRhMik7XG5cbiAgcmV0dXJuIHJlbmRlcihkYXRhQXN0LCBmb3JtYXQpO1xufTtcbiJdfQ==