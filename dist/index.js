"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _parsers = _interopRequireDefault(require("./parsers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (pathToFile1, pathToFile2) => {
  const object1 = (0, _parsers.default)(pathToFile1);
  const object2 = (0, _parsers.default)(pathToFile2);
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  const commonKeys = (0, _lodash.uniq)(keys1.concat(keys2));
  const result = commonKeys.reduce((acc, key) => {
    if ((0, _lodash.has)(object1, key) && (0, _lodash.has)(object2, key) && object1[key] === object2[key]) {
      return [...acc, `  ${key}: ${object1[key]}`];
    }

    if ((0, _lodash.has)(object1, key) && (0, _lodash.has)(object2, key) && object1[key] !== object2[key]) {
      return [...acc, `- ${key}: ${object1[key]}`, `+ ${key}: ${object2[key]}`];
    }

    if ((0, _lodash.has)(object1, key) && !(0, _lodash.has)(object2, key)) {
      return [...acc, `- ${key}: ${object1[key]}`];
    }

    return [...acc, `+ ${key}: ${object2[key]}`];
  }, []);
  return `{\n${result.join('\n')}\n}`;
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwYXRoVG9GaWxlMSIsInBhdGhUb0ZpbGUyIiwib2JqZWN0MSIsIm9iamVjdDIiLCJrZXlzMSIsIk9iamVjdCIsImtleXMiLCJrZXlzMiIsImNvbW1vbktleXMiLCJjb25jYXQiLCJyZXN1bHQiLCJyZWR1Y2UiLCJhY2MiLCJrZXkiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7ZUFFZSxDQUFDQSxXQUFELEVBQWNDLFdBQWQsS0FBOEI7QUFFM0MsUUFBTUMsT0FBTyxHQUFHLHNCQUFRRixXQUFSLENBQWhCO0FBQ0EsUUFBTUcsT0FBTyxHQUFHLHNCQUFRRixXQUFSLENBQWhCO0FBRUEsUUFBTUcsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosT0FBWixDQUFkO0FBQ0EsUUFBTUssS0FBSyxHQUFHRixNQUFNLENBQUNDLElBQVAsQ0FBWUgsT0FBWixDQUFkO0FBRUEsUUFBTUssVUFBVSxHQUFHLGtCQUFLSixLQUFLLENBQUNLLE1BQU4sQ0FBYUYsS0FBYixDQUFMLENBQW5CO0FBRUEsUUFBTUcsTUFBTSxHQUFHRixVQUFVLENBQUNHLE1BQVgsQ0FBa0IsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDN0MsUUFBSSxpQkFBSVgsT0FBSixFQUFhVyxHQUFiLEtBQXFCLGlCQUFJVixPQUFKLEVBQWFVLEdBQWIsQ0FBckIsSUFBMENYLE9BQU8sQ0FBQ1csR0FBRCxDQUFQLEtBQWlCVixPQUFPLENBQUNVLEdBQUQsQ0FBdEUsRUFBNkU7QUFDM0UsYUFBTyxDQUFDLEdBQUdELEdBQUosRUFBVSxLQUFJQyxHQUFJLEtBQUlYLE9BQU8sQ0FBQ1csR0FBRCxDQUFNLEVBQW5DLENBQVA7QUFDRDs7QUFDRCxRQUFJLGlCQUFJWCxPQUFKLEVBQWFXLEdBQWIsS0FBcUIsaUJBQUlWLE9BQUosRUFBYVUsR0FBYixDQUFyQixJQUEwQ1gsT0FBTyxDQUFDVyxHQUFELENBQVAsS0FBaUJWLE9BQU8sQ0FBQ1UsR0FBRCxDQUF0RSxFQUE2RTtBQUMzRSxhQUFPLENBQUMsR0FBR0QsR0FBSixFQUFVLEtBQUlDLEdBQUksS0FBSVgsT0FBTyxDQUFDVyxHQUFELENBQU0sRUFBbkMsRUFBdUMsS0FBSUEsR0FBSSxLQUFJVixPQUFPLENBQUNVLEdBQUQsQ0FBTSxFQUFoRSxDQUFQO0FBQ0Q7O0FBQ0QsUUFBSSxpQkFBSVgsT0FBSixFQUFhVyxHQUFiLEtBQXFCLENBQUMsaUJBQUlWLE9BQUosRUFBYVUsR0FBYixDQUExQixFQUE2QztBQUMzQyxhQUFPLENBQUMsR0FBR0QsR0FBSixFQUFVLEtBQUlDLEdBQUksS0FBSVgsT0FBTyxDQUFDVyxHQUFELENBQU0sRUFBbkMsQ0FBUDtBQUNEOztBQUNELFdBQU8sQ0FBQyxHQUFHRCxHQUFKLEVBQVUsS0FBSUMsR0FBSSxLQUFJVixPQUFPLENBQUNVLEdBQUQsQ0FBTSxFQUFuQyxDQUFQO0FBQ0QsR0FYYyxFQVdaLEVBWFksQ0FBZjtBQWFBLFNBQVEsTUFBS0gsTUFBTSxDQUFDSSxJQUFQLENBQVksSUFBWixDQUFrQixLQUEvQjtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bmlxLCBoYXMgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHBhcnNlcnMgZnJvbSAnLi9wYXJzZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgKHBhdGhUb0ZpbGUxLCBwYXRoVG9GaWxlMikgPT4ge1xuXG4gIGNvbnN0IG9iamVjdDEgPSBwYXJzZXJzKHBhdGhUb0ZpbGUxKTtcbiAgY29uc3Qgb2JqZWN0MiA9IHBhcnNlcnMocGF0aFRvRmlsZTIpO1xuICBcbiAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhvYmplY3QxKTtcbiAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyhvYmplY3QyKTtcblxuICBjb25zdCBjb21tb25LZXlzID0gdW5pcShrZXlzMS5jb25jYXQoa2V5czIpKTtcblxuICBjb25zdCByZXN1bHQgPSBjb21tb25LZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAoaGFzKG9iamVjdDEsIGtleSkgJiYgaGFzKG9iamVjdDIsIGtleSkgJiYgb2JqZWN0MVtrZXldID09PSBvYmplY3QyW2tleV0pIHtcbiAgICAgIHJldHVybiBbLi4uYWNjLCBgICAke2tleX06ICR7b2JqZWN0MVtrZXldfWBdO1xuICAgIH1cbiAgICBpZiAoaGFzKG9iamVjdDEsIGtleSkgJiYgaGFzKG9iamVjdDIsIGtleSkgJiYgb2JqZWN0MVtrZXldICE9PSBvYmplY3QyW2tleV0pIHtcbiAgICAgIHJldHVybiBbLi4uYWNjLCBgLSAke2tleX06ICR7b2JqZWN0MVtrZXldfWAsIGArICR7a2V5fTogJHtvYmplY3QyW2tleV19YF07XG4gICAgfVxuICAgIGlmIChoYXMob2JqZWN0MSwga2V5KSAmJiAhaGFzKG9iamVjdDIsIGtleSkpIHtcbiAgICAgIHJldHVybiBbLi4uYWNjLCBgLSAke2tleX06ICR7b2JqZWN0MVtrZXldfWBdO1xuICAgIH1cbiAgICByZXR1cm4gWy4uLmFjYywgYCsgJHtrZXl9OiAke29iamVjdDJba2V5XX1gXTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBge1xcbiR7cmVzdWx0LmpvaW4oJ1xcbicpfVxcbn1gO1xufTtcbiJdfQ==