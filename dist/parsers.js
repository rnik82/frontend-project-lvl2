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

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const changeStrToNumber = object => {
  const keys = Object.keys(object);
  return keys.reduce((acc, key) => {
    const value = object[key];

    if (_lodash.default.isObject(value)) {
      return { ...acc,
        [key]: changeStrToNumber(value)
      };
    }

    const valueForCheck = Number(value);
    const newValue = !_lodash.default.isBoolean(value) && !_lodash.default.isNaN(valueForCheck) ? valueForCheck : value;
    return { ...acc,
      [key]: newValue
    };
  }, {});
};

var _default = pathToFile => {
  var _ref, _process$cwd, _path$extname;

  const parse = {
    '.json': data => JSON.parse(data),
    '.yml': data => _jsYaml.default.safeLoad(data),
    '.ini': data => changeStrToNumber(_ini.default.parse(data))
  };
  const data = (_ref = (_process$cwd = _process.default.cwd(), _path.default.resolve(_process$cwd, pathToFile)), _fs.default.readFileSync(_ref, 'utf-8'));
  const result = (_path$extname = _path.default.extname(pathToFile), parse[_path$extname](data));
  return result;
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZXJzLmpzIl0sIm5hbWVzIjpbImNoYW5nZVN0clRvTnVtYmVyIiwib2JqZWN0Iiwia2V5cyIsIk9iamVjdCIsInJlZHVjZSIsImFjYyIsImtleSIsInZhbHVlIiwiXyIsImlzT2JqZWN0IiwidmFsdWVGb3JDaGVjayIsIk51bWJlciIsIm5ld1ZhbHVlIiwiaXNCb29sZWFuIiwiaXNOYU4iLCJwYXRoVG9GaWxlIiwicGFyc2UiLCJkYXRhIiwiSlNPTiIsInlhbWwiLCJzYWZlTG9hZCIsImluaSIsInByb2Nlc3MiLCJjd2QiLCJwYXRoIiwicmVzb2x2ZSIsImZzIiwicmVhZEZpbGVTeW5jIiwicmVzdWx0IiwiZXh0bmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsaUJBQWlCLEdBQUlDLE1BQUQsSUFBWTtBQUNwQyxRQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZRCxNQUFaLENBQWI7QUFFQSxTQUFPQyxJQUFJLENBQUNFLE1BQUwsQ0FBWSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUMvQixVQUFNQyxLQUFLLEdBQUdOLE1BQU0sQ0FBQ0ssR0FBRCxDQUFwQjs7QUFDQSxRQUFJRSxnQkFBRUMsUUFBRixDQUFXRixLQUFYLENBQUosRUFBdUI7QUFDckIsYUFBTyxFQUFFLEdBQUdGLEdBQUw7QUFBVSxTQUFDQyxHQUFELEdBQU9OLGlCQUFpQixDQUFDTyxLQUFEO0FBQWxDLE9BQVA7QUFDRDs7QUFDRCxVQUFNRyxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0osS0FBRCxDQUE1QjtBQUNBLFVBQU1LLFFBQVEsR0FBRyxDQUFDSixnQkFBRUssU0FBRixDQUFZTixLQUFaLENBQUQsSUFBdUIsQ0FBQ0MsZ0JBQUVNLEtBQUYsQ0FBUUosYUFBUixDQUF4QixHQUNiQSxhQURhLEdBQ0dILEtBRHBCO0FBR0EsV0FBTyxFQUFFLEdBQUdGLEdBQUw7QUFBVSxPQUFDQyxHQUFELEdBQU9NO0FBQWpCLEtBQVA7QUFDRCxHQVZNLEVBVUosRUFWSSxDQUFQO0FBV0QsQ0FkRDs7ZUFnQmdCRyxVQUFELElBQWdCO0FBQUE7O0FBRTdCLFFBQU1DLEtBQUssR0FBRztBQUNaLGFBQVVDLElBQUQsSUFBVUMsSUFBSSxDQUFDRixLQUFMLENBQVdDLElBQVgsQ0FEUDtBQUVaLFlBQVNBLElBQUQsSUFBVUUsZ0JBQUtDLFFBQUwsQ0FBY0gsSUFBZCxDQUZOO0FBR1osWUFBU0EsSUFBRCxJQUFVakIsaUJBQWlCLENBQUNxQixhQUFJTCxLQUFKLENBQVVDLElBQVYsQ0FBRDtBQUh2QixHQUFkO0FBTUEsUUFBTUEsSUFBSSwyQkFBR0ssaUJBQVFDLEdBQVIsRUFBSCxFQUNMQyxjQUFLQyxPQUFMLGVBQWdCVixVQUFoQixDQURLLEdBRUxXLFlBQUdDLFlBQUgsT0FBbUIsT0FBbkIsQ0FGSyxDQUFWO0FBS0EsUUFBTUMsTUFBTSxvQkFBR0osY0FBS0ssT0FBTCxDQUFhZCxVQUFiLENBQUgsRUFDUEMsS0FBSyxlQUFMLENBQVNDLElBQVQsQ0FETyxDQUFaO0FBR0EsU0FBT1csTUFBUDtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ3Byb2Nlc3MnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB5YW1sIGZyb20gJ2pzLXlhbWwnO1xuaW1wb3J0IGluaSBmcm9tICdpbmknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgY2hhbmdlU3RyVG9OdW1iZXIgPSAob2JqZWN0KSA9PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIHJldHVybiBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuICAgIGlmIChfLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHsgLi4uYWNjLCBba2V5XTogY2hhbmdlU3RyVG9OdW1iZXIodmFsdWUpIH07XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlRm9yQ2hlY2sgPSBOdW1iZXIodmFsdWUpO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gIV8uaXNCb29sZWFuKHZhbHVlKSAmJiAhXy5pc05hTih2YWx1ZUZvckNoZWNrKVxuICAgICAgPyB2YWx1ZUZvckNoZWNrIDogdmFsdWU7XG5cbiAgICByZXR1cm4geyAuLi5hY2MsIFtrZXldOiBuZXdWYWx1ZSB9O1xuICB9LCB7fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAocGF0aFRvRmlsZSkgPT4ge1xuICBcbiAgY29uc3QgcGFyc2UgPSB7XG4gICAgJy5qc29uJzogKGRhdGEpID0+IEpTT04ucGFyc2UoZGF0YSksXG4gICAgJy55bWwnOiAoZGF0YSkgPT4geWFtbC5zYWZlTG9hZChkYXRhKSxcbiAgICAnLmluaSc6IChkYXRhKSA9PiBjaGFuZ2VTdHJUb051bWJlcihpbmkucGFyc2UoZGF0YSkpLFxuICB9O1xuXG4gIGNvbnN0IGRhdGEgPSBwcm9jZXNzLmN3ZCgpXG4gICAgfD4gcGF0aC5yZXNvbHZlKCMsIHBhdGhUb0ZpbGUpXG4gICAgfD4gZnMucmVhZEZpbGVTeW5jKCMsICd1dGYtOCcpO1xuICBcbiAgXG4gIGNvbnN0IHJlc3VsdCA9IHBhdGguZXh0bmFtZShwYXRoVG9GaWxlKVxuICAgIHw+IHBhcnNlWyNdKGRhdGEpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIl19