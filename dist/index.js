"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _parsers = _interopRequireDefault(require("./parsers"));

var _render = _interopRequireDefault(require("./formatters/render"));

var _renderPlain = _interopRequireDefault(require("./formatters/renderPlain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildAst = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);

  const commonKeys = _lodash.default.uniq(keys1.concat(keys2));

  const result = commonKeys.map(key => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (_lodash.default.has(data1, key) && _lodash.default.has(data2, key)) {
      if (typeof value1 === 'object' && typeof value2 === 'object') {
        return {
          status: 'unchanged',
          key,
          children: buildAst(value1, value2)
        };
      }

      if (value1 !== value2) {
        return {
          status: 'changed',
          key,
          value: value1,
          value2
        };
      }

      return {
        status: 'unchanged',
        key,
        value: value1
      };
    }

    if (_lodash.default.has(data1, key) && !_lodash.default.has(data2, key)) {
      return {
        status: 'deleted',
        key,
        value: value1
      };
    }

    if (!_lodash.default.has(data1, key) && _lodash.default.has(data2, key)) {
      return {
        status: 'added',
        key,
        value: value2
      };
    }
  });
  return _lodash.default.flatten(result);
};

var _default = (pathToFile1, pathToFile2, format) => {
  const parsedData1 = (0, _parsers.default)(pathToFile1);
  const parsedData2 = (0, _parsers.default)(pathToFile2);
  const dataAst = buildAst(parsedData1, parsedData2);
  return format === 'plain' ? (0, _renderPlain.default)(dataAst) : (0, _render.default)(dataAst);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJidWlsZEFzdCIsImRhdGExIiwiZGF0YTIiLCJrZXlzMSIsIk9iamVjdCIsImtleXMiLCJrZXlzMiIsImNvbW1vbktleXMiLCJfIiwidW5pcSIsImNvbmNhdCIsInJlc3VsdCIsIm1hcCIsImtleSIsInZhbHVlMSIsInZhbHVlMiIsImhhcyIsInN0YXR1cyIsImNoaWxkcmVuIiwidmFsdWUiLCJmbGF0dGVuIiwicGF0aFRvRmlsZTEiLCJwYXRoVG9GaWxlMiIsImZvcm1hdCIsInBhcnNlZERhdGExIiwicGFyc2VkRGF0YTIiLCJkYXRhQXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQWtCO0FBRWpDLFFBQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLEtBQVosQ0FBZDtBQUNBLFFBQU1LLEtBQUssR0FBR0YsTUFBTSxDQUFDQyxJQUFQLENBQVlILEtBQVosQ0FBZDs7QUFFQSxRQUFNSyxVQUFVLEdBQUdDLGdCQUFFQyxJQUFGLENBQU9OLEtBQUssQ0FBQ08sTUFBTixDQUFhSixLQUFiLENBQVAsQ0FBbkI7O0FBRUEsUUFBTUssTUFBTSxHQUFHSixVQUFVLENBQUNLLEdBQVgsQ0FBZ0JDLEdBQUQsSUFBUztBQUNyQyxVQUFNQyxNQUFNLEdBQUdiLEtBQUssQ0FBQ1ksR0FBRCxDQUFwQjtBQUNBLFVBQU1FLE1BQU0sR0FBR2IsS0FBSyxDQUFDVyxHQUFELENBQXBCOztBQUNBLFFBQUlMLGdCQUFFUSxHQUFGLENBQU1mLEtBQU4sRUFBYVksR0FBYixLQUFxQkwsZ0JBQUVRLEdBQUYsQ0FBTWQsS0FBTixFQUFhVyxHQUFiLENBQXpCLEVBQTRDO0FBQzFDLFVBQUksT0FBT0MsTUFBUCxLQUFrQixRQUFsQixJQUE4QixPQUFPQyxNQUFQLEtBQWtCLFFBQXBELEVBQThEO0FBQzVELGVBQU87QUFBRUUsVUFBQUEsTUFBTSxFQUFFLFdBQVY7QUFBdUJKLFVBQUFBLEdBQXZCO0FBQTRCSyxVQUFBQSxRQUFRLEVBQUVsQixRQUFRLENBQUNjLE1BQUQsRUFBU0MsTUFBVDtBQUE5QyxTQUFQO0FBQ0Q7O0FBQ0QsVUFBSUQsTUFBTSxLQUFLQyxNQUFmLEVBQXVCO0FBQ3JCLGVBQU87QUFBRUUsVUFBQUEsTUFBTSxFQUFFLFNBQVY7QUFBcUJKLFVBQUFBLEdBQXJCO0FBQTBCTSxVQUFBQSxLQUFLLEVBQUVMLE1BQWpDO0FBQXlDQyxVQUFBQTtBQUF6QyxTQUFQO0FBQ0Q7O0FBQ0QsYUFBTztBQUFFRSxRQUFBQSxNQUFNLEVBQUUsV0FBVjtBQUF1QkosUUFBQUEsR0FBdkI7QUFBNEJNLFFBQUFBLEtBQUssRUFBRUw7QUFBbkMsT0FBUDtBQUNEOztBQUNELFFBQUlOLGdCQUFFUSxHQUFGLENBQU1mLEtBQU4sRUFBYVksR0FBYixLQUFxQixDQUFDTCxnQkFBRVEsR0FBRixDQUFNZCxLQUFOLEVBQWFXLEdBQWIsQ0FBMUIsRUFBNkM7QUFDM0MsYUFBTztBQUFFSSxRQUFBQSxNQUFNLEVBQUUsU0FBVjtBQUFxQkosUUFBQUEsR0FBckI7QUFBMEJNLFFBQUFBLEtBQUssRUFBRUw7QUFBakMsT0FBUDtBQUNEOztBQUNELFFBQUksQ0FBQ04sZ0JBQUVRLEdBQUYsQ0FBTWYsS0FBTixFQUFhWSxHQUFiLENBQUQsSUFBc0JMLGdCQUFFUSxHQUFGLENBQU1kLEtBQU4sRUFBYVcsR0FBYixDQUExQixFQUE2QztBQUMzQyxhQUFPO0FBQUVJLFFBQUFBLE1BQU0sRUFBRSxPQUFWO0FBQW1CSixRQUFBQSxHQUFuQjtBQUF3Qk0sUUFBQUEsS0FBSyxFQUFFSjtBQUEvQixPQUFQO0FBQ0M7QUFDRixHQWxCWSxDQUFmO0FBbUJBLFNBQU9QLGdCQUFFWSxPQUFGLENBQVVULE1BQVYsQ0FBUDtBQUNELENBM0JEOztlQTZCZSxDQUFDVSxXQUFELEVBQWNDLFdBQWQsRUFBMkJDLE1BQTNCLEtBQXNDO0FBQ25ELFFBQU1DLFdBQVcsR0FBRyxzQkFBUUgsV0FBUixDQUFwQjtBQUNBLFFBQU1JLFdBQVcsR0FBRyxzQkFBUUgsV0FBUixDQUFwQjtBQUNBLFFBQU1JLE9BQU8sR0FBRzFCLFFBQVEsQ0FBQ3dCLFdBQUQsRUFBY0MsV0FBZCxDQUF4QjtBQUNBLFNBQU9GLE1BQU0sS0FBSyxPQUFYLEdBQXFCLDBCQUFZRyxPQUFaLENBQXJCLEdBQTRDLHFCQUFPQSxPQUFQLENBQW5EO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcGFyc2VycyBmcm9tICcuL3BhcnNlcnMnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2Zvcm1hdHRlcnMvcmVuZGVyJztcbmltcG9ydCByZW5kZXJQbGFpbiBmcm9tICcuL2Zvcm1hdHRlcnMvcmVuZGVyUGxhaW4nO1xuXG5jb25zdCBidWlsZEFzdCA9IChkYXRhMSwgZGF0YTIpID0+IHtcblxuICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKGRhdGExKTtcbiAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyhkYXRhMik7XG5cbiAgY29uc3QgY29tbW9uS2V5cyA9IF8udW5pcShrZXlzMS5jb25jYXQoa2V5czIpKTtcblxuICBjb25zdCByZXN1bHQgPSBjb21tb25LZXlzLm1hcCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUxID0gZGF0YTFba2V5XTtcbiAgICBjb25zdCB2YWx1ZTIgPSBkYXRhMltrZXldO1xuICAgIGlmIChfLmhhcyhkYXRhMSwga2V5KSAmJiBfLmhhcyhkYXRhMiwga2V5KSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZTEgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZTIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogJ3VuY2hhbmdlZCcsIGtleSwgY2hpbGRyZW46IGJ1aWxkQXN0KHZhbHVlMSwgdmFsdWUyKX07XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUxICE9PSB2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnY2hhbmdlZCcsIGtleSwgdmFsdWU6IHZhbHVlMSwgdmFsdWUyIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyBzdGF0dXM6ICd1bmNoYW5nZWQnLCBrZXksIHZhbHVlOiB2YWx1ZTF9O1xuICAgIH1cbiAgICBpZiAoXy5oYXMoZGF0YTEsIGtleSkgJiYgIV8uaGFzKGRhdGEyLCBrZXkpKSB7XG4gICAgICByZXR1cm4geyBzdGF0dXM6ICdkZWxldGVkJywga2V5LCB2YWx1ZTogdmFsdWUxfTtcbiAgICB9XG4gICAgaWYgKCFfLmhhcyhkYXRhMSwga2V5KSAmJiBfLmhhcyhkYXRhMiwga2V5KSkge1xuICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnYWRkZWQnLCBrZXksIHZhbHVlOiB2YWx1ZTIgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgcmV0dXJuIF8uZmxhdHRlbihyZXN1bHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHBhdGhUb0ZpbGUxLCBwYXRoVG9GaWxlMiwgZm9ybWF0KSA9PiB7XG4gIGNvbnN0IHBhcnNlZERhdGExID0gcGFyc2VycyhwYXRoVG9GaWxlMSk7XG4gIGNvbnN0IHBhcnNlZERhdGEyID0gcGFyc2VycyhwYXRoVG9GaWxlMik7XG4gIGNvbnN0IGRhdGFBc3QgPSBidWlsZEFzdChwYXJzZWREYXRhMSwgcGFyc2VkRGF0YTIpO1xuICByZXR1cm4gZm9ybWF0ID09PSAncGxhaW4nID8gcmVuZGVyUGxhaW4oZGF0YUFzdCkgOiByZW5kZXIoZGF0YUFzdCk7XG59O1xuIl19