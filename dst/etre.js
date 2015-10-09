"use strict";

var _lodashLangIsBoolean2 = require("lodash/lang/isBoolean");

var _lodashLangIsBoolean3 = _interopRequireDefault(_lodashLangIsBoolean2);

var _lodashLangIsArray2 = require("lodash/lang/isArray");

var _lodashLangIsArray3 = _interopRequireDefault(_lodashLangIsArray2);

var _lodashLangIsFunction2 = require("lodash/lang/isFunction");

var _lodashLangIsFunction3 = _interopRequireDefault(_lodashLangIsFunction2);

var _lodashLangIsNull2 = require("lodash/lang/isNull");

var _lodashLangIsNull3 = _interopRequireDefault(_lodashLangIsNull2);

var _lodashLangIsNumber2 = require("lodash/lang/isNumber");

var _lodashLangIsNumber3 = _interopRequireDefault(_lodashLangIsNumber2);

var _lodashLangIsObject2 = require("lodash/lang/isObject");

var _lodashLangIsObject3 = _interopRequireDefault(_lodashLangIsObject2);

var _lodashLangIsRegExp2 = require("lodash/lang/isRegExp");

var _lodashLangIsRegExp3 = _interopRequireDefault(_lodashLangIsRegExp2);

var _lodashLangIsString2 = require("lodash/lang/isString");

var _lodashLangIsString3 = _interopRequireDefault(_lodashLangIsString2);

var _lodashLangIsUndefined2 = require("lodash/lang/isUndefined");

var _lodashLangIsUndefined3 = _interopRequireDefault(_lodashLangIsUndefined2);

var _lodashCollectionAll2 = require("lodash/collection/all");

var _lodashCollectionAll3 = _interopRequireDefault(_lodashCollectionAll2);

var _lodashArrayZipWith2 = require("lodash/array/zipWith");

var _lodashArrayZipWith3 = _interopRequireDefault(_lodashArrayZipWith2);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

exports.whatType = whatType;
exports.shallowShape = shallowShape;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BOOLEAN = Symbol("boolean");
exports.BOOLEAN = BOOLEAN;
var ARRAY = Symbol("array");
exports.ARRAY = ARRAY;
var FUNCTION = Symbol("function");
exports.FUNCTION = FUNCTION;
var NULL = Symbol("null");
exports.NULL = NULL;
var NUMBER = Symbol("number");
exports.NUMBER = NUMBER;
var OBJECT = Symbol("object");
exports.OBJECT = OBJECT;
var REGEXP = Symbol("regexp");
exports.REGEXP = REGEXP;
var STRING = Symbol("string");
exports.STRING = STRING;
var UNDEFINED = Symbol("undefined");
exports.UNDEFINED = UNDEFINED;
var UNKNOWN = Symbol("unknown");
exports.UNKNOWN = UNKNOWN;
var ANY = Symbol("any");

exports.ANY = ANY;
function checker(func, symb) {
  return function (v) {
    return func(v) || v === symb;
  };
}

var isBoolean = checker(_lodashLangIsBoolean3["default"], BOOLEAN);
exports.isBoolean = isBoolean;
var isArray = checker(_lodashLangIsArray3["default"], ARRAY);
exports.isArray = isArray;
var isFunction = checker(_lodashLangIsFunction3["default"], FUNCTION);
exports.isFunction = isFunction;
var isNull = checker(_lodashLangIsNull3["default"], NULL);
exports.isNull = isNull;
var isNumber = checker(_lodashLangIsNumber3["default"], NUMBER);
exports.isNumber = isNumber;
var isObject = checker(_lodashLangIsObject3["default"], OBJECT);
exports.isObject = isObject;
var isRegExp = checker(_lodashLangIsRegExp3["default"], REGEXP);
exports.isRegExp = isRegExp;
var isString = checker(_lodashLangIsString3["default"], STRING);
exports.isString = isString;
var isUndefined = checker(_lodashLangIsUndefined3["default"], UNDEFINED);
exports.isUndefined = isUndefined;
var isAny = function isAny(v) {
  return true;
};

exports.isAny = isAny;
function isLiteral(v) {
  switch (v) {
    case BOOLEAN:
    case ARRAY:
    case FUNCTION:
    case NULL:
    case NUMBER:
    case OBJECT:
    case REGEXP:
    case STRING:
    case UNDEFINED:
    case UNKNOWN:
    case ANY:
      return true;
    default:
      return false;
  }
}

function theTypes() {
  return [[STRING, isString], [NUMBER, isNumber], [FUNCTION, isFunction], [ARRAY, isArray], [REGEXP, isRegExp], [OBJECT, isObject], [BOOLEAN, isBoolean], [UNDEFINED, isUndefined], [NULL, isNull]];
}

function whatType(v) {
  var types = theTypes();

  __loop: while (1) {
    if (!types.length) return UNKNOWN;

    var _types$shift = types.shift();

    var _types$shift2 = _slicedToArray(_types$shift, 2);

    var type = _types$shift2[0];
    var isType = _types$shift2[1];

    if (isType(v)) return type;
    continue __loop;
  }
}

function shallowShape(a, b) {
  // if (isAny(a) || isAny(b)) return true;
  if (isLiteral(a) || isLiteral(b)) return whatType(a) === whatType(b);
  if (isArray(a) || isArray(b)) return (0, _lodashCollectionAll3["default"])((0, _lodashArrayZipWith3["default"])(a, b, shallowShape));
  return a === b;
}

function etra(_x2) {
  var _arguments = arguments;
  var _again = true;

  _function: while (_again) {
    var args = _x2;
    patterns = _patterns$shift = _patterns$shift2 = pat = func = undefined;
    _again = false;
    var patterns = _arguments.length <= 1 || _arguments[1] === undefined ? [] : _arguments[1];

    if (!patterns.length) throw new Error("etre: Non-Exhaustive Patterns");

    var _patterns$shift = patterns.shift();

    var _patterns$shift2 = _slicedToArray(_patterns$shift, 2);

    var pat = _patterns$shift2[0];
    var func = _patterns$shift2[1];

    if (shallowShape(pat, args)) return func.apply(undefined, _toConsumableArray(args));
    _arguments = [_x2 = args, paterns];
    _again = true;
    continue _function;
  }
}

exports["default"] = function () {
  for (var _len = arguments.length, patterns = Array(_len), _key = 0; _key < _len; _key++) {
    patterns[_key] = arguments[_key];
  }

  return function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      for (var _iterator = patterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var group = _step.value;

        if (isFunction(group)) return group.apply(undefined, args);

        var _group = _slicedToArray(group, 2);

        var pattern = _group[0];
        var func = _group[1];

        if (!isArray(pattern)) pattern = [pattern];
        if (shallowShape(pattern, args)) return func.apply(undefined, args);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    throw new Error("etre: Non-Exhaustive Pattern");
  };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU0sT0FBTyxHQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTs7QUFDbkMsSUFBTSxLQUFLLEdBQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBOztBQUNqQyxJQUFNLFFBQVEsR0FBSSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7O0FBQ3BDLElBQU0sSUFBSSxHQUFRLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTs7QUFDaEMsSUFBTSxNQUFNLEdBQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBOztBQUNsQyxJQUFNLE1BQU0sR0FBTSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7O0FBQ2xDLElBQU0sTUFBTSxHQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTs7QUFDbEMsSUFBTSxNQUFNLEdBQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBOztBQUNsQyxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7O0FBQ3JDLElBQU0sT0FBTyxHQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTs7QUFDbkMsSUFBTSxHQUFHLEdBQVMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBOzs7QUFFdEMsU0FBUyxPQUFPLENBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUM1QixTQUFPLFVBQVUsQ0FBQyxFQUFFO0FBQ2xCLFdBQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUE7R0FDN0IsQ0FBQTtDQUNGOztBQUVNLElBQU0sU0FBUyxHQUFLLE9BQU8sbUNBQWdCLE9BQU8sQ0FBQyxDQUFBOztBQUNuRCxJQUFNLE9BQU8sR0FBTyxPQUFPLGlDQUFnQixLQUFLLENBQUMsQ0FBQTs7QUFDakQsSUFBTSxVQUFVLEdBQUksT0FBTyxvQ0FBZ0IsUUFBUSxDQUFDLENBQUE7O0FBQ3BELElBQU0sTUFBTSxHQUFRLE9BQU8sZ0NBQWdCLElBQUksQ0FBQyxDQUFBOztBQUNoRCxJQUFNLFFBQVEsR0FBTSxPQUFPLGtDQUFnQixNQUFNLENBQUMsQ0FBQTs7QUFDbEQsSUFBTSxRQUFRLEdBQU0sT0FBTyxrQ0FBZ0IsTUFBTSxDQUFDLENBQUE7O0FBQ2xELElBQU0sUUFBUSxHQUFNLE9BQU8sa0NBQWdCLE1BQU0sQ0FBQyxDQUFBOztBQUNsRCxJQUFNLFFBQVEsR0FBTSxPQUFPLGtDQUFnQixNQUFNLENBQUMsQ0FBQTs7QUFDbEQsSUFBTSxXQUFXLEdBQUcsT0FBTyxxQ0FBZ0IsU0FBUyxDQUFDLENBQUE7O0FBQ3JELElBQU0sS0FBSyxHQUFTLFNBQWQsS0FBSyxDQUFTLENBQUM7U0FBSSxJQUFJO0NBQUEsQ0FBQTs7O0FBRXBDLFNBQVMsU0FBUyxDQUFFLENBQUMsRUFBRTtBQUNyQixVQUFRLENBQUM7QUFDUCxTQUFLLE9BQU8sQ0FBQztBQUNiLFNBQUssS0FBSyxDQUFDO0FBQ1gsU0FBSyxRQUFRLENBQUM7QUFDZCxTQUFLLElBQUksQ0FBQztBQUNWLFNBQUssTUFBTSxDQUFDO0FBQ1osU0FBSyxNQUFNLENBQUM7QUFDWixTQUFLLE1BQU0sQ0FBQztBQUNaLFNBQUssTUFBTSxDQUFDO0FBQ1osU0FBSyxTQUFTLENBQUM7QUFDZixTQUFLLE9BQU8sQ0FBQztBQUNiLFNBQUssR0FBRztBQUNOLGFBQU8sSUFBSSxDQUFBO0FBQUEsQUFDYjtBQUNFLGFBQU8sS0FBSyxDQUFBO0FBQUEsR0FDZjtDQUNGOztBQUVELFNBQVMsUUFBUSxHQUFJO0FBQ25CLFNBQU8sQ0FDTCxDQUFDLE1BQU0sRUFBSyxRQUFRLENBQUMsRUFDckIsQ0FBQyxNQUFNLEVBQUssUUFBUSxDQUFDLEVBQ3JCLENBQUMsUUFBUSxFQUFHLFVBQVUsQ0FBQyxFQUN2QixDQUFDLEtBQUssRUFBTSxPQUFPLENBQUMsRUFDcEIsQ0FBQyxNQUFNLEVBQUssUUFBUSxDQUFDLEVBQ3JCLENBQUMsTUFBTSxFQUFLLFFBQVEsQ0FBQyxFQUNyQixDQUFDLE9BQU8sRUFBSSxTQUFTLENBQUMsRUFDdEIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLEVBQ3hCLENBQUMsSUFBSSxFQUFPLE1BQU0sQ0FBQyxDQUNwQixDQUFBO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUUsQ0FBQyxFQUFFO0FBQzNCLE1BQUksS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFBOztBQUV0QixRQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUU7QUFDaEIsUUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxPQUFPLENBQUE7O3VCQUNSLEtBQUssQ0FBQyxLQUFLLEVBQUU7Ozs7UUFBOUIsSUFBSTtRQUFFLE1BQU07O0FBQ3BCLFFBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFBO0FBQzFCLGFBQVMsTUFBTSxDQUFBO0dBQ2hCO0NBQ0Y7O0FBRU0sU0FBUyxZQUFZLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTs7QUFFbEMsTUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNwRSxNQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxzQ0FBTSxxQ0FBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUE7QUFDekUsU0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0NBQ2Y7O0FBRUQsU0FBUyxJQUFJOzs7OzRCQUFxQjtRQUFuQixJQUFJO0FBQUUsWUFBUSx3Q0FFbkIsR0FBRyxHQUFFLElBQUk7O1FBRkUsUUFBUSwyREFBQyxFQUFFOztBQUM5QixRQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUE7OzBCQUNoRCxRQUFRLENBQUMsS0FBSyxFQUFFOzs7O1FBQTlCLEdBQUc7UUFBRSxJQUFJOztBQUNqQixRQUFJLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFJLHFDQUFJLElBQUksRUFBQyxDQUFBO3dCQUNyQyxJQUFJLEVBQUUsT0FBTzs7O0dBQzFCO0NBQUE7O3FCQUVjLFlBQXVCO29DQUFWLFFBQVE7QUFBUixZQUFROzs7QUFDbEMsU0FBTyxZQUFtQjs7Ozs7O3lDQUFOLElBQUk7QUFBSixZQUFJOzs7QUFDdEIsMkJBQWtCLFFBQVEsOEhBQUU7WUFBbkIsS0FBSzs7QUFDWixZQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEtBQUssa0JBQUksSUFBSSxDQUFDLENBQUE7O29DQUNwQixLQUFLOztZQUF2QixPQUFPO1lBQUUsSUFBSTs7QUFDbkIsWUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUMxQyxZQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFJLGtCQUFJLElBQUksQ0FBQyxDQUFBO09BQ3REOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0QsVUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO0dBQ2hELENBQUE7Q0FDRiIsImZpbGUiOiJldHJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiXG5cbmV4cG9ydCBjb25zdCBCT09MRUFOICAgPSBTeW1ib2woXCJib29sZWFuXCIpXG5leHBvcnQgY29uc3QgQVJSQVkgICAgID0gU3ltYm9sKFwiYXJyYXlcIilcbmV4cG9ydCBjb25zdCBGVU5DVElPTiAgPSBTeW1ib2woXCJmdW5jdGlvblwiKVxuZXhwb3J0IGNvbnN0IE5VTEwgICAgICA9IFN5bWJvbChcIm51bGxcIilcbmV4cG9ydCBjb25zdCBOVU1CRVIgICAgPSBTeW1ib2woXCJudW1iZXJcIilcbmV4cG9ydCBjb25zdCBPQkpFQ1QgICAgPSBTeW1ib2woXCJvYmplY3RcIilcbmV4cG9ydCBjb25zdCBSRUdFWFAgICAgPSBTeW1ib2woXCJyZWdleHBcIilcbmV4cG9ydCBjb25zdCBTVFJJTkcgICAgPSBTeW1ib2woXCJzdHJpbmdcIilcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSBTeW1ib2woXCJ1bmRlZmluZWRcIilcbmV4cG9ydCBjb25zdCBVTktOT1dOICAgPSBTeW1ib2woXCJ1bmtub3duXCIpXG5leHBvcnQgY29uc3QgQU5ZICAgICAgID0gU3ltYm9sKFwiYW55XCIpXG5cbmZ1bmN0aW9uIGNoZWNrZXIgKGZ1bmMsIHN5bWIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGZ1bmModikgfHwgdiA9PT0gc3ltYlxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gICA9IGNoZWNrZXIoXy5pc0Jvb2xlYW4sICAgQk9PTEVBTilcbmV4cG9ydCBjb25zdCBpc0FycmF5ICAgICA9IGNoZWNrZXIoXy5pc0FycmF5LCAgICAgQVJSQVkpXG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbiAgPSBjaGVja2VyKF8uaXNGdW5jdGlvbiwgIEZVTkNUSU9OKVxuZXhwb3J0IGNvbnN0IGlzTnVsbCAgICAgID0gY2hlY2tlcihfLmlzTnVsbCwgICAgICBOVUxMKVxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyICAgID0gY2hlY2tlcihfLmlzTnVtYmVyLCAgICBOVU1CRVIpXG5leHBvcnQgY29uc3QgaXNPYmplY3QgICAgPSBjaGVja2VyKF8uaXNPYmplY3QsICAgIE9CSkVDVClcbmV4cG9ydCBjb25zdCBpc1JlZ0V4cCAgICA9IGNoZWNrZXIoXy5pc1JlZ0V4cCwgICAgUkVHRVhQKVxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nICAgID0gY2hlY2tlcihfLmlzU3RyaW5nLCAgICBTVFJJTkcpXG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWQgPSBjaGVja2VyKF8uaXNVbmRlZmluZWQsIFVOREVGSU5FRClcbmV4cG9ydCBjb25zdCBpc0FueSAgICAgICA9IHYgPT4gdHJ1ZVxuXG5mdW5jdGlvbiBpc0xpdGVyYWwgKHYpIHtcbiAgc3dpdGNoICh2KSB7XG4gICAgY2FzZSBCT09MRUFOOlxuICAgIGNhc2UgQVJSQVk6XG4gICAgY2FzZSBGVU5DVElPTjpcbiAgICBjYXNlIE5VTEw6XG4gICAgY2FzZSBOVU1CRVI6XG4gICAgY2FzZSBPQkpFQ1Q6XG4gICAgY2FzZSBSRUdFWFA6XG4gICAgY2FzZSBTVFJJTkc6XG4gICAgY2FzZSBVTkRFRklORUQ6XG4gICAgY2FzZSBVTktOT1dOOlxuICAgIGNhc2UgQU5ZOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gdGhlVHlwZXMgKCkge1xuICByZXR1cm4gW1xuICAgIFtTVFJJTkcsICAgIGlzU3RyaW5nXSxcbiAgICBbTlVNQkVSLCAgICBpc051bWJlcl0sXG4gICAgW0ZVTkNUSU9OLCAgaXNGdW5jdGlvbl0sXG4gICAgW0FSUkFZLCAgICAgaXNBcnJheV0sXG4gICAgW1JFR0VYUCwgICAgaXNSZWdFeHBdLFxuICAgIFtPQkpFQ1QsICAgIGlzT2JqZWN0XSxcbiAgICBbQk9PTEVBTiwgICBpc0Jvb2xlYW5dLFxuICAgIFtVTkRFRklORUQsIGlzVW5kZWZpbmVkXSxcbiAgICBbTlVMTCwgICAgICBpc051bGxdLFxuICBdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGF0VHlwZSAodikge1xuICBsZXQgdHlwZXMgPSB0aGVUeXBlcygpXG5cbiAgX19sb29wOiB3aGlsZSAoMSkge1xuICAgIGlmICghdHlwZXMubGVuZ3RoKSByZXR1cm4gVU5LTk9XTlxuICAgIGNvbnN0IFsgdHlwZSwgaXNUeXBlIF0gPSB0eXBlcy5zaGlmdCgpXG4gICAgaWYgKGlzVHlwZSh2KSkgcmV0dXJuIHR5cGVcbiAgICBjb250aW51ZSBfX2xvb3BcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd1NoYXBlIChhLCBiKSB7XG4gIC8vIGlmIChpc0FueShhKSB8fCBpc0FueShiKSkgcmV0dXJuIHRydWU7XG4gIGlmIChpc0xpdGVyYWwoYSkgfHwgaXNMaXRlcmFsKGIpKSByZXR1cm4gd2hhdFR5cGUoYSkgPT09IHdoYXRUeXBlKGIpXG4gIGlmIChpc0FycmF5KGEpIHx8IGlzQXJyYXkoYikpIHJldHVybiBfLmFsbChfLnppcFdpdGgoYSwgYiwgc2hhbGxvd1NoYXBlKSlcbiAgcmV0dXJuIGEgPT09IGJcbn1cblxuZnVuY3Rpb24gZXRyYSAoYXJncywgcGF0dGVybnM9W10pIHtcbiAgaWYgKCFwYXR0ZXJucy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcihcImV0cmU6IE5vbi1FeGhhdXN0aXZlIFBhdHRlcm5zXCIpXG4gIGNvbnN0IFsgcGF0LCBmdW5jIF0gPSBwYXR0ZXJucy5zaGlmdCgpXG4gIGlmIChzaGFsbG93U2hhcGUocGF0LCBhcmdzKSkgcmV0dXJuIGZ1bmMoLi4uYXJncylcbiAgcmV0dXJuIGV0cmEoYXJncywgcGF0ZXJucylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKC4uLnBhdHRlcm5zKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGZvciAobGV0IGdyb3VwIG9mIHBhdHRlcm5zKSB7XG4gICAgICBpZiAoaXNGdW5jdGlvbihncm91cCkpIHJldHVybiBncm91cCguLi5hcmdzKVxuICAgICAgbGV0IFsgcGF0dGVybiwgZnVuYyBdID0gZ3JvdXBcbiAgICAgIGlmICghaXNBcnJheShwYXR0ZXJuKSkgcGF0dGVybiA9IFtwYXR0ZXJuXVxuICAgICAgaWYgKHNoYWxsb3dTaGFwZShwYXR0ZXJuLCBhcmdzKSkgcmV0dXJuIGZ1bmMoLi4uYXJncylcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZXRyZTogTm9uLUV4aGF1c3RpdmUgUGF0dGVyblwiKVxuICB9XG59XG4iXX0=
