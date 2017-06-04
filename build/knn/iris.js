/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 200);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(28)('wks')
  , uid        = __webpack_require__(30)
  , Symbol     = __webpack_require__(6).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(9)
  , IE8_DOM_DEFINE = __webpack_require__(43)
  , toPrimitive    = __webpack_require__(46)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(25)
  , hide      = __webpack_require__(11)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(17);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(14);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys')
  , uid    = __webpack_require__(30);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(44)
  , enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(32)
  , defined = __webpack_require__(14);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(41);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13)
  , document = __webpack_require__(6).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(10)
  , TAG = __webpack_require__(3)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(52);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(53);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(23)
  , toLength  = __webpack_require__(29)
  , toIndex   = __webpack_require__(45);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(12)(function(){
  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(10)
  , toIObject    = __webpack_require__(23)
  , arrayIndexOf = __webpack_require__(42)(false)
  , IE_PROTO     = __webpack_require__(18)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(77);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(74);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(37);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(38);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Node = function () {
  function Node(_ref, inputSize) {
    var features = _ref.features,
        type = _ref.type;
    (0, _classCallCheck3.default)(this, Node);

    if (features.length !== inputSize) {
      throw "Invalid node, expected features length to be " + inputSize + ". " + features;
    }
    this.features = features;
    this.type = type;
    this.guess = null;
    this.neighbours = [];
  }

  (0, _createClass3.default)(Node, [{
    key: "measureDistances",
    value: function measureDistances(featureRangeDefinitions) {
      var _this = this;

      var featureRanges = featureRangeDefinitions.map(function (featureRangeDefinition) {
        return featureRangeDefinition.max - featureRangeDefinition.min;
      });

      this.neighbours = this.neighbours.map(function (neighbour) {
        var featuresDelta = featureRanges.map(function (featureRange, index) {
          return (neighbour.features[index] - _this.features[index]) / featureRange;
        });

        return (0, _extends3.default)({}, neighbour, {
          distance: Math.sqrt(featuresDelta.reduce(function (result, featureDelta) {
            return result + featureDelta * featureDelta;
          }, 0))
        });
      });
    }
  }, {
    key: "sortByDistance",
    value: function sortByDistance() {
      this.neighbours.sort(function (a, b) {
        return a.distance - b.distance;
      });
    }
  }, {
    key: "guessType",
    value: function guessType(k) {
      var types = this.neighbours.slice(0, k).reduce(function (result, neighbour) {
        if (!result[neighbour.type]) {
          result[neighbour.type] = 0;
        }

        result[neighbour.type] += 1;

        return result;
      }, {});

      var guess = {
        type: null,
        count: 0
      };

      (0, _keys2.default)(types).forEach(function (type) {
        if (types[type] > guess.count) {
          guess.type = type;
          guess.count = types[type];
        }
      });

      return guess;
    }
  }]);
  return Node;
}();

exports.default = Node;

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
__webpack_require__(71);
module.exports = __webpack_require__(4).Array.from;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(24)
  , TAG = __webpack_require__(3)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7)
  , createDesc      = __webpack_require__(17);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6).document && document.documentElement;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(20)
  , ITERATOR   = __webpack_require__(3)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(65)
  , descriptor     = __webpack_require__(17)
  , setToStringTag = __webpack_require__(33)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(3)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(64)
  , $export        = __webpack_require__(8)
  , redefine       = __webpack_require__(68)
  , hide           = __webpack_require__(11)
  , has            = __webpack_require__(10)
  , Iterators      = __webpack_require__(20)
  , $iterCreate    = __webpack_require__(61)
  , setToStringTag = __webpack_require__(33)
  , getPrototypeOf = __webpack_require__(67)
  , ITERATOR       = __webpack_require__(3)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(3)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(9)
  , dPs         = __webpack_require__(66)
  , enumBugKeys = __webpack_require__(27)
  , IE_PROTO    = __webpack_require__(18)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(26)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(58).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(9)
  , getKeys  = __webpack_require__(22);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(10)
  , toObject    = __webpack_require__(16)
  , IE_PROTO    = __webpack_require__(18)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15)
  , defined   = __webpack_require__(14);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(56)
  , ITERATOR  = __webpack_require__(3)('iterator')
  , Iterators = __webpack_require__(20);
module.exports = __webpack_require__(4).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(25)
  , $export        = __webpack_require__(8)
  , toObject       = __webpack_require__(16)
  , call           = __webpack_require__(60)
  , isArrayIter    = __webpack_require__(59)
  , toLength       = __webpack_require__(29)
  , createProperty = __webpack_require__(57)
  , getIterFn      = __webpack_require__(70);

$export($export.S + $export.F * !__webpack_require__(63)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', {defineProperty: __webpack_require__(7).f});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(69)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(62)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(86);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(74);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(35);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(37);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(38);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Node = __webpack_require__(48);

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeList = function () {
  function NodeList(k) {
    (0, _classCallCheck3.default)(this, NodeList);

    this.nodes = [];
    this.k = k;
  }

  (0, _createClass3.default)(NodeList, [{
    key: 'setData',
    value: function setData(data) {
      var _this = this;

      this.inputSize = data[0].features.length;
      this.nodes = data.map(function (nodeData) {
        return new _Node2.default(nodeData, _this.inputSize);
      });
    }
  }, {
    key: 'add',
    value: function add(nodeData) {
      this.nodes.push(new _Node2.default(nodeData, this.inputSize));
    }
  }, {
    key: 'calculateRanges',
    value: function calculateRanges() {
      this.ranges = this.nodes.reduce(function (result, currentNode) {
        currentNode.features.forEach(function (feature, index) {
          if (feature < result[index].min) {
            result[index].min = feature;
          }

          if (feature > result[index].max) {
            result[index].max = feature;
          }
        });

        return result;
      }, this.nodes[0].features.map(function () {
        return {
          min: Infinity,
          max: -Infinity
        };
      }));
    }
  }, {
    key: 'determineUnknown',
    value: function determineUnknown() {
      var _this2 = this;

      this.calculateRanges();

      var nodesWithKnownTypes = this.nodes.filter(function (node) {
        return node.type;
      });
      var nodesWithUnknownTypes = this.nodes.filter(function (node) {
        return !node.type;
      }).map(function (node) {
        node.neighbours = [].concat((0, _toConsumableArray3.default)(nodesWithKnownTypes));
        node.measureDistances(_this2.ranges);
        node.sortByDistance();

        return (0, _extends3.default)({}, node, {
          guess: node.guessType(_this2.k)
        });
      });

      this.nodes = [].concat((0, _toConsumableArray3.default)(nodesWithKnownTypes), (0, _toConsumableArray3.default)(nodesWithUnknownTypes));

      return nodesWithUnknownTypes;
    }
  }, {
    key: 'draw',
    value: function draw(canvasId, labelId) {
      var _this3 = this;

      var colorFromType = function colorFromType(type) {
        if (type === 'apartment') {
          return 'red';
        }

        if (type === 'house') {
          return 'green';
        }

        if (type === 'flat') {
          return 'blue';
        }

        return '#666666';
      };
      var finalRanges = this.ranges.map(function (range) {
        return range.max - range.min;
      });

      var canvas = document.getElementById(canvasId);
      var label = document.getElementById(labelId);
      var ctx = canvas.getContext('2d');
      var width = 400;
      var height = 400;
      ctx.clearRect(0, 0, width, height);

      this.nodes.forEach(function (node) {
        var padding = 40;
        var xShift = (width - padding) / width;
        var yShift = (height - padding) / height;
        var x = (node.features[0] - _this3.ranges[0].min) * (width / finalRanges[0]) * xShift + padding / 2;
        var y = Math.abs((node.features[1] - _this3.ranges[1].min) * (height / finalRanges[1]) * yShift + padding / 2 - height);

        ctx.save();
        ctx.fillStyle = colorFromType(node.type);
        ctx.translate(x, y);
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();

        if (!node.type) {
          ctx.strokeStyle = colorFromType(node.guess.type);
          var radius = node.neighbours[_this3.k - 1].distance * width * xShift;
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, Math.PI * 2, true);
          ctx.stroke();
          ctx.closePath();
          label.innerText = node.guess.type;
        }

        ctx.restore();
      });
    }
  }]);
  return NodeList;
}();

exports.default = NodeList;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
module.exports = __webpack_require__(4).Object.keys;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8)
  , core    = __webpack_require__(4)
  , fails   = __webpack_require__(12);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(16)
  , $keys    = __webpack_require__(22);

__webpack_require__(80)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
module.exports = __webpack_require__(4).Object.assign;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(22)
  , gOPS     = __webpack_require__(89)
  , pIE      = __webpack_require__(90)
  , toObject = __webpack_require__(16)
  , IObject  = __webpack_require__(32)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(12)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 89 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(88)});

/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  "SepalLengthCm": "7.1",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "5.9",
  "PetalWidthCm": "2.1",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.0",
  "SepalWidthCm": "3.4",
  "PetalLengthCm": "1.6",
  "PetalWidthCm": "0.4",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.7",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "5.0",
  "PetalWidthCm": "1.7",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.3",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "5.1",
  "PetalWidthCm": "1.5",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.2",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "4.8",
  "PetalWidthCm": "1.8",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.0",
  "SepalWidthCm": "3.4",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "4.8",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "1.4",
  "PetalWidthCm": "0.1",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.2",
  "SepalWidthCm": "2.7",
  "PetalLengthCm": "3.9",
  "PetalWidthCm": "1.4",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "7.2",
  "SepalWidthCm": "3.2",
  "PetalLengthCm": "6.0",
  "PetalWidthCm": "1.8",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.6",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "4.4",
  "PetalWidthCm": "1.4",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.8",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "5.1",
  "PetalWidthCm": "2.4",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "4.8",
  "SepalWidthCm": "3.4",
  "PetalLengthCm": "1.9",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.5",
  "SepalWidthCm": "2.3",
  "PetalLengthCm": "4.0",
  "PetalWidthCm": "1.3",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.8",
  "SepalWidthCm": "2.7",
  "PetalLengthCm": "4.1",
  "PetalWidthCm": "1.0",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.9",
  "SepalWidthCm": "3.1",
  "PetalLengthCm": "5.4",
  "PetalWidthCm": "2.1",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "4.6",
  "SepalWidthCm": "3.1",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.9",
  "SepalWidthCm": "3.1",
  "PetalLengthCm": "4.9",
  "PetalWidthCm": "1.5",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "7.6",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "6.6",
  "PetalWidthCm": "2.1",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.2",
  "SepalWidthCm": "3.4",
  "PetalLengthCm": "5.4",
  "PetalWidthCm": "2.3",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.5",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "5.2",
  "PetalWidthCm": "2.0",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "4.6",
  "SepalWidthCm": "3.6",
  "PetalLengthCm": "1.0",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.1",
  "SepalWidthCm": "3.8",
  "PetalLengthCm": "1.6",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.4",
  "SepalWidthCm": "3.9",
  "PetalLengthCm": "1.7",
  "PetalWidthCm": "0.4",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.4",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "4.5",
  "PetalWidthCm": "1.5",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.0",
  "SepalWidthCm": "3.5",
  "PetalLengthCm": "1.3",
  "PetalWidthCm": "0.3",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.4",
  "SepalWidthCm": "3.2",
  "PetalLengthCm": "5.3",
  "PetalWidthCm": "2.3",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.5",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "4.6",
  "PetalWidthCm": "1.5",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "7.3",
  "SepalWidthCm": "2.9",
  "PetalLengthCm": "6.3",
  "PetalWidthCm": "1.8",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.3",
  "SepalWidthCm": "3.3",
  "PetalLengthCm": "4.7",
  "PetalWidthCm": "1.6",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.5",
  "SepalWidthCm": "3.5",
  "PetalLengthCm": "1.3",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.2",
  "SepalWidthCm": "2.2",
  "PetalLengthCm": "4.5",
  "PetalWidthCm": "1.5",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "4.4",
  "SepalWidthCm": "3.2",
  "PetalLengthCm": "1.3",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.7",
  "SepalWidthCm": "3.3",
  "PetalLengthCm": "5.7",
  "PetalWidthCm": "2.1",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.0",
  "SepalWidthCm": "3.4",
  "PetalLengthCm": "4.5",
  "PetalWidthCm": "1.6",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.7",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "5.2",
  "PetalWidthCm": "2.3",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.6",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "4.1",
  "PetalWidthCm": "1.3",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.7",
  "SepalWidthCm": "3.3",
  "PetalLengthCm": "5.7",
  "PetalWidthCm": "2.5",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "4.7",
  "SepalWidthCm": "3.2",
  "PetalLengthCm": "1.3",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.4",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "5.6",
  "PetalWidthCm": "2.2",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.7",
  "SepalWidthCm": "4.4",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.4",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.7",
  "SepalWidthCm": "3.1",
  "PetalLengthCm": "4.4",
  "PetalWidthCm": "1.4",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.1",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "4.0",
  "PetalWidthCm": "1.3",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "4.9",
  "SepalWidthCm": "3.1",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.1",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.2",
  "SepalWidthCm": "4.1",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.1",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.9",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "5.1",
  "PetalWidthCm": "1.8",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.8",
  "SepalWidthCm": "2.7",
  "PetalLengthCm": "5.1",
  "PetalWidthCm": "1.9",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.3",
  "SepalWidthCm": "3.7",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "4.3",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "1.1",
  "PetalWidthCm": "0.1",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.6",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "4.9",
  "PetalWidthCm": "2.0",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.1",
  "SepalWidthCm": "3.8",
  "PetalLengthCm": "1.9",
  "PetalWidthCm": "0.4",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.3",
  "SepalWidthCm": "2.5",
  "PetalLengthCm": "4.9",
  "PetalWidthCm": "1.5",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.6",
  "SepalWidthCm": "2.9",
  "PetalLengthCm": "4.6",
  "PetalWidthCm": "1.3",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.9",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "4.2",
  "PetalWidthCm": "1.5",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "7.0",
  "SepalWidthCm": "3.2",
  "PetalLengthCm": "4.7",
  "PetalWidthCm": "1.4",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.1",
  "SepalWidthCm": "3.7",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.4",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "7.2",
  "SepalWidthCm": "3.6",
  "PetalLengthCm": "6.1",
  "PetalWidthCm": "2.5",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.2",
  "SepalWidthCm": "3.5",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "4.8",
  "SepalWidthCm": "3.4",
  "PetalLengthCm": "1.6",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.2",
  "SepalWidthCm": "2.9",
  "PetalLengthCm": "4.3",
  "PetalWidthCm": "1.3",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.7",
  "SepalWidthCm": "3.8",
  "PetalLengthCm": "1.7",
  "PetalWidthCm": "0.3",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.7",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "4.2",
  "PetalWidthCm": "1.2",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.1",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "4.7",
  "PetalWidthCm": "1.2",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.6",
  "SepalWidthCm": "2.5",
  "PetalLengthCm": "3.9",
  "PetalWidthCm": "1.1",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.4",
  "SepalWidthCm": "3.9",
  "PetalLengthCm": "1.3",
  "PetalWidthCm": "0.4",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.9",
  "SepalWidthCm": "3.2",
  "PetalLengthCm": "4.8",
  "PetalWidthCm": "1.8",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.1",
  "SepalWidthCm": "3.8",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.3",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.9",
  "SepalWidthCm": "3.1",
  "PetalLengthCm": "5.1",
  "PetalWidthCm": "2.3",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.7",
  "SepalWidthCm": "3.1",
  "PetalLengthCm": "5.6",
  "PetalWidthCm": "2.4",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.0",
  "SepalWidthCm": "3.3",
  "PetalLengthCm": "1.4",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.4",
  "SepalWidthCm": "3.7",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.3",
  "SepalWidthCm": "2.5",
  "PetalLengthCm": "5.0",
  "PetalWidthCm": "1.9",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.0",
  "SepalWidthCm": "2.2",
  "PetalLengthCm": "4.0",
  "PetalWidthCm": "1.0",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "4.8",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "1.4",
  "PetalWidthCm": "0.3",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "4.4",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "1.3",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.1",
  "SepalWidthCm": "2.9",
  "PetalLengthCm": "4.7",
  "PetalWidthCm": "1.4",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "7.2",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "5.8",
  "PetalWidthCm": "1.6",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "4.9",
  "SepalWidthCm": "2.4",
  "PetalLengthCm": "3.3",
  "PetalWidthCm": "1.0",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "7.7",
  "SepalWidthCm": "2.6",
  "PetalLengthCm": "6.9",
  "PetalWidthCm": "2.3",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.4",
  "SepalWidthCm": "3.4",
  "PetalLengthCm": "1.7",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "4.8",
  "SepalWidthCm": "3.1",
  "PetalLengthCm": "1.6",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "7.4",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "6.1",
  "PetalWidthCm": "1.9",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.0",
  "SepalWidthCm": "2.7",
  "PetalLengthCm": "5.1",
  "PetalWidthCm": "1.6",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.0",
  "SepalWidthCm": "3.5",
  "PetalLengthCm": "1.6",
  "PetalWidthCm": "0.6",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.0",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "4.8",
  "PetalWidthCm": "1.8",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.1",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "4.9",
  "PetalWidthCm": "1.8",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.1",
  "SepalWidthCm": "2.5",
  "PetalLengthCm": "3.0",
  "PetalWidthCm": "1.1",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.6",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "4.5",
  "PetalWidthCm": "1.5",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.0",
  "SepalWidthCm": "3.6",
  "PetalLengthCm": "1.4",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "4.6",
  "SepalWidthCm": "3.4",
  "PetalLengthCm": "1.4",
  "PetalWidthCm": "0.3",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.0",
  "SepalWidthCm": "2.3",
  "PetalLengthCm": "3.3",
  "PetalWidthCm": "1.0",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.3",
  "SepalWidthCm": "2.9",
  "PetalLengthCm": "5.6",
  "PetalWidthCm": "1.8",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "4.9",
  "SepalWidthCm": "3.1",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.1",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.8",
  "SepalWidthCm": "2.7",
  "PetalLengthCm": "3.9",
  "PetalWidthCm": "1.2",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.6",
  "SepalWidthCm": "2.9",
  "PetalLengthCm": "3.6",
  "PetalWidthCm": "1.3",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "7.7",
  "SepalWidthCm": "3.8",
  "PetalLengthCm": "6.7",
  "PetalWidthCm": "2.2",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.0",
  "SepalWidthCm": "2.2",
  "PetalLengthCm": "5.0",
  "PetalWidthCm": "1.5",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.8",
  "SepalWidthCm": "4.0",
  "PetalLengthCm": "1.2",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.1",
  "SepalWidthCm": "3.5",
  "PetalLengthCm": "1.4",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "4.9",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "1.4",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "4.9",
  "SepalWidthCm": "3.1",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.1",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.0",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "1.6",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.5",
  "SepalWidthCm": "2.4",
  "PetalLengthCm": "3.7",
  "PetalWidthCm": "1.0",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.7",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "4.1",
  "PetalWidthCm": "1.3",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.6",
  "SepalWidthCm": "2.7",
  "PetalLengthCm": "4.2",
  "PetalWidthCm": "1.3",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "7.7",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "6.7",
  "PetalWidthCm": "2.0",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.1",
  "SepalWidthCm": "3.5",
  "PetalLengthCm": "1.4",
  "PetalWidthCm": "0.3",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.8",
  "SepalWidthCm": "2.6",
  "PetalLengthCm": "4.0",
  "PetalWidthCm": "1.2",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.3",
  "SepalWidthCm": "3.3",
  "PetalLengthCm": "6.0",
  "PetalWidthCm": "2.5",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.3",
  "SepalWidthCm": "2.7",
  "PetalLengthCm": "4.9",
  "PetalWidthCm": "1.8",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.7",
  "SepalWidthCm": "2.5",
  "PetalLengthCm": "5.0",
  "PetalWidthCm": "2.0",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.4",
  "SepalWidthCm": "3.1",
  "PetalLengthCm": "5.5",
  "PetalWidthCm": "1.8",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.1",
  "SepalWidthCm": "3.4",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.7",
  "SepalWidthCm": "3.1",
  "PetalLengthCm": "4.7",
  "PetalWidthCm": "1.5",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.5",
  "SepalWidthCm": "4.2",
  "PetalLengthCm": "1.4",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "4.7",
  "SepalWidthCm": "3.2",
  "PetalLengthCm": "1.6",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.5",
  "SepalWidthCm": "2.6",
  "PetalLengthCm": "4.4",
  "PetalWidthCm": "1.2",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.3",
  "SepalWidthCm": "2.3",
  "PetalLengthCm": "4.4",
  "PetalWidthCm": "1.3",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.8",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "5.5",
  "PetalWidthCm": "2.1",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.1",
  "SepalWidthCm": "2.6",
  "PetalLengthCm": "5.6",
  "PetalWidthCm": "1.4",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.1",
  "SepalWidthCm": "3.3",
  "PetalLengthCm": "1.7",
  "PetalWidthCm": "0.5",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.8",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "4.8",
  "PetalWidthCm": "1.4",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.5",
  "SepalWidthCm": "2.5",
  "PetalLengthCm": "4.0",
  "PetalWidthCm": "1.3",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.9",
  "SepalWidthCm": "3.2",
  "PetalLengthCm": "5.7",
  "PetalWidthCm": "2.3",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "7.7",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "6.1",
  "PetalWidthCm": "2.3",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.7",
  "SepalWidthCm": "2.6",
  "PetalLengthCm": "3.5",
  "PetalWidthCm": "1.0",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.3",
  "SepalWidthCm": "3.4",
  "PetalLengthCm": "5.6",
  "PetalWidthCm": "2.4",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.5",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "5.8",
  "PetalWidthCm": "2.2",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.4",
  "SepalWidthCm": "2.9",
  "PetalLengthCm": "4.3",
  "PetalWidthCm": "1.3",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.7",
  "SepalWidthCm": "2.5",
  "PetalLengthCm": "5.8",
  "PetalWidthCm": "1.8",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.1",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "4.6",
  "PetalWidthCm": "1.4",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.4",
  "SepalWidthCm": "3.2",
  "PetalLengthCm": "4.5",
  "PetalWidthCm": "1.5",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.4",
  "SepalWidthCm": "3.4",
  "PetalLengthCm": "1.5",
  "PetalWidthCm": "0.4",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.8",
  "SepalWidthCm": "3.2",
  "PetalLengthCm": "5.9",
  "PetalWidthCm": "2.3",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "4.6",
  "SepalWidthCm": "3.2",
  "PetalLengthCm": "1.4",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "4.4",
  "SepalWidthCm": "2.9",
  "PetalLengthCm": "1.4",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.0",
  "SepalWidthCm": "3.2",
  "PetalLengthCm": "1.2",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.7",
  "SepalWidthCm": "2.9",
  "PetalLengthCm": "4.2",
  "PetalWidthCm": "1.3",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.0",
  "SepalWidthCm": "2.0",
  "PetalLengthCm": "3.5",
  "PetalWidthCm": "1.0",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.4",
  "SepalWidthCm": "2.7",
  "PetalLengthCm": "5.3",
  "PetalWidthCm": "1.9",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.5",
  "SepalWidthCm": "3.0",
  "PetalLengthCm": "5.5",
  "PetalWidthCm": "1.8",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "4.5",
  "SepalWidthCm": "2.3",
  "PetalLengthCm": "1.3",
  "PetalWidthCm": "0.3",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "5.5",
  "SepalWidthCm": "2.4",
  "PetalLengthCm": "3.8",
  "PetalWidthCm": "1.1",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "7.9",
  "SepalWidthCm": "3.8",
  "PetalLengthCm": "6.4",
  "PetalWidthCm": "2.0",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "6.0",
  "SepalWidthCm": "2.9",
  "PetalLengthCm": "4.5",
  "PetalWidthCm": "1.5",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "6.5",
  "SepalWidthCm": "3.2",
  "PetalLengthCm": "5.1",
  "PetalWidthCm": "2.0",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.8",
  "SepalWidthCm": "2.7",
  "PetalLengthCm": "5.1",
  "PetalWidthCm": "1.9",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "4.9",
  "SepalWidthCm": "2.5",
  "PetalLengthCm": "4.5",
  "PetalWidthCm": "1.7",
  "Species": "Iris-virginica"
}, {
  "SepalLengthCm": "5.7",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "4.5",
  "PetalWidthCm": "1.3",
  "Species": "Iris-versicolor"
}, {
  "SepalLengthCm": "5.2",
  "SepalWidthCm": "3.4",
  "PetalLengthCm": "1.4",
  "PetalWidthCm": "0.2",
  "Species": "Iris-setosa"
}, {
  "SepalLengthCm": "6.4",
  "SepalWidthCm": "2.8",
  "PetalLengthCm": "5.6",
  "PetalWidthCm": "2.1",
  "Species": "Iris-virginica"
}];

/***/ }),
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(35);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _Node = __webpack_require__(48);

var _Node2 = _interopRequireDefault(_Node);

var _NodeList = __webpack_require__(78);

var _NodeList2 = _interopRequireDefault(_NodeList);

var _data = __webpack_require__(195);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trainingData = _data2.default.splice(0, 100);
var nodes = new _NodeList2.default(10);

nodes.setData([].concat((0, _toConsumableArray3.default)(trainingData.map(function (item) {
  return {
    type: item.Species,
    features: [item.SepalLengthCm, item.SepalWidthCm, item.PetalLengthCm, item.PetalWidthCm]
  };
})), (0, _toConsumableArray3.default)(_data2.default.map(function (item) {
  return {
    features: [item.SepalLengthCm, item.SepalWidthCm, item.PetalLengthCm, item.PetalWidthCm]
  };
}))));

var predictions = nodes.determineUnknown();

document.getElementById('trainingSet').innerHTML = trainingData.map(function (item) {
  return '\n  <tr>\n    <td>' + item.Species + '</td>\n    <td>' + item.SepalLengthCm + '</td>\n    <td>' + item.SepalWidthCm + '</td>\n    <td>' + item.PetalLengthCm + '</td>\n    <td>' + item.PetalWidthCm + '</td>\n  </tr>\n';
}).join('');

document.getElementById('testSet').innerHTML = _data2.default.map(function (item, index) {
  return '\n  <tr>\n    <td>' + (item.Species === predictions[index].guess.type) + '</td>\n    <td>' + item.Species + '</td>\n    <td>' + predictions[index].guess.type + '</td>\n    <td>' + item.SepalLengthCm + '</td>\n    <td>' + item.SepalWidthCm + '</td>\n    <td>' + item.PetalLengthCm + '</td>\n    <td>' + item.PetalWidthCm + '</td>\n  </tr>\n';
}).join('');

/***/ })
/******/ ]);