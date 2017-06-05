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
/******/ 	return __webpack_require__(__webpack_require__.s = 197);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _isPlaceholder = __webpack_require__(107);


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2
             : _curry1(function(_b) { return fn(a, _b); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })
             : fn(a, b);
    }
  };
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var _isPlaceholder = __webpack_require__(107);


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _curry2 = __webpack_require__(0);
var _isPlaceholder = __webpack_require__(107);


/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3
             : _curry2(function(_b, _c) { return fn(a, _b, _c); });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3
             : _isPlaceholder(a) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _curry1(function(_c) { return fn(a, b, _c); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3
             : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) { return fn(_a, _b, c); })
             : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b, c); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b, c); })
             : _isPlaceholder(c) ? _curry1(function(_c) { return fn(a, b, _c); })
             : fn(a, b, c);
    }
  };
};


/***/ }),
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var _isArray = __webpack_require__(75);
var _isTransformer = __webpack_require__(127);


/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
module.exports = function _dispatchable(methodNames, xf, fn) {
  return function() {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  init: function() {
    return this.xf['@@transducer/init']();
  },
  result: function(result) {
    return this.xf['@@transducer/result'](result);
  }
};


/***/ }),
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(49);
var _curry1 = __webpack_require__(1);
var _curry2 = __webpack_require__(0);
var _curryN = __webpack_require__(104);


/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});


/***/ }),
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
/* 34 */
/***/ (function(module, exports) {

module.exports = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};


/***/ }),
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _map = __webpack_require__(108);
var _reduce = __webpack_require__(40);
var _xmap = __webpack_require__(293);
var curryN = __webpack_require__(31);
var keys = __webpack_require__(50);


/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
module.exports = _curry2(_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function() {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return _reduce(function(acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));
    default:
      return _map(fn, functor);
  }
}));


/***/ }),
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _equals = __webpack_require__(268);


/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
module.exports = _curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var _isArrayLike = __webpack_require__(105);
var _xwrap = __webpack_require__(163);
var bind = __webpack_require__(141);


module.exports = (function() {
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      idx += 1;
    }
    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
  return function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (_isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list['fantasy-land/reduce'] === 'function') {
      return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list, 'reduce');
    }

    throw new TypeError('reduce: list must be array or iterable');
  };
}());


/***/ }),
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
/* 47 */
/***/ (function(module, exports) {

/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
module.exports = function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
};


/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, exports) {

module.exports = function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0: return function() { return fn.apply(this, arguments); };
    case 1: return function(a0) { return fn.apply(this, arguments); };
    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _has = __webpack_require__(34);
var _isArguments = __webpack_require__(158);


/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
module.exports = (function() {
  // cover IE < 9 keys issues
  var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
                            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
  // Safari bug
  var hasArgsEnumBug = (function() {
    'use strict';
    return arguments.propertyIsEnumerable('length');
  }());

  var contains = function contains(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };

  return typeof Object.keys === 'function' && !hasArgsEnumBug ?
    _curry1(function keys(obj) {
      return Object(obj) !== obj ? [] : Object.keys(obj);
    }) :
    _curry1(function keys(obj) {
      if (Object(obj) !== obj) {
        return [];
      }
      var prop, nIdx;
      var ks = [];
      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
      for (prop in obj) {
        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
          ks[ks.length] = prop;
        }
      }
      if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while (nIdx >= 0) {
          prop = nonEnumerableProps[nIdx];
          if (_has(prop, obj) && !contains(ks, prop)) {
            ks[ks.length] = prop;
          }
          nIdx -= 1;
        }
      }
      return ks;
    });
}());


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var _reduce = __webpack_require__(40);


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *                -               -10
 *               / \              / \
 *              -   4           -6   4
 *             / \              / \
 *            -   3   ==>     -3   3
 *           / \              / \
 *          -   2           -1   2
 *         / \              / \
 *        0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
module.exports = _curry3(_reduce);


/***/ }),
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
/* 74 */,
/* 75 */
/***/ (function(module, exports) {

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return (val != null &&
          val.length >= 0 &&
          Object.prototype.toString.call(val) === '[object Array]');
};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x :
    {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
};


/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var _indexOf = __webpack_require__(157);


module.exports = function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(92);
var _curry3 = __webpack_require__(2);


/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
module.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
module.exports = _curry1(function always(val) {
  return function() {
    return val;
  };
});


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
module.exports = _curry2(function max(a, b) { return b > a ? b : a; });


/***/ }),
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var _isArray = __webpack_require__(75);


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
module.exports = function _checkForMethod(methodname, fn) {
  return function() {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return (_isArray(obj) || typeof obj[methodname] !== 'function') ?
      fn.apply(this, arguments) :
      obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
};


/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isFunction = __webpack_require__(106);
var curryN = __webpack_require__(31);
var toString = __webpack_require__(98);


/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      var sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
module.exports = _curry2(function invoker(arity, method) {
  return curryN(arity + 1, function() {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
  });
});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isString = __webpack_require__(93);


/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
module.exports = _curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
module.exports = _curry2(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var map = __webpack_require__(36);
var prop = __webpack_require__(129);


/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
module.exports = _curry2(function pluck(p, list) {
  return map(prop(p), list);
});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _toString = __webpack_require__(280);


/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
module.exports = _curry1(function toString(val) { return _toString(val, []); });


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
module.exports = _curry2(function add(a, b) {
  return Number(a) + Number(b);
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry3(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var curryN = __webpack_require__(31);


/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var curry = __webpack_require__(101);


/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
module.exports = _curry1(function flip(fn) {
  return curry(function(a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});


/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(49);
var _isPlaceholder = __webpack_require__(107);


/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curryN(length, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length &&
          (!_isPlaceholder(received[combinedIdx]) ||
           argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined)
                     : _arity(left, _curryN(length, combined, fn));
  };
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _isArray = __webpack_require__(75);
var _isString = __webpack_require__(93);


/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
module.exports = _curry1(function isArrayLike(x) {
  if (_isArray(x)) { return true; }
  if (!x) { return false; }
  if (typeof x !== 'object') { return false; }
  if (_isString(x)) { return false; }
  if (x.nodeType === 1) { return !!x.length; }
  if (x.length === 0) { return true; }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
};


/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = function _isPlaceholder(a) {
  return a != null &&
         typeof a === 'object' &&
         a['@@functional/placeholder'] === true;
};


/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var map = __webpack_require__(36);


/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
module.exports = _curry2(function lens(getter, setter) {
  return function(toFunctorFn) {
    return function(target) {
      return map(
        function(focus) {
          return setter(focus, target);
        },
        toFunctorFn(getter(target))
      );
    };
  };
});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var liftN = __webpack_require__(169);


/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      var madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */
module.exports = _curry1(function lift(fn) {
  return liftN(fn.length, fn);
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var _isObject = __webpack_require__(126);
var mergeWithKey = __webpack_require__(128);


/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
module.exports = _curry3(function mergeDeepWithKey(fn, lObj, rObj) {
  return mergeWithKey(function(k, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @see R.binary, R.unary
 * @example
 *
 *      var takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */
module.exports = _curry2(function nAry(n, fn) {
  switch (n) {
    case 0: return function() {return fn.call(this);};
    case 1: return function(a0) {return fn.call(this, a0);};
    case 2: return function(a0, a1) {return fn.call(this, a0, a1);};
    case 3: return function(a0, a1, a2) {return fn.call(this, a0, a1, a2);};
    case 4: return function(a0, a1, a2, a3) {return fn.call(this, a0, a1, a2, a3);};
    case 5: return function(a0, a1, a2, a3, a4) {return fn.call(this, a0, a1, a2, a3, a4);};
    case 6: return function(a0, a1, a2, a3, a4, a5) {return fn.call(this, a0, a1, a2, a3, a4, a5);};
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6);};
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);};
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);};
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);};
    default: throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var _curryN = __webpack_require__(104);
var _dispatchable = __webpack_require__(19);
var _has = __webpack_require__(34);
var _reduce = __webpack_require__(40);
var _xreduceBy = __webpack_require__(294);


/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
module.exports = _curryN(4, [], _dispatchable([], _xreduceBy,
  function reduceBy(valueFn, valueAcc, keyFn, list) {
    return _reduce(function(acc, elt) {
      var key = keyFn(elt);
      acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
      return acc;
    }, {}, list);
  }));


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var _complement = __webpack_require__(155);
var _curry2 = __webpack_require__(0);
var filter = __webpack_require__(120);


/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _isString = __webpack_require__(93);


/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
module.exports = _curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') :
                           Array.prototype.slice.call(list, 0).reverse();
});


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(47);
var _curry2 = __webpack_require__(0);
var _reduce = __webpack_require__(40);
var map = __webpack_require__(36);


/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
module.exports = _curry2(function ap(applyF, applyX) {
  return (
    typeof applyX['fantasy-land/ap'] === 'function' ?
      applyX['fantasy-land/ap'](applyF) :
    typeof applyF.ap === 'function' ?
      applyF.ap(applyX) :
    typeof applyF === 'function' ?
      function(x) { return applyF(x)(applyX(x)); } :
    // else
      _reduce(function(acc, f) { return _concat(acc, map(f, applyX)); }, [], applyF)
  );
});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _makeFlat = __webpack_require__(160);
var _xchain = __webpack_require__(283);
var map = __webpack_require__(36);


/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
module.exports = _curry2(_dispatchable(['fantasy-land/chain', 'chain'], _xchain, function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function(x) { return fn(monad(x))(x); };
  }
  return _makeFlat(false)(map(fn, monad));
}));


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var pipe = __webpack_require__(178);
var reverse = __webpack_require__(115);


/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
module.exports = function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isArray = __webpack_require__(75);
var _isFunction = __webpack_require__(106);
var _isString = __webpack_require__(93);
var toString = __webpack_require__(98);


/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
module.exports = _curry2(function concat(a, b) {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b);
    }
    throw new TypeError(toString(b) + ' is not an array');
  }
  if (_isString(a)) {
    if (_isString(b)) {
      return a + b;
    }
    throw new TypeError(toString(b) + ' is not a string');
  }
  if (a != null && _isFunction(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }
  if (a != null && _isFunction(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(toString(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _filter = __webpack_require__(123);
var _isObject = __webpack_require__(126);
var _reduce = __webpack_require__(40);
var _xfilter = __webpack_require__(288);
var keys = __webpack_require__(50);


/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(_dispatchable(['filter'], _xfilter, function(pred, filterable) {
  return (
    _isObject(filterable) ?
      _reduce(function(acc, key) {
        if (pred(filterable[key])) {
          acc[key] = filterable[key];
        }
        return acc;
      }, {}, keys(filterable)) :
    // else
      _filter(pred, filterable)
  );
}));


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _identity = __webpack_require__(124);


/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
module.exports = _curry1(_identity);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var _objectAssign = __webpack_require__(273);

module.exports =
  typeof Object.assign === 'function' ? Object.assign : _objectAssign;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
};


/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = function _identity(x) { return x; };


/***/ }),
/* 125 */
/***/ (function(module, exports) {

/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
module.exports = Number.isInteger || function _isInteger(n) {
  return (n << 0) === n;
};


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
};


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var _has = __webpack_require__(34);


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
module.exports = _curry3(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (_has(k, r) && !(_has(k, result))) {
      result[k] = r[k];
    }
  }

  return result;
});


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */
module.exports = _curry2(function prop(p, obj) { return obj[p]; });


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(92);
var _curry1 = __webpack_require__(1);
var slice = __webpack_require__(83);


/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
module.exports = _curry1(_checkForMethod('tail', slice(1, Infinity)));


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _xtake = __webpack_require__(295);
var slice = __webpack_require__(83);


/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      var personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      var takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
module.exports = _curry2(_dispatchable(['take'], _xtake, function take(n, xs) {
  return slice(0, n < 0 ? Infinity : n, xs);
}));


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 */
module.exports = _curry1(function type(val) {
  return val === null      ? 'Null'      :
         val === undefined ? 'Undefined' :
         Object.prototype.toString.call(val).slice(8, -1);
});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(121);
var uniqBy = __webpack_require__(187);


/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
module.exports = uniqBy(identity);


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(103);
var _curry2 = __webpack_require__(0);


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      var strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */
module.exports = _curry2(function uniqWith(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!_containsWith(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var adjust = __webpack_require__(136);
var always = __webpack_require__(84);


/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
module.exports = _curry3(function update(idx, x, list) {
  return adjust(always(x), idx, list);
});


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(47);
var _curry3 = __webpack_require__(2);


/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a -> a) -> Number -> [a] -> [a]
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
 */
module.exports = _curry3(function adjust(fn, idx, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = _concat(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @see R.both
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
module.exports = _curry2(function and(a, b) {
  return a && b;
});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _xany = __webpack_require__(161);


/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      var lessThan0 = R.flip(R.lt)(0);
 *      var lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */
module.exports = _curry2(_dispatchable(['any'], _xany, function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      var nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
module.exports = _curry2(function apply(fn, args) {
  return fn.apply(this, args);
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var _has = __webpack_require__(34);
var _isArray = __webpack_require__(75);
var _isInteger = __webpack_require__(125);
var assoc = __webpack_require__(100);
var isNil = __webpack_require__(165);


/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
module.exports = _curry3(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = (!isNil(obj) && _has(idx, obj)) ? obj[idx] : _isInteger(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (_isInteger(idx) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return assoc(idx, val, obj);
  }
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(49);
var _curry2 = __webpack_require__(0);


/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
module.exports = _curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
});


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var chain = __webpack_require__(117);
var compose = __webpack_require__(118);
var map = __webpack_require__(36);


/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       var getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */
module.exports = function composeK() {
  if (arguments.length === 0) {
    throw new Error('composeK requires at least one argument');
  }
  var init = Array.prototype.slice.call(arguments);
  var last = init.pop();
  return compose(compose.apply(this, map(chain, init)), last);
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var curry = __webpack_require__(101);
var nAry = __webpack_require__(112);


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      };
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map((ingredient) => (
 *          'Add a whollop of ' + ingredient, this.ingredients)
 *        )
 *        return R.join('\n', instructions)
 *      }
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad)
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup')
 *      console.log(salad.recipe());
 *      // Add a whollop of Mayonnaise
 *      // Add a whollop of Potato Chips
 *      // Add a whollop of Potato Ketchup
 */
module.exports = _curry2(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }
  if (n === 0) {
    return function() { return new Fn(); };
  }
  return curry(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case  1: return new Fn($0);
      case  2: return new Fn($0, $1);
      case  3: return new Fn($0, $1, $2);
      case  4: return new Fn($0, $1, $2, $3);
      case  5: return new Fn($0, $1, $2, $3, $4);
      case  6: return new Fn($0, $1, $2, $3, $4, $5);
      case  7: return new Fn($0, $1, $2, $3, $4, $5, $6);
      case  8: return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case  9: return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10: return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _map = __webpack_require__(108);
var curryN = __webpack_require__(31);
var max = __webpack_require__(85);
var pluck = __webpack_require__(97);
var reduce = __webpack_require__(51);


/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> b -> ... -> x1), (a -> b -> ... -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      var average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
module.exports = _curry2(function converge(after, fns) {
  return curryN(reduce(max, 0, pluck('length', fns)), function() {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function(fn) {
      return fn.apply(context, args);
    }, fns));
  });
});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
module.exports = _curry2(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(82);
var _curry2 = __webpack_require__(0);


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
module.exports = _curry2(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(103);
var _curry3 = __webpack_require__(2);


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      var cmp = (x, y) => x.a === y.a;
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */
module.exports = _curry3(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_containsWith(pred, first[idx], second) &&
        !_containsWith(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
module.exports = _curry2(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _xdrop = __webpack_require__(284);
var slice = __webpack_require__(83);


/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
module.exports = _curry2(_dispatchable(['drop'], _xdrop, function drop(n, xs) {
  return slice(Math.max(0, n), Infinity, xs);
}));


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _xdropRepeatsWith = __webpack_require__(162);
var last = __webpack_require__(167);


/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
module.exports = _curry2(_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(last(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));



/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _isArguments = __webpack_require__(158);
var _isArray = __webpack_require__(75);
var _isObject = __webpack_require__(126);
var _isString = __webpack_require__(93);


/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty` and/or
 * `<Type>.prototype.empty`.
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
module.exports = _curry1(function empty(x) {
  return (
    (x != null && typeof x['fantasy-land/empty'] === 'function') ?
      x['fantasy-land/empty']() :
    (x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function') ?
      x.constructor['fantasy-land/empty']() :
    (x != null && typeof x.empty === 'function') ?
      x.empty() :
    (x != null && x.constructor != null && typeof x.constructor.empty === 'function') ?
      x.constructor.empty() :
    _isArray(x) ?
      [] :
    _isString(x) ?
      '' :
    _isObject(x) ?
      {} :
    _isArguments(x) ?
      (function() { return arguments; }()) :
    // else
      void 0
  );
});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
module.exports = _curry2(function identical(a, b) {
  // SameValue algorithm
  if (a === b) { // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var _cloneRegExp = __webpack_require__(154);
var type = __webpack_require__(132);


/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */
module.exports = function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ?
        _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (type(value)) {
    case 'Object':  return copy({});
    case 'Array':   return copy([]);
    case 'Date':    return new Date(value.valueOf());
    case 'RegExp':  return _cloneRegExp(value);
    default:        return value;
  }
};


/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = function _cloneRegExp(pattern) {
  return new RegExp(pattern.source, (pattern.global     ? 'g' : '') +
                                    (pattern.ignoreCase ? 'i' : '') +
                                    (pattern.multiline  ? 'm' : '') +
                                    (pattern.sticky     ? 'y' : '') +
                                    (pattern.unicode    ? 'u' : ''));
};


/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(49);
var _curry2 = __webpack_require__(0);


module.exports = function _createPartialApplicator(concat) {
  return _curry2(function(fn, args) {
    return _arity(Math.max(0, fn.length - args.length), function() {
      return fn.apply(this, concat(args, arguments));
    });
  });
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var equals = __webpack_require__(39);


module.exports = function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var _has = __webpack_require__(34);


module.exports = (function() {
  var toString = Object.prototype.toString;
  return toString.call(arguments) === '[object Arguments]' ?
    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :
    function _isArguments(x) { return _has('callee', x); };
}());


/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var _isArrayLike = __webpack_require__(105);


/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
module.exports = function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (_isArrayLike(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduced = __webpack_require__(76);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype['@@transducer/init'] = _xfBase.init;
  XAny.prototype['@@transducer/result'] = function(result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAny.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf['@@transducer/step'](result, true));
    }
    return result;
  };

  return _curry2(function _xany(f, xf) { return new XAny(f, xf); });
}());


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }

  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase.init;
  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase.result;
  XDropRepeatsWith.prototype['@@transducer/step'] = function(result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdropRepeatsWith(pred, xf) { return new XDropRepeatsWith(pred, xf); });
}());


/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = (function() {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function() {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function(acc) { return acc; };
  XWrap.prototype['@@transducer/step'] = function(acc, x) {
    return this.f(acc, x);
  };

  return function _xwrap(fn) { return new XWrap(fn); };
}());


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
module.exports = _curry2(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
module.exports = _curry1(function isNil(x) { return x == null; });


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var converge = __webpack_require__(144);


/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      var getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
module.exports = _curry1(function juxt(fns) {
  return converge(function() { return Array.prototype.slice.call(arguments, 0); }, fns);
});


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var nth = __webpack_require__(95);


/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
module.exports = nth(-1);


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _isNumber = __webpack_require__(159);


/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
module.exports = _curry1(function length(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduce = __webpack_require__(40);
var ap = __webpack_require__(116);
var curryN = __webpack_require__(31);
var map = __webpack_require__(36);


/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
module.exports = _curry2(function liftN(arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function() {
    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var sum = __webpack_require__(184);


/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
module.exports = _curry1(function mean(list) {
  return sum(list) / list.length;
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(49);
var _curry2 = __webpack_require__(0);
var _has = __webpack_require__(34);


/**
 * A customisable version of [`R.memoize`](#memoize). `memoizeWith` takes an
 * additional function that will be applied to a given argument set and used to
 * create the cache key under which the results of the function to be memoized
 * will be stored. Care must be taken when implementing key generation to avoid
 * clashes that may overwrite previous entries erroneously.
 *
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoize
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoizeWith(R.identity, n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
module.exports = _curry2(function memoizeWith(mFn, fn) {
  var cache = {};
  return _arity(fn.length, function() {
    var key = mFn.apply(this, arguments);
    if (!_has(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
module.exports = _curry2(function multiply(a, b) { return a * b; });


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
module.exports = _curry1(function not(a) {
  return !a;
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      var matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */
module.exports = _curry2(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
module.exports = _curry2(function or(a, b) {
  return a || b;
});


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
module.exports = (function() {
  // `Identity` is a functor that holds a single value, where `map` simply
  // transforms the held value with the provided function.
  var Identity = function(x) {
    return {value: x, map: function(f) { return Identity(f(x)); }};
  };

  return _curry3(function over(lens, f, x) {
    // The value returned by the getter function is first transformed with `f`,
    // then set as the value of an `Identity`. This is then mapped over with the
    // setter function of the lens.
    return lens(function(y) { return Identity(f(y)); })(x).value;
  });
}());


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
module.exports = _curry2(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(49);
var _pipe = __webpack_require__(275);
var reduce = __webpack_require__(51);
var tail = __webpack_require__(130);


/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
module.exports = function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipe, arguments[0], tail(arguments)));
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(49);
var _pipeP = __webpack_require__(276);
var reduce = __webpack_require__(51);
var tail = __webpack_require__(130);


/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The leftmost function may have any arity; the remaining functions
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
module.exports = function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipeP, arguments[0], tail(arguments)));
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(47);
var _curry2 = __webpack_require__(0);


/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
module.exports = _curry2(function prepend(el, list) {
  return _concat([el], list);
});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a, b -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *          -               -2
 *         / \              / \
 *        1   -            1   3
 *           / \              / \
 *          2   -     ==>    2  -1
 *             / \              / \
 *            3   -            3   4
 *               / \              / \
 *              4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
module.exports = _curry3(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
module.exports = _curry3(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var ap = __webpack_require__(116);
var map = __webpack_require__(36);
var prepend = __webpack_require__(180);
var reduceRight = __webpack_require__(181);


/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */
module.exports = _curry2(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ?
    traversable.sequence(of) :
    reduceRight(function(x, acc) { return ap(map(prepend, x), acc); },
                of([]),
                traversable);
});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var add = __webpack_require__(99);
var reduce = __webpack_require__(51);


/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
module.exports = reduce(add, 0);


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var drop = __webpack_require__(149);


/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
module.exports = _curry2(function takeLast(n, xs) {
  return drop(n >= 0 ? xs.length - n : 0, xs);
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
module.exports = _curry2(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var _Set = __webpack_require__(263);
var _curry2 = __webpack_require__(0);


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
module.exports = _curry2(function uniqBy(fn, list) {
  var set = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var curryN = __webpack_require__(31);


/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
module.exports = _curry2(function useWith(fn, transformers) {
  return curryN(transformers.length, function() {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var keys = __webpack_require__(50);


/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
module.exports = _curry1(function values(obj) {
  var props = keys(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _has = __webpack_require__(34);


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
module.exports = _curry2(function where(spec, testObj) {
  for (var prop in spec) {
    if (_has(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403)(__webpack_require__(402));

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(35);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(37);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(38);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ramda = __webpack_require__(203);

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var DNA = function () {
  function DNA(props, genes) {
    (0, _classCallCheck3.default)(this, DNA);

    this.props = props;
    this.genes = genes || props.randomDNA();
    this._fitness = null;
  }

  (0, _createClass3.default)(DNA, [{
    key: 'fitness',
    value: function fitness(index) {
      if (!this._fitness) {
        this._fitness = this.props.fitness(this.genes, index);
        if (this._fitness > 1) {
          throw new Error('The fitness function should return values between 0 and 1. Got ' + this._fitness);
        }
      }

      return this._fitness;
    }
  }, {
    key: 'crossover',
    value: function crossover(partner) {
      var midpoint = random(0, Math.min(this.genes.length, partner.genes.length) - 1);

      return new DNA(this.props, [].concat((0, _toConsumableArray3.default)(_ramda2.default.take(midpoint, this.genes)), (0, _toConsumableArray3.default)(_ramda2.default.takeLast(this.genes.length - midpoint, partner.genes))));
    }
  }, {
    key: 'mutate',
    value: function mutate(mutationProbability) {
      var _this = this;

      this.genes = _ramda2.default.addIndex(_ramda2.default.map)(function (gene, index) {
        if (Math.random() < mutationProbability) {
          return _this.props.mutate(gene, index);
        }
        return gene;
      }, this.genes);
    }
  }]);
  return DNA;
}();

var Population = function () {
  function Population(props) {
    (0, _classCallCheck3.default)(this, Population);

    this.props = props;
    this.population = [];
    var i = 0;
    var populationSize = props.populationSize;
    for (i; i < populationSize; i++) {
      this.population.push(new DNA(props));
    }
  }

  (0, _createClass3.default)(Population, [{
    key: 'matingPool',
    value: function matingPool() {
      var _this2 = this;

      return _ramda2.default.pipe(_ramda2.default.addIndex(_ramda2.default.reduce)(function (pool, dna, index) {
        var matingProbability = dna.fitness(index) * 100;

        while (matingProbability > 0) {
          pool.push(dna);
          matingProbability -= 1;
        }

        return pool;
      }, []), function (pool) {
        return pool.length ? pool : _this2.population;
      })(this.population);
    }
  }, {
    key: 'nextGeneration',
    value: function nextGeneration() {
      var _this3 = this;

      var matingPool = this.matingPool();
      this.population = _ramda2.default.addIndex(_ramda2.default.map)(function (dna, index) {
        if (index < _this3.props.clonesToSurvive) {
          return dna;
        }

        var parent1 = matingPool[random(0, matingPool.length - 1)];
        var parent2 = matingPool[random(0, matingPool.length - 1)];
        var child = parent1.crossover(parent2);

        child.mutate(_this3.props.mutationProbability);

        return child;
      }, this.sorted());

      return this.population;
    }
  }, {
    key: 'sorted',
    value: function sorted() {
      return _ramda2.default.pipe(_ramda2.default.addIndex(_ramda2.default.map)(function (dna, index) {
        return {
          dna: dna,
          index: index
        };
      }), _ramda2.default.sortBy(function (dna) {
        return -dna.dna.fitness(dna.index);
      }), _ramda2.default.map(_ramda2.default.prop('dna')))(this.population);
    }
  }, {
    key: 'fittest',
    value: function fittest(target) {
      return this.sorted()[0];
    }
  }]);
  return Population;
}();

var GA = function () {
  function GA(props) {
    (0, _classCallCheck3.default)(this, GA);

    this.props = props;
    this.population = new Population(props);
    this.loop = this.loop.bind(this);
  }

  (0, _createClass3.default)(GA, [{
    key: 'epoch',
    value: function epoch() {
      this.population.nextGeneration();
      this.currentPopulation = this.population.sorted();
      if (this.props.onEpoch) {
        this.props.onEpoch(this.currentPopulation);
      }
    }
  }, {
    key: 'loop',
    value: function loop() {
      this.epoch();
      if (!this.props.isDone(this.currentPopulation)) {
        return setTimeout(this.loop, 500);
      }
    }
  }]);
  return GA;
}();

exports.default = GA;

/***/ }),
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(191);

var _geneticAlgorithm = __webpack_require__(192);

var _geneticAlgorithm2 = _interopRequireDefault(_geneticAlgorithm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

// planck code modified from official example
planck.testbed('Car', function (testbed) {

  testbed.speed = 1.3;
  testbed.hz = 50;

  var pl = planck,
      Vec2 = pl.Vec2;
  var world = new pl.World({
    gravity: Vec2(0, -10)
  });

  // wheel spring settings
  var HZ = 4.0;
  var ZETA = 0.7;
  var SPEED = 50.0;

  var ground = world.createBody();

  var groundFD = {
    density: 0.0,
    friction: 0.6
  };

  ground.createFixture(pl.Edge(Vec2(-20.0, 0.0), Vec2(20.0, 0.0)), groundFD);
  var groundLength = 50;
  var hs = [];
  for (var _i = 0; _i < groundLength; _i++) {
    if (_i % 3 === 0) {
      hs.push(random(-1.0, 3.0));
    } else if (_i % 10 === 0) {
      hs.push(random(3.0, 3.5));
    } else {
      hs.push(random(-1.5, 2.0));
    }
  }
  var x = 20.0,
      y1 = 0.0,
      dx = 5.0;

  for (var i = 0; i < groundLength; ++i) {
    var y2 = hs[i];
    ground.createFixture(pl.Edge(Vec2(x, y1), Vec2(x + dx, y2)), groundFD);
    y1 = y2;
    x += dx;
  }

  ground.createFixture(pl.Edge(Vec2(x, y1), Vec2(x + dx, 30)), groundFD);

  var toDestroy = [];
  // Car
  var groupIndex = -10;
  function createCar(bodyShape) {
    var car = world.createDynamicBody(Vec2(0.0, 5.0));
    car.createFixture(pl.Polygon(bodyShape), {
      density: 1.0,
      filterGroupIndex: groupIndex
    });
    toDestroy.push(car);

    var wheelFD = {};
    wheelFD.density = 1.0;
    wheelFD.friction = 0.9;
    wheelFD.filterGroupIndex = groupIndex;

    var wheelBack = world.createDynamicBody(Vec2(-1.5, 5.4));
    wheelBack.createFixture(pl.Circle(0.4), wheelFD);
    toDestroy.push(wheelBack);

    var wheelFront = world.createDynamicBody(Vec2(1.5, 5.4));
    wheelFront.createFixture(pl.Circle(0.4), wheelFD);
    toDestroy.push(wheelFront);

    var springBack = world.createJoint(pl.WheelJoint({
      motorSpeed: 0.0,
      maxMotorTorque: 20.0,
      enableMotor: true,
      frequencyHz: HZ,
      dampingRatio: ZETA
    }, car, wheelBack, wheelBack.getPosition(), Vec2(0.0, 1.0)));
    toDestroy.push(springBack);

    var springFront = world.createJoint(pl.WheelJoint({
      motorSpeed: 0.0,
      maxMotorTorque: 10.0,
      enableMotor: true,
      frequencyHz: HZ,
      dampingRatio: ZETA
    }, car, wheelFront, wheelFront.getPosition(), Vec2(0.0, 1.0)));
    toDestroy.push(springFront);

    springBack.setMotorSpeed(-SPEED);
    springBack.enableMotor(true);
    springFront.setMotorSpeed(-SPEED);
    springFront.enableMotor(true);

    return car;
  }
  var population = [];
  var infoEl = document.getElementById('info');
  var fitnessEl = document.getElementById('fitness');
  var generationCounter = 0;

  var ga = new _geneticAlgorithm2.default({
    populationSize: 15,
    mutationProbability: 0.05,
    clonesToSurvive: 0,
    randomDNA: function randomDNA() {
      var genesLength = 12;
      var randomPoints = [];
      var i = 0;
      for (i; i < genesLength; i++) {
        randomPoints.push(Vec2(random(-3.0, 3.0), random(0.0, 3.0)));
      }
      var genes = pl.Polygon(randomPoints).m_vertices;

      population.push(createCar(genes));

      return genes;
    },
    mutate: function mutate(gene, index) {
      return Vec2(random(-3.0, 3.0), random(0.0, 3.0));
    },
    fitness: function fitness(genes, index) {
      var sum = population.reduce(function (total, current) {
        return total + current.getPosition().x;
      }, 0);
      var x = population[index].getPosition().x;

      return Math.min(x / sum, 1);
    },
    onEpoch: function onEpoch(nextPopulation) {
      // console.log('fittest', nextPopulation[0].genes);
      testbed.x = 0;
      toDestroy.forEach(function (element) {
        return world.destroyBody(element);
      });
      population = nextPopulation.map(function (dna) {
        return createCar(dna.genes);
      });
      fittestCar = population[0];
      bestX = 0;
      stuck = 0;
      paused = false;
      generationCounter++;
      infoEl.innerHTML = 'Generation ' + generationCounter;
      // setTimeout(() => ga.epoch(), 0);
    }
  });

  var fittestCar = population[0];
  var bestX = 0;
  var stuck = 0;
  var paused = false;

  testbed.step = function () {
    if (paused) {
      return;
    }
    var oldCp = fittestCar.getPosition();
    var fitnessList = [];
    population.forEach(function (car) {
      var cx = car.getPosition().x;
      if (car.getPosition().x > oldCp.x && car.getPosition().y > -10) {
        fittestCar = car;
      }
      fitnessList.push(cx);
    });
    var cp = fittestCar.getPosition();

    if (cp.x > testbed.x + 10) {
      testbed.x = cp.x - 10;
    } else if (cp.x < testbed.x - 10) {
      testbed.x = cp.x + 10;
    }

    var total = fitnessList.reduce(function (total, current) {
      return total + current;
    }, 0);
    fitnessEl.innerHTML = fitnessList.sort(function (a, b) {
      return b - a;
    }).map(function (x) {
      return '<li>' + (x / total * 100).toFixed(2) + '%</li>';
    }).join('');

    if (Math.floor(cp.x) > bestX && cp.y > -10) {
      bestX = Math.floor(cp.x);
      stuck = 0;
      return;
    }

    stuck += 1;

    if (stuck > 300) {
      paused = true;
      ga.epoch();
    }
  };

  return world;
});

/***/ }),
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  F: __webpack_require__(204),
  T: __webpack_require__(205),
  __: __webpack_require__(206),
  add: __webpack_require__(99),
  addIndex: __webpack_require__(207),
  adjust: __webpack_require__(136),
  all: __webpack_require__(208),
  allPass: __webpack_require__(209),
  always: __webpack_require__(84),
  and: __webpack_require__(137),
  any: __webpack_require__(138),
  anyPass: __webpack_require__(210),
  ap: __webpack_require__(116),
  aperture: __webpack_require__(211),
  append: __webpack_require__(212),
  apply: __webpack_require__(139),
  applySpec: __webpack_require__(213),
  ascend: __webpack_require__(214),
  assoc: __webpack_require__(100),
  assocPath: __webpack_require__(140),
  binary: __webpack_require__(215),
  bind: __webpack_require__(141),
  both: __webpack_require__(216),
  call: __webpack_require__(217),
  chain: __webpack_require__(117),
  clamp: __webpack_require__(218),
  clone: __webpack_require__(219),
  comparator: __webpack_require__(220),
  complement: __webpack_require__(221),
  compose: __webpack_require__(118),
  composeK: __webpack_require__(142),
  composeP: __webpack_require__(222),
  concat: __webpack_require__(119),
  cond: __webpack_require__(223),
  construct: __webpack_require__(224),
  constructN: __webpack_require__(143),
  contains: __webpack_require__(225),
  converge: __webpack_require__(144),
  countBy: __webpack_require__(226),
  curry: __webpack_require__(101),
  curryN: __webpack_require__(31),
  dec: __webpack_require__(227),
  defaultTo: __webpack_require__(145),
  descend: __webpack_require__(228),
  difference: __webpack_require__(146),
  differenceWith: __webpack_require__(147),
  dissoc: __webpack_require__(148),
  dissocPath: __webpack_require__(229),
  divide: __webpack_require__(230),
  drop: __webpack_require__(149),
  dropLast: __webpack_require__(231),
  dropLastWhile: __webpack_require__(232),
  dropRepeats: __webpack_require__(233),
  dropRepeatsWith: __webpack_require__(150),
  dropWhile: __webpack_require__(234),
  either: __webpack_require__(235),
  empty: __webpack_require__(151),
  endsWith: __webpack_require__(236),
  eqBy: __webpack_require__(237),
  eqProps: __webpack_require__(238),
  equals: __webpack_require__(39),
  evolve: __webpack_require__(239),
  filter: __webpack_require__(120),
  find: __webpack_require__(240),
  findIndex: __webpack_require__(241),
  findLast: __webpack_require__(242),
  findLastIndex: __webpack_require__(243),
  flatten: __webpack_require__(244),
  flip: __webpack_require__(102),
  forEach: __webpack_require__(245),
  forEachObjIndexed: __webpack_require__(246),
  fromPairs: __webpack_require__(247),
  groupBy: __webpack_require__(248),
  groupWith: __webpack_require__(249),
  gt: __webpack_require__(250),
  gte: __webpack_require__(251),
  has: __webpack_require__(252),
  hasIn: __webpack_require__(253),
  head: __webpack_require__(254),
  identical: __webpack_require__(152),
  identity: __webpack_require__(121),
  ifElse: __webpack_require__(255),
  inc: __webpack_require__(256),
  indexBy: __webpack_require__(257),
  indexOf: __webpack_require__(258),
  init: __webpack_require__(259),
  innerJoin: __webpack_require__(260),
  insert: __webpack_require__(261),
  insertAll: __webpack_require__(262),
  intersection: __webpack_require__(297),
  intersectionWith: __webpack_require__(298),
  intersperse: __webpack_require__(299),
  into: __webpack_require__(300),
  invert: __webpack_require__(301),
  invertObj: __webpack_require__(302),
  invoker: __webpack_require__(94),
  is: __webpack_require__(164),
  isEmpty: __webpack_require__(303),
  isNil: __webpack_require__(165),
  join: __webpack_require__(304),
  juxt: __webpack_require__(166),
  keys: __webpack_require__(50),
  keysIn: __webpack_require__(305),
  last: __webpack_require__(167),
  lastIndexOf: __webpack_require__(306),
  length: __webpack_require__(168),
  lens: __webpack_require__(109),
  lensIndex: __webpack_require__(307),
  lensPath: __webpack_require__(308),
  lensProp: __webpack_require__(309),
  lift: __webpack_require__(110),
  liftN: __webpack_require__(169),
  lt: __webpack_require__(310),
  lte: __webpack_require__(311),
  map: __webpack_require__(36),
  mapAccum: __webpack_require__(312),
  mapAccumRight: __webpack_require__(313),
  mapObjIndexed: __webpack_require__(314),
  match: __webpack_require__(315),
  mathMod: __webpack_require__(316),
  max: __webpack_require__(85),
  maxBy: __webpack_require__(317),
  mean: __webpack_require__(170),
  median: __webpack_require__(318),
  memoize: __webpack_require__(319),
  memoizeWith: __webpack_require__(171),
  merge: __webpack_require__(320),
  mergeAll: __webpack_require__(321),
  mergeDeepLeft: __webpack_require__(322),
  mergeDeepRight: __webpack_require__(323),
  mergeDeepWith: __webpack_require__(324),
  mergeDeepWithKey: __webpack_require__(111),
  mergeWith: __webpack_require__(325),
  mergeWithKey: __webpack_require__(128),
  min: __webpack_require__(326),
  minBy: __webpack_require__(327),
  modulo: __webpack_require__(328),
  multiply: __webpack_require__(172),
  nAry: __webpack_require__(112),
  negate: __webpack_require__(329),
  none: __webpack_require__(330),
  not: __webpack_require__(173),
  nth: __webpack_require__(95),
  nthArg: __webpack_require__(331),
  o: __webpack_require__(332),
  objOf: __webpack_require__(174),
  of: __webpack_require__(333),
  omit: __webpack_require__(334),
  once: __webpack_require__(335),
  or: __webpack_require__(175),
  over: __webpack_require__(176),
  pair: __webpack_require__(336),
  partial: __webpack_require__(337),
  partialRight: __webpack_require__(338),
  partition: __webpack_require__(339),
  path: __webpack_require__(96),
  pathEq: __webpack_require__(340),
  pathOr: __webpack_require__(341),
  pathSatisfies: __webpack_require__(342),
  pick: __webpack_require__(343),
  pickAll: __webpack_require__(177),
  pickBy: __webpack_require__(344),
  pipe: __webpack_require__(178),
  pipeK: __webpack_require__(345),
  pipeP: __webpack_require__(179),
  pluck: __webpack_require__(97),
  prepend: __webpack_require__(180),
  product: __webpack_require__(346),
  project: __webpack_require__(347),
  prop: __webpack_require__(129),
  propEq: __webpack_require__(348),
  propIs: __webpack_require__(349),
  propOr: __webpack_require__(350),
  propSatisfies: __webpack_require__(351),
  props: __webpack_require__(352),
  range: __webpack_require__(353),
  reduce: __webpack_require__(51),
  reduceBy: __webpack_require__(113),
  reduceRight: __webpack_require__(181),
  reduceWhile: __webpack_require__(354),
  reduced: __webpack_require__(355),
  reject: __webpack_require__(114),
  remove: __webpack_require__(182),
  repeat: __webpack_require__(356),
  replace: __webpack_require__(357),
  reverse: __webpack_require__(115),
  scan: __webpack_require__(358),
  sequence: __webpack_require__(183),
  set: __webpack_require__(359),
  slice: __webpack_require__(83),
  sort: __webpack_require__(360),
  sortBy: __webpack_require__(361),
  sortWith: __webpack_require__(362),
  split: __webpack_require__(363),
  splitAt: __webpack_require__(364),
  splitEvery: __webpack_require__(365),
  splitWhen: __webpack_require__(366),
  startsWith: __webpack_require__(367),
  subtract: __webpack_require__(368),
  sum: __webpack_require__(184),
  symmetricDifference: __webpack_require__(369),
  symmetricDifferenceWith: __webpack_require__(370),
  tail: __webpack_require__(130),
  take: __webpack_require__(131),
  takeLast: __webpack_require__(185),
  takeLastWhile: __webpack_require__(371),
  takeWhile: __webpack_require__(372),
  tap: __webpack_require__(373),
  test: __webpack_require__(374),
  times: __webpack_require__(186),
  toLower: __webpack_require__(375),
  toPairs: __webpack_require__(376),
  toPairsIn: __webpack_require__(377),
  toString: __webpack_require__(98),
  toUpper: __webpack_require__(378),
  transduce: __webpack_require__(379),
  transpose: __webpack_require__(380),
  traverse: __webpack_require__(381),
  trim: __webpack_require__(382),
  tryCatch: __webpack_require__(383),
  type: __webpack_require__(132),
  unapply: __webpack_require__(384),
  unary: __webpack_require__(385),
  uncurryN: __webpack_require__(386),
  unfold: __webpack_require__(387),
  union: __webpack_require__(388),
  unionWith: __webpack_require__(389),
  uniq: __webpack_require__(133),
  uniqBy: __webpack_require__(187),
  uniqWith: __webpack_require__(134),
  unless: __webpack_require__(390),
  unnest: __webpack_require__(391),
  until: __webpack_require__(392),
  update: __webpack_require__(135),
  useWith: __webpack_require__(188),
  values: __webpack_require__(189),
  valuesIn: __webpack_require__(393),
  view: __webpack_require__(394),
  when: __webpack_require__(395),
  where: __webpack_require__(190),
  whereEq: __webpack_require__(396),
  without: __webpack_require__(397),
  xprod: __webpack_require__(398),
  zip: __webpack_require__(399),
  zipObj: __webpack_require__(400),
  zipWith: __webpack_require__(401)
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var always = __webpack_require__(84);


/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
module.exports = always(false);


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var always = __webpack_require__(84);


/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
module.exports = always(true);


/***/ }),
/* 206 */
/***/ (function(module, exports) {

/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
module.exports = {'@@functional/placeholder': true};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(47);
var _curry1 = __webpack_require__(1);
var curryN = __webpack_require__(31);


/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
module.exports = _curry1(function addIndex(fn) {
  return curryN(fn.length, function() {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function() {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _xall = __webpack_require__(281);


/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      var equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
module.exports = _curry2(_dispatchable(['all'], _xall, function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var curryN = __webpack_require__(31);
var max = __webpack_require__(85);
var pluck = __webpack_require__(97);
var reduce = __webpack_require__(51);


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      var isQueen = R.propEq('rank', 'Q');
 *      var isSpade = R.propEq('suit', '♠︎');
 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
module.exports = _curry1(function allPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var curryN = __webpack_require__(31);
var max = __webpack_require__(85);
var pluck = __webpack_require__(97);
var reduce = __webpack_require__(51);


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      var isClub = R.propEq('suit', '♣');
 *      var isSpade = R.propEq('suit', '♠');
 *      var isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
module.exports = _curry1(function anyPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var _aperture = __webpack_require__(264);
var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _xaperture = __webpack_require__(282);


/**
 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
module.exports = _curry2(_dispatchable([], _xaperture, _aperture));


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(47);
var _curry2 = __webpack_require__(0);


/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
module.exports = _curry2(function append(el, list) {
  return _concat(list, [el]);
});


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var apply = __webpack_require__(139);
var curryN = __webpack_require__(31);
var map = __webpack_require__(36);
var max = __webpack_require__(85);
var pluck = __webpack_require__(97);
var reduce = __webpack_require__(51);
var values = __webpack_require__(189);


/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      var getMetrics = R.applySpec({
 *                                      sum: R.add,
 *                                      nested: { mul: R.multiply }
 *                                   });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
module.exports = _curry1(function applySpec(spec) {
  spec = map(function(v) { return typeof v == 'function' ? v : applySpec(v); },
             spec);
  return curryN(reduce(max, 0, pluck('length', values(spec))),
                function() {
                  var args = arguments;
                  return map(function(f) { return apply(f, args); }, spec);
                });
});


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
module.exports = _curry3(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var nAry = __webpack_require__(112);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @see R.nAry, R.unary
 * @example
 *
 *      var takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      var takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */
module.exports = _curry1(function binary(fn) {
  return nAry(2, fn);
});


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isFunction = __webpack_require__(106);
var and = __webpack_require__(137);
var lift = __webpack_require__(110);


/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
module.exports = _curry2(function both(f, g) {
  return _isFunction(f) ?
    function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } :
    lift(and)(f, g);
});


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var curry = __webpack_require__(101);


/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      var indentN = R.pipe(R.times(R.always(' ')),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      var format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
module.exports = curry(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);

/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
module.exports = _curry3(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min ? min :
         value > max ? max :
         value;
});


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var _clone = __webpack_require__(153);
var _curry1 = __webpack_require__(1);


/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
module.exports = _curry1(function clone(value) {
  return value != null && typeof value.clone === 'function' ?
    value.clone() :
    _clone(value, [], [], true);
});


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a, b -> Boolean) -> (a, b -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      var byAge = R.comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = R.sort(byAge, people);
 */
module.exports = _curry1(function comparator(pred) {
  return function(a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var lift = __webpack_require__(110);
var not = __webpack_require__(173);


/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
module.exports = lift(not);


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var pipeP = __webpack_require__(179);
var reverse = __webpack_require__(115);


/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The rightmost function may have any arity; the remaining
 * functions must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @example
 *
 *      var db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */
module.exports = function composeP() {
  if (arguments.length === 0) {
    throw new Error('composeP requires at least one argument');
  }
  return pipeP.apply(this, reverse(arguments));
};


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(49);
var _curry1 = __webpack_require__(1);
var map = __webpack_require__(36);
var max = __webpack_require__(85);
var reduce = __webpack_require__(51);


/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @example
 *
 *      var fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
module.exports = _curry1(function cond(pairs) {
  var arity = reduce(max,
                     0,
                     map(function(pair) { return pair[0].length; }, pairs));
  return _arity(arity, function() {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var constructN = __webpack_require__(143);


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @see R.invoker
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      var AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      var animalTypes = ["Lion", "Tiger", "Bear"];
 *      var animalSighting = R.invoker(0, 'sighting');
 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
module.exports = _curry1(function construct(Fn) {
  return constructN(Fn.length, Fn);
});


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(82);
var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 */
module.exports = _curry2(_contains);


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var reduceBy = __webpack_require__(113);


/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
module.exports = reduceBy(function(acc, elem) { return acc + 1; }, 0);


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var add = __webpack_require__(99);


/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
module.exports = add(-1);


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
module.exports = _curry3(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isInteger = __webpack_require__(125);
var assoc = __webpack_require__(100);
var dissoc = __webpack_require__(148);
var remove = __webpack_require__(182);
var update = __webpack_require__(135);


/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
module.exports = _curry2(function dissocPath(path, obj) {
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return _isInteger(path[0]) ? remove(path[0], 1, obj) : dissoc(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      if (obj[head] == null) {
        return obj;
      } else if (_isInteger(path[0])) {
        return update(head, dissocPath(tail, obj[head]), obj);
      } else {
        return assoc(head, dissocPath(tail, obj[head]), obj);
      }
  }
});


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      var half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      var reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
module.exports = _curry2(function divide(a, b) { return a / b; });


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _dropLast = __webpack_require__(266);
var _xdropLast = __webpack_require__(285);


/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
module.exports = _curry2(_dispatchable([], _xdropLast, _dropLast));


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _dropLastWhile = __webpack_require__(267);
var _xdropLastWhile = __webpack_require__(286);


/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} predicate The function to be called on each element
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      var lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 */
module.exports = _curry2(_dispatchable([], _xdropLastWhile, _dropLastWhile));


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _dispatchable = __webpack_require__(19);
var _xdropRepeatsWith = __webpack_require__(162);
var dropRepeatsWith = __webpack_require__(150);
var equals = __webpack_require__(39);


/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
module.exports = _curry1(_dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals)));


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _xdropWhile = __webpack_require__(287);


/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 */
module.exports = _curry2(_dispatchable(['dropWhile'], _xdropWhile, function dropWhile(pred, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len && pred(list[idx])) {
    idx += 1;
  }
  return Array.prototype.slice.call(list, idx);
}));


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isFunction = __webpack_require__(106);
var lift = __webpack_require__(110);
var or = __webpack_require__(175);


/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.or
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 */
module.exports = _curry2(function either(f, g) {
  return _isFunction(f) ?
    function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } :
    lift(or)(f, g);
});


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var equals = __webpack_require__(39);
var takeLast = __webpack_require__(185);

/**
 * Checks if a list ends with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
module.exports = _curry2(function(suffix, list) {
  return equals(takeLast(suffix.length, list), suffix);
});


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var equals = __webpack_require__(39);


/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
module.exports = _curry3(function eqBy(f, x, y) {
  return equals(f(x), f(y));
});


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var equals = __webpack_require__(39);


/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
module.exports = _curry3(function eqProps(prop, obj1, obj2) {
  return equals(obj1[prop], obj2[prop]);
});


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
module.exports = _curry2(function evolve(transformations, object) {
  var result = {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function'                 ? transformation(object[key])
                : transformation && type === 'object' ? evolve(transformation, object[key])
                                                      : object[key];
  }
  return result;
});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _xfind = __webpack_require__(289);


/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */
module.exports = _curry2(_dispatchable(['find'], _xfind, function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _xfindIndex = __webpack_require__(290);


/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */
module.exports = _curry2(_dispatchable([], _xfindIndex, function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _xfindLast = __webpack_require__(291);


/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */
module.exports = _curry2(_dispatchable([], _xfindLast, function findLast(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _xfindLastIndex = __webpack_require__(292);


/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */
module.exports = _curry2(_dispatchable([], _xfindLastIndex, function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _makeFlat = __webpack_require__(160);


/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
module.exports = _curry1(_makeFlat(true));


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(92);
var _curry2 = __webpack_require__(0);


/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
module.exports = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var keys = __webpack_require__(50);


/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */
module.exports = _curry2(function forEachObjIndexed(fn, obj) {
  var keyList = keys(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry1(function fromPairs(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(92);
var _curry2 = __webpack_require__(0);
var reduceBy = __webpack_require__(113);

/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.transduce
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
module.exports = _curry2(_checkForMethod('groupBy', reduceBy(function(acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);

/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all satisfied pairwise comparison according to the provided function.
 * Only adjacent elements are passed to the comparison function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */
module.exports = _curry2(function(fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
module.exports = _curry2(function gt(a, b) { return a > b; });


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
module.exports = _curry2(function gte(a, b) { return a >= b; });


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _has = __webpack_require__(34);


/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      var point = {x: 0, y: 0};
 *      var pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
module.exports = _curry2(_has);


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      var square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
module.exports = _curry2(function hasIn(prop, obj) {
  return prop in obj;
});


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var nth = __webpack_require__(95);


/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
module.exports = nth(0);


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var curryN = __webpack_require__(31);


/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
module.exports = _curry3(function ifElse(condition, onTrue, onFalse) {
  return curryN(Math.max(condition.length, onTrue.length, onFalse.length),
    function _ifElse() {
      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    }
  );
});


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var add = __webpack_require__(99);


/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
module.exports = add(1);


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var reduceBy = __webpack_require__(113);


/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
module.exports = reduceBy(function(acc, elem) { return elem; }, null);


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _indexOf = __webpack_require__(157);
var _isArray = __webpack_require__(75);


/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !_isArray(xs) ?
    xs.indexOf(target) :
    _indexOf(xs, target, 0);
});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(83);


/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
module.exports = slice(0, -1);


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(103);
var _curry3 = __webpack_require__(2);
var _filter = __webpack_require__(123);


/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig (a -> b -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
module.exports = _curry3(function innerJoin(pred, xs, ys) {
  return _filter(function(x) { return _containsWith(pred, x, ys); }, xs);
});


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that

 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
module.exports = _curry3(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
module.exports = _curry3(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx),
                   elts,
                   Array.prototype.slice.call(list, idx));
});


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(82);


// A simple Set type that honours R.equals semantics
module.exports = (function() {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function(item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function(item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  function hasOrAdd(item, shouldAdd, set) {
    var type = typeof item;
    var prevSize, newSize;
    switch (type) {
      case 'string':
      case 'number':
        // distinguish between +0 and -0
        if (item === 0 && 1 / item === -Infinity) {
          if (set._items['-0']) {
            return true;
          } else {
            if (shouldAdd) {
              set._items['-0'] = true;
            }
            return false;
          }
        }
        // these types can all utilise the native Set
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = {};
              set._items[type][item] = true;
            }
            return false;
          } else if (item in set._items[type]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][item] = true;
            }
            return false;
          }
        }

      case 'boolean':
        // set._items['boolean'] holds a two element array
        // representing [ falseExists, trueExists ]
        if (type in set._items) {
          var bIdx = item ? 1 : 0;
          if (set._items[type][bIdx]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][bIdx] = true;
            }
            return false;
          }
        } else {
          if (shouldAdd) {
            set._items[type] = item ? [false, true] : [true, false];
          }
          return false;
        }

      case 'function':
        // compare functions for reference equality
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = [item];
            }
            return false;
          }
          if (!_contains(item, set._items[type])) {
            if (shouldAdd) {
              set._items[type].push(item);
            }
            return false;
          }
          return true;
        }

      case 'undefined':
        if (set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type] = true;
          }
          return false;
        }

      case 'object':
        if (item === null) {
          if (!set._items['null']) {
            if (shouldAdd) {
              set._items['null'] = true;
            }
            return false;
          }
          return true;
        }
      /* falls through */
      default:
        // reduce the search size of heterogeneous sets by creating buckets
        // for each type.
        type = Object.prototype.toString.call(item);
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        // scan through all previously applied items
        if (!_contains(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
    }
  }
  return _Set;
}());


/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
};


/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
};


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var take = __webpack_require__(131);

module.exports = function dropLast(n, xs) {
  return take(n < xs.length ? xs.length - n : 0, xs);
};


/***/ }),
/* 267 */
/***/ (function(module, exports) {

module.exports = function dropLastWhile(pred, list) {
  var idx = list.length - 1;
  while (idx >= 0 && pred(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, 0, idx + 1);
};


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var _arrayFromIterator = __webpack_require__(265);
var _functionName = __webpack_require__(271);
var _has = __webpack_require__(34);
var identical = __webpack_require__(152);
var keys = __webpack_require__(50);
var type = __webpack_require__(132);


module.exports = function _equals(a, b, stackA, stackB) {
  if (identical(a, b)) {
    return true;
  }

  if (type(a) !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) &&
           typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) &&
           typeof b.equals === 'function' && b.equals(a);
  }

  switch (type(a)) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' &&
          _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!identical(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source &&
            a.global === b.global &&
            a.ignoreCase === b.ignoreCase &&
            a.multiline === b.multiline &&
            a.sticky === b.sticky &&
            a.unicode === b.unicode)) {
        return false;
      }
      break;
    case 'Map':
    case 'Set':
      if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
        return false;
      }
      break;
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      break;
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  stackA.push(a);
  stackB.push(b);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
      return false;
    }
    idx -= 1;
  }
  stackA.pop();
  stackB.pop();
  return true;
};


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var _forceReduced = __webpack_require__(270);
var _isArrayLike = __webpack_require__(105);
var _reduce = __webpack_require__(40);
var _xfBase = __webpack_require__(21);

module.exports = (function() {
  var preservingReduced = function(xf) {
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return xf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        var ret = xf['@@transducer/step'](result, input);
        return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
      }
    };
  };

  return function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return rxf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
      }
    };
  };
}());


/***/ }),
/* 270 */
/***/ (function(module, exports) {

module.exports = function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
};


/***/ }),
/* 271 */
/***/ (function(module, exports) {

module.exports = function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
};


/***/ }),
/* 272 */
/***/ (function(module, exports) {

module.exports = function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
};


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var _has = __webpack_require__(34);

// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
module.exports = function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (_has(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
};


/***/ }),
/* 274 */
/***/ (function(module, exports) {

module.exports = function _of(x) { return [x]; };


/***/ }),
/* 275 */
/***/ (function(module, exports) {

module.exports = function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
};


/***/ }),
/* 276 */
/***/ (function(module, exports) {

module.exports = function _pipeP(f, g) {
  return function() {
    var ctx = this;
    return f.apply(ctx, arguments).then(function(x) {
      return g.call(ctx, x);
    });
  };
};


/***/ }),
/* 277 */
/***/ (function(module, exports) {

module.exports = function _quote(s) {
  var escaped = s
    .replace(/\\/g, '\\\\')
    .replace(/[\b]/g, '\\b')  // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, '\\f')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\v/g, '\\v')
    .replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(122);
var _identity = __webpack_require__(124);
var _isArrayLike = __webpack_require__(105);
var _isTransformer = __webpack_require__(127);
var objOf = __webpack_require__(174);


module.exports = (function() {
  var _stepCatArray = {
    '@@transducer/init': Array,
    '@@transducer/step': function(xs, x) {
      xs.push(x);
      return xs;
    },
    '@@transducer/result': _identity
  };
  var _stepCatString = {
    '@@transducer/init': String,
    '@@transducer/step': function(a, b) { return a + b; },
    '@@transducer/result': _identity
  };
  var _stepCatObject = {
    '@@transducer/init': Object,
    '@@transducer/step': function(result, input) {
      return _assign(
        result,
        _isArrayLike(input) ? objOf(input[0], input[1]) : input
      );
    },
    '@@transducer/result': _identity
  };

  return function _stepCat(obj) {
    if (_isTransformer(obj)) {
      return obj;
    }
    if (_isArrayLike(obj)) {
      return _stepCatArray;
    }
    if (typeof obj === 'string') {
      return _stepCatString;
    }
    if (typeof obj === 'object') {
      return _stepCatObject;
    }
    throw new Error('Cannot create transformer for ' + obj);
  };
}());


/***/ }),
/* 279 */
/***/ (function(module, exports) {

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
module.exports = (function() {
  var pad = function pad(n) { return (n < 10 ? '0' : '') + n; };

  return typeof Date.prototype.toISOString === 'function' ?
    function _toISOString(d) {
      return d.toISOString();
    } :
    function _toISOString(d) {
      return (
        d.getUTCFullYear() + '-' +
        pad(d.getUTCMonth() + 1) + '-' +
        pad(d.getUTCDate()) + 'T' +
        pad(d.getUTCHours()) + ':' +
        pad(d.getUTCMinutes()) + ':' +
        pad(d.getUTCSeconds()) + '.' +
        (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z'
      );
    };
}());


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(82);
var _map = __webpack_require__(108);
var _quote = __webpack_require__(277);
var _toISOString = __webpack_require__(279);
var keys = __webpack_require__(50);
var reject = __webpack_require__(114);


module.exports = function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function(obj, keys) {
    return _map(function(k) { return _quote(k) + ': ' + recur(obj[k]); }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function(k) { return /^\d+$/.test(k); }, keys(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
};


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduced = __webpack_require__(76);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = _xfBase.init;
  XAll.prototype['@@transducer/result'] = function(result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function(result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };

  return _curry2(function _xall(f, xf) { return new XAll(f, xf); });
}());


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(47);
var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype['@@transducer/init'] = _xfBase.init;
  XAperture.prototype['@@transducer/result'] = function(result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XAperture.prototype['@@transducer/step'] = function(result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function() {
    return _concat(Array.prototype.slice.call(this.acc, this.pos),
                   Array.prototype.slice.call(this.acc, 0, this.pos));
  };

  return _curry2(function _xaperture(n, xf) { return new XAperture(n, xf); });
}());


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _flatCat = __webpack_require__(269);
var map = __webpack_require__(36);


module.exports = _curry2(function _xchain(f, xf) {
  return map(f, _flatCat(xf));
});


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype['@@transducer/init'] = _xfBase.init;
  XDrop.prototype['@@transducer/result'] = _xfBase.result;
  XDrop.prototype['@@transducer/step'] = function(result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdrop(n, xf) { return new XDrop(n, xf); });
}());


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype['@@transducer/init'] = _xfBase.init;
  XDropLast.prototype['@@transducer/result'] =  function(result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLast.prototype['@@transducer/step'] = function(result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  return _curry2(function _xdropLast(n, xf) { return new XDropLast(n, xf); });
}());


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduce = __webpack_require__(40);
var _xfBase = __webpack_require__(21);

module.exports = (function() {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropLastWhile.prototype['@@transducer/result'] = function(result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLastWhile.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.retain(result, input)
                         : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function(result, input) {
    result = _reduce(
      this.xf['@@transducer/step'],
      result,
      this.retained
    );
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };
  XDropLastWhile.prototype.retain = function(result, input) {
    this.retained.push(input);
    return result;
  };

  return _curry2(function _xdropLastWhile(fn, xf) { return new XDropLastWhile(fn, xf); });
}());


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
  XDropWhile.prototype['@@transducer/step'] = function(result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdropWhile(f, xf) { return new XDropWhile(f, xf); });
}());


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return _curry2(function _xfilter(f, xf) { return new XFilter(f, xf); });
}());


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduced = __webpack_require__(76);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = _xfBase.init;
  XFind.prototype['@@transducer/result'] = function(result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };

  return _curry2(function _xfind(f, xf) { return new XFind(f, xf); });
}());


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduced = __webpack_require__(76);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindIndex.prototype['@@transducer/result'] = function(result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFindIndex.prototype['@@transducer/step'] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, this.idx));
    }
    return result;
  };

  return _curry2(function _xfindIndex(f, xf) { return new XFindIndex(f, xf); });
}());


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype['@@transducer/init'] = _xfBase.init;
  XFindLast.prototype['@@transducer/result'] = function(result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };
  XFindLast.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };

  return _curry2(function _xfindLast(f, xf) { return new XFindLast(f, xf); });
}());


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindLastIndex.prototype['@@transducer/result'] = function(result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };
  XFindLastIndex.prototype['@@transducer/step'] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };

  return _curry2(function _xfindLastIndex(f, xf) { return new XFindLastIndex(f, xf); });
}());


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;
  XMap.prototype['@@transducer/step'] = function(result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return _curry2(function _xmap(f, xf) { return new XMap(f, xf); });
}());


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var _curryN = __webpack_require__(104);
var _has = __webpack_require__(34);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
  XReduceBy.prototype['@@transducer/result'] = function(result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function(result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return _curryN(4, [],
                 function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
                   return new XReduceBy(valueFn, valueAcc, keyFn, xf);
                 });
}());


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduced = __webpack_require__(76);
var _xfBase = __webpack_require__(21);

module.exports = (function() {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = _xfBase.init;
  XTake.prototype['@@transducer/result'] = _xfBase.result;
  XTake.prototype['@@transducer/step'] = function(result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };

  return _curry2(function _xtake(n, xf) { return new XTake(n, xf); });
}());


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduced = __webpack_require__(76);
var _xfBase = __webpack_require__(21);


module.exports = (function() {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
  XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
  XTakeWhile.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
  };

  return _curry2(function _xtakeWhile(f, xf) { return new XTakeWhile(f, xf); });
}());


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(82);
var _curry2 = __webpack_require__(0);
var _filter = __webpack_require__(123);
var flip = __webpack_require__(102);
var uniq = __webpack_require__(133);


/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
module.exports = _curry2(function intersection(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return uniq(_filter(flip(_contains)(lookupList), filteredList));
});


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(103);
var _curry3 = __webpack_require__(2);
var uniqWith = __webpack_require__(134);


/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate function that determines whether
 *        the two supplied elements are equal.
 * @param {Array} list1 One list of items to compare
 * @param {Array} list2 A second list of items to compare
 * @return {Array} A new list containing those elements common to both lists.
 * @see R.innerJoin
 * @deprecated since v0.24.0
 * @example
 *
 *      var buffaloSpringfield = [
 *        {id: 824, name: 'Richie Furay'},
 *        {id: 956, name: 'Dewey Martin'},
 *        {id: 313, name: 'Bruce Palmer'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *      var csny = [
 *        {id: 204, name: 'David Crosby'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 539, name: 'Graham Nash'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *
 *      R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
module.exports = _curry3(function intersectionWith(pred, list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  var results = [];
  var idx = 0;
  while (idx < filteredList.length) {
    if (_containsWith(pred, filteredList[idx], lookupList)) {
      results[results.length] = filteredList[idx];
    }
    idx += 1;
  }
  return uniqWith(pred, results);
});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(92);
var _curry2 = __webpack_require__(0);


/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
 */
module.exports = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
  var out = [];
  var idx = 0;
  var length = list.length;
  while (idx < length) {
    if (idx === length - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }
    idx += 1;
  }
  return out;
}));


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var _clone = __webpack_require__(153);
var _curry3 = __webpack_require__(2);
var _isTransformer = __webpack_require__(127);
var _reduce = __webpack_require__(40);
var _stepCat = __webpack_require__(278);


/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
module.exports = _curry3(function into(acc, xf, list) {
  return _isTransformer(acc) ?
    _reduce(xf(acc), acc['@@transducer/init'](), list) :
    _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
});


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _has = __webpack_require__(34);
var keys = __webpack_require__(50);


/**
 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
 * duplicate values by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys in an array.
 * @see R.invertObj
 * @example
 *
 *      var raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */
module.exports = _curry1(function invert(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = _has(val, out) ? out[val] : (out[val] = []);
    list[list.length] = key;
    idx += 1;
  }
  return out;
});


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var keys = __webpack_require__(50);


/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @see R.invert
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
module.exports = _curry1(function invertObj(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var empty = __webpack_require__(151);
var equals = __webpack_require__(39);


/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */
module.exports = _curry1(function isEmpty(x) {
  return x != null && equals(x, empty(x));
});


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(94);


/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      var spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
module.exports = invoker(1, 'join');


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @see R.keys, R.valuesIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */
module.exports = _curry1(function keysIn(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isArray = __webpack_require__(75);
var equals = __webpack_require__(39);


/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var lens = __webpack_require__(109);
var nth = __webpack_require__(95);
var update = __webpack_require__(135);


/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */
module.exports = _curry1(function lensIndex(n) {
  return lens(nth(n), update(n));
});


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var assocPath = __webpack_require__(140);
var lens = __webpack_require__(109);
var path = __webpack_require__(96);


/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */
module.exports = _curry1(function lensPath(p) {
  return lens(path(p), assocPath(p));
});


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var assoc = __webpack_require__(100);
var lens = __webpack_require__(109);
var prop = __webpack_require__(129);


/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
module.exports = _curry1(function lensProp(k) {
  return lens(prop(k), assoc(k));
});


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
module.exports = _curry2(function lt(a, b) { return a < b; });


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */
module.exports = _curry2(function lte(a, b) { return a <= b; });


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccumRight
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */
module.exports = _curry3(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * The `mapAccumRight` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
 * the right to the left.
 *
 * The iterator function receives two arguments, *value* and *acc*, and should
 * return a tuple *[value, acc]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (x-> acc -> (y, acc)) -> acc -> [x] -> ([y], acc)
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var append = (a, b) => [a + b, a + b];
 *
 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   [
 *     f(b, f(c, f(d, a)[0])[0])[1],
 *     f(c, f(d, a)[0])[1],
 *     f(d, a)[1],
 *   ]
 *   f(b, f(c, f(d, a)[0])[0])[0],
 * ]
 */
module.exports = _curry3(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(list[idx], tuple[0]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [result, tuple[0]];
});


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _reduce = __webpack_require__(40);
var keys = __webpack_require__(50);


/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      var values = { x: 1, y: 2, z: 3 };
 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
module.exports = _curry2(function mapObjIndexed(fn, obj) {
  return _reduce(function(acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, keys(obj));
});


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
module.exports = _curry2(function match(rx, str) {
  return str.match(rx) || [];
});


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isInteger = __webpack_require__(125);


/**
 * `mathMod` behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @see R.modulo
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      var clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      var seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */
module.exports = _curry2(function mathMod(m, p) {
  if (!_isInteger(m)) { return NaN; }
  if (!_isInteger(p) || p < 1) { return NaN; }
  return ((m % p) + p) % p;
});


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
module.exports = _curry3(function maxBy(f, a, b) {
  return f(b) > f(a) ? b : a;
});


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var mean = __webpack_require__(170);


/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.mean
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
module.exports = _curry1(function median(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return mean(Array.prototype.slice.call(list, 0).sort(function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeWith = __webpack_require__(171);
var toString = __webpack_require__(98);


/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoizeWith
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
module.exports = memoizeWith(function() {
  return toString(arguments);
});


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(122);
var _curry2 = __webpack_require__(0);


/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      var resetToDefault = R.merge(R.__, {x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
 */
module.exports = _curry2(function merge(l, r) {
  return _assign({}, l, r);
});


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(122);
var _curry1 = __webpack_require__(1);


/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
module.exports = _curry1(function mergeAll(list) {
  return _assign.apply(null, [{}].concat(list));
});


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var mergeDeepWithKey = __webpack_require__(111);


/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */
module.exports = _curry2(function mergeDeepLeft(lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var mergeDeepWithKey = __webpack_require__(111);


/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
module.exports = _curry2(function mergeDeepRight(lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var mergeDeepWithKey = __webpack_require__(111);


/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeep, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */
module.exports = _curry3(function mergeDeepWith(fn, lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var mergeWithKey = __webpack_require__(128);


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWith, R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
module.exports = _curry3(function mergeWith(fn, l, r) {
  return mergeWithKey(function(_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
module.exports = _curry2(function min(a, b) { return b < a ? b : a; });


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
module.exports = _curry3(function minBy(f, a, b) {
  return f(b) < f(a) ? b : a;
});


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      var isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
module.exports = _curry2(function modulo(a, b) { return a % b; });


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
module.exports = _curry1(function negate(n) { return -n; });


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var _complement = __webpack_require__(155);
var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _xany = __webpack_require__(161);
var any = __webpack_require__(138);


/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isEven, [1, 3, 5, 7, 8, 11]); //=> false
 */
module.exports = _curry2(_complement(_dispatchable(['any'], _xany, any)));


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var curryN = __webpack_require__(31);
var nth = __webpack_require__(95);


/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */
module.exports = _curry1(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return curryN(arity, function() {
    return nth(n, arguments);
  });
});


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      var classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + lastName
 *      var yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */
module.exports = _curry3(function o(f, g, x) {
  return f(g(x));
});


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _of = __webpack_require__(274);


/**
 * Returns a singleton array containing the value provided.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */
module.exports = _curry1(_of);


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(82);
var _curry2 = __webpack_require__(0);


/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
module.exports = _curry2(function omit(names, obj) {
  var result = {};
  for (var prop in obj) {
    if (!_contains(prop, names)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(49);
var _curry1 = __webpack_require__(1);


/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
module.exports = _curry1(function once(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function() {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
module.exports = _curry2(function pair(fst, snd) { return [fst, snd]; });


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(47);
var _createPartialApplicator = __webpack_require__(156);


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight
 * @example
 *
 *      var multiply2 = (a, b) => a * b;
 *      var double = R.partial(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var sayHello = R.partial(greet, ['Hello']);
 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */
module.exports = _createPartialApplicator(_concat);


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(47);
var _createPartialApplicator = __webpack_require__(156);
var flip = __webpack_require__(102);


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
module.exports = _createPartialApplicator(flip(_concat));


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(120);
var juxt = __webpack_require__(166);
var reject = __webpack_require__(114);


/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
module.exports = juxt([filter, reject]);


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var equals = __webpack_require__(39);
var path = __webpack_require__(96);


/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
module.exports = _curry3(function pathEq(_path, val, obj) {
  return equals(path(_path, obj), val);
});


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var defaultTo = __webpack_require__(145);
var path = __webpack_require__(96);


/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
module.exports = _curry3(function pathOr(d, p, obj) {
  return defaultTo(d, path(p, obj));
});


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var path = __webpack_require__(96);


/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */
module.exports = _curry3(function pathSatisfies(pred, propPath, obj) {
  return propPath.length > 0 && pred(path(propPath, obj));
});


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
module.exports = _curry2(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
module.exports = _curry2(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var composeK = __webpack_require__(142);
var reverse = __webpack_require__(115);

/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(R.chain(f), R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */
module.exports = function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }
  return composeK.apply(this, reverse(arguments));
};


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

var multiply = __webpack_require__(172);
var reduce = __webpack_require__(51);


/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
module.exports = reduce(multiply, 1);


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var _map = __webpack_require__(108);
var identity = __webpack_require__(121);
var pickAll = __webpack_require__(177);
var useWith = __webpack_require__(188);


/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
module.exports = useWith(_map, [pickAll, identity]); // passing `identity` gives correct arity


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var equals = __webpack_require__(39);


/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.equals, R.propSatisfies
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
module.exports = _curry3(function propEq(name, val, obj) {
  return equals(val, obj[name]);
});


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var is = __webpack_require__(164);


/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
module.exports = _curry3(function propIs(type, name, obj) {
  return is(type, obj[name]);
});


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var _has = __webpack_require__(34);


/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
module.exports = _curry3(function propOr(val, p, obj) {
  return (obj != null && _has(p, obj)) ? obj[p] : val;
});


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
module.exports = _curry3(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
module.exports = _curry2(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;

  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }

  return out;
});


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _isNumber = __webpack_require__(159);


/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
module.exports = _curry2(function range(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var _curryN = __webpack_require__(104);
var _reduce = __webpack_require__(40);
var _reduced = __webpack_require__(76);


/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      var isOdd = (acc, x) => x % 2 === 1;
 *      var xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      var ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
module.exports = _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
  return _reduce(function(acc, x) {
    return pred(acc, x) ? fn(acc, x) : _reduced(acc);
  }, a, list);
});


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _reduced = __webpack_require__(76);

/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * Note: this optimization is unavailable to functions not explicitly listed
 * above. For instance, it is not currently supported by
 * [`reduceRight`](#reduceRight).
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */

module.exports = _curry1(_reduced);


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var always = __webpack_require__(84);
var times = __webpack_require__(186);


/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
module.exports = _curry2(function repeat(value, n) {
  return times(always(value), n);
});


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
module.exports = _curry3(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a,b -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @see R.reduce
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
module.exports = _curry3(function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var always = __webpack_require__(84);
var over = __webpack_require__(176);


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
module.exports = _curry3(function set(lens, v, x) {
  return over(lens, always(v), x);
});


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,a -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
module.exports = _curry2(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      var sortByFirstItem = R.sortBy(R.prop(0));
 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      var people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
module.exports = _curry2(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [a -> a -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @example
 *
 *      var alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      var bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      var people = [clara, bob, alice];
 *      var ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
module.exports = _curry2(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(94);


/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      var pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
module.exports = invoker(1, 'split');


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var length = __webpack_require__(168);
var slice = __webpack_require__(83);


/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
module.exports = _curry2(function splitAt(index, array) {
  return [slice(0, index, array), slice(index, length(array), array)];
});


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var slice = __webpack_require__(83);


/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
module.exports = _curry2(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(slice(idx, idx += n, list));
  }
  return result;
});


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
module.exports = _curry2(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];

  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }

  return [prefix, Array.prototype.slice.call(list, idx)];
});


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var equals = __webpack_require__(39);
var take = __webpack_require__(131);

/**
 * Checks if a list starts with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
module.exports = _curry2(function(prefix, list) {
  return equals(take(prefix.length, list), prefix);
});


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      var minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      var complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */
module.exports = _curry2(function subtract(a, b) {
  return Number(a) - Number(b);
});


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var concat = __webpack_require__(119);
var difference = __webpack_require__(146);


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
module.exports = _curry2(function symmetricDifference(list1, list2) {
  return concat(difference(list1, list2), difference(list2, list1));
});


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var concat = __webpack_require__(119);
var differenceWith = __webpack_require__(147);


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
module.exports = _curry3(function symmetricDifferenceWith(pred, list1, list2) {
  return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
});


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 */
module.exports = _curry2(function takeLastWhile(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0 && fn(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, idx + 1);
});


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var _dispatchable = __webpack_require__(19);
var _xtakeWhile = __webpack_require__(296);


/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      var isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 */
module.exports = _curry2(_dispatchable(['takeWhile'], _xtakeWhile, function takeWhile(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len && fn(list[idx])) {
    idx += 1;
  }
  return Array.prototype.slice.call(list, 0, idx);
}));


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
module.exports = _curry2(function tap(fn, x) {
  fn(x);
  return x;
});


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var _cloneRegExp = __webpack_require__(154);
var _curry2 = __webpack_require__(0);
var _isRegExp = __webpack_require__(272);
var toString = __webpack_require__(98);


/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
module.exports = _curry2(function test(pattern, str) {
  if (!_isRegExp(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString(pattern));
  }
  return _cloneRegExp(pattern).test(str);
});


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(94);


/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
module.exports = invoker(0, 'toLowerCase');


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var _has = __webpack_require__(34);


/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
module.exports = _curry1(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (_has(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
module.exports = _curry1(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(94);


/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
module.exports = invoker(0, 'toUpperCase');


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

var _reduce = __webpack_require__(40);
var _xwrap = __webpack_require__(163);
var curryN = __webpack_require__(31);


/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      var isOdd = (x) => x % 2 === 1;
 *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */
module.exports = curryN(4, function transduce(xf, fn, acc, list) {
  return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
});


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 *      // If some of the rows are shorter than the following rows, their elements are skipped:
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */
module.exports = _curry1(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);
var map = __webpack_require__(36);
var sequence = __webpack_require__(183);


/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
module.exports = _curry3(function traverse(of, f, traversable) {
  return typeof traversable['fantasy-land/traverse'] === 'function' ?
    traversable['fantasy-land/traverse'](f, of) :
    sequence(of, map(f, traversable));
});


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
module.exports = (function() {
  var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
           '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
           '\u2029\uFEFF';
  var zeroWidth = '\u200b';
  var hasProtoTrim = (typeof String.prototype.trim === 'function');
  if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
    return _curry1(function trim(str) {
      var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
      var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
      return str.replace(beginRx, '').replace(endRx, '');
    });
  } else {
    return _curry1(function trim(str) {
      return str.trim();
    });
  }
}());


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(49);
var _concat = __webpack_require__(47);
var _curry2 = __webpack_require__(0);


/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
module.exports = _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function() {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
module.exports = _curry1(function unapply(fn) {
  return function() {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);
var nAry = __webpack_require__(112);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @see R.binary, R.nAry
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
module.exports = _curry1(function unary(fn) {
  return nAry(1, fn);
});


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var curryN = __webpack_require__(31);


/**
 * Returns a function of arity `n` from a (manually) curried function.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b) -> (a -> c)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry
 * @example
 *
 *      var addFour = a => b => c => d => a + b + c + d;
 *
 *      var uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */
module.exports = _curry2(function uncurryN(depth, fn) {
  return curryN(depth, function() {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      var f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
module.exports = _curry2(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(47);
var _curry2 = __webpack_require__(0);
var compose = __webpack_require__(118);
var uniq = __webpack_require__(133);


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
module.exports = _curry2(compose(uniq, _concat));


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(47);
var _curry3 = __webpack_require__(2);
var uniqWith = __webpack_require__(134);


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
module.exports = _curry3(function unionWith(pred, list1, list2) {
  return uniqWith(pred, _concat(list1, list2));
});


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */
module.exports = _curry3(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

var _identity = __webpack_require__(124);
var chain = __webpack_require__(117);


/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
module.exports = chain(_identity);


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
module.exports = _curry3(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(1);


/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @see R.values, R.keysIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
module.exports = _curry1(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
module.exports = (function() {
  // `Const` is a functor that effectively ignores the function given to `map`.
  var Const = function(x) {
    return {value: x, 'fantasy-land/map': function() { return this; }};
  };

  return _curry2(function view(lens, x) {
    // Using `Const` effectively ignores the setter function of the `lens`,
    // leaving the value returned by the getter function unmodified.
    return lens(Const)(x).value;
  });
}());


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
module.exports = _curry3(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);
var equals = __webpack_require__(39);
var map = __webpack_require__(36);
var where = __webpack_require__(190);


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
module.exports = _curry2(function whereEq(spec, testObj) {
  return where(map(equals, spec), testObj);
});


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(82);
var _curry2 = __webpack_require__(0);
var flip = __webpack_require__(102);
var reject = __webpack_require__(114);


/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
module.exports = _curry2(function(xs, list) {
  return reject(flip(_contains)(xs), list);
});


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */
module.exports = _curry2(function xprod(a, b) { // = xprodWith(prepend); (takes about 3 times as long...)
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
module.exports = _curry2(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(0);


/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry2(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(2);


/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,b -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
module.exports = _curry3(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});


/***/ }),
/* 402 */
/***/ (function(module, exports) {

module.exports = "/*\n * Planck.js v0.1.34\n * \n * Copyright (c) 2016-2017 Ali Shakiba http://shakiba.me/planck.js\n * Copyright (c) 2006-2013 Erin Catto  http://www.gphysics.com\n * \n * This software is provided 'as-is', without any express or implied\n * warranty.  In no event will the authors be held liable for any damages\n * arising from the use of this software.\n * \n * Permission is granted to anyone to use this software for any purpose,\n * including commercial applications, and to alter it and redistribute it\n * freely, subject to the following restrictions:\n * \n * 1. The origin of this software must not be misrepresented; you must not\n * claim that you wrote the original software. If you use this software\n * in a product, an acknowledgment in the product documentation would be\n * appreciated but is not required.\n * 2. Altered source versions must be plainly marked as such, and must not be\n * misrepresented as being the original software.\n * 3. This notice may not be removed or altered from any source distribution.\n */\n/*\n * Stage.js \n * \n * @copyright 2017 Ali Shakiba http://shakiba.me/stage.js\n * @license The MIT License\n */\n!function(e){if(\"object\"==typeof exports&&\"undefined\"!=typeof module)module.exports=e();else if(\"function\"==typeof define&&define.amd)define([],e);else{var f;\"undefined\"!=typeof window?f=window:\"undefined\"!=typeof global?f=global:\"undefined\"!=typeof self&&(f=self),f.planck=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\nvar planck = require(\"../lib/\");\n\nvar Stage = require(\"stage-js/platform/web\");\n\nmodule.exports = planck;\n\nplanck.testbed = function(opts, callback) {\n    if (typeof opts === \"function\") {\n        callback = opts;\n        opts = null;\n    }\n    Stage(function(stage, canvas) {\n        stage.on(Stage.Mouse.START, function() {\n            window.focus();\n            document.activeElement && document.activeElement.blur();\n            canvas.focus();\n        });\n        stage.MAX_ELAPSE = 1e3 / 30;\n        var Vec2 = planck.Vec2;\n        var testbed = {};\n        var paused = false;\n        stage.on(\"resume\", function() {\n            paused = false;\n            testbed._resume && testbed._resume();\n        });\n        stage.on(\"pause\", function() {\n            paused = true;\n            testbed._pause && testbed._pause();\n        });\n        testbed.isPaused = function() {\n            return paused;\n        };\n        testbed.togglePause = function() {\n            paused ? testbed.play() : testbed.pause();\n        };\n        testbed.pause = function() {\n            stage.pause();\n        };\n        testbed.resume = function() {\n            stage.resume();\n            testbed.focus();\n        };\n        testbed.focus = function() {\n            document.activeElement && document.activeElement.blur();\n            canvas.focus();\n        };\n        testbed.focus = function() {\n            document.activeElement && document.activeElement.blur();\n            canvas.focus();\n        };\n        testbed.debug = false;\n        testbed.width = 80;\n        testbed.height = 60;\n        testbed.x = 0;\n        testbed.y = -10;\n        testbed.ratio = 16;\n        testbed.hz = 60;\n        testbed.speed = 1;\n        testbed.activeKeys = {};\n        testbed.background = \"#222222\";\n        var statusText = \"\";\n        var statusMap = {};\n        function statusSet(name, value) {\n            if (typeof value !== \"function\" && typeof value !== \"object\") {\n                statusMap[name] = value;\n            }\n        }\n        function statusMerge(obj) {\n            for (var key in obj) {\n                statusSet(key, obj[key]);\n            }\n        }\n        testbed.status = function(a, b) {\n            if (typeof b !== \"undefined\") {\n                statusSet(a, b);\n            } else if (a && typeof a === \"object\") {\n                statusMerge(a);\n            } else if (typeof a === \"string\") {\n                statusText = a;\n            }\n            testbed._status && testbed._status(statusText, statusMap);\n        };\n        testbed.info = function(text) {\n            testbed._info && testbed._info(text);\n        };\n        var lastDrawHash = \"\", drawHash = \"\";\n        (function() {\n            var drawingTexture = new Stage.Texture();\n            stage.append(Stage.image(drawingTexture));\n            var buffer = [];\n            stage.tick(function() {\n                buffer.length = 0;\n            }, true);\n            drawingTexture.draw = function(ctx) {\n                ctx.save();\n                ctx.transform(1, 0, 0, -1, -testbed.x, -testbed.y);\n                ctx.lineWidth = 2 / testbed.ratio;\n                ctx.lineCap = \"round\";\n                for (var drawing = buffer.shift(); drawing; drawing = buffer.shift()) {\n                    drawing(ctx, testbed.ratio);\n                }\n                ctx.restore();\n            };\n            testbed.drawPoint = function(p, r, color) {\n                buffer.push(function(ctx, ratio) {\n                    ctx.beginPath();\n                    ctx.arc(p.x, p.y, 5 / ratio, 0, 2 * Math.PI);\n                    ctx.strokeStyle = color;\n                    ctx.stroke();\n                });\n                drawHash += \"point\" + p.x + \",\" + p.y + \",\" + r + \",\" + color;\n            };\n            testbed.drawCircle = function(p, r, color) {\n                buffer.push(function(ctx) {\n                    ctx.beginPath();\n                    ctx.arc(p.x, p.y, r, 0, 2 * Math.PI);\n                    ctx.strokeStyle = color;\n                    ctx.stroke();\n                });\n                drawHash += \"circle\" + p.x + \",\" + p.y + \",\" + r + \",\" + color;\n            };\n            testbed.drawSegment = function(a, b, color) {\n                buffer.push(function(ctx) {\n                    ctx.beginPath();\n                    ctx.moveTo(a.x, a.y);\n                    ctx.lineTo(b.x, b.y);\n                    ctx.strokeStyle = color;\n                    ctx.stroke();\n                });\n                drawHash += \"segment\" + a.x + \",\" + a.y + \",\" + b.x + \",\" + b.y + \",\" + color;\n            };\n            testbed.drawPolygon = function(points, color) {\n                if (!points || !points.length) {\n                    return;\n                }\n                buffer.push(function(ctx) {\n                    ctx.beginPath();\n                    ctx.moveTo(points[0].x, points[0].y);\n                    for (var i = 1; i < points.length; i++) {\n                        ctx.lineTo(points[i].x, points[i].y);\n                    }\n                    ctx.strokeStyle = color;\n                    ctx.closePath();\n                    ctx.stroke();\n                });\n                drawHash += \"segment\";\n                for (var i = 1; i < points.length; i++) {\n                    drawHash += points[i].x + \",\" + points[i].y + \",\";\n                }\n                drawHash += color;\n            };\n            testbed.drawAABB = function(aabb, color) {\n                buffer.push(function(ctx) {\n                    ctx.beginPath();\n                    ctx.moveTo(aabb.lowerBound.x, aabb.lowerBound.y);\n                    ctx.lineTo(aabb.upperBound.x, aabb.lowerBound.y);\n                    ctx.lineTo(aabb.upperBound.x, aabb.upperBound.y);\n                    ctx.lineTo(aabb.lowerBound.x, aabb.upperBound.y);\n                    ctx.strokeStyle = color;\n                    ctx.closePath();\n                    ctx.stroke();\n                });\n                drawHash += \"aabb\";\n                drawHash += aabb.lowerBound.x + \",\" + aabb.lowerBound.y + \",\";\n                drawHash += aabb.upperBound.x + \",\" + aabb.upperBound.y + \",\";\n                drawHash += color;\n            };\n            testbed.color = function(r, g, b) {\n                r = r * 256 | 0;\n                g = g * 256 | 0;\n                b = b * 256 | 0;\n                return \"rgb(\" + r + \", \" + g + \", \" + b + \")\";\n            };\n        })();\n        var world = callback(testbed);\n        var viewer = new Viewer(world, testbed);\n        var lastX = 0, lastY = 0;\n        stage.tick(function(dt, t) {\n            if (lastX !== testbed.x || lastY !== testbed.y) {\n                viewer.offset(-testbed.x, -testbed.y);\n                lastX = testbed.x, lastY = testbed.y;\n            }\n        });\n        viewer.tick(function(dt, t) {\n            if (typeof testbed.step === \"function\") {\n                testbed.step(dt, t);\n            }\n            if (targetBody) {\n                testbed.drawSegment(targetBody.getPosition(), mouseMove, \"rgba(255,255,255,0.2)\");\n            }\n            if (lastDrawHash !== drawHash) {\n                lastDrawHash = drawHash;\n                stage.touch();\n            }\n            drawHash = \"\";\n            return true;\n        });\n        viewer.scale(1, -1);\n        stage.background(testbed.background);\n        stage.viewbox(testbed.width, testbed.height);\n        stage.pin(\"alignX\", -.5);\n        stage.pin(\"alignY\", -.5);\n        stage.prepend(viewer);\n        function findBody(point) {\n            var body;\n            var aabb = planck.AABB(point, point);\n            world.queryAABB(aabb, function(fixture) {\n                if (body) {\n                    return;\n                }\n                if (!fixture.getBody().isDynamic() || !fixture.testPoint(point)) {\n                    return;\n                }\n                body = fixture.getBody();\n                return true;\n            });\n            return body;\n        }\n        var mouseGround = world.createBody();\n        var mouseJoint;\n        var targetBody;\n        var mouseMove = {\n            x: 0,\n            y: 0\n        };\n        viewer.attr(\"spy\", true).on(Stage.Mouse.START, function(point) {\n            if (targetBody) {\n                return;\n            }\n            var body = findBody(point);\n            if (!body) {\n                return;\n            }\n            if (testbed.mouseForce) {\n                targetBody = body;\n            } else {\n                mouseJoint = planck.MouseJoint({\n                    maxForce: 1e3\n                }, mouseGround, body, Vec2(point));\n                world.createJoint(mouseJoint);\n            }\n        }).on(Stage.Mouse.MOVE, function(point) {\n            if (mouseJoint) {\n                mouseJoint.setTarget(point);\n            }\n            mouseMove.x = point.x;\n            mouseMove.y = point.y;\n        }).on(Stage.Mouse.END, function(point) {\n            if (mouseJoint) {\n                world.destroyJoint(mouseJoint);\n                mouseJoint = null;\n            }\n            if (targetBody) {\n                var force = Vec2.sub(point, targetBody.getPosition());\n                targetBody.applyForceToCenter(force.mul(testbed.mouseForce), true);\n                targetBody = null;\n            }\n        }).on(Stage.Mouse.CANCEL, function(point) {\n            if (mouseJoint) {\n                world.destroyJoint(mouseJoint);\n                mouseJoint = null;\n            }\n            if (targetBody) {\n                targetBody = null;\n            }\n        });\n        window.addEventListener(\"keydown\", function(e) {\n            switch (e.keyCode) {\n              case \"P\".charCodeAt(0):\n                testbed.togglePause();\n                break;\n            }\n        }, false);\n        var downKeys = {};\n        window.addEventListener(\"keydown\", function(e) {\n            var keyCode = e.keyCode;\n            downKeys[keyCode] = true;\n            updateActiveKeys(keyCode, true);\n            testbed.keydown && testbed.keydown(keyCode, String.fromCharCode(keyCode));\n        });\n        window.addEventListener(\"keyup\", function(e) {\n            var keyCode = e.keyCode;\n            downKeys[keyCode] = false;\n            updateActiveKeys(keyCode, false);\n            testbed.keyup && testbed.keyup(keyCode, String.fromCharCode(keyCode));\n        });\n        var activeKeys = testbed.activeKeys;\n        function updateActiveKeys(keyCode, down) {\n            var char = String.fromCharCode(keyCode);\n            if (/\\w/.test(char)) {\n                activeKeys[char] = down;\n            }\n            activeKeys.right = downKeys[39] || activeKeys[\"D\"];\n            activeKeys.left = downKeys[37] || activeKeys[\"A\"];\n            activeKeys.up = downKeys[38] || activeKeys[\"W\"];\n            activeKeys.down = downKeys[40] || activeKeys[\"S\"];\n            activeKeys.fire = downKeys[32] || downKeys[13];\n        }\n    });\n};\n\nViewer._super = Stage;\n\nViewer.prototype = Stage._create(Viewer._super.prototype);\n\nfunction Viewer(world, opts) {\n    Viewer._super.call(this);\n    this.label(\"Planck\");\n    opts = opts || {};\n    var options = this._options = {};\n    this._options.speed = opts.speed || 1;\n    this._options.hz = opts.hz || 60;\n    if (Math.abs(this._options.hz) < 1) {\n        this._options.hz = 1 / this._options.hz;\n    }\n    this._options.ratio = opts.ratio || 16;\n    this._options.lineWidth = 2 / this._options.ratio;\n    this._world = world;\n    var timeStep = 1 / this._options.hz;\n    var elapsedTime = 0;\n    this.tick(function(dt) {\n        dt = dt * .001 * options.speed;\n        elapsedTime += dt;\n        while (elapsedTime > timeStep) {\n            world.step(timeStep);\n            elapsedTime -= timeStep;\n        }\n        this.renderWorld();\n        return true;\n    }, true);\n    world.on(\"remove-fixture\", function(obj) {\n        obj.ui && obj.ui.remove();\n    });\n    world.on(\"remove-joint\", function(obj) {\n        obj.ui && obj.ui.remove();\n    });\n}\n\nViewer.prototype.renderWorld = function(world) {\n    var world = this._world;\n    var viewer = this;\n    for (var b = world.getBodyList(); b; b = b.getNext()) {\n        for (var f = b.getFixtureList(); f; f = f.getNext()) {\n            if (!f.ui) {\n                if (f.render && f.render.stroke) {\n                    this._options.strokeStyle = f.render.stroke;\n                } else if (b.render && b.render.stroke) {\n                    this._options.strokeStyle = b.render.stroke;\n                } else if (b.isDynamic()) {\n                    this._options.strokeStyle = \"rgba(255,255,255,0.9)\";\n                } else if (b.isKinematic()) {\n                    this._options.strokeStyle = \"rgba(255,255,255,0.7)\";\n                } else if (b.isStatic()) {\n                    this._options.strokeStyle = \"rgba(255,255,255,0.5)\";\n                }\n                if (f.render && f.render.fill) {\n                    this._options.fillStyle = f.render.fill;\n                } else if (b.render && b.render.fill) {\n                    this._options.fillStyle = b.render.fill;\n                } else {\n                    this._options.fillStyle = \"\";\n                }\n                var type = f.getType();\n                var shape = f.getShape();\n                if (type == \"circle\") {\n                    f.ui = viewer.drawCircle(shape, this._options);\n                }\n                if (type == \"edge\") {\n                    f.ui = viewer.drawEdge(shape, this._options);\n                }\n                if (type == \"polygon\") {\n                    f.ui = viewer.drawPolygon(shape, this._options);\n                }\n                if (type == \"chain\") {\n                    f.ui = viewer.drawChain(shape, this._options);\n                }\n                if (f.ui) {\n                    f.ui.appendTo(viewer);\n                }\n            }\n            if (f.ui) {\n                var p = b.getPosition(), r = b.getAngle();\n                if (f.ui.__lastX !== p.x || f.ui.__lastY !== p.y || f.ui.__lastR !== r) {\n                    f.ui.__lastX = p.x;\n                    f.ui.__lastY = p.y;\n                    f.ui.__lastR = r;\n                    f.ui.offset(p.x, p.y);\n                    f.ui.rotate(r);\n                }\n            }\n        }\n    }\n    for (var j = world.getJointList(); j; j = j.getNext()) {\n        var type = j.getType();\n        var a = j.getAnchorA();\n        var b = j.getAnchorB();\n        if (!j.ui) {\n            this._options.strokeStyle = \"rgba(255,255,255,0.2)\";\n            j.ui = viewer.drawJoint(j, this._options);\n            j.ui.pin(\"handle\", .5);\n            if (j.ui) {\n                j.ui.appendTo(viewer);\n            }\n        }\n        if (j.ui) {\n            var cx = (a.x + b.x) * .5;\n            var cy = (a.y + b.y) * .5;\n            var dx = a.x - b.x;\n            var dy = a.y - b.y;\n            var d = Math.sqrt(dx * dx + dy * dy);\n            j.ui.width(d);\n            j.ui.rotate(Math.atan2(dy, dx));\n            j.ui.offset(cx, cy);\n        }\n    }\n};\n\nViewer.prototype.drawJoint = function(joint, options) {\n    var lw = options.lineWidth;\n    var ratio = options.ratio;\n    var length = 10;\n    var texture = Stage.canvas(function(ctx) {\n        this.size(length + 2 * lw, 2 * lw, ratio);\n        ctx.scale(ratio, ratio);\n        ctx.beginPath();\n        ctx.moveTo(lw, lw);\n        ctx.lineTo(lw + length, lw);\n        ctx.lineCap = \"round\";\n        ctx.lineWidth = options.lineWidth;\n        ctx.strokeStyle = options.strokeStyle;\n        ctx.stroke();\n    });\n    var image = Stage.image(texture).stretch();\n    return image;\n};\n\nViewer.prototype.drawCircle = function(shape, options) {\n    var lw = options.lineWidth;\n    var ratio = options.ratio;\n    var r = shape.m_radius;\n    var cx = r + lw;\n    var cy = r + lw;\n    var w = r * 2 + lw * 2;\n    var h = r * 2 + lw * 2;\n    var texture = Stage.canvas(function(ctx) {\n        this.size(w, h, ratio);\n        ctx.scale(ratio, ratio);\n        ctx.arc(cx, cy, r, 0, 2 * Math.PI);\n        if (options.fillStyle) {\n            ctx.fillStyle = options.fillStyle;\n            ctx.fill();\n        }\n        ctx.lineTo(cx, cy);\n        ctx.lineWidth = options.lineWidth;\n        ctx.strokeStyle = options.strokeStyle;\n        ctx.stroke();\n    });\n    var image = Stage.image(texture).offset(shape.m_p.x - cx, shape.m_p.y - cy);\n    var node = Stage.create().append(image);\n    return node;\n};\n\nViewer.prototype.drawEdge = function(edge, options) {\n    var lw = options.lineWidth;\n    var ratio = options.ratio;\n    var v1 = edge.m_vertex1;\n    var v2 = edge.m_vertex2;\n    var dx = v2.x - v1.x;\n    var dy = v2.y - v1.y;\n    var length = Math.sqrt(dx * dx + dy * dy);\n    var texture = Stage.canvas(function(ctx) {\n        this.size(length + 2 * lw, 2 * lw, ratio);\n        ctx.scale(ratio, ratio);\n        ctx.beginPath();\n        ctx.moveTo(lw, lw);\n        ctx.lineTo(lw + length, lw);\n        ctx.lineCap = \"round\";\n        ctx.lineWidth = options.lineWidth;\n        ctx.strokeStyle = options.strokeStyle;\n        ctx.stroke();\n    });\n    var minX = Math.min(v1.x, v2.x);\n    var minY = Math.min(v1.y, v2.y);\n    var image = Stage.image(texture);\n    image.rotate(Math.atan2(dy, dx));\n    image.offset(minX - lw, minY - lw);\n    var node = Stage.create().append(image);\n    return node;\n};\n\nViewer.prototype.drawPolygon = function(shape, options) {\n    var lw = options.lineWidth;\n    var ratio = options.ratio;\n    var vertices = shape.m_vertices;\n    if (!vertices.length) {\n        return;\n    }\n    var minX = Infinity, minY = Infinity;\n    var maxX = -Infinity, maxY = -Infinity;\n    for (var i = 0; i < vertices.length; ++i) {\n        var v = vertices[i];\n        minX = Math.min(minX, v.x);\n        maxX = Math.max(maxX, v.x);\n        minY = Math.min(minY, v.y);\n        maxY = Math.max(maxY, v.y);\n    }\n    var width = maxX - minX;\n    var height = maxY - minY;\n    var texture = Stage.canvas(function(ctx) {\n        this.size(width + 2 * lw, height + 2 * lw, ratio);\n        ctx.scale(ratio, ratio);\n        ctx.beginPath();\n        for (var i = 0; i < vertices.length; ++i) {\n            var v = vertices[i];\n            var x = v.x - minX + lw;\n            var y = v.y - minY + lw;\n            if (i == 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);\n        }\n        if (vertices.length > 2) {\n            ctx.closePath();\n        }\n        if (options.fillStyle) {\n            ctx.fillStyle = options.fillStyle;\n            ctx.fill();\n            ctx.closePath();\n        }\n        ctx.lineCap = \"round\";\n        ctx.lineWidth = options.lineWidth;\n        ctx.strokeStyle = options.strokeStyle;\n        ctx.stroke();\n    });\n    var image = Stage.image(texture);\n    image.offset(minX - lw, minY - lw);\n    var node = Stage.create().append(image);\n    return node;\n};\n\nViewer.prototype.drawChain = function(shape, options) {\n    var lw = options.lineWidth;\n    var ratio = options.ratio;\n    var vertices = shape.m_vertices;\n    if (!vertices.length) {\n        return;\n    }\n    var minX = Infinity, minY = Infinity;\n    var maxX = -Infinity, maxY = -Infinity;\n    for (var i = 0; i < vertices.length; ++i) {\n        var v = vertices[i];\n        minX = Math.min(minX, v.x);\n        maxX = Math.max(maxX, v.x);\n        minY = Math.min(minY, v.y);\n        maxY = Math.max(maxY, v.y);\n    }\n    var width = maxX - minX;\n    var height = maxY - minY;\n    var texture = Stage.canvas(function(ctx) {\n        this.size(width + 2 * lw, height + 2 * lw, ratio);\n        ctx.scale(ratio, ratio);\n        ctx.beginPath();\n        for (var i = 0; i < vertices.length; ++i) {\n            var v = vertices[i];\n            var x = v.x - minX + lw;\n            var y = v.y - minY + lw;\n            if (i == 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);\n        }\n        if (vertices.length > 2) {}\n        if (options.fillStyle) {\n            ctx.fillStyle = options.fillStyle;\n            ctx.fill();\n            ctx.closePath();\n        }\n        ctx.lineCap = \"round\";\n        ctx.lineWidth = options.lineWidth;\n        ctx.strokeStyle = options.strokeStyle;\n        ctx.stroke();\n    });\n    var image = Stage.image(texture);\n    image.offset(minX - lw, minY - lw);\n    var node = Stage.create().append(image);\n    return node;\n};\n},{\"../lib/\":27,\"stage-js/platform/web\":82}],2:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Body;\n\nvar common = require(\"./util/common\");\n\nvar options = require(\"./util/options\");\n\nvar Vec2 = require(\"./common/Vec2\");\n\nvar Rot = require(\"./common/Rot\");\n\nvar Math = require(\"./common/Math\");\n\nvar Sweep = require(\"./common/Sweep\");\n\nvar Transform = require(\"./common/Transform\");\n\nvar Velocity = require(\"./common/Velocity\");\n\nvar Position = require(\"./common/Position\");\n\nvar Fixture = require(\"./Fixture\");\n\nvar Shape = require(\"./Shape\");\n\nvar World = require(\"./World\");\n\nvar staticBody = Body.STATIC = \"static\";\n\nvar kinematicBody = Body.KINEMATIC = \"kinematic\";\n\nvar dynamicBody = Body.DYNAMIC = \"dynamic\";\n\nvar BodyDef = {\n    type: staticBody,\n    position: Vec2.zero(),\n    angle: 0,\n    linearVelocity: Vec2.zero(),\n    angularVelocity: 0,\n    linearDamping: 0,\n    angularDamping: 0,\n    fixedRotation: false,\n    bullet: false,\n    gravityScale: 1,\n    allowSleep: true,\n    awake: true,\n    active: true,\n    userData: null\n};\n\nfunction Body(world, def) {\n    def = options(def, BodyDef);\n    ASSERT && common.assert(Vec2.isValid(def.position));\n    ASSERT && common.assert(Vec2.isValid(def.linearVelocity));\n    ASSERT && common.assert(Math.isFinite(def.angle));\n    ASSERT && common.assert(Math.isFinite(def.angularVelocity));\n    ASSERT && common.assert(Math.isFinite(def.angularDamping) && def.angularDamping >= 0);\n    ASSERT && common.assert(Math.isFinite(def.linearDamping) && def.linearDamping >= 0);\n    this.m_world = world;\n    this.m_awakeFlag = def.awake;\n    this.m_autoSleepFlag = def.allowSleep;\n    this.m_bulletFlag = def.bullet;\n    this.m_fixedRotationFlag = def.fixedRotation;\n    this.m_activeFlag = def.active;\n    this.m_islandFlag = false;\n    this.m_toiFlag = false;\n    this.m_userData = def.userData;\n    this.m_type = def.type;\n    if (this.m_type == dynamicBody) {\n        this.m_mass = 1;\n        this.m_invMass = 1;\n    } else {\n        this.m_mass = 0;\n        this.m_invMass = 0;\n    }\n    this.m_I = 0;\n    this.m_invI = 0;\n    this.m_xf = Transform.identity();\n    this.m_xf.p = Vec2.clone(def.position);\n    this.m_xf.q.setAngle(def.angle);\n    this.m_sweep = new Sweep();\n    this.m_sweep.setTransform(this.m_xf);\n    this.c_velocity = new Velocity();\n    this.c_position = new Position();\n    this.m_force = Vec2.zero();\n    this.m_torque = 0;\n    this.m_linearVelocity = Vec2.clone(def.linearVelocity);\n    this.m_angularVelocity = def.angularVelocity;\n    this.m_linearDamping = def.linearDamping;\n    this.m_angularDamping = def.angularDamping;\n    this.m_gravityScale = def.gravityScale;\n    this.m_sleepTime = 0;\n    this.m_jointList = null;\n    this.m_contactList = null;\n    this.m_fixtureList = null;\n    this.m_prev = null;\n    this.m_next = null;\n}\n\nBody.prototype.isWorldLocked = function() {\n    return this.m_world && this.m_world.isLocked() ? true : false;\n};\n\nBody.prototype.getWorld = function() {\n    return this.m_world;\n};\n\nBody.prototype.getNext = function() {\n    return this.m_next;\n};\n\nBody.prototype.setUserData = function(data) {\n    this.m_userData = data;\n};\n\nBody.prototype.getUserData = function() {\n    return this.m_userData;\n};\n\nBody.prototype.getFixtureList = function() {\n    return this.m_fixtureList;\n};\n\nBody.prototype.getJointList = function() {\n    return this.m_jointList;\n};\n\nBody.prototype.getContactList = function() {\n    return this.m_contactList;\n};\n\nBody.prototype.isStatic = function() {\n    return this.m_type == staticBody;\n};\n\nBody.prototype.isDynamic = function() {\n    return this.m_type == dynamicBody;\n};\n\nBody.prototype.isKinematic = function() {\n    return this.m_type == kinematicBody;\n};\n\nBody.prototype.setStatic = function() {\n    this.setType(staticBody);\n    return this;\n};\n\nBody.prototype.setDynamic = function() {\n    this.setType(dynamicBody);\n    return this;\n};\n\nBody.prototype.setKinematic = function() {\n    this.setType(kinematicBody);\n    return this;\n};\n\nBody.prototype.getType = function() {\n    return this.m_type;\n};\n\nBody.prototype.setType = function(type) {\n    ASSERT && common.assert(type === staticBody || type === kinematicBody || type === dynamicBody);\n    ASSERT && common.assert(this.isWorldLocked() == false);\n    if (this.isWorldLocked() == true) {\n        return;\n    }\n    if (this.m_type == type) {\n        return;\n    }\n    this.m_type = type;\n    this.resetMassData();\n    if (this.m_type == staticBody) {\n        this.m_linearVelocity.setZero();\n        this.m_angularVelocity = 0;\n        this.m_sweep.forward();\n        this.synchronizeFixtures();\n    }\n    this.setAwake(true);\n    this.m_force.setZero();\n    this.m_torque = 0;\n    var ce = this.m_contactList;\n    while (ce) {\n        var ce0 = ce;\n        ce = ce.next;\n        this.m_world.destroyContact(ce0.contact);\n    }\n    this.m_contactList = null;\n    var broadPhase = this.m_world.m_broadPhase;\n    for (var f = this.m_fixtureList; f; f = f.m_next) {\n        var proxyCount = f.m_proxyCount;\n        for (var i = 0; i < proxyCount; ++i) {\n            broadPhase.touchProxy(f.m_proxies[i].proxyId);\n        }\n    }\n};\n\nBody.prototype.isBullet = function() {\n    return this.m_bulletFlag;\n};\n\nBody.prototype.setBullet = function(flag) {\n    this.m_bulletFlag = !!flag;\n};\n\nBody.prototype.isSleepingAllowed = function() {\n    return this.m_autoSleepFlag;\n};\n\nBody.prototype.setSleepingAllowed = function(flag) {\n    this.m_autoSleepFlag = !!flag;\n    if (this.m_autoSleepFlag == false) {\n        this.setAwake(true);\n    }\n};\n\nBody.prototype.isAwake = function() {\n    return this.m_awakeFlag;\n};\n\nBody.prototype.setAwake = function(flag) {\n    if (flag) {\n        if (this.m_awakeFlag == false) {\n            this.m_awakeFlag = true;\n            this.m_sleepTime = 0;\n        }\n    } else {\n        this.m_awakeFlag = false;\n        this.m_sleepTime = 0;\n        this.m_linearVelocity.setZero();\n        this.m_angularVelocity = 0;\n        this.m_force.setZero();\n        this.m_torque = 0;\n    }\n};\n\nBody.prototype.isActive = function() {\n    return this.m_activeFlag;\n};\n\nBody.prototype.setActive = function(flag) {\n    ASSERT && common.assert(this.isWorldLocked() == false);\n    if (flag == this.m_activeFlag) {\n        return;\n    }\n    this.m_activeFlag = !!flag;\n    if (this.m_activeFlag) {\n        var broadPhase = this.m_world.m_broadPhase;\n        for (var f = this.m_fixtureList; f; f = f.m_next) {\n            f.createProxies(broadPhase, this.m_xf);\n        }\n    } else {\n        var broadPhase = this.m_world.m_broadPhase;\n        for (var f = this.m_fixtureList; f; f = f.m_next) {\n            f.destroyProxies(broadPhase);\n        }\n        var ce = this.m_contactList;\n        while (ce) {\n            var ce0 = ce;\n            ce = ce.next;\n            this.m_world.destroyContact(ce0.contact);\n        }\n        this.m_contactList = null;\n    }\n};\n\nBody.prototype.isFixedRotation = function() {\n    return this.m_fixedRotationFlag;\n};\n\nBody.prototype.setFixedRotation = function(flag) {\n    if (this.m_fixedRotationFlag == flag) {\n        return;\n    }\n    this.m_fixedRotationFlag = !!flag;\n    this.m_angularVelocity = 0;\n    this.resetMassData();\n};\n\nBody.prototype.getTransform = function() {\n    return this.m_xf;\n};\n\nBody.prototype.setTransform = function(position, angle) {\n    ASSERT && common.assert(this.isWorldLocked() == false);\n    if (this.isWorldLocked() == true) {\n        return;\n    }\n    this.m_xf.set(position, angle);\n    this.m_sweep.setTransform(this.m_xf);\n    var broadPhase = this.m_world.m_broadPhase;\n    for (var f = this.m_fixtureList; f; f = f.m_next) {\n        f.synchronize(broadPhase, this.m_xf, this.m_xf);\n    }\n};\n\nBody.prototype.synchronizeTransform = function() {\n    this.m_sweep.getTransform(this.m_xf, 1);\n};\n\nBody.prototype.synchronizeFixtures = function() {\n    var xf = Transform.identity();\n    this.m_sweep.getTransform(xf, 0);\n    var broadPhase = this.m_world.m_broadPhase;\n    for (var f = this.m_fixtureList; f; f = f.m_next) {\n        f.synchronize(broadPhase, xf, this.m_xf);\n    }\n};\n\nBody.prototype.advance = function(alpha) {\n    this.m_sweep.advance(alpha);\n    this.m_sweep.c.set(this.m_sweep.c0);\n    this.m_sweep.a = this.m_sweep.a0;\n    this.m_sweep.getTransform(this.m_xf, 1);\n};\n\nBody.prototype.getPosition = function() {\n    return this.m_xf.p;\n};\n\nBody.prototype.setPosition = function(p) {\n    this.setTransform(p, this.m_sweep.a);\n};\n\nBody.prototype.getAngle = function() {\n    return this.m_sweep.a;\n};\n\nBody.prototype.setAngle = function(angle) {\n    this.setTransform(this.m_xf.p, angle);\n};\n\nBody.prototype.getWorldCenter = function() {\n    return this.m_sweep.c;\n};\n\nBody.prototype.getLocalCenter = function() {\n    return this.m_sweep.localCenter;\n};\n\nBody.prototype.getLinearVelocity = function() {\n    return this.m_linearVelocity;\n};\n\nBody.prototype.getLinearVelocityFromWorldPoint = function(worldPoint) {\n    var localCenter = Vec2.sub(worldPoint, this.m_sweep.c);\n    return Vec2.add(this.m_linearVelocity, Vec2.cross(this.m_angularVelocity, localCenter));\n};\n\nBody.prototype.getLinearVelocityFromLocalPoint = function(localPoint) {\n    return this.getLinearVelocityFromWorldPoint(this.getWorldPoint(localPoint));\n};\n\nBody.prototype.setLinearVelocity = function(v) {\n    if (this.m_type == staticBody) {\n        return;\n    }\n    if (Vec2.dot(v, v) > 0) {\n        this.setAwake(true);\n    }\n    this.m_linearVelocity.set(v);\n};\n\nBody.prototype.getAngularVelocity = function() {\n    return this.m_angularVelocity;\n};\n\nBody.prototype.setAngularVelocity = function(w) {\n    if (this.m_type == staticBody) {\n        return;\n    }\n    if (w * w > 0) {\n        this.setAwake(true);\n    }\n    this.m_angularVelocity = w;\n};\n\nBody.prototype.getLinearDamping = function() {\n    return this.m_linearDamping;\n};\n\nBody.prototype.setLinearDamping = function(linearDamping) {\n    this.m_linearDamping = linearDamping;\n};\n\nBody.prototype.getAngularDamping = function() {\n    return this.m_angularDamping;\n};\n\nBody.prototype.setAngularDamping = function(angularDamping) {\n    this.m_angularDamping = angularDamping;\n};\n\nBody.prototype.getGravityScale = function() {\n    return this.m_gravityScale;\n};\n\nBody.prototype.setGravityScale = function(scale) {\n    this.m_gravityScale = scale;\n};\n\nBody.prototype.getMass = function() {\n    return this.m_mass;\n};\n\nBody.prototype.getInertia = function() {\n    return this.m_I + this.m_mass * Vec2.dot(this.m_sweep.localCenter, this.m_sweep.localCenter);\n};\n\nfunction MassData() {\n    this.mass = 0;\n    this.center = Vec2.zero();\n    this.I = 0;\n}\n\nBody.prototype.getMassData = function(data) {\n    data.mass = this.m_mass;\n    data.I = this.getInertia();\n    data.center.set(this.m_sweep.localCenter);\n};\n\nBody.prototype.resetMassData = function() {\n    this.m_mass = 0;\n    this.m_invMass = 0;\n    this.m_I = 0;\n    this.m_invI = 0;\n    this.m_sweep.localCenter.setZero();\n    if (this.isStatic() || this.isKinematic()) {\n        this.m_sweep.c0.set(this.m_xf.p);\n        this.m_sweep.c.set(this.m_xf.p);\n        this.m_sweep.a0 = this.m_sweep.a;\n        return;\n    }\n    ASSERT && common.assert(this.isDynamic());\n    var localCenter = Vec2.zero();\n    for (var f = this.m_fixtureList; f; f = f.m_next) {\n        if (f.m_density == 0) {\n            continue;\n        }\n        var massData = new MassData();\n        f.getMassData(massData);\n        this.m_mass += massData.mass;\n        localCenter.wAdd(massData.mass, massData.center);\n        this.m_I += massData.I;\n    }\n    if (this.m_mass > 0) {\n        this.m_invMass = 1 / this.m_mass;\n        localCenter.mul(this.m_invMass);\n    } else {\n        this.m_mass = 1;\n        this.m_invMass = 1;\n    }\n    if (this.m_I > 0 && this.m_fixedRotationFlag == false) {\n        this.m_I -= this.m_mass * Vec2.dot(localCenter, localCenter);\n        ASSERT && common.assert(this.m_I > 0);\n        this.m_invI = 1 / this.m_I;\n    } else {\n        this.m_I = 0;\n        this.m_invI = 0;\n    }\n    var oldCenter = Vec2.clone(this.m_sweep.c);\n    this.m_sweep.setLocalCenter(localCenter, this.m_xf);\n    this.m_linearVelocity.add(Vec2.cross(this.m_angularVelocity, Vec2.sub(this.m_sweep.c, oldCenter)));\n};\n\nBody.prototype.setMassData = function(massData) {\n    ASSERT && common.assert(this.isWorldLocked() == false);\n    if (this.isWorldLocked() == true) {\n        return;\n    }\n    if (this.m_type != dynamicBody) {\n        return;\n    }\n    this.m_invMass = 0;\n    this.m_I = 0;\n    this.m_invI = 0;\n    this.m_mass = massData.mass;\n    if (this.m_mass <= 0) {\n        this.m_mass = 1;\n    }\n    this.m_invMass = 1 / this.m_mass;\n    if (massData.I > 0 && this.m_fixedRotationFlag == false) {\n        this.m_I = massData.I - this.m_mass * Vec2.dot(massData.center, massData.center);\n        ASSERT && common.assert(this.m_I > 0);\n        this.m_invI = 1 / this.m_I;\n    }\n    var oldCenter = Vec2.clone(this.m_sweep.c);\n    this.m_sweep.setLocalCenter(massData.center, this.m_xf);\n    this.m_linearVelocity.add(Vec2.cross(this.m_angularVelocity, Vec2.sub(this.m_sweep.c, oldCenter)));\n};\n\nBody.prototype.applyForce = function(force, point, wake) {\n    if (this.m_type != dynamicBody) {\n        return;\n    }\n    if (wake && this.m_awakeFlag == false) {\n        this.setAwake(true);\n    }\n    if (this.m_awakeFlag) {\n        this.m_force.add(force);\n        this.m_torque += Vec2.cross(Vec2.sub(point, this.m_sweep.c), force);\n    }\n};\n\nBody.prototype.applyForceToCenter = function(force, wake) {\n    if (this.m_type != dynamicBody) {\n        return;\n    }\n    if (wake && this.m_awakeFlag == false) {\n        this.setAwake(true);\n    }\n    if (this.m_awakeFlag) {\n        this.m_force.add(force);\n    }\n};\n\nBody.prototype.applyTorque = function(torque, wake) {\n    if (this.m_type != dynamicBody) {\n        return;\n    }\n    if (wake && this.m_awakeFlag == false) {\n        this.setAwake(true);\n    }\n    if (this.m_awakeFlag) {\n        this.m_torque += torque;\n    }\n};\n\nBody.prototype.applyLinearImpulse = function(impulse, point, wake) {\n    if (this.m_type != dynamicBody) {\n        return;\n    }\n    if (wake && this.m_awakeFlag == false) {\n        this.setAwake(true);\n    }\n    if (this.m_awakeFlag) {\n        this.m_linearVelocity.wAdd(this.m_invMass, impulse);\n        this.m_angularVelocity += this.m_invI * Vec2.cross(Vec2.sub(point, this.m_sweep.c), impulse);\n    }\n};\n\nBody.prototype.applyAngularImpulse = function(impulse, wake) {\n    if (this.m_type != dynamicBody) {\n        return;\n    }\n    if (wake && this.m_awakeFlag == false) {\n        this.setAwake(true);\n    }\n    if (this.m_awakeFlag) {\n        this.m_angularVelocity += this.m_invI * impulse;\n    }\n};\n\nBody.prototype.shouldCollide = function(that) {\n    if (this.m_type != dynamicBody && that.m_type != dynamicBody) {\n        return false;\n    }\n    for (var jn = this.m_jointList; jn; jn = jn.next) {\n        if (jn.other == that) {\n            if (jn.joint.m_collideConnected == false) {\n                return false;\n            }\n        }\n    }\n    return true;\n};\n\nBody.prototype.createFixture = function(shape, fixdef) {\n    ASSERT && common.assert(this.isWorldLocked() == false);\n    if (this.isWorldLocked() == true) {\n        return null;\n    }\n    var fixture = new Fixture(this, shape, fixdef);\n    if (this.m_activeFlag) {\n        var broadPhase = this.m_world.m_broadPhase;\n        fixture.createProxies(broadPhase, this.m_xf);\n    }\n    fixture.m_next = this.m_fixtureList;\n    this.m_fixtureList = fixture;\n    if (fixture.m_density > 0) {\n        this.resetMassData();\n    }\n    this.m_world.m_newFixture = true;\n    return fixture;\n};\n\nBody.prototype.destroyFixture = function(fixture) {\n    ASSERT && common.assert(this.isWorldLocked() == false);\n    if (this.isWorldLocked() == true) {\n        return;\n    }\n    ASSERT && common.assert(fixture.m_body == this);\n    var node = this.m_fixtureList;\n    var found = false;\n    while (node != null) {\n        if (node == fixture) {\n            node = fixture.m_next;\n            found = true;\n            break;\n        }\n        node = node.m_next;\n    }\n    ASSERT && common.assert(found);\n    var edge = this.m_contactList;\n    while (edge) {\n        var c = edge.contact;\n        edge = edge.next;\n        var fixtureA = c.getFixtureA();\n        var fixtureB = c.getFixtureB();\n        if (fixture == fixtureA || fixture == fixtureB) {\n            this.m_world.destroyContact(c);\n        }\n    }\n    if (this.m_activeFlag) {\n        var broadPhase = this.m_world.m_broadPhase;\n        fixture.destroyProxies(broadPhase);\n    }\n    fixture.m_body = null;\n    fixture.m_next = null;\n    this.m_world.publish(\"remove-fixture\", fixture);\n    this.resetMassData();\n};\n\nBody.prototype.getWorldPoint = function(localPoint) {\n    return Transform.mul(this.m_xf, localPoint);\n};\n\nBody.prototype.getWorldVector = function(localVector) {\n    return Rot.mul(this.m_xf.q, localVector);\n};\n\nBody.prototype.getLocalPoint = function(worldPoint) {\n    return Transform.mulT(this.m_xf, worldPoint);\n};\n\nBody.prototype.getLocalVector = function(worldVector) {\n    return Rot.mulT(this.m_xf.q, worldVector);\n};\n\n\n},{\"./Fixture\":4,\"./Shape\":8,\"./World\":10,\"./common/Math\":18,\"./common/Position\":19,\"./common/Rot\":20,\"./common/Sweep\":21,\"./common/Transform\":22,\"./common/Vec2\":23,\"./common/Velocity\":25,\"./util/common\":51,\"./util/options\":53}],3:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nvar DEBUG_SOLVER = false;\n\nvar common = require(\"./util/common\");\n\nvar Math = require(\"./common/Math\");\n\nvar Vec2 = require(\"./common/Vec2\");\n\nvar Transform = require(\"./common/Transform\");\n\nvar Mat22 = require(\"./common/Mat22\");\n\nvar Rot = require(\"./common/Rot\");\n\nvar Settings = require(\"./Settings\");\n\nvar Manifold = require(\"./Manifold\");\n\nvar Distance = require(\"./collision/Distance\");\n\nmodule.exports = Contact;\n\nfunction ContactEdge(contact) {\n    this.contact = contact;\n    this.prev;\n    this.next;\n    this.other;\n}\n\nfunction Contact(fA, indexA, fB, indexB, evaluateFcn) {\n    this.m_nodeA = new ContactEdge(this);\n    this.m_nodeB = new ContactEdge(this);\n    this.m_fixtureA = fA;\n    this.m_fixtureB = fB;\n    this.m_indexA = indexA;\n    this.m_indexB = indexB;\n    this.m_evaluateFcn = evaluateFcn;\n    this.m_manifold = new Manifold();\n    this.m_prev = null;\n    this.m_next = null;\n    this.m_toi = 1;\n    this.m_toiCount = 0;\n    this.m_toiFlag = false;\n    this.m_friction = mixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);\n    this.m_restitution = mixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);\n    this.m_tangentSpeed = 0;\n    this.m_enabledFlag = true;\n    this.m_islandFlag = false;\n    this.m_touchingFlag = false;\n    this.m_filterFlag = false;\n    this.m_bulletHitFlag = false;\n    this.v_points = [];\n    this.v_normal = Vec2.zero();\n    this.v_normalMass = new Mat22();\n    this.v_K = new Mat22();\n    this.v_pointCount;\n    this.v_tangentSpeed;\n    this.v_friction;\n    this.v_restitution;\n    this.v_invMassA;\n    this.v_invMassB;\n    this.v_invIA;\n    this.v_invIB;\n    this.p_localPoints = [];\n    this.p_localNormal = Vec2.zero();\n    this.p_localPoint = Vec2.zero();\n    this.p_localCenterA = Vec2.zero();\n    this.p_localCenterB = Vec2.zero();\n    this.p_type;\n    this.p_radiusA;\n    this.p_radiusB;\n    this.p_pointCount;\n    this.p_invMassA;\n    this.p_invMassB;\n    this.p_invIA;\n    this.p_invIB;\n}\n\nContact.prototype.initConstraint = function(step) {\n    var fixtureA = this.m_fixtureA;\n    var fixtureB = this.m_fixtureB;\n    var shapeA = fixtureA.getShape();\n    var shapeB = fixtureB.getShape();\n    var bodyA = fixtureA.getBody();\n    var bodyB = fixtureB.getBody();\n    var manifold = this.getManifold();\n    var pointCount = manifold.pointCount;\n    ASSERT && common.assert(pointCount > 0);\n    this.v_invMassA = bodyA.m_invMass;\n    this.v_invMassB = bodyB.m_invMass;\n    this.v_invIA = bodyA.m_invI;\n    this.v_invIB = bodyB.m_invI;\n    this.v_friction = this.m_friction;\n    this.v_restitution = this.m_restitution;\n    this.v_tangentSpeed = this.m_tangentSpeed;\n    this.v_pointCount = pointCount;\n    DEBUG && common.debug(\"pc\", this.v_pointCount, pointCount);\n    this.v_K.setZero();\n    this.v_normalMass.setZero();\n    this.p_invMassA = bodyA.m_invMass;\n    this.p_invMassB = bodyB.m_invMass;\n    this.p_invIA = bodyA.m_invI;\n    this.p_invIB = bodyB.m_invI;\n    this.p_localCenterA = Vec2.clone(bodyA.m_sweep.localCenter);\n    this.p_localCenterB = Vec2.clone(bodyB.m_sweep.localCenter);\n    this.p_radiusA = shapeA.m_radius;\n    this.p_radiusB = shapeB.m_radius;\n    this.p_type = manifold.type;\n    this.p_localNormal = Vec2.clone(manifold.localNormal);\n    this.p_localPoint = Vec2.clone(manifold.localPoint);\n    this.p_pointCount = pointCount;\n    for (var j = 0; j < pointCount; ++j) {\n        var cp = manifold.points[j];\n        var vcp = this.v_points[j] = new VelocityConstraintPoint();\n        if (step.warmStarting) {\n            vcp.normalImpulse = step.dtRatio * cp.normalImpulse;\n            vcp.tangentImpulse = step.dtRatio * cp.tangentImpulse;\n        } else {\n            vcp.normalImpulse = 0;\n            vcp.tangentImpulse = 0;\n        }\n        vcp.rA.setZero();\n        vcp.rB.setZero();\n        vcp.normalMass = 0;\n        vcp.tangentMass = 0;\n        vcp.velocityBias = 0;\n        this.p_localPoints[j] = Vec2.clone(cp.localPoint);\n    }\n};\n\nContact.prototype.getManifold = function() {\n    return this.m_manifold;\n};\n\nContact.prototype.getWorldManifold = function(worldManifold) {\n    var bodyA = this.m_fixtureA.getBody();\n    var bodyB = this.m_fixtureB.getBody();\n    var shapeA = this.m_fixtureA.getShape();\n    var shapeB = this.m_fixtureB.getShape();\n    return this.m_manifold.getWorldManifold(worldManifold, bodyA.getTransform(), shapeA.m_radius, bodyB.getTransform(), shapeB.m_radius);\n};\n\nContact.prototype.setEnabled = function(flag) {\n    this.m_enabledFlag = !!flag;\n};\n\nContact.prototype.isEnabled = function() {\n    return this.m_enabledFlag;\n};\n\nContact.prototype.isTouching = function() {\n    return this.m_touchingFlag;\n};\n\nContact.prototype.getNext = function() {\n    return this.m_next;\n};\n\nContact.prototype.getFixtureA = function() {\n    return this.m_fixtureA;\n};\n\nContact.prototype.getFixtureB = function() {\n    return this.m_fixtureB;\n};\n\nContact.prototype.getChildIndexA = function() {\n    return this.m_indexA;\n};\n\nContact.prototype.getChildIndexB = function() {\n    return this.m_indexB;\n};\n\nContact.prototype.flagForFiltering = function() {\n    this.m_filterFlag = true;\n};\n\nContact.prototype.setFriction = function(friction) {\n    this.m_friction = friction;\n};\n\nContact.prototype.getFriction = function() {\n    return this.m_friction;\n};\n\nContact.prototype.resetFriction = function() {\n    this.m_friction = mixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);\n};\n\nContact.prototype.setRestitution = function(restitution) {\n    this.m_restitution = restitution;\n};\n\nContact.prototype.getRestitution = function() {\n    return this.m_restitution;\n};\n\nContact.prototype.resetRestitution = function() {\n    this.m_restitution = mixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);\n};\n\nContact.prototype.setTangentSpeed = function(speed) {\n    this.m_tangentSpeed = speed;\n};\n\nContact.prototype.getTangentSpeed = function() {\n    return this.m_tangentSpeed;\n};\n\nContact.prototype.evaluate = function(manifold, xfA, xfB) {\n    this.m_evaluateFcn(manifold, xfA, this.m_fixtureA, this.m_indexA, xfB, this.m_fixtureB, this.m_indexB);\n};\n\nContact.prototype.update = function(listener) {\n    this.m_enabledFlag = true;\n    var touching = false;\n    var wasTouching = this.m_touchingFlag;\n    var sensorA = this.m_fixtureA.isSensor();\n    var sensorB = this.m_fixtureB.isSensor();\n    var sensor = sensorA || sensorB;\n    var bodyA = this.m_fixtureA.getBody();\n    var bodyB = this.m_fixtureB.getBody();\n    var xfA = bodyA.getTransform();\n    var xfB = bodyB.getTransform();\n    if (sensor) {\n        var shapeA = this.m_fixtureA.getShape();\n        var shapeB = this.m_fixtureB.getShape();\n        touching = Distance.testOverlap(shapeA, this.m_indexA, shapeB, this.m_indexB, xfA, xfB);\n        this.m_manifold.pointCount = 0;\n    } else {\n        var oldManifold = this.m_manifold;\n        this.m_manifold = new Manifold();\n        this.evaluate(this.m_manifold, xfA, xfB);\n        touching = this.m_manifold.pointCount > 0;\n        for (var i = 0; i < this.m_manifold.pointCount; ++i) {\n            var nmp = this.m_manifold.points[i];\n            nmp.normalImpulse = 0;\n            nmp.tangentImpulse = 0;\n            for (var j = 0; j < oldManifold.pointCount; ++j) {\n                var omp = oldManifold.points[j];\n                if (omp.id.key == nmp.id.key) {\n                    nmp.normalImpulse = omp.normalImpulse;\n                    nmp.tangentImpulse = omp.tangentImpulse;\n                    break;\n                }\n            }\n        }\n        if (touching != wasTouching) {\n            bodyA.setAwake(true);\n            bodyB.setAwake(true);\n        }\n    }\n    this.m_touchingFlag = touching;\n    if (wasTouching == false && touching == true && listener) {\n        listener.beginContact(this);\n    }\n    if (wasTouching == true && touching == false && listener) {\n        listener.endContact(this);\n    }\n    if (sensor == false && touching && listener) {\n        listener.preSolve(this, oldManifold);\n    }\n};\n\nContact.prototype.solvePositionConstraint = function(step) {\n    return this._solvePositionConstraint(step, false);\n};\n\nContact.prototype.solvePositionConstraintTOI = function(step, toiA, toiB) {\n    return this._solvePositionConstraint(step, true, toiA, toiB);\n};\n\nContact.prototype._solvePositionConstraint = function(step, toi, toiA, toiB) {\n    var fixtureA = this.m_fixtureA;\n    var fixtureB = this.m_fixtureB;\n    var bodyA = fixtureA.getBody();\n    var bodyB = fixtureB.getBody();\n    var velocityA = bodyA.c_velocity;\n    var velocityB = bodyB.c_velocity;\n    var positionA = bodyA.c_position;\n    var positionB = bodyB.c_position;\n    var localCenterA = Vec2.clone(this.p_localCenterA);\n    var localCenterB = Vec2.clone(this.p_localCenterB);\n    var mA = 0;\n    var iA = 0;\n    if (!toi || (bodyA == toiA || bodyA == toiB)) {\n        mA = this.p_invMassA;\n        iA = this.p_invIA;\n    }\n    var mB = 0;\n    var iB = 0;\n    if (!toi || (bodyB == toiA || bodyB == toiB)) {\n        mB = this.p_invMassB;\n        iB = this.p_invIB;\n    }\n    var cA = Vec2.clone(positionA.c);\n    var aA = positionA.a;\n    var cB = Vec2.clone(positionB.c);\n    var aB = positionB.a;\n    var minSeparation = 0;\n    for (var j = 0; j < this.p_pointCount; ++j) {\n        var xfA = Transform.identity();\n        var xfB = Transform.identity();\n        xfA.q.set(aA);\n        xfB.q.set(aB);\n        xfA.p = Vec2.sub(cA, Rot.mul(xfA.q, localCenterA));\n        xfB.p = Vec2.sub(cB, Rot.mul(xfB.q, localCenterB));\n        var normal, point, separation;\n        switch (this.p_type) {\n          case Manifold.e_circles:\n            var pointA = Transform.mul(xfA, this.p_localPoint);\n            var pointB = Transform.mul(xfB, this.p_localPoints[0]);\n            normal = Vec2.sub(pointB, pointA);\n            normal.normalize();\n            point = Vec2.wAdd(.5, pointA, .5, pointB);\n            separation = Vec2.dot(Vec2.sub(pointB, pointA), normal) - this.p_radiusA - this.p_radiusB;\n            break;\n\n          case Manifold.e_faceA:\n            normal = Rot.mul(xfA.q, this.p_localNormal);\n            var planePoint = Transform.mul(xfA, this.p_localPoint);\n            var clipPoint = Transform.mul(xfB, this.p_localPoints[j]);\n            separation = Vec2.dot(Vec2.sub(clipPoint, planePoint), normal) - this.p_radiusA - this.p_radiusB;\n            point = clipPoint;\n            break;\n\n          case Manifold.e_faceB:\n            normal = Rot.mul(xfB.q, this.p_localNormal);\n            var planePoint = Transform.mul(xfB, this.p_localPoint);\n            var clipPoint = Transform.mul(xfA, this.p_localPoints[j]);\n            separation = Vec2.dot(Vec2.sub(clipPoint, planePoint), normal) - this.p_radiusA - this.p_radiusB;\n            point = clipPoint;\n            normal.mul(-1);\n            break;\n        }\n        var rA = Vec2.sub(point, cA);\n        var rB = Vec2.sub(point, cB);\n        minSeparation = Math.min(minSeparation, separation);\n        var baumgarte = toi ? Settings.toiBaugarte : Settings.baumgarte;\n        var linearSlop = Settings.linearSlop;\n        var maxLinearCorrection = Settings.maxLinearCorrection;\n        var C = Math.clamp(baumgarte * (separation + linearSlop), -maxLinearCorrection, 0);\n        var rnA = Vec2.cross(rA, normal);\n        var rnB = Vec2.cross(rB, normal);\n        var K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;\n        var impulse = K > 0 ? -C / K : 0;\n        var P = Vec2.mul(impulse, normal);\n        cA.wSub(mA, P);\n        aA -= iA * Vec2.cross(rA, P);\n        cB.wAdd(mB, P);\n        aB += iB * Vec2.cross(rB, P);\n    }\n    positionA.c.set(cA);\n    positionA.a = aA;\n    positionB.c.set(cB);\n    positionB.a = aB;\n    return minSeparation;\n};\n\nfunction VelocityConstraintPoint() {\n    this.rA = Vec2.zero();\n    this.rB = Vec2.zero();\n    this.normalImpulse = 0;\n    this.tangentImpulse = 0;\n    this.normalMass = 0;\n    this.tangentMass = 0;\n    this.velocityBias = 0;\n}\n\nContact.prototype.initVelocityConstraint = function(step) {\n    var fixtureA = this.m_fixtureA;\n    var fixtureB = this.m_fixtureB;\n    var bodyA = fixtureA.getBody();\n    var bodyB = fixtureB.getBody();\n    var velocityA = bodyA.c_velocity;\n    var velocityB = bodyB.c_velocity;\n    var positionA = bodyA.c_position;\n    var positionB = bodyB.c_position;\n    var radiusA = this.p_radiusA;\n    var radiusB = this.p_radiusB;\n    var manifold = this.getManifold();\n    var mA = this.v_invMassA;\n    var mB = this.v_invMassB;\n    var iA = this.v_invIA;\n    var iB = this.v_invIB;\n    var localCenterA = Vec2.clone(this.p_localCenterA);\n    var localCenterB = Vec2.clone(this.p_localCenterB);\n    var cA = Vec2.clone(positionA.c);\n    var aA = positionA.a;\n    var vA = Vec2.clone(velocityA.v);\n    var wA = velocityA.w;\n    var cB = Vec2.clone(positionB.c);\n    var aB = positionB.a;\n    var vB = Vec2.clone(velocityB.v);\n    var wB = velocityB.w;\n    ASSERT && common.assert(manifold.pointCount > 0);\n    var xfA = Transform.identity();\n    var xfB = Transform.identity();\n    xfA.q.set(aA);\n    xfB.q.set(aB);\n    xfA.p.wSet(1, cA, -1, Rot.mul(xfA.q, localCenterA));\n    xfB.p.wSet(1, cB, -1, Rot.mul(xfB.q, localCenterB));\n    var worldManifold = manifold.getWorldManifold(null, xfA, radiusA, xfB, radiusB);\n    this.v_normal.set(worldManifold.normal);\n    for (var j = 0; j < this.v_pointCount; ++j) {\n        var vcp = this.v_points[j];\n        vcp.rA.set(Vec2.sub(worldManifold.points[j], cA));\n        vcp.rB.set(Vec2.sub(worldManifold.points[j], cB));\n        DEBUG && common.debug(\"vcp.rA\", worldManifold.points[j].x, worldManifold.points[j].y, cA.x, cA.y, vcp.rA.x, vcp.rA.y);\n        var rnA = Vec2.cross(vcp.rA, this.v_normal);\n        var rnB = Vec2.cross(vcp.rB, this.v_normal);\n        var kNormal = mA + mB + iA * rnA * rnA + iB * rnB * rnB;\n        vcp.normalMass = kNormal > 0 ? 1 / kNormal : 0;\n        var tangent = Vec2.cross(this.v_normal, 1);\n        var rtA = Vec2.cross(vcp.rA, tangent);\n        var rtB = Vec2.cross(vcp.rB, tangent);\n        var kTangent = mA + mB + iA * rtA * rtA + iB * rtB * rtB;\n        vcp.tangentMass = kTangent > 0 ? 1 / kTangent : 0;\n        vcp.velocityBias = 0;\n        var vRel = Vec2.dot(this.v_normal, vB) + Vec2.dot(this.v_normal, Vec2.cross(wB, vcp.rB)) - Vec2.dot(this.v_normal, vA) - Vec2.dot(this.v_normal, Vec2.cross(wA, vcp.rA));\n        if (vRel < -Settings.velocityThreshold) {\n            vcp.velocityBias = -this.v_restitution * vRel;\n        }\n    }\n    if (this.v_pointCount == 2 && step.blockSolve) {\n        var vcp1 = this.v_points[0];\n        var vcp2 = this.v_points[1];\n        var rn1A = Vec2.cross(vcp1.rA, this.v_normal);\n        var rn1B = Vec2.cross(vcp1.rB, this.v_normal);\n        var rn2A = Vec2.cross(vcp2.rA, this.v_normal);\n        var rn2B = Vec2.cross(vcp2.rB, this.v_normal);\n        var k11 = mA + mB + iA * rn1A * rn1A + iB * rn1B * rn1B;\n        var k22 = mA + mB + iA * rn2A * rn2A + iB * rn2B * rn2B;\n        var k12 = mA + mB + iA * rn1A * rn2A + iB * rn1B * rn2B;\n        var k_maxConditionNumber = 1e3;\n        DEBUG && common.debug(\"k1x2: \", k11, k22, k12, mA, mB, iA, rn1A, rn2A, iB, rn1B, rn2B);\n        if (k11 * k11 < k_maxConditionNumber * (k11 * k22 - k12 * k12)) {\n            this.v_K.ex.set(k11, k12);\n            this.v_K.ey.set(k12, k22);\n            this.v_normalMass.set(this.v_K.getInverse());\n        } else {\n            this.v_pointCount = 1;\n        }\n    }\n    positionA.c.set(cA);\n    positionA.a = aA;\n    velocityA.v.set(vA);\n    velocityA.w = wA;\n    positionB.c.set(cB);\n    positionB.a = aB;\n    velocityB.v.set(vB);\n    velocityB.w = wB;\n};\n\nContact.prototype.warmStartConstraint = function(step) {\n    var fixtureA = this.m_fixtureA;\n    var fixtureB = this.m_fixtureB;\n    var bodyA = fixtureA.getBody();\n    var bodyB = fixtureB.getBody();\n    var velocityA = bodyA.c_velocity;\n    var velocityB = bodyB.c_velocity;\n    var positionA = bodyA.c_position;\n    var positionB = bodyB.c_position;\n    var mA = this.v_invMassA;\n    var iA = this.v_invIA;\n    var mB = this.v_invMassB;\n    var iB = this.v_invIB;\n    var vA = Vec2.clone(velocityA.v);\n    var wA = velocityA.w;\n    var vB = Vec2.clone(velocityB.v);\n    var wB = velocityB.w;\n    var normal = this.v_normal;\n    var tangent = Vec2.cross(normal, 1);\n    for (var j = 0; j < this.v_pointCount; ++j) {\n        var vcp = this.v_points[j];\n        var P = Vec2.wAdd(vcp.normalImpulse, normal, vcp.tangentImpulse, tangent);\n        DEBUG && common.debug(iA, iB, vcp.rA.x, vcp.rA.y, vcp.rB.x, vcp.rB.y, P.x, P.y);\n        wA -= iA * Vec2.cross(vcp.rA, P);\n        vA.wSub(mA, P);\n        wB += iB * Vec2.cross(vcp.rB, P);\n        vB.wAdd(mB, P);\n    }\n    velocityA.v.set(vA);\n    velocityA.w = wA;\n    velocityB.v.set(vB);\n    velocityB.w = wB;\n};\n\nContact.prototype.storeConstraintImpulses = function(step) {\n    var manifold = this.m_manifold;\n    for (var j = 0; j < this.v_pointCount; ++j) {\n        manifold.points[j].normalImpulse = this.v_points[j].normalImpulse;\n        manifold.points[j].tangentImpulse = this.v_points[j].tangentImpulse;\n    }\n};\n\nContact.prototype.solveVelocityConstraint = function(step) {\n    var bodyA = this.m_fixtureA.m_body;\n    var bodyB = this.m_fixtureB.m_body;\n    var velocityA = bodyA.c_velocity;\n    var positionA = bodyA.c_position;\n    var velocityB = bodyB.c_velocity;\n    var positionB = bodyB.c_position;\n    var mA = this.v_invMassA;\n    var iA = this.v_invIA;\n    var mB = this.v_invMassB;\n    var iB = this.v_invIB;\n    var vA = Vec2.clone(velocityA.v);\n    var wA = velocityA.w;\n    var vB = Vec2.clone(velocityB.v);\n    var wB = velocityB.w;\n    var normal = this.v_normal;\n    var tangent = Vec2.cross(normal, 1);\n    var friction = this.v_friction;\n    ASSERT && common.assert(this.v_pointCount == 1 || this.v_pointCount == 2);\n    for (var j = 0; j < this.v_pointCount; ++j) {\n        var vcp = this.v_points[j];\n        var dv = Vec2.zero();\n        dv.wAdd(1, vB, 1, Vec2.cross(wB, vcp.rB));\n        dv.wSub(1, vA, 1, Vec2.cross(wA, vcp.rA));\n        var vt = Vec2.dot(dv, tangent) - this.v_tangentSpeed;\n        var lambda = vcp.tangentMass * -vt;\n        var maxFriction = friction * vcp.normalImpulse;\n        var newImpulse = Math.clamp(vcp.tangentImpulse + lambda, -maxFriction, maxFriction);\n        lambda = newImpulse - vcp.tangentImpulse;\n        vcp.tangentImpulse = newImpulse;\n        var P = Vec2.mul(lambda, tangent);\n        vA.wSub(mA, P);\n        wA -= iA * Vec2.cross(vcp.rA, P);\n        vB.wAdd(mB, P);\n        wB += iB * Vec2.cross(vcp.rB, P);\n    }\n    if (this.v_pointCount == 1 || step.blockSolve == false) {\n        for (var i = 0; i < this.v_pointCount; ++i) {\n            var vcp = this.v_points[i];\n            var dv = Vec2.zero();\n            dv.wAdd(1, vB, 1, Vec2.cross(wB, vcp.rB));\n            dv.wSub(1, vA, 1, Vec2.cross(wA, vcp.rA));\n            var vn = Vec2.dot(dv, normal);\n            var lambda = -vcp.normalMass * (vn - vcp.velocityBias);\n            var newImpulse = Math.max(vcp.normalImpulse + lambda, 0);\n            lambda = newImpulse - vcp.normalImpulse;\n            vcp.normalImpulse = newImpulse;\n            var P = Vec2.mul(lambda, normal);\n            vA.wSub(mA, P);\n            wA -= iA * Vec2.cross(vcp.rA, P);\n            vB.wAdd(mB, P);\n            wB += iB * Vec2.cross(vcp.rB, P);\n        }\n    } else {\n        var vcp1 = this.v_points[0];\n        var vcp2 = this.v_points[1];\n        var a = Vec2.neo(vcp1.normalImpulse, vcp2.normalImpulse);\n        ASSERT && common.assert(a.x >= 0 && a.y >= 0);\n        var dv1 = Vec2.zero().add(vB).add(Vec2.cross(wB, vcp1.rB)).sub(vA).sub(Vec2.cross(wA, vcp1.rA));\n        var dv2 = Vec2.zero().add(vB).add(Vec2.cross(wB, vcp2.rB)).sub(vA).sub(Vec2.cross(wA, vcp2.rA));\n        var vn1 = Vec2.dot(dv1, normal);\n        var vn2 = Vec2.dot(dv2, normal);\n        var b = Vec2.neo(vn1 - vcp1.velocityBias, vn2 - vcp2.velocityBias);\n        b.sub(Mat22.mul(this.v_K, a));\n        var k_errorTol = .001;\n        for (;;) {\n            var x = Vec2.neg(Mat22.mul(this.v_normalMass, b));\n            if (x.x >= 0 && x.y >= 0) {\n                var d = Vec2.sub(x, a);\n                var P1 = Vec2.mul(d.x, normal);\n                var P2 = Vec2.mul(d.y, normal);\n                vA.wSub(mA, P1, mA, P2);\n                wA -= iA * (Vec2.cross(vcp1.rA, P1) + Vec2.cross(vcp2.rA, P2));\n                vB.wAdd(mB, P1, mB, P2);\n                wB += iB * (Vec2.cross(vcp1.rB, P1) + Vec2.cross(vcp2.rB, P2));\n                vcp1.normalImpulse = x.x;\n                vcp2.normalImpulse = x.y;\n                if (DEBUG_SOLVER) {\n                    dv1 = vB + Vec2.cross(wB, vcp1.rB) - vA - Vec2.cross(wA, vcp1.rA);\n                    dv2 = vB + Vec2.cross(wB, vcp2.rB) - vA - Vec2.cross(wA, vcp2.rA);\n                    vn1 = Dot(dv1, normal);\n                    vn2 = Dot(dv2, normal);\n                    ASSERT && common.assert(Abs(vn1 - vcp1.velocityBias) < k_errorTol);\n                    ASSERT && common.assert(Abs(vn2 - vcp2.velocityBias) < k_errorTol);\n                }\n                break;\n            }\n            x.x = -vcp1.normalMass * b.x;\n            x.y = 0;\n            vn1 = 0;\n            vn2 = this.v_K.ex.y * x.x + b.y;\n            if (x.x >= 0 && vn2 >= 0) {\n                var d = Vec2.sub(x, a);\n                var P1 = Vec2.mul(d.x, normal);\n                var P2 = Vec2.mul(d.y, normal);\n                vA.wSub(mA, P1, mA, P2);\n                wA -= iA * (Vec2.cross(vcp1.rA, P1) + Vec2.cross(vcp2.rA, P2));\n                vB.wAdd(mB, P1, mB, P2);\n                wB += iB * (Vec2.cross(vcp1.rB, P1) + Vec2.cross(vcp2.rB, P2));\n                vcp1.normalImpulse = x.x;\n                vcp2.normalImpulse = x.y;\n                if (DEBUG_SOLVER) {\n                    var dv1B = Vec2.add(vB, Vec2.cross(wB, vcp1.rB));\n                    var dv1A = Vec2.add(vA, Vec2.cross(wA, vcp1.rA));\n                    var dv1 = Vec2.sub(dv1B, dv1A);\n                    vn1 = Vec2.dot(dv1, normal);\n                    ASSERT && common.assert(Math.abs(vn1 - vcp1.velocityBias) < k_errorTol);\n                }\n                break;\n            }\n            x.x = 0;\n            x.y = -vcp2.normalMass * b.y;\n            vn1 = this.v_K.ey.x * x.y + b.x;\n            vn2 = 0;\n            if (x.y >= 0 && vn1 >= 0) {\n                var d = Vec2.sub(x, a);\n                var P1 = Vec2.mul(d.x, normal);\n                var P2 = Vec2.mul(d.y, normal);\n                vA.wSub(mA, P1, mA, P2);\n                wA -= iA * (Vec2.cross(vcp1.rA, P1) + Vec2.cross(vcp2.rA, P2));\n                vB.wAdd(mB, P1, mB, P2);\n                wB += iB * (Vec2.cross(vcp1.rB, P1) + Vec2.cross(vcp2.rB, P2));\n                vcp1.normalImpulse = x.x;\n                vcp2.normalImpulse = x.y;\n                if (DEBUG_SOLVER) {\n                    var dv2B = Vec2.add(vB, Vec2.cross(wB, vcp2.rB));\n                    var dv2A = Vec2.add(vA, Vec2.cross(wA, vcp2.rA));\n                    var dv1 = Vec2.sub(dv2B, dv2A);\n                    vn2 = Vec2.dot(dv2, normal);\n                    ASSERT && common.assert(Math.abs(vn2 - vcp2.velocityBias) < k_errorTol);\n                }\n                break;\n            }\n            x.x = 0;\n            x.y = 0;\n            vn1 = b.x;\n            vn2 = b.y;\n            if (vn1 >= 0 && vn2 >= 0) {\n                var d = Vec2.sub(x, a);\n                var P1 = Vec2.mul(d.x, normal);\n                var P2 = Vec2.mul(d.y, normal);\n                vA.wSub(mA, P1, mA, P2);\n                wA -= iA * (Vec2.cross(vcp1.rA, P1) + Vec2.cross(vcp2.rA, P2));\n                vB.wAdd(mB, P1, mB, P2);\n                wB += iB * (Vec2.cross(vcp1.rB, P1) + Vec2.cross(vcp2.rB, P2));\n                vcp1.normalImpulse = x.x;\n                vcp2.normalImpulse = x.y;\n                break;\n            }\n            break;\n        }\n    }\n    velocityA.v.set(vA);\n    velocityA.w = wA;\n    velocityB.v.set(vB);\n    velocityB.w = wB;\n};\n\nfunction mixFriction(friction1, friction2) {\n    return Math.sqrt(friction1 * friction2);\n}\n\nfunction mixRestitution(restitution1, restitution2) {\n    return restitution1 > restitution2 ? restitution1 : restitution2;\n}\n\nvar s_registers = [];\n\nContact.addType = function(type1, type2, callback) {\n    s_registers[type1] = s_registers[type1] || {};\n    s_registers[type1][type2] = callback;\n};\n\nContact.create = function(fixtureA, indexA, fixtureB, indexB) {\n    var typeA = fixtureA.getType();\n    var typeB = fixtureB.getType();\n    var contact, evaluateFcn;\n    if (evaluateFcn = s_registers[typeA] && s_registers[typeA][typeB]) {\n        contact = new Contact(fixtureA, indexA, fixtureB, indexB, evaluateFcn);\n    } else if (evaluateFcn = s_registers[typeB] && s_registers[typeB][typeA]) {\n        contact = new Contact(fixtureB, indexB, fixtureA, indexA, evaluateFcn);\n    } else {\n        return null;\n    }\n    fixtureA = contact.getFixtureA();\n    fixtureB = contact.getFixtureB();\n    indexA = contact.getChildIndexA();\n    indexB = contact.getChildIndexB();\n    var bodyA = fixtureA.getBody();\n    var bodyB = fixtureB.getBody();\n    contact.m_nodeA.contact = contact;\n    contact.m_nodeA.other = bodyB;\n    contact.m_nodeA.prev = null;\n    contact.m_nodeA.next = bodyA.m_contactList;\n    if (bodyA.m_contactList != null) {\n        bodyA.m_contactList.prev = contact.m_nodeA;\n    }\n    bodyA.m_contactList = contact.m_nodeA;\n    contact.m_nodeB.contact = contact;\n    contact.m_nodeB.other = bodyA;\n    contact.m_nodeB.prev = null;\n    contact.m_nodeB.next = bodyB.m_contactList;\n    if (bodyB.m_contactList != null) {\n        bodyB.m_contactList.prev = contact.m_nodeB;\n    }\n    bodyB.m_contactList = contact.m_nodeB;\n    if (fixtureA.isSensor() == false && fixtureB.isSensor() == false) {\n        bodyA.setAwake(true);\n        bodyB.setAwake(true);\n    }\n    return contact;\n};\n\nContact.destroy = function(contact, listener) {\n    var fixtureA = contact.m_fixtureA;\n    var fixtureB = contact.m_fixtureB;\n    var bodyA = fixtureA.getBody();\n    var bodyB = fixtureB.getBody();\n    if (contact.isTouching()) {\n        listener.endContact(contact);\n    }\n    if (contact.m_nodeA.prev) {\n        contact.m_nodeA.prev.next = contact.m_nodeA.next;\n    }\n    if (contact.m_nodeA.next) {\n        contact.m_nodeA.next.prev = contact.m_nodeA.prev;\n    }\n    if (contact.m_nodeA == bodyA.m_contactList) {\n        bodyA.m_contactList = contact.m_nodeA.next;\n    }\n    if (contact.m_nodeB.prev) {\n        contact.m_nodeB.prev.next = contact.m_nodeB.next;\n    }\n    if (contact.m_nodeB.next) {\n        contact.m_nodeB.next.prev = contact.m_nodeB.prev;\n    }\n    if (contact.m_nodeB == bodyB.m_contactList) {\n        bodyB.m_contactList = contact.m_nodeB.next;\n    }\n    if (contact.m_manifold.pointCount > 0 && fixtureA.isSensor() == false && fixtureB.isSensor() == false) {\n        bodyA.setAwake(true);\n        bodyB.setAwake(true);\n    }\n    var typeA = fixtureA.getType();\n    var typeB = fixtureB.getType();\n    var destroyFcn = s_registers[typeA][typeB].destroyFcn;\n    if (typeof destroyFcn === \"function\") {\n        destroyFcn(contact);\n    }\n};\n\n\n},{\"./Manifold\":6,\"./Settings\":7,\"./collision/Distance\":13,\"./common/Mat22\":16,\"./common/Math\":18,\"./common/Rot\":20,\"./common/Transform\":22,\"./common/Vec2\":23,\"./util/common\":51}],4:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Fixture;\n\nvar common = require(\"./util/common\");\n\nvar options = require(\"./util/options\");\n\nvar Vec2 = require(\"./common/Vec2\");\n\nvar AABB = require(\"./collision/AABB\");\n\nvar FixtureDef = {\n    userData: null,\n    friction: .2,\n    restitution: 0,\n    density: 0,\n    isSensor: false,\n    filterGroupIndex: 0,\n    filterCategoryBits: 1,\n    filterMaskBits: 65535\n};\n\nfunction FixtureProxy(fixture, childIndex) {\n    this.aabb = new AABB();\n    this.fixture = fixture;\n    this.childIndex = childIndex;\n    this.proxyId;\n}\n\nfunction Fixture(body, shape, def) {\n    if (shape.shape) {\n        def = shape;\n        shape = shape.shape;\n    } else if (typeof def === \"number\") {\n        def = {\n            density: def\n        };\n    }\n    def = options(def, FixtureDef);\n    this.m_body = body;\n    this.m_friction = def.friction;\n    this.m_restitution = def.restitution;\n    this.m_density = def.density;\n    this.m_isSensor = def.isSensor;\n    this.m_filterGroupIndex = def.filterGroupIndex;\n    this.m_filterCategoryBits = def.filterCategoryBits;\n    this.m_filterMaskBits = def.filterMaskBits;\n    this.m_shape = shape;\n    this.m_next = null;\n    this.m_proxies = [];\n    this.m_proxyCount = 0;\n    var childCount = this.m_shape.getChildCount();\n    for (var i = 0; i < childCount; ++i) {\n        this.m_proxies[i] = new FixtureProxy(this, i);\n    }\n    this.m_userData = def.userData;\n}\n\nFixture.prototype.getType = function() {\n    return this.m_shape.getType();\n};\n\nFixture.prototype.getShape = function() {\n    return this.m_shape;\n};\n\nFixture.prototype.isSensor = function() {\n    return this.m_isSensor;\n};\n\nFixture.prototype.setSensor = function(sensor) {\n    if (sensor != this.m_isSensor) {\n        this.m_body.setAwake(true);\n        this.m_isSensor = sensor;\n    }\n};\n\nFixture.prototype.getUserData = function() {\n    return this.m_userData;\n};\n\nFixture.prototype.setUserData = function(data) {\n    this.m_userData = data;\n};\n\nFixture.prototype.getBody = function() {\n    return this.m_body;\n};\n\nFixture.prototype.getNext = function() {\n    return this.m_next;\n};\n\nFixture.prototype.getDensity = function() {\n    return this.m_density;\n};\n\nFixture.prototype.setDensity = function(density) {\n    ASSERT && common.assert(Math.isFinite(density) && density >= 0);\n    this.m_density = density;\n};\n\nFixture.prototype.getFriction = function() {\n    return this.m_friction;\n};\n\nFixture.prototype.setFriction = function(friction) {\n    this.m_friction = friction;\n};\n\nFixture.prototype.getRestitution = function() {\n    return this.m_restitution;\n};\n\nFixture.prototype.setRestitution = function(restitution) {\n    this.m_restitution = restitution;\n};\n\nFixture.prototype.testPoint = function(p) {\n    return this.m_shape.testPoint(this.m_body.getTransform(), p);\n};\n\nFixture.prototype.rayCast = function(output, input, childIndex) {\n    return this.m_shape.rayCast(output, input, this.m_body.getTransform(), childIndex);\n};\n\nFixture.prototype.getMassData = function(massData) {\n    this.m_shape.computeMass(massData, this.m_density);\n};\n\nFixture.prototype.getAABB = function(childIndex) {\n    ASSERT && common.assert(0 <= childIndex && childIndex < this.m_proxyCount);\n    return this.m_proxies[childIndex].aabb;\n};\n\nFixture.prototype.createProxies = function(broadPhase, xf) {\n    ASSERT && common.assert(this.m_proxyCount == 0);\n    this.m_proxyCount = this.m_shape.getChildCount();\n    for (var i = 0; i < this.m_proxyCount; ++i) {\n        var proxy = this.m_proxies[i];\n        this.m_shape.computeAABB(proxy.aabb, xf, i);\n        proxy.proxyId = broadPhase.createProxy(proxy.aabb, proxy);\n    }\n};\n\nFixture.prototype.destroyProxies = function(broadPhase) {\n    for (var i = 0; i < this.m_proxyCount; ++i) {\n        var proxy = this.m_proxies[i];\n        broadPhase.destroyProxy(proxy.proxyId);\n        proxy.proxyId = null;\n    }\n    this.m_proxyCount = 0;\n};\n\nFixture.prototype.synchronize = function(broadPhase, xf1, xf2) {\n    for (var i = 0; i < this.m_proxyCount; ++i) {\n        var proxy = this.m_proxies[i];\n        var aabb1 = new AABB();\n        var aabb2 = new AABB();\n        this.m_shape.computeAABB(aabb1, xf1, proxy.childIndex);\n        this.m_shape.computeAABB(aabb2, xf2, proxy.childIndex);\n        proxy.aabb.combine(aabb1, aabb2);\n        var displacement = Vec2.sub(xf2.p, xf1.p);\n        broadPhase.moveProxy(proxy.proxyId, proxy.aabb, displacement);\n    }\n};\n\nFixture.prototype.setFilterData = function(filter) {\n    this.m_filterGroupIndex = filter.groupIndex;\n    this.m_filterCategoryBits = filter.categoryBits;\n    this.m_filterMaskBits = filter.maskBits;\n    this.refilter();\n};\n\nFixture.prototype.getFilterGroupIndex = function() {\n    return this.m_filterGroupIndex;\n};\n\nFixture.prototype.getFilterCategoryBits = function() {\n    return this.m_filterCategoryBits;\n};\n\nFixture.prototype.getFilterMaskBits = function() {\n    return this.m_filterMaskBits;\n};\n\nFixture.prototype.refilter = function() {\n    if (this.m_body == null) {\n        return;\n    }\n    var edge = this.m_body.getContactList();\n    while (edge) {\n        var contact = edge.contact;\n        var fixtureA = contact.getFixtureA();\n        var fixtureB = contact.getFixtureB();\n        if (fixtureA == this || fixtureB == this) {\n            contact.flagForFiltering();\n        }\n        edge = edge.next;\n    }\n    var world = this.m_body.getWorld();\n    if (world == null) {\n        return;\n    }\n    var broadPhase = world.m_broadPhase;\n    for (var i = 0; i < this.m_proxyCount; ++i) {\n        broadPhase.touchProxy(this.m_proxies[i].proxyId);\n    }\n};\n\nFixture.prototype.shouldCollide = function(that) {\n    if (that.m_filterGroupIndex == this.m_filterGroupIndex && that.m_filterGroupIndex != 0) {\n        return that.m_filterGroupIndex > 0;\n    }\n    var collide = (that.m_filterMaskBits & this.m_filterCategoryBits) != 0 && (that.m_filterCategoryBits & this.m_filterMaskBits) != 0;\n    return collide;\n};\n\n\n},{\"./collision/AABB\":11,\"./common/Vec2\":23,\"./util/common\":51,\"./util/options\":53}],5:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Joint;\n\nvar common = require(\"./util/common\");\n\nfunction JointEdge() {\n    this.other = null;\n    this.joint = null;\n    this.prev = null;\n    this.next = null;\n}\n\nvar JointDef = {\n    userData: null,\n    collideConnected: false\n};\n\nfunction Joint(def, bodyA, bodyB) {\n    bodyA = def.bodyA || bodyA;\n    bodyB = def.bodyB || bodyB;\n    ASSERT && common.assert(bodyA);\n    ASSERT && common.assert(bodyB);\n    ASSERT && common.assert(bodyA != bodyB);\n    this.m_type = \"unknown-joint\";\n    this.m_bodyA = bodyA;\n    this.m_bodyB = bodyB;\n    this.m_index = 0;\n    this.m_collideConnected = !!def.collideConnected;\n    this.m_prev = null;\n    this.m_next = null;\n    this.m_edgeA = new JointEdge();\n    this.m_edgeB = new JointEdge();\n    this.m_islandFlag = false;\n    this.m_userData = def.userData;\n}\n\nJoint.prototype.isActive = function() {\n    return this.m_bodyA.isActive() && this.m_bodyB.isActive();\n};\n\nJoint.prototype.getType = function() {\n    return this.m_type;\n};\n\nJoint.prototype.getBodyA = function() {\n    return this.m_bodyA;\n};\n\nJoint.prototype.getBodyB = function() {\n    return this.m_bodyB;\n};\n\nJoint.prototype.getNext = function() {\n    return this.m_next;\n};\n\nJoint.prototype.getUserData = function() {\n    return this.m_userData;\n};\n\nJoint.prototype.setUserData = function(data) {\n    this.m_userData = data;\n};\n\nJoint.prototype.getCollideConnected = function() {\n    return this.m_collideConnected;\n};\n\nJoint.prototype.getAnchorA = function() {};\n\nJoint.prototype.getAnchorB = function() {};\n\nJoint.prototype.getReactionForce = function(inv_dt) {};\n\nJoint.prototype.getReactionTorque = function(inv_dt) {};\n\nJoint.prototype.shiftOrigin = function(newOrigin) {};\n\nJoint.prototype.initVelocityConstraints = function(step) {};\n\nJoint.prototype.solveVelocityConstraints = function(step) {};\n\nJoint.prototype.solvePositionConstraints = function(step) {};\n\n\n},{\"./util/common\":51}],6:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nvar common = require(\"./util/common\");\n\nvar Vec2 = require(\"./common/Vec2\");\n\nvar Transform = require(\"./common/Transform\");\n\nvar Math = require(\"./common/Math\");\n\nvar Rot = require(\"./common/Rot\");\n\nmodule.exports = Manifold;\n\nmodule.exports.clipSegmentToLine = clipSegmentToLine;\n\nmodule.exports.clipVertex = ClipVertex;\n\nmodule.exports.getPointStates = getPointStates;\n\nmodule.exports.PointState = PointState;\n\nManifold.e_circles = 0;\n\nManifold.e_faceA = 1;\n\nManifold.e_faceB = 2;\n\nManifold.e_vertex = 0;\n\nManifold.e_face = 1;\n\nfunction Manifold() {\n    this.type;\n    this.localNormal = Vec2.zero();\n    this.localPoint = Vec2.zero();\n    this.points = [ new ManifoldPoint(), new ManifoldPoint() ];\n    this.pointCount = 0;\n}\n\nfunction ManifoldPoint() {\n    this.localPoint = Vec2.zero();\n    this.normalImpulse = 0;\n    this.tangentImpulse = 0;\n    this.id = new ContactID();\n}\n\nfunction ContactID() {\n    this.cf = new ContactFeature();\n    this.key;\n}\n\nContactID.prototype.set = function(o) {\n    this.key = o.key;\n    this.cf.set(o.cf);\n};\n\nfunction ContactFeature() {\n    this.indexA;\n    this.indexB;\n    this.typeA;\n    this.typeB;\n}\n\nContactFeature.prototype.set = function(o) {\n    this.indexA = o.indexA;\n    this.indexB = o.indexB;\n    this.typeA = o.typeA;\n    this.typeB = o.typeB;\n};\n\nfunction WorldManifold() {\n    this.normal;\n    this.points = [];\n    this.separations = [];\n}\n\nManifold.prototype.getWorldManifold = function(wm, xfA, radiusA, xfB, radiusB) {\n    if (this.pointCount == 0) {\n        return;\n    }\n    wm = wm || new WorldManifold();\n    var normal = wm.normal;\n    var points = wm.points;\n    var separations = wm.separations;\n    switch (this.type) {\n      case Manifold.e_circles:\n        normal = Vec2.neo(1, 0);\n        var pointA = Transform.mul(xfA, this.localPoint);\n        var pointB = Transform.mul(xfB, this.points[0].localPoint);\n        var dist = Vec2.sub(pointB, pointA);\n        if (Vec2.lengthSquared(dist) > Math.EPSILON * Math.EPSILON) {\n            normal.set(dist);\n            normal.normalize();\n        }\n        points[0] = Vec2.mid(pointA, pointB);\n        separations[0] = -radiusB - radiusA;\n        points.length = 1;\n        separations.length = 1;\n        break;\n\n      case Manifold.e_faceA:\n        normal = Rot.mul(xfA.q, this.localNormal);\n        var planePoint = Transform.mul(xfA, this.localPoint);\n        DEBUG && common.debug(\"faceA\", this.localPoint.x, this.localPoint.y, this.localNormal.x, this.localNormal.y, normal.x, normal.y);\n        for (var i = 0; i < this.pointCount; ++i) {\n            var clipPoint = Transform.mul(xfB, this.points[i].localPoint);\n            var cA = Vec2.clone(clipPoint).wAdd(radiusA - Vec2.dot(Vec2.sub(clipPoint, planePoint), normal), normal);\n            var cB = Vec2.clone(clipPoint).wSub(radiusB, normal);\n            points[i] = Vec2.mid(cA, cB);\n            separations[i] = Vec2.dot(Vec2.sub(cB, cA), normal);\n            DEBUG && common.debug(i, this.points[i].localPoint.x, this.points[i].localPoint.y, planePoint.x, planePoint.y, xfA.p.x, xfA.p.y, xfA.q.c, xfA.q.s, xfB.p.x, xfB.p.y, xfB.q.c, xfB.q.s, radiusA, radiusB, clipPoint.x, clipPoint.y, cA.x, cA.y, cB.x, cB.y, separations[i], points[i].x, points[i].y);\n        }\n        points.length = this.pointCount;\n        separations.length = this.pointCount;\n        break;\n\n      case Manifold.e_faceB:\n        normal = Rot.mul(xfB.q, this.localNormal);\n        var planePoint = Transform.mul(xfB, this.localPoint);\n        for (var i = 0; i < this.pointCount; ++i) {\n            var clipPoint = Transform.mul(xfA, this.points[i].localPoint);\n            var cB = Vec2.zero().wSet(1, clipPoint, radiusB - Vec2.dot(Vec2.sub(clipPoint, planePoint), normal), normal);\n            var cA = Vec2.zero().wSet(1, clipPoint, -radiusA, normal);\n            points[i] = Vec2.mid(cA, cB);\n            separations[i] = Vec2.dot(Vec2.sub(cA, cB), normal);\n        }\n        points.length = this.pointCount;\n        separations.length = this.pointCount;\n        normal.mul(-1);\n        break;\n    }\n    wm.normal = normal;\n    wm.points = points;\n    wm.separations = separations;\n    return wm;\n};\n\nvar PointState = {\n    nullState: 0,\n    addState: 1,\n    persistState: 2,\n    removeState: 3\n};\n\nfunction getPointStates(state1, state2, manifold1, manifold2) {\n    for (var i = 0; i < manifold1.pointCount; ++i) {\n        var id = manifold1.points[i].id;\n        state1[i] = PointState.removeState;\n        for (var j = 0; j < manifold2.pointCount; ++j) {\n            if (manifold2.points[j].id.key == id.key) {\n                state1[i] = PointState.persistState;\n                break;\n            }\n        }\n    }\n    for (var i = 0; i < manifold2.pointCount; ++i) {\n        var id = manifold2.points[i].id;\n        state2[i] = PointState.addState;\n        for (var j = 0; j < manifold1.pointCount; ++j) {\n            if (manifold1.points[j].id.key == id.key) {\n                state2[i] = PointState.persistState;\n                break;\n            }\n        }\n    }\n}\n\nfunction ClipVertex() {\n    this.v = Vec2.zero();\n    this.id = new ContactID();\n}\n\nClipVertex.prototype.set = function(o) {\n    this.v.set(o.v);\n    this.id.set(o.id);\n};\n\nfunction clipSegmentToLine(vOut, vIn, normal, offset, vertexIndexA) {\n    var numOut = 0;\n    var distance0 = Vec2.dot(normal, vIn[0].v) - offset;\n    var distance1 = Vec2.dot(normal, vIn[1].v) - offset;\n    if (distance0 <= 0) vOut[numOut++].set(vIn[0]);\n    if (distance1 <= 0) vOut[numOut++].set(vIn[1]);\n    if (distance0 * distance1 < 0) {\n        var interp = distance0 / (distance0 - distance1);\n        vOut[numOut].v.wSet(1 - interp, vIn[0].v, interp, vIn[1].v);\n        vOut[numOut].id.cf.indexA = vertexIndexA;\n        vOut[numOut].id.cf.indexB = vIn[0].id.cf.indexB;\n        vOut[numOut].id.cf.typeA = ContactFeature.e_vertex;\n        vOut[numOut].id.cf.typeB = ContactFeature.e_face;\n        ++numOut;\n    }\n    return numOut;\n}\n\n\n},{\"./common/Math\":18,\"./common/Rot\":20,\"./common/Transform\":22,\"./common/Vec2\":23,\"./util/common\":51}],7:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nvar Settings = exports;\n\nSettings.maxManifoldPoints = 2;\n\nSettings.maxPolygonVertices = 12;\n\nSettings.aabbExtension = .1;\n\nSettings.aabbMultiplier = 2;\n\nSettings.linearSlop = .005;\n\nSettings.linearSlopSquared = Settings.linearSlop * Settings.linearSlop;\n\nSettings.angularSlop = 2 / 180 * Math.PI;\n\nSettings.polygonRadius = 2 * Settings.linearSlop;\n\nSettings.maxSubSteps = 8;\n\nSettings.maxTOIContacts = 32;\n\nSettings.maxTOIIterations = 20;\n\nSettings.maxDistnceIterations = 20;\n\nSettings.velocityThreshold = 1;\n\nSettings.maxLinearCorrection = .2;\n\nSettings.maxAngularCorrection = 8 / 180 * Math.PI;\n\nSettings.maxTranslation = 2;\n\nSettings.maxTranslationSquared = Settings.maxTranslation * Settings.maxTranslation;\n\nSettings.maxRotation = .5 * Math.PI;\n\nSettings.maxRotationSquared = Settings.maxRotation * Settings.maxRotation;\n\nSettings.baumgarte = .2;\n\nSettings.toiBaugarte = .75;\n\nSettings.timeToSleep = .5;\n\nSettings.linearSleepTolerance = .01;\n\nSettings.linearSleepToleranceSqr = Math.pow(Settings.linearSleepTolerance, 2);\n\nSettings.angularSleepTolerance = 2 / 180 * Math.PI;\n\nSettings.angularSleepToleranceSqr = Math.pow(Settings.angularSleepTolerance, 2);\n\n\n},{}],8:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Shape;\n\nvar Math = require(\"./common/Math\");\n\nfunction Shape() {\n    this.m_type;\n    this.m_radius;\n}\n\nShape.isValid = function(shape) {\n    return !!shape;\n};\n\nShape.prototype.getRadius = function() {\n    return this.m_radius;\n};\n\nShape.prototype.getType = function() {\n    return this.m_type;\n};\n\nShape.prototype._clone = function() {};\n\nShape.prototype.getChildCount = function() {};\n\nShape.prototype.testPoint = function(xf, p) {};\n\nShape.prototype.rayCast = function(output, input, transform, childIndex) {};\n\nShape.prototype.computeAABB = function(aabb, xf, childIndex) {};\n\nShape.prototype.computeMass = function(massData, density) {};\n\nShape.prototype.computeDistanceProxy = function(proxy) {};\n\n\n},{\"./common/Math\":18}],9:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Solver;\n\nmodule.exports.TimeStep = TimeStep;\n\nvar Settings = require(\"./Settings\");\n\nvar common = require(\"./util/common\");\n\nvar Timer = require(\"./util/Timer\");\n\nvar Vec2 = require(\"./common/Vec2\");\n\nvar Math = require(\"./common/Math\");\n\nvar Body = require(\"./Body\");\n\nvar Contact = require(\"./Contact\");\n\nvar Joint = require(\"./Joint\");\n\nvar TimeOfImpact = require(\"./collision/TimeOfImpact\");\n\nvar TOIInput = TimeOfImpact.Input;\n\nvar TOIOutput = TimeOfImpact.Output;\n\nvar Distance = require(\"./collision/Distance\");\n\nvar DistanceInput = Distance.Input;\n\nvar DistanceOutput = Distance.Output;\n\nvar DistanceProxy = Distance.Proxy;\n\nvar SimplexCache = Distance.Cache;\n\nfunction Profile() {\n    this.solveInit;\n    this.solveVelocity;\n    this.solvePosition;\n}\n\nfunction TimeStep(dt) {\n    this.dt = 0;\n    this.inv_dt = 0;\n    this.velocityIterations = 0;\n    this.positionIterations = 0;\n    this.warmStarting = false;\n    this.blockSolve = true;\n    this.inv_dt0 = 0;\n    this.dtRatio = 1;\n}\n\nTimeStep.prototype.reset = function(dt) {\n    if (this.dt > 0) {\n        this.inv_dt0 = this.inv_dt;\n    }\n    this.dt = dt;\n    this.inv_dt = dt == 0 ? 0 : 1 / dt;\n    this.dtRatio = dt * this.inv_dt0;\n};\n\nfunction Solver(world) {\n    this.m_world = world;\n    this.m_profile = new Profile();\n    this.m_stack = [];\n    this.m_bodies = [];\n    this.m_contacts = [];\n    this.m_joints = [];\n}\n\nSolver.prototype.clear = function() {\n    this.m_stack.length = 0;\n    this.m_bodies.length = 0;\n    this.m_contacts.length = 0;\n    this.m_joints.length = 0;\n};\n\nSolver.prototype.addBody = function(body) {\n    ASSERT && common.assert(body instanceof Body, \"Not a Body!\", body);\n    this.m_bodies.push(body);\n};\n\nSolver.prototype.addContact = function(contact) {\n    ASSERT && common.assert(contact instanceof Contact, \"Not a Contact!\", contact);\n    this.m_contacts.push(contact);\n};\n\nSolver.prototype.addJoint = function(joint) {\n    ASSERT && common.assert(joint instanceof Joint, \"Not a Joint!\", joint);\n    this.m_joints.push(joint);\n};\n\nSolver.prototype.solveWorld = function(step) {\n    var world = this.m_world;\n    var profile = this.m_profile;\n    profile.solveInit = 0;\n    profile.solveVelocity = 0;\n    profile.solvePosition = 0;\n    for (var b = world.m_bodyList; b; b = b.m_next) {\n        b.m_islandFlag = false;\n    }\n    for (var c = world.m_contactList; c; c = c.m_next) {\n        c.m_islandFlag = false;\n    }\n    for (var j = world.m_jointList; j; j = j.m_next) {\n        j.m_islandFlag = false;\n    }\n    var stack = this.m_stack;\n    var loop = -1;\n    for (var seed = world.m_bodyList; seed; seed = seed.m_next) {\n        loop++;\n        if (seed.m_islandFlag) {\n            continue;\n        }\n        if (seed.isAwake() == false || seed.isActive() == false) {\n            continue;\n        }\n        if (seed.isStatic()) {\n            continue;\n        }\n        this.clear();\n        stack.push(seed);\n        seed.m_islandFlag = true;\n        while (stack.length > 0) {\n            var b = stack.pop();\n            ASSERT && common.assert(b.isActive() == true);\n            this.addBody(b);\n            b.setAwake(true);\n            if (b.isStatic()) {\n                continue;\n            }\n            for (var ce = b.m_contactList; ce; ce = ce.next) {\n                var contact = ce.contact;\n                if (contact.m_islandFlag) {\n                    continue;\n                }\n                if (contact.isEnabled() == false || contact.isTouching() == false) {\n                    continue;\n                }\n                var sensorA = contact.m_fixtureA.m_isSensor;\n                var sensorB = contact.m_fixtureB.m_isSensor;\n                if (sensorA || sensorB) {\n                    continue;\n                }\n                this.addContact(contact);\n                contact.m_islandFlag = true;\n                var other = ce.other;\n                if (other.m_islandFlag) {\n                    continue;\n                }\n                stack.push(other);\n                other.m_islandFlag = true;\n            }\n            for (var je = b.m_jointList; je; je = je.next) {\n                if (je.joint.m_islandFlag == true) {\n                    continue;\n                }\n                var other = je.other;\n                if (other.isActive() == false) {\n                    continue;\n                }\n                this.addJoint(je.joint);\n                je.joint.m_islandFlag = true;\n                if (other.m_islandFlag) {\n                    continue;\n                }\n                stack.push(other);\n                other.m_islandFlag = true;\n            }\n        }\n        this.solveIsland(step);\n        for (var i = 0; i < this.m_bodies.length; ++i) {\n            var b = this.m_bodies[i];\n            if (b.isStatic()) {\n                b.m_islandFlag = false;\n            }\n        }\n    }\n};\n\nSolver.prototype.solveIsland = function(step) {\n    var world = this.m_world;\n    var profile = this.m_profile;\n    var gravity = world.m_gravity;\n    var allowSleep = world.m_allowSleep;\n    var timer = Timer.now();\n    var h = step.dt;\n    for (var i = 0; i < this.m_bodies.length; ++i) {\n        var body = this.m_bodies[i];\n        var c = Vec2.clone(body.m_sweep.c);\n        var a = body.m_sweep.a;\n        var v = Vec2.clone(body.m_linearVelocity);\n        var w = body.m_angularVelocity;\n        body.m_sweep.c0.set(body.m_sweep.c);\n        body.m_sweep.a0 = body.m_sweep.a;\n        DEBUG && common.debug(\"P: \", a, c.x, c.y, w, v.x, v.y);\n        if (body.isDynamic()) {\n            v.wAdd(h * body.m_gravityScale, gravity);\n            v.wAdd(h * body.m_invMass, body.m_force);\n            w += h * body.m_invI * body.m_torque;\n            DEBUG && common.debug(\"N: \" + h, body.m_gravityScale, gravity.x, gravity.y, body.m_invMass, body.m_force.x, body.m_force.y);\n            v.mul(1 / (1 + h * body.m_linearDamping));\n            w *= 1 / (1 + h * body.m_angularDamping);\n        }\n        common.debug(\"A: \", a, c.x, c.y, w, v.x, v.y);\n        body.c_position.c = c;\n        body.c_position.a = a;\n        body.c_velocity.v = v;\n        body.c_velocity.w = w;\n    }\n    timer = Timer.now();\n    for (var i = 0; i < this.m_contacts.length; ++i) {\n        var contact = this.m_contacts[i];\n        contact.initConstraint(step);\n    }\n    DEBUG && this.printBodies(\"M: \");\n    for (var i = 0; i < this.m_contacts.length; ++i) {\n        var contact = this.m_contacts[i];\n        contact.initVelocityConstraint(step);\n    }\n    DEBUG && this.printBodies(\"R: \");\n    if (step.warmStarting) {\n        for (var i = 0; i < this.m_contacts.length; ++i) {\n            var contact = this.m_contacts[i];\n            contact.warmStartConstraint(step);\n        }\n    }\n    DEBUG && this.printBodies(\"Q: \");\n    for (var i = 0; i < this.m_joints.length; ++i) {\n        var joint = this.m_joints[i];\n        joint.initVelocityConstraints(step);\n    }\n    DEBUG && this.printBodies(\"E: \");\n    profile.solveInit = Timer.diff(timer);\n    timer = Timer.now();\n    for (var i = 0; i < step.velocityIterations; ++i) {\n        DEBUG && common.debug(\"--\", i);\n        for (var j = 0; j < this.m_joints.length; ++j) {\n            var joint = this.m_joints[j];\n            joint.solveVelocityConstraints(step);\n        }\n        for (var j = 0; j < this.m_contacts.length; ++j) {\n            var contact = this.m_contacts[j];\n            contact.solveVelocityConstraint(step);\n        }\n    }\n    DEBUG && this.printBodies(\"D: \");\n    for (var i = 0; i < this.m_contacts.length; ++i) {\n        var contact = this.m_contacts[i];\n        contact.storeConstraintImpulses(step);\n    }\n    profile.solveVelocity = Timer.diff(timer);\n    DEBUG && this.printBodies(\"C: \");\n    for (var i = 0; i < this.m_bodies.length; ++i) {\n        var body = this.m_bodies[i];\n        var c = Vec2.clone(body.c_position.c);\n        var a = body.c_position.a;\n        var v = Vec2.clone(body.c_velocity.v);\n        var w = body.c_velocity.w;\n        var translation = Vec2.mul(h, v);\n        if (Vec2.lengthSquared(translation) > Settings.maxTranslationSquared) {\n            var ratio = Settings.maxTranslation / translation.length();\n            v.mul(ratio);\n        }\n        var rotation = h * w;\n        if (rotation * rotation > Settings.maxRotationSquared) {\n            var ratio = Settings.maxRotation / Math.abs(rotation);\n            w *= ratio;\n        }\n        c.wAdd(h, v);\n        a += h * w;\n        body.c_position.c.set(c);\n        body.c_position.a = a;\n        body.c_velocity.v.set(v);\n        body.c_velocity.w = w;\n    }\n    DEBUG && this.printBodies(\"B: \");\n    timer = Timer.now();\n    var positionSolved = false;\n    for (var i = 0; i < step.positionIterations; ++i) {\n        var minSeparation = 0;\n        for (var j = 0; j < this.m_contacts.length; ++j) {\n            var contact = this.m_contacts[j];\n            var separation = contact.solvePositionConstraint(step);\n            minSeparation = Math.min(minSeparation, separation);\n        }\n        var contactsOkay = minSeparation >= -3 * Settings.linearSlop;\n        var jointsOkay = true;\n        for (var j = 0; j < this.m_joints.length; ++j) {\n            var joint = this.m_joints[j];\n            var jointOkay = joint.solvePositionConstraints(step);\n            jointsOkay = jointsOkay && jointOkay;\n        }\n        if (contactsOkay && jointsOkay) {\n            positionSolved = true;\n            break;\n        }\n    }\n    DEBUG && this.printBodies(\"L: \");\n    for (var i = 0; i < this.m_bodies.length; ++i) {\n        var body = this.m_bodies[i];\n        body.m_sweep.c.set(body.c_position.c);\n        body.m_sweep.a = body.c_position.a;\n        body.m_linearVelocity.set(body.c_velocity.v);\n        body.m_angularVelocity = body.c_velocity.w;\n        body.synchronizeTransform();\n    }\n    profile.solvePosition = Timer.diff(timer);\n    this.postSolveIsland();\n    if (allowSleep) {\n        var minSleepTime = Infinity;\n        var linTolSqr = Settings.linearSleepToleranceSqr;\n        var angTolSqr = Settings.angularSleepToleranceSqr;\n        for (var i = 0; i < this.m_bodies.length; ++i) {\n            var body = this.m_bodies[i];\n            if (body.isStatic()) {\n                continue;\n            }\n            if (body.m_autoSleepFlag == false || body.m_angularVelocity * body.m_angularVelocity > angTolSqr || Vec2.lengthSquared(body.m_linearVelocity) > linTolSqr) {\n                body.m_sleepTime = 0;\n                minSleepTime = 0;\n            } else {\n                body.m_sleepTime += h;\n                minSleepTime = Math.min(minSleepTime, body.m_sleepTime);\n            }\n        }\n        if (minSleepTime >= Settings.timeToSleep && positionSolved) {\n            for (var i = 0; i < this.m_bodies.length; ++i) {\n                var body = this.m_bodies[i];\n                body.setAwake(false);\n            }\n        }\n    }\n};\n\nSolver.prototype.printBodies = function(tag) {\n    for (var i = 0; i < this.m_bodies.length; ++i) {\n        var b = this.m_bodies[i];\n        common.debug(tag, b.c_position.a, b.c_position.c.x, b.c_position.c.y, b.c_velocity.w, b.c_velocity.v.x, b.c_velocity.v.y);\n    }\n};\n\nvar s_subStep = new TimeStep();\n\nSolver.prototype.solveWorldTOI = function(step) {\n    DEBUG && common.debug(\"TOI++++++World\");\n    var world = this.m_world;\n    var profile = this.m_profile;\n    DEBUG && common.debug(\"Z:\", world.m_stepComplete);\n    if (world.m_stepComplete) {\n        for (var b = world.m_bodyList; b; b = b.m_next) {\n            b.m_islandFlag = false;\n            b.m_sweep.alpha0 = 0;\n            DEBUG && common.debug(\"b.alpha0:\", b.m_sweep.alpha0);\n        }\n        for (var c = world.m_contactList; c; c = c.m_next) {\n            c.m_toiFlag = false;\n            c.m_islandFlag = false;\n            c.m_toiCount = 0;\n            c.m_toi = 1;\n        }\n    }\n    if (DEBUG) for (var c = world.m_contactList; c; c = c.m_next) {\n        DEBUG && common.debug(\"X:\", c.m_toiFlag);\n    }\n    for (;;) {\n        DEBUG && common.debug(\";;\");\n        var minContact = null;\n        var minAlpha = 1;\n        for (var c = world.m_contactList; c; c = c.m_next) {\n            DEBUG && common.debug(\"alpha0::\", c.getFixtureA().getBody().m_sweep.alpha0, c.getFixtureB().getBody().m_sweep.alpha0);\n            if (c.isEnabled() == false) {\n                continue;\n            }\n            DEBUG && common.debug(\"toiCount:\", c.m_toiCount, Settings.maxSubSteps);\n            if (c.m_toiCount > Settings.maxSubSteps) {\n                continue;\n            }\n            DEBUG && common.debug(\"toiFlag:\", c.m_toiFlag);\n            var alpha = 1;\n            if (c.m_toiFlag) {\n                alpha = c.m_toi;\n            } else {\n                var fA = c.getFixtureA();\n                var fB = c.getFixtureB();\n                DEBUG && common.debug(\"sensor:\", fA.isSensor(), fB.isSensor());\n                if (fA.isSensor() || fB.isSensor()) {\n                    continue;\n                }\n                var bA = fA.getBody();\n                var bB = fB.getBody();\n                ASSERT && common.assert(bA.isDynamic() || bB.isDynamic());\n                var activeA = bA.isAwake() && !bA.isStatic();\n                var activeB = bB.isAwake() && !bB.isStatic();\n                DEBUG && common.debug(\"awakestatic:\", bA.isAwake(), bA.isStatic());\n                DEBUG && common.debug(\"awakestatic:\", bB.isAwake(), bB.isStatic());\n                DEBUG && common.debug(\"active:\", activeA, activeB);\n                if (activeA == false && activeB == false) {\n                    continue;\n                }\n                DEBUG && common.debug(\"alpha:\", alpha, bA.m_sweep.alpha0, bB.m_sweep.alpha0);\n                var collideA = bA.isBullet() || !bA.isDynamic();\n                var collideB = bB.isBullet() || !bB.isDynamic();\n                DEBUG && common.debug(\"collide:\", collideA, collideB);\n                if (collideA == false && collideB == false) {\n                    continue;\n                }\n                var alpha0 = bA.m_sweep.alpha0;\n                if (bA.m_sweep.alpha0 < bB.m_sweep.alpha0) {\n                    alpha0 = bB.m_sweep.alpha0;\n                    bA.m_sweep.advance(alpha0);\n                } else if (bB.m_sweep.alpha0 < bA.m_sweep.alpha0) {\n                    alpha0 = bA.m_sweep.alpha0;\n                    bB.m_sweep.advance(alpha0);\n                }\n                DEBUG && common.debug(\"alpha0:\", alpha0, bA.m_sweep.alpha0, bB.m_sweep.alpha0);\n                ASSERT && common.assert(alpha0 < 1);\n                var indexA = c.getChildIndexA();\n                var indexB = c.getChildIndexB();\n                var sweepA = bA.m_sweep;\n                var sweepB = bB.m_sweep;\n                DEBUG && common.debug(\"sweepA\", sweepA.localCenter.x, sweepA.localCenter.y, sweepA.c.x, sweepA.c.y, sweepA.a, sweepA.alpha0, sweepA.c0.x, sweepA.c0.y, sweepA.a0);\n                DEBUG && common.debug(\"sweepB\", sweepB.localCenter.x, sweepB.localCenter.y, sweepB.c.x, sweepB.c.y, sweepB.a, sweepB.alpha0, sweepB.c0.x, sweepB.c0.y, sweepB.a0);\n                var input = new TOIInput();\n                input.proxyA.set(fA.getShape(), indexA);\n                input.proxyB.set(fB.getShape(), indexB);\n                input.sweepA.set(bA.m_sweep);\n                input.sweepB.set(bB.m_sweep);\n                input.tMax = 1;\n                var output = new TOIOutput();\n                TimeOfImpact(output, input);\n                var beta = output.t;\n                DEBUG && common.debug(\"state:\", output.state, TOIOutput.e_touching);\n                if (output.state == TOIOutput.e_touching) {\n                    alpha = Math.min(alpha0 + (1 - alpha0) * beta, 1);\n                } else {\n                    alpha = 1;\n                }\n                c.m_toi = alpha;\n                c.m_toiFlag = true;\n            }\n            DEBUG && common.debug(\"minAlpha:\", minAlpha, alpha);\n            if (alpha < minAlpha) {\n                minContact = c;\n                minAlpha = alpha;\n            }\n        }\n        DEBUG && common.debug(\"minContact:\", minContact == null, 1 - 10 * Math.EPSILON < minAlpha, minAlpha);\n        if (minContact == null || 1 - 10 * Math.EPSILON < minAlpha) {\n            world.m_stepComplete = true;\n            break;\n        }\n        var fA = minContact.getFixtureA();\n        var fB = minContact.getFixtureB();\n        var bA = fA.getBody();\n        var bB = fB.getBody();\n        var backup1 = bA.m_sweep.clone();\n        var backup2 = bB.m_sweep.clone();\n        bA.advance(minAlpha);\n        bB.advance(minAlpha);\n        minContact.update(world);\n        minContact.m_toiFlag = false;\n        ++minContact.m_toiCount;\n        if (minContact.isEnabled() == false || minContact.isTouching() == false) {\n            minContact.setEnabled(false);\n            bA.m_sweep.set(backup1);\n            bB.m_sweep.set(backup2);\n            bA.synchronizeTransform();\n            bB.synchronizeTransform();\n            continue;\n        }\n        bA.setAwake(true);\n        bB.setAwake(true);\n        this.clear();\n        this.addBody(bA);\n        this.addBody(bB);\n        this.addContact(minContact);\n        bA.m_islandFlag = true;\n        bB.m_islandFlag = true;\n        minContact.m_islandFlag = true;\n        var bodies = [ bA, bB ];\n        for (var i = 0; i < bodies.length; ++i) {\n            var body = bodies[i];\n            if (body.isDynamic()) {\n                for (var ce = body.m_contactList; ce; ce = ce.next) {\n                    var contact = ce.contact;\n                    if (contact.m_islandFlag) {\n                        continue;\n                    }\n                    var other = ce.other;\n                    if (other.isDynamic() && !body.isBullet() && !other.isBullet()) {\n                        continue;\n                    }\n                    var sensorA = contact.m_fixtureA.m_isSensor;\n                    var sensorB = contact.m_fixtureB.m_isSensor;\n                    if (sensorA || sensorB) {\n                        continue;\n                    }\n                    var backup = other.m_sweep.clone();\n                    if (other.m_islandFlag == false) {\n                        other.advance(minAlpha);\n                    }\n                    contact.update(world);\n                    if (contact.isEnabled() == false || contact.isTouching() == false) {\n                        other.m_sweep.set(backup);\n                        other.synchronizeTransform();\n                        continue;\n                    }\n                    contact.m_islandFlag = true;\n                    this.addContact(contact);\n                    if (other.m_islandFlag) {\n                        continue;\n                    }\n                    other.m_islandFlag = true;\n                    if (!other.isStatic()) {\n                        other.setAwake(true);\n                    }\n                    this.addBody(other);\n                }\n            }\n        }\n        s_subStep.reset((1 - minAlpha) * step.dt);\n        s_subStep.dtRatio = 1;\n        s_subStep.positionIterations = 20;\n        s_subStep.velocityIterations = step.velocityIterations;\n        s_subStep.warmStarting = false;\n        this.solveIslandTOI(s_subStep, bA, bB);\n        for (var i = 0; i < this.m_bodies.length; ++i) {\n            var body = this.m_bodies[i];\n            body.m_islandFlag = false;\n            if (!body.isDynamic()) {\n                continue;\n            }\n            body.synchronizeFixtures();\n            for (var ce = body.m_contactList; ce; ce = ce.next) {\n                ce.contact.m_toiFlag = false;\n                ce.contact.m_islandFlag = false;\n            }\n        }\n        world.findNewContacts();\n        if (world.m_subStepping) {\n            world.m_stepComplete = false;\n            break;\n        }\n    }\n    if (DEBUG) for (var b = world.m_bodyList; b; b = b.m_next) {\n        var c = b.m_sweep.c;\n        var a = b.m_sweep.a;\n        var v = b.m_linearVelocity;\n        var w = b.m_angularVelocity;\n        DEBUG && common.debug(\"== \", a, c.x, c.y, w, v.x, v.y);\n    }\n};\n\nSolver.prototype.solveIslandTOI = function(subStep, toiA, toiB) {\n    DEBUG && common.debug(\"TOI++++++Island\");\n    var world = this.m_world;\n    var profile = this.m_profile;\n    for (var i = 0; i < this.m_bodies.length; ++i) {\n        var body = this.m_bodies[i];\n        body.c_position.c.set(body.m_sweep.c);\n        body.c_position.a = body.m_sweep.a;\n        body.c_velocity.v.set(body.m_linearVelocity);\n        body.c_velocity.w = body.m_angularVelocity;\n    }\n    for (var i = 0; i < this.m_contacts.length; ++i) {\n        var contact = this.m_contacts[i];\n        contact.initConstraint(subStep);\n    }\n    for (var i = 0; i < subStep.positionIterations; ++i) {\n        var minSeparation = 0;\n        for (var j = 0; j < this.m_contacts.length; ++j) {\n            var contact = this.m_contacts[j];\n            var separation = contact.solvePositionConstraintTOI(subStep, toiA, toiB);\n            minSeparation = Math.min(minSeparation, separation);\n        }\n        var contactsOkay = minSeparation >= -1.5 * Settings.linearSlop;\n        if (contactsOkay) {\n            break;\n        }\n    }\n    if (false) {\n        for (var i = 0; i < this.m_contacts.length; ++i) {\n            var c = this.m_contacts[i];\n            var fA = c.getFixtureA();\n            var fB = c.getFixtureB();\n            var bA = fA.getBody();\n            var bB = fB.getBody();\n            var indexA = c.getChildIndexA();\n            var indexB = c.getChildIndexB();\n            var input = new DistanceInput();\n            input.proxyA.set(fA.getShape(), indexA);\n            input.proxyB.set(fB.getShape(), indexB);\n            input.transformA = bA.getTransform();\n            input.transformB = bB.getTransform();\n            input.useRadii = false;\n            var output = new DistanceOutput();\n            var cache = new SimplexCache();\n            Distance(output, cache, input);\n            if (output.distance == 0 || cache.count == 3) {\n                cache.count += 0;\n            }\n        }\n    }\n    toiA.m_sweep.c0.set(toiA.c_position.c);\n    toiA.m_sweep.a0 = toiA.c_position.a;\n    toiB.m_sweep.c0.set(toiB.c_position.c);\n    toiB.m_sweep.a0 = toiB.c_position.a;\n    for (var i = 0; i < this.m_contacts.length; ++i) {\n        var contact = this.m_contacts[i];\n        contact.initVelocityConstraint(subStep);\n    }\n    for (var i = 0; i < subStep.velocityIterations; ++i) {\n        for (var j = 0; j < this.m_contacts.length; ++j) {\n            var contact = this.m_contacts[j];\n            contact.solveVelocityConstraint(subStep);\n        }\n    }\n    var h = subStep.dt;\n    for (var i = 0; i < this.m_bodies.length; ++i) {\n        var body = this.m_bodies[i];\n        var c = Vec2.clone(body.c_position.c);\n        var a = body.c_position.a;\n        var v = Vec2.clone(body.c_velocity.v);\n        var w = body.c_velocity.w;\n        var translation = Vec2.mul(h, v);\n        if (Vec2.dot(translation, translation) > Settings.maxTranslationSquared) {\n            var ratio = Settings.maxTranslation / translation.length();\n            v.mul(ratio);\n        }\n        var rotation = h * w;\n        if (rotation * rotation > Settings.maxRotationSquared) {\n            var ratio = Settings.maxRotation / Math.abs(rotation);\n            w *= ratio;\n        }\n        c.wAdd(h, v);\n        a += h * w;\n        body.c_position.c = c;\n        body.c_position.a = a;\n        body.c_velocity.v = v;\n        body.c_velocity.w = w;\n        body.m_sweep.c = c;\n        body.m_sweep.a = a;\n        body.m_linearVelocity = v;\n        body.m_angularVelocity = w;\n        body.synchronizeTransform();\n    }\n    this.postSolveIsland();\n    DEBUG && common.debug(\"TOI------Island\");\n};\n\nfunction ContactImpulse() {\n    this.normalImpulses = [];\n    this.tangentImpulses = [];\n}\n\nSolver.prototype.postSolveIsland = function() {\n    var impulse = new ContactImpulse();\n    for (var c = 0; c < this.m_contacts.length; ++c) {\n        var contact = this.m_contacts[c];\n        for (var p = 0; p < contact.v_points.length; ++p) {\n            impulse.normalImpulses.push(contact.v_points[p].normalImpulse);\n            impulse.tangentImpulses.push(contact.v_points[p].tangentImpulse);\n        }\n        this.m_world.postSolve(contact, impulse);\n    }\n};\n\n\n},{\"./Body\":2,\"./Contact\":3,\"./Joint\":5,\"./Settings\":7,\"./collision/Distance\":13,\"./collision/TimeOfImpact\":15,\"./common/Math\":18,\"./common/Vec2\":23,\"./util/Timer\":50,\"./util/common\":51}],10:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = World;\n\nvar options = require(\"./util/options\");\n\nvar common = require(\"./util/common\");\n\nvar Timer = require(\"./util/Timer\");\n\nvar Vec2 = require(\"./common/Vec2\");\n\nvar BroadPhase = require(\"./collision/BroadPhase\");\n\nvar Solver = require(\"./Solver\");\n\nvar Body = require(\"./Body\");\n\nvar Contact = require(\"./Contact\");\n\nvar WorldDef = {\n    gravity: Vec2.zero(),\n    allowSleep: true,\n    warmStarting: true,\n    continuousPhysics: true,\n    subStepping: false,\n    blockSolve: true,\n    velocityIterations: 8,\n    positionIterations: 3\n};\n\nfunction World(def) {\n    if (!(this instanceof World)) {\n        return new World(def);\n    }\n    if (def && Vec2.isValid(def)) {\n        def = {\n            gravity: def\n        };\n    }\n    def = options(def, WorldDef);\n    this.m_solver = new Solver(this);\n    this.m_broadPhase = new BroadPhase();\n    this.m_contactList = null;\n    this.m_contactCount = 0;\n    this.m_bodyList = null;\n    this.m_bodyCount = 0;\n    this.m_jointList = null;\n    this.m_jointCount = 0;\n    this.m_stepComplete = true;\n    this.m_allowSleep = def.allowSleep;\n    this.m_gravity = Vec2.clone(def.gravity);\n    this.m_clearForces = true;\n    this.m_newFixture = false;\n    this.m_locked = false;\n    this.m_warmStarting = def.warmStarting;\n    this.m_continuousPhysics = def.continuousPhysics;\n    this.m_subStepping = def.subStepping;\n    this.m_blockSolve = def.blockSolve;\n    this.m_velocityIterations = def.velocityIterations;\n    this.m_positionIterations = def.positionIterations;\n    this.m_t = 0;\n    this.m_stepCount = 0;\n    this.addPair = this.createContact.bind(this);\n}\n\nWorld.prototype.getBodyList = function() {\n    return this.m_bodyList;\n};\n\nWorld.prototype.getJointList = function() {\n    return this.m_jointList;\n};\n\nWorld.prototype.getContactList = function() {\n    return this.m_contactList;\n};\n\nWorld.prototype.getBodyCount = function() {\n    return this.m_bodyCount;\n};\n\nWorld.prototype.getJointCount = function() {\n    return this.m_jointCount;\n};\n\nWorld.prototype.getContactCount = function() {\n    return this.m_contactCount;\n};\n\nWorld.prototype.setGravity = function(gravity) {\n    this.m_gravity = gravity;\n};\n\nWorld.prototype.getGravity = function() {\n    return this.m_gravity;\n};\n\nWorld.prototype.isLocked = function() {\n    return this.m_locked;\n};\n\nWorld.prototype.setAllowSleeping = function(flag) {\n    if (flag == this.m_allowSleep) {\n        return;\n    }\n    this.m_allowSleep = flag;\n    if (this.m_allowSleep == false) {\n        for (var b = this.m_bodyList; b; b = b.m_next) {\n            b.setAwake(true);\n        }\n    }\n};\n\nWorld.prototype.getAllowSleeping = function() {\n    return this.m_allowSleep;\n};\n\nWorld.prototype.setWarmStarting = function(flag) {\n    this.m_warmStarting = flag;\n};\n\nWorld.prototype.getWarmStarting = function() {\n    return this.m_warmStarting;\n};\n\nWorld.prototype.setContinuousPhysics = function(flag) {\n    this.m_continuousPhysics = flag;\n};\n\nWorld.prototype.getContinuousPhysics = function() {\n    return this.m_continuousPhysics;\n};\n\nWorld.prototype.setSubStepping = function(flag) {\n    this.m_subStepping = flag;\n};\n\nWorld.prototype.getSubStepping = function() {\n    return this.m_subStepping;\n};\n\nWorld.prototype.setAutoClearForces = function(flag) {\n    this.m_clearForces = flag;\n};\n\nWorld.prototype.getAutoClearForces = function() {\n    return this.m_clearForces;\n};\n\nWorld.prototype.clearForces = function() {\n    for (var body = this.m_bodyList; body; body = body.getNext()) {\n        body.m_force.setZero();\n        body.m_torque = 0;\n    }\n};\n\nWorld.prototype.queryAABB = function(aabb, queryCallback) {\n    ASSERT && common.assert(typeof queryCallback === \"function\");\n    var broadPhase = this.m_broadPhase;\n    this.m_broadPhase.query(aabb, function(proxyId) {\n        var proxy = broadPhase.getUserData(proxyId);\n        return queryCallback(proxy.fixture);\n    });\n};\n\nWorld.prototype.rayCast = function(point1, point2, reportFixtureCallback) {\n    ASSERT && common.assert(typeof reportFixtureCallback === \"function\");\n    var broadPhase = this.m_broadPhase;\n    this.m_broadPhase.rayCast({\n        maxFraction: 1,\n        p1: point1,\n        p2: point2\n    }, function(input, proxyId) {\n        var proxy = broadPhase.getUserData(proxyId);\n        var fixture = proxy.fixture;\n        var index = proxy.childIndex;\n        var output = {};\n        var hit = fixture.rayCast(output, input, index);\n        if (hit) {\n            var fraction = output.fraction;\n            var point = Vec2.add(Vec2.mul(1 - fraction, input.p1), Vec2.mul(fraction, input.p2));\n            return reportFixtureCallback(fixture, point, output.normal, fraction);\n        }\n        return input.maxFraction;\n    });\n};\n\nWorld.prototype.getProxyCount = function() {\n    return this.m_broadPhase.getProxyCount();\n};\n\nWorld.prototype.getTreeHeight = function() {\n    return this.m_broadPhase.getTreeHeight();\n};\n\nWorld.prototype.getTreeBalance = function() {\n    return this.m_broadPhase.getTreeBalance();\n};\n\nWorld.prototype.getTreeQuality = function() {\n    return this.m_broadPhase.getTreeQuality();\n};\n\nWorld.prototype.shiftOrigin = function(newOrigin) {\n    ASSERT && common.assert(this.m_locked == false);\n    if (this.m_locked) {\n        return;\n    }\n    for (var b = this.m_bodyList; b; b = b.m_next) {\n        b.m_xf.p.sub(newOrigin);\n        b.m_sweep.c0.sub(newOrigin);\n        b.m_sweep.c.sub(newOrigin);\n    }\n    for (var j = this.m_jointList; j; j = j.m_next) {\n        j.shiftOrigin(newOrigin);\n    }\n    this.m_broadPhase.shiftOrigin(newOrigin);\n};\n\nWorld.prototype.createBody = function(def, angle) {\n    ASSERT && common.assert(this.isLocked() == false);\n    if (this.isLocked()) {\n        return null;\n    }\n    if (def && Vec2.isValid(def)) {\n        def = {\n            position: def,\n            angle: angle\n        };\n    }\n    var body = new Body(this, def);\n    body.m_prev = null;\n    body.m_next = this.m_bodyList;\n    if (this.m_bodyList) {\n        this.m_bodyList.m_prev = body;\n    }\n    this.m_bodyList = body;\n    ++this.m_bodyCount;\n    return body;\n};\n\nWorld.prototype.createDynamicBody = function(def, angle) {\n    if (!def) {\n        def = {};\n    } else if (Vec2.isValid(def)) {\n        def = {\n            position: def,\n            angle: angle\n        };\n    }\n    def.type = \"dynamic\";\n    return this.createBody(def);\n};\n\nWorld.prototype.createKinematicBody = function(def, angle) {\n    if (!def) {\n        def = {};\n    } else if (Vec2.isValid(def)) {\n        def = {\n            position: def,\n            angle: angle\n        };\n    }\n    def.type = \"kinematic\";\n    return this.createBody(def);\n};\n\nWorld.prototype.destroyBody = function(b) {\n    ASSERT && common.assert(this.m_bodyCount > 0);\n    ASSERT && common.assert(this.isLocked() == false);\n    if (this.isLocked()) {\n        return;\n    }\n    if (b.m_destroyed) {\n        return false;\n    }\n    var je = b.m_jointList;\n    while (je) {\n        var je0 = je;\n        je = je.next;\n        this.publish(\"remove-joint\", je0.joint);\n        this.destroyJoint(je0.joint);\n        b.m_jointList = je;\n    }\n    b.m_jointList = null;\n    var ce = b.m_contactList;\n    while (ce) {\n        var ce0 = ce;\n        ce = ce.next;\n        this.destroyContact(ce0.contact);\n        b.m_contactList = ce;\n    }\n    b.m_contactList = null;\n    var f = b.m_fixtureList;\n    while (f) {\n        var f0 = f;\n        f = f.m_next;\n        this.publish(\"remove-fixture\", f0);\n        f0.destroyProxies(this.m_broadPhase);\n        b.m_fixtureList = f;\n    }\n    b.m_fixtureList = null;\n    if (b.m_prev) {\n        b.m_prev.m_next = b.m_next;\n    }\n    if (b.m_next) {\n        b.m_next.m_prev = b.m_prev;\n    }\n    if (b == this.m_bodyList) {\n        this.m_bodyList = b.m_next;\n    }\n    b.m_destroyed = true;\n    --this.m_bodyCount;\n    return true;\n};\n\nWorld.prototype.createJoint = function(joint) {\n    ASSERT && common.assert(!!joint.m_bodyA);\n    ASSERT && common.assert(!!joint.m_bodyB);\n    ASSERT && common.assert(this.isLocked() == false);\n    if (this.isLocked()) {\n        return null;\n    }\n    joint.m_prev = null;\n    joint.m_next = this.m_jointList;\n    if (this.m_jointList) {\n        this.m_jointList.m_prev = joint;\n    }\n    this.m_jointList = joint;\n    ++this.m_jointCount;\n    joint.m_edgeA.joint = joint;\n    joint.m_edgeA.other = joint.m_bodyB;\n    joint.m_edgeA.prev = null;\n    joint.m_edgeA.next = joint.m_bodyA.m_jointList;\n    if (joint.m_bodyA.m_jointList) joint.m_bodyA.m_jointList.prev = joint.m_edgeA;\n    joint.m_bodyA.m_jointList = joint.m_edgeA;\n    joint.m_edgeB.joint = joint;\n    joint.m_edgeB.other = joint.m_bodyA;\n    joint.m_edgeB.prev = null;\n    joint.m_edgeB.next = joint.m_bodyB.m_jointList;\n    if (joint.m_bodyB.m_jointList) joint.m_bodyB.m_jointList.prev = joint.m_edgeB;\n    joint.m_bodyB.m_jointList = joint.m_edgeB;\n    if (joint.m_collideConnected == false) {\n        for (var edge = joint.m_bodyB.getContactList(); edge; edge = edge.next) {\n            if (edge.other == joint.m_bodyA) {\n                edge.contact.flagForFiltering();\n            }\n        }\n    }\n    return joint;\n};\n\nWorld.prototype.destroyJoint = function(joint) {\n    ASSERT && common.assert(this.isLocked() == false);\n    if (this.isLocked()) {\n        return;\n    }\n    if (joint.m_prev) {\n        joint.m_prev.m_next = joint.m_next;\n    }\n    if (joint.m_next) {\n        joint.m_next.m_prev = joint.m_prev;\n    }\n    if (joint == this.m_jointList) {\n        this.m_jointList = joint.m_next;\n    }\n    var bodyA = joint.m_bodyA;\n    var bodyB = joint.m_bodyB;\n    bodyA.setAwake(true);\n    bodyB.setAwake(true);\n    if (joint.m_edgeA.prev) {\n        joint.m_edgeA.prev.next = joint.m_edgeA.next;\n    }\n    if (joint.m_edgeA.next) {\n        joint.m_edgeA.next.prev = joint.m_edgeA.prev;\n    }\n    if (joint.m_edgeA == bodyA.m_jointList) {\n        bodyA.m_jointList = joint.m_edgeA.next;\n    }\n    joint.m_edgeA.prev = null;\n    joint.m_edgeA.next = null;\n    if (joint.m_edgeB.prev) {\n        joint.m_edgeB.prev.next = joint.m_edgeB.next;\n    }\n    if (joint.m_edgeB.next) {\n        joint.m_edgeB.next.prev = joint.m_edgeB.prev;\n    }\n    if (joint.m_edgeB == bodyB.m_jointList) {\n        bodyB.m_jointList = joint.m_edgeB.next;\n    }\n    joint.m_edgeB.prev = null;\n    joint.m_edgeB.next = null;\n    ASSERT && common.assert(this.m_jointCount > 0);\n    --this.m_jointCount;\n    if (joint.m_collideConnected == false) {\n        var edge = bodyB.getContactList();\n        while (edge) {\n            if (edge.other == bodyA) {\n                edge.contact.flagForFiltering();\n            }\n            edge = edge.next;\n        }\n    }\n    this.publish(\"remove-joint\", joint);\n};\n\nvar s_step = new Solver.TimeStep();\n\nWorld.prototype.step = function(timeStep, velocityIterations, positionIterations) {\n    if ((velocityIterations | 0) !== velocityIterations) {\n        velocityIterations = 0;\n    }\n    velocityIterations = velocityIterations || this.m_velocityIterations;\n    positionIterations = positionIterations || this.m_positionIterations;\n    this.m_stepCount++;\n    if (this.m_newFixture) {\n        this.findNewContacts();\n        this.m_newFixture = false;\n    }\n    this.m_locked = true;\n    s_step.reset(timeStep);\n    s_step.velocityIterations = velocityIterations;\n    s_step.positionIterations = positionIterations;\n    s_step.warmStarting = this.m_warmStarting;\n    s_step.blockSolve = this.m_blockSolve;\n    this.updateContacts();\n    if (this.m_stepComplete && timeStep > 0) {\n        this.m_solver.solveWorld(s_step);\n        for (var b = this.m_bodyList; b; b = b.getNext()) {\n            if (b.m_islandFlag == false) {\n                continue;\n            }\n            if (b.isStatic()) {\n                continue;\n            }\n            b.synchronizeFixtures();\n        }\n        this.findNewContacts();\n    }\n    if (this.m_continuousPhysics && timeStep > 0) {\n        this.m_solver.solveWorldTOI(s_step);\n    }\n    if (this.m_clearForces) {\n        this.clearForces();\n    }\n    this.m_locked = false;\n};\n\nWorld.prototype.findNewContacts = function() {\n    this.m_broadPhase.updatePairs(this.addPair);\n};\n\nWorld.prototype.createContact = function(proxyA, proxyB) {\n    var fixtureA = proxyA.fixture;\n    var fixtureB = proxyB.fixture;\n    var indexA = proxyA.childIndex;\n    var indexB = proxyB.childIndex;\n    var bodyA = fixtureA.getBody();\n    var bodyB = fixtureB.getBody();\n    if (bodyA == bodyB) {\n        return;\n    }\n    var edge = bodyB.getContactList();\n    while (edge) {\n        if (edge.other == bodyA) {\n            var fA = edge.contact.getFixtureA();\n            var fB = edge.contact.getFixtureB();\n            var iA = edge.contact.getChildIndexA();\n            var iB = edge.contact.getChildIndexB();\n            if (fA == fixtureA && fB == fixtureB && iA == indexA && iB == indexB) {\n                return;\n            }\n            if (fA == fixtureB && fB == fixtureA && iA == indexB && iB == indexA) {\n                return;\n            }\n        }\n        edge = edge.next;\n    }\n    if (bodyB.shouldCollide(bodyA) == false) {\n        return;\n    }\n    if (fixtureB.shouldCollide(fixtureA) == false) {\n        return;\n    }\n    var contact = Contact.create(fixtureA, indexA, fixtureB, indexB);\n    if (contact == null) {\n        return;\n    }\n    contact.m_prev = null;\n    if (this.m_contactList != null) {\n        contact.m_next = this.m_contactList;\n        this.m_contactList.m_prev = contact;\n    }\n    this.m_contactList = contact;\n    ++this.m_contactCount;\n};\n\nWorld.prototype.updateContacts = function() {\n    var c, next_c = this.m_contactList;\n    while (c = next_c) {\n        next_c = c.getNext();\n        var fixtureA = c.getFixtureA();\n        var fixtureB = c.getFixtureB();\n        var indexA = c.getChildIndexA();\n        var indexB = c.getChildIndexB();\n        var bodyA = fixtureA.getBody();\n        var bodyB = fixtureB.getBody();\n        if (c.m_filterFlag) {\n            if (bodyB.shouldCollide(bodyA) == false) {\n                this.destroyContact(c);\n                continue;\n            }\n            if (fixtureB.shouldCollide(fixtureA) == false) {\n                this.destroyContact(c);\n                continue;\n            }\n            c.m_filterFlag = false;\n        }\n        var activeA = bodyA.isAwake() && !bodyA.isStatic();\n        var activeB = bodyB.isAwake() && !bodyB.isStatic();\n        if (activeA == false && activeB == false) {\n            continue;\n        }\n        var proxyIdA = fixtureA.m_proxies[indexA].proxyId;\n        var proxyIdB = fixtureB.m_proxies[indexB].proxyId;\n        var overlap = this.m_broadPhase.testOverlap(proxyIdA, proxyIdB);\n        if (overlap == false) {\n            this.destroyContact(c);\n            continue;\n        }\n        c.update(this);\n    }\n};\n\nWorld.prototype.destroyContact = function(contact) {\n    Contact.destroy(contact, this);\n    if (contact.m_prev) {\n        contact.m_prev.m_next = contact.m_next;\n    }\n    if (contact.m_next) {\n        contact.m_next.m_prev = contact.m_prev;\n    }\n    if (contact == this.m_contactList) {\n        this.m_contactList = contact.m_next;\n    }\n    --this.m_contactCount;\n};\n\nWorld.prototype._listeners = null;\n\nWorld.prototype.on = function(name, listener) {\n    if (typeof name !== \"string\" || typeof listener !== \"function\") {\n        return this;\n    }\n    if (!this._listeners) {\n        this._listeners = {};\n    }\n    if (!this._listeners[name]) {\n        this._listeners[name] = [];\n    }\n    this._listeners[name].push(listener);\n    return this;\n};\n\nWorld.prototype.off = function(name, listener) {\n    if (typeof name !== \"string\" || typeof listener !== \"function\") {\n        return this;\n    }\n    var listeners = this._listeners && this._listeners[name];\n    if (!listeners || !listeners.length) {\n        return this;\n    }\n    var index = listeners.indexOf(listener);\n    if (index >= 0) {\n        listeners.splice(index, 1);\n    }\n    return this;\n};\n\nWorld.prototype.publish = function(name, arg1, arg2, arg3) {\n    var listeners = this._listeners && this._listeners[name];\n    if (!listeners || !listeners.length) {\n        return 0;\n    }\n    for (var l = 0; l < listeners.length; l++) {\n        listeners[l].call(this, arg1, arg2, arg3);\n    }\n    return listeners.length;\n};\n\nWorld.prototype.beginContact = function(contact) {\n    this.publish(\"begin-contact\", contact);\n};\n\nWorld.prototype.endContact = function(contact) {\n    this.publish(\"end-contact\", contact);\n};\n\nWorld.prototype.preSolve = function(contact, oldManifold) {\n    this.publish(\"pre-solve\", contact, oldManifold);\n};\n\nWorld.prototype.postSolve = function(contact, impulse) {\n    this.publish(\"post-solve\", contact, impulse);\n};\n\n\n},{\"./Body\":2,\"./Contact\":3,\"./Solver\":9,\"./collision/BroadPhase\":12,\"./common/Vec2\":23,\"./util/Timer\":50,\"./util/common\":51,\"./util/options\":53}],11:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nvar Settings = require(\"../Settings\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nmodule.exports = AABB;\n\nfunction AABB(lower, upper) {\n    if (!(this instanceof AABB)) {\n        return new AABB(lower, upper);\n    }\n    this.lowerBound = Vec2.zero();\n    this.upperBound = Vec2.zero();\n    if (typeof lower === \"object\") {\n        this.lowerBound.set(lower);\n    }\n    if (typeof upper === \"object\") {\n        this.upperBound.set(upper);\n    }\n}\n\nAABB.prototype.isValid = function() {\n    return AABB.isValid(this);\n};\n\nAABB.isValid = function(aabb) {\n    var d = Vec2.sub(aabb.upperBound, aabb.lowerBound);\n    var valid = d.x >= 0 && d.y >= 0 && Vec2.isValid(aabb.lowerBound) && Vec2.isValid(aabb.upperBound);\n    return valid;\n};\n\nAABB.prototype.getCenter = function() {\n    return Vec2.neo((this.lowerBound.x + this.upperBound.x) * .5, (this.lowerBound.y + this.upperBound.y) * .5);\n};\n\nAABB.prototype.getExtents = function() {\n    return Vec2.neo((this.upperBound.x - this.lowerBound.x) * .5, (this.upperBound.y - this.lowerBound.y) * .5);\n};\n\nAABB.prototype.getPerimeter = function() {\n    return 2 * (this.upperBound.x - this.lowerBound.x + this.upperBound.y - this.lowerBound.y);\n};\n\nAABB.prototype.combine = function(a, b) {\n    b = b || this;\n    this.lowerBound.set(Math.min(a.lowerBound.x, b.lowerBound.x), Math.min(a.lowerBound.y, b.lowerBound.y));\n    this.upperBound.set(Math.max(a.upperBound.x, b.upperBound.x), Math.max(a.upperBound.y, b.upperBound.y));\n};\n\nAABB.prototype.combinePoints = function(a, b) {\n    this.lowerBound.set(Math.min(a.x, b.x), Math.min(a.y, b.y));\n    this.upperBound.set(Math.max(a.x, b.x), Math.max(a.y, b.y));\n};\n\nAABB.prototype.set = function(aabb) {\n    this.lowerBound.set(aabb.lowerBound.x, aabb.lowerBound.y);\n    this.upperBound.set(aabb.upperBound.x, aabb.upperBound.y);\n};\n\nAABB.prototype.contains = function(aabb) {\n    var result = true;\n    result = result && this.lowerBound.x <= aabb.lowerBound.x;\n    result = result && this.lowerBound.y <= aabb.lowerBound.y;\n    result = result && aabb.upperBound.x <= this.upperBound.x;\n    result = result && aabb.upperBound.y <= this.upperBound.y;\n    return result;\n};\n\nAABB.prototype.extend = function(value) {\n    AABB.extend(this, value);\n};\n\nAABB.extend = function(aabb, value) {\n    aabb.lowerBound.x -= value;\n    aabb.lowerBound.y -= value;\n    aabb.upperBound.x += value;\n    aabb.upperBound.y += value;\n};\n\nAABB.testOverlap = function(a, b) {\n    var d1x = b.lowerBound.x - a.upperBound.x;\n    var d2x = a.lowerBound.x - b.upperBound.x;\n    var d1y = b.lowerBound.y - a.upperBound.y;\n    var d2y = a.lowerBound.y - b.upperBound.y;\n    if (d1x > 0 || d1y > 0 || d2x > 0 || d2y > 0) {\n        return false;\n    }\n    return true;\n};\n\nAABB.areEqual = function(a, b) {\n    return Vec2.areEqual(a.lowerBound, b.lowerBound) && Vec2.areEqual(a.upperBound, b.upperBound);\n};\n\nAABB.diff = function(a, b) {\n    var wD = Math.max(0, Math.min(a.upperBound.x, b.upperBound.x) - Math.max(b.lowerBound.x, a.lowerBound.x));\n    var hD = Math.max(0, Math.min(a.upperBound.y, b.upperBound.y) - Math.max(b.lowerBound.y, a.lowerBound.y));\n    var wA = a.upperBound.x - a.lowerBound.x;\n    var hA = a.upperBound.y - a.lowerBound.y;\n    var hB = b.upperBound.y - b.lowerBound.y;\n    var hB = b.upperBound.y - b.lowerBound.y;\n    return wA * hA + wB * hB - wD * hD;\n};\n\nAABB.prototype.rayCast = function(output, input) {\n    var tmin = -Infinity;\n    var tmax = Infinity;\n    var p = input.p1;\n    var d = Vec2.sub(input.p2, input.p1);\n    var absD = Vec2.abs(d);\n    var normal = Vec2.zero();\n    for (var f = \"x\"; f !== null; f = f === \"x\" ? \"y\" : null) {\n        if (absD.x < Math.EPSILON) {\n            if (p[f] < this.lowerBound[f] || this.upperBound[f] < p[f]) {\n                return false;\n            }\n        } else {\n            var inv_d = 1 / d[f];\n            var t1 = (this.lowerBound[f] - p[f]) * inv_d;\n            var t2 = (this.upperBound[f] - p[f]) * inv_d;\n            var s = -1;\n            if (t1 > t2) {\n                var temp = t1;\n                t1 = t2, t2 = temp;\n                s = 1;\n            }\n            if (t1 > tmin) {\n                normal.setZero();\n                normal[f] = s;\n                tmin = t1;\n            }\n            tmax = Math.min(tmax, t2);\n            if (tmin > tmax) {\n                return false;\n            }\n        }\n    }\n    if (tmin < 0 || input.maxFraction < tmin) {\n        return false;\n    }\n    output.fraction = tmin;\n    output.normal = normal;\n    return true;\n};\n\nAABB.prototype.toString = function() {\n    return JSON.stringify(this);\n};\n\n\n},{\"../Settings\":7,\"../common/Math\":18,\"../common/Vec2\":23}],12:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nvar Settings = require(\"../Settings\");\n\nvar common = require(\"../util/common\");\n\nvar Math = require(\"../common/Math\");\n\nvar AABB = require(\"./AABB\");\n\nvar DynamicTree = require(\"./DynamicTree\");\n\nmodule.exports = BroadPhase;\n\nfunction BroadPhase() {\n    this.m_tree = new DynamicTree();\n    this.m_proxyCount = 0;\n    this.m_moveBuffer = [];\n    this.queryCallback = this.queryCallback.bind(this);\n}\n\nBroadPhase.prototype.getUserData = function(proxyId) {\n    return this.m_tree.getUserData(proxyId);\n};\n\nBroadPhase.prototype.testOverlap = function(proxyIdA, proxyIdB) {\n    var aabbA = this.m_tree.getFatAABB(proxyIdA);\n    var aabbB = this.m_tree.getFatAABB(proxyIdB);\n    return AABB.testOverlap(aabbA, aabbB);\n};\n\nBroadPhase.prototype.getFatAABB = function(proxyId) {\n    return this.m_tree.getFatAABB(proxyId);\n};\n\nBroadPhase.prototype.getProxyCount = function() {\n    return this.m_proxyCount;\n};\n\nBroadPhase.prototype.getTreeHeight = function() {\n    return this.m_tree.getHeight();\n};\n\nBroadPhase.prototype.getTreeBalance = function() {\n    return this.m_tree.getMaxBalance();\n};\n\nBroadPhase.prototype.getTreeQuality = function() {\n    return this.m_tree.getAreaRatio();\n};\n\nBroadPhase.prototype.query = function(aabb, queryCallback) {\n    this.m_tree.query(aabb, queryCallback);\n};\n\nBroadPhase.prototype.rayCast = function(input, rayCastCallback) {\n    this.m_tree.rayCast(input, rayCastCallback);\n};\n\nBroadPhase.prototype.shiftOrigin = function(newOrigin) {\n    this.m_tree.shiftOrigin(newOrigin);\n};\n\nBroadPhase.prototype.createProxy = function(aabb, userData) {\n    ASSERT && common.assert(AABB.isValid(aabb));\n    var proxyId = this.m_tree.createProxy(aabb, userData);\n    this.m_proxyCount++;\n    this.bufferMove(proxyId);\n    return proxyId;\n};\n\nBroadPhase.prototype.destroyProxy = function(proxyId) {\n    this.unbufferMove(proxyId);\n    this.m_proxyCount--;\n    this.m_tree.destroyProxy(proxyId);\n};\n\nBroadPhase.prototype.moveProxy = function(proxyId, aabb, displacement) {\n    ASSERT && common.assert(AABB.isValid(aabb));\n    var changed = this.m_tree.moveProxy(proxyId, aabb, displacement);\n    if (changed) {\n        this.bufferMove(proxyId);\n    }\n};\n\nBroadPhase.prototype.touchProxy = function(proxyId) {\n    this.bufferMove(proxyId);\n};\n\nBroadPhase.prototype.bufferMove = function(proxyId) {\n    this.m_moveBuffer.push(proxyId);\n};\n\nBroadPhase.prototype.unbufferMove = function(proxyId) {\n    for (var i = 0; i < this.m_moveBuffer.length; ++i) {\n        if (this.m_moveBuffer[i] == proxyId) {\n            this.m_moveBuffer[i] = null;\n        }\n    }\n};\n\nBroadPhase.prototype.updatePairs = function(addPairCallback) {\n    ASSERT && common.assert(typeof addPairCallback === \"function\");\n    this.m_callback = addPairCallback;\n    while (this.m_moveBuffer.length > 0) {\n        this.m_queryProxyId = this.m_moveBuffer.pop();\n        if (this.m_queryProxyId === null) {\n            continue;\n        }\n        var fatAABB = this.m_tree.getFatAABB(this.m_queryProxyId);\n        this.m_tree.query(fatAABB, this.queryCallback);\n    }\n};\n\nBroadPhase.prototype.queryCallback = function(proxyId) {\n    if (proxyId == this.m_queryProxyId) {\n        return true;\n    }\n    var proxyIdA = Math.min(proxyId, this.m_queryProxyId);\n    var proxyIdB = Math.max(proxyId, this.m_queryProxyId);\n    var userDataA = this.m_tree.getUserData(proxyIdA);\n    var userDataB = this.m_tree.getUserData(proxyIdB);\n    this.m_callback(userDataA, userDataB);\n    return true;\n};\n\n\n},{\"../Settings\":7,\"../common/Math\":18,\"../util/common\":51,\"./AABB\":11,\"./DynamicTree\":14}],13:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Distance;\n\nmodule.exports.Input = DistanceInput;\n\nmodule.exports.Output = DistanceOutput;\n\nmodule.exports.Proxy = DistanceProxy;\n\nmodule.exports.Cache = SimplexCache;\n\nvar Settings = require(\"../Settings\");\n\nvar common = require(\"../util/common\");\n\nvar Timer = require(\"../util/Timer\");\n\nvar stats = require(\"../common/stats\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Vec3 = require(\"../common/Vec3\");\n\nvar Mat22 = require(\"../common/Mat22\");\n\nvar Mat33 = require(\"../common/Mat33\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Sweep = require(\"../common/Sweep\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Velocity = require(\"../common/Velocity\");\n\nvar Position = require(\"../common/Position\");\n\nstats.gjkCalls = 0;\n\nstats.gjkIters = 0;\n\nstats.gjkMaxIters = 0;\n\nfunction DistanceInput() {\n    this.proxyA = new DistanceProxy();\n    this.proxyB = new DistanceProxy();\n    this.transformA = null;\n    this.transformB = null;\n    this.useRadii = false;\n}\n\nfunction DistanceOutput() {\n    this.pointA = Vec2.zero();\n    this.pointB = Vec2.zero();\n    this.distance;\n    this.iterations;\n}\n\nfunction SimplexCache() {\n    this.metric = 0;\n    this.indexA = [];\n    this.indexB = [];\n    this.count = 0;\n}\n\nfunction Distance(output, cache, input) {\n    ++stats.gjkCalls;\n    var proxyA = input.proxyA;\n    var proxyB = input.proxyB;\n    var xfA = input.transformA;\n    var xfB = input.transformB;\n    DEBUG && common.debug(\"cahce:\", cache.metric, cache.count);\n    DEBUG && common.debug(\"proxyA:\", proxyA.m_count);\n    DEBUG && common.debug(\"proxyB:\", proxyB.m_count);\n    DEBUG && common.debug(\"xfA:\", xfA.p.x, xfA.p.y, xfA.q.c, xfA.q.s);\n    DEBUG && common.debug(\"xfB:\", xfB.p.x, xfB.p.y, xfB.q.c, xfB.q.s);\n    var simplex = new Simplex();\n    simplex.readCache(cache, proxyA, xfA, proxyB, xfB);\n    DEBUG && common.debug(\"cache\", simplex.print());\n    var vertices = simplex.m_v;\n    var k_maxIters = Settings.maxDistnceIterations;\n    var saveA = [];\n    var saveB = [];\n    var saveCount = 0;\n    var distanceSqr1 = Infinity;\n    var distanceSqr2 = Infinity;\n    var iter = 0;\n    while (iter < k_maxIters) {\n        saveCount = simplex.m_count;\n        for (var i = 0; i < saveCount; ++i) {\n            saveA[i] = vertices[i].indexA;\n            saveB[i] = vertices[i].indexB;\n        }\n        simplex.solve();\n        if (simplex.m_count == 3) {\n            break;\n        }\n        var p = simplex.getClosestPoint();\n        distanceSqr2 = p.lengthSquared();\n        if (distanceSqr2 >= distanceSqr1) {}\n        distanceSqr1 = distanceSqr2;\n        var d = simplex.getSearchDirection();\n        if (d.lengthSquared() < Math.EPSILON * Math.EPSILON) {\n            break;\n        }\n        var vertex = vertices[simplex.m_count];\n        vertex.indexA = proxyA.getSupport(Rot.mulT(xfA.q, Vec2.neg(d)));\n        vertex.wA = Transform.mul(xfA, proxyA.getVertex(vertex.indexA));\n        vertex.indexB = proxyB.getSupport(Rot.mulT(xfB.q, d));\n        vertex.wB = Transform.mul(xfB, proxyB.getVertex(vertex.indexB));\n        vertex.w = Vec2.sub(vertex.wB, vertex.wA);\n        ++iter;\n        ++stats.gjkIters;\n        var duplicate = false;\n        for (var i = 0; i < saveCount; ++i) {\n            if (vertex.indexA == saveA[i] && vertex.indexB == saveB[i]) {\n                duplicate = true;\n                break;\n            }\n        }\n        if (duplicate) {\n            break;\n        }\n        ++simplex.m_count;\n    }\n    stats.gjkMaxIters = Math.max(stats.gjkMaxIters, iter);\n    simplex.getWitnessPoints(output.pointA, output.pointB);\n    output.distance = Vec2.distance(output.pointA, output.pointB);\n    output.iterations = iter;\n    DEBUG && common.debug(\"Distance:\", output.distance, output.pointA.x, output.pointA.y, output.pointB.x, output.pointB.y);\n    simplex.writeCache(cache);\n    if (input.useRadii) {\n        var rA = proxyA.m_radius;\n        var rB = proxyB.m_radius;\n        if (output.distance > rA + rB && output.distance > Math.EPSILON) {\n            output.distance -= rA + rB;\n            var normal = Vec2.sub(output.pointB, output.pointA);\n            normal.normalize();\n            output.pointA.wAdd(rA, normal);\n            output.pointB.wSub(rB, normal);\n        } else {\n            var p = Vec2.mid(output.pointA, output.pointB);\n            output.pointA.set(p);\n            output.pointB.set(p);\n            output.distance = 0;\n        }\n    }\n}\n\nfunction DistanceProxy() {\n    this.m_buffer = [];\n    this.m_vertices = [];\n    this.m_count = 0;\n    this.m_radius = 0;\n}\n\nDistanceProxy.prototype.getVertexCount = function() {\n    return this.m_count;\n};\n\nDistanceProxy.prototype.getVertex = function(index) {\n    ASSERT && common.assert(0 <= index && index < this.m_count);\n    return this.m_vertices[index];\n};\n\nDistanceProxy.prototype.getSupport = function(d) {\n    var bestIndex = 0;\n    var bestValue = Vec2.dot(this.m_vertices[0], d);\n    for (var i = 0; i < this.m_count; ++i) {\n        var value = Vec2.dot(this.m_vertices[i], d);\n        if (value > bestValue) {\n            bestIndex = i;\n            bestValue = value;\n        }\n    }\n    return bestIndex;\n};\n\nDistanceProxy.prototype.getSupportVertex = function(d) {\n    return this.m_vertices[this.getSupport(d)];\n};\n\nDistanceProxy.prototype.set = function(shape, index) {\n    ASSERT && common.assert(typeof shape.computeDistanceProxy === \"function\");\n    shape.computeDistanceProxy(this, index);\n};\n\nfunction SimplexVertex() {\n    this.indexA;\n    this.indexB;\n    this.wA = Vec2.zero();\n    this.wB = Vec2.zero();\n    this.w = Vec2.zero();\n    this.a;\n}\n\nSimplexVertex.prototype.set = function(v) {\n    this.indexA = v.indexA;\n    this.indexB = v.indexB;\n    this.wA = Vec2.clone(v.wA);\n    this.wB = Vec2.clone(v.wB);\n    this.w = Vec2.clone(v.w);\n    this.a = v.a;\n};\n\nfunction Simplex() {\n    this.m_v1 = new SimplexVertex();\n    this.m_v2 = new SimplexVertex();\n    this.m_v3 = new SimplexVertex();\n    this.m_v = [ this.m_v1, this.m_v2, this.m_v3 ];\n    this.m_count;\n}\n\nSimplex.prototype.print = function() {\n    if (this.m_count == 3) {\n        return [ \"+\" + this.m_count, this.m_v1.a, this.m_v1.wA.x, this.m_v1.wA.y, this.m_v1.wB.x, this.m_v1.wB.y, this.m_v2.a, this.m_v2.wA.x, this.m_v2.wA.y, this.m_v2.wB.x, this.m_v2.wB.y, this.m_v3.a, this.m_v3.wA.x, this.m_v3.wA.y, this.m_v3.wB.x, this.m_v3.wB.y ].toString();\n    } else if (this.m_count == 2) {\n        return [ \"+\" + this.m_count, this.m_v1.a, this.m_v1.wA.x, this.m_v1.wA.y, this.m_v1.wB.x, this.m_v1.wB.y, this.m_v2.a, this.m_v2.wA.x, this.m_v2.wA.y, this.m_v2.wB.x, this.m_v2.wB.y ].toString();\n    } else if (this.m_count == 1) {\n        return [ \"+\" + this.m_count, this.m_v1.a, this.m_v1.wA.x, this.m_v1.wA.y, this.m_v1.wB.x, this.m_v1.wB.y ].toString();\n    } else {\n        return \"+\" + this.m_count;\n    }\n};\n\nSimplex.prototype.readCache = function(cache, proxyA, transformA, proxyB, transformB) {\n    ASSERT && common.assert(cache.count <= 3);\n    this.m_count = cache.count;\n    for (var i = 0; i < this.m_count; ++i) {\n        var v = this.m_v[i];\n        v.indexA = cache.indexA[i];\n        v.indexB = cache.indexB[i];\n        var wALocal = proxyA.getVertex(v.indexA);\n        var wBLocal = proxyB.getVertex(v.indexB);\n        v.wA = Transform.mul(transformA, wALocal);\n        v.wB = Transform.mul(transformB, wBLocal);\n        v.w = Vec2.sub(v.wB, v.wA);\n        v.a = 0;\n    }\n    if (this.m_count > 1) {\n        var metric1 = cache.metric;\n        var metric2 = this.getMetric();\n        if (metric2 < .5 * metric1 || 2 * metric1 < metric2 || metric2 < Math.EPSILON) {\n            this.m_count = 0;\n        }\n    }\n    if (this.m_count == 0) {\n        var v = this.m_v[0];\n        v.indexA = 0;\n        v.indexB = 0;\n        var wALocal = proxyA.getVertex(0);\n        var wBLocal = proxyB.getVertex(0);\n        v.wA = Transform.mul(transformA, wALocal);\n        v.wB = Transform.mul(transformB, wBLocal);\n        v.w = Vec2.sub(v.wB, v.wA);\n        v.a = 1;\n        this.m_count = 1;\n    }\n};\n\nSimplex.prototype.writeCache = function(cache) {\n    cache.metric = this.getMetric();\n    cache.count = this.m_count;\n    for (var i = 0; i < this.m_count; ++i) {\n        cache.indexA[i] = this.m_v[i].indexA;\n        cache.indexB[i] = this.m_v[i].indexB;\n    }\n};\n\nSimplex.prototype.getSearchDirection = function() {\n    switch (this.m_count) {\n      case 1:\n        return Vec2.neg(this.m_v1.w);\n\n      case 2:\n        {\n            var e12 = Vec2.sub(this.m_v2.w, this.m_v1.w);\n            var sgn = Vec2.cross(e12, Vec2.neg(this.m_v1.w));\n            if (sgn > 0) {\n                return Vec2.cross(1, e12);\n            } else {\n                return Vec2.cross(e12, 1);\n            }\n        }\n\n      default:\n        ASSERT && common.assert(false);\n        return Vec2.zero();\n    }\n};\n\nSimplex.prototype.getClosestPoint = function() {\n    switch (this.m_count) {\n      case 0:\n        ASSERT && common.assert(false);\n        return Vec2.zero();\n\n      case 1:\n        return Vec2.clone(this.m_v1.w);\n\n      case 2:\n        return Vec2.wAdd(this.m_v1.a, this.m_v1.w, this.m_v2.a, this.m_v2.w);\n\n      case 3:\n        return Vec2.zero();\n\n      default:\n        ASSERT && common.assert(false);\n        return Vec2.zero();\n    }\n};\n\nSimplex.prototype.getWitnessPoints = function(pA, pB) {\n    switch (this.m_count) {\n      case 0:\n        ASSERT && common.assert(false);\n        break;\n\n      case 1:\n        DEBUG && common.debug(\"case1\", this.print());\n        pA.set(this.m_v1.wA);\n        pB.set(this.m_v1.wB);\n        break;\n\n      case 2:\n        DEBUG && common.debug(\"case2\", this.print());\n        pA.wSet(this.m_v1.a, this.m_v1.wA, this.m_v2.a, this.m_v2.wA);\n        pB.wSet(this.m_v1.a, this.m_v1.wB, this.m_v2.a, this.m_v2.wB);\n        break;\n\n      case 3:\n        DEBUG && common.debug(\"case3\", this.print());\n        pA.wSet(this.m_v1.a, this.m_v1.wA, this.m_v2.a, this.m_v2.wA);\n        pA.wAdd(this.m_v3.a, this.m_v3.wA);\n        pB.set(pA);\n        break;\n\n      default:\n        ASSERT && common.assert(false);\n        break;\n    }\n};\n\nSimplex.prototype.getMetric = function() {\n    switch (this.m_count) {\n      case 0:\n        ASSERT && common.assert(false);\n        return 0;\n\n      case 1:\n        return 0;\n\n      case 2:\n        return Vec2.distance(this.m_v1.w, this.m_v2.w);\n\n      case 3:\n        return Vec2.cross(Vec2.sub(this.m_v2.w, this.m_v1.w), Vec2.sub(this.m_v3.w, this.m_v1.w));\n\n      default:\n        ASSERT && common.assert(false);\n        return 0;\n    }\n};\n\nSimplex.prototype.solve = function() {\n    switch (this.m_count) {\n      case 1:\n        break;\n\n      case 2:\n        this.solve2();\n        break;\n\n      case 3:\n        this.solve3();\n        break;\n\n      default:\n        ASSERT && common.assert(false);\n    }\n};\n\nSimplex.prototype.solve2 = function() {\n    var w1 = this.m_v1.w;\n    var w2 = this.m_v2.w;\n    var e12 = Vec2.sub(w2, w1);\n    var d12_2 = -Vec2.dot(w1, e12);\n    if (d12_2 <= 0) {\n        this.m_v1.a = 1;\n        this.m_count = 1;\n        return;\n    }\n    var d12_1 = Vec2.dot(w2, e12);\n    if (d12_1 <= 0) {\n        this.m_v2.a = 1;\n        this.m_count = 1;\n        this.m_v1.set(this.m_v2);\n        return;\n    }\n    var inv_d12 = 1 / (d12_1 + d12_2);\n    this.m_v1.a = d12_1 * inv_d12;\n    this.m_v2.a = d12_2 * inv_d12;\n    this.m_count = 2;\n};\n\nSimplex.prototype.solve3 = function() {\n    var w1 = this.m_v1.w;\n    var w2 = this.m_v2.w;\n    var w3 = this.m_v3.w;\n    var e12 = Vec2.sub(w2, w1);\n    var w1e12 = Vec2.dot(w1, e12);\n    var w2e12 = Vec2.dot(w2, e12);\n    var d12_1 = w2e12;\n    var d12_2 = -w1e12;\n    var e13 = Vec2.sub(w3, w1);\n    var w1e13 = Vec2.dot(w1, e13);\n    var w3e13 = Vec2.dot(w3, e13);\n    var d13_1 = w3e13;\n    var d13_2 = -w1e13;\n    var e23 = Vec2.sub(w3, w2);\n    var w2e23 = Vec2.dot(w2, e23);\n    var w3e23 = Vec2.dot(w3, e23);\n    var d23_1 = w3e23;\n    var d23_2 = -w2e23;\n    var n123 = Vec2.cross(e12, e13);\n    var d123_1 = n123 * Vec2.cross(w2, w3);\n    var d123_2 = n123 * Vec2.cross(w3, w1);\n    var d123_3 = n123 * Vec2.cross(w1, w2);\n    if (d12_2 <= 0 && d13_2 <= 0) {\n        this.m_v1.a = 1;\n        this.m_count = 1;\n        return;\n    }\n    if (d12_1 > 0 && d12_2 > 0 && d123_3 <= 0) {\n        var inv_d12 = 1 / (d12_1 + d12_2);\n        this.m_v1.a = d12_1 * inv_d12;\n        this.m_v2.a = d12_2 * inv_d12;\n        this.m_count = 2;\n        return;\n    }\n    if (d13_1 > 0 && d13_2 > 0 && d123_2 <= 0) {\n        var inv_d13 = 1 / (d13_1 + d13_2);\n        this.m_v1.a = d13_1 * inv_d13;\n        this.m_v3.a = d13_2 * inv_d13;\n        this.m_count = 2;\n        this.m_v2.set(this.m_v3);\n        return;\n    }\n    if (d12_1 <= 0 && d23_2 <= 0) {\n        this.m_v2.a = 1;\n        this.m_count = 1;\n        this.m_v1.set(this.m_v2);\n        return;\n    }\n    if (d13_1 <= 0 && d23_1 <= 0) {\n        this.m_v3.a = 1;\n        this.m_count = 1;\n        this.m_v1.set(this.m_v3);\n        return;\n    }\n    if (d23_1 > 0 && d23_2 > 0 && d123_1 <= 0) {\n        var inv_d23 = 1 / (d23_1 + d23_2);\n        this.m_v2.a = d23_1 * inv_d23;\n        this.m_v3.a = d23_2 * inv_d23;\n        this.m_count = 2;\n        this.m_v1.set(this.m_v3);\n        return;\n    }\n    var inv_d123 = 1 / (d123_1 + d123_2 + d123_3);\n    this.m_v1.a = d123_1 * inv_d123;\n    this.m_v2.a = d123_2 * inv_d123;\n    this.m_v3.a = d123_3 * inv_d123;\n    this.m_count = 3;\n};\n\nDistance.testOverlap = function(shapeA, indexA, shapeB, indexB, xfA, xfB) {\n    var input = new DistanceInput();\n    input.proxyA.set(shapeA, indexA);\n    input.proxyB.set(shapeB, indexB);\n    input.transformA = xfA;\n    input.transformB = xfB;\n    input.useRadii = true;\n    var cache = new SimplexCache();\n    var output = new DistanceOutput();\n    Distance(output, cache, input);\n    return output.distance < 10 * Math.EPSILON;\n};\n\n\n},{\"../Settings\":7,\"../common/Mat22\":16,\"../common/Mat33\":17,\"../common/Math\":18,\"../common/Position\":19,\"../common/Rot\":20,\"../common/Sweep\":21,\"../common/Transform\":22,\"../common/Vec2\":23,\"../common/Vec3\":24,\"../common/Velocity\":25,\"../common/stats\":26,\"../util/Timer\":50,\"../util/common\":51}],14:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nvar Settings = require(\"../Settings\");\n\nvar common = require(\"../util/common\");\n\nvar Pool = require(\"../util/Pool\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Math = require(\"../common/Math\");\n\nvar AABB = require(\"./AABB\");\n\nmodule.exports = DynamicTree;\n\nfunction TreeNode(id) {\n    this.id = id;\n    this.aabb = new AABB();\n    this.userData = null;\n    this.parent = null;\n    this.child1 = null;\n    this.child2 = null;\n    this.height = -1;\n    this.toString = function() {\n        return this.id + \": \" + this.userData;\n    };\n}\n\nTreeNode.prototype.isLeaf = function() {\n    return this.child1 == null;\n};\n\nfunction DynamicTree() {\n    this.m_root = null;\n    this.m_nodes = {};\n    this.m_lastProxyId = 0;\n    this.m_pool = new Pool({\n        create: function() {\n            return new TreeNode();\n        }\n    });\n}\n\nDynamicTree.prototype.getUserData = function(id) {\n    var node = this.m_nodes[id];\n    ASSERT && common.assert(!!node);\n    return node.userData;\n};\n\nDynamicTree.prototype.getFatAABB = function(id) {\n    var node = this.m_nodes[id];\n    ASSERT && common.assert(!!node);\n    return node.aabb;\n};\n\nDynamicTree.prototype.allocateNode = function() {\n    var node = this.m_pool.allocate();\n    node.id = ++this.m_lastProxyId;\n    node.userData = null;\n    node.parent = null;\n    node.child1 = null;\n    node.child2 = null;\n    node.height = -1;\n    this.m_nodes[node.id] = node;\n    return node;\n};\n\nDynamicTree.prototype.freeNode = function(node) {\n    this.m_pool.release(node);\n    node.height = -1;\n    delete this.m_nodes[node.id];\n};\n\nDynamicTree.prototype.createProxy = function(aabb, userData) {\n    ASSERT && common.assert(AABB.isValid(aabb));\n    var node = this.allocateNode();\n    node.aabb.set(aabb);\n    AABB.extend(node.aabb, Settings.aabbExtension);\n    node.userData = userData;\n    node.height = 0;\n    this.insertLeaf(node);\n    return node.id;\n};\n\nDynamicTree.prototype.destroyProxy = function(id) {\n    var node = this.m_nodes[id];\n    ASSERT && common.assert(!!node);\n    ASSERT && common.assert(node.isLeaf());\n    this.removeLeaf(node);\n    this.freeNode(node);\n};\n\nDynamicTree.prototype.moveProxy = function(id, aabb, d) {\n    ASSERT && common.assert(AABB.isValid(aabb));\n    ASSERT && common.assert(!d || Vec2.isValid(d));\n    var node = this.m_nodes[id];\n    ASSERT && common.assert(!!node);\n    ASSERT && common.assert(node.isLeaf());\n    if (node.aabb.contains(aabb)) {\n        return false;\n    }\n    this.removeLeaf(node);\n    node.aabb.set(aabb);\n    aabb = node.aabb;\n    AABB.extend(aabb, Settings.aabbExtension);\n    if (d.x < 0) {\n        aabb.lowerBound.x += d.x * Settings.aabbMultiplier;\n    } else {\n        aabb.upperBound.x += d.x * Settings.aabbMultiplier;\n    }\n    if (d.y < 0) {\n        aabb.lowerBound.y += d.y * Settings.aabbMultiplier;\n    } else {\n        aabb.upperBound.y += d.y * Settings.aabbMultiplier;\n    }\n    this.insertLeaf(node);\n    return true;\n};\n\nDynamicTree.prototype.insertLeaf = function(leaf) {\n    ASSERT && common.assert(AABB.isValid(leaf.aabb));\n    if (this.m_root == null) {\n        this.m_root = leaf;\n        this.m_root.parent = null;\n        return;\n    }\n    var leafAABB = leaf.aabb;\n    var index = this.m_root;\n    while (index.isLeaf() == false) {\n        var child1 = index.child1;\n        var child2 = index.child2;\n        var area = index.aabb.getPerimeter();\n        var combinedAABB = new AABB();\n        combinedAABB.combine(index.aabb, leafAABB);\n        var combinedArea = combinedAABB.getPerimeter();\n        var cost = 2 * combinedArea;\n        var inheritanceCost = 2 * (combinedArea - area);\n        var cost1;\n        if (child1.isLeaf()) {\n            var aabb = new AABB();\n            aabb.combine(leafAABB, child1.aabb);\n            cost1 = aabb.getPerimeter() + inheritanceCost;\n        } else {\n            var aabb = new AABB();\n            aabb.combine(leafAABB, child1.aabb);\n            var oldArea = child1.aabb.getPerimeter();\n            var newArea = aabb.getPerimeter();\n            cost1 = newArea - oldArea + inheritanceCost;\n        }\n        var cost2;\n        if (child2.isLeaf()) {\n            var aabb = new AABB();\n            aabb.combine(leafAABB, child2.aabb);\n            cost2 = aabb.getPerimeter() + inheritanceCost;\n        } else {\n            var aabb = new AABB();\n            aabb.combine(leafAABB, child2.aabb);\n            var oldArea = child2.aabb.getPerimeter();\n            var newArea = aabb.getPerimeter();\n            cost2 = newArea - oldArea + inheritanceCost;\n        }\n        if (cost < cost1 && cost < cost2) {\n            break;\n        }\n        if (cost1 < cost2) {\n            index = child1;\n        } else {\n            index = child2;\n        }\n    }\n    var sibling = index;\n    var oldParent = sibling.parent;\n    var newParent = this.allocateNode();\n    newParent.parent = oldParent;\n    newParent.userData = null;\n    newParent.aabb.combine(leafAABB, sibling.aabb);\n    newParent.height = sibling.height + 1;\n    if (oldParent != null) {\n        if (oldParent.child1 == sibling) {\n            oldParent.child1 = newParent;\n        } else {\n            oldParent.child2 = newParent;\n        }\n        newParent.child1 = sibling;\n        newParent.child2 = leaf;\n        sibling.parent = newParent;\n        leaf.parent = newParent;\n    } else {\n        newParent.child1 = sibling;\n        newParent.child2 = leaf;\n        sibling.parent = newParent;\n        leaf.parent = newParent;\n        this.m_root = newParent;\n    }\n    index = leaf.parent;\n    while (index != null) {\n        index = this.balance(index);\n        var child1 = index.child1;\n        var child2 = index.child2;\n        ASSERT && common.assert(child1 != null);\n        ASSERT && common.assert(child2 != null);\n        index.height = 1 + Math.max(child1.height, child2.height);\n        index.aabb.combine(child1.aabb, child2.aabb);\n        index = index.parent;\n    }\n};\n\nDynamicTree.prototype.removeLeaf = function(leaf) {\n    if (leaf == this.m_root) {\n        this.m_root = null;\n        return;\n    }\n    var parent = leaf.parent;\n    var grandParent = parent.parent;\n    var sibling;\n    if (parent.child1 == leaf) {\n        sibling = parent.child2;\n    } else {\n        sibling = parent.child1;\n    }\n    if (grandParent != null) {\n        if (grandParent.child1 == parent) {\n            grandParent.child1 = sibling;\n        } else {\n            grandParent.child2 = sibling;\n        }\n        sibling.parent = grandParent;\n        this.freeNode(parent);\n        var index = grandParent;\n        while (index != null) {\n            index = this.balance(index);\n            var child1 = index.child1;\n            var child2 = index.child2;\n            index.aabb.combine(child1.aabb, child2.aabb);\n            index.height = 1 + Math.max(child1.height, child2.height);\n            index = index.parent;\n        }\n    } else {\n        this.m_root = sibling;\n        sibling.parent = null;\n        this.freeNode(parent);\n    }\n};\n\nDynamicTree.prototype.balance = function(iA) {\n    ASSERT && common.assert(iA != null);\n    var A = iA;\n    if (A.isLeaf() || A.height < 2) {\n        return iA;\n    }\n    var B = A.child1;\n    var C = A.child2;\n    var balance = C.height - B.height;\n    if (balance > 1) {\n        var F = C.child1;\n        var G = C.child2;\n        C.child1 = A;\n        C.parent = A.parent;\n        A.parent = C;\n        if (C.parent != null) {\n            if (C.parent.child1 == iA) {\n                C.parent.child1 = C;\n            } else {\n                C.parent.child2 = C;\n            }\n        } else {\n            this.m_root = C;\n        }\n        if (F.height > G.height) {\n            C.child2 = F;\n            A.child2 = G;\n            G.parent = A;\n            A.aabb.combine(B.aabb, G.aabb);\n            C.aabb.combine(A.aabb, F.aabb);\n            A.height = 1 + Math.max(B.height, G.height);\n            C.height = 1 + Math.max(A.height, F.height);\n        } else {\n            C.child2 = G;\n            A.child2 = F;\n            F.parent = A;\n            A.aabb.combine(B.aabb, F.aabb);\n            C.aabb.combine(A.aabb, G.aabb);\n            A.height = 1 + Math.max(B.height, F.height);\n            C.height = 1 + Math.max(A.height, G.height);\n        }\n        return C;\n    }\n    if (balance < -1) {\n        var D = B.child1;\n        var E = B.child2;\n        B.child1 = A;\n        B.parent = A.parent;\n        A.parent = B;\n        if (B.parent != null) {\n            if (B.parent.child1 == A) {\n                B.parent.child1 = B;\n            } else {\n                B.parent.child2 = B;\n            }\n        } else {\n            this.m_root = B;\n        }\n        if (D.height > E.height) {\n            B.child2 = D;\n            A.child1 = E;\n            E.parent = A;\n            A.aabb.combine(C.aabb, E.aabb);\n            B.aabb.combine(A.aabb, D.aabb);\n            A.height = 1 + Math.max(C.height, E.height);\n            B.height = 1 + Math.max(A.height, D.height);\n        } else {\n            B.child2 = E;\n            A.child1 = D;\n            D.parent = A;\n            A.aabb.combine(C.aabb, D.aabb);\n            B.aabb.combine(A.aabb, E.aabb);\n            A.height = 1 + Math.max(C.height, D.height);\n            B.height = 1 + Math.max(A.height, E.height);\n        }\n        return B;\n    }\n    return A;\n};\n\nDynamicTree.prototype.getHeight = function() {\n    if (this.m_root == null) {\n        return 0;\n    }\n    return this.m_root.height;\n};\n\nDynamicTree.prototype.getAreaRatio = function() {\n    if (this.m_root == null) {\n        return 0;\n    }\n    var root = this.m_root;\n    var rootArea = root.aabb.getPerimeter();\n    var totalArea = 0;\n    var node, it = iteratorPool.allocate().preorder();\n    while (node = it.next()) {\n        if (node.height < 0) {\n            continue;\n        }\n        totalArea += node.aabb.getPerimeter();\n    }\n    iteratorPool.release(it);\n    return totalArea / rootArea;\n};\n\nDynamicTree.prototype.computeHeight = function(id) {\n    var node;\n    if (typeof id !== \"undefined\") {\n        node = this.m_nodes[id];\n    } else {\n        node = this.m_root;\n    }\n    if (node.isLeaf()) {\n        return 0;\n    }\n    var height1 = ComputeHeight(node.child1);\n    var height2 = ComputeHeight(node.child2);\n    return 1 + Math.max(height1, height2);\n};\n\nDynamicTree.prototype.validateStructure = function(node) {\n    if (node == null) {\n        return;\n    }\n    if (node == this.m_root) {\n        ASSERT && common.assert(node.parent == null);\n    }\n    var child1 = node.child1;\n    var child2 = node.child2;\n    if (node.isLeaf()) {\n        ASSERT && common.assert(child1 == null);\n        ASSERT && common.assert(child2 == null);\n        ASSERT && common.assert(node.height == 0);\n        return;\n    }\n    ASSERT && common.assert(child1.parent == node);\n    ASSERT && common.assert(child2.parent == node);\n    this.validateStructure(child1);\n    this.validateStructure(child2);\n};\n\nDynamicTree.prototype.validateMetrics = function(node) {\n    if (node == null) {\n        return;\n    }\n    var child1 = node.child1;\n    var child2 = node.child2;\n    if (node.isLeaf()) {\n        ASSERT && common.assert(child1 == null);\n        ASSERT && common.assert(child2 == null);\n        ASSERT && common.assert(node.height == 0);\n        return;\n    }\n    var height1 = this.m_nodes[child1].height;\n    var height2 = this.m_nodes[child2].height;\n    var height = 1 + Math.max(height1, height2);\n    ASSERT && common.assert(node.height == height);\n    var aabb = new AABB();\n    aabb.combine(child1.aabb, child2.aabb);\n    ASSERT && common.assert(AABB.areEqual(aabb, node.aabb));\n    this.validateMetrics(child1);\n    this.validateMetrics(child2);\n};\n\nDynamicTree.prototype.validate = function() {\n    ValidateStructure(this.m_root);\n    ValidateMetrics(this.m_root);\n    ASSERT && common.assert(this.getHeight() == this.computeHeight());\n};\n\nDynamicTree.prototype.getMaxBalance = function() {\n    var maxBalance = 0;\n    var node, it = iteratorPool.allocate().preorder();\n    while (node = it.next()) {\n        if (node.height <= 1) {\n            continue;\n        }\n        ASSERT && common.assert(node.isLeaf() == false);\n        var balance = Math.abs(node.child2.height - node.child1.height);\n        maxBalance = Math.max(maxBalance, balance);\n    }\n    iteratorPool.release(it);\n    return maxBalance;\n};\n\nDynamicTree.prototype.rebuildBottomUp = function() {\n    var nodes = [];\n    var count = 0;\n    var node, it = iteratorPool.allocate().preorder();\n    while (node = it.next()) {\n        if (node.height < 0) {\n            continue;\n        }\n        if (node.isLeaf()) {\n            node.parent = null;\n            nodes[count] = node;\n            ++count;\n        } else {\n            this.freeNode(node);\n        }\n    }\n    iteratorPool.release(it);\n    while (count > 1) {\n        var minCost = Infinity;\n        var iMin = -1, jMin = -1;\n        for (var i = 0; i < count; ++i) {\n            var aabbi = nodes[i].aabb;\n            for (var j = i + 1; j < count; ++j) {\n                var aabbj = nodes[j].aabb;\n                var b = new AABB();\n                b.combine(aabbi, aabbj);\n                var cost = b.getPerimeter();\n                if (cost < minCost) {\n                    iMin = i;\n                    jMin = j;\n                    minCost = cost;\n                }\n            }\n        }\n        var child1 = nodes[iMin];\n        var child2 = nodes[jMin];\n        var parent = this.allocateNode();\n        parent.child1 = child1;\n        parent.child2 = child2;\n        parent.height = 1 + Math.max(child1.height, child2.height);\n        parent.aabb.combine(child1.aabb, child2.aabb);\n        parent.parent = null;\n        child1.parent = parent;\n        child2.parent = parent;\n        nodes[jMin] = nodes[count - 1];\n        nodes[iMin] = parent;\n        --count;\n    }\n    this.m_root = nodes[0];\n    this.validate();\n};\n\nDynamicTree.prototype.shiftOrigin = function(newOrigin) {\n    var node, it = iteratorPool.allocate().preorder();\n    while (node = it.next()) {\n        var aabb = node.aabb;\n        aabb.lowerBound.x -= newOrigin.x;\n        aabb.lowerBound.y -= newOrigin.y;\n        aabb.lowerBound.x -= newOrigin.x;\n        aabb.lowerBound.y -= newOrigin.y;\n    }\n    iteratorPool.release(it);\n};\n\nDynamicTree.prototype.query = function(aabb, queryCallback) {\n    ASSERT && common.assert(typeof queryCallback === \"function\");\n    var stack = stackPool.allocate();\n    stack.push(this.m_root);\n    while (stack.length > 0) {\n        var node = stack.pop();\n        if (node == null) {\n            continue;\n        }\n        if (AABB.testOverlap(node.aabb, aabb)) {\n            if (node.isLeaf()) {\n                var proceed = queryCallback(node.id);\n                if (proceed == false) {\n                    return;\n                }\n            } else {\n                stack.push(node.child1);\n                stack.push(node.child2);\n            }\n        }\n    }\n    stackPool.release(stack);\n};\n\nDynamicTree.prototype.rayCast = function(input, rayCastCallback) {\n    ASSERT && common.assert(typeof rayCastCallback === \"function\");\n    var p1 = input.p1;\n    var p2 = input.p2;\n    var r = Vec2.sub(p2, p1);\n    ASSERT && common.assert(r.lengthSquared() > 0);\n    r.normalize();\n    var v = Vec2.cross(1, r);\n    var abs_v = Vec2.abs(v);\n    var maxFraction = input.maxFraction;\n    var segmentAABB = new AABB();\n    var t = Vec2.wAdd(1 - maxFraction, p1, maxFraction, p2);\n    segmentAABB.combinePoints(p1, t);\n    var stack = stackPool.allocate();\n    var subInput = inputPool.allocate();\n    stack.push(this.m_root);\n    while (stack.length > 0) {\n        var node = stack.pop();\n        if (node == null) {\n            continue;\n        }\n        if (AABB.testOverlap(node.aabb, segmentAABB) == false) {\n            continue;\n        }\n        var c = node.aabb.getCenter();\n        var h = node.aabb.getExtents();\n        var separation = Math.abs(Vec2.dot(v, Vec2.sub(p1, c))) - Vec2.dot(abs_v, h);\n        if (separation > 0) {\n            continue;\n        }\n        if (node.isLeaf()) {\n            subInput.p1 = Vec2.clone(input.p1);\n            subInput.p2 = Vec2.clone(input.p2);\n            subInput.maxFraction = maxFraction;\n            var value = rayCastCallback(subInput, node.id);\n            if (value == 0) {\n                return;\n            }\n            if (value > 0) {\n                maxFraction = value;\n                t = Vec2.wAdd(1 - maxFraction, p1, maxFraction, p2);\n                segmentAABB.combinePoints(p1, t);\n            }\n        } else {\n            stack.push(node.child1);\n            stack.push(node.child2);\n        }\n    }\n    stackPool.release(stack);\n    inputPool.release(subInput);\n};\n\nvar inputPool = new Pool({\n    create: function() {\n        return {};\n    },\n    release: function(stack) {}\n});\n\nvar stackPool = new Pool({\n    create: function() {\n        return [];\n    },\n    release: function(stack) {\n        stack.length = 0;\n    }\n});\n\nvar iteratorPool = new Pool({\n    create: function() {\n        return new Iterator();\n    },\n    release: function(iterator) {\n        iterator.close();\n    }\n});\n\nfunction Iterator() {\n    var parents = [];\n    var states = [];\n    return {\n        preorder: function(root) {\n            parents.length = 0;\n            parents.push(root);\n            states.length = 0;\n            states.push(0);\n            return this;\n        },\n        next: function() {\n            while (parents.length > 0) {\n                var i = parents.length - 1;\n                var node = parents[i];\n                if (states[i] === 0) {\n                    states[i] = 1;\n                    return node;\n                }\n                if (states[i] === 1) {\n                    states[i] = 2;\n                    if (node.child1) {\n                        parents.push(node.child1);\n                        states.push(1);\n                        return node.child1;\n                    }\n                }\n                if (states[i] === 2) {\n                    states[i] = 3;\n                    if (node.child2) {\n                        parents.push(node.child2);\n                        states.push(1);\n                        return node.child2;\n                    }\n                }\n                parents.pop();\n                states.pop();\n            }\n        },\n        close: function() {\n            parents.length = 0;\n        }\n    };\n}\n\n\n},{\"../Settings\":7,\"../common/Math\":18,\"../common/Vec2\":23,\"../util/Pool\":49,\"../util/common\":51,\"./AABB\":11}],15:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = TimeOfImpact;\n\nmodule.exports.Input = TOIInput;\n\nmodule.exports.Output = TOIOutput;\n\nvar Settings = require(\"../Settings\");\n\nvar common = require(\"../util/common\");\n\nvar Timer = require(\"../util/Timer\");\n\nvar stats = require(\"../common/stats\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Vec3 = require(\"../common/Vec3\");\n\nvar Mat22 = require(\"../common/Mat22\");\n\nvar Mat33 = require(\"../common/Mat33\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Sweep = require(\"../common/Sweep\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Velocity = require(\"../common/Velocity\");\n\nvar Position = require(\"../common/Position\");\n\nvar Distance = require(\"./Distance\");\n\nvar DistanceInput = Distance.Input;\n\nvar DistanceOutput = Distance.Output;\n\nvar DistanceProxy = Distance.Proxy;\n\nvar SimplexCache = Distance.Cache;\n\nfunction TOIInput() {\n    this.proxyA = new DistanceProxy();\n    this.proxyB = new DistanceProxy();\n    this.sweepA = new Sweep();\n    this.sweepB = new Sweep();\n    this.tMax;\n}\n\nTOIOutput.e_unknown = 0;\n\nTOIOutput.e_failed = 1;\n\nTOIOutput.e_overlapped = 2;\n\nTOIOutput.e_touching = 3;\n\nTOIOutput.e_separated = 4;\n\nfunction TOIOutput() {\n    this.state;\n    this.t;\n}\n\nstats.toiTime = 0;\n\nstats.toiMaxTime = 0;\n\nstats.toiCalls = 0;\n\nstats.toiIters = 0;\n\nstats.toiMaxIters = 0;\n\nstats.toiRootIters = 0;\n\nstats.toiMaxRootIters = 0;\n\nfunction TimeOfImpact(output, input) {\n    var timer = Timer.now();\n    ++stats.toiCalls;\n    output.state = TOIOutput.e_unknown;\n    output.t = input.tMax;\n    var proxyA = input.proxyA;\n    var proxyB = input.proxyB;\n    var sweepA = input.sweepA;\n    var sweepB = input.sweepB;\n    DEBUG && common.debug(\"sweepA\", sweepA.localCenter.x, sweepA.localCenter.y, sweepA.c.x, sweepA.c.y, sweepA.a, sweepA.alpha0, sweepA.c0.x, sweepA.c0.y, sweepA.a0);\n    DEBUG && common.debug(\"sweepB\", sweepB.localCenter.x, sweepB.localCenter.y, sweepB.c.x, sweepB.c.y, sweepB.a, sweepB.alpha0, sweepB.c0.x, sweepB.c0.y, sweepB.a0);\n    sweepA.normalize();\n    sweepB.normalize();\n    var tMax = input.tMax;\n    var totalRadius = proxyA.m_radius + proxyB.m_radius;\n    var target = Math.max(Settings.linearSlop, totalRadius - 3 * Settings.linearSlop);\n    var tolerance = .25 * Settings.linearSlop;\n    ASSERT && common.assert(target > tolerance);\n    var t1 = 0;\n    var k_maxIterations = Settings.maxTOIIterations;\n    var iter = 0;\n    var cache = new SimplexCache();\n    var distanceInput = new DistanceInput();\n    distanceInput.proxyA = input.proxyA;\n    distanceInput.proxyB = input.proxyB;\n    distanceInput.useRadii = false;\n    for (;;) {\n        var xfA = Transform.identity();\n        var xfB = Transform.identity();\n        sweepA.getTransform(xfA, t1);\n        sweepB.getTransform(xfB, t1);\n        DEBUG && common.debug(\"xfA:\", xfA.p.x, xfA.p.y, xfA.q.c, xfA.q.s);\n        DEBUG && common.debug(\"xfB:\", xfB.p.x, xfB.p.y, xfB.q.c, xfB.q.s);\n        distanceInput.transformA = xfA;\n        distanceInput.transformB = xfB;\n        var distanceOutput = new DistanceOutput();\n        Distance(distanceOutput, cache, distanceInput);\n        DEBUG && common.debug(\"distance:\", distanceOutput.distance);\n        if (distanceOutput.distance <= 0) {\n            output.state = TOIOutput.e_overlapped;\n            output.t = 0;\n            break;\n        }\n        if (distanceOutput.distance < target + tolerance) {\n            output.state = TOIOutput.e_touching;\n            output.t = t1;\n            break;\n        }\n        var fcn = new SeparationFunction();\n        fcn.initialize(cache, proxyA, sweepA, proxyB, sweepB, t1);\n        if (false) {\n            var N = 100;\n            var dx = 1 / N;\n            var xs = [];\n            var fs = [];\n            var x = 0;\n            for (var i = 0; i <= N; ++i) {\n                sweepA.getTransform(xfA, x);\n                sweepB.getTransform(xfB, x);\n                var f = fcn.evaluate(xfA, xfB) - target;\n                printf(\"%g %g\\n\", x, f);\n                xs[i] = x;\n                fs[i] = f;\n                x += dx;\n            }\n        }\n        var done = false;\n        var t2 = tMax;\n        var pushBackIter = 0;\n        for (;;) {\n            var s2 = fcn.findMinSeparation(t2);\n            var indexA = fcn.indexA;\n            var indexB = fcn.indexB;\n            if (s2 > target + tolerance) {\n                output.state = TOIOutput.e_separated;\n                output.t = tMax;\n                done = true;\n                break;\n            }\n            if (s2 > target - tolerance) {\n                t1 = t2;\n                break;\n            }\n            var s1 = fcn.evaluate(t1);\n            var indexA = fcn.indexA;\n            var indexB = fcn.indexB;\n            DEBUG && common.debug(\"s1:\", s1, target, tolerance, t1);\n            if (s1 < target - tolerance) {\n                output.state = TOIOutput.e_failed;\n                output.t = t1;\n                done = true;\n                break;\n            }\n            if (s1 <= target + tolerance) {\n                output.state = TOIOutput.e_touching;\n                output.t = t1;\n                done = true;\n                break;\n            }\n            var rootIterCount = 0;\n            var a1 = t1, a2 = t2;\n            for (;;) {\n                var t;\n                if (rootIterCount & 1) {\n                    t = a1 + (target - s1) * (a2 - a1) / (s2 - s1);\n                } else {\n                    t = .5 * (a1 + a2);\n                }\n                ++rootIterCount;\n                ++stats.toiRootIters;\n                var s = fcn.evaluate(t);\n                var indexA = fcn.indexA;\n                var indexB = fcn.indexB;\n                if (Math.abs(s - target) < tolerance) {\n                    t2 = t;\n                    break;\n                }\n                if (s > target) {\n                    a1 = t;\n                    s1 = s;\n                } else {\n                    a2 = t;\n                    s2 = s;\n                }\n                if (rootIterCount == 50) {\n                    break;\n                }\n            }\n            stats.toiMaxRootIters = Math.max(stats.toiMaxRootIters, rootIterCount);\n            ++pushBackIter;\n            if (pushBackIter == Settings.maxPolygonVertices) {\n                break;\n            }\n        }\n        ++iter;\n        ++stats.toiIters;\n        if (done) {\n            break;\n        }\n        if (iter == k_maxIterations) {\n            output.state = TOIOutput.e_failed;\n            output.t = t1;\n            break;\n        }\n    }\n    stats.toiMaxIters = Math.max(stats.toiMaxIters, iter);\n    var time = Timer.diff(timer);\n    stats.toiMaxTime = Math.max(stats.toiMaxTime, time);\n    stats.toiTime += time;\n}\n\nvar e_points = 1;\n\nvar e_faceA = 2;\n\nvar e_faceB = 3;\n\nfunction SeparationFunction() {\n    this.m_proxyA = new DistanceProxy();\n    this.m_proxyB = new DistanceProxy();\n    this.m_sweepA;\n    this.m_sweepB;\n    this.m_type;\n    this.m_localPoint = Vec2.zero();\n    this.m_axis = Vec2.zero();\n}\n\nSeparationFunction.prototype.initialize = function(cache, proxyA, sweepA, proxyB, sweepB, t1) {\n    this.m_proxyA = proxyA;\n    this.m_proxyB = proxyB;\n    var count = cache.count;\n    ASSERT && common.assert(0 < count && count < 3);\n    this.m_sweepA = sweepA;\n    this.m_sweepB = sweepB;\n    var xfA = Transform.identity();\n    var xfB = Transform.identity();\n    this.m_sweepA.getTransform(xfA, t1);\n    this.m_sweepB.getTransform(xfB, t1);\n    if (count == 1) {\n        this.m_type = e_points;\n        var localPointA = this.m_proxyA.getVertex(cache.indexA[0]);\n        var localPointB = this.m_proxyB.getVertex(cache.indexB[0]);\n        var pointA = Transform.mul(xfA, localPointA);\n        var pointB = Transform.mul(xfB, localPointB);\n        this.m_axis.wSet(1, pointB, -1, pointA);\n        var s = this.m_axis.normalize();\n        return s;\n    } else if (cache.indexA[0] == cache.indexA[1]) {\n        this.m_type = e_faceB;\n        var localPointB1 = proxyB.getVertex(cache.indexB[0]);\n        var localPointB2 = proxyB.getVertex(cache.indexB[1]);\n        this.m_axis = Vec2.cross(Vec2.sub(localPointB2, localPointB1), 1);\n        this.m_axis.normalize();\n        var normal = Rot.mul(xfB.q, this.m_axis);\n        this.m_localPoint = Vec2.mid(localPointB1, localPointB2);\n        var pointB = Transform.mul(xfB, this.m_localPoint);\n        var localPointA = proxyA.getVertex(cache.indexA[0]);\n        var pointA = Transform.mul(xfA, localPointA);\n        var s = Vec2.dot(pointA, normal) - Vec2.dot(pointB, normal);\n        if (s < 0) {\n            this.m_axis = Vec2.neg(this.m_axis);\n            s = -s;\n        }\n        return s;\n    } else {\n        this.m_type = e_faceA;\n        var localPointA1 = this.m_proxyA.getVertex(cache.indexA[0]);\n        var localPointA2 = this.m_proxyA.getVertex(cache.indexA[1]);\n        this.m_axis = Vec2.cross(Vec2.sub(localPointA2, localPointA1), 1);\n        this.m_axis.normalize();\n        var normal = Rot.mul(xfA.q, this.m_axis);\n        this.m_localPoint = Vec2.mid(localPointA1, localPointA2);\n        var pointA = Transform.mul(xfA, this.m_localPoint);\n        var localPointB = this.m_proxyB.getVertex(cache.indexB[0]);\n        var pointB = Transform.mul(xfB, localPointB);\n        var s = Vec2.dot(pointB, normal) - Vec2.dot(pointA, normal);\n        if (s < 0) {\n            this.m_axis = Vec2.neg(this.m_axis);\n            s = -s;\n        }\n        return s;\n    }\n};\n\nSeparationFunction.prototype.compute = function(find, t) {\n    var xfA = Transform.identity();\n    var xfB = Transform.identity();\n    this.m_sweepA.getTransform(xfA, t);\n    this.m_sweepB.getTransform(xfB, t);\n    switch (this.m_type) {\n      case e_points:\n        {\n            if (find) {\n                var axisA = Rot.mulT(xfA.q, this.m_axis);\n                var axisB = Rot.mulT(xfB.q, Vec2.neg(this.m_axis));\n                this.indexA = this.m_proxyA.getSupport(axisA);\n                this.indexB = this.m_proxyB.getSupport(axisB);\n            }\n            var localPointA = this.m_proxyA.getVertex(this.indexA);\n            var localPointB = this.m_proxyB.getVertex(this.indexB);\n            var pointA = Transform.mul(xfA, localPointA);\n            var pointB = Transform.mul(xfB, localPointB);\n            var sep = Vec2.dot(pointB, this.m_axis) - Vec2.dot(pointA, this.m_axis);\n            return sep;\n        }\n\n      case e_faceA:\n        {\n            var normal = Rot.mul(xfA.q, this.m_axis);\n            var pointA = Transform.mul(xfA, this.m_localPoint);\n            if (find) {\n                var axisB = Rot.mulT(xfB.q, Vec2.neg(normal));\n                this.indexA = -1;\n                this.indexB = this.m_proxyB.getSupport(axisB);\n            }\n            var localPointB = this.m_proxyB.getVertex(this.indexB);\n            var pointB = Transform.mul(xfB, localPointB);\n            var sep = Vec2.dot(pointB, normal) - Vec2.dot(pointA, normal);\n            return sep;\n        }\n\n      case e_faceB:\n        {\n            var normal = Rot.mul(xfB.q, this.m_axis);\n            var pointB = Transform.mul(xfB, this.m_localPoint);\n            if (find) {\n                var axisA = Rot.mulT(xfA.q, Vec2.neg(normal));\n                this.indexB = -1;\n                this.indexA = this.m_proxyA.getSupport(axisA);\n            }\n            var localPointA = this.m_proxyA.getVertex(this.indexA);\n            var pointA = Transform.mul(xfA, localPointA);\n            var sep = Vec2.dot(pointA, normal) - Vec2.dot(pointB, normal);\n            return sep;\n        }\n\n      default:\n        ASSERT && common.assert(false);\n        if (find) {\n            this.indexA = -1;\n            this.indexB = -1;\n        }\n        return 0;\n    }\n};\n\nSeparationFunction.prototype.findMinSeparation = function(t) {\n    return this.compute(true, t);\n};\n\nSeparationFunction.prototype.evaluate = function(t) {\n    return this.compute(false, t);\n};\n\n\n},{\"../Settings\":7,\"../common/Mat22\":16,\"../common/Mat33\":17,\"../common/Math\":18,\"../common/Position\":19,\"../common/Rot\":20,\"../common/Sweep\":21,\"../common/Transform\":22,\"../common/Vec2\":23,\"../common/Vec3\":24,\"../common/Velocity\":25,\"../common/stats\":26,\"../util/Timer\":50,\"../util/common\":51,\"./Distance\":13}],16:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Mat22;\n\nvar common = require(\"../util/common\");\n\nvar Math = require(\"./Math\");\n\nvar Vec2 = require(\"./Vec2\");\n\nfunction Mat22(a, b, c, d) {\n    if (typeof a === \"object\" && a !== null) {\n        this.ex = Vec2.clone(a);\n        this.ey = Vec2.clone(b);\n    } else if (typeof a === \"number\") {\n        this.ex = Vec2.neo(a, c);\n        this.ey = Vec2.neo(b, d);\n    } else {\n        this.ex = Vec2.zero();\n        this.ey = Vec2.zero();\n    }\n}\n\nMat22.prototype.toString = function() {\n    return JSON.stringify(this);\n};\n\nMat22.isValid = function(o) {\n    return o && Vec2.isValid(o.ex) && Vec2.isValid(o.ey);\n};\n\nMat22.assert = function(o) {\n    if (!ASSERT) return;\n    if (!Mat22.isValid(o)) {\n        DEBUG && common.debug(o);\n        throw new Error(\"Invalid Mat22!\");\n    }\n};\n\nMat22.prototype.set = function(a, b, c, d) {\n    if (typeof a === \"number\" && typeof b === \"number\" && typeof c === \"number\" && typeof d === \"number\") {\n        this.ex.set(a, c);\n        this.ey.set(b, d);\n    } else if (typeof a === \"object\" && typeof b === \"object\") {\n        this.ex.set(a);\n        this.ey.set(b);\n    } else if (typeof a === \"object\") {\n        ASSERT && Mat22.assert(a);\n        this.ex.set(a.ex);\n        this.ey.set(a.ey);\n    } else {\n        ASSERT && common.assert(false);\n    }\n};\n\nMat22.prototype.setIdentity = function() {\n    this.ex.x = 1;\n    this.ey.x = 0;\n    this.ex.y = 0;\n    this.ey.y = 1;\n};\n\nMat22.prototype.setZero = function() {\n    this.ex.x = 0;\n    this.ey.x = 0;\n    this.ex.y = 0;\n    this.ey.y = 0;\n};\n\nMat22.prototype.getInverse = function() {\n    var a = this.ex.x;\n    var b = this.ey.x;\n    var c = this.ex.y;\n    var d = this.ey.y;\n    var det = a * d - b * c;\n    if (det != 0) {\n        det = 1 / det;\n    }\n    var imx = new Mat22();\n    imx.ex.x = det * d;\n    imx.ey.x = -det * b;\n    imx.ex.y = -det * c;\n    imx.ey.y = det * a;\n    return imx;\n};\n\nMat22.prototype.solve = function(v) {\n    ASSERT && Vec2.assert(v);\n    var a = this.ex.x;\n    var b = this.ey.x;\n    var c = this.ex.y;\n    var d = this.ey.y;\n    var det = a * d - b * c;\n    if (det != 0) {\n        det = 1 / det;\n    }\n    var w = Vec2.zero();\n    w.x = det * (d * v.x - b * v.y);\n    w.y = det * (a * v.y - c * v.x);\n    return w;\n};\n\nMat22.mul = function(mx, v) {\n    if (v && \"x\" in v && \"y\" in v) {\n        ASSERT && Vec2.assert(v);\n        var x = mx.ex.x * v.x + mx.ey.x * v.y;\n        var y = mx.ex.y * v.x + mx.ey.y * v.y;\n        return Vec2.neo(x, y);\n    } else if (v && \"ex\" in v && \"ey\" in v) {\n        ASSERT && Mat22.assert(v);\n        return new Mat22(Vec2.mul(mx, v.ex), Vec2.mul(mx, v.ey));\n    }\n    ASSERT && common.assert(false);\n};\n\nMat22.mulT = function(mx, v) {\n    if (v && \"x\" in v && \"y\" in v) {\n        ASSERT && Vec2.assert(v);\n        return Vec2.neo(Vec2.dot(v, mx.ex), Vec2.dot(v, mx.ey));\n    } else if (v && \"ex\" in v && \"ey\" in v) {\n        ASSERT && Mat22.assert(v);\n        var c1 = Vec2.neo(Vec2.dot(mx.ex, v.ex), Vec2.dot(mx.ey, v.ex));\n        var c2 = Vec2.neo(Vec2.dot(mx.ex, v.ey), Vec2.dot(mx.ey, v.ey));\n        return new Mat22(c1, c2);\n    }\n    ASSERT && common.assert(false);\n};\n\nMat22.abs = function(mx) {\n    ASSERT && Mat22.assert(mx);\n    return new Mat22(Vec2.abs(mx.ex), Vec2.abs(mx.ey));\n};\n\nMat22.add = function(mx1, mx2) {\n    ASSERT && Mat22.assert(mx1);\n    ASSERT && Mat22.assert(mx2);\n    return new Mat22(Vec2.add(mx1.ex + mx2.ex), Vec2.add(mx1.ey + mx2.ey));\n};\n\n\n},{\"../util/common\":51,\"./Math\":18,\"./Vec2\":23}],17:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Mat33;\n\nvar common = require(\"../util/common\");\n\nvar Math = require(\"./Math\");\n\nvar Vec2 = require(\"./Vec2\");\n\nvar Vec3 = require(\"./Vec3\");\n\nfunction Mat33(a, b, c) {\n    if (typeof a === \"object\" && a !== null) {\n        this.ex = Vec3.clone(a);\n        this.ey = Vec3.clone(b);\n        this.ez = Vec3.clone(c);\n    } else {\n        this.ex = Vec3();\n        this.ey = Vec3();\n        this.ez = Vec3();\n    }\n}\n\nMat33.prototype.toString = function() {\n    return JSON.stringify(this);\n};\n\nMat33.isValid = function(o) {\n    return o && Vec3.isValid(o.ex) && Vec3.isValid(o.ey) && Vec3.isValid(o.ez);\n};\n\nMat33.assert = function(o) {\n    if (!ASSERT) return;\n    if (!Mat33.isValid(o)) {\n        DEBUG && common.debug(o);\n        throw new Error(\"Invalid Mat33!\");\n    }\n};\n\nMat33.prototype.setZero = function() {\n    this.ex.setZero();\n    this.ey.setZero();\n    this.ez.setZero();\n    return this;\n};\n\nMat33.prototype.solve33 = function(v) {\n    var det = Vec3.dot(this.ex, Vec3.cross(this.ey, this.ez));\n    if (det != 0) {\n        det = 1 / det;\n    }\n    var r = new Vec3();\n    r.x = det * Vec3.dot(v, Vec3.cross(this.ey, this.ez));\n    r.y = det * Vec3.dot(this.ex, Vec3.cross(v, this.ez));\n    r.z = det * Vec3.dot(this.ex, Vec3.cross(this.ey, v));\n    return r;\n};\n\nMat33.prototype.solve22 = function(v) {\n    var a11 = this.ex.x;\n    var a12 = this.ey.x;\n    var a21 = this.ex.y;\n    var a22 = this.ey.y;\n    var det = a11 * a22 - a12 * a21;\n    if (det != 0) {\n        det = 1 / det;\n    }\n    var r = Vec2.zero();\n    r.x = det * (a22 * v.x - a12 * v.y);\n    r.y = det * (a11 * v.y - a21 * v.x);\n    return r;\n};\n\nMat33.prototype.getInverse22 = function(M) {\n    var a = this.ex.x;\n    var b = this.ey.x;\n    var c = this.ex.y;\n    var d = this.ey.y;\n    var det = a * d - b * c;\n    if (det != 0) {\n        det = 1 / det;\n    }\n    M.ex.x = det * d;\n    M.ey.x = -det * b;\n    M.ex.z = 0;\n    M.ex.y = -det * c;\n    M.ey.y = det * a;\n    M.ey.z = 0;\n    M.ez.x = 0;\n    M.ez.y = 0;\n    M.ez.z = 0;\n};\n\nMat33.prototype.getSymInverse33 = function(M) {\n    var det = Vec3.dot(this.ex, Vec3.cross(this.ey, this.ez));\n    if (det != 0) {\n        det = 1 / det;\n    }\n    var a11 = this.ex.x;\n    var a12 = this.ey.x;\n    var a13 = this.ez.x;\n    var a22 = this.ey.y;\n    var a23 = this.ez.y;\n    var a33 = this.ez.z;\n    M.ex.x = det * (a22 * a33 - a23 * a23);\n    M.ex.y = det * (a13 * a23 - a12 * a33);\n    M.ex.z = det * (a12 * a23 - a13 * a22);\n    M.ey.x = M.ex.y;\n    M.ey.y = det * (a11 * a33 - a13 * a13);\n    M.ey.z = det * (a13 * a12 - a11 * a23);\n    M.ez.x = M.ex.z;\n    M.ez.y = M.ey.z;\n    M.ez.z = det * (a11 * a22 - a12 * a12);\n};\n\nMat33.mul = function(a, b) {\n    ASSERT && Mat33.assert(a);\n    if (b && \"z\" in b && \"y\" in b && \"x\" in b) {\n        ASSERT && Vec3.assert(b);\n        var x = a.ex.x * b.x + a.ey.x * b.y + a.ez.x * b.z;\n        var y = a.ex.y * b.x + a.ey.y * b.y + a.ez.y * b.z;\n        var z = a.ex.z * b.x + a.ey.z * b.y + a.ez.z * b.z;\n        return new Vec3(x, y, z);\n    } else if (b && \"y\" in b && \"x\" in b) {\n        ASSERT && Vec2.assert(b);\n        var x = a.ex.x * b.x + a.ey.x * b.y;\n        var y = a.ex.y * b.x + a.ey.y * b.y;\n        return Vec2.neo(x, y);\n    }\n    ASSERT && common.assert(false);\n};\n\nMat33.add = function(a, b) {\n    ASSERT && Mat33.assert(a);\n    ASSERT && Mat33.assert(b);\n    return new Vec3(a.x + b.x, a.y + b.y, a.z + b.z);\n};\n\n\n},{\"../util/common\":51,\"./Math\":18,\"./Vec2\":23,\"./Vec3\":24}],18:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nvar common = require(\"../util/common\");\n\nvar create = require(\"../util/create\");\n\nvar native = Math;\n\nvar math = module.exports = create(native);\n\nmath.EPSILON = 1e-9;\n\nmath.isFinite = function(x) {\n    return typeof x === \"number\" && isFinite(x) && !isNaN(x);\n};\n\nmath.assert = function(x) {\n    if (!ASSERT) return;\n    if (!math.isFinite(x)) {\n        DEBUG && common.debug(x);\n        throw new Error(\"Invalid Number!\");\n    }\n};\n\nmath.invSqrt = function(x) {\n    return 1 / native.sqrt(x);\n};\n\nmath.nextPowerOfTwo = function(x) {\n    x |= x >> 1;\n    x |= x >> 2;\n    x |= x >> 4;\n    x |= x >> 8;\n    x |= x >> 16;\n    return x + 1;\n};\n\nmath.isPowerOfTwo = function(x) {\n    return x > 0 && (x & x - 1) == 0;\n};\n\nmath.mod = function(num, min, max) {\n    if (typeof min === \"undefined\") {\n        max = 1, min = 0;\n    } else if (typeof max === \"undefined\") {\n        max = min, min = 0;\n    }\n    if (max > min) {\n        num = (num - min) % (max - min);\n        return num + (num < 0 ? max : min);\n    } else {\n        num = (num - max) % (min - max);\n        return num + (num <= 0 ? min : max);\n    }\n};\n\nmath.clamp = function(num, min, max) {\n    if (num < min) {\n        return min;\n    } else if (num > max) {\n        return max;\n    } else {\n        return num;\n    }\n};\n\nmath.random = function(min, max) {\n    if (typeof min === \"undefined\") {\n        max = 1;\n        min = 0;\n    } else if (typeof max === \"undefined\") {\n        max = min;\n        min = 0;\n    }\n    return min == max ? min : native.random() * (max - min) + min;\n};\n\n\n},{\"../util/common\":51,\"../util/create\":52}],19:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Position;\n\nvar Vec2 = require(\"./Vec2\");\n\nvar Rot = require(\"./Rot\");\n\nfunction Position() {\n    this.c = Vec2.zero();\n    this.a = 0;\n}\n\nPosition.prototype.getTransform = function(xf, p) {\n    xf.q.set(this.a);\n    xf.p.set(Vec2.sub(this.c, Rot.mul(xf.q, p)));\n    return xf;\n};\n\n\n},{\"./Rot\":20,\"./Vec2\":23}],20:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Rot;\n\nvar common = require(\"../util/common\");\n\nvar Vec2 = require(\"./Vec2\");\n\nvar Math = require(\"./Math\");\n\nfunction Rot(angle) {\n    if (!(this instanceof Rot)) {\n        return new Rot(angle);\n    }\n    if (typeof angle === \"number\") {\n        this.setAngle(angle);\n    } else if (typeof angle === \"object\") {\n        this.set(angle);\n    } else {\n        this.setIdentity();\n    }\n}\n\nRot.neo = function(angle) {\n    var obj = Object.create(Rot.prototype);\n    obj.setAngle(angle);\n    return obj;\n};\n\nRot.clone = function(rot) {\n    ASSERT && Rot.assert(rot);\n    var obj = Object.create(Rot.prototype);\n    ojb.s = rot.s;\n    ojb.c = rot.c;\n    return ojb;\n};\n\nRot.identity = function(rot) {\n    ASSERT && Rot.assert(rot);\n    var obj = Object.create(Rot.prototype);\n    obj.s = 0;\n    obj.c = 1;\n    return obj;\n};\n\nRot.isValid = function(o) {\n    return o && Math.isFinite(o.s) && Math.isFinite(o.c);\n};\n\nRot.assert = function(o) {\n    if (!ASSERT) return;\n    if (!Rot.isValid(o)) {\n        DEBUG && common.debug(o);\n        throw new Error(\"Invalid Rot!\");\n    }\n};\n\nRot.prototype.setIdentity = function() {\n    this.s = 0;\n    this.c = 1;\n};\n\nRot.prototype.set = function(angle) {\n    if (typeof angle === \"object\") {\n        ASSERT && Rot.assert(angle);\n        this.s = angle.s;\n        this.c = angle.c;\n    } else {\n        ASSERT && Math.assert(angle);\n        this.s = Math.sin(angle);\n        this.c = Math.cos(angle);\n    }\n};\n\nRot.prototype.setAngle = function(angle) {\n    ASSERT && Math.assert(angle);\n    this.s = Math.sin(angle);\n    this.c = Math.cos(angle);\n};\n\nRot.prototype.getAngle = function() {\n    return Math.atan2(this.s, this.c);\n};\n\nRot.prototype.getXAxis = function() {\n    return Vec2.neo(this.c, this.s);\n};\n\nRot.prototype.getYAxis = function() {\n    return Vec2.neo(-this.s, this.c);\n};\n\nRot.mul = function(rot, m) {\n    ASSERT && Rot.assert(rot);\n    if (\"c\" in m && \"s\" in m) {\n        ASSERT && Rot.assert(m);\n        var qr = Rot.identity();\n        qr.s = rot.s * m.c + rot.c * m.s;\n        qr.c = rot.c * m.c - rot.s * m.s;\n        return qr;\n    } else if (\"x\" in m && \"y\" in m) {\n        ASSERT && Vec2.assert(m);\n        return Vec2.neo(rot.c * m.x - rot.s * m.y, rot.s * m.x + rot.c * m.y);\n    }\n};\n\nRot.mulSub = function(rot, v, w) {\n    var x = rot.c * (v.x - w.x) - rot.s * (v.y - w.y);\n    var y = rot.s * (v.x - w.y) + rot.c * (v.y - w.y);\n    return Vec2.neo(x, y);\n};\n\nRot.mulT = function(rot, m) {\n    if (\"c\" in m && \"s\" in m) {\n        ASSERT && Rot.assert(m);\n        var qr = Rot.identity();\n        qr.s = rot.c * m.s - rot.s * m.c;\n        qr.c = rot.c * m.c + rot.s * m.s;\n        return qr;\n    } else if (\"x\" in m && \"y\" in m) {\n        ASSERT && Vec2.assert(m);\n        return Vec2.neo(rot.c * m.x + rot.s * m.y, -rot.s * m.x + rot.c * m.y);\n    }\n};\n\n\n},{\"../util/common\":51,\"./Math\":18,\"./Vec2\":23}],21:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Sweep;\n\nvar common = require(\"../util/common\");\n\nvar Math = require(\"./Math\");\n\nvar Vec2 = require(\"./Vec2\");\n\nvar Rot = require(\"./Rot\");\n\nvar Transform = require(\"./Transform\");\n\nfunction Sweep(c, a) {\n    ASSERT && common.assert(typeof c === \"undefined\");\n    ASSERT && common.assert(typeof a === \"undefined\");\n    this.localCenter = Vec2.zero();\n    this.c = Vec2.zero();\n    this.a = 0;\n    this.alpha0 = 0;\n    this.c0 = Vec2.zero();\n    this.a0 = 0;\n}\n\nSweep.prototype.setTransform = function(xf) {\n    var c = Transform.mul(xf, this.localCenter);\n    this.c.set(c);\n    this.c0.set(c);\n    this.a = xf.q.getAngle();\n    this.a0 = xf.q.getAngle();\n};\n\nSweep.prototype.setLocalCenter = function(localCenter, xf) {\n    this.localCenter.set(localCenter);\n    var c = Transform.mul(xf, this.localCenter);\n    this.c.set(c);\n    this.c0.set(c);\n};\n\nSweep.prototype.getTransform = function(xf, beta) {\n    beta = typeof beta === \"undefined\" ? 0 : beta;\n    xf.q.setAngle((1 - beta) * this.a0 + beta * this.a);\n    xf.p.wSet(1 - beta, this.c0, beta, this.c);\n    xf.p.sub(Rot.mul(xf.q, this.localCenter));\n};\n\nSweep.prototype.advance = function(alpha) {\n    ASSERT && common.assert(this.alpha0 < 1);\n    var beta = (alpha - this.alpha0) / (1 - this.alpha0);\n    this.c0.wSet(beta, this.c, 1 - beta, this.c0);\n    this.a0 = beta * this.a + (1 - beta) * this.a0;\n    this.alpha0 = alpha;\n};\n\nSweep.prototype.forward = function() {\n    this.a0 = this.a;\n    this.c0.set(this.c);\n};\n\nSweep.prototype.normalize = function() {\n    var a0 = Math.mod(this.a0, -Math.PI, +Math.PI);\n    this.a -= this.a0 - a0;\n    this.a0 = a0;\n};\n\nSweep.prototype.clone = function() {\n    var clone = new Sweep();\n    clone.localCenter.set(this.localCenter);\n    clone.alpha0 = this.alpha0;\n    clone.a0 = this.a0;\n    clone.a = this.a;\n    clone.c0.set(this.c0);\n    clone.c.set(this.c);\n    return clone;\n};\n\nSweep.prototype.set = function(that) {\n    this.localCenter.set(that.localCenter);\n    this.alpha0 = that.alpha0;\n    this.a0 = that.a0;\n    this.a = that.a;\n    this.c0.set(that.c0);\n    this.c.set(that.c);\n};\n\n\n},{\"../util/common\":51,\"./Math\":18,\"./Rot\":20,\"./Transform\":22,\"./Vec2\":23}],22:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Transform;\n\nvar common = require(\"../util/common\");\n\nvar Vec2 = require(\"./Vec2\");\n\nvar Rot = require(\"./Rot\");\n\nfunction Transform(position, rotation) {\n    if (!(this instanceof Transform)) {\n        return new Transform(position, rotation);\n    }\n    this.p = Vec2.zero();\n    this.q = Rot.identity();\n    if (typeof position !== \"undefined\") {\n        this.p.set(position);\n    }\n    if (typeof rotation !== \"undefined\") {\n        this.q.set(rotation);\n    }\n}\n\nTransform.clone = function(xf) {\n    var obj = Object.create(Transform.prototype);\n    obj.p = Vec2.clone(xf.p);\n    obj.q = Rot.clone(xf.q);\n    return obj;\n};\n\nTransform.neo = function(position, rotation) {\n    var obj = Object.create(Transform.prototype);\n    obj.p = Vec2.clone(position);\n    obj.q = Rot.clone(rotation);\n    return obj;\n};\n\nTransform.identity = function() {\n    var obj = Object.create(Transform.prototype);\n    obj.p = Vec2.zero();\n    obj.q = Rot.identity();\n    return obj;\n};\n\nTransform.prototype.setIdentity = function() {\n    this.p.setZero();\n    this.q.setIdentity();\n};\n\nTransform.prototype.set = function(a, b) {\n    if (Transform.isValid(a)) {\n        this.p.set(a.p);\n        this.q.set(a.q);\n    } else {\n        this.p.set(a);\n        this.q.set(b);\n    }\n};\n\nTransform.isValid = function(o) {\n    return o && Vec2.isValid(o.p) && Rot.isValid(o.q);\n};\n\nTransform.assert = function(o) {\n    if (!ASSERT) return;\n    if (!Transform.isValid(o)) {\n        DEBUG && common.debug(o);\n        throw new Error(\"Invalid Transform!\");\n    }\n};\n\nTransform.mul = function(a, b) {\n    ASSERT && Transform.assert(a);\n    if (Array.isArray(b)) {\n        var arr = [];\n        for (var i = 0; i < b.length; i++) {\n            arr[i] = Transform.mul(a, b[i]);\n        }\n        return arr;\n    } else if (\"x\" in b && \"y\" in b) {\n        ASSERT && Vec2.assert(b);\n        var x = a.q.c * b.x - a.q.s * b.y + a.p.x;\n        var y = a.q.s * b.x + a.q.c * b.y + a.p.y;\n        return Vec2.neo(x, y);\n    } else if (\"p\" in b && \"q\" in b) {\n        ASSERT && Transform.assert(b);\n        var xf = Transform.identity();\n        xf.q = Rot.mul(a.q, b.q);\n        xf.p = Vec2.add(Rot.mul(a.q, b.p), a.p);\n        return xf;\n    }\n};\n\nTransform.mulT = function(a, b) {\n    ASSERT && Transform.assert(a);\n    if (\"x\" in b && \"y\" in b) {\n        ASSERT && Vec2.assert(b);\n        var px = b.x - a.p.x;\n        var py = b.y - a.p.y;\n        var x = a.q.c * px + a.q.s * py;\n        var y = -a.q.s * px + a.q.c * py;\n        return Vec2.neo(x, y);\n    } else if (\"p\" in b && \"q\" in b) {\n        ASSERT && Transform.assert(b);\n        var xf = Transform.identity();\n        xf.q.set(Rot.mulT(a.q, b.q));\n        xf.p.set(Rot.mulT(a.q, Vec2.sub(b.p, a.p)));\n        return xf;\n    }\n};\n\n\n},{\"../util/common\":51,\"./Rot\":20,\"./Vec2\":23}],23:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Vec2;\n\nvar common = require(\"../util/common\");\n\nvar Math = require(\"./Math\");\n\nfunction Vec2(x, y) {\n    if (!(this instanceof Vec2)) {\n        return new Vec2(x, y);\n    }\n    if (typeof x === \"undefined\") {\n        this.x = 0, this.y = 0;\n    } else if (typeof x === \"object\") {\n        this.x = x.x, this.y = x.y;\n    } else {\n        this.x = x, this.y = y;\n    }\n    ASSERT && Vec2.assert(this);\n}\n\nVec2.zero = function() {\n    var obj = Object.create(Vec2.prototype);\n    obj.x = 0;\n    obj.y = 0;\n    return obj;\n};\n\nVec2.neo = function(x, y) {\n    var obj = Object.create(Vec2.prototype);\n    obj.x = x;\n    obj.y = y;\n    return obj;\n};\n\nVec2.clone = function(v, depricated) {\n    ASSERT && Vec2.assert(v);\n    ASSERT && common.assert(!depricated);\n    return Vec2.neo(v.x, v.y);\n};\n\nVec2.prototype.toString = function() {\n    return JSON.stringify(this);\n};\n\nVec2.isValid = function(v) {\n    return v && Math.isFinite(v.x) && Math.isFinite(v.y);\n};\n\nVec2.assert = function(o) {\n    if (!ASSERT) return;\n    if (!Vec2.isValid(o)) {\n        DEBUG && common.debug(o);\n        throw new Error(\"Invalid Vec2!\");\n    }\n};\n\nVec2.prototype.clone = function(depricated) {\n    return Vec2.clone(this, depricated);\n};\n\nVec2.prototype.setZero = function() {\n    this.x = 0;\n    this.y = 0;\n    return this;\n};\n\nVec2.prototype.set = function(x, y) {\n    if (typeof x === \"object\") {\n        ASSERT && Vec2.assert(x);\n        this.x = x.x;\n        this.y = x.y;\n    } else {\n        ASSERT && Math.assert(x);\n        ASSERT && Math.assert(y);\n        this.x = x;\n        this.y = y;\n    }\n    return this;\n};\n\nVec2.prototype.wSet = function(a, v, b, w) {\n    ASSERT && Math.assert(a);\n    ASSERT && Vec2.assert(v);\n    var x = a * v.x;\n    var y = a * v.y;\n    if (typeof b !== \"undefined\" || typeof w !== \"undefined\") {\n        ASSERT && Math.assert(b);\n        ASSERT && Vec2.assert(w);\n        x += b * w.x;\n        y += b * w.y;\n    }\n    this.x = x;\n    this.y = y;\n    return this;\n};\n\nVec2.prototype.add = function(w) {\n    ASSERT && Vec2.assert(w);\n    this.x += w.x;\n    this.y += w.y;\n    return this;\n};\n\nVec2.prototype.wAdd = function(a, v, b, w) {\n    ASSERT && Math.assert(a);\n    ASSERT && Vec2.assert(v);\n    var x = a * v.x;\n    var y = a * v.y;\n    if (typeof b !== \"undefined\" || typeof w !== \"undefined\") {\n        ASSERT && Math.assert(b);\n        ASSERT && Vec2.assert(w);\n        x += b * w.x;\n        y += b * w.y;\n    }\n    this.x += x;\n    this.y += y;\n    return this;\n};\n\nVec2.prototype.wSub = function(a, v, b, w) {\n    ASSERT && Math.assert(a);\n    ASSERT && Vec2.assert(v);\n    var x = a * v.x;\n    var y = a * v.y;\n    if (typeof b !== \"undefined\" || typeof w !== \"undefined\") {\n        ASSERT && Math.assert(b);\n        ASSERT && Vec2.assert(w);\n        x += b * w.x;\n        y += b * w.y;\n    }\n    this.x -= x;\n    this.y -= y;\n    return this;\n};\n\nVec2.prototype.sub = function(w) {\n    ASSERT && Vec2.assert(w);\n    this.x -= w.x;\n    this.y -= w.y;\n    return this;\n};\n\nVec2.prototype.mul = function(m) {\n    ASSERT && Math.assert(m);\n    this.x *= m;\n    this.y *= m;\n    return this;\n};\n\nVec2.prototype.length = function() {\n    return Vec2.lengthOf(this);\n};\n\nVec2.prototype.lengthSquared = function() {\n    return Vec2.lengthSquared(this);\n};\n\nVec2.prototype.normalize = function() {\n    var length = this.length();\n    if (length < Math.EPSILON) {\n        return 0;\n    }\n    var invLength = 1 / length;\n    this.x *= invLength;\n    this.y *= invLength;\n    return length;\n};\n\nVec2.lengthOf = function(v) {\n    ASSERT && Vec2.assert(v);\n    return Math.sqrt(v.x * v.x + v.y * v.y);\n};\n\nVec2.lengthSquared = function(v) {\n    ASSERT && Vec2.assert(v);\n    return v.x * v.x + v.y * v.y;\n};\n\nVec2.distance = function(v, w) {\n    ASSERT && Vec2.assert(v);\n    ASSERT && Vec2.assert(w);\n    var dx = v.x - w.x, dy = v.y - w.y;\n    return Math.sqrt(dx * dx + dy * dy);\n};\n\nVec2.distanceSquared = function(v, w) {\n    ASSERT && Vec2.assert(v);\n    ASSERT && Vec2.assert(w);\n    var dx = v.x - w.x, dy = v.y - w.y;\n    return dx * dx + dy * dy;\n};\n\nVec2.areEqual = function(v, w) {\n    ASSERT && Vec2.assert(v);\n    ASSERT && Vec2.assert(w);\n    return v == w || typeof w === \"object\" && w !== null && v.x == w.x && v.y == w.y;\n};\n\nVec2.skew = function(v) {\n    ASSERT && Vec2.assert(v);\n    return Vec2.neo(-v.y, v.x);\n};\n\nVec2.dot = function(v, w) {\n    ASSERT && Vec2.assert(v);\n    ASSERT && Vec2.assert(w);\n    return v.x * w.x + v.y * w.y;\n};\n\nVec2.cross = function(v, w) {\n    if (typeof w === \"number\") {\n        ASSERT && Vec2.assert(v);\n        ASSERT && Math.assert(w);\n        return Vec2.neo(w * v.y, -w * v.x);\n    } else if (typeof v === \"number\") {\n        ASSERT && Math.assert(v);\n        ASSERT && Vec2.assert(w);\n        return Vec2.neo(-v * w.y, v * w.x);\n    } else {\n        ASSERT && Vec2.assert(v);\n        ASSERT && Vec2.assert(w);\n        return v.x * w.y - v.y * w.x;\n    }\n};\n\nVec2.addCross = function(a, v, w) {\n    if (typeof w === \"number\") {\n        ASSERT && Vec2.assert(v);\n        ASSERT && Math.assert(w);\n        return Vec2.neo(w * v.y + a.x, -w * v.x + a.y);\n    } else if (typeof v === \"number\") {\n        ASSERT && Math.assert(v);\n        ASSERT && Vec2.assert(w);\n        return Vec2.neo(-v * w.y + a.x, v * w.x + a.y);\n    }\n    ASSERT && common.assert(false);\n};\n\nVec2.add = function(v, w) {\n    ASSERT && Vec2.assert(v);\n    ASSERT && Vec2.assert(w);\n    return Vec2.neo(v.x + w.x, v.y + w.y);\n};\n\nVec2.wAdd = function(a, v, b, w) {\n    var r = Vec2.zero();\n    r.wAdd(a, v, b, w);\n    return r;\n};\n\nVec2.sub = function(v, w) {\n    ASSERT && Vec2.assert(v);\n    ASSERT && Vec2.assert(w);\n    return Vec2.neo(v.x - w.x, v.y - w.y);\n};\n\nVec2.mul = function(a, b) {\n    if (typeof a === \"object\") {\n        ASSERT && Vec2.assert(a);\n        ASSERT && Math.assert(b);\n        return Vec2.neo(a.x * b, a.y * b);\n    } else if (typeof b === \"object\") {\n        ASSERT && Math.assert(a);\n        ASSERT && Vec2.assert(b);\n        return Vec2.neo(a * b.x, a * b.y);\n    }\n};\n\nVec2.prototype.neg = function() {\n    this.x = -this.x;\n    this.y = -this.y;\n    return this;\n};\n\nVec2.neg = function(v) {\n    ASSERT && Vec2.assert(v);\n    return Vec2.neo(-v.x, -v.y);\n};\n\nVec2.abs = function(v) {\n    ASSERT && Vec2.assert(v);\n    return Vec2.neo(Math.abs(v.x), Math.abs(v.y));\n};\n\nVec2.mid = function(v, w) {\n    ASSERT && Vec2.assert(v);\n    ASSERT && Vec2.assert(w);\n    return Vec2.neo((v.x + w.x) * .5, (v.y + w.y) * .5);\n};\n\nVec2.upper = function(v, w) {\n    ASSERT && Vec2.assert(v);\n    ASSERT && Vec2.assert(w);\n    return Vec2.neo(Math.max(v.x, w.x), Math.max(v.y, w.y));\n};\n\nVec2.lower = function(v, w) {\n    ASSERT && Vec2.assert(v);\n    ASSERT && Vec2.assert(w);\n    return Vec2.neo(Math.min(v.x, w.x), Math.min(v.y, w.y));\n};\n\nVec2.prototype.clamp = function(max) {\n    var lengthSqr = this.x * this.x + this.y * this.y;\n    if (lengthSqr > max * max) {\n        var invLength = Math.invSqrt(lengthSqr);\n        this.x *= invLength * max;\n        this.y *= invLength * max;\n    }\n    return this;\n};\n\nVec2.clamp = function(v, max) {\n    v = Vec2.neo(v.x, v.y);\n    v.clamp(max);\n    return v;\n};\n\n\n},{\"../util/common\":51,\"./Math\":18}],24:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Vec3;\n\nvar common = require(\"../util/common\");\n\nvar Math = require(\"./Math\");\n\nfunction Vec3(x, y, z) {\n    if (!(this instanceof Vec3)) {\n        return new Vec3(x, y, z);\n    }\n    if (typeof x === \"undefined\") {\n        this.x = 0, this.y = 0, this.z = 0;\n    } else if (typeof x === \"object\") {\n        this.x = x.x, this.y = x.y, this.z = x.z;\n    } else {\n        this.x = x, this.y = y, this.z = z;\n    }\n    ASSERT && Vec3.assert(this);\n}\n\nVec3.prototype.toString = function() {\n    return JSON.stringify(this);\n};\n\nVec3.isValid = function(v) {\n    return v && Math.isFinite(v.x) && Math.isFinite(v.y) && Math.isFinite(v.z);\n};\n\nVec3.assert = function(o) {\n    if (!ASSERT) return;\n    if (!Vec3.isValid(o)) {\n        DEBUG && common.debug(o);\n        throw new Error(\"Invalid Vec3!\");\n    }\n};\n\nVec3.prototype.setZero = function() {\n    this.x = 0;\n    this.y = 0;\n    this.z = 0;\n    return this;\n};\n\nVec3.prototype.set = function(x, y, z) {\n    this.x = x;\n    this.y = y;\n    this.z = z;\n    return this;\n};\n\nVec3.prototype.add = function(w) {\n    this.x += w.x;\n    this.y += w.y;\n    this.z += w.z;\n    return this;\n};\n\nVec3.prototype.sub = function(w) {\n    this.x -= w.x;\n    this.y -= w.y;\n    this.z -= w.z;\n    return this;\n};\n\nVec3.prototype.mul = function(m) {\n    this.x *= m;\n    this.y *= m;\n    this.z *= m;\n    return this;\n};\n\nVec3.areEqual = function(v, w) {\n    return v == w || typeof w === \"object\" && w !== null && v.x == w.x && v.y == w.y && v.z == w.z;\n};\n\nVec3.dot = function(v, w) {\n    return v.x * w.x + v.y * w.y + v.z * w.z;\n};\n\nVec3.cross = function(v, w) {\n    return new Vec3(v.y * w.z - v.z * w.y, v.z * w.x - v.x * w.z, v.x * w.y - v.y * w.x);\n};\n\nVec3.add = function(v, w) {\n    return new Vec3(v.x + w.x, v.y + w.y, v.z + w.z);\n};\n\nVec3.sub = function(v, w) {\n    return new Vec3(v.x - w.x, v.y - w.y, v.z - w.z);\n};\n\nVec3.mul = function(v, m) {\n    return new Vec3(m * v.x, m * v.y, m * v.z);\n};\n\nVec3.prototype.neg = function(m) {\n    this.x = -this.x;\n    this.y = -this.y;\n    this.z = -this.z;\n    return this;\n};\n\nVec3.neg = function(v) {\n    return new Vec3(-v.x, -v.y, -v.z);\n};\n\n\n},{\"../util/common\":51,\"./Math\":18}],25:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Velocity;\n\nvar Vec2 = require(\"./Vec2\");\n\nfunction Velocity() {\n    this.v = Vec2.zero();\n    this.w = 0;\n}\n\n\n},{\"./Vec2\":23}],26:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nexports.toString = function(newline) {\n    newline = typeof newline === \"string\" ? newline : \"\\n\";\n    var string = \"\";\n    for (var name in this) {\n        if (typeof this[name] !== \"function\" && typeof this[name] !== \"object\") {\n            string += name + \": \" + this[name] + newline;\n        }\n    }\n    return string;\n};\n\n\n},{}],27:[function(require,module,exports){\nexports.internal = {};\n\nexports.Math = require(\"./common/Math\");\n\nexports.Vec2 = require(\"./common/Vec2\");\n\nexports.Transform = require(\"./common/Transform\");\n\nexports.Rot = require(\"./common/Rot\");\n\nexports.AABB = require(\"./collision/AABB\");\n\nexports.Shape = require(\"./Shape\");\n\nexports.Fixture = require(\"./Fixture\");\n\nexports.Body = require(\"./Body\");\n\nexports.Contact = require(\"./Contact\");\n\nexports.Joint = require(\"./Joint\");\n\nexports.World = require(\"./World\");\n\nexports.Circle = require(\"./shape/CircleShape\");\n\nexports.Edge = require(\"./shape/EdgeShape\");\n\nexports.Polygon = require(\"./shape/PolygonShape\");\n\nexports.Chain = require(\"./shape/ChainShape\");\n\nexports.Box = require(\"./shape/BoxShape\");\n\nrequire(\"./shape/CollideCircle\");\n\nrequire(\"./shape/CollideEdgeCircle\");\n\nexports.internal.CollidePolygons = require(\"./shape/CollidePolygon\");\n\nrequire(\"./shape/CollideCirclePolygone\");\n\nrequire(\"./shape/CollideEdgePolygon\");\n\nexports.DistanceJoint = require(\"./joint/DistanceJoint\");\n\nexports.FrictionJoint = require(\"./joint/FrictionJoint\");\n\nexports.GearJoint = require(\"./joint/GearJoint\");\n\nexports.MotorJoint = require(\"./joint/MotorJoint\");\n\nexports.MouseJoint = require(\"./joint/MouseJoint\");\n\nexports.PrismaticJoint = require(\"./joint/PrismaticJoint\");\n\nexports.PulleyJoint = require(\"./joint/PulleyJoint\");\n\nexports.RevoluteJoint = require(\"./joint/RevoluteJoint\");\n\nexports.RopeJoint = require(\"./joint/RopeJoint\");\n\nexports.WeldJoint = require(\"./joint/WeldJoint\");\n\nexports.WheelJoint = require(\"./joint/WheelJoint\");\n\nexports.internal.Sweep = require(\"./common/Sweep\");\n\nexports.internal.stats = require(\"./common/stats\");\n\nexports.internal.Manifold = require(\"./Manifold\");\n\nexports.internal.Distance = require(\"./collision/Distance\");\n\nexports.internal.TimeOfImpact = require(\"./collision/TimeOfImpact\");\n\nexports.internal.DynamicTree = require(\"./collision/DynamicTree\");\n\nexports.internal.Settings = require(\"./Settings\");\n\n\n},{\"./Body\":2,\"./Contact\":3,\"./Fixture\":4,\"./Joint\":5,\"./Manifold\":6,\"./Settings\":7,\"./Shape\":8,\"./World\":10,\"./collision/AABB\":11,\"./collision/Distance\":13,\"./collision/DynamicTree\":14,\"./collision/TimeOfImpact\":15,\"./common/Math\":18,\"./common/Rot\":20,\"./common/Sweep\":21,\"./common/Transform\":22,\"./common/Vec2\":23,\"./common/stats\":26,\"./joint/DistanceJoint\":28,\"./joint/FrictionJoint\":29,\"./joint/GearJoint\":30,\"./joint/MotorJoint\":31,\"./joint/MouseJoint\":32,\"./joint/PrismaticJoint\":33,\"./joint/PulleyJoint\":34,\"./joint/RevoluteJoint\":35,\"./joint/RopeJoint\":36,\"./joint/WeldJoint\":37,\"./joint/WheelJoint\":38,\"./shape/BoxShape\":39,\"./shape/ChainShape\":40,\"./shape/CircleShape\":41,\"./shape/CollideCircle\":42,\"./shape/CollideCirclePolygone\":43,\"./shape/CollideEdgeCircle\":44,\"./shape/CollideEdgePolygon\":45,\"./shape/CollidePolygon\":46,\"./shape/EdgeShape\":47,\"./shape/PolygonShape\":48}],28:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = DistanceJoint;\n\nvar options = require(\"../util/options\");\n\nvar create = require(\"../util/create\");\n\nvar Settings = require(\"../Settings\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Vec3 = require(\"../common/Vec3\");\n\nvar Mat22 = require(\"../common/Mat22\");\n\nvar Mat33 = require(\"../common/Mat33\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Sweep = require(\"../common/Sweep\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Velocity = require(\"../common/Velocity\");\n\nvar Position = require(\"../common/Position\");\n\nvar Joint = require(\"../Joint\");\n\nDistanceJoint.TYPE = \"distance-joint\";\n\nDistanceJoint._super = Joint;\n\nDistanceJoint.prototype = create(DistanceJoint._super.prototype);\n\nvar DistanceJointDef = {\n    frequencyHz: 0,\n    dampingRatio: 0\n};\n\nfunction DistanceJoint(def, bodyA, anchorA, bodyB, anchorB) {\n    if (!(this instanceof DistanceJoint)) {\n        return new DistanceJoint(def, bodyA, anchorA, bodyB, anchorB);\n    }\n    def = options(def, DistanceJointDef);\n    Joint.call(this, def, bodyA, bodyB);\n    this.m_type = DistanceJoint.TYPE;\n    this.m_localAnchorA = def.localAnchorA || bodyA.getLocalPoint(anchorA);\n    this.m_localAnchorB = def.localAnchorB || bodyB.getLocalPoint(anchorB);\n    this.m_length = Vec2.distance(anchorB, anchorA);\n    this.m_frequencyHz = def.frequencyHz;\n    this.m_dampingRatio = def.dampingRatio;\n    this.m_impulse = 0;\n    this.m_gamma = 0;\n    this.m_bias = 0;\n    this.m_u;\n    this.m_rA;\n    this.m_rB;\n    this.m_localCenterA;\n    this.m_localCenterB;\n    this.m_invMassA;\n    this.m_invMassB;\n    this.m_invIA;\n    this.m_invIB;\n    this.m_mass;\n}\n\nDistanceJoint.prototype.getLocalAnchorA = function() {\n    return this.m_localAnchorA;\n};\n\nDistanceJoint.prototype.getLocalAnchorB = function() {\n    return this.m_localAnchorB;\n};\n\nDistanceJoint.prototype.setLength = function(length) {\n    this.m_length = length;\n};\n\nDistanceJoint.prototype.getLength = function() {\n    return this.m_length;\n};\n\nDistanceJoint.prototype.setFrequency = function(hz) {\n    this.m_frequencyHz = hz;\n};\n\nDistanceJoint.prototype.getFrequency = function() {\n    return this.m_frequencyHz;\n};\n\nDistanceJoint.prototype.setDampingRatio = function(ratio) {\n    this.m_dampingRatio = ratio;\n};\n\nDistanceJoint.prototype.getDampingRatio = function() {\n    return this.m_dampingRatio;\n};\n\nDistanceJoint.prototype.getAnchorA = function() {\n    return this.m_bodyA.getWorldPoint(this.m_localAnchorA);\n};\n\nDistanceJoint.prototype.getAnchorB = function() {\n    return this.m_bodyB.getWorldPoint(this.m_localAnchorB);\n};\n\nDistanceJoint.prototype.getReactionForce = function(inv_dt) {\n    var F = Vec2.mul(inv_dt * this.m_impulse, this.m_u);\n    return F;\n};\n\nDistanceJoint.prototype.getReactionTorque = function(inv_dt) {\n    return 0;\n};\n\nDistanceJoint.prototype.initVelocityConstraints = function(step) {\n    this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;\n    this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;\n    this.m_invMassA = this.m_bodyA.m_invMass;\n    this.m_invMassB = this.m_bodyB.m_invMass;\n    this.m_invIA = this.m_bodyA.m_invI;\n    this.m_invIB = this.m_bodyB.m_invI;\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var qA = Rot.neo(aA);\n    var qB = Rot.neo(aB);\n    this.m_rA = Rot.mul(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));\n    this.m_rB = Rot.mul(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));\n    this.m_u = Vec2.sub(Vec2.add(cB, this.m_rB), Vec2.add(cA, this.m_rA));\n    var length = this.m_u.length();\n    if (length > Settings.linearSlop) {\n        this.m_u.mul(1 / length);\n    } else {\n        this.m_u.set(0, 0);\n    }\n    var crAu = Vec2.cross(this.m_rA, this.m_u);\n    var crBu = Vec2.cross(this.m_rB, this.m_u);\n    var invMass = this.m_invMassA + this.m_invIA * crAu * crAu + this.m_invMassB + this.m_invIB * crBu * crBu;\n    this.m_mass = invMass != 0 ? 1 / invMass : 0;\n    if (this.m_frequencyHz > 0) {\n        var C = length - this.m_length;\n        var omega = 2 * Math.PI * this.m_frequencyHz;\n        var d = 2 * this.m_mass * this.m_dampingRatio * omega;\n        var k = this.m_mass * omega * omega;\n        var h = step.dt;\n        this.m_gamma = h * (d + h * k);\n        this.m_gamma = this.m_gamma != 0 ? 1 / this.m_gamma : 0;\n        this.m_bias = C * h * k * this.m_gamma;\n        invMass += this.m_gamma;\n        this.m_mass = invMass != 0 ? 1 / invMass : 0;\n    } else {\n        this.m_gamma = 0;\n        this.m_bias = 0;\n    }\n    if (step.warmStarting) {\n        this.m_impulse *= step.dtRatio;\n        var P = Vec2.mul(this.m_impulse, this.m_u);\n        vA.wSub(this.m_invMassA, P);\n        wA -= this.m_invIA * Vec2.cross(this.m_rA, P);\n        vB.wAdd(this.m_invMassB, P);\n        wB += this.m_invIB * Vec2.cross(this.m_rB, P);\n    } else {\n        this.m_impulse = 0;\n    }\n    this.m_bodyA.c_velocity.v.set(vA);\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v.set(vB);\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nDistanceJoint.prototype.solveVelocityConstraints = function(step) {\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var vpA = Vec2.add(vA, Vec2.cross(wA, this.m_rA));\n    var vpB = Vec2.add(vB, Vec2.cross(wB, this.m_rB));\n    var Cdot = Vec2.dot(this.m_u, vpB) - Vec2.dot(this.m_u, vpA);\n    var impulse = -this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse);\n    this.m_impulse += impulse;\n    var P = Vec2.mul(impulse, this.m_u);\n    vA.wSub(this.m_invMassA, P);\n    wA -= this.m_invIA * Vec2.cross(this.m_rA, P);\n    vB.wAdd(this.m_invMassB, P);\n    wB += this.m_invIB * Vec2.cross(this.m_rB, P);\n    this.m_bodyA.c_velocity.v.set(vA);\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v.set(vB);\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nDistanceJoint.prototype.solvePositionConstraints = function(step) {\n    if (this.m_frequencyHz > 0) {\n        return true;\n    }\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var qA = Rot.neo(aA);\n    var qB = Rot.neo(aB);\n    var rA = Rot.mulSub(qA, this.m_localAnchorA, this.m_localCenterA);\n    var rB = Rot.mulSub(qB, this.m_localAnchorB, this.m_localCenterB);\n    var u = Vec2.sub(Vec2.add(cB, rB), Vec2.add(cA, rA));\n    var length = u.normalize();\n    var C = length - this.m_length;\n    C = Math.clamp(C, -Settings.maxLinearCorrection, Settings.maxLinearCorrection);\n    var impulse = -this.m_mass * C;\n    var P = Vec2.mul(impulse, u);\n    cA.wSub(this.m_invMassA, P);\n    aA -= this.m_invIA * Vec2.cross(rA, P);\n    cB.wAdd(this.m_invMassB, P);\n    aB += this.m_invIB * Vec2.cross(rB, P);\n    this.m_bodyA.c_position.c.set(cA);\n    this.m_bodyA.c_position.a = aA;\n    this.m_bodyB.c_position.c.set(cB);\n    this.m_bodyB.c_position.a = aB;\n    return Math.abs(C) < Settings.linearSlop;\n};\n\n\n},{\"../Joint\":5,\"../Settings\":7,\"../common/Mat22\":16,\"../common/Mat33\":17,\"../common/Math\":18,\"../common/Position\":19,\"../common/Rot\":20,\"../common/Sweep\":21,\"../common/Transform\":22,\"../common/Vec2\":23,\"../common/Vec3\":24,\"../common/Velocity\":25,\"../util/create\":52,\"../util/options\":53}],29:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = FrictionJoint;\n\nvar common = require(\"../util/common\");\n\nvar options = require(\"../util/options\");\n\nvar create = require(\"../util/create\");\n\nvar Settings = require(\"../Settings\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Vec3 = require(\"../common/Vec3\");\n\nvar Mat22 = require(\"../common/Mat22\");\n\nvar Mat33 = require(\"../common/Mat33\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Sweep = require(\"../common/Sweep\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Velocity = require(\"../common/Velocity\");\n\nvar Position = require(\"../common/Position\");\n\nvar Joint = require(\"../Joint\");\n\nFrictionJoint.TYPE = \"friction-joint\";\n\nFrictionJoint._super = Joint;\n\nFrictionJoint.prototype = create(FrictionJoint._super.prototype);\n\nvar FrictionJointDef = {\n    maxForce: 0,\n    maxTorque: 0\n};\n\nfunction FrictionJoint(def, bodyA, bodyB, anchor) {\n    if (!(this instanceof FrictionJoint)) {\n        return new FrictionJoint(def, bodyA, bodyB, anchor);\n    }\n    def = options(def, FrictionJointDef);\n    Joint.call(this, def, bodyA, bodyB);\n    this.m_type = FrictionJoint.TYPE;\n    if (anchor) {\n        this.m_localAnchorA = bodyA.getLocalPoint(anchor);\n        this.m_localAnchorB = bodyB.getLocalPoint(anchor);\n    } else {\n        this.m_localAnchorA = Vec2.zero();\n        this.m_localAnchorB = Vec2.zero();\n    }\n    this.m_linearImpulse = Vec2.zero();\n    this.m_angularImpulse = 0;\n    this.m_maxForce = def.maxForce;\n    this.m_maxTorque = def.maxTorque;\n    this.m_rA;\n    this.m_rB;\n    this.m_localCenterA;\n    this.m_localCenterB;\n    this.m_invMassA;\n    this.m_invMassB;\n    this.m_invIA;\n    this.m_invIB;\n    this.m_linearMass;\n    this.m_angularMass;\n}\n\nFrictionJoint.prototype.getLocalAnchorA = function() {\n    return this.m_localAnchorA;\n};\n\nFrictionJoint.prototype.getLocalAnchorB = function() {\n    return this.m_localAnchorB;\n};\n\nFrictionJoint.prototype.setMaxForce = function(force) {\n    ASSERT && common.assert(IsValid(force) && force >= 0);\n    this.m_maxForce = force;\n};\n\nFrictionJoint.prototype.getMaxForce = function() {\n    return this.m_maxForce;\n};\n\nFrictionJoint.prototype.setMaxTorque = function(torque) {\n    ASSERT && common.assert(IsValid(torque) && torque >= 0);\n    this.m_maxTorque = torque;\n};\n\nFrictionJoint.prototype.getMaxTorque = function() {\n    return this.m_maxTorque;\n};\n\nFrictionJoint.prototype.getAnchorA = function() {\n    return this.m_bodyA.getWorldPoint(this.m_localAnchorA);\n};\n\nFrictionJoint.prototype.getAnchorB = function() {\n    return this.m_bodyB.getWorldPoint(this.m_localAnchorB);\n};\n\nFrictionJoint.prototype.getReactionForce = function(inv_dt) {\n    return inv_dt * this.m_linearImpulse;\n};\n\nFrictionJoint.prototype.getReactionTorque = function(inv_dt) {\n    return inv_dt * this.m_angularImpulse;\n};\n\nFrictionJoint.prototype.initVelocityConstraints = function(step) {\n    this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;\n    this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;\n    this.m_invMassA = this.m_bodyA.m_invMass;\n    this.m_invMassB = this.m_bodyB.m_invMass;\n    this.m_invIA = this.m_bodyA.m_invI;\n    this.m_invIB = this.m_bodyB.m_invI;\n    var aA = this.m_bodyA.c_position.a;\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var aB = this.m_bodyB.c_position.a;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var qA = Rot.neo(aA), qB = Rot.neo(aB);\n    this.m_rA = Rot.mul(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));\n    this.m_rB = Rot.mul(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));\n    var mA = this.m_invMassA, mB = this.m_invMassB;\n    var iA = this.m_invIA, iB = this.m_invIB;\n    var K = new Mat22();\n    K.ex.x = mA + mB + iA * this.m_rA.y * this.m_rA.y + iB * this.m_rB.y * this.m_rB.y;\n    K.ex.y = -iA * this.m_rA.x * this.m_rA.y - iB * this.m_rB.x * this.m_rB.y;\n    K.ey.x = K.ex.y;\n    K.ey.y = mA + mB + iA * this.m_rA.x * this.m_rA.x + iB * this.m_rB.x * this.m_rB.x;\n    this.m_linearMass = K.getInverse();\n    this.m_angularMass = iA + iB;\n    if (this.m_angularMass > 0) {\n        this.m_angularMass = 1 / this.m_angularMass;\n    }\n    if (step.warmStarting) {\n        this.m_linearImpulse.mul(step.dtRatio);\n        this.m_angularImpulse *= step.dtRatio;\n        var P = Vec2.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);\n        vA.wSub(mA, P);\n        wA -= iA * (Vec2.cross(this.m_rA, P) + this.m_angularImpulse);\n        vB.wAdd(mB, P);\n        wB += iB * (Vec2.cross(this.m_rB, P) + this.m_angularImpulse);\n    } else {\n        this.m_linearImpulse.setZero();\n        this.m_angularImpulse = 0;\n    }\n    this.m_bodyA.c_velocity.v = vA;\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v = vB;\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nFrictionJoint.prototype.solveVelocityConstraints = function(step) {\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var mA = this.m_invMassA, mB = this.m_invMassB;\n    var iA = this.m_invIA, iB = this.m_invIB;\n    var h = step.dt;\n    {\n        var Cdot = wB - wA;\n        var impulse = -this.m_angularMass * Cdot;\n        var oldImpulse = this.m_angularImpulse;\n        var maxImpulse = h * this.m_maxTorque;\n        this.m_angularImpulse = Math.clamp(this.m_angularImpulse + impulse, -maxImpulse, maxImpulse);\n        impulse = this.m_angularImpulse - oldImpulse;\n        wA -= iA * impulse;\n        wB += iB * impulse;\n    }\n    {\n        var Cdot = Vec2.sub(Vec2.add(vB, Vec2.cross(wB, this.m_rB)), Vec2.add(vA, Vec2.cross(wA, this.m_rA)));\n        var impulse = Vec2.neg(Mat22.mul(this.m_linearMass, Cdot));\n        var oldImpulse = this.m_linearImpulse;\n        this.m_linearImpulse.add(impulse);\n        var maxImpulse = h * this.m_maxForce;\n        if (this.m_linearImpulse.lengthSquared() > maxImpulse * maxImpulse) {\n            this.m_linearImpulse.normalize();\n            this.m_linearImpulse.mul(maxImpulse);\n        }\n        impulse = Vec2.sub(this.m_linearImpulse, oldImpulse);\n        vA.wSub(mA, impulse);\n        wA -= iA * Vec2.cross(this.m_rA, impulse);\n        vB.wAdd(mB, impulse);\n        wB += iB * Vec2.cross(this.m_rB, impulse);\n    }\n    this.m_bodyA.c_velocity.v = vA;\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v = vB;\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nFrictionJoint.prototype.solvePositionConstraints = function(step) {\n    return true;\n};\n\n\n},{\"../Joint\":5,\"../Settings\":7,\"../common/Mat22\":16,\"../common/Mat33\":17,\"../common/Math\":18,\"../common/Position\":19,\"../common/Rot\":20,\"../common/Sweep\":21,\"../common/Transform\":22,\"../common/Vec2\":23,\"../common/Vec3\":24,\"../common/Velocity\":25,\"../util/common\":51,\"../util/create\":52,\"../util/options\":53}],30:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = GearJoint;\n\nvar common = require(\"../util/common\");\n\nvar options = require(\"../util/options\");\n\nvar create = require(\"../util/create\");\n\nvar Settings = require(\"../Settings\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Vec3 = require(\"../common/Vec3\");\n\nvar Mat22 = require(\"../common/Mat22\");\n\nvar Mat33 = require(\"../common/Mat33\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Sweep = require(\"../common/Sweep\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Velocity = require(\"../common/Velocity\");\n\nvar Position = require(\"../common/Position\");\n\nvar Joint = require(\"../Joint\");\n\nvar RevoluteJoint = require(\"./RevoluteJoint\");\n\nvar PrismaticJoint = require(\"./PrismaticJoint\");\n\nGearJoint.TYPE = \"gear-joint\";\n\nGearJoint._super = Joint;\n\nGearJoint.prototype = create(GearJoint._super.prototype);\n\nvar GearJointDef = {\n    ratio: 1\n};\n\nfunction GearJoint(def, bodyA, bodyB, joint1, joint2, ratio) {\n    if (!(this instanceof GearJoint)) {\n        return new GearJoint(def, bodyA, bodyB, joint1, joint2, ratio);\n    }\n    def = options(def, GearJointDef);\n    Joint.call(this, def, bodyA, bodyB);\n    this.m_type = GearJoint.TYPE;\n    ASSERT && common.assert(joint1.m_type == RevoluteJoint.TYPE || joint1.m_type == PrismaticJoint.TYPE);\n    ASSERT && common.assert(joint2.m_type == RevoluteJoint.TYPE || joint2.m_type == PrismaticJoint.TYPE);\n    this.m_joint1 = joint1;\n    this.m_joint2 = joint2;\n    this.m_type1 = this.m_joint1.getType();\n    this.m_type2 = this.m_joint2.getType();\n    var coordinateA, coordinateB;\n    this.m_bodyC = this.m_joint1.getBodyA();\n    this.m_bodyA = this.m_joint1.getBodyB();\n    var xfA = this.m_bodyA.m_xf;\n    var aA = this.m_bodyA.m_sweep.a;\n    var xfC = this.m_bodyC.m_xf;\n    var aC = this.m_bodyC.m_sweep.a;\n    if (this.m_type1 == RevoluteJoint.TYPE) {\n        var revolute = joint1;\n        this.m_localAnchorC = revolute.m_localAnchorA;\n        this.m_localAnchorA = revolute.m_localAnchorB;\n        this.m_referenceAngleA = revolute.m_referenceAngle;\n        this.m_localAxisC = Vec2.zero();\n        coordinateA = aA - aC - this.m_referenceAngleA;\n    } else {\n        var prismatic = joint1;\n        this.m_localAnchorC = prismatic.m_localAnchorA;\n        this.m_localAnchorA = prismatic.m_localAnchorB;\n        this.m_referenceAngleA = prismatic.m_referenceAngle;\n        this.m_localAxisC = prismatic.m_localXAxisA;\n        var pC = this.m_localAnchorC;\n        var pA = Rot.mulT(xfC.q, Vec2.add(Rot.mul(xfA.q, this.m_localAnchorA), Vec2.sub(xfA.p, xfC.p)));\n        coordinateA = Vec2.dot(pA, this.m_localAxisC) - Vec2.dot(pC, this.m_localAxisC);\n    }\n    this.m_bodyD = this.m_joint2.getBodyA();\n    this.m_bodyB = this.m_joint2.getBodyB();\n    var xfB = this.m_bodyB.m_xf;\n    var aB = this.m_bodyB.m_sweep.a;\n    var xfD = this.m_bodyD.m_xf;\n    var aD = this.m_bodyD.m_sweep.a;\n    if (this.m_type2 == RevoluteJoint.TYPE) {\n        var revolute = joint2;\n        this.m_localAnchorD = revolute.m_localAnchorA;\n        this.m_localAnchorB = revolute.m_localAnchorB;\n        this.m_referenceAngleB = revolute.m_referenceAngle;\n        this.m_localAxisD = Vec2.zero();\n        coordinateB = aB - aD - this.m_referenceAngleB;\n    } else {\n        var prismatic = joint2;\n        this.m_localAnchorD = prismatic.m_localAnchorA;\n        this.m_localAnchorB = prismatic.m_localAnchorB;\n        this.m_referenceAngleB = prismatic.m_referenceAngle;\n        this.m_localAxisD = prismatic.m_localXAxisA;\n        var pD = this.m_localAnchorD;\n        var pB = Rot.mulT(xfD.q, Vec2.add(Rot.mul(xfB.q, this.m_localAnchorB), Vec2.sub(xfB.p, xfD.p)));\n        coordinateB = Vec2.dot(pB, this.m_localAxisD) - Vec2.dot(pD, this.m_localAxisD);\n    }\n    this.m_ratio = ratio || def.ratio;\n    this.m_constant = coordinateA + this.m_ratio * coordinateB;\n    this.m_impulse = 0;\n    this.m_lcA, this.m_lcB, this.m_lcC, this.m_lcD;\n    this.m_mA, this.m_mB, this.m_mC, this.m_mD;\n    this.m_iA, this.m_iB, this.m_iC, this.m_iD;\n    this.m_JvAC, this.m_JvBD;\n    this.m_JwA, this.m_JwB, this.m_JwC, this.m_JwD;\n    this.m_mass;\n}\n\nGearJoint.prototype.getJoint1 = function() {\n    return this.m_joint1;\n};\n\nGearJoint.prototype.getJoint2 = function() {\n    return this.m_joint2;\n};\n\nGearJoint.prototype.setRatio = function(ratio) {\n    ASSERT && common.assert(IsValid(ratio));\n    this.m_ratio = ratio;\n};\n\nGearJoint.prototype.setRatio = function() {\n    return this.m_ratio;\n};\n\nGearJoint.prototype.getAnchorA = function() {\n    return this.m_bodyA.getWorldPoint(this.m_localAnchorA);\n};\n\nGearJoint.prototype.getAnchorB = function() {\n    return this.m_bodyB.getWorldPoint(this.m_localAnchorB);\n};\n\nGearJoint.prototype.getReactionForce = function(inv_dt) {\n    var P = this.m_impulse * this.m_JvAC;\n    return inv_dt * P;\n};\n\nGearJoint.prototype.getReactionTorque = function(inv_dt) {\n    var L = this.m_impulse * this.m_JwA;\n    return inv_dt * L;\n};\n\nGearJoint.prototype.initVelocityConstraints = function(step) {\n    this.m_lcA = this.m_bodyA.m_sweep.localCenter;\n    this.m_lcB = this.m_bodyB.m_sweep.localCenter;\n    this.m_lcC = this.m_bodyC.m_sweep.localCenter;\n    this.m_lcD = this.m_bodyD.m_sweep.localCenter;\n    this.m_mA = this.m_bodyA.m_invMass;\n    this.m_mB = this.m_bodyB.m_invMass;\n    this.m_mC = this.m_bodyC.m_invMass;\n    this.m_mD = this.m_bodyD.m_invMass;\n    this.m_iA = this.m_bodyA.m_invI;\n    this.m_iB = this.m_bodyB.m_invI;\n    this.m_iC = this.m_bodyC.m_invI;\n    this.m_iD = this.m_bodyD.m_invI;\n    var aA = this.m_bodyA.c_position.a;\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var aB = this.m_bodyB.c_position.a;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var aC = this.m_bodyC.c_position.a;\n    var vC = this.m_bodyC.c_velocity.v;\n    var wC = this.m_bodyC.c_velocity.w;\n    var aD = this.m_bodyD.c_position.a;\n    var vD = this.m_bodyD.c_velocity.v;\n    var wD = this.m_bodyD.c_velocity.w;\n    var qA = Rot.neo(aA);\n    var qB = Rot.neo(aB);\n    var qC = Rot.neo(aC);\n    var qD = Rot.neo(aD);\n    this.m_mass = 0;\n    if (this.m_type1 == RevoluteJoint.TYPE) {\n        this.m_JvAC = Vec2.zero();\n        this.m_JwA = 1;\n        this.m_JwC = 1;\n        this.m_mass += this.m_iA + this.m_iC;\n    } else {\n        var u = Rot.mul(qC, this.m_localAxisC);\n        var rC = Rot.mulSub(qC, this.m_localAnchorC, this.m_lcC);\n        var rA = Rot.mulSub(qA, this.m_localAnchorA, this.m_lcA);\n        this.m_JvAC = u;\n        this.m_JwC = Vec2.cross(rC, u);\n        this.m_JwA = Vec2.cross(rA, u);\n        this.m_mass += this.m_mC + this.m_mA + this.m_iC * this.m_JwC * this.m_JwC + this.m_iA * this.m_JwA * this.m_JwA;\n    }\n    if (this.m_type2 == RevoluteJoint.TYPE) {\n        this.m_JvBD = Vec2.zero();\n        this.m_JwB = this.m_ratio;\n        this.m_JwD = this.m_ratio;\n        this.m_mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);\n    } else {\n        var u = Rot.mul(qD, this.m_localAxisD);\n        var rD = Rot.mulSub(qD, this.m_localAnchorD, this.m_lcD);\n        var rB = Rot.mulSub(qB, this.m_localAnchorB, this.m_lcB);\n        this.m_JvBD = Vec2.mul(this.m_ratio, u);\n        this.m_JwD = this.m_ratio * Vec2.cross(rD, u);\n        this.m_JwB = this.m_ratio * Vec2.cross(rB, u);\n        this.m_mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * this.m_JwD * this.m_JwD + this.m_iB * this.m_JwB * this.m_JwB;\n    }\n    this.m_mass = this.m_mass > 0 ? 1 / this.m_mass : 0;\n    if (step.warmStarting) {\n        vA.wAdd(this.m_mA * this.m_impulse, this.m_JvAC);\n        wA += this.m_iA * this.m_impulse * this.m_JwA;\n        vB.wAdd(this.m_mB * this.m_impulse, this.m_JvBD);\n        wB += this.m_iB * this.m_impulse * this.m_JwB;\n        vC.wSub(this.m_mC * this.m_impulse, this.m_JvAC);\n        wC -= this.m_iC * this.m_impulse * this.m_JwC;\n        vD.wSub(this.m_mD * this.m_impulse, this.m_JvBD);\n        wD -= this.m_iD * this.m_impulse * this.m_JwD;\n    } else {\n        this.m_impulse = 0;\n    }\n    this.m_bodyA.c_velocity.v.set(vA);\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v.set(vB);\n    this.m_bodyB.c_velocity.w = wB;\n    this.m_bodyC.c_velocity.v.set(vC);\n    this.m_bodyC.c_velocity.w = wC;\n    this.m_bodyD.c_velocity.v.set(vD);\n    this.m_bodyD.c_velocity.w = wD;\n};\n\nGearJoint.prototype.solveVelocityConstraints = function(step) {\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var vC = this.m_bodyC.c_velocity.v;\n    var wC = this.m_bodyC.c_velocity.w;\n    var vD = this.m_bodyD.c_velocity.v;\n    var wD = this.m_bodyD.c_velocity.w;\n    var Cdot = Vec2.dot(this.m_JvAC, vA) - Vec2.dot(this.m_JvAC, vC) + Vec2.dot(this.m_JvBD, vB) - Vec2.dot(this.m_JvBD, vD);\n    Cdot += this.m_JwA * wA - this.m_JwC * wC + (this.m_JwB * wB - this.m_JwD * wD);\n    var impulse = -this.m_mass * Cdot;\n    this.m_impulse += impulse;\n    vA.wAdd(this.m_mA * impulse, this.m_JvAC);\n    wA += this.m_iA * impulse * this.m_JwA;\n    vB.wAdd(this.m_mB * impulse, this.m_JvBD);\n    wB += this.m_iB * impulse * this.m_JwB;\n    vC.wSub(this.m_mC * impulse, this.m_JvAC);\n    wC -= this.m_iC * impulse * this.m_JwC;\n    vD.wSub(this.m_mD * impulse, this.m_JvBD);\n    wD -= this.m_iD * impulse * this.m_JwD;\n    this.m_bodyA.c_velocity.v.set(vA);\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v.set(vB);\n    this.m_bodyB.c_velocity.w = wB;\n    this.m_bodyC.c_velocity.v.set(vC);\n    this.m_bodyC.c_velocity.w = wC;\n    this.m_bodyD.c_velocity.v.set(vD);\n    this.m_bodyD.c_velocity.w = wD;\n};\n\nGearJoint.prototype.solvePositionConstraints = function(step) {\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var cC = this.m_bodyC.c_position.c;\n    var aC = this.m_bodyC.c_position.a;\n    var cD = this.m_bodyD.c_position.c;\n    var aD = this.m_bodyD.c_position.a;\n    var qA = Rot.neo(aA);\n    var qB = Rot.neo(aB);\n    var qC = Rot.neo(aC);\n    var qD = Rot.neo(aD);\n    var linearError = 0;\n    var coordinateA, coordinateB;\n    var JvAC, JvBD;\n    var JwA, JwB, JwC, JwD;\n    var mass = 0;\n    if (this.m_type1 == RevoluteJoint.TYPE) {\n        JvAC = Vec2.zero();\n        JwA = 1;\n        JwC = 1;\n        mass += this.m_iA + this.m_iC;\n        coordinateA = aA - aC - this.m_referenceAngleA;\n    } else {\n        var u = Rot.mul(qC, this.m_localAxisC);\n        var rC = Rot.mulSub(qC, this.m_localAnchorC, this.m_lcC);\n        var rA = Rot.mulSub(qA, this.m_localAnchorA, this.m_lcA);\n        JvAC = u;\n        JwC = Vec2.cross(rC, u);\n        JwA = Vec2.cross(rA, u);\n        mass += this.m_mC + this.m_mA + this.m_iC * JwC * JwC + this.m_iA * JwA * JwA;\n        var pC = this.m_localAnchorC - this.m_lcC;\n        var pA = Rot.mulT(qC, Vec2.add(rA, Vec2.sub(cA, cC)));\n        coordinateA = Dot(pA - pC, this.m_localAxisC);\n    }\n    if (this.m_type2 == RevoluteJoint.TYPE) {\n        JvBD = Vec2.zero();\n        JwB = this.m_ratio;\n        JwD = this.m_ratio;\n        mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);\n        coordinateB = aB - aD - this.m_referenceAngleB;\n    } else {\n        var u = Rot.mul(qD, this.m_localAxisD);\n        var rD = Rot.mulSub(qD, this.m_localAnchorD, this.m_lcD);\n        var rB = Rot.mulSub(qB, this.m_localAnchorB, this.m_lcB);\n        JvBD = Vec2.mul(this.m_ratio, u);\n        JwD = this.m_ratio * Vec2.cross(rD, u);\n        JwB = this.m_ratio * Vec2.cross(rB, u);\n        mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * JwD * JwD + this.m_iB * JwB * JwB;\n        var pD = Vec2.sub(this.m_localAnchorD, this.m_lcD);\n        var pB = Rot.mulT(qD, Vec2.add(rB, Vec2.sub(cB, cD)));\n        coordinateB = Vec2.dot(pB, this.m_localAxisD) - Vec2.dot(pD, this.m_localAxisD);\n    }\n    var C = coordinateA + this.m_ratio * coordinateB - this.m_constant;\n    var impulse = 0;\n    if (mass > 0) {\n        impulse = -C / mass;\n    }\n    cA.wAdd(this.m_mA * impulse, JvAC);\n    aA += this.m_iA * impulse * JwA;\n    cB.wAdd(this.m_mB * impulse, JvBD);\n    aB += this.m_iB * impulse * JwB;\n    cC.wAdd(this.m_mC * impulse, JvAC);\n    aC -= this.m_iC * impulse * JwC;\n    cD.wAdd(this.m_mD * impulse, JvBD);\n    aD -= this.m_iD * impulse * JwD;\n    this.m_bodyA.c_position.c.set(cA);\n    this.m_bodyA.c_position.a = aA;\n    this.m_bodyB.c_position.c.set(cB);\n    this.m_bodyB.c_position.a = aB;\n    this.m_bodyC.c_position.c.set(cC);\n    this.m_bodyC.c_position.a = aC;\n    this.m_bodyD.c_position.c.set(cD);\n    this.m_bodyD.c_position.a = aD;\n    return linearError < Settings.linearSlop;\n};\n\n\n},{\"../Joint\":5,\"../Settings\":7,\"../common/Mat22\":16,\"../common/Mat33\":17,\"../common/Math\":18,\"../common/Position\":19,\"../common/Rot\":20,\"../common/Sweep\":21,\"../common/Transform\":22,\"../common/Vec2\":23,\"../common/Vec3\":24,\"../common/Velocity\":25,\"../util/common\":51,\"../util/create\":52,\"../util/options\":53,\"./PrismaticJoint\":33,\"./RevoluteJoint\":35}],31:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = MotorJoint;\n\nvar common = require(\"../util/common\");\n\nvar options = require(\"../util/options\");\n\nvar create = require(\"../util/create\");\n\nvar Settings = require(\"../Settings\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Vec3 = require(\"../common/Vec3\");\n\nvar Mat22 = require(\"../common/Mat22\");\n\nvar Mat33 = require(\"../common/Mat33\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Sweep = require(\"../common/Sweep\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Velocity = require(\"../common/Velocity\");\n\nvar Position = require(\"../common/Position\");\n\nvar Joint = require(\"../Joint\");\n\nMotorJoint.TYPE = \"motor-joint\";\n\nMotorJoint._super = Joint;\n\nMotorJoint.prototype = create(MotorJoint._super.prototype);\n\nvar MotorJointDef = {\n    maxForce: 1,\n    maxTorque: 1,\n    correctionFactor: .3\n};\n\nfunction MotorJoint(def, bodyA, bodyB) {\n    if (!(this instanceof MotorJoint)) {\n        return new MotorJoint(def, bodyA, bodyB);\n    }\n    def = options(def, MotorJointDef);\n    Joint.call(this, def, bodyA, bodyB);\n    this.m_type = MotorJoint.TYPE;\n    var xB = bodyB.getPosition();\n    this.m_linearOffset = bodyA.getLocalPoint(xB);\n    var angleA = bodyA.getAngle();\n    var angleB = bodyB.getAngle();\n    this.m_angularOffset = angleB - angleA;\n    this.m_linearImpulse = Vec2.zero();\n    this.m_angularImpulse = 0;\n    this.m_maxForce = def.maxForce;\n    this.m_maxTorque = def.maxTorque;\n    this.m_correctionFactor = def.correctionFactor;\n    this.m_rA;\n    this.m_rB;\n    this.m_localCenterA;\n    this.m_localCenterB;\n    this.m_linearError;\n    this.m_angularError;\n    this.m_invMassA;\n    this.m_invMassB;\n    this.m_invIA;\n    this.m_invIB;\n    this.m_linearMass;\n    this.m_angularMass;\n}\n\nMotorJoint.prototype.setMaxForce = function(force) {\n    ASSERT && common.assert(IsValid(force) && force >= 0);\n    this.m_maxForce = force;\n};\n\nMotorJoint.prototype.getMaxForce = function() {\n    return this.m_maxForce;\n};\n\nMotorJoint.prototype.setMaxTorque = function(torque) {\n    ASSERT && common.assert(IsValid(torque) && torque >= 0);\n    this.m_maxTorque = torque;\n};\n\nMotorJoint.prototype.getMaxTorque = function() {\n    return this.m_maxTorque;\n};\n\nMotorJoint.prototype.setCorrectionFactor = function(factor) {\n    ASSERT && common.assert(IsValid(factor) && 0 <= factor && factor <= 1);\n    this.m_correctionFactor = factor;\n};\n\nMotorJoint.prototype.getCorrectionFactor = function() {\n    return this.m_correctionFactor;\n};\n\nMotorJoint.prototype.setLinearOffset = function(linearOffset) {\n    if (linearOffset.x != this.m_linearOffset.x || linearOffset.y != this.m_linearOffset.y) {\n        this.m_bodyA.setAwake(true);\n        this.m_bodyB.setAwake(true);\n        this.m_linearOffset = linearOffset;\n    }\n};\n\nMotorJoint.prototype.getLinearOffset = function() {\n    return this.m_linearOffset;\n};\n\nMotorJoint.prototype.setAngularOffset = function(angularOffset) {\n    if (angularOffset != this.m_angularOffset) {\n        this.m_bodyA.setAwake(true);\n        this.m_bodyB.setAwake(true);\n        this.m_angularOffset = angularOffset;\n    }\n};\n\nMotorJoint.prototype.getAngularOffset = function() {\n    return this.m_angularOffset;\n};\n\nMotorJoint.prototype.getAnchorA = function() {\n    return this.m_bodyA.getPosition();\n};\n\nMotorJoint.prototype.getAnchorB = function() {\n    return this.m_bodyB.getPosition();\n};\n\nMotorJoint.prototype.getReactionForce = function(inv_dt) {\n    return inv_dt * this.m_linearImpulse;\n};\n\nMotorJoint.prototype.getReactionTorque = function(inv_dt) {\n    return inv_dt * this.m_angularImpulse;\n};\n\nMotorJoint.prototype.initVelocityConstraints = function(step) {\n    this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;\n    this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;\n    this.m_invMassA = this.m_bodyA.m_invMass;\n    this.m_invMassB = this.m_bodyB.m_invMass;\n    this.m_invIA = this.m_bodyA.m_invI;\n    this.m_invIB = this.m_bodyB.m_invI;\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var qA = Rot.neo(aA), qB = Rot.neo(aB);\n    this.m_rA = Rot.mul(qA, Vec2.neg(this.m_localCenterA));\n    this.m_rB = Rot.mul(qB, Vec2.neg(this.m_localCenterB));\n    var mA = this.m_invMassA;\n    var mB = this.m_invMassB;\n    var iA = this.m_invIA;\n    var iB = this.m_invIB;\n    var K = new Mat22();\n    K.ex.x = mA + mB + iA * this.m_rA.y * this.m_rA.y + iB * this.m_rB.y * this.m_rB.y;\n    K.ex.y = -iA * this.m_rA.x * this.m_rA.y - iB * this.m_rB.x * this.m_rB.y;\n    K.ey.x = K.ex.y;\n    K.ey.y = mA + mB + iA * this.m_rA.x * this.m_rA.x + iB * this.m_rB.x * this.m_rB.x;\n    this.m_linearMass = K.getInverse();\n    this.m_angularMass = iA + iB;\n    if (this.m_angularMass > 0) {\n        this.m_angularMass = 1 / this.m_angularMass;\n    }\n    this.m_linearError = Vec2.zero();\n    this.m_linearError.wAdd(1, cB, 1, this.m_rB);\n    this.m_linearError.wSub(1, cA, 1, this.m_rA);\n    this.m_linearError.sub(Rot.mul(qA, this.m_linearOffset));\n    this.m_angularError = aB - aA - this.m_angularOffset;\n    if (step.warmStarting) {\n        this.m_linearImpulse.mul(step.dtRatio);\n        this.m_angularImpulse *= step.dtRatio;\n        var P = Vec2.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);\n        vA.wSub(mA, P);\n        wA -= iA * (Vec2.cross(this.m_rA, P) + this.m_angularImpulse);\n        vB.wAdd(mB, P);\n        wB += iB * (Vec2.cross(this.m_rB, P) + this.m_angularImpulse);\n    } else {\n        this.m_linearImpulse.setZero();\n        this.m_angularImpulse = 0;\n    }\n    this.m_bodyA.c_velocity.v = vA;\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v = vB;\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nMotorJoint.prototype.solveVelocityConstraints = function(step) {\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var mA = this.m_invMassA, mB = this.m_invMassB;\n    var iA = this.m_invIA, iB = this.m_invIB;\n    var h = step.dt;\n    var inv_h = step.inv_dt;\n    {\n        var Cdot = wB - wA + inv_h * this.m_correctionFactor * this.m_angularError;\n        var impulse = -this.m_angularMass * Cdot;\n        var oldImpulse = this.m_angularImpulse;\n        var maxImpulse = h * this.m_maxTorque;\n        this.m_angularImpulse = Math.clamp(this.m_angularImpulse + impulse, -maxImpulse, maxImpulse);\n        impulse = this.m_angularImpulse - oldImpulse;\n        wA -= iA * impulse;\n        wB += iB * impulse;\n    }\n    {\n        var Cdot = Vec2.zero();\n        Cdot.wAdd(1, vB, 1, Vec2.cross(wB, this.m_rB));\n        Cdot.wSub(1, vA, 1, Vec2.cross(wA, this.m_rA));\n        Cdot.wAdd(inv_h * this.m_correctionFactor, this.m_linearError);\n        var impulse = Vec2.neg(Mat22.mul(this.m_linearMass, Cdot));\n        var oldImpulse = Vec2.clone(this.m_linearImpulse);\n        this.m_linearImpulse.add(impulse);\n        var maxImpulse = h * this.m_maxForce;\n        this.m_linearImpulse.clamp(maxImpulse);\n        impulse = Vec2.sub(this.m_linearImpulse, oldImpulse);\n        vA.wSub(mA, impulse);\n        wA -= iA * Vec2.cross(this.m_rA, impulse);\n        vB.wAdd(mB, impulse);\n        wB += iB * Vec2.cross(this.m_rB, impulse);\n    }\n    this.m_bodyA.c_velocity.v = vA;\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v = vB;\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nMotorJoint.prototype.solvePositionConstraints = function(step) {\n    return true;\n};\n\n\n},{\"../Joint\":5,\"../Settings\":7,\"../common/Mat22\":16,\"../common/Mat33\":17,\"../common/Math\":18,\"../common/Position\":19,\"../common/Rot\":20,\"../common/Sweep\":21,\"../common/Transform\":22,\"../common/Vec2\":23,\"../common/Vec3\":24,\"../common/Velocity\":25,\"../util/common\":51,\"../util/create\":52,\"../util/options\":53}],32:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = MouseJoint;\n\nvar common = require(\"../util/common\");\n\nvar options = require(\"../util/options\");\n\nvar create = require(\"../util/create\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Vec3 = require(\"../common/Vec3\");\n\nvar Mat22 = require(\"../common/Mat22\");\n\nvar Mat33 = require(\"../common/Mat33\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Sweep = require(\"../common/Sweep\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Velocity = require(\"../common/Velocity\");\n\nvar Position = require(\"../common/Position\");\n\nvar Joint = require(\"../Joint\");\n\nMouseJoint.TYPE = \"mouse-joint\";\n\nMouseJoint._super = Joint;\n\nMouseJoint.prototype = create(MouseJoint._super.prototype);\n\nvar MouseJointDef = {\n    maxForce: 0,\n    frequencyHz: 5,\n    dampingRatio: .7\n};\n\nfunction MouseJoint(def, bodyA, bodyB, target) {\n    if (!(this instanceof MouseJoint)) {\n        return new MouseJoint(def, bodyA, bodyB, target);\n    }\n    def = options(def, MouseJointDef);\n    Joint.call(this, def, bodyA, bodyB);\n    this.m_type = MouseJoint.TYPE;\n    ASSERT && common.assert(Math.isFinite(def.maxForce) && def.maxForce >= 0);\n    ASSERT && common.assert(Math.isFinite(def.frequencyHz) && def.frequencyHz >= 0);\n    ASSERT && common.assert(Math.isFinite(def.dampingRatio) && def.dampingRatio >= 0);\n    this.m_targetA = Vec2.clone(target);\n    this.m_localAnchorB = Transform.mulT(this.m_bodyB.getTransform(), this.m_targetA);\n    this.m_maxForce = def.maxForce;\n    this.m_impulse = Vec2.zero();\n    this.m_frequencyHz = def.frequencyHz;\n    this.m_dampingRatio = def.dampingRatio;\n    this.m_beta = 0;\n    this.m_gamma = 0;\n    this.m_rB = Vec2.zero();\n    this.m_localCenterB = Vec2.zero();\n    this.m_invMassB = 0;\n    this.m_invIB = 0;\n    this.mass = new Mat22();\n    this.m_C = Vec2.zero();\n}\n\nMouseJoint.prototype.setTarget = function(target) {\n    if (this.m_bodyB.isAwake() == false) {\n        this.m_bodyB.setAwake(true);\n    }\n    this.m_targetA = Vec2.clone(target);\n};\n\nMouseJoint.prototype.getTarget = function() {\n    return this.m_targetA;\n};\n\nMouseJoint.prototype.setMaxForce = function(force) {\n    this.m_maxForce = force;\n};\n\nMouseJoint.getMaxForce = function() {\n    return this.m_maxForce;\n};\n\nMouseJoint.prototype.setFrequency = function(hz) {\n    this.m_frequencyHz = hz;\n};\n\nMouseJoint.prototype.getFrequency = function() {\n    return this.m_frequencyHz;\n};\n\nMouseJoint.prototype.setDampingRatio = function(ratio) {\n    this.m_dampingRatio = ratio;\n};\n\nMouseJoint.prototype.getDampingRatio = function() {\n    return this.m_dampingRatio;\n};\n\nMouseJoint.prototype.getAnchorA = function() {\n    return Vec2.clone(this.m_targetA);\n};\n\nMouseJoint.prototype.getAnchorB = function() {\n    return this.m_bodyB.getWorldPoint(this.m_localAnchorB);\n};\n\nMouseJoint.prototype.getReactionForce = function(inv_dt) {\n    return Vec2.mul(inv_dt, this.m_impulse);\n};\n\nMouseJoint.prototype.getReactionTorque = function(inv_dt) {\n    return inv_dt * 0;\n};\n\nMouseJoint.prototype.shiftOrigin = function(newOrigin) {\n    this.m_targetA.sub(newOrigin);\n};\n\nMouseJoint.prototype.initVelocityConstraints = function(step) {\n    this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;\n    this.m_invMassB = this.m_bodyB.m_invMass;\n    this.m_invIB = this.m_bodyB.m_invI;\n    var position = this.m_bodyB.c_position;\n    var velocity = this.m_bodyB.c_velocity;\n    var cB = position.c;\n    var aB = position.a;\n    var vB = velocity.v;\n    var wB = velocity.w;\n    var qB = Rot.neo(aB);\n    var mass = this.m_bodyB.getMass();\n    var omega = 2 * Math.PI * this.m_frequencyHz;\n    var d = 2 * mass * this.m_dampingRatio * omega;\n    var k = mass * (omega * omega);\n    var h = step.dt;\n    ASSERT && common.assert(d + h * k > Math.EPSILON);\n    this.m_gamma = h * (d + h * k);\n    if (this.m_gamma != 0) {\n        this.m_gamma = 1 / this.m_gamma;\n    }\n    this.m_beta = h * k * this.m_gamma;\n    this.m_rB = Rot.mul(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));\n    var K = new Mat22();\n    K.ex.x = this.m_invMassB + this.m_invIB * this.m_rB.y * this.m_rB.y + this.m_gamma;\n    K.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y;\n    K.ey.x = K.ex.y;\n    K.ey.y = this.m_invMassB + this.m_invIB * this.m_rB.x * this.m_rB.x + this.m_gamma;\n    this.m_mass = K.getInverse();\n    this.m_C.set(cB);\n    this.m_C.wAdd(1, this.m_rB, -1, this.m_targetA);\n    this.m_C.mul(this.m_beta);\n    wB *= .98;\n    if (step.warmStarting) {\n        this.m_impulse.mul(step.dtRatio);\n        vB.wAdd(this.m_invMassB, this.m_impulse);\n        wB += this.m_invIB * Vec2.cross(this.m_rB, this.m_impulse);\n    } else {\n        this.m_impulse.setZero();\n    }\n    velocity.v.set(vB);\n    velocity.w = wB;\n};\n\nMouseJoint.prototype.solveVelocityConstraints = function(step) {\n    var velocity = this.m_bodyB.c_velocity;\n    var vB = Vec2.clone(velocity.v);\n    var wB = velocity.w;\n    var Cdot = Vec2.cross(wB, this.m_rB);\n    Cdot.add(vB);\n    Cdot.wAdd(1, this.m_C, this.m_gamma, this.m_impulse);\n    Cdot.neg();\n    var impulse = Mat22.mul(this.m_mass, Cdot);\n    var oldImpulse = Vec2.clone(this.m_impulse);\n    this.m_impulse.add(impulse);\n    var maxImpulse = step.dt * this.m_maxForce;\n    this.m_impulse.clamp(maxImpulse);\n    impulse = Vec2.sub(this.m_impulse, oldImpulse);\n    vB.wAdd(this.m_invMassB, impulse);\n    wB += this.m_invIB * Vec2.cross(this.m_rB, impulse);\n    velocity.v.set(vB);\n    velocity.w = wB;\n};\n\nMouseJoint.prototype.solvePositionConstraints = function(step) {\n    return true;\n};\n\n\n},{\"../Joint\":5,\"../common/Mat22\":16,\"../common/Mat33\":17,\"../common/Math\":18,\"../common/Position\":19,\"../common/Rot\":20,\"../common/Sweep\":21,\"../common/Transform\":22,\"../common/Vec2\":23,\"../common/Vec3\":24,\"../common/Velocity\":25,\"../util/common\":51,\"../util/create\":52,\"../util/options\":53}],33:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = PrismaticJoint;\n\nvar common = require(\"../util/common\");\n\nvar options = require(\"../util/options\");\n\nvar create = require(\"../util/create\");\n\nvar Settings = require(\"../Settings\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Vec3 = require(\"../common/Vec3\");\n\nvar Mat22 = require(\"../common/Mat22\");\n\nvar Mat33 = require(\"../common/Mat33\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Sweep = require(\"../common/Sweep\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Velocity = require(\"../common/Velocity\");\n\nvar Position = require(\"../common/Position\");\n\nvar Joint = require(\"../Joint\");\n\nvar inactiveLimit = 0;\n\nvar atLowerLimit = 1;\n\nvar atUpperLimit = 2;\n\nvar equalLimits = 3;\n\nPrismaticJoint.TYPE = \"prismatic-joint\";\n\nPrismaticJoint._super = Joint;\n\nPrismaticJoint.prototype = create(PrismaticJoint._super.prototype);\n\nvar PrismaticJointDef = {\n    enableLimit: false,\n    lowerTranslation: 0,\n    upperTranslation: 0,\n    enableMotor: false,\n    maxMotorForce: 0,\n    motorSpeed: 0\n};\n\nfunction PrismaticJoint(def, bodyA, bodyB, anchor, axis) {\n    if (!(this instanceof PrismaticJoint)) {\n        return new PrismaticJoint(def, bodyA, bodyB, anchor, axis);\n    }\n    def = options(def, PrismaticJointDef);\n    Joint.call(this, def, bodyA, bodyB);\n    this.m_type = PrismaticJoint.TYPE;\n    this.m_localAnchorA = def.localAnchorA || bodyA.getLocalPoint(anchor);\n    this.m_localAnchorB = def.localAnchorB || bodyB.getLocalPoint(anchor);\n    this.m_localXAxisA = def.localAxisA || bodyA.getLocalVector(axis);\n    this.m_localXAxisA.normalize();\n    this.m_localYAxisA = Vec2.cross(1, this.m_localXAxisA);\n    this.m_referenceAngle = bodyB.getAngle() - bodyA.getAngle();\n    this.m_impulse = Vec3();\n    this.m_motorMass = 0;\n    this.m_motorImpulse = 0;\n    this.m_lowerTranslation = def.lowerTranslation;\n    this.m_upperTranslation = def.upperTranslation;\n    this.m_maxMotorForce = def.maxMotorForce;\n    this.m_motorSpeed = def.motorSpeed;\n    this.m_enableLimit = def.enableLimit;\n    this.m_enableMotor = def.enableMotor;\n    this.m_limitState = inactiveLimit;\n    this.m_axis = Vec2.zero();\n    this.m_perp = Vec2.zero();\n    this.m_localCenterA;\n    this.m_localCenterB;\n    this.m_invMassA;\n    this.m_invMassB;\n    this.m_invIA;\n    this.m_invIB;\n    this.m_axis, this.m_perp;\n    this.m_s1, this.m_s2;\n    this.m_a1, this.m_a2;\n    this.m_K = new Mat33();\n    this.m_motorMass;\n}\n\nPrismaticJoint.prototype.getLocalAnchorA = function() {\n    return this.m_localAnchorA;\n};\n\nPrismaticJoint.prototype.getLocalAnchorB = function() {\n    return this.m_localAnchorB;\n};\n\nPrismaticJoint.prototype.getLocalAxisA = function() {\n    return this.m_localXAxisA;\n};\n\nPrismaticJoint.prototype.getReferenceAngle = function() {\n    return this.m_referenceAngle;\n};\n\nPrismaticJoint.prototype.getJointTranslation = function() {\n    var pA = this.m_bodyA.getWorldPoint(this.m_localAnchorA);\n    var pB = this.m_bodyB.getWorldPoint(this.m_localAnchorB);\n    var d = Vec2.sub(pB, pA);\n    var axis = this.m_bodyA.getWorldVector(this.m_localXAxisA);\n    var translation = Vec2.dot(d, axis);\n    return translation;\n};\n\nPrismaticJoint.prototype.getJointSpeed = function() {\n    var bA = this.m_bodyA;\n    var bB = this.m_bodyB;\n    var rA = Mul(bA.m_xf.q, this.m_localAnchorA - bA.m_sweep.localCenter);\n    var rB = Mul(bB.m_xf.q, this.m_localAnchorB - bB.m_sweep.localCenter);\n    var p1 = bA.m_sweep.c + rA;\n    var p2 = bB.m_sweep.c + rB;\n    var d = p2 - p1;\n    var axis = Mul(bA.m_xf.q, this.m_localXAxisA);\n    var vA = bA.m_linearVelocity;\n    var vB = bB.m_linearVelocity;\n    var wA = bA.m_angularVelocity;\n    var wB = bB.m_angularVelocity;\n    var speed = Dot(d, Cross(wA, axis)) + Dot(axis, vB + Cross(wB, rB) - vA - Cross(wA, rA));\n    return speed;\n};\n\nPrismaticJoint.prototype.isLimitEnabled = function() {\n    return this.m_enableLimit;\n};\n\nPrismaticJoint.prototype.enableLimit = function(flag) {\n    if (flag != this.m_enableLimit) {\n        this.m_bodyA.setAwake(true);\n        this.m_bodyB.setAwake(true);\n        this.m_enableLimit = flag;\n        this.m_impulse.z = 0;\n    }\n};\n\nPrismaticJoint.prototype.getLowerLimit = function() {\n    return this.m_lowerTranslation;\n};\n\nPrismaticJoint.prototype.getUpperLimit = function() {\n    return this.m_upperTranslation;\n};\n\nPrismaticJoint.prototype.setLimits = function(lower, upper) {\n    ASSERT && common.assert(lower <= upper);\n    if (lower != this.m_lowerTranslation || upper != this.m_upperTranslation) {\n        this.m_bodyA.setAwake(true);\n        this.m_bodyB.setAwake(true);\n        this.m_lowerTranslation = lower;\n        this.m_upperTranslation = upper;\n        this.m_impulse.z = 0;\n    }\n};\n\nPrismaticJoint.prototype.isMotorEnabled = function() {\n    return this.m_enableMotor;\n};\n\nPrismaticJoint.prototype.enableMotor = function(flag) {\n    this.m_bodyA.setAwake(true);\n    this.m_bodyB.setAwake(true);\n    this.m_enableMotor = flag;\n};\n\nPrismaticJoint.prototype.setMotorSpeed = function(speed) {\n    this.m_bodyA.setAwake(true);\n    this.m_bodyB.setAwake(true);\n    this.m_motorSpeed = speed;\n};\n\nPrismaticJoint.prototype.setMaxMotorForce = function(force) {\n    this.m_bodyA.setAwake(true);\n    this.m_bodyB.setAwake(true);\n    this.m_maxMotorForce = force;\n};\n\nPrismaticJoint.prototype.getMotorSpeed = function() {\n    return this.m_motorSpeed;\n};\n\nPrismaticJoint.prototype.getMotorForce = function(inv_dt) {\n    return inv_dt * this.m_motorImpulse;\n};\n\nPrismaticJoint.prototype.getAnchorA = function() {\n    return this.m_bodyA.getWorldPoint(this.m_localAnchorA);\n};\n\nPrismaticJoint.prototype.getAnchorB = function() {\n    return this.m_bodyB.getWorldPoint(this.m_localAnchorB);\n};\n\nPrismaticJoint.prototype.getReactionForce = function(inv_dt) {\n    return inv_dt * (this.m_impulse.x * this.m_perp + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis);\n};\n\nPrismaticJoint.prototype.getReactionTorque = function(inv_dt) {\n    return inv_dt * this.m_impulse.y;\n};\n\nPrismaticJoint.prototype.initVelocityConstraints = function(step) {\n    this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;\n    this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;\n    this.m_invMassA = this.m_bodyA.m_invMass;\n    this.m_invMassB = this.m_bodyB.m_invMass;\n    this.m_invIA = this.m_bodyA.m_invI;\n    this.m_invIB = this.m_bodyB.m_invI;\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var qA = Rot.neo(aA);\n    var qB = Rot.neo(aB);\n    var rA = Rot.mul(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));\n    var rB = Rot.mul(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));\n    var d = Vec2.zero();\n    d.wAdd(1, cB, 1, rB);\n    d.wSub(1, cA, 1, rA);\n    var mA = this.m_invMassA, mB = this.m_invMassB;\n    var iA = this.m_invIA, iB = this.m_invIB;\n    {\n        this.m_axis = Rot.mul(qA, this.m_localXAxisA);\n        this.m_a1 = Vec2.cross(Vec2.add(d, rA), this.m_axis);\n        this.m_a2 = Vec2.cross(rB, this.m_axis);\n        this.m_motorMass = mA + mB + iA * this.m_a1 * this.m_a1 + iB * this.m_a2 * this.m_a2;\n        if (this.m_motorMass > 0) {\n            this.m_motorMass = 1 / this.m_motorMass;\n        }\n    }\n    {\n        this.m_perp = Rot.mul(qA, this.m_localYAxisA);\n        this.m_s1 = Vec2.cross(Vec2.add(d, rA), this.m_perp);\n        this.m_s2 = Vec2.cross(rB, this.m_perp);\n        var s1test = Vec2.cross(rA, this.m_perp);\n        var k11 = mA + mB + iA * this.m_s1 * this.m_s1 + iB * this.m_s2 * this.m_s2;\n        var k12 = iA * this.m_s1 + iB * this.m_s2;\n        var k13 = iA * this.m_s1 * this.m_a1 + iB * this.m_s2 * this.m_a2;\n        var k22 = iA + iB;\n        if (k22 == 0) {\n            k22 = 1;\n        }\n        var k23 = iA * this.m_a1 + iB * this.m_a2;\n        var k33 = mA + mB + iA * this.m_a1 * this.m_a1 + iB * this.m_a2 * this.m_a2;\n        this.m_K.ex.set(k11, k12, k13);\n        this.m_K.ey.set(k12, k22, k23);\n        this.m_K.ez.set(k13, k23, k33);\n    }\n    if (this.m_enableLimit) {\n        var jointTranslation = Vec2.dot(this.m_axis, d);\n        if (Math.abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * Settings.linearSlop) {\n            this.m_limitState = equalLimits;\n        } else if (jointTranslation <= this.m_lowerTranslation) {\n            if (this.m_limitState != atLowerLimit) {\n                this.m_limitState = atLowerLimit;\n                this.m_impulse.z = 0;\n            }\n        } else if (jointTranslation >= this.m_upperTranslation) {\n            if (this.m_limitState != atUpperLimit) {\n                this.m_limitState = atUpperLimit;\n                this.m_impulse.z = 0;\n            }\n        } else {\n            this.m_limitState = inactiveLimit;\n            this.m_impulse.z = 0;\n        }\n    } else {\n        this.m_limitState = inactiveLimit;\n        this.m_impulse.z = 0;\n    }\n    if (this.m_enableMotor == false) {\n        this.m_motorImpulse = 0;\n    }\n    if (step.warmStarting) {\n        this.m_impulse.mul(step.dtRatio);\n        this.m_motorImpulse *= step.dtRatio;\n        var P = Vec2.wAdd(this.m_impulse.x, this.m_perp, this.m_motorImpulse + this.m_impulse.z, this.m_axis);\n        var LA = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1;\n        var LB = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;\n        vA.wSub(mA, P);\n        wA -= iA * LA;\n        vB.wAdd(mB, P);\n        wB += iB * LB;\n    } else {\n        this.m_impulse.setZero();\n        this.m_motorImpulse = 0;\n    }\n    this.m_bodyA.c_velocity.v.set(vA);\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v.set(vB);\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nPrismaticJoint.prototype.solveVelocityConstraints = function(step) {\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var mA = this.m_invMassA;\n    var mB = this.m_invMassB;\n    var iA = this.m_invIA;\n    var iB = this.m_invIB;\n    if (this.m_enableMotor && this.m_limitState != equalLimits) {\n        var Cdot = Vec2.dot(this.m_axis, Vec2.sub(vB, vA)) + this.m_a2 * wB - this.m_a1 * wA;\n        var impulse = this.m_motorMass * (this.m_motorSpeed - Cdot);\n        var oldImpulse = this.m_motorImpulse;\n        var maxImpulse = step.dt * this.m_maxMotorForce;\n        this.m_motorImpulse = Math.clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);\n        impulse = this.m_motorImpulse - oldImpulse;\n        var P = Vec2.zero().wSet(impulse, this.m_axis);\n        var LA = impulse * this.m_a1;\n        var LB = impulse * this.m_a2;\n        vA.wSub(mA, P);\n        wA -= iA * LA;\n        vB.wAdd(mB, P);\n        wB += iB * LB;\n    }\n    var Cdot1 = Vec2.zero();\n    Cdot1.x += Vec2.dot(this.m_perp, vB) + this.m_s2 * wB;\n    Cdot1.x -= Vec2.dot(this.m_perp, vA) + this.m_s1 * wA;\n    Cdot1.y = wB - wA;\n    if (this.m_enableLimit && this.m_limitState != inactiveLimit) {\n        var Cdot2 = 0;\n        Cdot2 += Vec2.dot(this.m_axis, vB) + this.m_a2 * wB;\n        Cdot2 -= Vec2.dot(this.m_axis, vA) + this.m_a1 * wA;\n        var Cdot = Vec3(Cdot1.x, Cdot1.y, Cdot2);\n        var f1 = Vec3(this.m_impulse);\n        var df = this.m_K.solve33(Vec3.neg(Cdot));\n        this.m_impulse.add(df);\n        if (this.m_limitState == atLowerLimit) {\n            this.m_impulse.z = Math.max(this.m_impulse.z, 0);\n        } else if (this.m_limitState == atUpperLimit) {\n            this.m_impulse.z = Math.min(this.m_impulse.z, 0);\n        }\n        var b = Vec2.wAdd(-1, Cdot1, -(this.m_impulse.z - f1.z), Vec2.neo(this.m_K.ez.x, this.m_K.ez.y));\n        var f2r = Vec2.add(this.m_K.solve22(b), Vec2.neo(f1.x, f1.y));\n        this.m_impulse.x = f2r.x;\n        this.m_impulse.y = f2r.y;\n        df = Vec3.sub(this.m_impulse, f1);\n        var P = Vec2.wAdd(df.x, this.m_perp, df.z, this.m_axis);\n        var LA = df.x * this.m_s1 + df.y + df.z * this.m_a1;\n        var LB = df.x * this.m_s2 + df.y + df.z * this.m_a2;\n        vA.wSub(mA, P);\n        wA -= iA * LA;\n        vB.wAdd(mB, P);\n        wB += iB * LB;\n    } else {\n        var df = this.m_K.solve22(Vec2.neg(Cdot1));\n        this.m_impulse.x += df.x;\n        this.m_impulse.y += df.y;\n        var P = Vec2.zero().wAdd(df.x, this.m_perp);\n        var LA = df.x * this.m_s1 + df.y;\n        var LB = df.x * this.m_s2 + df.y;\n        vA.wSub(mA, P);\n        wA -= iA * LA;\n        vB.wAdd(mB, P);\n        wB += iB * LB;\n    }\n    this.m_bodyA.c_velocity.v = vA;\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v = vB;\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nPrismaticJoint.prototype.solvePositionConstraints = function(step) {\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var qA = Rot.neo(aA);\n    var qB = Rot.neo(aB);\n    var mA = this.m_invMassA;\n    var mB = this.m_invMassB;\n    var iA = this.m_invIA;\n    var iB = this.m_invIB;\n    var rA = Rot.mul(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));\n    var rB = Rot.mul(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));\n    var d = Vec2.sub(Vec2.add(cB, rB), Vec2.add(cA, rA));\n    var axis = Rot.mul(qA, this.m_localXAxisA);\n    var a1 = Vec2.cross(Vec2.add(d, rA), axis);\n    var a2 = Vec2.cross(rB, axis);\n    var perp = Rot.mul(qA, this.m_localYAxisA);\n    var s1 = Vec2.cross(Vec2.add(d, rA), perp);\n    var s2 = Vec2.cross(rB, perp);\n    var impulse = Vec3();\n    var C1 = Vec2.zero();\n    C1.x = Vec2.dot(perp, d);\n    C1.y = aB - aA - this.m_referenceAngle;\n    var linearError = Math.abs(C1.x);\n    var angularError = Math.abs(C1.y);\n    var linearSlop = Settings.linearSlop;\n    var maxLinearCorrection = Settings.maxLinearCorrection;\n    var active = false;\n    var C2 = 0;\n    if (this.m_enableLimit) {\n        var translation = Vec2.dot(axis, d);\n        if (Math.abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * linearSlop) {\n            C2 = Math.clamp(translation, -maxLinearCorrection, maxLinearCorrection);\n            linearError = Math.max(linearError, Math.abs(translation));\n            active = true;\n        } else if (translation <= this.m_lowerTranslation) {\n            C2 = Math.clamp(translation - this.m_lowerTranslation + linearSlop, -maxLinearCorrection, 0);\n            linearError = Math.max(linearError, this.m_lowerTranslation - translation);\n            active = true;\n        } else if (translation >= this.m_upperTranslation) {\n            C2 = Math.clamp(translation - this.m_upperTranslation - linearSlop, 0, maxLinearCorrection);\n            linearError = Math.max(linearError, translation - this.m_upperTranslation);\n            active = true;\n        }\n    }\n    if (active) {\n        var k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;\n        var k12 = iA * s1 + iB * s2;\n        var k13 = iA * s1 * a1 + iB * s2 * a2;\n        var k22 = iA + iB;\n        if (k22 == 0) {\n            k22 = 1;\n        }\n        var k23 = iA * a1 + iB * a2;\n        var k33 = mA + mB + iA * a1 * a1 + iB * a2 * a2;\n        var K = new Mat33();\n        K.ex.set(k11, k12, k13);\n        K.ey.set(k12, k22, k23);\n        K.ez.set(k13, k23, k33);\n        var C = Vec3();\n        C.x = C1.x;\n        C.y = C1.y;\n        C.z = C2;\n        impulse = K.solve33(Vec3.neg(C));\n    } else {\n        var k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;\n        var k12 = iA * s1 + iB * s2;\n        var k22 = iA + iB;\n        if (k22 == 0) {\n            k22 = 1;\n        }\n        var K = new Mat22();\n        K.ex.set(k11, k12);\n        K.ey.set(k12, k22);\n        var impulse1 = K.solve(Vec2.neg(C1));\n        impulse.x = impulse1.x;\n        impulse.y = impulse1.y;\n        impulse.z = 0;\n    }\n    var P = Vec2.wAdd(impulse.x, perp, impulse.z, axis);\n    var LA = impulse.x * s1 + impulse.y + impulse.z * a1;\n    var LB = impulse.x * s2 + impulse.y + impulse.z * a2;\n    cA.wSub(mA, P);\n    aA -= iA * LA;\n    cB.wAdd(mB, P);\n    aB += iB * LB;\n    this.m_bodyA.c_position.c = cA;\n    this.m_bodyA.c_position.a = aA;\n    this.m_bodyB.c_position.c = cB;\n    this.m_bodyB.c_position.a = aB;\n    return linearError <= Settings.linearSlop && angularError <= Settings.angularSlop;\n};\n\n\n},{\"../Joint\":5,\"../Settings\":7,\"../common/Mat22\":16,\"../common/Mat33\":17,\"../common/Math\":18,\"../common/Position\":19,\"../common/Rot\":20,\"../common/Sweep\":21,\"../common/Transform\":22,\"../common/Vec2\":23,\"../common/Vec3\":24,\"../common/Velocity\":25,\"../util/common\":51,\"../util/create\":52,\"../util/options\":53}],34:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = PulleyJoint;\n\nvar common = require(\"../util/common\");\n\nvar options = require(\"../util/options\");\n\nvar create = require(\"../util/create\");\n\nvar Settings = require(\"../Settings\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Vec3 = require(\"../common/Vec3\");\n\nvar Mat22 = require(\"../common/Mat22\");\n\nvar Mat33 = require(\"../common/Mat33\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Sweep = require(\"../common/Sweep\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Velocity = require(\"../common/Velocity\");\n\nvar Position = require(\"../common/Position\");\n\nvar Joint = require(\"../Joint\");\n\nPulleyJoint.TYPE = \"pulley-joint\";\n\nPulleyJoint.MIN_PULLEY_LENGTH = 2;\n\nPulleyJoint._super = Joint;\n\nPulleyJoint.prototype = create(PulleyJoint._super.prototype);\n\nvar PulleyJointDef = {\n    collideConnected: true\n};\n\nfunction PulleyJoint(def, bodyA, bodyB, groundA, groundB, anchorA, anchorB, ratio) {\n    if (!(this instanceof PulleyJoint)) {\n        return new PulleyJoint(def, bodyA, bodyB, groundA, groundB, anchorA, anchorB, ratio);\n    }\n    def = options(def, PulleyJointDef);\n    Joint.call(this, def, bodyA, bodyB);\n    this.m_type = PulleyJoint.TYPE;\n    this.m_groundAnchorA = groundA;\n    this.m_groundAnchorB = groundB;\n    this.m_localAnchorA = bodyA.getLocalPoint(anchorA);\n    this.m_localAnchorB = bodyB.getLocalPoint(anchorB);\n    this.m_lengthA = Vec2.distance(anchorA, groundA);\n    this.m_lengthB = Vec2.distance(anchorB, groundB);\n    this.m_ratio = def.ratio || ratio;\n    ASSERT && common.assert(ratio > Math.EPSILON);\n    this.m_constant = this.m_lengthA + this.m_ratio * this.m_lengthB;\n    this.m_impulse = 0;\n    this.m_uA;\n    this.m_uB;\n    this.m_rA;\n    this.m_rB;\n    this.m_localCenterA;\n    this.m_localCenterB;\n    this.m_invMassA;\n    this.m_invMassB;\n    this.m_invIA;\n    this.m_invIB;\n    this.m_mass;\n}\n\nPulleyJoint.prototype.getGroundAnchorA = function() {\n    return this.m_groundAnchorA;\n};\n\nPulleyJoint.prototype.getGroundAnchorB = function() {\n    return this.m_groundAnchorB;\n};\n\nPulleyJoint.prototype.getLengthA = function() {\n    return this.m_lengthA;\n};\n\nPulleyJoint.prototype.getLengthB = function() {\n    return this.m_lengthB;\n};\n\nPulleyJoint.prototype.setRatio = function() {\n    return this.m_ratio;\n};\n\nPulleyJoint.prototype.getCurrentLengthA = function() {\n    var p = this.m_bodyA.getWorldPoint(this.m_localAnchorA);\n    var s = this.m_groundAnchorA;\n    return Vec2.distance(p, s);\n};\n\nPulleyJoint.prototype.getCurrentLengthB = function() {\n    var p = this.m_bodyB.getWorldPoint(this.m_localAnchorB);\n    var s = this.m_groundAnchorB;\n    return Vec2.distance(p, s);\n};\n\nPulleyJoint.prototype.shiftOrigin = function(newOrigin) {\n    this.m_groundAnchorA -= newOrigin;\n    this.m_groundAnchorB -= newOrigin;\n};\n\nPulleyJoint.prototype.getAnchorA = function() {\n    return this.m_bodyA.getWorldPoint(this.m_localAnchorA);\n};\n\nPulleyJoint.prototype.getAnchorB = function() {\n    return this.m_bodyB.getWorldPoint(this.m_localAnchorB);\n};\n\nPulleyJoint.prototype.getReactionForce = function(inv_dt) {\n    return Vec3.mul(inv_dt * this.m_impulse, this.m_uB);\n};\n\nPulleyJoint.prototype.getReactionTorque = function(inv_dt) {\n    return 0;\n};\n\nPulleyJoint.prototype.initVelocityConstraints = function(step) {\n    this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;\n    this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;\n    this.m_invMassA = this.m_bodyA.m_invMass;\n    this.m_invMassB = this.m_bodyB.m_invMass;\n    this.m_invIA = this.m_bodyA.m_invI;\n    this.m_invIB = this.m_bodyB.m_invI;\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var qA = Rot.neo(aA);\n    var qB = Rot.neo(aB);\n    this.m_rA = Rot.mul(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));\n    this.m_rB = Rot.mul(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));\n    this.m_uA = Vec2.sub(Vec2.add(cA, this.m_rA), this.m_groundAnchorA);\n    this.m_uB = Vec2.sub(Vec2.add(cB, this.m_rB), this.m_groundAnchorB);\n    var lengthA = this.m_uA.length();\n    var lengthB = this.m_uB.length();\n    if (lengthA > 10 * Settings.linearSlop) {\n        this.m_uA.mul(1 / lengthA);\n    } else {\n        this.m_uA.setZero();\n    }\n    if (lengthB > 10 * Settings.linearSlop) {\n        this.m_uB.mul(1 / lengthB);\n    } else {\n        this.m_uB.setZero();\n    }\n    var ruA = Vec2.cross(this.m_rA, this.m_uA);\n    var ruB = Vec2.cross(this.m_rB, this.m_uB);\n    var mA = this.m_invMassA + this.m_invIA * ruA * ruA;\n    var mB = this.m_invMassB + this.m_invIB * ruB * ruB;\n    this.m_mass = mA + this.m_ratio * this.m_ratio * mB;\n    if (this.m_mass > 0) {\n        this.m_mass = 1 / this.m_mass;\n    }\n    if (step.warmStarting) {\n        this.m_impulse *= step.dtRatio;\n        var PA = Vec2.mul(-this.m_impulse, this.m_uA);\n        var PB = Vec2.mul(-this.m_ratio * this.m_impulse, this.m_uB);\n        vA.wAdd(this.m_invMassA, PA);\n        wA += this.m_invIA * Vec2.cross(this.m_rA, PA);\n        vB.wAdd(this.m_invMassB, PB);\n        wB += this.m_invIB * Vec2.cross(this.m_rB, PB);\n    } else {\n        this.m_impulse = 0;\n    }\n    this.m_bodyA.c_velocity.v = vA;\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v = vB;\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nPulleyJoint.prototype.solveVelocityConstraints = function(step) {\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var vpA = Vec2.add(vA, Vec2.cross(wA, this.m_rA));\n    var vpB = Vec2.add(vB, Vec2.cross(wB, this.m_rB));\n    var Cdot = -Vec2.dot(this.m_uA, vpA) - this.m_ratio * Vec2.dot(this.m_uB, vpB);\n    var impulse = -this.m_mass * Cdot;\n    this.m_impulse += impulse;\n    var PA = Vec2.zero().wSet(-impulse, this.m_uA);\n    var PB = Vec2.zero().wSet(-this.m_ratio * impulse, this.m_uB);\n    vA.wAdd(this.m_invMassA, PA);\n    wA += this.m_invIA * Vec2.cross(this.m_rA, PA);\n    vB.wAdd(this.m_invMassB, PB);\n    wB += this.m_invIB * Vec2.cross(this.m_rB, PB);\n    this.m_bodyA.c_velocity.v = vA;\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v = vB;\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nPulleyJoint.prototype.solvePositionConstraints = function(step) {\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var qA = Rot.neo(aA), qB = Rot.neo(aB);\n    var rA = Rot.mul(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));\n    var rB = Rot.mul(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));\n    var uA = Vec2.sub(Vec2.add(cA, this.m_rA), this.m_groundAnchorA);\n    var uB = Vec2.sub(Vec2.add(cB, this.m_rB), this.m_groundAnchorB);\n    var lengthA = uA.length();\n    var lengthB = uB.length();\n    if (lengthA > 10 * Settings.linearSlop) {\n        uA.mul(1 / lengthA);\n    } else {\n        uA.setZero();\n    }\n    if (lengthB > 10 * Settings.linearSlop) {\n        uB.mul(1 / lengthB);\n    } else {\n        uB.setZero();\n    }\n    var ruA = Vec2.cross(rA, uA);\n    var ruB = Vec2.cross(rB, uB);\n    var mA = this.m_invMassA + this.m_invIA * ruA * ruA;\n    var mB = this.m_invMassB + this.m_invIB * ruB * ruB;\n    var mass = mA + this.m_ratio * this.m_ratio * mB;\n    if (mass > 0) {\n        mass = 1 / mass;\n    }\n    var C = this.m_constant - lengthA - this.m_ratio * lengthB;\n    var linearError = Math.abs(C);\n    var impulse = -mass * C;\n    var PA = Vec2.zero().wSet(-impulse, uA);\n    var PB = Vec2.zero().wSet(-this.m_ratio * impulse, uB);\n    cA.wAdd(this.m_invMassA, PA);\n    aA += this.m_invIA * Vec2.cross(rA, PA);\n    cB.wAdd(this.m_invMassB, PB);\n    aB += this.m_invIB * Vec2.cross(rB, PB);\n    this.m_bodyA.c_position.c = cA;\n    this.m_bodyA.c_position.a = aA;\n    this.m_bodyB.c_position.c = cB;\n    this.m_bodyB.c_position.a = aB;\n    return linearError < Settings.linearSlop;\n};\n\n\n},{\"../Joint\":5,\"../Settings\":7,\"../common/Mat22\":16,\"../common/Mat33\":17,\"../common/Math\":18,\"../common/Position\":19,\"../common/Rot\":20,\"../common/Sweep\":21,\"../common/Transform\":22,\"../common/Vec2\":23,\"../common/Vec3\":24,\"../common/Velocity\":25,\"../util/common\":51,\"../util/create\":52,\"../util/options\":53}],35:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = RevoluteJoint;\n\nvar common = require(\"../util/common\");\n\nvar options = require(\"../util/options\");\n\nvar create = require(\"../util/create\");\n\nvar Settings = require(\"../Settings\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Vec3 = require(\"../common/Vec3\");\n\nvar Mat22 = require(\"../common/Mat22\");\n\nvar Mat33 = require(\"../common/Mat33\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Sweep = require(\"../common/Sweep\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Velocity = require(\"../common/Velocity\");\n\nvar Position = require(\"../common/Position\");\n\nvar Joint = require(\"../Joint\");\n\nvar inactiveLimit = 0;\n\nvar atLowerLimit = 1;\n\nvar atUpperLimit = 2;\n\nvar equalLimits = 3;\n\nRevoluteJoint.TYPE = \"revolute-joint\";\n\nRevoluteJoint._super = Joint;\n\nRevoluteJoint.prototype = create(RevoluteJoint._super.prototype);\n\nvar RevoluteJointDef = {\n    lowerAngle: 0,\n    upperAngle: 0,\n    maxMotorTorque: 0,\n    motorSpeed: 0,\n    enableLimit: false,\n    enableMotor: false\n};\n\nfunction RevoluteJoint(def, bodyA, bodyB, anchor) {\n    if (!(this instanceof RevoluteJoint)) {\n        return new RevoluteJoint(def, bodyA, bodyB, anchor);\n    }\n    def = options(def, RevoluteJointDef);\n    Joint.call(this, def, bodyA, bodyB);\n    this.m_type = RevoluteJoint.TYPE;\n    this.m_localAnchorA = def.localAnchorA || bodyA.getLocalPoint(anchor);\n    this.m_localAnchorB = def.localAnchorB || bodyB.getLocalPoint(anchor);\n    this.m_referenceAngle = bodyB.getAngle() - bodyA.getAngle();\n    this.m_impulse = Vec3();\n    this.m_motorImpulse = 0;\n    this.m_lowerAngle = def.lowerAngle;\n    this.m_upperAngle = def.upperAngle;\n    this.m_maxMotorTorque = def.maxMotorTorque;\n    this.m_motorSpeed = def.motorSpeed;\n    this.m_enableLimit = def.enableLimit;\n    this.m_enableMotor = def.enableMotor;\n    this.m_rA;\n    this.m_rB;\n    this.m_localCenterA;\n    this.m_localCenterB;\n    this.m_invMassA;\n    this.m_invMassB;\n    this.m_invIA;\n    this.m_invIB;\n    this.m_mass = new Mat33();\n    this.m_motorMass;\n    this.m_limitState = inactiveLimit;\n}\n\nRevoluteJoint.prototype.getLocalAnchorA = function() {\n    return this.m_localAnchorA;\n};\n\nRevoluteJoint.prototype.getLocalAnchorB = function() {\n    return this.m_localAnchorB;\n};\n\nRevoluteJoint.prototype.getReferenceAngle = function() {\n    return this.m_referenceAngle;\n};\n\nRevoluteJoint.prototype.getJointAngle = function() {\n    var bA = this.m_bodyA;\n    var bB = this.m_bodyB;\n    return bB.m_sweep.a - bA.m_sweep.a - this.m_referenceAngle;\n};\n\nRevoluteJoint.prototype.getJointSpeed = function() {\n    var bA = this.m_bodyA;\n    var bB = this.m_bodyB;\n    return bB.m_angularVelocity - bA.m_angularVelocity;\n};\n\nRevoluteJoint.prototype.isMotorEnabled = function() {\n    return this.m_enableMotor;\n};\n\nRevoluteJoint.prototype.enableMotor = function(flag) {\n    this.m_bodyA.setAwake(true);\n    this.m_bodyB.setAwake(true);\n    this.m_enableMotor = flag;\n};\n\nRevoluteJoint.prototype.getMotorTorque = function(inv_dt) {\n    return inv_dt * this.m_motorImpulse;\n};\n\nRevoluteJoint.prototype.setMotorSpeed = function(speed) {\n    this.m_bodyA.setAwake(true);\n    this.m_bodyB.setAwake(true);\n    this.m_motorSpeed = speed;\n};\n\nRevoluteJoint.prototype.getMotorSpeed = function() {\n    return this.m_motorSpeed;\n};\n\nRevoluteJoint.prototype.setMaxMotorTorque = function(torque) {\n    this.m_bodyA.setAwake(true);\n    this.m_bodyB.setAwake(true);\n    this.m_maxMotorTorque = torque;\n};\n\nRevoluteJoint.prototype.isLimitEnabled = function() {\n    return this.m_enableLimit;\n};\n\nRevoluteJoint.prototype.enableLimit = function(flag) {\n    if (flag != this.m_enableLimit) {\n        this.m_bodyA.setAwake(true);\n        this.m_bodyB.setAwake(true);\n        this.m_enableLimit = flag;\n        this.m_impulse.z = 0;\n    }\n};\n\nRevoluteJoint.prototype.getLowerLimit = function() {\n    return this.m_lowerAngle;\n};\n\nRevoluteJoint.prototype.getUpperLimit = function() {\n    return this.m_upperAngle;\n};\n\nRevoluteJoint.prototype.setLimits = function(lower, upper) {\n    ASSERT && common.assert(lower <= upper);\n    if (lower != this.m_lowerAngle || upper != this.m_upperAngle) {\n        this.m_bodyA.setAwake(true);\n        this.m_bodyB.setAwake(true);\n        this.m_impulse.z = 0;\n        this.m_lowerAngle = lower;\n        this.m_upperAngle = upper;\n    }\n};\n\nRevoluteJoint.prototype.getAnchorA = function() {\n    return this.m_bodyA.getWorldPoint(this.m_localAnchorA);\n};\n\nRevoluteJoint.prototype.getAnchorB = function() {\n    return this.m_bodyB.getWorldPoint(this.m_localAnchorB);\n};\n\nRevoluteJoint.prototype.getReactionForce = function(inv_dt) {\n    var P = Vec2.neo(this.m_impulse.x, this.m_impulse.y);\n    return inv_dt * P;\n};\n\nRevoluteJoint.prototype.getReactionTorque = function(inv_dt) {\n    return inv_dt * this.m_impulse.z;\n};\n\nRevoluteJoint.prototype.initVelocityConstraints = function(step) {\n    this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;\n    this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;\n    this.m_invMassA = this.m_bodyA.m_invMass;\n    this.m_invMassB = this.m_bodyB.m_invMass;\n    this.m_invIA = this.m_bodyA.m_invI;\n    this.m_invIB = this.m_bodyB.m_invI;\n    var aA = this.m_bodyA.c_position.a;\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var aB = this.m_bodyB.c_position.a;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var qA = Rot.neo(aA);\n    var qB = Rot.neo(aB);\n    this.m_rA = Rot.mul(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));\n    this.m_rB = Rot.mul(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));\n    var mA = this.m_invMassA;\n    var mB = this.m_invMassB;\n    var iA = this.m_invIA;\n    var iB = this.m_invIB;\n    var fixedRotation = iA + iB == 0;\n    this.m_mass.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;\n    this.m_mass.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;\n    this.m_mass.ez.x = -this.m_rA.y * iA - this.m_rB.y * iB;\n    this.m_mass.ex.y = this.m_mass.ey.x;\n    this.m_mass.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;\n    this.m_mass.ez.y = this.m_rA.x * iA + this.m_rB.x * iB;\n    this.m_mass.ex.z = this.m_mass.ez.x;\n    this.m_mass.ey.z = this.m_mass.ez.y;\n    this.m_mass.ez.z = iA + iB;\n    this.m_motorMass = iA + iB;\n    if (this.m_motorMass > 0) {\n        this.m_motorMass = 1 / this.m_motorMass;\n    }\n    if (this.m_enableMotor == false || fixedRotation) {\n        this.m_motorImpulse = 0;\n    }\n    if (this.m_enableLimit && fixedRotation == false) {\n        var jointAngle = aB - aA - this.m_referenceAngle;\n        if (Math.abs(this.m_upperAngle - this.m_lowerAngle) < 2 * Settings.angularSlop) {\n            this.m_limitState = equalLimits;\n        } else if (jointAngle <= this.m_lowerAngle) {\n            if (this.m_limitState != atLowerLimit) {\n                this.m_impulse.z = 0;\n            }\n            this.m_limitState = atLowerLimit;\n        } else if (jointAngle >= this.m_upperAngle) {\n            if (this.m_limitState != atUpperLimit) {\n                this.m_impulse.z = 0;\n            }\n            this.m_limitState = atUpperLimit;\n        } else {\n            this.m_limitState = inactiveLimit;\n            this.m_impulse.z = 0;\n        }\n    } else {\n        this.m_limitState = inactiveLimit;\n    }\n    if (step.warmStarting) {\n        this.m_impulse.mul(step.dtRatio);\n        this.m_motorImpulse *= step.dtRatio;\n        var P = Vec2.neo(this.m_impulse.x, this.m_impulse.y);\n        vA.wSub(mA, P);\n        wA -= iA * (Vec2.cross(this.m_rA, P) + this.m_motorImpulse + this.m_impulse.z);\n        vB.wAdd(mB, P);\n        wB += iB * (Vec2.cross(this.m_rB, P) + this.m_motorImpulse + this.m_impulse.z);\n    } else {\n        this.m_impulse.setZero();\n        this.m_motorImpulse = 0;\n    }\n    this.m_bodyA.c_velocity.v = vA;\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v = vB;\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nRevoluteJoint.prototype.solveVelocityConstraints = function(step) {\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var mA = this.m_invMassA;\n    var mB = this.m_invMassB;\n    var iA = this.m_invIA;\n    var iB = this.m_invIB;\n    var fixedRotation = iA + iB == 0;\n    if (this.m_enableMotor && this.m_limitState != equalLimits && fixedRotation == false) {\n        var Cdot = wB - wA - this.m_motorSpeed;\n        var impulse = -this.m_motorMass * Cdot;\n        var oldImpulse = this.m_motorImpulse;\n        var maxImpulse = step.dt * this.m_maxMotorTorque;\n        this.m_motorImpulse = Math.clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);\n        impulse = this.m_motorImpulse - oldImpulse;\n        wA -= iA * impulse;\n        wB += iB * impulse;\n    }\n    if (this.m_enableLimit && this.m_limitState != inactiveLimit && fixedRotation == false) {\n        var Cdot1 = Vec2.zero();\n        Cdot1.wAdd(1, vB, 1, Vec2.cross(wB, this.m_rB));\n        Cdot1.wSub(1, vA, 1, Vec2.cross(wA, this.m_rA));\n        var Cdot2 = wB - wA;\n        var Cdot = Vec3(Cdot1.x, Cdot1.y, Cdot2);\n        var impulse = Vec3.neg(this.m_mass.solve33(Cdot));\n        if (this.m_limitState == equalLimits) {\n            this.m_impulse.add(impulse);\n        } else if (this.m_limitState == atLowerLimit) {\n            var newImpulse = this.m_impulse.z + impulse.z;\n            if (newImpulse < 0) {\n                var rhs = Vec2.wAdd(-1, Cdot1, this.m_impulse.z, Vec2.neo(this.m_mass.ez.x, this.m_mass.ez.y));\n                var reduced = this.m_mass.solve22(rhs);\n                impulse.x = reduced.x;\n                impulse.y = reduced.y;\n                impulse.z = -this.m_impulse.z;\n                this.m_impulse.x += reduced.x;\n                this.m_impulse.y += reduced.y;\n                this.m_impulse.z = 0;\n            } else {\n                this.m_impulse.add(impulse);\n            }\n        } else if (this.m_limitState == atUpperLimit) {\n            var newImpulse = this.m_impulse.z + impulse.z;\n            if (newImpulse > 0) {\n                var rhs = Vec2.wAdd(-1, Cdot1, this.m_impulse.z, Vec2.neo(this.m_mass.ez.x, this.m_mass.ez.y));\n                var reduced = this.m_mass.solve22(rhs);\n                impulse.x = reduced.x;\n                impulse.y = reduced.y;\n                impulse.z = -this.m_impulse.z;\n                this.m_impulse.x += reduced.x;\n                this.m_impulse.y += reduced.y;\n                this.m_impulse.z = 0;\n            } else {\n                this.m_impulse.add(impulse);\n            }\n        }\n        var P = Vec2.neo(impulse.x, impulse.y);\n        vA.wSub(mA, P);\n        wA -= iA * (Vec2.cross(this.m_rA, P) + impulse.z);\n        vB.wAdd(mB, P);\n        wB += iB * (Vec2.cross(this.m_rB, P) + impulse.z);\n    } else {\n        var Cdot = Vec2.zero();\n        Cdot.wAdd(1, vB, 1, Vec2.cross(wB, this.m_rB));\n        Cdot.wSub(1, vA, 1, Vec2.cross(wA, this.m_rA));\n        var impulse = this.m_mass.solve22(Vec2.neg(Cdot));\n        this.m_impulse.x += impulse.x;\n        this.m_impulse.y += impulse.y;\n        vA.wSub(mA, impulse);\n        wA -= iA * Vec2.cross(this.m_rA, impulse);\n        vB.wAdd(mB, impulse);\n        wB += iB * Vec2.cross(this.m_rB, impulse);\n    }\n    this.m_bodyA.c_velocity.v = vA;\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v = vB;\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nRevoluteJoint.prototype.solvePositionConstraints = function(step) {\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var qA = Rot.neo(aA);\n    var qB = Rot.neo(aB);\n    var angularError = 0;\n    var positionError = 0;\n    var fixedRotation = this.m_invIA + this.m_invIB == 0;\n    if (this.m_enableLimit && this.m_limitState != inactiveLimit && fixedRotation == false) {\n        var angle = aB - aA - this.m_referenceAngle;\n        var limitImpulse = 0;\n        if (this.m_limitState == equalLimits) {\n            var C = Math.clamp(angle - this.m_lowerAngle, -Settings.maxAngularCorrection, Settings.maxAngularCorrection);\n            limitImpulse = -this.m_motorMass * C;\n            angularError = Math.abs(C);\n        } else if (this.m_limitState == atLowerLimit) {\n            var C = angle - this.m_lowerAngle;\n            angularError = -C;\n            C = Math.clamp(C + Settings.angularSlop, -Settings.maxAngularCorrection, 0);\n            limitImpulse = -this.m_motorMass * C;\n        } else if (this.m_limitState == atUpperLimit) {\n            var C = angle - this.m_upperAngle;\n            angularError = C;\n            C = Math.clamp(C - Settings.angularSlop, 0, Settings.maxAngularCorrection);\n            limitImpulse = -this.m_motorMass * C;\n        }\n        aA -= this.m_invIA * limitImpulse;\n        aB += this.m_invIB * limitImpulse;\n    }\n    {\n        qA.set(aA);\n        qB.set(aB);\n        var rA = Rot.mul(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));\n        var rB = Rot.mul(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));\n        var C = Vec2.zero();\n        C.wAdd(1, cB, 1, rB);\n        C.wSub(1, cA, 1, rA);\n        positionError = C.length();\n        var mA = this.m_invMassA;\n        var mB = this.m_invMassB;\n        var iA = this.m_invIA;\n        var iB = this.m_invIB;\n        var K = new Mat22();\n        K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;\n        K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;\n        K.ey.x = K.ex.y;\n        K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;\n        var impulse = Vec2.neg(K.solve(C));\n        cA.wSub(mA, impulse);\n        aA -= iA * Vec2.cross(rA, impulse);\n        cB.wAdd(mB, impulse);\n        aB += iB * Vec2.cross(rB, impulse);\n    }\n    this.m_bodyA.c_position.c.set(cA);\n    this.m_bodyA.c_position.a = aA;\n    this.m_bodyB.c_position.c.set(cB);\n    this.m_bodyB.c_position.a = aB;\n    return positionError <= Settings.linearSlop && angularError <= Settings.angularSlop;\n};\n\n\n},{\"../Joint\":5,\"../Settings\":7,\"../common/Mat22\":16,\"../common/Mat33\":17,\"../common/Math\":18,\"../common/Position\":19,\"../common/Rot\":20,\"../common/Sweep\":21,\"../common/Transform\":22,\"../common/Vec2\":23,\"../common/Vec3\":24,\"../common/Velocity\":25,\"../util/common\":51,\"../util/create\":52,\"../util/options\":53}],36:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = RopeJoint;\n\nvar options = require(\"../util/options\");\n\nvar create = require(\"../util/create\");\n\nvar Settings = require(\"../Settings\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Vec3 = require(\"../common/Vec3\");\n\nvar Mat22 = require(\"../common/Mat22\");\n\nvar Mat33 = require(\"../common/Mat33\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Sweep = require(\"../common/Sweep\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Velocity = require(\"../common/Velocity\");\n\nvar Position = require(\"../common/Position\");\n\nvar Joint = require(\"../Joint\");\n\nvar inactiveLimit = 0;\n\nvar atLowerLimit = 1;\n\nvar atUpperLimit = 2;\n\nvar equalLimits = 3;\n\nRopeJoint.TYPE = \"rope-joint\";\n\nRopeJoint._super = Joint;\n\nRopeJoint.prototype = create(RopeJoint._super.prototype);\n\nvar RopeJointDef = {\n    maxLength: 0\n};\n\nfunction RopeJoint(def, bodyA, bodyB, anchor) {\n    if (!(this instanceof RopeJoint)) {\n        return new RopeJoint(def, bodyA, bodyB, anchor);\n    }\n    def = options(def, RopeJointDef);\n    Joint.call(this, def, bodyA, bodyB);\n    this.m_type = RopeJoint.TYPE;\n    this.m_localAnchorA = def.localAnchorA || bodyA.getLocalPoint(anchor);\n    this.m_localAnchorB = def.localAnchorB || bodyB.getLocalPoint(anchor);\n    this.m_maxLength = def.maxLength;\n    this.m_mass = 0;\n    this.m_impulse = 0;\n    this.m_length = 0;\n    this.m_state = inactiveLimit;\n    this.m_u;\n    this.m_rA;\n    this.m_rB;\n    this.m_localCenterA;\n    this.m_localCenterB;\n    this.m_invMassA;\n    this.m_invMassB;\n    this.m_invIA;\n    this.m_invIB;\n    this.m_mass;\n}\n\nRopeJoint.prototype.getLocalAnchorA = function() {\n    return this.m_localAnchorA;\n};\n\nRopeJoint.prototype.getLocalAnchorB = function() {\n    return this.m_localAnchorB;\n};\n\nRopeJoint.prototype.setMaxLength = function(length) {\n    this.m_maxLength = length;\n};\n\nRopeJoint.prototype.getMaxLength = function() {\n    return this.m_maxLength;\n};\n\nRopeJoint.prototype.getLimitState = function() {\n    return this.m_state;\n};\n\nRopeJoint.prototype.getAnchorA = function() {\n    return this.m_bodyA.getWorldPoint(this.m_localAnchorA);\n};\n\nRopeJoint.prototype.getAnchorB = function() {\n    return this.m_bodyB.getWorldPoint(this.m_localAnchorB);\n};\n\nRopeJoint.prototype.getReactionForce = function(inv_dt) {\n    var F = inv_dt * this.m_impulse * this.m_u;\n    return F;\n};\n\nRopeJoint.prototype.getReactionTorque = function(inv_dt) {\n    return 0;\n};\n\nRopeJoint.prototype.initVelocityConstraints = function(step) {\n    this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;\n    this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;\n    this.m_invMassA = this.m_bodyA.m_invMass;\n    this.m_invMassB = this.m_bodyB.m_invMass;\n    this.m_invIA = this.m_bodyA.m_invI;\n    this.m_invIB = this.m_bodyB.m_invI;\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var qA = Rot.neo(aA);\n    var qB = Rot.neo(aB);\n    this.m_rA = Rot.mulSub(qA, this.m_localAnchorA, this.m_localCenterA);\n    this.m_rB = Rot.mulSub(qB, this.m_localAnchorB, this.m_localCenterB);\n    this.m_u = Vec2.zero();\n    this.m_u.wAdd(1, cB, 1, this.m_rB);\n    this.m_u.wSub(1, cA, 1, this.m_rA);\n    this.m_length = this.m_u.length();\n    var C = this.m_length - this.m_maxLength;\n    if (C > 0) {\n        this.m_state = atUpperLimit;\n    } else {\n        this.m_state = inactiveLimit;\n    }\n    if (this.m_length > Settings.linearSlop) {\n        this.m_u.mul(1 / this.m_length);\n    } else {\n        this.m_u.setZero();\n        this.m_mass = 0;\n        this.m_impulse = 0;\n        return;\n    }\n    var crA = Vec2.cross(this.m_rA, this.m_u);\n    var crB = Vec2.cross(this.m_rB, this.m_u);\n    var invMass = this.m_invMassA + this.m_invIA * crA * crA + this.m_invMassB + this.m_invIB * crB * crB;\n    this.m_mass = invMass != 0 ? 1 / invMass : 0;\n    if (step.warmStarting) {\n        this.m_impulse *= step.dtRatio;\n        var P = Vec2.mul(this.m_impulse, this.m_u);\n        vA.wSub(this.m_invMassA, P);\n        wA -= this.m_invIA * Vec2.cross(this.m_rA, P);\n        vB.wAdd(this.m_invMassB, P);\n        wB += this.m_invIB * Vec2.cross(this.m_rB, P);\n    } else {\n        this.m_impulse = 0;\n    }\n    this.m_bodyA.c_velocity.v.set(vA);\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v.set(vB);\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nRopeJoint.prototype.solveVelocityConstraints = function(step) {\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var vpA = Vec2.addCross(vA, wA, this.m_rA);\n    var vpB = Vec2.addCross(vB, wB, this.m_rB);\n    var C = this.m_length - this.m_maxLength;\n    var Cdot = Vec2.dot(this.m_u, Vec2.sub(vpB, vpA));\n    if (C < 0) {\n        Cdot += step.inv_dt * C;\n    }\n    var impulse = -this.m_mass * Cdot;\n    var oldImpulse = this.m_impulse;\n    this.m_impulse = Math.min(0, this.m_impulse + impulse);\n    impulse = this.m_impulse - oldImpulse;\n    var P = Vec2.mul(impulse, this.m_u);\n    vA.wSub(this.m_invMassA, P);\n    wA -= this.m_invIA * Vec2.cross(this.m_rA, P);\n    vB.wAdd(this.m_invMassB, P);\n    wB += this.m_invIB * Vec2.cross(this.m_rB, P);\n    this.m_bodyA.c_velocity.v = vA;\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v = vB;\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nRopeJoint.prototype.solvePositionConstraints = function(step) {\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var qA = Rot.neo(aA);\n    var qB = Rot.neo(aB);\n    var rA = Rot.mulSub(qA, this.m_localAnchorA, this.m_localCenterA);\n    var rB = Rot.mulSub(qB, this.m_localAnchorB, this.m_localCenterB);\n    var u = Vec2.zero();\n    u.wAdd(1, cB, 1, rB);\n    u.wSub(1, cA, 1, rA);\n    var length = u.normalize();\n    var C = length - this.m_maxLength;\n    C = Math.clamp(C, 0, Settings.maxLinearCorrection);\n    var impulse = -this.m_mass * C;\n    var P = Vec2.mul(impulse, u);\n    cA.wSub(this.m_invMassA, P);\n    aA -= this.m_invIA * Vec2.cross(rA, P);\n    cB.wAdd(this.m_invMassB, P);\n    aB += this.m_invIB * Vec2.cross(rB, P);\n    this.m_bodyA.c_position.c.set(cA);\n    this.m_bodyA.c_position.a = aA;\n    this.m_bodyB.c_position.c.set(cB);\n    this.m_bodyB.c_position.a = aB;\n    return length - this.m_maxLength < Settings.linearSlop;\n};\n\n\n},{\"../Joint\":5,\"../Settings\":7,\"../common/Mat22\":16,\"../common/Mat33\":17,\"../common/Math\":18,\"../common/Position\":19,\"../common/Rot\":20,\"../common/Sweep\":21,\"../common/Transform\":22,\"../common/Vec2\":23,\"../common/Vec3\":24,\"../common/Velocity\":25,\"../util/create\":52,\"../util/options\":53}],37:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = WeldJoint;\n\nvar options = require(\"../util/options\");\n\nvar create = require(\"../util/create\");\n\nvar Settings = require(\"../Settings\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Vec3 = require(\"../common/Vec3\");\n\nvar Mat22 = require(\"../common/Mat22\");\n\nvar Mat33 = require(\"../common/Mat33\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Sweep = require(\"../common/Sweep\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Velocity = require(\"../common/Velocity\");\n\nvar Position = require(\"../common/Position\");\n\nvar Joint = require(\"../Joint\");\n\nWeldJoint.TYPE = \"weld-joint\";\n\nWeldJoint._super = Joint;\n\nWeldJoint.prototype = create(WeldJoint._super.prototype);\n\nvar WeldJointDef = {\n    frequencyHz: 0,\n    dampingRatio: 0\n};\n\nfunction WeldJoint(def, bodyA, bodyB, anchor) {\n    if (!(this instanceof WeldJoint)) {\n        return new WeldJoint(def, bodyA, bodyB, anchor);\n    }\n    def = options(def, WeldJointDef);\n    Joint.call(this, def, bodyA, bodyB);\n    this.m_type = WeldJoint.TYPE;\n    this.m_localAnchorA = bodyA.getLocalPoint(anchor);\n    this.m_localAnchorB = bodyB.getLocalPoint(anchor);\n    this.m_referenceAngle = bodyB.getAngle() - bodyA.getAngle();\n    this.m_frequencyHz = def.frequencyHz;\n    this.m_dampingRatio = def.dampingRatio;\n    this.m_impulse = Vec3();\n    this.m_bias = 0;\n    this.m_gamma = 0;\n    this.m_rA;\n    this.m_rB;\n    this.m_localCenterA;\n    this.m_localCenterB;\n    this.m_invMassA;\n    this.m_invMassB;\n    this.m_invIA;\n    this.m_invIB;\n    this.m_mass = new Mat33();\n}\n\nWeldJoint.prototype.getLocalAnchorA = function() {\n    return this.m_localAnchorA;\n};\n\nWeldJoint.prototype.getLocalAnchorB = function() {\n    return this.m_localAnchorB;\n};\n\nWeldJoint.prototype.getReferenceAngle = function() {\n    return this.m_referenceAngle;\n};\n\nWeldJoint.prototype.setFrequency = function(hz) {\n    this.m_frequencyHz = hz;\n};\n\nWeldJoint.prototype.getFrequency = function() {\n    return this.m_frequencyHz;\n};\n\nWeldJoint.prototype.setDampingRatio = function(ratio) {\n    this.m_dampingRatio = ratio;\n};\n\nWeldJoint.prototype.getDampingRatio = function() {\n    return this.m_dampingRatio;\n};\n\nWeldJoint.prototype.getAnchorA = function() {\n    return this.m_bodyA.getWorldPoint(this.m_localAnchorA);\n};\n\nWeldJoint.prototype.getAnchorB = function() {\n    return this.m_bodyB.getWorldPoint(this.m_localAnchorB);\n};\n\nWeldJoint.prototype.getReactionForce = function(inv_dt) {\n    var P = Vec2.neo(this.m_impulse.x, this.m_impulse.y);\n    return inv_dt * P;\n};\n\nWeldJoint.prototype.getReactionTorque = function(inv_dt) {\n    return inv_dt * this.m_impulse.z;\n};\n\nWeldJoint.prototype.initVelocityConstraints = function(step) {\n    this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;\n    this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;\n    this.m_invMassA = this.m_bodyA.m_invMass;\n    this.m_invMassB = this.m_bodyB.m_invMass;\n    this.m_invIA = this.m_bodyA.m_invI;\n    this.m_invIB = this.m_bodyB.m_invI;\n    var aA = this.m_bodyA.c_position.a;\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var aB = this.m_bodyB.c_position.a;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var qA = Rot.neo(aA), qB = Rot.neo(aB);\n    this.m_rA = Rot.mul(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));\n    this.m_rB = Rot.mul(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));\n    var mA = this.m_invMassA;\n    var mB = this.m_invMassB;\n    var iA = this.m_invIA;\n    var iB = this.m_invIB;\n    var K = new Mat33();\n    K.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;\n    K.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;\n    K.ez.x = -this.m_rA.y * iA - this.m_rB.y * iB;\n    K.ex.y = K.ey.x;\n    K.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;\n    K.ez.y = this.m_rA.x * iA + this.m_rB.x * iB;\n    K.ex.z = K.ez.x;\n    K.ey.z = K.ez.y;\n    K.ez.z = iA + iB;\n    if (this.m_frequencyHz > 0) {\n        K.getInverse22(this.m_mass);\n        var invM = iA + iB;\n        var m = invM > 0 ? 1 / invM : 0;\n        var C = aB - aA - this.m_referenceAngle;\n        var omega = 2 * Math.PI * this.m_frequencyHz;\n        var d = 2 * m * this.m_dampingRatio * omega;\n        var k = m * omega * omega;\n        var h = step.dt;\n        this.m_gamma = h * (d + h * k);\n        this.m_gamma = this.m_gamma != 0 ? 1 / this.m_gamma : 0;\n        this.m_bias = C * h * k * this.m_gamma;\n        invM += this.m_gamma;\n        this.m_mass.ez.z = invM != 0 ? 1 / invM : 0;\n    } else if (K.ez.z == 0) {\n        K.getInverse22(this.m_mass);\n        this.m_gamma = 0;\n        this.m_bias = 0;\n    } else {\n        K.getSymInverse33(this.m_mass);\n        this.m_gamma = 0;\n        this.m_bias = 0;\n    }\n    if (step.warmStarting) {\n        this.m_impulse.mul(step.dtRatio);\n        var P = Vec2.neo(this.m_impulse.x, this.m_impulse.y);\n        vA.wSub(mA, P);\n        wA -= iA * (Vec2.cross(this.m_rA, P) + this.m_impulse.z);\n        vB.wAdd(mB, P);\n        wB += iB * (Vec2.cross(this.m_rB, P) + this.m_impulse.z);\n    } else {\n        this.m_impulse.setZero();\n    }\n    this.m_bodyA.c_velocity.v = vA;\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v = vB;\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nWeldJoint.prototype.solveVelocityConstraints = function(step) {\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var mA = this.m_invMassA;\n    var mB = this.m_invMassB;\n    var iA = this.m_invIA;\n    var iB = this.m_invIB;\n    if (this.m_frequencyHz > 0) {\n        var Cdot2 = wB - wA;\n        var impulse2 = -this.m_mass.ez.z * (Cdot2 + this.m_bias + this.m_gamma * this.m_impulse.z);\n        this.m_impulse.z += impulse2;\n        wA -= iA * impulse2;\n        wB += iB * impulse2;\n        var Cdot1 = Vec2.zero();\n        Cdot1.wAdd(1, vB, 1, Vec2.cross(wB, this.m_rB));\n        Cdot1.wSub(1, vA, 1, Vec2.cross(wA, this.m_rA));\n        var impulse1 = Vec2.neg(Mat33.mul(this.m_mass, Cdot1));\n        this.m_impulse.x += impulse1.x;\n        this.m_impulse.y += impulse1.y;\n        var P = Vec2.clone(impulse1);\n        vA.wSub(mA, P);\n        wA -= iA * Vec2.cross(this.m_rA, P);\n        vB.wAdd(mB, P);\n        wB += iB * Vec2.cross(this.m_rB, P);\n    } else {\n        var Cdot1 = Vec2.zero();\n        Cdot1.wAdd(1, vB, 1, Vec2.cross(wB, this.m_rB));\n        Cdot1.wSub(1, vA, 1, Vec2.cross(wA, this.m_rA));\n        var Cdot2 = wB - wA;\n        var Cdot = Vec3(Cdot1.x, Cdot1.y, Cdot2);\n        var impulse = Vec3.neg(Mat33.mul(this.m_mass, Cdot));\n        this.m_impulse.add(impulse);\n        var P = Vec2.neo(impulse.x, impulse.y);\n        vA.wSub(mA, P);\n        wA -= iA * (Vec2.cross(this.m_rA, P) + impulse.z);\n        vB.wAdd(mB, P);\n        wB += iB * (Vec2.cross(this.m_rB, P) + impulse.z);\n    }\n    this.m_bodyA.c_velocity.v = vA;\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v = vB;\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nWeldJoint.prototype.solvePositionConstraints = function(step) {\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var qA = Rot.neo(aA), qB = Rot.neo(aB);\n    var mA = this.m_invMassA, mB = this.m_invMassB;\n    var iA = this.m_invIA, iB = this.m_invIB;\n    var rA = Rot.mul(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));\n    var rB = Rot.mul(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));\n    var positionError, angularError;\n    var K = new Mat33();\n    K.ex.x = mA + mB + rA.y * rA.y * iA + rB.y * rB.y * iB;\n    K.ey.x = -rA.y * rA.x * iA - rB.y * rB.x * iB;\n    K.ez.x = -rA.y * iA - rB.y * iB;\n    K.ex.y = K.ey.x;\n    K.ey.y = mA + mB + rA.x * rA.x * iA + rB.x * rB.x * iB;\n    K.ez.y = rA.x * iA + rB.x * iB;\n    K.ex.z = K.ez.x;\n    K.ey.z = K.ez.y;\n    K.ez.z = iA + iB;\n    if (this.m_frequencyHz > 0) {\n        var C1 = Vec2.zero();\n        C1.wAdd(1, cB, 1, rB);\n        C1.wSub(1, cA, 1, rA);\n        positionError = C1.length();\n        angularError = 0;\n        var P = Vec2.neg(K.solve22(C1));\n        cA.wSub(mA, P);\n        aA -= iA * Vec2.cross(rA, P);\n        cB.wAdd(mB, P);\n        aB += iB * Vec2.cross(rB, P);\n    } else {\n        var C1 = Vec2.zero();\n        C1.wAdd(1, cB, 1, rB);\n        C1.wSub(1, cA, 1, rA);\n        var C2 = aB - aA - this.m_referenceAngle;\n        positionError = C1.length();\n        angularError = Math.abs(C2);\n        var C = Vec3(C1.x, C1.y, C2);\n        var impulse = Vec3();\n        if (K.ez.z > 0) {\n            impulse = Vec3.neg(K.solve33(C));\n        } else {\n            var impulse2 = Vec2.neg(K.solve22(C1));\n            impulse.set(impulse2.x, impulse2.y, 0);\n        }\n        var P = Vec2.neo(impulse.x, impulse.y);\n        cA.wSub(mA, P);\n        aA -= iA * (Vec2.cross(rA, P) + impulse.z);\n        cB.wAdd(mB, P);\n        aB += iB * (Vec2.cross(rB, P) + impulse.z);\n    }\n    this.m_bodyA.c_position.c = cA;\n    this.m_bodyA.c_position.a = aA;\n    this.m_bodyB.c_position.c = cB;\n    this.m_bodyB.c_position.a = aB;\n    return positionError <= Settings.linearSlop && angularError <= Settings.angularSlop;\n};\n\n\n},{\"../Joint\":5,\"../Settings\":7,\"../common/Mat22\":16,\"../common/Mat33\":17,\"../common/Math\":18,\"../common/Position\":19,\"../common/Rot\":20,\"../common/Sweep\":21,\"../common/Transform\":22,\"../common/Vec2\":23,\"../common/Vec3\":24,\"../common/Velocity\":25,\"../util/create\":52,\"../util/options\":53}],38:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = WheelJoint;\n\nvar options = require(\"../util/options\");\n\nvar create = require(\"../util/create\");\n\nvar Settings = require(\"../Settings\");\n\nvar Math = require(\"../common/Math\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Vec3 = require(\"../common/Vec3\");\n\nvar Mat22 = require(\"../common/Mat22\");\n\nvar Mat33 = require(\"../common/Mat33\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Sweep = require(\"../common/Sweep\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Velocity = require(\"../common/Velocity\");\n\nvar Position = require(\"../common/Position\");\n\nvar Joint = require(\"../Joint\");\n\nWheelJoint.TYPE = \"wheel-joint\";\n\nWheelJoint._super = Joint;\n\nWheelJoint.prototype = create(WheelJoint._super.prototype);\n\nvar WheelJointDef = {\n    enableMotor: false,\n    maxMotorTorque: 0,\n    motorSpeed: 0,\n    frequencyHz: 2,\n    dampingRatio: .7\n};\n\nfunction WheelJoint(def, bodyA, bodyB, anchor, axis) {\n    if (!(this instanceof WheelJoint)) {\n        return new WheelJoint(def, bodyA, bodyB, anchor, axis);\n    }\n    def = options(def, WheelJointDef);\n    Joint.call(this, def, bodyA, bodyB);\n    this.m_type = WheelJoint.TYPE;\n    this.m_localAnchorA = bodyA.getLocalPoint(anchor);\n    this.m_localAnchorB = bodyB.getLocalPoint(anchor);\n    this.m_localXAxisA = bodyA.getLocalVector(axis || Vec2.neo(1, 0));\n    this.m_localYAxisA = Vec2.cross(1, this.m_localXAxisA);\n    this.m_mass = 0;\n    this.m_impulse = 0;\n    this.m_motorMass = 0;\n    this.m_motorImpulse = 0;\n    this.m_springMass = 0;\n    this.m_springImpulse = 0;\n    this.m_maxMotorTorque = def.maxMotorTorque;\n    this.m_motorSpeed = def.motorSpeed;\n    this.m_enableMotor = def.enableMotor;\n    this.m_frequencyHz = def.frequencyHz;\n    this.m_dampingRatio = def.dampingRatio;\n    this.m_bias = 0;\n    this.m_gamma = 0;\n    this.m_localCenterA;\n    this.m_localCenterB;\n    this.m_invMassA;\n    this.m_invMassB;\n    this.m_invIA;\n    this.m_invIB;\n    this.m_ax = Vec2.zero();\n    this.m_ay = Vec2.zero();\n    this.m_sAx;\n    this.m_sBx;\n    this.m_sAy;\n    this.m_sBy;\n}\n\nWheelJoint.prototype.getLocalAnchorA = function() {\n    return this.m_localAnchorA;\n};\n\nWheelJoint.prototype.getLocalAnchorB = function() {\n    return this.m_localAnchorB;\n};\n\nWheelJoint.prototype.getLocalAxisA = function() {\n    return this.m_localXAxisA;\n};\n\nWheelJoint.prototype.getJointTranslation = function() {\n    var bA = this.m_bodyA;\n    var bB = this.m_bodyB;\n    var pA = bA.getWorldPoint(this.m_localAnchorA);\n    var pB = bB.getWorldPoint(this.m_localAnchorB);\n    var d = pB - pA;\n    var axis = bA.getWorldVector(this.m_localXAxisA);\n    var translation = Dot(d, axis);\n    return translation;\n};\n\nWheelJoint.prototype.getJointSpeed = function() {\n    var wA = this.m_bodyA.m_angularVelocity;\n    var wB = this.m_bodyB.m_angularVelocity;\n    return wB - wA;\n};\n\nWheelJoint.prototype.isMotorEnabled = function() {\n    return this.m_enableMotor;\n};\n\nWheelJoint.prototype.enableMotor = function(flag) {\n    this.m_bodyA.setAwake(true);\n    this.m_bodyB.setAwake(true);\n    this.m_enableMotor = flag;\n};\n\nWheelJoint.prototype.setMotorSpeed = function(speed) {\n    this.m_bodyA.setAwake(true);\n    this.m_bodyB.setAwake(true);\n    this.m_motorSpeed = speed;\n};\n\nWheelJoint.prototype.getMotorSpeed = function() {\n    return this.m_motorSpeed;\n};\n\nWheelJoint.prototype.setMaxMotorTorque = function(torque) {\n    this.m_bodyA.setAwake(true);\n    this.m_bodyB.setAwake(true);\n    this.m_maxMotorTorque = torque;\n};\n\nWheelJoint.prototype.getMaxMotorTorque = function() {\n    return this.m_maxMotorTorque;\n};\n\nWheelJoint.prototype.getMotorTorque = function(inv_dt) {\n    return inv_dt * this.m_motorImpulse;\n};\n\nWheelJoint.prototype.setSpringFrequencyHz = function(hz) {\n    this.m_frequencyHz = hz;\n};\n\nWheelJoint.prototype.getSpringFrequencyHz = function() {\n    return this.m_frequencyHz;\n};\n\nWheelJoint.prototype.setSpringDampingRatio = function(ratio) {\n    this.m_dampingRatio = ratio;\n};\n\nWheelJoint.prototype.getSpringDampingRatio = function() {\n    return this.m_dampingRatio;\n};\n\nWheelJoint.prototype.getAnchorA = function() {\n    return this.m_bodyA.getWorldPoint(this.m_localAnchorA);\n};\n\nWheelJoint.prototype.getAnchorB = function() {\n    return this.m_bodyB.getWorldPoint(this.m_localAnchorB);\n};\n\nWheelJoint.prototype.getReactionForce = function(inv_dt) {\n    return inv_dt * (this.m_impulse * this.m_ay + this.m_springImpulse * this.m_ax);\n};\n\nWheelJoint.prototype.getReactionTorque = function(inv_dt) {\n    return inv_dt * this.m_motorImpulse;\n};\n\nWheelJoint.prototype.initVelocityConstraints = function(step) {\n    this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;\n    this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;\n    this.m_invMassA = this.m_bodyA.m_invMass;\n    this.m_invMassB = this.m_bodyB.m_invMass;\n    this.m_invIA = this.m_bodyA.m_invI;\n    this.m_invIB = this.m_bodyB.m_invI;\n    var mA = this.m_invMassA;\n    var mB = this.m_invMassB;\n    var iA = this.m_invIA;\n    var iB = this.m_invIB;\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    var qA = Rot.neo(aA);\n    var qB = Rot.neo(aB);\n    var rA = Rot.mul(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));\n    var rB = Rot.mul(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));\n    var d = Vec2.zero();\n    d.wAdd(1, cB, 1, rB);\n    d.wSub(1, cA, 1, rA);\n    {\n        this.m_ay = Rot.mul(qA, this.m_localYAxisA);\n        this.m_sAy = Vec2.cross(Vec2.add(d, rA), this.m_ay);\n        this.m_sBy = Vec2.cross(rB, this.m_ay);\n        this.m_mass = mA + mB + iA * this.m_sAy * this.m_sAy + iB * this.m_sBy * this.m_sBy;\n        if (this.m_mass > 0) {\n            this.m_mass = 1 / this.m_mass;\n        }\n    }\n    this.m_springMass = 0;\n    this.m_bias = 0;\n    this.m_gamma = 0;\n    if (this.m_frequencyHz > 0) {\n        this.m_ax = Rot.mul(qA, this.m_localXAxisA);\n        this.m_sAx = Vec2.cross(Vec2.add(d, rA), this.m_ax);\n        this.m_sBx = Vec2.cross(rB, this.m_ax);\n        var invMass = mA + mB + iA * this.m_sAx * this.m_sAx + iB * this.m_sBx * this.m_sBx;\n        if (invMass > 0) {\n            this.m_springMass = 1 / invMass;\n            var C = Vec2.dot(d, this.m_ax);\n            var omega = 2 * Math.PI * this.m_frequencyHz;\n            var d = 2 * this.m_springMass * this.m_dampingRatio * omega;\n            var k = this.m_springMass * omega * omega;\n            var h = step.dt;\n            this.m_gamma = h * (d + h * k);\n            if (this.m_gamma > 0) {\n                this.m_gamma = 1 / this.m_gamma;\n            }\n            this.m_bias = C * h * k * this.m_gamma;\n            this.m_springMass = invMass + this.m_gamma;\n            if (this.m_springMass > 0) {\n                this.m_springMass = 1 / this.m_springMass;\n            }\n        }\n    } else {\n        this.m_springImpulse = 0;\n    }\n    if (this.m_enableMotor) {\n        this.m_motorMass = iA + iB;\n        if (this.m_motorMass > 0) {\n            this.m_motorMass = 1 / this.m_motorMass;\n        }\n    } else {\n        this.m_motorMass = 0;\n        this.m_motorImpulse = 0;\n    }\n    if (step.warmStarting) {\n        this.m_impulse *= step.dtRatio;\n        this.m_springImpulse *= step.dtRatio;\n        this.m_motorImpulse *= step.dtRatio;\n        var P = Vec2.wAdd(this.m_impulse, this.m_ay, this.m_springImpulse, this.m_ax);\n        var LA = this.m_impulse * this.m_sAy + this.m_springImpulse * this.m_sAx + this.m_motorImpulse;\n        var LB = this.m_impulse * this.m_sBy + this.m_springImpulse * this.m_sBx + this.m_motorImpulse;\n        vA.wSub(this.m_invMassA, P);\n        wA -= this.m_invIA * LA;\n        vB.wAdd(this.m_invMassB, P);\n        wB += this.m_invIB * LB;\n    } else {\n        this.m_impulse = 0;\n        this.m_springImpulse = 0;\n        this.m_motorImpulse = 0;\n    }\n    this.m_bodyA.c_velocity.v.set(vA);\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v.set(vB);\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nWheelJoint.prototype.solveVelocityConstraints = function(step) {\n    var mA = this.m_invMassA;\n    var mB = this.m_invMassB;\n    var iA = this.m_invIA;\n    var iB = this.m_invIB;\n    var vA = this.m_bodyA.c_velocity.v;\n    var wA = this.m_bodyA.c_velocity.w;\n    var vB = this.m_bodyB.c_velocity.v;\n    var wB = this.m_bodyB.c_velocity.w;\n    {\n        var Cdot = Vec2.dot(this.m_ax, vB) - Vec2.dot(this.m_ax, vA) + this.m_sBx * wB - this.m_sAx * wA;\n        var impulse = -this.m_springMass * (Cdot + this.m_bias + this.m_gamma * this.m_springImpulse);\n        this.m_springImpulse += impulse;\n        var P = Vec2.zero().wSet(impulse, this.m_ax);\n        var LA = impulse * this.m_sAx;\n        var LB = impulse * this.m_sBx;\n        vA.wSub(mA, P);\n        wA -= iA * LA;\n        vB.wAdd(mB, P);\n        wB += iB * LB;\n    }\n    {\n        var Cdot = wB - wA - this.m_motorSpeed;\n        var impulse = -this.m_motorMass * Cdot;\n        var oldImpulse = this.m_motorImpulse;\n        var maxImpulse = step.dt * this.m_maxMotorTorque;\n        this.m_motorImpulse = Math.clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);\n        impulse = this.m_motorImpulse - oldImpulse;\n        wA -= iA * impulse;\n        wB += iB * impulse;\n    }\n    {\n        var Cdot = Vec2.dot(this.m_ay, vB) - Vec2.dot(this.m_ay, vA) + this.m_sBy * wB - this.m_sAy * wA;\n        var impulse = -this.m_mass * Cdot;\n        this.m_impulse += impulse;\n        var P = Vec2.zero().wSet(impulse, this.m_ay);\n        var LA = impulse * this.m_sAy;\n        var LB = impulse * this.m_sBy;\n        vA.wSub(mA, P);\n        wA -= iA * LA;\n        vB.wAdd(mB, P);\n        wB += iB * LB;\n    }\n    this.m_bodyA.c_velocity.v.set(vA);\n    this.m_bodyA.c_velocity.w = wA;\n    this.m_bodyB.c_velocity.v.set(vB);\n    this.m_bodyB.c_velocity.w = wB;\n};\n\nWheelJoint.prototype.solvePositionConstraints = function(step) {\n    var cA = this.m_bodyA.c_position.c;\n    var aA = this.m_bodyA.c_position.a;\n    var cB = this.m_bodyB.c_position.c;\n    var aB = this.m_bodyB.c_position.a;\n    var qA = Rot.neo(aA);\n    var qB = Rot.neo(aB);\n    var rA = Rot.mul(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));\n    var rB = Rot.mul(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));\n    var d = Vec2.zero();\n    d.wAdd(1, cB, 1, rB);\n    d.wSub(1, cA, 1, rA);\n    var ay = Rot.mul(qA, this.m_localYAxisA);\n    var sAy = Vec2.cross(Vec2.sub(d, rA), ay);\n    var sBy = Vec2.cross(rB, ay);\n    var C = Vec2.dot(d, ay);\n    var k = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_sAy * this.m_sAy + this.m_invIB * this.m_sBy * this.m_sBy;\n    var impulse;\n    if (k != 0) {\n        impulse = -C / k;\n    } else {\n        impulse = 0;\n    }\n    var P = Vec2.zero().wSet(impulse, ay);\n    var LA = impulse * sAy;\n    var LB = impulse * sBy;\n    cA.wSub(this.m_invMassA, P);\n    aA -= this.m_invIA * LA;\n    cB.wAdd(this.m_invMassB, P);\n    aB += this.m_invIB * LB;\n    this.m_bodyA.c_position.c.set(cA);\n    this.m_bodyA.c_position.a = aA;\n    this.m_bodyB.c_position.c.set(cB);\n    this.m_bodyB.c_position.a = aB;\n    return Math.abs(C) <= Settings.linearSlop;\n};\n\n\n},{\"../Joint\":5,\"../Settings\":7,\"../common/Mat22\":16,\"../common/Mat33\":17,\"../common/Math\":18,\"../common/Position\":19,\"../common/Rot\":20,\"../common/Sweep\":21,\"../common/Transform\":22,\"../common/Vec2\":23,\"../common/Vec3\":24,\"../common/Velocity\":25,\"../util/create\":52,\"../util/options\":53}],39:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = BoxShape;\n\nvar common = require(\"../util/common\");\n\nvar create = require(\"../util/create\");\n\nvar options = require(\"../util/options\");\n\nvar Math = require(\"../common/Math\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar AABB = require(\"../collision/AABB\");\n\nvar Settings = require(\"../Settings\");\n\nvar PolygonShape = require(\"./PolygonShape\");\n\nBoxShape._super = PolygonShape;\n\nBoxShape.prototype = create(BoxShape._super.prototype);\n\nBoxShape.TYPE = \"polygon\";\n\nfunction BoxShape(hx, hy, center, angle) {\n    if (!(this instanceof BoxShape)) {\n        return new BoxShape(hx, hy, center, angle);\n    }\n    BoxShape._super.call(this);\n    this.m_vertices[0] = Vec2.neo(-hx, -hy);\n    this.m_vertices[1] = Vec2.neo(hx, -hy);\n    this.m_vertices[2] = Vec2.neo(hx, hy);\n    this.m_vertices[3] = Vec2.neo(-hx, hy);\n    this.m_normals[0] = Vec2.neo(0, -1);\n    this.m_normals[1] = Vec2.neo(1, 0);\n    this.m_normals[2] = Vec2.neo(0, 1);\n    this.m_normals[3] = Vec2.neo(-1, 0);\n    this.m_count = 4;\n    if (center && \"x\" in center && \"y\" in center) {\n        angle = angle || 0;\n        this.m_centroid.set(center);\n        var xf = Transform.identity();\n        xf.p.set(center);\n        xf.q.set(angle);\n        for (var i = 0; i < this.m_count; ++i) {\n            this.m_vertices[i] = Transform.mul(xf, this.m_vertices[i]);\n            this.m_normals[i] = Rot.mul(xf.q, this.m_normals[i]);\n        }\n    }\n}\n\n\n},{\"../Settings\":7,\"../collision/AABB\":11,\"../common/Math\":18,\"../common/Rot\":20,\"../common/Transform\":22,\"../common/Vec2\":23,\"../util/common\":51,\"../util/create\":52,\"../util/options\":53,\"./PolygonShape\":48}],40:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = ChainShape;\n\nvar common = require(\"../util/common\");\n\nvar create = require(\"../util/create\");\n\nvar options = require(\"../util/options\");\n\nvar Math = require(\"../common/Math\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar AABB = require(\"../collision/AABB\");\n\nvar Settings = require(\"../Settings\");\n\nvar Shape = require(\"../Shape\");\n\nvar EdgeShape = require(\"./EdgeShape\");\n\nChainShape._super = Shape;\n\nChainShape.prototype = create(ChainShape._super.prototype);\n\nChainShape.TYPE = \"chain\";\n\nfunction ChainShape(vertices, loop) {\n    if (!(this instanceof ChainShape)) {\n        return new ChainShape(vertices, loop);\n    }\n    ChainShape._super.call(this);\n    this.m_type = ChainShape.TYPE;\n    this.m_radius = Settings.polygonRadius;\n    this.m_vertices = [];\n    this.m_count = 0;\n    this.m_prevVertex = null;\n    this.m_nextVertex = null;\n    this.m_hasPrevVertex = false;\n    this.m_hasNextVertex = false;\n    if (vertices && vertices.length) {\n        if (loop) {\n            this._createLoop(vertices);\n        } else {\n            this._createChain(vertices);\n        }\n    }\n}\n\nChainShape.prototype._createLoop = function(vertices) {\n    ASSERT && common.assert(this.m_vertices.length == 0 && this.m_count == 0);\n    ASSERT && common.assert(vertices.length >= 3);\n    for (var i = 1; i < vertices.length; ++i) {\n        var v1 = vertices[i - 1];\n        var v2 = vertices[i];\n        ASSERT && common.assert(Vec2.distanceSquared(v1, v2) > Settings.linearSlopSquared);\n    }\n    this.m_vertices.length = 0;\n    this.m_count = vertices.length + 1;\n    for (var i = 0; i < vertices.length; ++i) {\n        this.m_vertices[i] = vertices[i].clone();\n    }\n    this.m_vertices[vertices.length] = vertices[0].clone();\n    this.m_prevVertex = this.m_vertices[this.m_count - 2];\n    this.m_nextVertex = this.m_vertices[1];\n    this.m_hasPrevVertex = true;\n    this.m_hasNextVertex = true;\n    return this;\n};\n\nChainShape.prototype._createChain = function(vertices) {\n    ASSERT && common.assert(this.m_vertices.length == 0 && this.m_count == 0);\n    ASSERT && common.assert(vertices.length >= 2);\n    for (var i = 1; i < vertices.length; ++i) {\n        var v1 = vertices[i - 1];\n        var v2 = vertices[i];\n        ASSERT && common.assert(Vec2.distanceSquared(v1, v2) > Settings.linearSlopSquared);\n    }\n    this.m_count = vertices.length;\n    for (var i = 0; i < vertices.length; ++i) {\n        this.m_vertices[i] = vertices[i].clone();\n    }\n    this.m_hasPrevVertex = false;\n    this.m_hasNextVertex = false;\n    this.m_prevVertex = null;\n    this.m_nextVertex = null;\n    return this;\n};\n\nChainShape.prototype._setPrevVertex = function(prevVertex) {\n    this.m_prevVertex = prevVertex;\n    this.m_hasPrevVertex = true;\n};\n\nChainShape.prototype._setNextVertex = function(nextVertex) {\n    this.m_nextVertex = nextVertex;\n    this.m_hasNextVertex = true;\n};\n\nChainShape.prototype._clone = function() {\n    var clone = new ChainShape();\n    clone.createChain(this.m_vertices);\n    clone.m_type = this.m_type;\n    clone.m_radius = this.m_radius;\n    clone.m_prevVertex = this.m_prevVertex;\n    clone.m_nextVertex = this.m_nextVertex;\n    clone.m_hasPrevVertex = this.m_hasPrevVertex;\n    clone.m_hasNextVertex = this.m_hasNextVertex;\n    return clone;\n};\n\nChainShape.prototype.getChildCount = function() {\n    return this.m_count - 1;\n};\n\nChainShape.prototype.getChildEdge = function(edge, childIndex) {\n    ASSERT && common.assert(0 <= childIndex && childIndex < this.m_count - 1);\n    edge.m_type = EdgeShape.TYPE;\n    edge.m_radius = this.m_radius;\n    edge.m_vertex1 = this.m_vertices[childIndex];\n    edge.m_vertex2 = this.m_vertices[childIndex + 1];\n    if (childIndex > 0) {\n        edge.m_vertex0 = this.m_vertices[childIndex - 1];\n        edge.m_hasVertex0 = true;\n    } else {\n        edge.m_vertex0 = this.m_prevVertex;\n        edge.m_hasVertex0 = this.m_hasPrevVertex;\n    }\n    if (childIndex < this.m_count - 2) {\n        edge.m_vertex3 = this.m_vertices[childIndex + 2];\n        edge.m_hasVertex3 = true;\n    } else {\n        edge.m_vertex3 = this.m_nextVertex;\n        edge.m_hasVertex3 = this.m_hasNextVertex;\n    }\n};\n\nChainShape.prototype.getVertex = function(index) {\n    ASSERT && common.assert(0 <= index && index <= this.m_count);\n    if (index < this.m_count) {\n        return this.m_vertices[index];\n    } else {\n        return this.m_vertices[0];\n    }\n};\n\nChainShape.prototype.testPoint = function(xf, p) {\n    return false;\n};\n\nChainShape.prototype.rayCast = function(output, input, xf, childIndex) {\n    ASSERT && common.assert(0 <= childIndex && childIndex < this.m_count);\n    var edgeShape = new EdgeShape(this.getVertex(childIndex), this.getVertex(childIndex + 1));\n    return edgeShape.rayCast(output, input, xf, 0);\n};\n\nChainShape.prototype.computeAABB = function(aabb, xf, childIndex) {\n    ASSERT && common.assert(0 <= childIndex && childIndex < this.m_count);\n    var v1 = Transform.mul(xf, this.getVertex(childIndex));\n    var v2 = Transform.mul(xf, this.getVertex(childIndex + 1));\n    aabb.combinePoints(v1, v2);\n};\n\nChainShape.prototype.computeMass = function(massData, density) {\n    massData.mass = 0;\n    massData.center = Vec2.neo();\n    massData.I = 0;\n};\n\nChainShape.prototype.computeDistanceProxy = function(proxy, childIndex) {\n    ASSERT && common.assert(0 <= childIndex && childIndex < this.m_count);\n    proxy.m_buffer[0] = this.getVertex(childIndex);\n    proxy.m_buffer[1] = this.getVertex(childIndex + 1);\n    proxy.m_vertices = proxy.m_buffer;\n    proxy.m_count = 2;\n    proxy.m_radius = this.m_radius;\n};\n\n\n},{\"../Settings\":7,\"../Shape\":8,\"../collision/AABB\":11,\"../common/Math\":18,\"../common/Rot\":20,\"../common/Transform\":22,\"../common/Vec2\":23,\"../util/common\":51,\"../util/create\":52,\"../util/options\":53,\"./EdgeShape\":47}],41:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = CircleShape;\n\nvar common = require(\"../util/common\");\n\nvar create = require(\"../util/create\");\n\nvar options = require(\"../util/options\");\n\nvar Math = require(\"../common/Math\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar AABB = require(\"../collision/AABB\");\n\nvar Settings = require(\"../Settings\");\n\nvar Shape = require(\"../Shape\");\n\nCircleShape._super = Shape;\n\nCircleShape.prototype = create(CircleShape._super.prototype);\n\nCircleShape.TYPE = \"circle\";\n\nfunction CircleShape(a, b) {\n    if (!(this instanceof CircleShape)) {\n        return new CircleShape(a, b);\n    }\n    CircleShape._super.call(this);\n    this.m_type = CircleShape.TYPE;\n    this.m_p = Vec2.zero();\n    this.m_radius = 1;\n    if (typeof a === \"object\" && Vec2.isValid(a)) {\n        this.m_p.set(a);\n        if (typeof b === \"number\") {\n            this.m_radius = b;\n        }\n    } else if (typeof a === \"number\") {\n        this.m_radius = a;\n    }\n}\n\nCircleShape.prototype.getRadius = function() {\n    return this.m_radius;\n};\n\nCircleShape.prototype.getCenter = function() {\n    return this.m_p;\n};\n\nCircleShape.prototype.getSupportVertex = function(d) {\n    return this.m_p;\n};\n\nCircleShape.prototype.getVertex = function(index) {\n    ASSERT && common.assert(index == 0);\n    return this.m_p;\n};\n\nCircleShape.prototype.getVertexCount = function(index) {\n    return 1;\n};\n\nCircleShape.prototype._clone = function() {\n    var clone = new CircleShape();\n    clone.m_type = this.m_type;\n    clone.m_radius = this.m_radius;\n    clone.m_p = this.m_p.clone();\n    return clone;\n};\n\nCircleShape.prototype.getChildCount = function() {\n    return 1;\n};\n\nCircleShape.prototype.testPoint = function(xf, p) {\n    var center = Vec2.add(xf.p, Rot.mul(xf.q, this.m_p));\n    var d = Vec2.sub(p, center);\n    return Vec2.dot(d, d) <= this.m_radius * this.m_radius;\n};\n\nCircleShape.prototype.rayCast = function(output, input, xf, childIndex) {\n    var position = Vec2.add(xf.p, Rot.mul(xf.q, this.m_p));\n    var s = Vec2.sub(input.p1, position);\n    var b = Vec2.dot(s, s) - this.m_radius * this.m_radius;\n    var r = Vec2.sub(input.p2, input.p1);\n    var c = Vec2.dot(s, r);\n    var rr = Vec2.dot(r, r);\n    var sigma = c * c - rr * b;\n    if (sigma < 0 || rr < Math.EPSILON) {\n        return false;\n    }\n    var a = -(c + Math.sqrt(sigma));\n    if (0 <= a && a <= input.maxFraction * rr) {\n        a /= rr;\n        output.fraction = a;\n        output.normal = Vec2.add(s, Vec2.mul(a, r));\n        output.normal.normalize();\n        return true;\n    }\n    return false;\n};\n\nCircleShape.prototype.computeAABB = function(aabb, xf, childIndex) {\n    var p = Vec2.add(xf.p, Rot.mul(xf.q, this.m_p));\n    aabb.lowerBound.set(p.x - this.m_radius, p.y - this.m_radius);\n    aabb.upperBound.set(p.x + this.m_radius, p.y + this.m_radius);\n};\n\nCircleShape.prototype.computeMass = function(massData, density) {\n    massData.mass = density * Math.PI * this.m_radius * this.m_radius;\n    massData.center = this.m_p;\n    massData.I = massData.mass * (.5 * this.m_radius * this.m_radius + Vec2.dot(this.m_p, this.m_p));\n};\n\nCircleShape.prototype.computeDistanceProxy = function(proxy) {\n    proxy.m_vertices.push(this.m_p);\n    proxy.m_count = 1;\n    proxy.m_radius = this.m_radius;\n};\n\n\n},{\"../Settings\":7,\"../Shape\":8,\"../collision/AABB\":11,\"../common/Math\":18,\"../common/Rot\":20,\"../common/Transform\":22,\"../common/Vec2\":23,\"../util/common\":51,\"../util/create\":52,\"../util/options\":53}],42:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nvar common = require(\"../util/common\");\n\nvar create = require(\"../util/create\");\n\nvar Math = require(\"../common/Math\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Settings = require(\"../Settings\");\n\nvar Shape = require(\"../Shape\");\n\nvar Contact = require(\"../Contact\");\n\nvar Manifold = require(\"../Manifold\");\n\nvar CircleShape = require(\"./CircleShape\");\n\nContact.addType(CircleShape.TYPE, CircleShape.TYPE, CircleCircleContact);\n\nfunction CircleCircleContact(manifold, xfA, fixtureA, indexA, xfB, fixtureB, indexB) {\n    ASSERT && common.assert(fixtureA.getType() == CircleShape.TYPE);\n    ASSERT && common.assert(fixtureB.getType() == CircleShape.TYPE);\n    CollideCircles(manifold, fixtureA.getShape(), xfA, fixtureB.getShape(), xfB);\n}\n\nfunction CollideCircles(manifold, circleA, xfA, circleB, xfB) {\n    manifold.pointCount = 0;\n    var pA = Transform.mul(xfA, circleA.m_p);\n    var pB = Transform.mul(xfB, circleB.m_p);\n    var distSqr = Vec2.distanceSquared(pB, pA);\n    var rA = circleA.m_radius;\n    var rB = circleB.m_radius;\n    var radius = rA + rB;\n    if (distSqr > radius * radius) {\n        return;\n    }\n    manifold.type = Manifold.e_circles;\n    manifold.localPoint.set(circleA.m_p);\n    manifold.localNormal.setZero();\n    manifold.pointCount = 1;\n    manifold.points[0].localPoint.set(circleB.m_p);\n    manifold.points[0].id.key = 0;\n}\n\nexports.CollideCircles = CollideCircles;\n\n\n},{\"../Contact\":3,\"../Manifold\":6,\"../Settings\":7,\"../Shape\":8,\"../common/Math\":18,\"../common/Transform\":22,\"../common/Vec2\":23,\"../util/common\":51,\"../util/create\":52,\"./CircleShape\":41}],43:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nvar common = require(\"../util/common\");\n\nvar Math = require(\"../common/Math\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar AABB = require(\"../collision/AABB\");\n\nvar Settings = require(\"../Settings\");\n\nvar Manifold = require(\"../Manifold\");\n\nvar Contact = require(\"../Contact\");\n\nvar Shape = require(\"../Shape\");\n\nvar CircleShape = require(\"./CircleShape\");\n\nvar PolygonShape = require(\"./PolygonShape\");\n\nContact.addType(PolygonShape.TYPE, CircleShape.TYPE, PolygonCircleContact);\n\nfunction PolygonCircleContact(manifold, xfA, fixtureA, indexA, xfB, fixtureB, indexB) {\n    ASSERT && common.assert(fixtureA.getType() == PolygonShape.TYPE);\n    ASSERT && common.assert(fixtureB.getType() == CircleShape.TYPE);\n    CollidePolygonCircle(manifold, fixtureA.getShape(), xfA, fixtureB.getShape(), xfB);\n}\n\nfunction CollidePolygonCircle(manifold, polygonA, xfA, circleB, xfB) {\n    manifold.pointCount = 0;\n    var c = Transform.mul(xfB, circleB.m_p);\n    var cLocal = Transform.mulT(xfA, c);\n    var normalIndex = 0;\n    var separation = -Infinity;\n    var radius = polygonA.m_radius + circleB.m_radius;\n    var vertexCount = polygonA.m_count;\n    var vertices = polygonA.m_vertices;\n    var normals = polygonA.m_normals;\n    for (var i = 0; i < vertexCount; ++i) {\n        var s = Vec2.dot(normals[i], Vec2.sub(cLocal, vertices[i]));\n        if (s > radius) {\n            return;\n        }\n        if (s > separation) {\n            separation = s;\n            normalIndex = i;\n        }\n    }\n    var vertIndex1 = normalIndex;\n    var vertIndex2 = vertIndex1 + 1 < vertexCount ? vertIndex1 + 1 : 0;\n    var v1 = vertices[vertIndex1];\n    var v2 = vertices[vertIndex2];\n    if (separation < Math.EPSILON) {\n        manifold.pointCount = 1;\n        manifold.type = Manifold.e_faceA;\n        manifold.localNormal.set(normals[normalIndex]);\n        manifold.localPoint.wSet(.5, v1, .5, v2);\n        manifold.points[0].localPoint = circleB.m_p;\n        manifold.points[0].id.key = 0;\n        return;\n    }\n    var u1 = Vec2.dot(Vec2.sub(cLocal, v1), Vec2.sub(v2, v1));\n    var u2 = Vec2.dot(Vec2.sub(cLocal, v2), Vec2.sub(v1, v2));\n    if (u1 <= 0) {\n        if (Vec2.distanceSquared(cLocal, v1) > radius * radius) {\n            return;\n        }\n        manifold.pointCount = 1;\n        manifold.type = Manifold.e_faceA;\n        manifold.localNormal.wSet(1, cLocal, -1, v1);\n        manifold.localNormal.normalize();\n        manifold.localPoint = v1;\n        manifold.points[0].localPoint.set(circleB.m_p);\n        manifold.points[0].id.key = 0;\n    } else if (u2 <= 0) {\n        if (Vec2.distanceSquared(cLocal, v2) > radius * radius) {\n            return;\n        }\n        manifold.pointCount = 1;\n        manifold.type = Manifold.e_faceA;\n        manifold.localNormal.wSet(1, cLocal, -1, v2);\n        manifold.localNormal.normalize();\n        manifold.localPoint.set(v2);\n        manifold.points[0].localPoint.set(circleB.m_p);\n        manifold.points[0].id.key = 0;\n    } else {\n        var faceCenter = Vec2.mid(v1, v2);\n        var separation = Vec2.dot(cLocal, normals[vertIndex1]) - Vec2.dot(faceCenter, normals[vertIndex1]);\n        if (separation > radius) {\n            return;\n        }\n        manifold.pointCount = 1;\n        manifold.type = Manifold.e_faceA;\n        manifold.localNormal.set(normals[vertIndex1]);\n        manifold.localPoint.set(faceCenter);\n        manifold.points[0].localPoint.set(circleB.m_p);\n        manifold.points[0].id.key = 0;\n    }\n}\n\n\n},{\"../Contact\":3,\"../Manifold\":6,\"../Settings\":7,\"../Shape\":8,\"../collision/AABB\":11,\"../common/Math\":18,\"../common/Rot\":20,\"../common/Transform\":22,\"../common/Vec2\":23,\"../util/common\":51,\"./CircleShape\":41,\"./PolygonShape\":48}],44:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nvar common = require(\"../util/common\");\n\nvar create = require(\"../util/create\");\n\nvar Math = require(\"../common/Math\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Settings = require(\"../Settings\");\n\nvar Shape = require(\"../Shape\");\n\nvar Contact = require(\"../Contact\");\n\nvar Manifold = require(\"../Manifold\");\n\nvar EdgeShape = require(\"./EdgeShape\");\n\nvar ChainShape = require(\"./ChainShape\");\n\nvar CircleShape = require(\"./CircleShape\");\n\nContact.addType(EdgeShape.TYPE, CircleShape.TYPE, EdgeCircleContact);\n\nContact.addType(ChainShape.TYPE, CircleShape.TYPE, ChainCircleContact);\n\nfunction EdgeCircleContact(manifold, xfA, fixtureA, indexA, xfB, fixtureB, indexB) {\n    ASSERT && common.assert(fixtureA.getType() == EdgeShape.TYPE);\n    ASSERT && common.assert(fixtureB.getType() == CircleShape.TYPE);\n    var shapeA = fixtureA.getShape();\n    var shapeB = fixtureB.getShape();\n    CollideEdgeCircle(manifold, shapeA, xfA, shapeB, xfB);\n}\n\nfunction ChainCircleContact(manifold, xfA, fixtureA, indexA, xfB, fixtureB, indexB) {\n    ASSERT && common.assert(fixtureA.getType() == ChainShape.TYPE);\n    ASSERT && common.assert(fixtureB.getType() == CircleShape.TYPE);\n    var chain = fixtureA.getShape();\n    var edge = new EdgeShape();\n    chain.getChildEdge(edge, indexA);\n    var shapeA = edge;\n    var shapeB = fixtureB.getShape();\n    CollideEdgeCircle(manifold, shapeA, xfA, shapeB, xfB);\n}\n\nfunction CollideEdgeCircle(manifold, edgeA, xfA, circleB, xfB) {\n    manifold.pointCount = 0;\n    var Q = Transform.mulT(xfA, Transform.mul(xfB, circleB.m_p));\n    var A = edgeA.m_vertex1;\n    var B = edgeA.m_vertex2;\n    var e = Vec2.sub(B, A);\n    var u = Vec2.dot(e, Vec2.sub(B, Q));\n    var v = Vec2.dot(e, Vec2.sub(Q, A));\n    var radius = edgeA.m_radius + circleB.m_radius;\n    if (v <= 0) {\n        var P = Vec2.clone(A);\n        var d = Vec2.sub(Q, P);\n        var dd = Vec2.dot(d, d);\n        if (dd > radius * radius) {\n            return;\n        }\n        if (edgeA.m_hasVertex0) {\n            var A1 = edgeA.m_vertex0;\n            var B1 = A;\n            var e1 = Vec2.sub(B1, A1);\n            var u1 = Vec2.dot(e1, Vec2.sub(B1, Q));\n            if (u1 > 0) {\n                return;\n            }\n        }\n        manifold.type = Manifold.e_circles;\n        manifold.localNormal.setZero();\n        manifold.localPoint.set(P);\n        manifold.pointCount = 1;\n        manifold.points[0].localPoint.set(circleB.m_p);\n        manifold.points[0].id.key = 0;\n        manifold.points[0].id.cf.indexA = 0;\n        manifold.points[0].id.cf.typeA = Manifold.e_vertex;\n        manifold.points[0].id.cf.indexB = 0;\n        manifold.points[0].id.cf.typeB = Manifold.e_vertex;\n        return;\n    }\n    if (u <= 0) {\n        var P = Vec2.clone(B);\n        var d = Vec2.sub(Q, P);\n        var dd = Vec2.dot(d, d);\n        if (dd > radius * radius) {\n            return;\n        }\n        if (edgeA.m_hasVertex3) {\n            var B2 = edgeA.m_vertex3;\n            var A2 = B;\n            var e2 = Vec2.sub(B2, A2);\n            var v2 = Vec2.dot(e2, Vec2.sub(Q, A2));\n            if (v2 > 0) {\n                return;\n            }\n        }\n        manifold.type = Manifold.e_circles;\n        manifold.localNormal.setZero();\n        manifold.localPoint.set(P);\n        manifold.pointCount = 1;\n        manifold.points[0].localPoint.set(circleB.m_p);\n        manifold.points[0].id.key = 0;\n        manifold.points[0].id.cf.indexA = 1;\n        manifold.points[0].id.cf.typeA = Manifold.e_vertex;\n        manifold.points[0].id.cf.indexB = 0;\n        manifold.points[0].id.cf.typeB = Manifold.e_vertex;\n        return;\n    }\n    var den = Vec2.dot(e, e);\n    ASSERT && common.assert(den > 0);\n    var P = Vec2.wAdd(u / den, A, v / den, B);\n    var d = Vec2.sub(Q, P);\n    var dd = Vec2.dot(d, d);\n    if (dd > radius * radius) {\n        return;\n    }\n    var n = Vec2.neo(-e.y, e.x);\n    if (Vec2.dot(n, Vec2.sub(Q, A)) < 0) {\n        n.set(-n.x, -n.y);\n    }\n    n.normalize();\n    manifold.type = Manifold.e_faceA;\n    manifold.localNormal = n;\n    manifold.localPoint.set(A);\n    manifold.pointCount = 1;\n    manifold.points[0].localPoint.set(circleB.m_p);\n    manifold.points[0].id.key = 0;\n    manifold.points[0].id.cf.indexA = 0;\n    manifold.points[0].id.cf.typeA = Manifold.e_face;\n    manifold.points[0].id.cf.indexB = 0;\n    manifold.points[0].id.cf.typeB = Manifold.e_vertex;\n}\n\n\n},{\"../Contact\":3,\"../Manifold\":6,\"../Settings\":7,\"../Shape\":8,\"../common/Math\":18,\"../common/Rot\":20,\"../common/Transform\":22,\"../common/Vec2\":23,\"../util/common\":51,\"../util/create\":52,\"./ChainShape\":40,\"./CircleShape\":41,\"./EdgeShape\":47}],45:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nvar common = require(\"../util/common\");\n\nvar create = require(\"../util/create\");\n\nvar Math = require(\"../common/Math\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Settings = require(\"../Settings\");\n\nvar Shape = require(\"../Shape\");\n\nvar Contact = require(\"../Contact\");\n\nvar Manifold = require(\"../Manifold\");\n\nvar EdgeShape = require(\"./EdgeShape\");\n\nvar ChainShape = require(\"./ChainShape\");\n\nvar PolygonShape = require(\"./PolygonShape\");\n\nContact.addType(EdgeShape.TYPE, PolygonShape.TYPE, EdgePolygonContact);\n\nContact.addType(ChainShape.TYPE, PolygonShape.TYPE, ChainPolygonContact);\n\nfunction EdgePolygonContact(manifold, xfA, fA, indexA, xfB, fB, indexB) {\n    ASSERT && common.assert(fA.getType() == EdgeShape.TYPE);\n    ASSERT && common.assert(fB.getType() == PolygonShape.TYPE);\n    CollideEdgePolygon(manifold, fA.getShape(), xfA, fB.getShape(), xfB);\n}\n\nfunction ChainPolygonContact(manifold, xfA, fA, indexA, xfB, fB, indexB) {\n    ASSERT && common.assert(fA.getType() == ChainShape.TYPE);\n    ASSERT && common.assert(fB.getType() == PolygonShape.TYPE);\n    var chain = fA.getShape();\n    var edge = new EdgeShape();\n    chain.getChildEdge(edge, indexA);\n    CollideEdgePolygon(manifold, edge, xfA, fB.getShape(), xfB);\n}\n\nvar e_unknown = -1;\n\nvar e_edgeA = 1;\n\nvar e_edgeB = 2;\n\nvar e_isolated = 0;\n\nvar e_concave = 1;\n\nvar e_convex = 2;\n\nfunction EPAxis() {\n    this.type;\n    this.index;\n    this.separation;\n}\n\nfunction TempPolygon() {\n    this.vertices = [];\n    this.normals = [];\n    this.count = 0;\n}\n\nfunction ReferenceFace() {\n    this.i1, this.i2;\n    this.v1, this.v2;\n    this.normal = Vec2.zero();\n    this.sideNormal1 = Vec2.zero();\n    this.sideOffset1;\n    this.sideNormal2 = Vec2.zero();\n    this.sideOffset2;\n}\n\nvar edgeAxis = new EPAxis();\n\nvar polygonAxis = new EPAxis();\n\nvar polygonBA = new TempPolygon();\n\nvar rf = new ReferenceFace();\n\nfunction CollideEdgePolygon(manifold, edgeA, xfA, polygonB, xfB) {\n    DEBUG && common.debug(\"CollideEdgePolygon\");\n    var m_type1, m_type2;\n    var xf = Transform.mulT(xfA, xfB);\n    var centroidB = Transform.mul(xf, polygonB.m_centroid);\n    var v0 = edgeA.m_vertex0;\n    var v1 = edgeA.m_vertex1;\n    var v2 = edgeA.m_vertex2;\n    var v3 = edgeA.m_vertex3;\n    var hasVertex0 = edgeA.m_hasVertex0;\n    var hasVertex3 = edgeA.m_hasVertex3;\n    var edge1 = Vec2.sub(v2, v1);\n    edge1.normalize();\n    var normal1 = Vec2.neo(edge1.y, -edge1.x);\n    var offset1 = Vec2.dot(normal1, Vec2.sub(centroidB, v1));\n    var offset0 = 0;\n    var offset2 = 0;\n    var convex1 = false;\n    var convex2 = false;\n    if (hasVertex0) {\n        var edge0 = Vec2.sub(v1, v0);\n        edge0.normalize();\n        var normal0 = Vec2.neo(edge0.y, -edge0.x);\n        convex1 = Vec2.cross(edge0, edge1) >= 0;\n        offset0 = Vec2.dot(normal0, centroidB) - Vec2.dot(normal0, v0);\n    }\n    if (hasVertex3) {\n        var edge2 = Vec2.sub(v3, v2);\n        edge2.normalize();\n        var normal2 = Vec2.neo(edge2.y, -edge2.x);\n        convex2 = Vec2.cross(edge1, edge2) > 0;\n        offset2 = Vec2.dot(normal2, centroidB) - Vec2.dot(normal2, v2);\n    }\n    var front;\n    var normal = Vec2.zero();\n    var lowerLimit = Vec2.zero();\n    var upperLimit = Vec2.zero();\n    if (hasVertex0 && hasVertex3) {\n        if (convex1 && convex2) {\n            front = offset0 >= 0 || offset1 >= 0 || offset2 >= 0;\n            if (front) {\n                normal.set(normal1);\n                lowerLimit.set(normal0);\n                upperLimit.set(normal2);\n            } else {\n                normal.wSet(-1, normal1);\n                lowerLimit.wSet(-1, normal1);\n                upperLimit.wSet(-1, normal1);\n            }\n        } else if (convex1) {\n            front = offset0 >= 0 || offset1 >= 0 && offset2 >= 0;\n            if (front) {\n                normal.set(normal1);\n                lowerLimit.set(normal0);\n                upperLimit.set(normal1);\n            } else {\n                normal.wSet(-1, normal1);\n                lowerLimit.wSet(-1, normal2);\n                upperLimit.wSet(-1, normal1);\n            }\n        } else if (convex2) {\n            front = offset2 >= 0 || offset0 >= 0 && offset1 >= 0;\n            if (front) {\n                normal.set(normal1);\n                lowerLimit.set(normal1);\n                upperLimit.set(normal2);\n            } else {\n                normal.wSet(-1, normal1);\n                lowerLimit.wSet(-1, normal1);\n                upperLimit.wSet(-1, normal0);\n            }\n        } else {\n            front = offset0 >= 0 && offset1 >= 0 && offset2 >= 0;\n            if (front) {\n                normal.set(normal1);\n                lowerLimit.set(normal1);\n                upperLimit.set(normal1);\n            } else {\n                normal.wSet(-1, normal1);\n                lowerLimit.wSet(-1, normal2);\n                upperLimit.wSet(-1, normal0);\n            }\n        }\n    } else if (hasVertex0) {\n        if (convex1) {\n            front = offset0 >= 0 || offset1 >= 0;\n            if (front) {\n                normal.set(normal1);\n                lowerLimit.set(normal0);\n                upperLimit.wSet(-1, normal1);\n            } else {\n                normal.wSet(-1, normal1);\n                lowerLimit.set(normal1);\n                upperLimit.wSet(-1, normal1);\n            }\n        } else {\n            front = offset0 >= 0 && offset1 >= 0;\n            if (front) {\n                normal.set(normal1);\n                lowerLimit.set(normal1);\n                upperLimit.wSet(-1, normal1);\n            } else {\n                normal.wSet(-1, normal1);\n                lowerLimit.set(normal1);\n                upperLimit.wSet(-1, normal0);\n            }\n        }\n    } else if (hasVertex3) {\n        if (convex2) {\n            front = offset1 >= 0 || offset2 >= 0;\n            if (front) {\n                normal.set(normal1);\n                lowerLimit.wSet(-1, normal1);\n                upperLimit.set(normal2);\n            } else {\n                normal.wSet(-1, normal1);\n                lowerLimit.wSet(-1, normal1);\n                upperLimit.set(normal1);\n            }\n        } else {\n            front = offset1 >= 0 && offset2 >= 0;\n            if (front) {\n                normal.set(normal1);\n                lowerLimit.wSet(-1, normal1);\n                upperLimit.set(normal1);\n            } else {\n                normal.wSet(-1, normal1);\n                lowerLimit.wSet(-1, normal2);\n                upperLimit.set(normal1);\n            }\n        }\n    } else {\n        front = offset1 >= 0;\n        if (front) {\n            normal.set(normal1);\n            lowerLimit.wSet(-1, normal1);\n            upperLimit.wSet(-1, normal1);\n        } else {\n            normal.wSet(-1, normal1);\n            lowerLimit.set(normal1);\n            upperLimit.set(normal1);\n        }\n    }\n    polygonBA.count = polygonB.m_count;\n    for (var i = 0; i < polygonB.m_count; ++i) {\n        polygonBA.vertices[i] = Transform.mul(xf, polygonB.m_vertices[i]);\n        polygonBA.normals[i] = Rot.mul(xf.q, polygonB.m_normals[i]);\n    }\n    var radius = 2 * Settings.polygonRadius;\n    manifold.pointCount = 0;\n    {\n        edgeAxis.type = e_edgeA;\n        edgeAxis.index = front ? 0 : 1;\n        edgeAxis.separation = Infinity;\n        for (var i = 0; i < polygonBA.count; ++i) {\n            var s = Vec2.dot(normal, Vec2.sub(polygonBA.vertices[i], v1));\n            if (s < edgeAxis.separation) {\n                edgeAxis.separation = s;\n            }\n        }\n    }\n    if (edgeAxis.type == e_unknown) {\n        return;\n    }\n    if (edgeAxis.separation > radius) {\n        return;\n    }\n    {\n        polygonAxis.type = e_unknown;\n        polygonAxis.index = -1;\n        polygonAxis.separation = -Infinity;\n        var perp = Vec2.neo(-normal.y, normal.x);\n        for (var i = 0; i < polygonBA.count; ++i) {\n            var n = Vec2.neg(polygonBA.normals[i]);\n            var s1 = Vec2.dot(n, Vec2.sub(polygonBA.vertices[i], v1));\n            var s2 = Vec2.dot(n, Vec2.sub(polygonBA.vertices[i], v2));\n            var s = Math.min(s1, s2);\n            if (s > radius) {\n                polygonAxis.type = e_edgeB;\n                polygonAxis.index = i;\n                polygonAxis.separation = s;\n                break;\n            }\n            if (Vec2.dot(n, perp) >= 0) {\n                if (Vec2.dot(Vec2.sub(n, upperLimit), normal) < -Settings.angularSlop) {\n                    continue;\n                }\n            } else {\n                if (Vec2.dot(Vec2.sub(n, lowerLimit), normal) < -Settings.angularSlop) {\n                    continue;\n                }\n            }\n            if (s > polygonAxis.separation) {\n                polygonAxis.type = e_edgeB;\n                polygonAxis.index = i;\n                polygonAxis.separation = s;\n            }\n        }\n    }\n    if (polygonAxis.type != e_unknown && polygonAxis.separation > radius) {\n        return;\n    }\n    var k_relativeTol = .98;\n    var k_absoluteTol = .001;\n    var primaryAxis;\n    if (polygonAxis.type == e_unknown) {\n        primaryAxis = edgeAxis;\n    } else if (polygonAxis.separation > k_relativeTol * edgeAxis.separation + k_absoluteTol) {\n        primaryAxis = polygonAxis;\n    } else {\n        primaryAxis = edgeAxis;\n    }\n    var ie = [ new Manifold.clipVertex(), new Manifold.clipVertex() ];\n    if (primaryAxis.type == e_edgeA) {\n        manifold.type = Manifold.e_faceA;\n        var bestIndex = 0;\n        var bestValue = Vec2.dot(normal, polygonBA.normals[0]);\n        for (var i = 1; i < polygonBA.count; ++i) {\n            var value = Vec2.dot(normal, polygonBA.normals[i]);\n            if (value < bestValue) {\n                bestValue = value;\n                bestIndex = i;\n            }\n        }\n        var i1 = bestIndex;\n        var i2 = i1 + 1 < polygonBA.count ? i1 + 1 : 0;\n        ie[0].v = polygonBA.vertices[i1];\n        ie[0].id.cf.indexA = 0;\n        ie[0].id.cf.indexB = i1;\n        ie[0].id.cf.typeA = Manifold.e_face;\n        ie[0].id.cf.typeB = Manifold.e_vertex;\n        ie[1].v = polygonBA.vertices[i2];\n        ie[1].id.cf.indexA = 0;\n        ie[1].id.cf.indexB = i2;\n        ie[1].id.cf.typeA = Manifold.e_face;\n        ie[1].id.cf.typeB = Manifold.e_vertex;\n        if (front) {\n            rf.i1 = 0;\n            rf.i2 = 1;\n            rf.v1 = v1;\n            rf.v2 = v2;\n            rf.normal.set(normal1);\n        } else {\n            rf.i1 = 1;\n            rf.i2 = 0;\n            rf.v1 = v2;\n            rf.v2 = v1;\n            rf.normal.wSet(-1, normal1);\n        }\n    } else {\n        manifold.type = Manifold.e_faceB;\n        ie[0].v = v1;\n        ie[0].id.cf.indexA = 0;\n        ie[0].id.cf.indexB = primaryAxis.index;\n        ie[0].id.cf.typeA = Manifold.e_vertex;\n        ie[0].id.cf.typeB = Manifold.e_face;\n        ie[1].v = v2;\n        ie[1].id.cf.indexA = 0;\n        ie[1].id.cf.indexB = primaryAxis.index;\n        ie[1].id.cf.typeA = Manifold.e_vertex;\n        ie[1].id.cf.typeB = Manifold.e_face;\n        rf.i1 = primaryAxis.index;\n        rf.i2 = rf.i1 + 1 < polygonBA.count ? rf.i1 + 1 : 0;\n        rf.v1 = polygonBA.vertices[rf.i1];\n        rf.v2 = polygonBA.vertices[rf.i2];\n        rf.normal.set(polygonBA.normals[rf.i1]);\n    }\n    rf.sideNormal1.set(rf.normal.y, -rf.normal.x);\n    rf.sideNormal2.wSet(-1, rf.sideNormal1);\n    rf.sideOffset1 = Vec2.dot(rf.sideNormal1, rf.v1);\n    rf.sideOffset2 = Vec2.dot(rf.sideNormal2, rf.v2);\n    var clipPoints1 = [ new Manifold.clipVertex(), new Manifold.clipVertex() ];\n    var clipPoints2 = [ new Manifold.clipVertex(), new Manifold.clipVertex() ];\n    var np;\n    np = Manifold.clipSegmentToLine(clipPoints1, ie, rf.sideNormal1, rf.sideOffset1, rf.i1);\n    if (np < Settings.maxManifoldPoints) {\n        return;\n    }\n    np = Manifold.clipSegmentToLine(clipPoints2, clipPoints1, rf.sideNormal2, rf.sideOffset2, rf.i2);\n    if (np < Settings.maxManifoldPoints) {\n        return;\n    }\n    if (primaryAxis.type == e_edgeA) {\n        manifold.localNormal = Vec2.clone(rf.normal);\n        manifold.localPoint = Vec2.clone(rf.v1);\n    } else {\n        manifold.localNormal = Vec2.clone(polygonB.m_normals[rf.i1]);\n        manifold.localPoint = Vec2.clone(polygonB.m_vertices[rf.i1]);\n    }\n    var pointCount = 0;\n    for (var i = 0; i < Settings.maxManifoldPoints; ++i) {\n        var separation = Vec2.dot(rf.normal, Vec2.sub(clipPoints2[i].v, rf.v1));\n        if (separation <= radius) {\n            var cp = manifold.points[pointCount];\n            if (primaryAxis.type == e_edgeA) {\n                cp.localPoint = Transform.mulT(xf, clipPoints2[i].v);\n                cp.id = clipPoints2[i].id;\n            } else {\n                cp.localPoint = clipPoints2[i].v;\n                cp.id.cf.typeA = clipPoints2[i].id.cf.typeB;\n                cp.id.cf.typeB = clipPoints2[i].id.cf.typeA;\n                cp.id.cf.indexA = clipPoints2[i].id.cf.indexB;\n                cp.id.cf.indexB = clipPoints2[i].id.cf.indexA;\n            }\n            ++pointCount;\n        }\n    }\n    manifold.pointCount = pointCount;\n}\n\n\n},{\"../Contact\":3,\"../Manifold\":6,\"../Settings\":7,\"../Shape\":8,\"../common/Math\":18,\"../common/Rot\":20,\"../common/Transform\":22,\"../common/Vec2\":23,\"../util/common\":51,\"../util/create\":52,\"./ChainShape\":40,\"./EdgeShape\":47,\"./PolygonShape\":48}],46:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nvar common = require(\"../util/common\");\n\nvar Math = require(\"../common/Math\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar AABB = require(\"../collision/AABB\");\n\nvar Settings = require(\"../Settings\");\n\nvar Manifold = require(\"../Manifold\");\n\nvar Contact = require(\"../Contact\");\n\nvar Shape = require(\"../Shape\");\n\nvar PolygonShape = require(\"./PolygonShape\");\n\nmodule.exports = CollidePolygons;\n\nContact.addType(PolygonShape.TYPE, PolygonShape.TYPE, PolygonContact);\n\nfunction PolygonContact(manifold, xfA, fixtureA, indexA, xfB, fixtureB, indexB) {\n    ASSERT && common.assert(fixtureA.getType() == PolygonShape.TYPE);\n    ASSERT && common.assert(fixtureB.getType() == PolygonShape.TYPE);\n    CollidePolygons(manifold, fixtureA.getShape(), xfA, fixtureB.getShape(), xfB);\n}\n\nfunction FindMaxSeparation(poly1, xf1, poly2, xf2) {\n    var count1 = poly1.m_count;\n    var count2 = poly2.m_count;\n    var n1s = poly1.m_normals;\n    var v1s = poly1.m_vertices;\n    var v2s = poly2.m_vertices;\n    var xf = Transform.mulT(xf2, xf1);\n    var bestIndex = 0;\n    var maxSeparation = -Infinity;\n    for (var i = 0; i < count1; ++i) {\n        var n = Rot.mul(xf.q, n1s[i]);\n        var v1 = Transform.mul(xf, v1s[i]);\n        var si = Infinity;\n        for (var j = 0; j < count2; ++j) {\n            var sij = Vec2.dot(n, v2s[j]) - Vec2.dot(n, v1);\n            if (sij < si) {\n                si = sij;\n            }\n        }\n        if (si > maxSeparation) {\n            maxSeparation = si;\n            bestIndex = i;\n        }\n    }\n    FindMaxSeparation._maxSeparation = maxSeparation;\n    FindMaxSeparation._bestIndex = bestIndex;\n}\n\nfunction FindIncidentEdge(c, poly1, xf1, edge1, poly2, xf2) {\n    var normals1 = poly1.m_normals;\n    var count2 = poly2.m_count;\n    var vertices2 = poly2.m_vertices;\n    var normals2 = poly2.m_normals;\n    ASSERT && common.assert(0 <= edge1 && edge1 < poly1.m_count);\n    var normal1 = Rot.mulT(xf2.q, Rot.mul(xf1.q, normals1[edge1]));\n    var index = 0;\n    var minDot = Infinity;\n    for (var i = 0; i < count2; ++i) {\n        var dot = Vec2.dot(normal1, normals2[i]);\n        if (dot < minDot) {\n            minDot = dot;\n            index = i;\n        }\n    }\n    var i1 = index;\n    var i2 = i1 + 1 < count2 ? i1 + 1 : 0;\n    c[0].v = Transform.mul(xf2, vertices2[i1]);\n    c[0].id.cf.indexA = edge1;\n    c[0].id.cf.indexB = i1;\n    c[0].id.cf.typeA = Manifold.e_face;\n    c[0].id.cf.typeB = Manifold.e_vertex;\n    c[1].v = Transform.mul(xf2, vertices2[i2]);\n    c[1].id.cf.indexA = edge1;\n    c[1].id.cf.indexB = i2;\n    c[1].id.cf.typeA = Manifold.e_face;\n    c[1].id.cf.typeB = Manifold.e_vertex;\n}\n\nfunction CollidePolygons(manifold, polyA, xfA, polyB, xfB) {\n    manifold.pointCount = 0;\n    var totalRadius = polyA.m_radius + polyB.m_radius;\n    FindMaxSeparation(polyA, xfA, polyB, xfB);\n    var edgeA = FindMaxSeparation._bestIndex;\n    var separationA = FindMaxSeparation._maxSeparation;\n    if (separationA > totalRadius) return;\n    FindMaxSeparation(polyB, xfB, polyA, xfA);\n    var edgeB = FindMaxSeparation._bestIndex;\n    var separationB = FindMaxSeparation._maxSeparation;\n    if (separationB > totalRadius) return;\n    var poly1;\n    var poly2;\n    var xf1;\n    var xf2;\n    var edge1;\n    var flip;\n    var k_tol = .1 * Settings.linearSlop;\n    if (separationB > separationA + k_tol) {\n        poly1 = polyB;\n        poly2 = polyA;\n        xf1 = xfB;\n        xf2 = xfA;\n        edge1 = edgeB;\n        manifold.type = Manifold.e_faceB;\n        flip = 1;\n    } else {\n        poly1 = polyA;\n        poly2 = polyB;\n        xf1 = xfA;\n        xf2 = xfB;\n        edge1 = edgeA;\n        manifold.type = Manifold.e_faceA;\n        flip = 0;\n    }\n    var incidentEdge = [ new Manifold.clipVertex(), new Manifold.clipVertex() ];\n    FindIncidentEdge(incidentEdge, poly1, xf1, edge1, poly2, xf2);\n    var count1 = poly1.m_count;\n    var vertices1 = poly1.m_vertices;\n    var iv1 = edge1;\n    var iv2 = edge1 + 1 < count1 ? edge1 + 1 : 0;\n    var v11 = vertices1[iv1];\n    var v12 = vertices1[iv2];\n    var localTangent = Vec2.sub(v12, v11);\n    localTangent.normalize();\n    var localNormal = Vec2.cross(localTangent, 1);\n    var planePoint = Vec2.wAdd(.5, v11, .5, v12);\n    var tangent = Rot.mul(xf1.q, localTangent);\n    var normal = Vec2.cross(tangent, 1);\n    v11 = Transform.mul(xf1, v11);\n    v12 = Transform.mul(xf1, v12);\n    var frontOffset = Vec2.dot(normal, v11);\n    var sideOffset1 = -Vec2.dot(tangent, v11) + totalRadius;\n    var sideOffset2 = Vec2.dot(tangent, v12) + totalRadius;\n    var clipPoints1 = [ new Manifold.clipVertex(), new Manifold.clipVertex() ];\n    var clipPoints2 = [ new Manifold.clipVertex(), new Manifold.clipVertex() ];\n    var np;\n    np = Manifold.clipSegmentToLine(clipPoints1, incidentEdge, Vec2.neg(tangent), sideOffset1, iv1);\n    if (np < 2) {\n        return;\n    }\n    np = Manifold.clipSegmentToLine(clipPoints2, clipPoints1, tangent, sideOffset2, iv2);\n    if (np < 2) {\n        return;\n    }\n    manifold.localNormal = localNormal;\n    manifold.localPoint = planePoint;\n    var pointCount = 0;\n    for (var i = 0; i < clipPoints2.length; ++i) {\n        var separation = Vec2.dot(normal, clipPoints2[i].v) - frontOffset;\n        if (separation <= totalRadius) {\n            var cp = manifold.points[pointCount];\n            cp.localPoint.set(Transform.mulT(xf2, clipPoints2[i].v));\n            cp.id = clipPoints2[i].id;\n            if (flip) {\n                var cf = cp.id.cf;\n                var indexA = cf.indexA;\n                var indexB = cf.indexB;\n                var typeA = cf.typeA;\n                var typeB = cf.typeB;\n                cf.indexA = indexB;\n                cf.indexB = indexA;\n                cf.typeA = typeB;\n                cf.typeB = typeA;\n            }\n            ++pointCount;\n        }\n    }\n    manifold.pointCount = pointCount;\n}\n\n\n},{\"../Contact\":3,\"../Manifold\":6,\"../Settings\":7,\"../Shape\":8,\"../collision/AABB\":11,\"../common/Math\":18,\"../common/Rot\":20,\"../common/Transform\":22,\"../common/Vec2\":23,\"../util/common\":51,\"./PolygonShape\":48}],47:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = EdgeShape;\n\nvar create = require(\"../util/create\");\n\nvar options = require(\"../util/options\");\n\nvar Settings = require(\"../Settings\");\n\nvar Shape = require(\"../Shape\");\n\nvar Math = require(\"../common/Math\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar AABB = require(\"../collision/AABB\");\n\nEdgeShape._super = Shape;\n\nEdgeShape.prototype = create(EdgeShape._super.prototype);\n\nEdgeShape.TYPE = \"edge\";\n\nfunction EdgeShape(v1, v2) {\n    if (!(this instanceof EdgeShape)) {\n        return new EdgeShape(v1, v2);\n    }\n    EdgeShape._super.call(this);\n    this.m_type = EdgeShape.TYPE;\n    this.m_radius = Settings.polygonRadius;\n    this.m_vertex1 = v1 ? Vec2.clone(v1) : Vec2.zero();\n    this.m_vertex2 = v2 ? Vec2.clone(v2) : Vec2.zero();\n    this.m_vertex0 = Vec2.zero();\n    this.m_vertex3 = Vec2.zero();\n    this.m_hasVertex0 = false;\n    this.m_hasVertex3 = false;\n}\n\nEdgeShape.prototype.setNext = function(v3) {\n    if (v3) {\n        this.m_vertex3.set(v3);\n        this.m_hasVertex3 = true;\n    } else {\n        this.m_vertex3.setZero();\n        this.m_hasVertex3 = false;\n    }\n    return this;\n};\n\nEdgeShape.prototype.setPrev = function(v0) {\n    if (v0) {\n        this.m_vertex0.set(v0);\n        this.m_hasVertex0 = true;\n    } else {\n        this.m_vertex0.setZero();\n        this.m_hasVertex0 = false;\n    }\n    return this;\n};\n\nEdgeShape.prototype._set = function(v1, v2) {\n    this.m_vertex1.set(v1);\n    this.m_vertex2.set(v2);\n    this.m_hasVertex0 = false;\n    this.m_hasVertex3 = false;\n    return this;\n};\n\nEdgeShape.prototype._clone = function() {\n    var clone = new EdgeShape();\n    clone.m_type = this.m_type;\n    clone.m_radius = this.m_radius;\n    clone.m_vertex1.set(this.m_vertex1);\n    clone.m_vertex2.set(this.m_vertex2);\n    clone.m_vertex0.set(this.m_vertex0);\n    clone.m_vertex3.set(this.m_vertex3);\n    clone.m_hasVertex0 = this.m_hasVertex0;\n    clone.m_hasVertex3 = this.m_hasVertex3;\n    return clone;\n};\n\nEdgeShape.prototype.getChildCount = function() {\n    return 1;\n};\n\nEdgeShape.prototype.testPoint = function(xf, p) {\n    return false;\n};\n\nEdgeShape.prototype.rayCast = function(output, input, xf, childIndex) {\n    var p1 = Rot.mulT(xf.q, Vec2.sub(input.p1, xf.p));\n    var p2 = Rot.mulT(xf.q, Vec2.sub(input.p2, xf.p));\n    var d = Vec2.sub(p2, p1);\n    var v1 = this.m_vertex1;\n    var v2 = this.m_vertex2;\n    var e = Vec2.sub(v2, v1);\n    var normal = Vec2.neo(e.y, -e.x);\n    normal.normalize();\n    var numerator = Vec2.dot(normal, Vec2.sub(v1, p1));\n    var denominator = Vec2.dot(normal, d);\n    if (denominator == 0) {\n        return false;\n    }\n    var t = numerator / denominator;\n    if (t < 0 || input.maxFraction < t) {\n        return false;\n    }\n    var q = Vec2.add(p1, Vec2.mul(t, d));\n    var r = Vec2.sub(v2, v1);\n    var rr = Vec2.dot(r, r);\n    if (rr == 0) {\n        return false;\n    }\n    var s = Vec2.dot(Vec2.sub(q, v1), r) / rr;\n    if (s < 0 || 1 < s) {\n        return false;\n    }\n    output.fraction = t;\n    if (numerator > 0) {\n        output.normal = Rot.mul(xf.q, normal).neg();\n    } else {\n        output.normal = Rot.mul(xf.q, normal);\n    }\n    return true;\n};\n\nEdgeShape.prototype.computeAABB = function(aabb, xf, childIndex) {\n    var v1 = Transform.mul(xf, this.m_vertex1);\n    var v2 = Transform.mul(xf, this.m_vertex2);\n    aabb.combinePoints(v1, v2);\n    aabb.extend(this.m_radius);\n};\n\nEdgeShape.prototype.computeMass = function(massData, density) {\n    massData.mass = 0;\n    massData.center.wSet(.5, this.m_vertex1, .5, this.m_vertex2);\n    massData.I = 0;\n};\n\nEdgeShape.prototype.computeDistanceProxy = function(proxy) {\n    proxy.m_vertices.push(this.m_vertex1);\n    proxy.m_vertices.push(this.m_vertex2);\n    proxy.m_count = 2;\n    proxy.m_radius = this.m_radius;\n};\n\n\n},{\"../Settings\":7,\"../Shape\":8,\"../collision/AABB\":11,\"../common/Math\":18,\"../common/Rot\":20,\"../common/Transform\":22,\"../common/Vec2\":23,\"../util/create\":52,\"../util/options\":53}],48:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = PolygonShape;\n\nvar common = require(\"../util/common\");\n\nvar create = require(\"../util/create\");\n\nvar options = require(\"../util/options\");\n\nvar Math = require(\"../common/Math\");\n\nvar Transform = require(\"../common/Transform\");\n\nvar Rot = require(\"../common/Rot\");\n\nvar Vec2 = require(\"../common/Vec2\");\n\nvar AABB = require(\"../collision/AABB\");\n\nvar Settings = require(\"../Settings\");\n\nvar Shape = require(\"../Shape\");\n\nPolygonShape._super = Shape;\n\nPolygonShape.prototype = create(PolygonShape._super.prototype);\n\nPolygonShape.TYPE = \"polygon\";\n\nfunction PolygonShape(vertices) {\n    if (!(this instanceof PolygonShape)) {\n        return new PolygonShape(vertices);\n    }\n    PolygonShape._super.call(this);\n    this.m_type = PolygonShape.TYPE;\n    this.m_radius = Settings.polygonRadius;\n    this.m_centroid = Vec2.zero();\n    this.m_vertices = [];\n    this.m_normals = [];\n    this.m_count = 0;\n    if (vertices && vertices.length) {\n        this._set(vertices);\n    }\n}\n\nPolygonShape.prototype.getVertex = function(index) {\n    ASSERT && common.assert(0 <= index && index < this.m_count);\n    return this.m_vertices[index];\n};\n\nPolygonShape.prototype._clone = function() {\n    var clone = new PolygonShape();\n    clone.m_type = this.m_type;\n    clone.m_radius = this.m_radius;\n    clone.m_count = this.m_count;\n    clone.m_centroid.set(this.m_centroid);\n    for (var i = 0; i < this.m_count; i++) {\n        clone.m_vertices.push(this.m_vertices[i].clone());\n    }\n    for (var i = 0; i < this.m_normals.length; i++) {\n        clone.m_normals.push(this.m_normals[i].clone());\n    }\n    return clone;\n};\n\nPolygonShape.prototype.getChildCount = function() {\n    return 1;\n};\n\nfunction ComputeCentroid(vs, count) {\n    ASSERT && common.assert(count >= 3);\n    var c = Vec2.zero();\n    var area = 0;\n    var pRef = Vec2.zero();\n    if (false) {\n        for (var i = 0; i < count; ++i) {\n            pRef.add(vs[i]);\n        }\n        pRef.mul(1 / count);\n    }\n    var inv3 = 1 / 3;\n    for (var i = 0; i < count; ++i) {\n        var p1 = pRef;\n        var p2 = vs[i];\n        var p3 = i + 1 < count ? vs[i + 1] : vs[0];\n        var e1 = Vec2.sub(p2, p1);\n        var e2 = Vec2.sub(p3, p1);\n        var D = Vec2.cross(e1, e2);\n        var triangleArea = .5 * D;\n        area += triangleArea;\n        c.wAdd(triangleArea * inv3, p1);\n        c.wAdd(triangleArea * inv3, p2);\n        c.wAdd(triangleArea * inv3, p3);\n    }\n    ASSERT && common.assert(area > Math.EPSILON);\n    c.mul(1 / area);\n    return c;\n}\n\nPolygonShape.prototype._set = function(vertices) {\n    ASSERT && common.assert(3 <= vertices.length && vertices.length <= Settings.maxPolygonVertices);\n    if (vertices.length < 3) {\n        SetAsBox(1, 1);\n        return;\n    }\n    var n = Math.min(vertices.length, Settings.maxPolygonVertices);\n    var ps = [];\n    var tempCount = 0;\n    for (var i = 0; i < n; ++i) {\n        var v = vertices[i];\n        var unique = true;\n        for (var j = 0; j < tempCount; ++j) {\n            if (Vec2.distanceSquared(v, ps[j]) < .25 * Settings.linearSlopSquared) {\n                unique = false;\n                break;\n            }\n        }\n        if (unique) {\n            ps[tempCount++] = v;\n        }\n    }\n    n = tempCount;\n    if (n < 3) {\n        ASSERT && common.assert(false);\n        SetAsBox(1, 1);\n        return;\n    }\n    var i0 = 0;\n    var x0 = ps[0].x;\n    for (var i = 1; i < n; ++i) {\n        var x = ps[i].x;\n        if (x > x0 || x == x0 && ps[i].y < ps[i0].y) {\n            i0 = i;\n            x0 = x;\n        }\n    }\n    var hull = [];\n    var m = 0;\n    var ih = i0;\n    for (;;) {\n        hull[m] = ih;\n        var ie = 0;\n        for (var j = 1; j < n; ++j) {\n            if (ie == ih) {\n                ie = j;\n                continue;\n            }\n            var r = Vec2.sub(ps[ie], ps[hull[m]]);\n            var v = Vec2.sub(ps[j], ps[hull[m]]);\n            var c = Vec2.cross(r, v);\n            if (c < 0) {\n                ie = j;\n            }\n            if (c == 0 && v.lengthSquared() > r.lengthSquared()) {\n                ie = j;\n            }\n        }\n        ++m;\n        ih = ie;\n        if (ie == i0) {\n            break;\n        }\n    }\n    if (m < 3) {\n        ASSERT && common.assert(false);\n        SetAsBox(1, 1);\n        return;\n    }\n    this.m_count = m;\n    for (var i = 0; i < m; ++i) {\n        this.m_vertices[i] = ps[hull[i]];\n    }\n    for (var i = 0; i < m; ++i) {\n        var i1 = i;\n        var i2 = i + 1 < m ? i + 1 : 0;\n        var edge = Vec2.sub(this.m_vertices[i2], this.m_vertices[i1]);\n        ASSERT && common.assert(edge.lengthSquared() > Math.EPSILON * Math.EPSILON);\n        this.m_normals[i] = Vec2.cross(edge, 1);\n        this.m_normals[i].normalize();\n    }\n    this.m_centroid = ComputeCentroid(this.m_vertices, m);\n};\n\nPolygonShape.prototype.testPoint = function(xf, p) {\n    var pLocal = Rot.mulT(xf.q, Vec2.sub(p, xf.p));\n    for (var i = 0; i < this.m_count; ++i) {\n        var dot = Vec2.dot(this.m_normals[i], Vec2.sub(pLocal, this.m_vertices[i]));\n        if (dot > 0) {\n            return false;\n        }\n    }\n    return true;\n};\n\nPolygonShape.prototype.rayCast = function(output, input, xf, childIndex) {\n    var p1 = Rot.mulT(xf.q, Vec2.sub(input.p1, xf.p));\n    var p2 = Rot.mulT(xf.q, Vec2.sub(input.p2, xf.p));\n    var d = Vec2.sub(p2, p1);\n    var lower = 0;\n    var upper = input.maxFraction;\n    var index = -1;\n    for (var i = 0; i < this.m_count; ++i) {\n        var numerator = Vec2.dot(this.m_normals[i], Vec2.sub(this.m_vertices[i], p1));\n        var denominator = Vec2.dot(this.m_normals[i], d);\n        if (denominator == 0) {\n            if (numerator < 0) {\n                return false;\n            }\n        } else {\n            if (denominator < 0 && numerator < lower * denominator) {\n                lower = numerator / denominator;\n                index = i;\n            } else if (denominator > 0 && numerator < upper * denominator) {\n                upper = numerator / denominator;\n            }\n        }\n        if (upper < lower) {\n            return false;\n        }\n    }\n    ASSERT && common.assert(0 <= lower && lower <= input.maxFraction);\n    if (index >= 0) {\n        output.fraction = lower;\n        output.normal = Rot.mul(xf.q, this.m_normals[index]);\n        return true;\n    }\n    return false;\n};\n\nPolygonShape.prototype.computeAABB = function(aabb, xf, childIndex) {\n    var minX = Infinity, minY = Infinity;\n    var maxX = -Infinity, maxY = -Infinity;\n    for (var i = 0; i < this.m_count; ++i) {\n        var v = Transform.mul(xf, this.m_vertices[i]);\n        minX = Math.min(minX, v.x);\n        maxX = Math.max(maxX, v.x);\n        minY = Math.min(minY, v.y);\n        maxY = Math.max(maxY, v.y);\n    }\n    aabb.lowerBound.set(minX, minY);\n    aabb.upperBound.set(maxX, maxY);\n    aabb.extend(this.m_radius);\n};\n\nPolygonShape.prototype.computeMass = function(massData, density) {\n    ASSERT && common.assert(this.m_count >= 3);\n    var center = Vec2.zero();\n    var area = 0;\n    var I = 0;\n    var s = Vec2.zero();\n    for (var i = 0; i < this.m_count; ++i) {\n        s.add(this.m_vertices[i]);\n    }\n    s.mul(1 / this.m_count);\n    var k_inv3 = 1 / 3;\n    for (var i = 0; i < this.m_count; ++i) {\n        var e1 = Vec2.sub(this.m_vertices[i], s);\n        var e2 = i + 1 < this.m_count ? Vec2.sub(this.m_vertices[i + 1], s) : Vec2.sub(this.m_vertices[0], s);\n        var D = Vec2.cross(e1, e2);\n        var triangleArea = .5 * D;\n        area += triangleArea;\n        center.wAdd(triangleArea * k_inv3, e1, triangleArea * k_inv3, e2);\n        var ex1 = e1.x;\n        var ey1 = e1.y;\n        var ex2 = e2.x;\n        var ey2 = e2.y;\n        var intx2 = ex1 * ex1 + ex2 * ex1 + ex2 * ex2;\n        var inty2 = ey1 * ey1 + ey2 * ey1 + ey2 * ey2;\n        I += .25 * k_inv3 * D * (intx2 + inty2);\n    }\n    massData.mass = density * area;\n    ASSERT && common.assert(area > Math.EPSILON);\n    center.mul(1 / area);\n    massData.center.wSet(1, center, 1, s);\n    massData.I = density * I;\n    massData.I += massData.mass * (Vec2.dot(massData.center, massData.center) - Vec2.dot(center, center));\n};\n\nPolygonShape.prototype.validate = function() {\n    for (var i = 0; i < this.m_count; ++i) {\n        var i1 = i;\n        var i2 = i < this.m_count - 1 ? i1 + 1 : 0;\n        var p = this.m_vertices[i1];\n        var e = Vec2.sub(this.m_vertices[i2], p);\n        for (var j = 0; j < this.m_count; ++j) {\n            if (j == i1 || j == i2) {\n                continue;\n            }\n            var v = Vec2.sub(this.m_vertices[j], p);\n            var c = Vec2.cross(e, v);\n            if (c < 0) {\n                return false;\n            }\n        }\n    }\n    return true;\n};\n\nPolygonShape.prototype.computeDistanceProxy = function(proxy) {\n    proxy.m_vertices = this.m_vertices;\n    proxy.m_count = this.m_count;\n    proxy.m_radius = this.m_radius;\n};\n\n\n},{\"../Settings\":7,\"../Shape\":8,\"../collision/AABB\":11,\"../common/Math\":18,\"../common/Rot\":20,\"../common/Transform\":22,\"../common/Vec2\":23,\"../util/common\":51,\"../util/create\":52,\"../util/options\":53}],49:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports = Pool;\n\nfunction Pool(opts) {\n    var _list = [];\n    var _max = opts.max || Infinity;\n    var _createFn = opts.create;\n    var _outFn = opts.allocate;\n    var _inFn = opts.release;\n    var _discardFn = opts.discard;\n    var _createCount = 0;\n    var _outCount = 0;\n    var _inCount = 0;\n    var _discardCount = 0;\n    this.max = function(n) {\n        if (typeof n === \"number\") {\n            _max = n;\n            return this;\n        }\n        return _max;\n    };\n    this.size = function() {\n        return _list.length;\n    };\n    this.allocate = function() {\n        var item;\n        if (_list.length > 0) {\n            item = _list.shift();\n        } else {\n            _createCount++;\n            if (typeof _createFn === \"function\") {\n                item = _createFn();\n            } else {\n                item = {};\n            }\n        }\n        _outCount++;\n        if (typeof _outFn === \"function\") {\n            _outFn(item);\n        }\n        return item;\n    };\n    this.release = function(item) {\n        if (_list.length < _max) {\n            _inCount++;\n            if (typeof _inFn === \"function\") {\n                _inFn(item);\n            }\n            _list.push(item);\n        } else {\n            _discardCount++;\n            if (typeof _discardFn === \"function\") {\n                item = _discardFn(item);\n            }\n        }\n    };\n    this.toString = function() {\n        return \" +\" + _createCount + \" >\" + _outCount + \" <\" + _inCount + \" -\" + _discardCount + \" =\" + _list.length + \"/\" + _max;\n    };\n}\n\n\n},{}],50:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nmodule.exports.now = function() {\n    return Date.now();\n};\n\nmodule.exports.diff = function(time) {\n    return Date.now() - time;\n};\n\n\n},{}],51:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nexports.debug = function() {\n    if (!DEBUG) return;\n    console.log.apply(console, arguments);\n};\n\nexports.assert = function(statement, err, log) {\n    if (!ASSERT) return;\n    if (statement) return;\n    log && console.log(log);\n    throw new Error(err);\n};\n\n\n},{}],52:[function(require,module,exports){\nif (typeof Object.create == \"function\") {\n    module.exports = function(proto, props) {\n        return Object.create.call(Object, proto, props);\n    };\n} else {\n    module.exports = function(proto, props) {\n        if (props) throw Error(\"Second argument is not supported!\");\n        if (typeof proto !== \"object\" || proto === null) throw Error(\"Invalid prototype!\");\n        noop.prototype = proto;\n        return new noop();\n    };\n    function noop() {}\n}\n\n\n},{}],53:[function(require,module,exports){\nDEBUG = typeof DEBUG === \"undefined\" ? false : DEBUG;\n\nASSERT = typeof ASSERT === \"undefined\" ? false : ASSERT;\n\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nmodule.exports = function(to, from) {\n    if (to === null || typeof to === \"undefined\") {\n        to = {};\n    }\n    for (var key in from) {\n        if (from.hasOwnProperty(key) && typeof to[key] === \"undefined\") {\n            to[key] = from[key];\n        }\n    }\n    if (typeof Object.getOwnPropertySymbols === \"function\") {\n        var symbols = Object.getOwnPropertySymbols(from);\n        for (var i = 0; i < symbols.length; i++) {\n            var symbol = symbols[i];\n            if (from.propertyIsEnumerable(symbol) && typeof to[key] === \"undefined\") {\n                to[symbol] = from[symbol];\n            }\n        }\n    }\n    return to;\n};\n\n\n},{}],54:[function(require,module,exports){\nfunction _identity(x) {\n  return x;\n};\nvar _cache = {};\nvar _modes = {};\nvar _easings = {};\n\nfunction Easing(token) {\n  if (typeof token === 'function') {\n    return token;\n  }\n  if (typeof token !== 'string') {\n    return _identity;\n  }\n  var fn = _cache[token];\n  if (fn) {\n    return fn;\n  }\n  var match = /^(\\w+)(-(in|out|in-out|out-in))?(\\((.*)\\))?$/i.exec(token);\n  if (!match || !match.length) {\n    return _identity;\n  }\n  var easing = _easings[match[1]];\n  var mode = _modes[match[3]];\n  var params = match[5];\n  if (easing && easing.fn) {\n    fn = easing.fn;\n  } else if (easing && easing.fc) {\n    fn = easing.fc.apply(easing.fc, params\n        && params.replace(/\\s+/, '').split(','));\n  } else {\n    fn = _identity;\n  }\n  if (mode) {\n    fn = mode.fn(fn);\n  }\n  // TODO: It can be a memory leak with different `params`.\n  _cache[token] = fn;\n  return fn;\n};\n\nEasing.add = function(data) {\n  // TODO: create a map of all { name-mode : data }\n  var names = (data.name || data.mode).split(/\\s+/);\n  for (var i = 0; i < names.length; i++) {\n    var name = names[i];\n    if (name) {\n      (data.name ? _easings : _modes)[name] = data;\n    }\n  }\n};\n\nEasing.add({\n  mode : 'in',\n  fn : function(f) {\n    return f;\n  }\n});\n\nEasing.add({\n  mode : 'out',\n  fn : function(f) {\n    return function(t) {\n      return 1 - f(1 - t);\n    };\n  }\n});\n\nEasing.add({\n  mode : 'in-out',\n  fn : function(f) {\n    return function(t) {\n      return (t < 0.5) ? (f(2 * t) / 2) : (1 - f(2 * (1 - t)) / 2);\n    };\n  }\n});\n\nEasing.add({\n  mode : 'out-in',\n  fn : function(f) {\n    return function(t) {\n      return (t < 0.5) ? (1 - f(2 * (1 - t)) / 2) : (f(2 * t) / 2);\n    };\n  }\n});\n\nEasing.add({\n  name : 'linear',\n  fn : function(t) {\n    return t;\n  }\n});\n\nEasing.add({\n  name : 'quad',\n  fn : function(t) {\n    return t * t;\n  }\n});\n\nEasing.add({\n  name : 'cubic',\n  fn : function(t) {\n    return t * t * t;\n  }\n});\n\nEasing.add({\n  name : 'quart',\n  fn : function(t) {\n    return t * t * t * t;\n  }\n});\n\nEasing.add({\n  name : 'quint',\n  fn : function(t) {\n    return t * t * t * t * t;\n  }\n});\n\nEasing.add({\n  name : 'sin sine',\n  fn : function(t) {\n    return 1 - Math.cos(t * Math.PI / 2);\n  }\n});\n\nEasing.add({\n  name : 'exp expo',\n  fn : function(t) {\n    return t == 0 ? 0 : Math.pow(2, 10 * (t - 1));\n  }\n});\n\nEasing.add({\n  name : 'circle circ',\n  fn : function(t) {\n    return 1 - Math.sqrt(1 - t * t);\n  }\n});\n\nEasing.add({\n  name : 'bounce',\n  fn : function(t) {\n    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625\n        * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625\n        * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t\n        + .984375;\n  }\n});\n\nEasing.add({\n  name : 'poly',\n  fc : function(e) {\n    return function(t) {\n      return Math.pow(t, e);\n    };\n  }\n});\n\nEasing.add({\n  name : 'elastic',\n  fc : function(a, p) {\n    p = p || 0.45;\n    a = a || 1;\n    var s = p / (2 * Math.PI) * Math.asin(1 / a);\n    return function(t) {\n      return 1 + a * Math.pow(2, -10 * t)\n          * Math.sin((t - s) * (2 * Math.PI) / p);\n    };\n  }\n});\n\nEasing.add({\n  name : 'back',\n  fc : function(s) {\n    s = typeof s !== 'undefined' ? s : 1.70158;\n    return function(t) {\n      return t * t * ((s + 1) * t - s);\n    };\n  }\n});\n\nmodule.exports = Easing;\n\n},{}],55:[function(require,module,exports){\nif (typeof DEBUG === 'undefined')\n  DEBUG = true;\n\nrequire('../core')._load(function(stage, elem) {\n  Mouse.subscribe(stage, elem);\n});\n\n// TODO: capture mouse\n\nMouse.CLICK = 'click';\nMouse.START = 'touchstart mousedown';\nMouse.MOVE = 'touchmove mousemove';\nMouse.END = 'touchend mouseup';\nMouse.CANCEL = 'touchcancel mousecancel';\n\nMouse.subscribe = function(stage, elem) {\n  if (stage.mouse) {\n    return;\n  }\n\n  stage.mouse = new Mouse(stage, elem);\n\n  // `click` events are synthesized from start/end events on same nodes\n  // `mousecancel` events are synthesized on blur or mouseup outside element\n\n  elem.addEventListener('touchstart', handleStart);\n  elem.addEventListener('touchend', handleEnd);\n  elem.addEventListener('touchmove', handleMove);\n  elem.addEventListener('touchcancel', handleCancel);\n\n  elem.addEventListener('mousedown', handleStart);\n  elem.addEventListener('mouseup', handleEnd);\n  elem.addEventListener('mousemove', handleMove);\n\n  document.addEventListener('mouseup', handleCancel);\n  window.addEventListener(\"blur\", handleCancel);\n\n  var clicklist = [], cancellist = [];\n\n  function handleStart(event) {\n    event.preventDefault();\n    stage.mouse.locate(event);\n    // DEBUG && console.log('Mouse Start: ' + event.type + ' ' + mouse);\n    stage.mouse.publish(event.type, event);\n\n    stage.mouse.lookup('click', clicklist);\n    stage.mouse.lookup('mousecancel', cancellist);\n  }\n\n  function handleMove(event) {\n    event.preventDefault();\n    stage.mouse.locate(event);\n    stage.mouse.publish(event.type, event);\n  }\n\n  function handleEnd(event) {\n    event.preventDefault();\n    // up/end location is not available, last one is used instead\n    // DEBUG && console.log('Mouse End: ' + event.type + ' ' + mouse);\n    stage.mouse.publish(event.type, event);\n\n    if (clicklist.length) {\n      // DEBUG && console.log('Mouse Click: ' + clicklist.length);\n      stage.mouse.publish('click', event, clicklist);\n    }\n    cancellist.length = 0;\n  }\n\n  function handleCancel(event) {\n    if (cancellist.length) {\n      // DEBUG && console.log('Mouse Cancel: ' + event.type);\n      stage.mouse.publish('mousecancel', event, cancellist);\n    }\n    clicklist.length = 0;\n  }\n};\n\nfunction Mouse(stage, elem) {\n  if (!(this instanceof Mouse)) {\n    // old-style mouse subscription\n    return;\n  }\n\n  var ratio = stage.viewport().ratio || 1;\n\n  stage.on('viewport', function(size) {\n    ratio = size.ratio || ratio;\n  });\n\n  this.x = 0;\n  this.y = 0;\n  this.toString = function() {\n    return (this.x | 0) + 'x' + (this.y | 0);\n  };\n  this.locate = function(event) {\n    locateElevent(elem, event, this);\n    this.x *= ratio;\n    this.y *= ratio;\n  };\n  this.lookup = function(type, collect) {\n    this.type = type;\n    this.root = stage;\n    this.event = null;\n    collect.length = 0;\n    this.collect = collect;\n\n    this.root.visit(this.visitor, this);\n  };\n  this.publish = function(type, event, targets) {\n    this.type = type;\n    this.root = stage;\n    this.event = event;\n    this.collect = false;\n    this.timeStamp = Date.now();\n\n    if (type !== 'mousemove' && type !== 'touchmove') {\n      DEBUG && console.log(this.type + ' ' + this);\n    }\n\n    if (targets) {\n      while (targets.length)\n        if (this.visitor.end(targets.shift(), this))\n          break;\n      targets.length = 0;\n    } else {\n      this.root.visit(this.visitor, this);\n    }\n  };\n  this.visitor = {\n    reverse : true,\n    visible : true,\n    start : function(node, mouse) {\n      return !node._flag(mouse.type);\n    },\n    end : function(node, mouse) {\n      // mouse: event/collect, type, root\n      rel.raw = mouse.event;\n      rel.type = mouse.type;\n      rel.timeStamp = mouse.timeStamp;\n      rel.abs.x = mouse.x;\n      rel.abs.y = mouse.y;\n\n      var listeners = node.listeners(mouse.type);\n      if (!listeners) {\n        return;\n      }\n      node.matrix().inverse().map(mouse, rel);\n      if (!(node === mouse.root || node.hitTest(rel))) {\n        return;\n      }\n      if (mouse.collect) {\n        mouse.collect.push(node);\n      }\n      if (mouse.event) {\n        var cancel = false;\n        for (var l = 0; l < listeners.length; l++) {\n          cancel = listeners[l].call(node, rel) ? true : cancel;\n        }\n        return cancel;\n      }\n    }\n  };\n};\n\n// TODO: define per mouse object with get-only x and y\nvar rel = {}, abs = {};\n\ndefineValue(rel, 'clone', function(obj) {\n  obj = obj || {}, obj.x = this.x, obj.y = this.y;\n  return obj;\n});\ndefineValue(rel, 'toString', function() {\n  return (this.x | 0) + 'x' + (this.y | 0) + ' (' + this.abs + ')';\n});\ndefineValue(rel, 'abs', abs);\ndefineValue(abs, 'clone', function(obj) {\n  obj = obj || {}, obj.x = this.x, obj.y = this.y;\n  return obj;\n});\ndefineValue(abs, 'toString', function() {\n  return (this.x | 0) + 'x' + (this.y | 0);\n});\n\nfunction defineValue(obj, name, value) {\n  Object.defineProperty(obj, name, {\n    value : value\n  });\n}\n\nfunction locateElevent(el, ev, loc) {\n  // pageX/Y if available?\n  if (ev.touches && ev.touches.length) {\n    loc.x = ev.touches[0].clientX;\n    loc.y = ev.touches[0].clientY;\n  } else {\n    loc.x = ev.clientX;\n    loc.y = ev.clientY;\n  }\n  var rect = el.getBoundingClientRect();\n  loc.x -= rect.left;\n  loc.y -= rect.top;\n  loc.x -= el.clientLeft | 0;\n  loc.y -= el.clientTop | 0;\n  return loc;\n};\n\nmodule.exports = Mouse;\n\n},{\"../core\":60}],56:[function(require,module,exports){\nvar Easing = require('./easing');\nvar Class = require('../core');\nvar Pin = require('../pin');\n\nClass.prototype.tween = function(duration, delay, append) {\n  if (typeof duration !== 'number') {\n    append = duration, delay = 0, duration = 0;\n  } else if (typeof delay !== 'number') {\n    append = delay, delay = 0;\n  }\n\n  if (!this._tweens) {\n    this._tweens = [];\n    var ticktime = 0;\n    this.tick(function(elapsed, now, last) {\n      if (!this._tweens.length) {\n        return;\n      }\n\n      // ignore old elapsed\n      var ignore = ticktime != last;\n      ticktime = now;\n      if (ignore) {\n        return true;\n      }\n\n      var next = this._tweens[0].tick(this, elapsed, now, last);\n      if (next) {\n        this._tweens.shift();\n      }\n\n      if (typeof next === 'object') {\n        this._tweens.unshift(next);\n      }\n\n      return true;\n    }, true);\n  }\n\n  this.touch();\n  if (!append) {\n    this._tweens.length = 0;\n  }\n  var tween = new Tween(this, duration, delay);\n  this._tweens.push(tween);\n  return tween;\n};\n\nfunction Tween(owner, duration, delay) {\n  this._end = {};\n  this._duration = duration || 400;\n  this._delay = delay || 0;\n\n  this._owner = owner;\n  this._time = 0;\n};\n\nTween.prototype.tick = function(node, elapsed, now, last) {\n  this._time += elapsed;\n\n  if (this._time < this._delay) {\n    return;\n  }\n\n  var time = this._time - this._delay;\n\n  if (!this._start) {\n    this._start = {};\n    for ( var key in this._end) {\n      this._start[key] = this._owner.pin(key);\n    }\n  }\n\n  var p, over;\n  if (time < this._duration) {\n    p = time / this._duration, over = false;\n  } else {\n    p = 1, over = true;\n  }\n  p = typeof this._easing == 'function' ? this._easing(p) : p;\n\n  var q = 1 - p;\n\n  for ( var key in this._end) {\n    this._owner.pin(key, this._start[key] * q + this._end[key] * p);\n  }\n\n  if (over) {\n    try {\n      this._done && this._done.call(this._owner);\n    } catch (e) {\n      console.log(e);\n    }\n    return this._next || true;\n  }\n};\n\nTween.prototype.tween = function(duration, delay) {\n  return this._next = new Tween(this._owner, duration, delay);\n};\n\nTween.prototype.duration = function(duration) {\n  this._duration = duration;\n  return this;\n};\n\nTween.prototype.delay = function(delay) {\n  this._delay = delay;\n  return this;\n};\n\nTween.prototype.ease = function(easing) {\n  this._easing = Easing(easing);\n  return this;\n};\n\nTween.prototype.done = function(fn) {\n  this._done = fn;\n  return this;\n};\n\nTween.prototype.hide = function() {\n  this.done(function() {\n    this.hide();\n  });\n  return this;\n};\n\nTween.prototype.remove = function() {\n  this.done(function() {\n    this.remove();\n  });\n  return this;\n};\n\nTween.prototype.pin = function(a, b) {\n  if (typeof a === 'object') {\n    for ( var attr in a) {\n      pinning(this._owner, this._end, attr, a[attr]);\n    }\n  } else if (typeof b !== 'undefined') {\n    pinning(this._owner, this._end, a, b);\n  }\n  return this;\n};\n\nfunction pinning(node, map, key, value) {\n  if (typeof node.pin(key) === 'number') {\n    map[key] = value;\n  } else if (typeof node.pin(key + 'X') === 'number'\n      && typeof node.pin(key + 'Y') === 'number') {\n    map[key + 'X'] = value;\n    map[key + 'Y'] = value;\n  }\n}\n\nPin._add_shortcuts(Tween);\n\n/**\n * @deprecated Use .done(fn) instead.\n */\nTween.prototype.then = function(fn) {\n  this.done(fn);\n  return this;\n};\n\n/**\n * @deprecated Use .done(fn) instead.\n */\nTween.prototype.then = function(fn) {\n  this.done(fn);\n  return this;\n};\n\n/**\n * @deprecated NOOP\n */\nTween.prototype.clear = function(forward) {\n  return this;\n};\n\nmodule.exports = Tween;\n},{\"../core\":60,\"../pin\":68,\"./easing\":54}],57:[function(require,module,exports){\nvar Class = require('./core');\nrequire('./pin');\nrequire('./loop');\n\nvar create = require('./util/create');\nvar math = require('./util/math');\n\nClass.anim = function(frames, fps) {\n  var anim = new Anim();\n  anim.frames(frames).gotoFrame(0);\n  fps && anim.fps(fps);\n  return anim;\n};\n\nAnim._super = Class;\nAnim.prototype = create(Anim._super.prototype);\n\n// TODO: replace with atlas fps or texture time\nClass.Anim = {\n  FPS : 15\n};\n\nfunction Anim() {\n  Anim._super.call(this);\n  this.label('Anim');\n\n  this._textures = [];\n\n  this._fps = Class.Anim.FPS;\n  this._ft = 1000 / this._fps;\n\n  this._time = -1;\n  this._repeat = 0;\n\n  this._index = 0;\n  this._frames = [];\n\n  var lastTime = 0;\n  this.tick(function(t, now, last) {\n    if (this._time < 0 || this._frames.length <= 1) {\n      return;\n    }\n\n    // ignore old elapsed\n    var ignore = lastTime != last;\n    lastTime = now;\n    if (ignore) {\n      return true;\n    }\n\n    this._time += t;\n    if (this._time < this._ft) {\n      return true;\n    }\n    var n = this._time / this._ft | 0;\n    this._time -= n * this._ft;\n    this.moveFrame(n);\n    if (this._repeat > 0 && (this._repeat -= n) <= 0) {\n      this.stop();\n      this._callback && this._callback();\n      return false;\n    }\n    return true;\n  }, false);\n};\n\nAnim.prototype.fps = function(fps) {\n  if (typeof fps === 'undefined') {\n    return this._fps;\n  }\n  this._fps = fps > 0 ? fps : Class.Anim.FPS;\n  this._ft = 1000 / this._fps;\n  return this;\n};\n\n/**\n * @deprecated Use frames\n */\nAnim.prototype.setFrames = function(a, b, c) {\n  return this.frames(a, b, c);\n};\n\nAnim.prototype.frames = function(frames) {\n  this._index = 0;\n  this._frames = Class.texture(frames).array();\n  this.touch();\n  return this;\n};\n\nAnim.prototype.length = function() {\n  return this._frames ? this._frames.length : 0;\n};\n\nAnim.prototype.gotoFrame = function(frame, resize) {\n  this._index = math.rotate(frame, this._frames.length) | 0;\n  resize = resize || !this._textures[0];\n  this._textures[0] = this._frames[this._index];\n  if (resize) {\n    this.pin('width', this._textures[0].width);\n    this.pin('height', this._textures[0].height);\n  }\n  this.touch();\n  return this;\n};\n\nAnim.prototype.moveFrame = function(move) {\n  return this.gotoFrame(this._index + move);\n};\n\nAnim.prototype.repeat = function(repeat, callback) {\n  this._repeat = repeat * this._frames.length - 1;\n  this._callback = callback;\n  this.play();\n  return this;\n};\n\nAnim.prototype.play = function(frame) {\n  if (typeof frame !== 'undefined') {\n    this.gotoFrame(frame);\n    this._time = 0;\n  } else if (this._time < 0) {\n    this._time = 0;\n  }\n\n  this.touch();\n  return this;\n};\n\nAnim.prototype.stop = function(frame) {\n  this._time = -1;\n  if (typeof frame !== 'undefined') {\n    this.gotoFrame(frame);\n  }\n  return this;\n};\n\n},{\"./core\":60,\"./loop\":66,\"./pin\":68,\"./util/create\":74,\"./util/math\":78}],58:[function(require,module,exports){\nif (typeof DEBUG === 'undefined')\n  DEBUG = true;\n\nvar Class = require('./core');\nvar Texture = require('./texture');\n\nvar extend = require('./util/extend');\nvar create = require('./util/create');\nvar is = require('./util/is');\n\nvar string = require('./util/string');\n\n// name : atlas\nvar _atlases_map = {};\n// [atlas]\nvar _atlases_arr = [];\n\n// TODO: print subquery not found error\n// TODO: index textures\n\nClass.atlas = function(def) {\n  var atlas = is.fn(def.draw) ? def : new Atlas(def);\n  if (def.name) {\n    _atlases_map[def.name] = atlas;\n  }\n  _atlases_arr.push(atlas);\n\n  deprecated(def, 'imagePath');\n  deprecated(def, 'imageRatio');\n\n  var url = def.imagePath;\n  var ratio = def.imageRatio || 1;\n  if (is.string(def.image)) {\n    url = def.image;\n  } else if (is.hash(def.image)) {\n    url = def.image.src || def.image.url;\n    ratio = def.image.ratio || ratio;\n  }\n  url && Class.preload(function(done) {\n    url = Class.resolve(url);\n    DEBUG && console.log('Loading atlas: ' + url);\n    var imageloader = Class.config('image-loader');\n\n    imageloader(url, function(image) {\n      DEBUG && console.log('Image loaded: ' + url);\n      atlas.src(image, ratio);\n      done();\n\n    }, function(err) {\n      DEBUG && console.log('Error loading atlas: ' + url, err);\n      done();\n    });\n  });\n\n  return atlas;\n};\n\nAtlas._super = Texture;\nAtlas.prototype = create(Atlas._super.prototype);\n\nfunction Atlas(def) {\n  Atlas._super.call(this);\n\n  var atlas = this;\n\n  deprecated(def, 'filter');\n  deprecated(def, 'cutouts');\n  deprecated(def, 'sprites');\n  deprecated(def, 'factory');\n\n  var map = def.map || def.filter;\n  var ppu = def.ppu || def.ratio || 1;\n  var trim = def.trim || 0;\n  var textures = def.textures;\n  var factory = def.factory;\n  var cutouts = def.cutouts || def.sprites;\n\n  function make(def) {\n    if (!def || is.fn(def.draw)) {\n      return def;\n    }\n\n    def = extend({}, def);\n\n    if (is.fn(map)) {\n      def = map(def);\n    }\n\n    if (ppu != 1) {\n      def.x *= ppu, def.y *= ppu;\n      def.width *= ppu, def.height *= ppu;\n      def.top *= ppu, def.bottom *= ppu;\n      def.left *= ppu, def.right *= ppu;\n    }\n\n    if (trim != 0) {\n      def.x += trim, def.y += trim;\n      def.width -= 2 * trim, def.height -= 2 * trim;\n      def.top -= trim, def.bottom -= trim;\n      def.left -= trim, def.right -= trim;\n    }\n\n    var texture = atlas.pipe();\n    texture.top = def.top, texture.bottom = def.bottom;\n    texture.left = def.left, texture.right = def.right;\n    texture.src(def.x, def.y, def.width, def.height);\n    return texture;\n  }\n\n  function find(query) {\n    if (textures) {\n      if (is.fn(textures)) {\n        return textures(query);\n      } else if (is.hash(textures)) {\n        return textures[query];\n      }\n    }\n    if (cutouts) { // deprecated\n      var result = null, n = 0;\n      for (var i = 0; i < cutouts.length; i++) {\n        if (string.startsWith(cutouts[i].name, query)) {\n          if (n === 0) {\n            result = cutouts[i];\n          } else if (n === 1) {\n            result = [ result, cutouts[i] ];\n          } else {\n            result.push(cutouts[i]);\n          }\n          n++;\n        }\n      }\n      if (n === 0 && is.fn(factory)) {\n        result = function(subquery) {\n          return factory(query + (subquery ? subquery : ''));\n        };\n      }\n      return result;\n    }\n  }\n\n  this.select = function(query) {\n    if (!query) {\n      // TODO: if `textures` is texture def, map or fn?\n      return new Selection(this.pipe());\n    }\n    var found = find(query);\n    if (found) {\n      return new Selection(found, find, make);\n    }\n  };\n\n};\n\nvar nfTexture = new Texture();\nnfTexture.x = nfTexture.y = nfTexture.width = nfTexture.height = 0;\nnfTexture.pipe = nfTexture.src = nfTexture.dest = function() {\n  return this;\n};\nnfTexture.draw = function() {\n};\n\nvar nfSelection = new Selection(nfTexture);\n\nfunction Selection(result, find, make) {\n  function link(result, subquery) {\n    if (!result) {\n      return nfTexture;\n\n    } else if (is.fn(result.draw)) {\n      return result;\n\n    } else if (is.hash(result) && is.number(result.width)\n        && is.number(result.height) && is.fn(make)) {\n      return make(result);\n\n    } else if (is.hash(result) && is.defined(subquery)) {\n      return link(result[subquery]);\n\n    } else if (is.fn(result)) {\n      return link(result(subquery));\n\n    } else if (is.array(result)) {\n      return link(result[0]);\n\n    } else if (is.string(result) && is.fn(find)) {\n      return link(find(result));\n    }\n  }\n\n  this.one = function(subquery) {\n    return link(result, subquery);\n  };\n\n  this.array = function(arr) {\n    var array = is.array(arr) ? arr : [];\n    if (is.array(result)) {\n      for (var i = 0; i < result.length; i++) {\n        array[i] = link(result[i]);\n      }\n    } else {\n      array[0] = link(result);\n    }\n    return array;\n  };\n}\n\nClass.texture = function(query) {\n  if (!is.string(query)) {\n    return new Selection(query);\n  }\n\n  var result = null, atlas, i;\n\n  if ((i = query.indexOf(':')) > 0 && query.length > i + 1) {\n    atlas = _atlases_map[query.slice(0, i)];\n    result = atlas && atlas.select(query.slice(i + 1));\n  }\n\n  if (!result && (atlas = _atlases_map[query])) {\n    result = atlas.select();\n  }\n\n  for (i = 0; !result && i < _atlases_arr.length; i++) {\n    result = _atlases_arr[i].select(query);\n  }\n\n  if (!result) {\n    console.error('Texture not found: ' + query);\n    result = nfSelection;\n  }\n\n  return result;\n};\n\nfunction deprecated(hash, name, msg) {\n  if (name in hash)\n    console.log(msg ? msg.replace('%name', name) : '\\'' + name\n        + '\\' field of texture atlas is deprecated.');\n};\n\nmodule.exports = Atlas;\n\n},{\"./core\":60,\"./texture\":71,\"./util/create\":74,\"./util/extend\":76,\"./util/is\":77,\"./util/string\":81}],59:[function(require,module,exports){\nvar Class = require('./core');\nvar Texture = require('./texture');\n\nClass.canvas = function(type, attributes, callback) {\n  if (typeof type === 'string') {\n    if (typeof attributes === 'object') {\n    } else {\n      if (typeof attributes === 'function') {\n        callback = attributes;\n      }\n      attributes = {};\n    }\n  } else {\n    if (typeof type === 'function') {\n      callback = type;\n    }\n    attributes = {};\n    type = '2d';\n  }\n\n  var canvas = document.createElement('canvas');\n  var context = canvas.getContext(type, attributes);\n  var texture = new Texture(canvas);\n\n  texture.context = function() {\n    return context;\n  };\n\n  texture.size = function(width, height, ratio) {\n    ratio = ratio || 1;\n    canvas.width = width * ratio;\n    canvas.height = height * ratio;\n    this.src(canvas, ratio);\n    return this;\n  };\n\n  texture.canvas = function(fn) {\n    if (typeof fn === 'function') {\n      fn.call(this, context);\n    } else if (typeof fn === 'undefined' && typeof callback === 'function') {\n      callback.call(this, context);\n    }\n    return this;\n  };\n\n  if (typeof callback === 'function') {\n    callback.call(texture, context);\n  }\n\n  return texture;\n};\n},{\"./core\":60,\"./texture\":71}],60:[function(require,module,exports){\nif (typeof DEBUG === 'undefined')\n  DEBUG = true;\n\nvar stats = require('./util/stats');\nvar extend = require('./util/extend');\nvar is = require('./util/is');\nvar _await = require('./util/await');\n\nstats.create = 0;\n\nfunction Class(arg) {\n  if (!(this instanceof Class)) {\n    if (is.fn(arg)) {\n      return Class.app.apply(Class, arguments);\n    } else if (is.object(arg)) {\n      return Class.atlas.apply(Class, arguments);\n    } else {\n      return arg;\n    }\n  }\n\n  stats.create++;\n\n  for (var i = 0; i < _init.length; i++) {\n    _init[i].call(this);\n  }\n}\n\nvar _init = [];\n\nClass._init = function(fn) {\n  _init.push(fn);\n};\n\nvar _load = [];\n\nClass._load = function(fn) {\n  _load.push(fn);\n};\n\nvar _config = {};\n\nClass.config = function() {\n  if (arguments.length === 1 && is.string(arguments[0])) {\n    return _config[arguments[0]];\n  }\n  if (arguments.length === 1 && is.object(arguments[0])) {\n    extend(_config, arguments[0]);\n  }\n  if (arguments.length === 2 && is.string(arguments[0])) {\n    _config[arguments[0], arguments[1]];\n  }\n};\n\nvar _app_queue = [];\nvar _preload_queue = [];\nvar _stages = [];\nvar _loaded = false;\nvar _paused = false;\n\nClass.app = function(app, opts) {\n  if (!_loaded) {\n    _app_queue.push(arguments);\n    return;\n  }\n  DEBUG && console.log('Creating app...');\n  var loader = Class.config('app-loader');\n  loader(function(stage, canvas) {\n    DEBUG && console.log('Initing app...');\n    for (var i = 0; i < _load.length; i++) {\n      _load[i].call(this, stage, canvas);\n    }\n    app(stage, canvas);\n    _stages.push(stage);\n    DEBUG && console.log('Starting app...');\n    stage.start();\n  }, opts);\n};\n\nvar loading = _await();\n\nClass.preload = function(load) {\n  if (typeof load === 'string') {\n    var url = Class.resolve(load);\n    if (/\\.js($|\\?|\\#)/.test(url)) {\n      DEBUG && console.log('Loading script: ' + url);\n      load = function(callback) {\n        loadScript(url, callback);\n      };\n    }\n  }\n  if (typeof load !== 'function') {\n    return;\n  }\n  // if (!_started) {\n  // _preload_queue.push(load);\n  // return;\n  // }\n  load(loading());\n};\n\nClass.start = function(config) {\n  DEBUG && console.log('Starting...');\n\n  Class.config(config);\n\n  // DEBUG && console.log('Preloading...');\n  // _started = true;\n  // while (_preload_queue.length) {\n  // var load = _preload_queue.shift();\n  // load(loading());\n  // }\n\n  loading.then(function() {\n    DEBUG && console.log('Loading apps...');\n    _loaded = true;\n    while (_app_queue.length) {\n      var args = _app_queue.shift();\n      Class.app.apply(Class, args);\n    }\n  });\n};\n\nClass.pause = function() {\n  if (!_paused) {\n    _paused = true;\n    for (var i = _stages.length - 1; i >= 0; i--) {\n      _stages[i].pause();\n    }\n  }\n};\n\nClass.resume = function() {\n  if (_paused) {\n    _paused = false;\n    for (var i = _stages.length - 1; i >= 0; i--) {\n      _stages[i].resume();\n    }\n  }\n};\n\nClass.create = function() {\n  return new Class();\n};\n\nClass.resolve = (function() {\n\n  if (typeof window === 'undefined' || typeof document === 'undefined') {\n    return function(url) {\n      return url;\n    };\n  }\n\n  var scripts = document.getElementsByTagName('script');\n\n  function getScriptSrc() {\n    // HTML5\n    if (document.currentScript) {\n      return document.currentScript.src;\n    }\n\n    // IE>=10\n    var stack;\n    try {\n      var err = new Error();\n      if (err.stack) {\n        stack = err.stack;\n      } else {\n        throw err;\n      }\n    } catch (err) {\n      stack = err.stack;\n    }\n    if (typeof stack === 'string') {\n      stack = stack.split('\\n');\n      // Uses the last line, where the call started\n      for (var i = stack.length; i--;) {\n        var url = stack[i].match(/(\\w+\\:\\/\\/[^/]*?\\/.+?)(:\\d+)(:\\d+)?/);\n        if (url) {\n          return url[1];\n        }\n      }\n    }\n\n    // IE<11\n    if (scripts.length && 'readyState' in scripts[0]) {\n      for (var i = scripts.length; i--;) {\n        if (scripts[i].readyState === 'interactive') {\n          return scripts[i].src;\n        }\n      }\n    }\n\n    return location.href;\n  }\n\n  return function(url) {\n    if (/^\\.\\//.test(url)) {\n      var src = getScriptSrc();\n      var base = src.substring(0, src.lastIndexOf('/') + 1);\n      url = base + url.substring(2);\n      // } else if (/^\\.\\.\\//.test(url)) {\n      // url = base + url;\n    }\n    return url;\n  };\n})();\n\nmodule.exports = Class;\n\nfunction loadScript(src, callback) {\n  var el = document.createElement('script');\n  el.addEventListener('load', function() {\n    callback();\n  });\n  el.addEventListener('error', function(err) {\n    callback(err || 'Error loading script: ' + src);\n  });\n  el.src = src;\n  el.id = 'preload-' + Date.now();\n  document.body.appendChild(el);\n};\n},{\"./util/await\":73,\"./util/extend\":76,\"./util/is\":77,\"./util/stats\":80}],61:[function(require,module,exports){\nrequire('./util/event')(require('./core').prototype, function(obj, name, on) {\n  obj._flag(name, on);\n});\n\n},{\"./core\":60,\"./util/event\":75}],62:[function(require,module,exports){\nvar Class = require('./core');\nrequire('./pin');\nrequire('./loop');\n\nvar repeat = require('./util/repeat');\nvar create = require('./util/create');\n\nClass.image = function(image) {\n  var img = new Image();\n  image && img.image(image);\n  return img;\n};\n\nImage._super = Class;\nImage.prototype = create(Image._super.prototype);\n\nfunction Image() {\n  Image._super.call(this);\n  this.label('Image');\n  this._textures = [];\n  this._image = null;\n};\n\n/**\n * @deprecated Use image\n */\nImage.prototype.setImage = function(a, b, c) {\n  return this.image(a, b, c);\n};\n\nImage.prototype.image = function(image) {\n  this._image = Class.texture(image).one();\n  this.pin('width', this._image ? this._image.width : 0);\n  this.pin('height', this._image ? this._image.height : 0);\n  this._textures[0] = this._image.pipe();\n  this._textures.length = 1;\n  return this;\n};\n\nImage.prototype.tile = function(inner) {\n  this._repeat(false, inner);\n  return this;\n};\n\nImage.prototype.stretch = function(inner) {\n  this._repeat(true, inner);\n  return this;\n};\n\nImage.prototype._repeat = function(stretch, inner) {\n  var self = this;\n  this.untick(this._repeatTicker);\n  this.tick(this._repeatTicker = function() {\n    if (this._mo_stretch == this._pin._ts_transform) {\n      return;\n    }\n    this._mo_stretch = this._pin._ts_transform;\n    var width = this.pin('width');\n    var height = this.pin('height');\n    this._textures.length = repeat(this._image, width, height, stretch, inner,\n        insert);\n  });\n\n  function insert(i, sx, sy, sw, sh, dx, dy, dw, dh) {\n    var repeat = self._textures.length > i ? self._textures[i]\n        : self._textures[i] = self._image.pipe();\n    repeat.src(sx, sy, sw, sh);\n    repeat.dest(dx, dy, dw, dh);\n  }\n};\n\n},{\"./core\":60,\"./loop\":66,\"./pin\":68,\"./util/create\":74,\"./util/repeat\":79}],63:[function(require,module,exports){\nmodule.exports = require('./core');\nmodule.exports.Matrix = require('./matrix');\nmodule.exports.Texture = require('./texture');\nrequire('./atlas');\nrequire('./tree');\nrequire('./event');\nrequire('./pin');\n\nrequire('./loop');\nrequire('./root');\n},{\"./atlas\":58,\"./core\":60,\"./event\":61,\"./loop\":66,\"./matrix\":67,\"./pin\":68,\"./root\":69,\"./texture\":71,\"./tree\":72}],64:[function(require,module,exports){\nvar Class = require('./core');\nrequire('./pin');\nrequire('./loop');\n\nvar create = require('./util/create');\n\nClass.row = function(align) {\n  return Class.create().row(align).label('Row');\n};\n\nClass.prototype.row = function(align) {\n  this.sequence('row', align);\n  return this;\n};\n\nClass.column = function(align) {\n  return Class.create().column(align).label('Row');\n};\n\nClass.prototype.column = function(align) {\n  this.sequence('column', align);\n  return this;\n};\n\nClass.sequence = function(type, align) {\n  return Class.create().sequence(type, align).label('Sequence');\n};\n\nClass.prototype.sequence = function(type, align) {\n\n  this._padding = this._padding || 0;\n  this._spacing = this._spacing || 0;\n\n  this.untick(this._layoutTiker);\n  this.tick(this._layoutTiker = function() {\n    if (this._mo_seq == this._ts_touch) {\n      return;\n    }\n    this._mo_seq = this._ts_touch;\n\n    var alignChildren = (this._mo_seqAlign != this._ts_children);\n    this._mo_seqAlign = this._ts_children;\n\n    var width = 0, height = 0;\n\n    var child, next = this.first(true);\n    var first = true;\n    while (child = next) {\n      next = child.next(true);\n\n      child.matrix(true);\n      var w = child.pin('boxWidth');\n      var h = child.pin('boxHeight');\n\n      if (type == 'column') {\n        !first && (height += this._spacing);\n        child.pin('offsetY') != height && child.pin('offsetY', height);\n        width = Math.max(width, w);\n        height = height + h;\n        alignChildren && child.pin('alignX', align);\n\n      } else if (type == 'row') {\n        !first && (width += this._spacing);\n        child.pin('offsetX') != width && child.pin('offsetX', width);\n        width = width + w;\n        height = Math.max(height, h);\n        alignChildren && child.pin('alignY', align);\n      }\n      first = false;\n    }\n    width += 2 * this._padding;\n    height += 2 * this._padding;\n    this.pin('width') != width && this.pin('width', width);\n    this.pin('height') != height && this.pin('height', height);\n  });\n  return this;\n};\n\nClass.box = function() {\n  return Class.create().box().label('Box');\n};\n\nClass.prototype.box = function() {\n  this._padding = this._padding || 0;\n\n  this.untick(this._layoutTiker);\n  this.tick(this._layoutTiker = function() {\n    if (this._mo_box == this._ts_touch) {\n      return;\n    }\n    this._mo_box = this._ts_touch;\n\n    var width = 0, height = 0;\n    var child, next = this.first(true);\n    while (child = next) {\n      next = child.next(true);\n      child.matrix(true);\n      var w = child.pin('boxWidth');\n      var h = child.pin('boxHeight');\n      width = Math.max(width, w);\n      height = Math.max(height, h);\n    }\n    width += 2 * this._padding;\n    height += 2 * this._padding;\n    this.pin('width') != width && this.pin('width', width);\n    this.pin('height') != height && this.pin('height', height);\n  });\n  return this;\n};\n\nClass.layer = function() {\n  return Class.create().layer().label('Layer');\n};\n\nClass.prototype.layer = function() {\n\n  this.untick(this._layoutTiker);\n  this.tick(this._layoutTiker = function() {\n    var parent = this.parent();\n    if (parent) {\n      var width = parent.pin('width');\n      if (this.pin('width') != width) {\n        this.pin('width', width);\n      }\n      var height = parent.pin('height');\n      if (this.pin('height') != height) {\n        this.pin('height', height);\n      }\n    }\n  }, true);\n  return this;\n};\n\n// TODO: move padding to pin\nClass.prototype.padding = function(pad) {\n  this._padding = pad;\n  return this;\n};\n\nClass.prototype.spacing = function(space) {\n  this._spacing = space;\n  return this;\n};\n\n},{\"./core\":60,\"./loop\":66,\"./pin\":68,\"./util/create\":74}],65:[function(require,module,exports){\n/**\n * Default loader for web.\n */\n\nif (typeof DEBUG === 'undefined')\n  DEBUG = true;\n\nvar Class = require('../core');\n\nClass._supported = (function() {\n  var elem = document.createElement('canvas');\n  return (elem.getContext && elem.getContext('2d')) ? true : false;\n})();\n\nwindow.addEventListener('load', function() {\n  DEBUG && console.log('On load.');\n  if (Class._supported) {\n    Class.start();\n  }\n  // TODO if not supported\n}, false);\n\nClass.config({\n  'app-loader' : AppLoader,\n  'image-loader' : ImageLoader\n});\n\nfunction AppLoader(app, configs) {\n  configs = configs || {};\n  var canvas = configs.canvas, context = null, full = false;\n  var width = 0, height = 0, ratio = 1;\n\n  if (typeof canvas === 'string') {\n    canvas = document.getElementById(canvas);\n  }\n\n  if (!canvas) {\n    canvas = document.getElementById('cutjs')\n        || document.getElementById('stage');\n  }\n\n  if (!canvas) {\n    full = true;\n    DEBUG && console.log('Creating Canvas...');\n    canvas = document.createElement('canvas');\n    canvas.style.position = 'absolute';\n    canvas.style.top = '0';\n    canvas.style.left = '0';\n\n    var body = document.body;\n    body.insertBefore(canvas, body.firstChild);\n  }\n\n  context = canvas.getContext('2d');\n\n  var devicePixelRatio = window.devicePixelRatio || 1;\n  var backingStoreRatio = context.webkitBackingStorePixelRatio\n      || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio\n      || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;\n  ratio = devicePixelRatio / backingStoreRatio;\n\n  var requestAnimationFrame = window.requestAnimationFrame\n      || window.msRequestAnimationFrame || window.mozRequestAnimationFrame\n      || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame\n      || function(callback) {\n        return window.setTimeout(callback, 1000 / 60);\n      };\n\n  DEBUG && console.log('Creating stage...');\n  var root = Class.root(requestAnimationFrame, render);\n\n  function render() {\n    context.setTransform(1, 0, 0, 1, 0, 0);\n    context.clearRect(0, 0, width, height);\n    root.render(context);\n  }\n\n  root.background = function(color) {\n    canvas.style.backgroundColor = color;\n    return this;\n  };\n\n  app(root, canvas);\n\n  resize();\n  window.addEventListener('resize', resize, false);\n  window.addEventListener('orientationchange', resize, false);\n\n  function resize() {\n\n    if (full) {\n      // screen.availWidth/Height?\n      width = (window.innerWidth > 0 ? window.innerWidth : screen.width);\n      height = (window.innerHeight > 0 ? window.innerHeight : screen.height);\n\n      canvas.style.width = width + 'px';\n      canvas.style.height = height + 'px';\n\n    } else {\n      width = canvas.clientWidth;\n      height = canvas.clientHeight;\n    }\n\n    width *= ratio;\n    height *= ratio;\n\n    if (canvas.width === width && canvas.height === height) {\n      return;\n    }\n\n    canvas.width = width;\n    canvas.height = height;\n\n    DEBUG && console.log('Resize: ' + width + ' x ' + height + ' / ' + ratio);\n\n    root.viewport(width, height, ratio);\n\n    render();\n  }\n}\n\nfunction ImageLoader(src, success, error) {\n  DEBUG && console.log('Loading image: ' + src);\n  var image = new Image();\n  image.onload = function() {\n    success(image);\n  };\n  image.onerror = error;\n  image.src = src;\n}\n\n},{\"../core\":60}],66:[function(require,module,exports){\nvar Class = require('./core');\nrequire('./pin');\nvar stats = require('./util/stats');\n\nClass.prototype._textures = null;\nClass.prototype._alpha = 1;\n\nClass.prototype.render = function(context) {\n  if (!this._visible) {\n    return;\n  }\n  stats.node++;\n\n  var m = this.matrix();\n  context.setTransform(m.a, m.b, m.c, m.d, m.e, m.f);\n\n  // move this elsewhere!\n  this._alpha = this._pin._alpha * (this._parent ? this._parent._alpha : 1);\n  var alpha = this._pin._textureAlpha * this._alpha;\n\n  if (context.globalAlpha != alpha) {\n    context.globalAlpha = alpha;\n  }\n\n  if (this._textures !== null) {\n    for (var i = 0, n = this._textures.length; i < n; i++) {\n      this._textures[i].draw(context);\n    }\n  }\n\n  if (context.globalAlpha != this._alpha) {\n    context.globalAlpha = this._alpha;\n  }\n\n  var child, next = this._first;\n  while (child = next) {\n    next = child._next;\n    child.render(context);\n  }\n};\n\nClass.prototype._tickBefore = null;\nClass.prototype._tickAfter = null;\nClass.prototype.MAX_ELAPSE = Infinity;\n\nClass.prototype._tick = function(elapsed, now, last) {\n  if (!this._visible) {\n    return;\n  }\n\n  if (elapsed > this.MAX_ELAPSE) {\n    elapsed = this.MAX_ELAPSE;\n  }\n\n  var ticked = false;\n\n  if (this._tickBefore !== null) {\n    for (var i = 0, n = this._tickBefore.length; i < n; i++) {\n      stats.tick++;\n      ticked = this._tickBefore[i].call(this, elapsed, now, last) === true\n          || ticked;\n    }\n  }\n\n  var child, next = this._first;\n  while (child = next) {\n    next = child._next;\n    if (child._flag('_tick')) {\n      ticked = child._tick(elapsed, now, last) === true ? true : ticked;\n    }\n  }\n\n  if (this._tickAfter !== null) {\n    for (var i = 0, n = this._tickAfter.length; i < n; i++) {\n      stats.tick++;\n      ticked = this._tickAfter[i].call(this, elapsed, now, last) === true\n          || ticked;\n    }\n  }\n\n  return ticked;\n};\n\nClass.prototype.tick = function(ticker, before) {\n  if (typeof ticker !== 'function') {\n    return;\n  }\n  if (before) {\n    if (this._tickBefore === null) {\n      this._tickBefore = [];\n    }\n    this._tickBefore.push(ticker);\n  } else {\n    if (this._tickAfter === null) {\n      this._tickAfter = [];\n    }\n    this._tickAfter.push(ticker);\n  }\n  this._flag('_tick', this._tickAfter !== null && this._tickAfter.length > 0\n      || this._tickBefore !== null && this._tickBefore.length > 0);\n};\n\nClass.prototype.untick = function(ticker) {\n  if (typeof ticker !== 'function') {\n    return;\n  }\n  var i;\n  if (this._tickBefore !== null && (i = this._tickBefore.indexOf(ticker)) >= 0) {\n    this._tickBefore.splice(i, 1);\n  }\n  if (this._tickAfter !== null && (i = this._tickAfter.indexOf(ticker)) >= 0) {\n    this._tickAfter.splice(i, 1);\n  }\n};\n\nClass.prototype.timeout = function(fn, time) {\n  this.tick(function timer(t) {\n    if ((time -= t) < 0) {\n      this.untick(timer);\n      fn.call(this);\n    } else {\n      return true;\n    }\n  });\n};\n\n},{\"./core\":60,\"./pin\":68,\"./util/stats\":80}],67:[function(require,module,exports){\nfunction Matrix(a, b, c, d, e, f) {\n  this.reset(a, b, c, d, e, f);\n};\n\nMatrix.prototype.toString = function() {\n  return '[' + this.a + ', ' + this.b + ', ' + this.c + ', ' + this.d + ', '\n      + this.e + ', ' + this.f + ']';\n};\n\nMatrix.prototype.clone = function() {\n  return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);\n};\n\nMatrix.prototype.reset = function(a, b, c, d, e, f) {\n  this._dirty = true;\n  if (typeof a === 'object') {\n    this.a = a.a, this.d = a.d;\n    this.b = a.b, this.c = a.c;\n    this.e = a.e, this.f = a.f;\n  } else {\n    this.a = a || 1, this.d = d || 1;\n    this.b = b || 0, this.c = c || 0;\n    this.e = e || 0, this.f = f || 0;\n  }\n  return this;\n};\n\nMatrix.prototype.identity = function() {\n  this._dirty = true;\n  this.a = 1;\n  this.b = 0;\n  this.c = 0;\n  this.d = 1;\n  this.e = 0;\n  this.f = 0;\n  return this;\n};\n\nMatrix.prototype.rotate = function(angle) {\n  if (!angle) {\n    return this;\n  }\n\n  this._dirty = true;\n\n  var u = angle ? Math.cos(angle) : 1;\n  // android bug may give bad 0 values\n  var v = angle ? Math.sin(angle) : 0;\n\n  var a = u * this.a - v * this.b;\n  var b = u * this.b + v * this.a;\n  var c = u * this.c - v * this.d;\n  var d = u * this.d + v * this.c;\n  var e = u * this.e - v * this.f;\n  var f = u * this.f + v * this.e;\n\n  this.a = a;\n  this.b = b;\n  this.c = c;\n  this.d = d;\n  this.e = e;\n  this.f = f;\n\n  return this;\n};\n\nMatrix.prototype.translate = function(x, y) {\n  if (!x && !y) {\n    return this;\n  }\n  this._dirty = true;\n  this.e += x;\n  this.f += y;\n  return this;\n};\n\nMatrix.prototype.scale = function(x, y) {\n  if (!(x - 1) && !(y - 1)) {\n    return this;\n  }\n  this._dirty = true;\n  this.a *= x;\n  this.b *= y;\n  this.c *= x;\n  this.d *= y;\n  this.e *= x;\n  this.f *= y;\n  return this;\n};\n\nMatrix.prototype.skew = function(x, y) {\n  if (!x && !y) {\n    return this;\n  }\n  this._dirty = true;\n\n  var a = this.a + this.b * x;\n  var b = this.b + this.a * y;\n  var c = this.c + this.d * x;\n  var d = this.d + this.c * y;\n  var e = this.e + this.f * x;\n  var f = this.f + this.e * y;\n\n  this.a = a;\n  this.b = b;\n  this.c = c;\n  this.d = d;\n  this.e = e;\n  this.f = f;\n  return this;\n};\n\nMatrix.prototype.concat = function(m) {\n  this._dirty = true;\n\n  var n = this;\n\n  var a = n.a * m.a + n.b * m.c;\n  var b = n.b * m.d + n.a * m.b;\n  var c = n.c * m.a + n.d * m.c;\n  var d = n.d * m.d + n.c * m.b;\n  var e = n.e * m.a + m.e + n.f * m.c;\n  var f = n.f * m.d + m.f + n.e * m.b;\n\n  this.a = a;\n  this.b = b;\n  this.c = c;\n  this.d = d;\n  this.e = e;\n  this.f = f;\n\n  return this;\n};\n\nMatrix.prototype.inverse = Matrix.prototype.reverse = function() {\n  if (this._dirty) {\n    this._dirty = false;\n    this.inversed = this.inversed || new Matrix();\n    var z = this.a * this.d - this.b * this.c;\n    this.inversed.a = this.d / z;\n    this.inversed.b = -this.b / z;\n    this.inversed.c = -this.c / z;\n    this.inversed.d = this.a / z;\n    this.inversed.e = (this.c * this.f - this.e * this.d) / z;\n    this.inversed.f = (this.e * this.b - this.a * this.f) / z;\n  }\n  return this.inversed;\n};\n\nMatrix.prototype.map = function(p, q) {\n  q = q || {};\n  q.x = this.a * p.x + this.c * p.y + this.e;\n  q.y = this.b * p.x + this.d * p.y + this.f;\n  return q;\n};\n\nMatrix.prototype.mapX = function(x, y) {\n  if (typeof x === 'object')\n    y = x.y, x = x.x;\n  return this.a * x + this.c * y + this.e;\n};\n\nMatrix.prototype.mapY = function(x, y) {\n  if (typeof x === 'object')\n    y = x.y, x = x.x;\n  return this.b * x + this.d * y + this.f;\n};\n\nmodule.exports = Matrix;\n\n},{}],68:[function(require,module,exports){\nvar Class = require('./core');\nvar Matrix = require('./matrix');\n\nvar iid = 0;\n\nClass._init(function() {\n  this._pin = new Pin(this);\n});\n\nClass.prototype.matrix = function(relative) {\n  if (relative === true) {\n    return this._pin.relativeMatrix();\n  }\n  return this._pin.absoluteMatrix();\n};\n\nClass.prototype.pin = function(a, b) {\n  if (typeof a === 'object') {\n    this._pin.set(a);\n    return this;\n\n  } else if (typeof a === 'string') {\n    if (typeof b === 'undefined') {\n      return this._pin.get(a);\n    } else {\n      this._pin.set(a, b);\n      return this;\n    }\n  } else if (typeof a === 'undefined') {\n    return this._pin;\n  }\n};\n\nfunction Pin(owner) {\n\n  this._owner = owner;\n  this._parent = null;\n\n  // relative to parent\n  this._relativeMatrix = new Matrix();\n\n  // relative to stage\n  this._absoluteMatrix = new Matrix();\n\n  this.reset();\n};\n\nPin.prototype.reset = function() {\n\n  this._textureAlpha = 1;\n  this._alpha = 1;\n\n  this._width = 0;\n  this._height = 0;\n\n  this._scaleX = 1;\n  this._scaleY = 1;\n  this._skewX = 0;\n  this._skewY = 0;\n  this._rotation = 0;\n\n  // scale/skew/rotate center\n  this._pivoted = false;\n  this._pivotX = null;\n  this._pivotY = null;\n\n  // self pin point\n  this._handled = false;\n  this._handleX = 0;\n  this._handleY = 0;\n\n  // parent pin point\n  this._aligned = false;\n  this._alignX = 0;\n  this._alignY = 0;\n\n  // as seen by parent px\n  this._offsetX = 0;\n  this._offsetY = 0;\n\n  this._boxX = 0;\n  this._boxY = 0;\n  this._boxWidth = this._width;\n  this._boxHeight = this._height;\n\n  // TODO: also set for owner\n  this._ts_translate = ++iid;\n  this._ts_transform = ++iid;\n  this._ts_matrix = ++iid;\n};\n\nPin.prototype._update = function() {\n  this._parent = this._owner._parent && this._owner._parent._pin;\n\n  // if handled and transformed then be translated\n  if (this._handled && this._mo_handle != this._ts_transform) {\n    this._mo_handle = this._ts_transform;\n    this._ts_translate = ++iid;\n  }\n\n  if (this._aligned && this._parent\n      && this._mo_align != this._parent._ts_transform) {\n    this._mo_align = this._parent._ts_transform;\n    this._ts_translate = ++iid;\n  }\n\n  return this;\n};\n\nPin.prototype.toString = function() {\n  return this._owner + ' (' + (this._parent ? this._parent._owner : null) + ')';\n};\n\n// TODO: ts fields require refactoring\n\nPin.prototype.absoluteMatrix = function() {\n  this._update();\n  var ts = Math.max(this._ts_transform, this._ts_translate,\n      this._parent ? this._parent._ts_matrix : 0);\n  if (this._mo_abs == ts) {\n    return this._absoluteMatrix;\n  }\n  this._mo_abs = ts;\n\n  var abs = this._absoluteMatrix;\n  abs.reset(this.relativeMatrix());\n\n  this._parent && abs.concat(this._parent._absoluteMatrix);\n\n  this._ts_matrix = ++iid;\n\n  return abs;\n};\n\nPin.prototype.relativeMatrix = function() {\n  this._update();\n  var ts = Math.max(this._ts_transform, this._ts_translate,\n      this._parent ? this._parent._ts_transform : 0);\n  if (this._mo_rel == ts) {\n    return this._relativeMatrix;\n  }\n  this._mo_rel = ts;\n\n  var rel = this._relativeMatrix;\n\n  rel.identity();\n  if (this._pivoted) {\n    rel.translate(-this._pivotX * this._width, -this._pivotY * this._height);\n  }\n  rel.scale(this._scaleX, this._scaleY);\n  rel.skew(this._skewX, this._skewY);\n  rel.rotate(this._rotation);\n  if (this._pivoted) {\n    rel.translate(this._pivotX * this._width, this._pivotY * this._height);\n  }\n\n  // calculate effective box\n  if (this._pivoted) {\n    // origin\n    this._boxX = 0;\n    this._boxY = 0;\n    this._boxWidth = this._width;\n    this._boxHeight = this._height;\n\n  } else {\n    // aabb\n    var p, q;\n    if (rel.a > 0 && rel.c > 0 || rel.a < 0 && rel.c < 0) {\n      p = 0, q = rel.a * this._width + rel.c * this._height;\n    } else {\n      p = rel.a * this._width, q = rel.c * this._height;\n    }\n    if (p > q) {\n      this._boxX = q;\n      this._boxWidth = p - q;\n    } else {\n      this._boxX = p;\n      this._boxWidth = q - p;\n    }\n    if (rel.b > 0 && rel.d > 0 || rel.b < 0 && rel.d < 0) {\n      p = 0, q = rel.b * this._width + rel.d * this._height;\n    } else {\n      p = rel.b * this._width, q = rel.d * this._height;\n    }\n    if (p > q) {\n      this._boxY = q;\n      this._boxHeight = p - q;\n    } else {\n      this._boxY = p;\n      this._boxHeight = q - p;\n    }\n  }\n\n  this._x = this._offsetX;\n  this._y = this._offsetY;\n\n  this._x -= this._boxX + this._handleX * this._boxWidth;\n  this._y -= this._boxY + this._handleY * this._boxHeight;\n\n  if (this._aligned && this._parent) {\n    this._parent.relativeMatrix();\n    this._x += this._alignX * this._parent._width;\n    this._y += this._alignY * this._parent._height;\n  }\n\n  rel.translate(this._x, this._y);\n\n  return this._relativeMatrix;\n};\n\nPin.prototype.get = function(key) {\n  if (typeof getters[key] === 'function') {\n    return getters[key](this);\n  }\n};\n\n// TODO: Use defineProperty instead? What about multi-field pinning?\nPin.prototype.set = function(a, b) {\n  if (typeof a === 'string') {\n    if (typeof setters[a] === 'function' && typeof b !== 'undefined') {\n      setters[a](this, b);\n    }\n  } else if (typeof a === 'object') {\n    for (b in a) {\n      if (typeof setters[b] === 'function' && typeof a[b] !== 'undefined') {\n        setters[b](this, a[b], a);\n      }\n    }\n  }\n  if (this._owner) {\n    this._owner._ts_pin = ++iid;\n    this._owner.touch();\n  }\n  return this;\n};\n\nvar getters = {\n  alpha : function(pin) {\n    return pin._alpha;\n  },\n\n  textureAlpha : function(pin) {\n    return pin._textureAlpha;\n  },\n\n  width : function(pin) {\n    return pin._width;\n  },\n\n  height : function(pin) {\n    return pin._height;\n  },\n\n  boxWidth : function(pin) {\n    return pin._boxWidth;\n  },\n\n  boxHeight : function(pin) {\n    return pin._boxHeight;\n  },\n\n  // scale : function(pin) {\n  // },\n\n  scaleX : function(pin) {\n    return pin._scaleX;\n  },\n\n  scaleY : function(pin) {\n    return pin._scaleY;\n  },\n\n  // skew : function(pin) {\n  // },\n\n  skewX : function(pin) {\n    return pin._skewX;\n  },\n\n  skewY : function(pin) {\n    return pin._skewY;\n  },\n\n  rotation : function(pin) {\n    return pin._rotation;\n  },\n\n  // pivot : function(pin) {\n  // },\n\n  pivotX : function(pin) {\n    return pin._pivotX;\n  },\n\n  pivotY : function(pin) {\n    return pin._pivotY;\n  },\n\n  // offset : function(pin) {\n  // },\n\n  offsetX : function(pin) {\n    return pin._offsetX;\n  },\n\n  offsetY : function(pin) {\n    return pin._offsetY;\n  },\n\n  // align : function(pin) {\n  // },\n\n  alignX : function(pin) {\n    return pin._alignX;\n  },\n\n  alignY : function(pin) {\n    return pin._alignY;\n  },\n\n  // handle : function(pin) {\n  // },\n\n  handleX : function(pin) {\n    return pin._handleX;\n  },\n\n  handleY : function(pin) {\n    return pin._handleY;\n  }\n};\n\nvar setters = {\n  alpha : function(pin, value) {\n    pin._alpha = value;\n  },\n\n  textureAlpha : function(pin, value) {\n    pin._textureAlpha = value;\n  },\n\n  width : function(pin, value) {\n    pin._width_ = value;\n    pin._width = value;\n    pin._ts_transform = ++iid;\n  },\n\n  height : function(pin, value) {\n    pin._height_ = value;\n    pin._height = value;\n    pin._ts_transform = ++iid;\n  },\n\n  scale : function(pin, value) {\n    pin._scaleX = value;\n    pin._scaleY = value;\n    pin._ts_transform = ++iid;\n  },\n\n  scaleX : function(pin, value) {\n    pin._scaleX = value;\n    pin._ts_transform = ++iid;\n  },\n\n  scaleY : function(pin, value) {\n    pin._scaleY = value;\n    pin._ts_transform = ++iid;\n  },\n\n  skew : function(pin, value) {\n    pin._skewX = value;\n    pin._skewY = value;\n    pin._ts_transform = ++iid;\n  },\n\n  skewX : function(pin, value) {\n    pin._skewX = value;\n    pin._ts_transform = ++iid;\n  },\n\n  skewY : function(pin, value) {\n    pin._skewY = value;\n    pin._ts_transform = ++iid;\n  },\n\n  rotation : function(pin, value) {\n    pin._rotation = value;\n    pin._ts_transform = ++iid;\n  },\n\n  pivot : function(pin, value) {\n    pin._pivotX = value;\n    pin._pivotY = value;\n    pin._pivoted = true;\n    pin._ts_transform = ++iid;\n  },\n\n  pivotX : function(pin, value) {\n    pin._pivotX = value;\n    pin._pivoted = true;\n    pin._ts_transform = ++iid;\n  },\n\n  pivotY : function(pin, value) {\n    pin._pivotY = value;\n    pin._pivoted = true;\n    pin._ts_transform = ++iid;\n  },\n\n  offset : function(pin, value) {\n    pin._offsetX = value;\n    pin._offsetY = value;\n    pin._ts_translate = ++iid;\n  },\n\n  offsetX : function(pin, value) {\n    pin._offsetX = value;\n    pin._ts_translate = ++iid;\n  },\n\n  offsetY : function(pin, value) {\n    pin._offsetY = value;\n    pin._ts_translate = ++iid;\n  },\n\n  align : function(pin, value) {\n    this.alignX(pin, value);\n    this.alignY(pin, value);\n  },\n\n  alignX : function(pin, value) {\n    pin._alignX = value;\n    pin._aligned = true;\n    pin._ts_translate = ++iid;\n\n    this.handleX(pin, value);\n  },\n\n  alignY : function(pin, value) {\n    pin._alignY = value;\n    pin._aligned = true;\n    pin._ts_translate = ++iid;\n\n    this.handleY(pin, value);\n  },\n\n  handle : function(pin, value) {\n    this.handleX(pin, value);\n    this.handleY(pin, value);\n  },\n\n  handleX : function(pin, value) {\n    pin._handleX = value;\n    pin._handled = true;\n    pin._ts_translate = ++iid;\n  },\n\n  handleY : function(pin, value) {\n    pin._handleY = value;\n    pin._handled = true;\n    pin._ts_translate = ++iid;\n  },\n\n  resizeMode : function(pin, value, all) {\n    if (all) {\n      if (value == 'in') {\n        value = 'in-pad';\n      } else if (value == 'out') {\n        value = 'out-crop';\n      }\n      scaleTo(pin, all.resizeWidth, all.resizeHeight, value);\n    }\n  },\n\n  resizeWidth : function(pin, value, all) {\n    if (!all || !all.resizeMode) {\n      scaleTo(pin, value, null);\n    }\n  },\n\n  resizeHeight : function(pin, value, all) {\n    if (!all || !all.resizeMode) {\n      scaleTo(pin, null, value);\n    }\n  },\n\n  scaleMode : function(pin, value, all) {\n    if (all) {\n      scaleTo(pin, all.scaleWidth, all.scaleHeight, value);\n    }\n  },\n\n  scaleWidth : function(pin, value, all) {\n    if (!all || !all.scaleMode) {\n      scaleTo(pin, value, null);\n    }\n  },\n\n  scaleHeight : function(pin, value, all) {\n    if (!all || !all.scaleMode) {\n      scaleTo(pin, null, value);\n    }\n  },\n\n  matrix : function(pin, value) {\n    this.scaleX(pin, value.a);\n    this.skewX(pin, value.c / value.d);\n    this.skewY(pin, value.b / value.a);\n    this.scaleY(pin, value.d);\n    this.offsetX(pin, value.e);\n    this.offsetY(pin, value.f);\n    this.rotation(pin, 0);\n  }\n};\n\nfunction scaleTo(pin, width, height, mode) {\n  var w = typeof width === 'number';\n  var h = typeof height === 'number';\n  var m = typeof mode === 'string';\n  pin._ts_transform = ++iid;\n  if (w) {\n    pin._scaleX = width / pin._width_;\n    pin._width = pin._width_;\n  }\n  if (h) {\n    pin._scaleY = height / pin._height_;\n    pin._height = pin._height_;\n  }\n  if (w && h && m) {\n    if (mode == 'out' || mode == 'out-crop') {\n      pin._scaleX = pin._scaleY = Math.max(pin._scaleX, pin._scaleY);\n    } else if (mode == 'in' || mode == 'in-pad') {\n      pin._scaleX = pin._scaleY = Math.min(pin._scaleX, pin._scaleY);\n    }\n    if (mode == 'out-crop' || mode == 'in-pad') {\n      pin._width = width / pin._scaleX;\n      pin._height = height / pin._scaleY;\n    }\n  }\n};\n\nClass.prototype.scaleTo = function(a, b, c) {\n  if (typeof a === 'object')\n    c = b, b = a.y, a = a.x;\n  scaleTo(this._pin, a, b, c);\n  return this;\n};\n\n// Used by Tween class\nPin._add_shortcuts = function(Class) {\n  Class.prototype.size = function(w, h) {\n    this.pin('width', w);\n    this.pin('height', h);\n    return this;\n  };\n\n  Class.prototype.width = function(w) {\n    if (typeof w === 'undefined') {\n      return this.pin('width');\n    }\n    this.pin('width', w);\n    return this;\n  };\n\n  Class.prototype.height = function(h) {\n    if (typeof h === 'undefined') {\n      return this.pin('height');\n    }\n    this.pin('height', h);\n    return this;\n  };\n\n  Class.prototype.offset = function(a, b) {\n    if (typeof a === 'object')\n      b = a.y, a = a.x;\n    this.pin('offsetX', a);\n    this.pin('offsetY', b);\n    return this;\n  };\n\n  Class.prototype.rotate = function(a) {\n    this.pin('rotation', a);\n    return this;\n  };\n\n  Class.prototype.skew = function(a, b) {\n    if (typeof a === 'object')\n      b = a.y, a = a.x;\n    else if (typeof b === 'undefined')\n      b = a;\n    this.pin('skewX', a);\n    this.pin('skewY', b);\n    return this;\n  };\n\n  Class.prototype.scale = function(a, b) {\n    if (typeof a === 'object')\n      b = a.y, a = a.x;\n    else if (typeof b === 'undefined')\n      b = a;\n    this.pin('scaleX', a);\n    this.pin('scaleY', b);\n    return this;\n  };\n\n  Class.prototype.alpha = function(a, ta) {\n    this.pin('alpha', a);\n    if (typeof ta !== 'undefined') {\n      this.pin('textureAlpha', ta);\n    }\n    return this;\n  };\n};\n\nPin._add_shortcuts(Class);\n\nmodule.exports = Pin;\n\n},{\"./core\":60,\"./matrix\":67}],69:[function(require,module,exports){\nvar Class = require('./core');\nrequire('./pin');\nrequire('./loop');\n\nvar stats = require('./util/stats');\nvar create = require('./util/create');\nvar extend = require('./util/extend');\n\nRoot._super = Class;\nRoot.prototype = create(Root._super.prototype);\n\nClass.root = function(request, render) {\n  return new Root(request, render);\n};\n\nfunction Root(request, render) {\n  Root._super.call(this);\n  this.label('Root');\n\n  var paused = true;\n\n  var self = this;\n  var lastTime = 0;\n  var loop = function(now) {\n    if (paused === true) {\n      return;\n    }\n\n    stats.tick = stats.node = stats.draw = 0;\n\n    var last = lastTime || now;\n    var elapsed = now - last;\n    lastTime = now;\n\n    var ticked = self._tick(elapsed, now, last);\n    if (self._mo_touch != self._ts_touch) {\n      self._mo_touch = self._ts_touch;\n      render(self);\n      request(loop);\n    } else if (ticked) {\n      request(loop);\n    } else {\n      paused = true;\n    }\n\n    stats.fps = elapsed ? 1000 / elapsed : 0;\n  };\n\n  this.start = function() {\n    return this.resume();\n  };\n\n  this.resume = function() {\n    if (paused) {\n      this.publish('resume');\n      paused = false;\n      request(loop);\n    }\n    return this;\n  };\n\n  this.pause = function() {\n    if (!paused) {\n      this.publish('pause');\n    }\n    paused = true;\n    return this;\n  };\n\n  this.touch_root = this.touch;\n  this.touch = function() {\n    this.resume();\n    return this.touch_root();\n  };\n};\n\nRoot.prototype.background = function(color) {\n  // to be implemented by loaders\n  return this;\n};\n\nRoot.prototype.viewport = function(width, height, ratio) {\n  if (typeof width === 'undefined') {\n    return extend({}, this._viewport);\n  }\n  this._viewport = {\n    width : width,\n    height : height,\n    ratio : ratio || 1\n  };\n  this.viewbox();\n  var data = extend({}, this._viewport);\n  this.visit({\n    start : function(node) {\n      if (!node._flag('viewport')) {\n        return true;\n      }\n      node.publish('viewport', [ data ]);\n    }\n  });\n  return this;\n};\n\n// TODO: static/fixed viewbox\nRoot.prototype.viewbox = function(width, height, mode) {\n  if (typeof width === 'number' && typeof height === 'number') {\n    this._viewbox = {\n      width : width,\n      height : height,\n      mode : /^(in|out|in-pad|out-crop)$/.test(mode) ? mode : 'in-pad'\n    };\n  }\n\n  var box = this._viewbox;\n  var size = this._viewport;\n  if (size && box) {\n    this.pin({\n      width : box.width,\n      height : box.height\n    });\n    this.scaleTo(size.width, size.height, box.mode);\n  } else if (size) {\n    this.pin({\n      width : size.width,\n      height : size.height\n    });\n  }\n\n  return this;\n};\n\n},{\"./core\":60,\"./loop\":66,\"./pin\":68,\"./util/create\":74,\"./util/extend\":76,\"./util/stats\":80}],70:[function(require,module,exports){\nvar Class = require('./core');\nrequire('./pin');\nrequire('./loop');\n\nvar create = require('./util/create');\nvar is = require('./util/is');\n\nClass.string = function(frames) {\n  return new Str().frames(frames);\n};\n\nStr._super = Class;\nStr.prototype = create(Str._super.prototype);\n\nfunction Str() {\n  Str._super.call(this);\n  this.label('String');\n  this._textures = [];\n};\n\n/**\n * @deprecated Use frames\n */\nStr.prototype.setFont = function(a, b, c) {\n  return this.frames(a, b, c);\n};\n\nStr.prototype.frames = function(frames) {\n  this._textures = [];\n  if (typeof frames == 'string') {\n    frames = Class.texture(frames);\n    this._item = function(value) {\n      return frames.one(value);\n    };\n  } else if (typeof frames === 'object') {\n    this._item = function(value) {\n      return frames[value];\n    };\n  } else if (typeof frames === 'function') {\n    this._item = frames;\n  }\n  return this;\n};\n\n/**\n * @deprecated Use value\n */\nStr.prototype.setValue = function(a, b, c) {\n  return this.value(a, b, c);\n};\n\nStr.prototype.value = function(value) {\n  if (typeof value === 'undefined') {\n    return this._value;\n  }\n  if (this._value === value) {\n    return this;\n  }\n  this._value = value;\n\n  if (value === null) {\n    value = '';\n  } else if (typeof value !== 'string' && !is.array(value)) {\n    value = value.toString();\n  }\n\n  this._spacing = this._spacing || 0;\n\n  var width = 0, height = 0;\n  for (var i = 0; i < value.length; i++) {\n    var image = this._textures[i] = this._item(value[i]);\n    width += i > 0 ? this._spacing : 0;\n    image.dest(width, 0);\n    width = width + image.width;\n    height = Math.max(height, image.height);\n  }\n  this.pin('width', width);\n  this.pin('height', height);\n  this._textures.length = value.length;\n  return this;\n};\n\n},{\"./core\":60,\"./loop\":66,\"./pin\":68,\"./util/create\":74,\"./util/is\":77}],71:[function(require,module,exports){\nvar stats = require('./util/stats');\nvar math = require('./util/math');\n\nfunction Texture(image, ratio) {\n  if (typeof image === 'object') {\n    this.src(image, ratio);\n  }\n}\n\nTexture.prototype.pipe = function() {\n  return new Texture(this);\n};\n\n/**\n * Signatures: (image), (x, y, w, h), (w, h)\n */\nTexture.prototype.src = function(x, y, w, h) {\n  if (typeof x === 'object') {\n    var image = x, ratio = y || 1;\n\n    this._image = image;\n    this._sx = this._dx = 0;\n    this._sy = this._dy = 0;\n    this._sw = this._dw = image.width / ratio;\n    this._sh = this._dh = image.height / ratio;\n\n    this.width = image.width / ratio;\n    this.height = image.height / ratio;\n\n    this.ratio = ratio;\n\n  } else {\n    if (typeof w === 'undefined') {\n      w = x, h = y;\n    } else {\n      this._sx = x, this._sy = y;\n    }\n    this._sw = this._dw = w;\n    this._sh = this._dh = h;\n\n    this.width = w;\n    this.height = h;\n  }\n  return this;\n};\n\n/**\n * Signatures: (x, y, w, h), (x, y)\n */\nTexture.prototype.dest = function(x, y, w, h) {\n  this._dx = x, this._dy = y;\n  this._dx = x, this._dy = y;\n  if (typeof w !== 'undefined') {\n    this._dw = w, this._dh = h;\n    this.width = w, this.height = h;\n  }\n  return this;\n};\n\nTexture.prototype.draw = function(context, x1, y1, x2, y2, x3, y3, x4, y4) {\n  var image = this._image;\n  if (image === null || typeof image !== 'object') {\n    return;\n  }\n\n  var sx = this._sx, sy = this._sy;\n  var sw = this._sw, sh = this._sh;\n  var dx = this._dx, dy = this._dy;\n  var dw = this._dw, dh = this._dh;\n\n  if (typeof x3 !== 'undefined') {\n    x1 = math.limit(x1, 0, this._sw), x2 = math.limit(x2, 0, this._sw - x1);\n    y1 = math.limit(y1, 0, this._sh), y2 = math.limit(y2, 0, this._sh - y1);\n    sx += x1, sy += y1, sw = x2, sh = y2;\n    dx = x3, dy = y3, dw = x4, dh = y4;\n\n  } else if (typeof x2 !== 'undefined') {\n    dx = x1, dy = y1, dw = x2, dh = y2;\n\n  } else if (typeof x1 !== 'undefined') {\n    dw = x1, dh = y1;\n  }\n\n  var ratio = this.ratio || 1;\n  sx *= ratio, sy *= ratio, sw *= ratio, sh *= ratio;\n\n  try {\n    if (typeof image.draw === 'function') {\n      image.draw(context, sx, sy, sw, sh, dx, dy, dw, dh);\n    } else {\n      stats.draw++;\n      context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);\n    }\n  } catch (ex) {\n    if (!image._draw_failed) {\n      console.log('Unable to draw: ', image);\n      console.log(ex);\n      image._draw_failed = true;\n    }\n  }\n};\n\nmodule.exports = Texture;\n\n},{\"./util/math\":78,\"./util/stats\":80}],72:[function(require,module,exports){\nvar Class = require('./core');\nvar is = require('./util/is');\n\nvar iid = 0;\n\n// TODO: do not clear next/prev/parent on remove\n\nClass.prototype._label = '';\n\nClass.prototype._visible = true;\n\nClass.prototype._parent = null;\nClass.prototype._next = null;\nClass.prototype._prev = null;\n\nClass.prototype._first = null;\nClass.prototype._last = null;\n\nClass.prototype._attrs = null;\nClass.prototype._flags = null;\n\nClass.prototype.toString = function() {\n  return '[' + this._label + ']';\n};\n\n/**\n * @deprecated Use label()\n */\nClass.prototype.id = function(id) {\n  return this.label(id);\n};\n\nClass.prototype.label = function(label) {\n  if (typeof label === 'undefined') {\n    return this._label;\n  }\n  this._label = label;\n  return this;\n};\n\nClass.prototype.attr = function(name, value) {\n  if (typeof value === 'undefined') {\n    return this._attrs !== null ? this._attrs[name] : undefined;\n  }\n  (this._attrs !== null ? this._attrs : this._attrs = {})[name] = value;\n  return this;\n};\n\nClass.prototype.visible = function(visible) {\n  if (typeof visible === 'undefined') {\n    return this._visible;\n  }\n  this._visible = visible;\n  this._parent && (this._parent._ts_children = ++iid);\n  this._ts_pin = ++iid;\n  this.touch();\n  return this;\n};\n\nClass.prototype.hide = function() {\n  return this.visible(false);\n};\n\nClass.prototype.show = function() {\n  return this.visible(true);\n};\n\nClass.prototype.parent = function() {\n  return this._parent;\n};\n\nClass.prototype.next = function(visible) {\n  var next = this._next;\n  while (next && visible && !next._visible) {\n    next = next._next;\n  }\n  return next;\n};\n\nClass.prototype.prev = function(visible) {\n  var prev = this._prev;\n  while (prev && visible && !prev._visible) {\n    prev = prev._prev;\n  }\n  return prev;\n};\n\nClass.prototype.first = function(visible) {\n  var next = this._first;\n  while (next && visible && !next._visible) {\n    next = next._next;\n  }\n  return next;\n};\n\nClass.prototype.last = function(visible) {\n  var prev = this._last;\n  while (prev && visible && !prev._visible) {\n    prev = prev._prev;\n  }\n  return prev;\n};\n\nClass.prototype.visit = function(visitor, data) {\n  var reverse = visitor.reverse;\n  var visible = visitor.visible;\n  if (visitor.start && visitor.start(this, data)) {\n    return;\n  }\n  var child, next = reverse ? this.last(visible) : this.first(visible);\n  while (child = next) {\n    next = reverse ? child.prev(visible) : child.next(visible);\n    if (child.visit(visitor, data)) {\n      return true;\n    }\n  }\n  return visitor.end && visitor.end(this, data);\n};\n\nClass.prototype.append = function(child, more) {\n  if (is.array(child))\n    for (var i = 0; i < child.length; i++)\n      append(this, child[i]);\n\n  else if (typeof more !== 'undefined') // deprecated\n    for (var i = 0; i < arguments.length; i++)\n      append(this, arguments[i]);\n\n  else if (typeof child !== 'undefined')\n    append(this, child);\n\n  return this;\n};\n\nClass.prototype.prepend = function(child, more) {\n  if (is.array(child))\n    for (var i = child.length - 1; i >= 0; i--)\n      prepend(this, child[i]);\n\n  else if (typeof more !== 'undefined') // deprecated\n    for (var i = arguments.length - 1; i >= 0; i--)\n      prepend(this, arguments[i]);\n\n  else if (typeof child !== 'undefined')\n    prepend(this, child);\n\n  return this;\n};\n\nClass.prototype.appendTo = function(parent) {\n  append(parent, this);\n  return this;\n};\n\nClass.prototype.prependTo = function(parent) {\n  prepend(parent, this);\n  return this;\n};\n\nClass.prototype.insertNext = function(sibling, more) {\n  if (is.array(sibling))\n    for (var i = 0; i < sibling.length; i++)\n      insertAfter(sibling[i], this);\n\n  else if (typeof more !== 'undefined') // deprecated\n    for (var i = 0; i < arguments.length; i++)\n      insertAfter(arguments[i], this);\n\n  else if (typeof sibling !== 'undefined')\n    insertAfter(sibling, this);\n\n  return this;\n};\n\nClass.prototype.insertPrev = function(sibling, more) {\n  if (is.array(sibling))\n    for (var i = sibling.length - 1; i >= 0; i--)\n      insertBefore(sibling[i], this);\n\n  else if (typeof more !== 'undefined') // deprecated\n    for (var i = arguments.length - 1; i >= 0; i--)\n      insertBefore(arguments[i], this);\n\n  else if (typeof sibling !== 'undefined')\n    insertBefore(sibling, this);\n\n  return this;\n};\n\nClass.prototype.insertAfter = function(prev) {\n  insertAfter(this, prev);\n  return this;\n};\n\nClass.prototype.insertBefore = function(next) {\n  insertBefore(this, next);\n  return this;\n};\n\nfunction append(parent, child) {\n  _ensure(child);\n  _ensure(parent);\n\n  child.remove();\n\n  if (parent._last) {\n    parent._last._next = child;\n    child._prev = parent._last;\n  }\n\n  child._parent = parent;\n  parent._last = child;\n\n  if (!parent._first) {\n    parent._first = child;\n  }\n\n  child._parent._flag(child, true);\n\n  child._ts_parent = ++iid;\n  parent._ts_children = ++iid;\n  parent.touch();\n}\n\nfunction prepend(parent, child) {\n  _ensure(child);\n  _ensure(parent);\n\n  child.remove();\n\n  if (parent._first) {\n    parent._first._prev = child;\n    child._next = parent._first;\n  }\n\n  child._parent = parent;\n  parent._first = child;\n\n  if (!parent._last) {\n    parent._last = child;\n  }\n\n  child._parent._flag(child, true);\n\n  child._ts_parent = ++iid;\n  parent._ts_children = ++iid;\n  parent.touch();\n};\n\nfunction insertBefore(self, next) {\n  _ensure(self);\n  _ensure(next);\n\n  self.remove();\n\n  var parent = next._parent;\n  var prev = next._prev;\n\n  next._prev = self;\n  prev && (prev._next = self) || parent && (parent._first = self);\n\n  self._parent = parent;\n  self._prev = prev;\n  self._next = next;\n\n  self._parent._flag(self, true);\n\n  self._ts_parent = ++iid;\n  self.touch();\n};\n\nfunction insertAfter(self, prev) {\n  _ensure(self);\n  _ensure(prev);\n\n  self.remove();\n\n  var parent = prev._parent;\n  var next = prev._next;\n\n  prev._next = self;\n  next && (next._prev = self) || parent && (parent._last = self);\n\n  self._parent = parent;\n  self._prev = prev;\n  self._next = next;\n\n  self._parent._flag(self, true);\n\n  self._ts_parent = ++iid;\n  self.touch();\n};\n\nClass.prototype.remove = function(child, more) {\n  if (typeof child !== 'undefined') {\n    if (is.array(child)) {\n      for (var i = 0; i < child.length; i++)\n        _ensure(child[i]).remove();\n\n    } else if (typeof more !== 'undefined') {\n      for (var i = 0; i < arguments.length; i++)\n        _ensure(arguments[i]).remove();\n\n    } else {\n      _ensure(child).remove();\n    }\n    return this;\n  }\n\n  if (this._prev) {\n    this._prev._next = this._next;\n  }\n  if (this._next) {\n    this._next._prev = this._prev;\n  }\n\n  if (this._parent) {\n    if (this._parent._first === this) {\n      this._parent._first = this._next;\n    }\n    if (this._parent._last === this) {\n      this._parent._last = this._prev;\n    }\n\n    this._parent._flag(this, false);\n\n    this._parent._ts_children = ++iid;\n    this._parent.touch();\n  }\n\n  this._prev = this._next = this._parent = null;\n  this._ts_parent = ++iid;\n  // this._parent.touch();\n\n  return this;\n};\n\nClass.prototype.empty = function() {\n  var child, next = this._first;\n  while (child = next) {\n    next = child._next;\n    child._prev = child._next = child._parent = null;\n\n    this._flag(child, false);\n  }\n\n  this._first = this._last = null;\n\n  this._ts_children = ++iid;\n  this.touch();\n  return this;\n};\n\nClass.prototype.touch = function() {\n  this._ts_touch = ++iid;\n  this._parent && this._parent.touch();\n  return this;\n};\n\n/**\n * Deep flags used for optimizing event distribution.\n */\nClass.prototype._flag = function(obj, name) {\n  if (typeof name === 'undefined') {\n    return this._flags !== null && this._flags[obj] || 0;\n  }\n  if (typeof obj === 'string') {\n    if (name) {\n      this._flags = this._flags || {};\n      if (!this._flags[obj] && this._parent) {\n        this._parent._flag(obj, true);\n      }\n      this._flags[obj] = (this._flags[obj] || 0) + 1;\n\n    } else if (this._flags && this._flags[obj] > 0) {\n      if (this._flags[obj] == 1 && this._parent) {\n        this._parent._flag(obj, false);\n      }\n      this._flags[obj] = this._flags[obj] - 1;\n    }\n  }\n  if (typeof obj === 'object') {\n    if (obj._flags) {\n      for ( var type in obj._flags) {\n        if (obj._flags[type] > 0) {\n          this._flag(type, name);\n        }\n      }\n    }\n  }\n  return this;\n};\n\n/**\n * @private\n */\nClass.prototype.hitTest = function(hit) {\n  if (this.attr('spy')) {\n    return true;\n  }\n  return hit.x >= 0 && hit.x <= this._pin._width && hit.y >= 0\n      && hit.y <= this._pin._height;\n};\n\nfunction _ensure(obj) {\n  if (obj && obj instanceof Class) {\n    return obj;\n  }\n  throw 'Invalid node: ' + obj;\n};\n\nmodule.exports = Class;\n\n},{\"./core\":60,\"./util/is\":77}],73:[function(require,module,exports){\nmodule.exports = function() {\n  var count = 0;\n  function fork(fn, n) {\n    count += n = (typeof n === 'number' && n >= 1 ? n : 1);\n    return function() {\n      fn && fn.apply(this, arguments);\n      if (n > 0) {\n        n--, count--, call();\n      }\n    };\n  }\n  var then = [];\n  function call() {\n    if (count === 0) {\n      while (then.length) {\n        setTimeout(then.shift(), 0);\n      }\n    }\n  }\n  fork.then = function(fn) {\n    if (count === 0) {\n      setTimeout(fn, 0);\n    } else {\n      then.push(fn);\n    }\n  };\n  return fork;\n};\n},{}],74:[function(require,module,exports){\nif (typeof Object.create == 'function') {\n  module.exports = function(proto, props) {\n    return Object.create.call(Object, proto, props);\n  };\n} else {\n  module.exports = function(proto, props) {\n    if (props)\n      throw Error('Second argument is not supported!');\n    if (typeof proto !== 'object' || proto === null)\n      throw Error('Invalid prototype!');\n    noop.prototype = proto;\n    return new noop;\n  };\n  function noop() {\n  }\n}\n\n},{}],75:[function(require,module,exports){\nmodule.exports = function(prototype, callback) {\n\n  prototype._listeners = null;\n\n  prototype.on = prototype.listen = function(types, listener) {\n    if (!types || !types.length || typeof listener !== 'function') {\n      return this;\n    }\n    if (this._listeners === null) {\n      this._listeners = {};\n    }\n    var isarray = typeof types !== 'string' && typeof types.join === 'function';\n    if (types = (isarray ? types.join(' ') : types).match(/\\S+/g)) {\n      for (var i = 0; i < types.length; i++) {\n        var type = types[i];\n        this._listeners[type] = this._listeners[type] || [];\n        this._listeners[type].push(listener);\n        if (typeof callback === 'function') {\n          callback(this, type, true);\n        }\n      }\n    }\n    return this;\n  };\n\n  prototype.off = function(types, listener) {\n    if (!types || !types.length || typeof listener !== 'function') {\n      return this;\n    }\n    if (this._listeners === null) {\n      return this;\n    }\n    var isarray = typeof types !== 'string' && typeof types.join === 'function';\n    if (types = (isarray ? types.join(' ') : types).match(/\\S+/g)) {\n      for (var i = 0; i < types.length; i++) {\n        var type = types[i], all = this._listeners[type], index;\n        if (all && (index = all.indexOf(listener)) >= 0) {\n          all.splice(index, 1);\n          if (!all.length) {\n            delete this._listeners[type];\n          }\n          if (typeof callback === 'function') {\n            callback(this, type, false);\n          }\n        }\n      }\n    }\n    return this;\n  };\n\n  prototype.listeners = function(type) {\n    return this._listeners && this._listeners[type];\n  };\n\n  prototype.publish = function(name, args) {\n    var listeners = this.listeners(name);\n    if (!listeners || !listeners.length) {\n      return 0;\n    }\n    for (var l = 0; l < listeners.length; l++) {\n      listeners[l].apply(this, args);\n    }\n    return listeners.length;\n  };\n\n  prototype.trigger = function(name, args) {\n    this.publish(name, args);\n    return this;\n  };\n\n};\n\n},{}],76:[function(require,module,exports){\nmodule.exports = function(base) {\n  for (var i = 1; i < arguments.length; i++) {\n    var obj = arguments[i];\n    for ( var key in obj) {\n      if (obj.hasOwnProperty(key)) {\n        base[key] = obj[key];\n      }\n    }\n  }\n  return base;\n};\n\n},{}],77:[function(require,module,exports){\n/**\n * ! is the definitive JavaScript type testing library\n * \n * @copyright 2013-2014 Enrico Marino / Jordan Harband\n * @license MIT\n */\n\nvar objProto = Object.prototype;\nvar owns = objProto.hasOwnProperty;\nvar toStr = objProto.toString;\n\nvar NON_HOST_TYPES = {\n  'boolean' : 1,\n  'number' : 1,\n  'string' : 1,\n  'undefined' : 1\n};\n\nvar hexRegex = /^[A-Fa-f0-9]+$/;\n\nvar is = module.exports = {};\n\nis.a = is.an = is.type = function(value, type) {\n  return typeof value === type;\n};\n\nis.defined = function(value) {\n  return typeof value !== 'undefined';\n};\n\nis.empty = function(value) {\n  var type = toStr.call(value);\n  var key;\n\n  if ('[object Array]' === type || '[object Arguments]' === type\n      || '[object String]' === type) {\n    return value.length === 0;\n  }\n\n  if ('[object Object]' === type) {\n    for (key in value) {\n      if (owns.call(value, key)) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  return !value;\n};\n\nis.equal = function(value, other) {\n  if (value === other) {\n    return true;\n  }\n\n  var type = toStr.call(value);\n  var key;\n\n  if (type !== toStr.call(other)) {\n    return false;\n  }\n\n  if ('[object Object]' === type) {\n    for (key in value) {\n      if (!is.equal(value[key], other[key]) || !(key in other)) {\n        return false;\n      }\n    }\n    for (key in other) {\n      if (!is.equal(value[key], other[key]) || !(key in value)) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  if ('[object Array]' === type) {\n    key = value.length;\n    if (key !== other.length) {\n      return false;\n    }\n    while (--key) {\n      if (!is.equal(value[key], other[key])) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  if ('[object Function]' === type) {\n    return value.prototype === other.prototype;\n  }\n\n  if ('[object Date]' === type) {\n    return value.getTime() === other.getTime();\n  }\n\n  return false;\n};\n\nis.instance = function(value, constructor) {\n  return value instanceof constructor;\n};\n\nis.nil = function(value) {\n  return value === null;\n};\n\nis.undef = function(value) {\n  return typeof value === 'undefined';\n};\n\nis.array = function(value) {\n  return '[object Array]' === toStr.call(value);\n};\n\nis.emptyarray = function(value) {\n  return is.array(value) && value.length === 0;\n};\n\nis.arraylike = function(value) {\n  return !!value && !is.boolean(value) && owns.call(value, 'length')\n      && isFinite(value.length) && is.number(value.length) && value.length >= 0;\n};\n\nis.boolean = function(value) {\n  return '[object Boolean]' === toStr.call(value);\n};\n\nis.element = function(value) {\n  return value !== undefined && typeof HTMLElement !== 'undefined'\n      && value instanceof HTMLElement && value.nodeType === 1;\n};\n\nis.fn = function(value) {\n  return '[object Function]' === toStr.call(value);\n};\n\nis.number = function(value) {\n  return '[object Number]' === toStr.call(value);\n};\n\nis.nan = function(value) {\n  return !is.number(value) || value !== value;\n};\n\nis.object = function(value) {\n  return '[object Object]' === toStr.call(value);\n};\n\nis.hash = function(value) {\n  return is.object(value) && value.constructor === Object && !value.nodeType\n      && !value.setInterval;\n};\n\nis.regexp = function(value) {\n  return '[object RegExp]' === toStr.call(value);\n};\n\nis.string = function(value) {\n  return '[object String]' === toStr.call(value);\n};\n\nis.hex = function(value) {\n  return is.string(value) && (!value.length || hexRegex.test(value));\n};\n\n},{}],78:[function(require,module,exports){\nvar create = require('./create');\nvar native = Math;\n\nmodule.exports = create(Math);\n\nmodule.exports.random = function(min, max) {\n  if (typeof min === 'undefined') {\n    max = 1, min = 0;\n  } else if (typeof max === 'undefined') {\n    max = min, min = 0;\n  }\n  return min == max ? min : native.random() * (max - min) + min;\n};\n\nmodule.exports.rotate = function(num, min, max) {\n  if (typeof min === 'undefined') {\n    max = 1, min = 0;\n  } else if (typeof max === 'undefined') {\n    max = min, min = 0;\n  }\n  if (max > min) {\n    num = (num - min) % (max - min);\n    return num + (num < 0 ? max : min);\n  } else {\n    num = (num - max) % (min - max);\n    return num + (num <= 0 ? min : max);\n  }\n};\n\nmodule.exports.limit = function(num, min, max) {\n  if (num < min) {\n    return min;\n  } else if (num > max) {\n    return max;\n  } else {\n    return num;\n  }\n};\n\nmodule.exports.length = function(x, y) {\n  return native.sqrt(x * x + y * y);\n};\n},{\"./create\":74}],79:[function(require,module,exports){\nmodule.exports = function(img, owidth, oheight, stretch, inner, insert) {\n\n  var width = img.width;\n  var height = img.height;\n  var left = img.left;\n  var right = img.right;\n  var top = img.top;\n  var bottom = img.bottom;\n\n  left = typeof left === 'number' && left === left ? left : 0;\n  right = typeof right === 'number' && right === right ? right : 0;\n  top = typeof top === 'number' && top === top ? top : 0;\n  bottom = typeof bottom === 'number' && bottom === bottom ? bottom : 0;\n\n  width = width - left - right;\n  height = height - top - bottom;\n\n  if (!inner) {\n    owidth = Math.max(owidth - left - right, 0);\n    oheight = Math.max(oheight - top - bottom, 0);\n  }\n\n  var i = 0;\n\n  if (top > 0 && left > 0)\n    insert(i++, 0, 0, left, top, 0, 0, left, top);\n  if (bottom > 0 && left > 0)\n    insert(i++, 0, height + top, left, bottom, 0, oheight + top, left, bottom);\n  if (top > 0 && right > 0)\n    insert(i++, width + left, 0, right, top, owidth + left, 0, right, top);\n  if (bottom > 0 && right > 0)\n    insert(i++, width + left, height + top, right, bottom, owidth + left,\n        oheight + top, right, bottom);\n\n  if (stretch) {\n    if (top > 0)\n      insert(i++, left, 0, width, top, left, 0, owidth, top);\n    if (bottom > 0)\n      insert(i++, left, height + top, width, bottom, left, oheight + top,\n          owidth, bottom);\n    if (left > 0)\n      insert(i++, 0, top, left, height, 0, top, left, oheight);\n    if (right > 0)\n      insert(i++, width + left, top, right, height, owidth + left, top, right,\n          oheight);\n    // center\n    insert(i++, left, top, width, height, left, top, owidth, oheight);\n\n  } else { // tile\n    var l = left, r = owidth, w;\n    while (r > 0) {\n      w = Math.min(width, r), r -= width;\n      var t = top, b = oheight, h;\n      while (b > 0) {\n        h = Math.min(height, b), b -= height;\n        insert(i++, left, top, w, h, l, t, w, h);\n        if (r <= 0) {\n          if (left)\n            insert(i++, 0, top, left, h, 0, t, left, h);\n          if (right)\n            insert(i++, width + left, top, right, h, l + w, t, right, h);\n        }\n        t += h;\n      }\n      if (top)\n        insert(i++, left, 0, w, top, l, 0, w, top);\n      if (bottom)\n        insert(i++, left, height + top, w, bottom, l, t, w, bottom);\n      l += w;\n    }\n  }\n\n  return i;\n};\n},{}],80:[function(require,module,exports){\nmodule.exports = {};\n\n},{}],81:[function(require,module,exports){\nmodule.exports.startsWith = function(str, sub) {\n  return typeof str === 'string' && typeof sub === 'string'\n      && str.substring(0, sub.length) == sub;\n};\n},{}],82:[function(require,module,exports){\nmodule.exports = require('../lib/');\n\nrequire('../lib/canvas');\nrequire('../lib/image');\nrequire('../lib/anim');\nrequire('../lib/str');\nrequire('../lib/layout');\nrequire('../lib/addon/tween');\nmodule.exports.Mouse = require('../lib/addon/mouse');\nmodule.exports.Math = require('../lib/util/math');\nmodule.exports._extend = require('../lib/util/extend');\nmodule.exports._create = require('../lib/util/create');\n\nrequire('../lib/loader/web');\n},{\"../lib/\":63,\"../lib/addon/mouse\":55,\"../lib/addon/tween\":56,\"../lib/anim\":57,\"../lib/canvas\":59,\"../lib/image\":62,\"../lib/layout\":64,\"../lib/loader/web\":65,\"../lib/str\":70,\"../lib/util/create\":74,\"../lib/util/extend\":76,\"../lib/util/math\":78}]},{},[1])(1)\n});"

/***/ }),
/* 403 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ })
/******/ ]);