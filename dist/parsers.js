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
  const relativPath = _process.default.cwd();

  const format = _path.default.extname(pathToFile);

  const absolutePath = _path.default.resolve(relativPath, pathToFile);

  const data = _fs.default.readFileSync(absolutePath, 'utf-8');

  const chooseParser = {
    '.json': JSON.parse,
    '.yml': _jsYaml.default.safeLoad,
    '.ini': _ini.default.parse
  };
  const parse = chooseParser[format];
  return format === '.ini' ? changeStrToNumber(parse(data)) : parse(data);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZXJzLmpzIl0sIm5hbWVzIjpbImNoYW5nZVN0clRvTnVtYmVyIiwib2JqZWN0Iiwia2V5cyIsIk9iamVjdCIsInJlZHVjZSIsImFjYyIsImtleSIsInZhbHVlIiwiXyIsImlzT2JqZWN0IiwidmFsdWVGb3JDaGVjayIsIk51bWJlciIsIm5ld1ZhbHVlIiwiaXNCb29sZWFuIiwiaXNOYU4iLCJwYXRoVG9GaWxlIiwicmVsYXRpdlBhdGgiLCJwcm9jZXNzIiwiY3dkIiwiZm9ybWF0IiwicGF0aCIsImV4dG5hbWUiLCJhYnNvbHV0ZVBhdGgiLCJyZXNvbHZlIiwiZGF0YSIsImZzIiwicmVhZEZpbGVTeW5jIiwiY2hvb3NlUGFyc2VyIiwiSlNPTiIsInBhcnNlIiwieWFtbCIsInNhZmVMb2FkIiwiaW5pIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxpQkFBaUIsR0FBSUMsTUFBRCxJQUFZO0FBQ3BDLFFBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlELE1BQVosQ0FBYjtBQUVBLFNBQU9DLElBQUksQ0FBQ0UsTUFBTCxDQUFZLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQy9CLFVBQU1DLEtBQUssR0FBR04sTUFBTSxDQUFDSyxHQUFELENBQXBCOztBQUNBLFFBQUlFLGdCQUFFQyxRQUFGLENBQVdGLEtBQVgsQ0FBSixFQUF1QjtBQUNyQixhQUFPLEVBQUUsR0FBR0YsR0FBTDtBQUFVLFNBQUNDLEdBQUQsR0FBT04saUJBQWlCLENBQUNPLEtBQUQ7QUFBbEMsT0FBUDtBQUNEOztBQUNELFVBQU1HLGFBQWEsR0FBR0MsTUFBTSxDQUFDSixLQUFELENBQTVCO0FBQ0EsVUFBTUssUUFBUSxHQUFHLENBQUNKLGdCQUFFSyxTQUFGLENBQVlOLEtBQVosQ0FBRCxJQUF1QixDQUFDQyxnQkFBRU0sS0FBRixDQUFRSixhQUFSLENBQXhCLEdBQ2JBLGFBRGEsR0FDR0gsS0FEcEI7QUFHQSxXQUFPLEVBQUUsR0FBR0YsR0FBTDtBQUFVLE9BQUNDLEdBQUQsR0FBT007QUFBakIsS0FBUDtBQUNELEdBVk0sRUFVSixFQVZJLENBQVA7QUFXRCxDQWREOztlQWdCZ0JHLFVBQUQsSUFBZ0I7QUFDN0IsUUFBTUMsV0FBVyxHQUFHQyxpQkFBUUMsR0FBUixFQUFwQjs7QUFFQSxRQUFNQyxNQUFNLEdBQUdDLGNBQUtDLE9BQUwsQ0FBYU4sVUFBYixDQUFmOztBQUVBLFFBQU1PLFlBQVksR0FBR0YsY0FBS0csT0FBTCxDQUFhUCxXQUFiLEVBQTBCRCxVQUExQixDQUFyQjs7QUFDQSxRQUFNUyxJQUFJLEdBQUdDLFlBQUdDLFlBQUgsQ0FBZ0JKLFlBQWhCLEVBQThCLE9BQTlCLENBQWI7O0FBRUEsUUFBTUssWUFBWSxHQUFHO0FBQ25CLGFBQVNDLElBQUksQ0FBQ0MsS0FESztBQUVuQixZQUFRQyxnQkFBS0MsUUFGTTtBQUduQixZQUFRQyxhQUFJSDtBQUhPLEdBQXJCO0FBS0EsUUFBTUEsS0FBSyxHQUFHRixZQUFZLENBQUNSLE1BQUQsQ0FBMUI7QUFFQSxTQUFPQSxNQUFNLEtBQUssTUFBWCxHQUFvQm5CLGlCQUFpQixDQUFDNkIsS0FBSyxDQUFDTCxJQUFELENBQU4sQ0FBckMsR0FBcURLLEtBQUssQ0FBQ0wsSUFBRCxDQUFqRTtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ3Byb2Nlc3MnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB5YW1sIGZyb20gJ2pzLXlhbWwnO1xuaW1wb3J0IGluaSBmcm9tICdpbmknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgY2hhbmdlU3RyVG9OdW1iZXIgPSAob2JqZWN0KSA9PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIHJldHVybiBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuICAgIGlmIChfLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHsgLi4uYWNjLCBba2V5XTogY2hhbmdlU3RyVG9OdW1iZXIodmFsdWUpIH07XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlRm9yQ2hlY2sgPSBOdW1iZXIodmFsdWUpO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gIV8uaXNCb29sZWFuKHZhbHVlKSAmJiAhXy5pc05hTih2YWx1ZUZvckNoZWNrKVxuICAgICAgPyB2YWx1ZUZvckNoZWNrIDogdmFsdWU7XG5cbiAgICByZXR1cm4geyAuLi5hY2MsIFtrZXldOiBuZXdWYWx1ZSB9O1xuICB9LCB7fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAocGF0aFRvRmlsZSkgPT4ge1xuICBjb25zdCByZWxhdGl2UGF0aCA9IHByb2Nlc3MuY3dkKCk7XG5cbiAgY29uc3QgZm9ybWF0ID0gcGF0aC5leHRuYW1lKHBhdGhUb0ZpbGUpO1xuXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IHBhdGgucmVzb2x2ZShyZWxhdGl2UGF0aCwgcGF0aFRvRmlsZSk7XG4gIGNvbnN0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoYWJzb2x1dGVQYXRoLCAndXRmLTgnKTtcblxuICBjb25zdCBjaG9vc2VQYXJzZXIgPSB7XG4gICAgJy5qc29uJzogSlNPTi5wYXJzZSxcbiAgICAnLnltbCc6IHlhbWwuc2FmZUxvYWQsXG4gICAgJy5pbmknOiBpbmkucGFyc2UsXG4gIH07XG4gIGNvbnN0IHBhcnNlID0gY2hvb3NlUGFyc2VyW2Zvcm1hdF07XG4gIFxuICByZXR1cm4gZm9ybWF0ID09PSAnLmluaScgPyBjaGFuZ2VTdHJUb051bWJlcihwYXJzZShkYXRhKSkgOiBwYXJzZShkYXRhKTtcbn07XG4iXX0=