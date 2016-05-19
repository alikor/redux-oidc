(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = exports.OidcProvider = exports.constants = exports.reducer = exports.immutableReducer = exports.CallbackComponent = exports.createUserManager = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _tokenMiddleware = __webpack_require__(2);

	var _tokenMiddleware2 = _interopRequireDefault(_tokenMiddleware);

	var _CallbackComponent = __webpack_require__(5);

	var _CallbackComponent2 = _interopRequireDefault(_CallbackComponent);

	var _helpers = __webpack_require__(7);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _reducerImmutable = __webpack_require__(10);

	var _reducerImmutable2 = _interopRequireDefault(_reducerImmutable);

	var _reducer = __webpack_require__(12);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _constants = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createUserManager = exports.createUserManager = _get__('helpers').createUserManager;
	var CallbackComponent = exports.CallbackComponent = _get__('Callback');
	var immutableReducer = exports.immutableReducer = _get__('reducerImmutable');
	var reducer = exports.reducer = _get__('standardReducer');
	var constants = exports.constants = {
	  USER_EXPIRED: _get__('USER_EXPIRED'),
	  REDIRECT_SUCCESS: _get__('REDIRECT_SUCCESS'),
	  STORAGE_KEY: _get__('STORAGE_KEY')
	};
	var OidcProvider = exports.OidcProvider = __webpack_require__(13).default;

	exports.default = _get__('createTokenMiddleware');
	var _RewiredData__ = {};
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'helpers':
	      return _helpers2.default;

	    case 'Callback':
	      return _CallbackComponent2.default;

	    case 'reducerImmutable':
	      return _reducerImmutable2.default;

	    case 'standardReducer':
	      return _reducer2.default;

	    case 'USER_EXPIRED':
	      return _constants.USER_EXPIRED;

	    case 'REDIRECT_SUCCESS':
	      return _constants.REDIRECT_SUCCESS;

	    case 'STORAGE_KEY':
	      return _constants.STORAGE_KEY;

	    case 'createTokenMiddleware':
	      return _tokenMiddleware2.default;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof _tokenMiddleware2.default === 'undefined' ? 'undefined' : _typeof(_tokenMiddleware2.default);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(_tokenMiddleware2.default, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(_tokenMiddleware2.default)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.successCallback = successCallback;
	exports.default = createTokenMiddleware;

	var _constants = __webpack_require__(3);

	var _actions = __webpack_require__(4);

	function successCallback(next, dispatchOnSuccess) {
	  if (!dispatchOnSuccess) {
	    return;
	  }

	  switch (typeof dispatchOnSuccess === 'undefined' ? 'undefined' : _typeof(dispatchOnSuccess)) {
	    case 'function':
	      next(dispatchOnSuccess());
	      break;
	    case 'object':
	      next(dispatchOnSuccess);
	      break;
	    default:
	      return;
	  }
	}

	function createTokenMiddleware(userManager, shouldValidate) {
	  var triggerAuthFlow = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	  if (!userManager) {
	    throw new Error('You must provide a user manager!');
	  }

	  if (!shouldValidate || typeof shouldValidate !== 'function') {
	    shouldValidate = function shouldValidate(state, action) {
	      return true;
	    };
	  }

	  return function (store) {
	    return function (next) {
	      return function (action) {
	        // should the token be validated?
	        if (shouldValidate(store.getState(), action) && !window.localStorage.getItem(_get__('STORAGE_KEY'))) {
	          // set the localStorage key so that the validation won't trigger after the redirect
	          window.localStorage.setItem(_get__('STORAGE_KEY'), true);
	          userManager.getUser().then(function (user) {
	            if (!user || user.expired) {
	              // dispatch the action
	              next(_get__('userExpired')());
	              if (triggerAuthFlow) {
	                var state = {};

	                userManager.signinRedirect({ data: {
	                    redirectUrl: window.location.href
	                  }
	                }).catch(function (error) {
	                  window.localStorage.removeItem(_get__('STORAGE_KEY'));
	                  throw new Error('Error signing in: ' + error.message);
	                });
	              }
	            } else {
	              window.localStorage.removeItem(_get__('STORAGE_KEY'), true);
	              return next(action);
	            }
	          });
	        } else {
	          return next(action);
	        }
	      };
	    };
	  };
	};
	var _RewiredData__ = {};
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'STORAGE_KEY':
	      return _constants.STORAGE_KEY;

	    case 'userExpired':
	      return _actions.userExpired;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof createTokenMiddleware === 'undefined' ? 'undefined' : _typeof(createTokenMiddleware);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(createTokenMiddleware, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(createTokenMiddleware)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var STORAGE_KEY = exports.STORAGE_KEY = 'oidc.expired';
	var USER_EXPIRED = exports.USER_EXPIRED = 'redux-oidc/USER_EXPIRED';
	var REDIRECT_SUCCESS = exports.REDIRECT_SUCCESS = 'redux-oidc/REDIRECT_SUCCESS';

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.userExpired = userExpired;
	exports.redirectSuccess = redirectSuccess;

	var _constants = __webpack_require__(3);

	function userExpired() {
	  return {
	    type: _get__('USER_EXPIRED')
	  };
	}

	function redirectSuccess(user) {
	  return {
	    type: _get__('REDIRECT_SUCCESS'),
	    payload: user
	  };
	}
	var _RewiredData__ = {};
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'USER_EXPIRED':
	      return _constants.USER_EXPIRED;

	    case 'REDIRECT_SUCCESS':
	      return _constants.REDIRECT_SUCCESS;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	exports.default = _RewireAPI__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _constants = __webpack_require__(3);

	var _actions = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CallbackComponent = function (_get__$Component) {
	  _inherits(CallbackComponent, _get__$Component);

	  function CallbackComponent() {
	    _classCallCheck(this, CallbackComponent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CallbackComponent).apply(this, arguments));
	  }

	  _createClass(CallbackComponent, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var successCallback = this.props.successCallback;


	      this.context.userManager.signinRedirectCallback().then(function (user) {
	        _this2.props.dispatch(_get__('redirectSuccess')(user));

	        if (successCallback) {
	          successCallback(user);
	        }
	        window.localStorage.removeItem(_get__('STORAGE_KEY'));
	      }).catch(function (error) {
	        window.localStorage.removeItem(_get__('STORAGE_KEY'));
	        throw new Error('Error handling redirect callback: ' + error.message);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.children || this.defaultContent
	      );
	    }
	  }, {
	    key: 'defaultContent',
	    get: function get() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'Redirecting...'
	      );
	    }
	  }]);

	  return CallbackComponent;
	}(_get__('React').Component);

	CallbackComponent.propTypes = {
	  successCallback: _get__('PropTypes').func,
	  dispatch: _get__('PropTypes').func.isRequired
	};
	CallbackComponent.contextTypes = {
	  userManager: _get__('PropTypes').object
	};
	exports.default = _get__('CallbackComponent');
	var _RewiredData__ = {};
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'PropTypes':
	      return _react.PropTypes;

	    case 'redirectSuccess':
	      return _actions.redirectSuccess;

	    case 'STORAGE_KEY':
	      return _constants.STORAGE_KEY;

	    case 'React':
	      return _react2.default;

	    case 'CallbackComponent':
	      return CallbackComponent;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof CallbackComponent === 'undefined' ? 'undefined' : _typeof(CallbackComponent);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(CallbackComponent, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(CallbackComponent)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createUserManager = __webpack_require__(8);

	var _createUserManager2 = _interopRequireDefault(_createUserManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _DefaultExportValue = { createUserManager: _get__('createUserManager') };
	exports.default = _DefaultExportValue;
	var _RewiredData__ = {};
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'createUserManager':
	      return _createUserManager2.default;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof _DefaultExportValue === 'undefined' ? 'undefined' : _typeof(_DefaultExportValue);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(_DefaultExportValue, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(_DefaultExportValue)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = createUserManager;

	var _oidcClient = __webpack_require__(9);

	function createUserManager(config) {
	  return new (_get__('UserManager'))(config);
	}
	var _RewiredData__ = {};
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'UserManager':
	      return _oidcClient.UserManager;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof createUserManager === 'undefined' ? 'undefined' : _typeof(createUserManager);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(createUserManager, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(createUserManager)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=e.Log=n(2),i=e.OidcClient=n(3),s=e.WebStorageStateStore=n(5),o=e.InMemoryWebStorage=n(27),a=e.UserManager=n(28),u=e.AccessTokenEvents=n(37),h=e.MetadataService=n(8);e.default={Log:r,OidcClient:i,WebStorageStateStore:s,InMemoryWebStorage:o,UserManager:a,AccessTokenEvents:u,MetadataService:h}},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i={info:function(){},warn:function(){},error:function(){}},s=0,o=1,a=2,u=3,h=void 0,c=void 0,f=function(){function t(){n(this,t)}return t.reset=function(){c=u,h=i},t.info=function(){if(c>=u){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];h.info.apply(h,Array.from(e))}},t.warn=function(){if(c>=a){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];h.warn.apply(h,Array.from(e))}},t.error=function(){if(c>=o){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];h.error.apply(h,Array.from(e))}},r(t,null,[{key:"NONE",get:function(){return s}},{key:"ERROR",get:function(){return o}},{key:"WARN",get:function(){return a}},{key:"INFO",get:function(){return u}},{key:"level",get:function(){return c},set:function(t){if(!(t>=s&&u>=t))throw new Error("Invalid log level");c=t}},{key:"logger",get:function(){return h},set:function(t){if(!(t.info&&t.warn&&t.error))throw new Error("Invalid logger");h=t}}]),t}();e.default=f,f.reset(),t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),a=r(o),u=n(4),h=r(u),c=n(11),f=r(c),l=n(19),d=r(l),p=n(24),g=r(p),y=n(25),v=r(y),m=n(26),S=r(m),b=n(21),E=r(b),w=n(22),R=r(w),x=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,t),e instanceof h.default?this._settings=e:this._settings=new h.default(e)}return t.prototype.createSigninRequest=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.response_type,r=e.scope,i=e.redirect_uri,s=e.data,o=e.prompt,u=e.display,h=e.max_age,c=e.ui_locales,f=e.id_token_hint,l=e.login_hint,p=e.acr_values,g=arguments[1];a.default.info("OidcClient.createSigninRequest");var y=this._settings.client_id;n=n||this._settings.response_type,r=r||this._settings.scope,i=i||this._settings.redirect_uri,o=o||this._settings.prompt,u=u||this._settings.display,h=h||this._settings.max_age,c=c||this._settings.ui_locales,p=p||this._settings.acr_values;var v=this._settings.authority;return this._metadataService.getAuthorizationEndpoint().then(function(e){a.default.info("Received authorization endpoint",e);var m=new d.default({url:e,client_id:y,redirect_uri:i,response_type:n,scope:r,data:s,authority:v,prompt:o,display:u,max_age:h,ui_locales:c,id_token_hint:f,login_hint:l,acr_values:p}),S=m.state;return g=g||t._stateStore,g.set(S.id,S.toStorageString()).then(function(){return m})})},t.prototype.processSigninResponse=function(t,e){var n=this;a.default.info("OidcClient.processSigninResponse");var r=new g.default(t);return r.state?(e=e||this._stateStore,e.remove(r.state).then(function(t){if(!t)throw a.default.error("No matching state found in storage"),new Error("No matching state found in storage");var e=E.default.fromStorageString(t);return a.default.info("Received state from storage; validating response"),n._validator.validateSigninResponse(e,r)})):(a.default.error("No state in response"),Promise.reject(new Error("No state in response")))},t.prototype.createSignoutRequest=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.id_token_hint,r=e.data,i=e.post_logout_redirect_uri,s=arguments[1];return a.default.info("OidcClient.createSignoutRequest"),i=i||this._settings.post_logout_redirect_uri,this._metadataService.getEndSessionEndpoint().then(function(e){a.default.info("Received end session endpoint",e);var o=new v.default({url:e,id_token_hint:n,post_logout_redirect_uri:i,data:r}),u=o.state;return u&&(a.default.info("Signout request has state to persist"),s=s||t._stateStore,s.set(u.id,u.toStorageString())),o})},t.prototype.processSignoutResponse=function(t,e){var n=this;a.default.info("OidcClient.processSignoutResponse");var r=new S.default(t);if(!r.state)return a.default.info("No state in response"),r.error?(a.default.warn("Response was error",r.error),Promise.reject(new f.default(r))):Promise.resolve(r);var i=r.state;return e=e||this._stateStore,e.remove(i).then(function(t){if(!t)throw a.default.error("No matching state found in storage"),new Error("No matching state found in storage");var e=R.default.fromStorageString(t);return a.default.info("Received state from storage; validating response"),n._validator.validateSignoutResponse(e,r)})},t.prototype.clearStaleState=function(t){return a.default.info("OidcClient.clearStaleState"),t=t||this._stateStore,R.default.clearStaleState(t,this.settings.staleStateAge)},s(t,[{key:"_stateStore",get:function(){return this.settings.stateStore}},{key:"_validator",get:function(){return this.settings.validator}},{key:"_metadataService",get:function(){return this.settings.metadataService}},{key:"settings",get:function(){return this._settings}},{key:"metadataService",get:function(){return this._metadataService}}]),t}();e.default=x,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),a=r(o),u=n(5),h=r(u),c=n(7),f=r(c),l=n(8),d=r(l),p=".well-known/openid-configuration",g="id_token",y="openid",v=60,m=300,S=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.authority,r=e.metadataUrl,s=e.metadata,o=e.signingKeys,a=e.client_id,u=e.response_type,c=void 0===u?g:u,l=e.scope,p=void 0===l?y:l,S=e.redirect_uri,b=e.post_logout_redirect_uri,E=e.prompt,w=e.display,R=e.max_age,x=e.ui_locales,A=e.acr_values,F=e.filterProtocolClaims,_=void 0===F?!0:F,K=e.loadUserInfo,U=void 0===K?!0:K,P=e.staleStateAge,O=void 0===P?v:P,C=e.clockSkew,D=void 0===C?m:C,J=e.stateStore,T=void 0===J?new h.default:J,I=e.ResponseValidatorCtor,H=void 0===I?f.default:I,j=e.MetadataServiceCtor,B=void 0===j?d.default:j;i(this,t),this._authority=n,this._metadataUrl=r,this._metadata=s,this._signingKeys=o,this._client_id=a,this._response_type=c,this._scope=p,this._redirect_uri=S,this._post_logout_redirect_uri=b,this._prompt=E,this._display=w,this._max_age=R,this._ui_locales=x,this._acr_values=A,this._filterProtocolClaims=!!_,this._loadUserInfo=!!U,this._staleStateAge=O,this._clockSkew=D,this._stateStore=T,this._validator=new H(this),this._metadataService=new B(this)}return s(t,[{key:"client_id",get:function(){return this._client_id},set:function(t){if(this._client_id)throw a.default.error("client_id has already been assigned."),new Error("client_id has already been assigned.");this._client_id=t}},{key:"response_type",get:function(){return this._response_type}},{key:"scope",get:function(){return this._scope}},{key:"redirect_uri",get:function(){return this._redirect_uri}},{key:"post_logout_redirect_uri",get:function(){return this._post_logout_redirect_uri}},{key:"prompt",get:function(){return this._prompt}},{key:"display",get:function(){return this._display}},{key:"max_age",get:function(){return this._max_age}},{key:"ui_locales",get:function(){return this._ui_locales}},{key:"acr_values",get:function(){return this._acr_values}},{key:"authority",get:function(){return this._authority},set:function(t){if(this._authority)throw a.default.error("authority has already been assigned."),new Error("authority has already been assigned.");this._authority=t}},{key:"metadataUrl",get:function(){return this._metadataUrl||(this._metadataUrl=this.authority,this._metadataUrl&&this._metadataUrl.indexOf(p)<0&&("/"!==this._metadataUrl[this._metadataUrl.length-1]&&(this._metadataUrl+="/"),this._metadataUrl+=p)),this._metadataUrl}},{key:"metadata",get:function(){return this._metadata},set:function(t){this._metadata=t}},{key:"signingKeys",get:function(){return this._signingKeys},set:function(t){this._signingKeys=t}},{key:"filterProtocolClaims",get:function(){return this._filterProtocolClaims}},{key:"loadUserInfo",get:function(){return this._loadUserInfo}},{key:"staleStateAge",get:function(){return this._staleStateAge}},{key:"clockSkew",get:function(){return this._clockSkew}},{key:"stateStore",get:function(){return this._stateStore}},{key:"validator",get:function(){return this._validator}},{key:"metadataService",get:function(){return this._metadataService}}]),t}();e.default=S,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=r(s),a=n(6),u=r(a),h=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.prefix,r=void 0===n?"oidc.":n,s=e.store,o=void 0===s?u.default.localStorage:s;i(this,t),this._store=o,this._prefix=r}return t.prototype.set=function(t,e){return o.default.info("WebStorageStateStore.set",t),t=this._prefix+t,this._store.setItem(t,e),Promise.resolve()},t.prototype.get=function(t){o.default.info("WebStorageStateStore.get",t),t=this._prefix+t;var e=this._store.getItem(t);return Promise.resolve(e)},t.prototype.remove=function(t){o.default.info("WebStorageStateStore.remove",t),t=this._prefix+t;var e=this._store.getItem(t);return this._store.removeItem(t),Promise.resolve(e)},t.prototype.getAllKeys=function(){o.default.info("WebStorageStateStore.getAllKeys");for(var t=[],e=0;e<this._store.length;e++){var n=this._store.key(e);0===n.indexOf(this._prefix)&&t.push(n.substr(this._prefix.length))}return Promise.resolve(t)},t}();e.default=h,t.exports=e.default},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i={setTimeout:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return setTimeout(t,e)}),clearTimeout:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return clearTimeout(t)})},s=!1,o=function(){function t(){n(this,t)}return t._testing=function(){s=!0},r(t,null,[{key:"location",get:function(){return s?void 0:location}},{key:"localStorage",get:function(){return s?void 0:localStorage}},{key:"sessionStorage",get:function(){return s?void 0:sessionStorage}},{key:"XMLHttpRequest",get:function(){return s?void 0:XMLHttpRequest}},{key:"timer",get:function(){return s?void 0:i}}]),t}();e.default=o,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=r(s),a=n(8),u=r(a),h=n(10),c=r(h),f=n(11),l=r(f),d=n(12),p=r(d),g=["nonce","at_hash","iat","nbf","exp","aud","iss","c_hash"],y=function(){function t(e){var n=arguments.length<=1||void 0===arguments[1]?u.default:arguments[1],r=arguments.length<=2||void 0===arguments[2]?c.default:arguments[2],s=arguments.length<=3||void 0===arguments[3]?p.default:arguments[3];if(i(this,t),!e)throw o.default.error("No settings passed to ResponseValidator"),new Error("settings");this._settings=e,this._metadataService=new n(this._settings),this._userInfoService=new r(this._settings),this._joseUtil=s}return t.prototype.validateSigninResponse=function(t,e){var n=this;return o.default.info("ResponseValidator.validateSigninResponse"),this._processSigninParams(t,e).then(function(e){return o.default.info("state processed"),n._validateTokens(t,e).then(function(t){return o.default.info("tokens validated"),n._processClaims(t).then(function(t){return o.default.info("claims processed"),t})})})},t.prototype.validateSignoutResponse=function(t,e){return o.default.info("ResponseValidator.validateSignoutResponse"),t.id!==e.state?(o.default.error("State does not match"),Promise.reject(new Error("State does not match"))):(o.default.info("state validated"),e.state=t.data,e.error?(o.default.warn("Response was error",e.error),Promise.reject(new l.default(e))):Promise.resolve(e))},t.prototype._processSigninParams=function(t,e){if(o.default.info("ResponseValidator._processSigninParams"),t.id!==e.state)return o.default.error("State does not match"),Promise.reject(new Error("State does not match"));if(!t.client_id)return o.default.error("No client_id on state"),Promise.reject(new Error("No client_id on state"));if(!t.authority)return o.default.error("No authority on state"),Promise.reject(new Error("No authority on state"));if(this._settings.authority){if(this._settings.authority&&this._settings.authority!==t.authority)return o.default.error("authority mismatch on settings vs. signin state"),Promise.reject(new Error("authority mismatch on settings vs. signin state"))}else this._settings.authority=t.authority;if(this._settings.client_id){if(this._settings.client_id&&this._settings.client_id!==t.client_id)return o.default.error("client_id mismatch on settings vs. signin state"),Promise.reject(new Error("client_id mismatch on settings vs. signin state"))}else this._settings.client_id=t.client_id;return o.default.info("state validated"),e.state=t.data,e.error?(o.default.warn("Response was error",e.error),Promise.reject(new l.default(e))):t.nonce&&!e.id_token?(o.default.error("Expecting id_token in response"),Promise.reject(new Error("No id_token in response"))):!t.nonce&&e.id_token?(o.default.error("Not expecting id_token in response"),Promise.reject(new Error("Unexpected id_token in response"))):Promise.resolve(e)},t.prototype._processClaims=function(t){var e=this;if(o.default.info("ResponseValidator._processClaims"),t.isOpenIdConnect){if(o.default.info("response is OIDC, processing claims"),t.profile=this._filterProtocolClaims(t.profile),this._settings.loadUserInfo&&t.access_token)return o.default.info("loading user info"),this._userInfoService.getClaims(t.access_token).then(function(n){return t.profile=e._mergeClaims(t.profile,n),o.default.info("user info claims received, updated profile:",t.profile),t});o.default.info("not loading user info")}else o.default.info("response is not OIDC, not processing claims");return Promise.resolve(t)},t.prototype._mergeClaims=function(t,e){var n=Object.assign({},t);for(var r in e){var i=e[r];Array.isArray(i)||(i=[i]);var s=!0,o=!1,a=void 0;try{for(var u,h=i[Symbol.iterator]();!(s=(u=h.next()).done);s=!0){var c=u.value;n[r]?Array.isArray(n[r])?n[r].indexOf(c)<0&&n[r].push(c):n[r]!==c&&(n[r]=[n[r],c]):n[r]=c}}catch(f){o=!0,a=f}finally{try{!s&&h.return&&h.return()}finally{if(o)throw a}}}return n},t.prototype._filterProtocolClaims=function(t){o.default.info("ResponseValidator._filterProtocolClaims, incoming claims:",t);var e=Object.assign({},t);return this._settings._filterProtocolClaims?(g.forEach(function(t){delete e[t]}),o.default.info("protocol claims filtered",e)):o.default.info("protocol claims not filtered"),e},t.prototype._validateTokens=function(t,e){return o.default.info("ResponseValidator._validateTokens"),e.id_token?e.access_token?(o.default.info("Validating id_token and access_token"),this._validateIdTokenAndAccessToken(t,e)):(o.default.info("Validating id_token"),this._validateIdToken(t,e)):(o.default.info("No id_token to validate"),Promise.resolve(e))},t.prototype._validateIdTokenAndAccessToken=function(t,e){var n=this;return o.default.info("ResponseValidator._validateIdTokenAndAccessToken"),this._validateIdToken(t,e).then(function(t){return n._validateAccessToken(t)})},t.prototype._validateIdToken=function(t,e){var n=this;if(o.default.info("ResponseValidator._validateIdToken"),!t.nonce)return o.default.error("No nonce on state"),Promise.reject(new Error("No nonce on state"));var r=this._joseUtil.parseJwt(e.id_token);if(!r||!r.header||!r.payload)return o.default.error("Failed to parse id_token",r),Promise.reject(new Error("Failed to parse id_token"));if(t.nonce!==r.payload.nonce)return o.default.error("Invalid nonce in id_token"),Promise.reject(new Error("Invalid nonce in id_token"));var i=r.header.kid;return i?this._metadataService.getIssuer().then(function(s){return o.default.info("Received issuer"),n._metadataService.getSigningKeys().then(function(a){if(!a)return o.default.error("No signing keys from metadata"),Promise.reject(new Error("No signing keys from metadata"));o.default.info("Received signing keys");var u=a.filter(function(t){return t.kid===i})[0];if(!u)return o.default.error("No key matching kid found in signing keys"),Promise.reject(new Error("No key matching kid found in signing keys"));var h=t.client_id,c=n._settings.clockSkew;return o.default.info("Validaing JWT; using clock skew (in seconds) of: ",c),n._joseUtil.validateJwt(e.id_token,u,s,h,c).then(function(){return o.default.info("JWT validation successful"),e.profile=r.payload,e})})}):(o.default.error("No kid found in id_token"),Promise.reject(new Error("No kid found in id_token")))},t.prototype._validateAccessToken=function(t){if(o.default.info("ResponseValidator._validateAccessToken"),!t.profile)return o.default.error("No profile loaded from id_token"),Promise.reject(new Error("No profile loaded from id_token"));if(!t.profile.at_hash)return o.default.error("No at_hash in id_token"),Promise.reject(new Error("No at_hash in id_token"));if(!t.id_token)return o.default.error("No id_token"),Promise.reject(new Error("No id_token"));var e=this._joseUtil.parseJwt(t.id_token);if(!e||!e.header)return o.default.error("Failed to parse id_token",e),Promise.reject(new Error("Failed to parse id_token"));var n=e.header.alg;if(!n||5!==n.length)return o.default.error("Unsupported alg:",n),Promise.reject(new Error("Unsupported alg: "+n));var r=n.substr(2,3);if(!r)return o.default.error("Unsupported alg:",n,r),Promise.reject(new Error("Unsupported alg: "+n));if(r=parseInt(r),256!==r&&384!==r&&512!==r)return o.default.error("Unsupported alg:",n,r),Promise.reject(new Error("Unsupported alg: "+n));var i="sha"+r,s=this._joseUtil.hashString(t.access_token,i);if(!s)return o.default.error("access_token hash failed:",i),Promise.reject(new Error("Failed to validate at_hash"));var a=s.substr(0,s.length/2),u=this._joseUtil.hexToBase64Url(a);return u!==t.profile.at_hash?(o.default.error("Failed to validate at_hash",u,t.profile.at_hash),Promise.reject(new Error("Failed to validate at_hash"))):Promise.resolve(t)},t}();e.default=y,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=r(s),a=n(9),u=r(a),h=function(){function t(e){var n=arguments.length<=1||void 0===arguments[1]?u.default:arguments[1];if(i(this,t),!e)throw o.default.error("No settings passed to MetadataService"),new Error("settings");this._settings=e,this._jsonService=new n}return t.prototype.getMetadata=function(){var t=this;return o.default.info("MetadataService.getMetadata"),this._settings.metadata?(o.default.info("Returning metadata from settings"),Promise.resolve(this._settings.metadata)):this._settings.metadataUrl?(o.default.info("getting metadata from",this._settings.metadataUrl),this._jsonService.getJson(this._settings.metadataUrl).then(function(e){return o.default.info("json received"),t._settings.metadata=e,e})):(o.default.error("No metadataUrl configured on settings"),Promise.reject(new Error("No metadataUrl configured on settings")))},t.prototype.getIssuer=function(){return o.default.info("MetadataService.getIssuer"),this._getMetadataProperty("issuer")},t.prototype.getAuthorizationEndpoint=function(){return o.default.info("MetadataService.getAuthorizationEndpoint"),this._getMetadataProperty("authorization_endpoint")},t.prototype.getUserInfoEndpoint=function(){return o.default.info("MetadataService.getUserInfoEndpoint"),this._getMetadataProperty("userinfo_endpoint")},t.prototype.getCheckSessionIframe=function(){return o.default.info("MetadataService.getCheckSessionIframe"),this._getMetadataProperty("check_session_iframe")},t.prototype.getEndSessionEndpoint=function(){return o.default.info("MetadataService.getEndSessionEndpoint"),this._getMetadataProperty("end_session_endpoint")},t.prototype._getMetadataProperty=function(t){return o.default.info("MetadataService._getMetadataProperty",t),this.getMetadata().then(function(e){if(o.default.info("metadata recieved"),void 0===e[t])throw o.default.error("Metadata does not contain property "+t),new Error("Metadata does not contain property "+t);return e[t]})},t.prototype.getSigningKeys=function(){var t=this;return o.default.info("MetadataService.getSigningKeys"),this._settings.signingKeys?(o.default.info("Returning signingKeys from settings"),Promise.resolve(this._settings.signingKeys)):this._getMetadataProperty("jwks_uri").then(function(e){return o.default.info("jwks_uri received",e),t._jsonService.getJson(e).then(function(e){if(o.default.info("key set received",e),!e.keys)throw o.default.error("Missing keys on keyset"),new Error("Missing keys on keyset");var n=t._filterSigningKeys(e.keys);return o.default.info("filtered keys",n),t._settings.signingKeys=n,t._settings.signingKeys})})},t.prototype._filterSigningKeys=function(t){return o.default.info("MetadataService._filterSigningKeys",t),t.filter(function(t){return"sig"===t.use})},t}();e.default=h,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=r(s),a=n(6),u=r(a),h=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?u.default.XMLHttpRequest:arguments[0];i(this,t),this._XMLHttpRequest=e}return t.prototype.getJson=function(t,e){var n=this;if(o.default.info("JsonService.getJson",t),!t)throw o.default.error("No url passed"),new Error("url");return new Promise(function(r,i){var s=new n._XMLHttpRequest;s.open("GET",t),s.onload=function(){o.default.info("HTTP response received, status",s.status),200===s.status?r(JSON.parse(s.responseText)):i(Error(s.statusText+" ("+s.status+")"))},s.onerror=function(){o.default.error("network error"),i(Error("Network Error"))},e&&(o.default.info("token passed, setting Authorization header"),s.setRequestHeader("Authorization","Bearer "+e)),s.send()})},t}();e.default=h,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(9),o=r(s),a=n(8),u=r(a),h=n(2),c=r(h),f=function(){function t(e){var n=arguments.length<=1||void 0===arguments[1]?o.default:arguments[1],r=arguments.length<=2||void 0===arguments[2]?u.default:arguments[2];if(i(this,t),!e)throw c.default.error("No settings passed to UserInfoService"),new Error("settings");this._settings=e,this._jsonService=new n,this._metadataService=new r(this._settings)}return t.prototype.getClaims=function(t){var e=this;return c.default.info("UserInfoService.getClaims"),t?this._metadataService.getUserInfoEndpoint().then(function(n){return c.default.info("received userinfo url",n),e._jsonService.getJson(n,t).then(function(t){return c.default.info("claims received",t),t})}):(c.default.error("No token passed"),Promise.reject(new Error("A token is required")))},t}();e.default=f,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),u=r(a),h=function(t){function e(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=n.error,o=n.error_description,a=n.error_uri,h=n.state;if(i(this,e),!r)throw u.default.error("No error passed to ErrorResponse"),new Error("error");var c=s(this,t.call(this,o||r));return c.name="ErrorResponse",c.error=r,c.error_description=o,c.error_uri=a,c.state=h,c}return o(e,t),e}(Error);e.default=h,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(13),o=n(2),a=r(o),u=["RS256","RS384","RS512","PS256","PS384","PS512","ES256","ES384","ES512"],h=function(){function t(){i(this,t)}return t.parseJwt=function(t){a.default.info("JoseUtil.parseJwt");try{var e=s.jws.JWS.parse(t);return{header:e.headerObj,payload:e.payloadObj}}catch(n){a.default.error(n)}},t.validateJwt=function(e,n,r,i,o,u){a.default.info("JoseUtil.validateJwt");try{if("RSA"===n.kty)if(n.e&&n.n)n=s.KEYUTIL.getKey(n);else{if(!n.x5c||!n.x5c.length)return a.default.error("RSA key missing key material",n),Promise.reject(new Error("RSA key missing key material"));n=s.KEYUTIL.getKey(s.X509.getPublicKeyFromCertPEM(n.x5c[0]))}else{if("EC"!==n.kty)return a.default.error("Unsupported key type",n&&n.kty),Promise.reject(new Error("Unsupported key type: "+n&&n.kty));if(!(n.crv&&n.x&&n.y))return a.default.error("EC key missing key material",n),Promise.reject(new Error("EC key missing key material"));n=s.KEYUTIL.getKey(n)}return t._validateJwt(e,n,r,i,o,u)}catch(h){return a.default.error(h&&h.message||h),Promise.reject("JWT validation failed")}},t._validateJwt=function(e,n,r,i,o,h){a.default.info("JoseUtil._validateJwt"),o||(o=0),h||(h=parseInt(Date.now()/1e3));var c=t.parseJwt(e).payload;if(c.iss!==r)return a.default.error("Invalid issuer in token",c.iss),Promise.reject(new Error("Invalid issuer in token: "+c.iss));if(c.aud!==i)return a.default.error("Invalid audience in token",c.aud),Promise.reject(new Error("Invalid audience in token: "+c.aud));var f=h+o,l=h-o;if(f<c.iat)return a.default.error("iat is in the future",c.iat),Promise.reject(new Error("iat is in the future: "+c.iat));if(f<c.nbf)return a.default.error("nbf is in the future",c.nbf),Promise.reject(new Error("nbf is in the future: "+c.nbf));if(c.exp<l)return a.default.error("exp is in the past",c.exp),Promise.reject(new Error("exp is in the past:"+c.exp));try{if(!s.jws.JWS.verify(e,n,u))return a.default.error("signature validation failed"),Promise.reject(new Error("signature validation failed"))}catch(d){return a.default.error(d&&d.message||d),Promise.reject(new Error("signature validation failed"))}return Promise.resolve()},t.hashString=function(t,e){a.default.info("JoseUtil.hashString",t,e);try{return s.crypto.Util.hashString(t,e)}catch(n){a.default.error(n)}},t.hexToBase64Url=function(t){a.default.info("JoseUtil.hexToBase64Url",t);try{return(0,s.hextob64u)(t)}catch(e){a.default.error(e)}},t}();e.default=h,t.exports=e.default},function(t,e,n){(function(t){function r(t){var e,n,r="";for(e=0;e+3<=t.length;e+=3)n=parseInt(t.substring(e,e+3),16),r+=ar.charAt(n>>6)+ar.charAt(63&n);if(e+1==t.length?(n=parseInt(t.substring(e,e+1),16),r+=ar.charAt(n<<2)):e+2==t.length&&(n=parseInt(t.substring(e,e+2),16),r+=ar.charAt(n>>2)+ar.charAt((3&n)<<4)),ur)for(;(3&r.length)>0;)r+=ur;return r}function i(t){var e,n,r,i="",s=0;for(e=0;e<t.length&&t.charAt(e)!=ur;++e)r=ar.indexOf(t.charAt(e)),0>r||(0==s?(i+=f(r>>2),n=3&r,s=1):1==s?(i+=f(n<<2|r>>4),n=15&r,s=2):2==s?(i+=f(n),i+=f(r>>2),n=3&r,s=3):(i+=f(n<<2|r>>4),i+=f(15&r),s=0));return 1==s&&(i+=f(n<<2)),i}function s(t){var e,n=i(t),r=new Array;for(e=0;2*e<n.length;++e)r[e]=parseInt(n.substring(2*e,2*e+2),16);return r}function o(t,e,n){null!=t&&("number"==typeof t?this.fromNumber(t,e,n):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}function a(){return new o(null)}function u(t,e,n,r,i,s){for(;--s>=0;){var o=e*this[t++]+n[r]+i;i=Math.floor(o/67108864),n[r++]=67108863&o}return i}function h(t,e,n,r,i,s){for(var o=32767&e,a=e>>15;--s>=0;){var u=32767&this[t],h=this[t++]>>15,c=a*u+h*o;u=o*u+((32767&c)<<15)+n[r]+(1073741823&i),i=(u>>>30)+(c>>>15)+a*h+(i>>>30),n[r++]=1073741823&u}return i}function c(t,e,n,r,i,s){for(var o=16383&e,a=e>>14;--s>=0;){var u=16383&this[t],h=this[t++]>>14,c=a*u+h*o;u=o*u+((16383&c)<<14)+n[r]+i,i=(u>>28)+(c>>14)+a*h,n[r++]=268435455&u}return i}function f(t){return pr.charAt(t)}function l(t,e){var n=gr[t.charCodeAt(e)];return null==n?-1:n}function d(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s}function p(t){this.t=1,this.s=0>t?-1:0,t>0?this[0]=t:-1>t?this[0]=t+this.DV:this.t=0}function g(t){var e=a();return e.fromInt(t),e}function y(t,e){var n;if(16==e)n=4;else if(8==e)n=3;else if(256==e)n=8;else if(2==e)n=1;else if(32==e)n=5;else{if(4!=e)return void this.fromRadix(t,e);n=2}this.t=0,this.s=0;for(var r=t.length,i=!1,s=0;--r>=0;){var a=8==n?255&t[r]:l(t,r);0>a?"-"==t.charAt(r)&&(i=!0):(i=!1,0==s?this[this.t++]=a:s+n>this.DB?(this[this.t-1]|=(a&(1<<this.DB-s)-1)<<s,this[this.t++]=a>>this.DB-s):this[this.t-1]|=a<<s,s+=n,s>=this.DB&&(s-=this.DB))}8==n&&0!=(128&t[0])&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),i&&o.ZERO.subTo(this,this)}function v(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t}function m(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var n,r=(1<<e)-1,i=!1,s="",o=this.t,a=this.DB-o*this.DB%e;if(o-- >0)for(a<this.DB&&(n=this[o]>>a)>0&&(i=!0,s=f(n));o>=0;)e>a?(n=(this[o]&(1<<a)-1)<<e-a,n|=this[--o]>>(a+=this.DB-e)):(n=this[o]>>(a-=e)&r,0>=a&&(a+=this.DB,
	--o)),n>0&&(i=!0),i&&(s+=f(n));return i?s:"0"}function S(){var t=a();return o.ZERO.subTo(this,t),t}function b(){return this.s<0?this.negate():this}function E(t){var e=this.s-t.s;if(0!=e)return e;var n=this.t;if(e=n-t.t,0!=e)return this.s<0?-e:e;for(;--n>=0;)if(0!=(e=this[n]-t[n]))return e;return 0}function w(t){var e,n=1;return 0!=(e=t>>>16)&&(t=e,n+=16),0!=(e=t>>8)&&(t=e,n+=8),0!=(e=t>>4)&&(t=e,n+=4),0!=(e=t>>2)&&(t=e,n+=2),0!=(e=t>>1)&&(t=e,n+=1),n}function R(){return this.t<=0?0:this.DB*(this.t-1)+w(this[this.t-1]^this.s&this.DM)}function x(t,e){var n;for(n=this.t-1;n>=0;--n)e[n+t]=this[n];for(n=t-1;n>=0;--n)e[n]=0;e.t=this.t+t,e.s=this.s}function A(t,e){for(var n=t;n<this.t;++n)e[n-t]=this[n];e.t=Math.max(this.t-t,0),e.s=this.s}function F(t,e){var n,r=t%this.DB,i=this.DB-r,s=(1<<i)-1,o=Math.floor(t/this.DB),a=this.s<<r&this.DM;for(n=this.t-1;n>=0;--n)e[n+o+1]=this[n]>>i|a,a=(this[n]&s)<<r;for(n=o-1;n>=0;--n)e[n]=0;e[o]=a,e.t=this.t+o+1,e.s=this.s,e.clamp()}function _(t,e){e.s=this.s;var n=Math.floor(t/this.DB);if(n>=this.t)return void(e.t=0);var r=t%this.DB,i=this.DB-r,s=(1<<r)-1;e[0]=this[n]>>r;for(var o=n+1;o<this.t;++o)e[o-n-1]|=(this[o]&s)<<i,e[o-n]=this[o]>>r;r>0&&(e[this.t-n-1]|=(this.s&s)<<i),e.t=this.t-n,e.clamp()}function K(t,e){for(var n=0,r=0,i=Math.min(t.t,this.t);i>n;)r+=this[n]-t[n],e[n++]=r&this.DM,r>>=this.DB;if(t.t<this.t){for(r-=t.s;n<this.t;)r+=this[n],e[n++]=r&this.DM,r>>=this.DB;r+=this.s}else{for(r+=this.s;n<t.t;)r-=t[n],e[n++]=r&this.DM,r>>=this.DB;r-=t.s}e.s=0>r?-1:0,-1>r?e[n++]=this.DV+r:r>0&&(e[n++]=r),e.t=n,e.clamp()}function U(t,e){var n=this.abs(),r=t.abs(),i=n.t;for(e.t=i+r.t;--i>=0;)e[i]=0;for(i=0;i<r.t;++i)e[i+n.t]=n.am(0,r[i],e,i,0,n.t);e.s=0,e.clamp(),this.s!=t.s&&o.ZERO.subTo(e,e)}function P(t){for(var e=this.abs(),n=t.t=2*e.t;--n>=0;)t[n]=0;for(n=0;n<e.t-1;++n){var r=e.am(n,e[n],t,2*n,0,1);(t[n+e.t]+=e.am(n+1,2*e[n],t,2*n+1,r,e.t-n-1))>=e.DV&&(t[n+e.t]-=e.DV,t[n+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(n,e[n],t,2*n,0,1)),t.s=0,t.clamp()}function O(t,e,n){var r=t.abs();if(!(r.t<=0)){var i=this.abs();if(i.t<r.t)return null!=e&&e.fromInt(0),void(null!=n&&this.copyTo(n));null==n&&(n=a());var s=a(),u=this.s,h=t.s,c=this.DB-w(r[r.t-1]);c>0?(r.lShiftTo(c,s),i.lShiftTo(c,n)):(r.copyTo(s),i.copyTo(n));var f=s.t,l=s[f-1];if(0!=l){var d=l*(1<<this.F1)+(f>1?s[f-2]>>this.F2:0),p=this.FV/d,g=(1<<this.F1)/d,y=1<<this.F2,v=n.t,m=v-f,S=null==e?a():e;for(s.dlShiftTo(m,S),n.compareTo(S)>=0&&(n[n.t++]=1,n.subTo(S,n)),o.ONE.dlShiftTo(f,S),S.subTo(s,s);s.t<f;)s[s.t++]=0;for(;--m>=0;){var b=n[--v]==l?this.DM:Math.floor(n[v]*p+(n[v-1]+y)*g);if((n[v]+=s.am(0,b,n,m,0,f))<b)for(s.dlShiftTo(m,S),n.subTo(S,n);n[v]<--b;)n.subTo(S,n)}null!=e&&(n.drShiftTo(f,e),u!=h&&o.ZERO.subTo(e,e)),n.t=f,n.clamp(),c>0&&n.rShiftTo(c,n),0>u&&o.ZERO.subTo(n,n)}}}function C(t){var e=a();return this.abs().divRemTo(t,null,e),this.s<0&&e.compareTo(o.ZERO)>0&&t.subTo(e,e),e}function D(t){this.m=t}function J(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function T(t){return t}function I(t){t.divRemTo(this.m,null,t)}function H(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function j(t,e){t.squareTo(e),this.reduce(e)}function B(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return e=e*(2-(15&t)*e)&15,e=e*(2-(255&t)*e)&255,e=e*(2-((65535&t)*e&65535))&65535,e=e*(2-t*e%this.DV)%this.DV,e>0?this.DV-e:-e}function N(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function k(t){var e=a();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(o.ZERO)>0&&this.m.subTo(e,e),e}function V(t){var e=a();return t.copyTo(e),this.reduce(e),e}function M(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var n=32767&t[e],r=n*this.mpl+((n*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(n=e+this.m.t,t[n]+=this.m.am(0,r,t,e,0,this.m.t);t[n]>=t.DV;)t[n]-=t.DV,t[++n]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function L(t,e){t.squareTo(e),this.reduce(e)}function q(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function W(){return 0==(this.t>0?1&this[0]:this.s)}function z(t,e){if(t>4294967295||1>t)return o.ONE;var n=a(),r=a(),i=e.convert(this),s=w(t)-1;for(i.copyTo(n);--s>=0;)if(e.sqrTo(n,r),(t&1<<s)>0)e.mulTo(r,i,n);else{var u=n;n=r,r=u}return e.revert(n)}function Y(t,e){var n;return n=256>t||e.isEven()?new D(e):new N(e),this.exp(t,n)}/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
		 */
	function G(){var t=a();return this.copyTo(t),t}function X(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function $(){return 0==this.t?this.s:this[0]<<24>>24}function Z(){return 0==this.t?this.s:this[0]<<16>>16}function Q(t){return Math.floor(Math.LN2*this.DB/Math.log(t))}function tt(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1}function et(t){if(null==t&&(t=10),0==this.signum()||2>t||t>36)return"0";var e=this.chunkSize(t),n=Math.pow(t,e),r=g(n),i=a(),s=a(),o="";for(this.divRemTo(r,i,s);i.signum()>0;)o=(n+s.intValue()).toString(t).substr(1)+o,i.divRemTo(r,i,s);return s.intValue().toString(t)+o}function nt(t,e){this.fromInt(0),null==e&&(e=10);for(var n=this.chunkSize(e),r=Math.pow(e,n),i=!1,s=0,a=0,u=0;u<t.length;++u){var h=l(t,u);0>h?"-"==t.charAt(u)&&0==this.signum()&&(i=!0):(a=e*a+h,++s>=n&&(this.dMultiply(r),this.dAddOffset(a,0),s=0,a=0))}s>0&&(this.dMultiply(Math.pow(e,s)),this.dAddOffset(a,0)),i&&o.ZERO.subTo(this,this)}function rt(t,e,n){if("number"==typeof e)if(2>t)this.fromInt(1);else for(this.fromNumber(t,n),this.testBit(t-1)||this.bitwiseTo(o.ONE.shiftLeft(t-1),ft,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(e);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(o.ONE.shiftLeft(t-1),this);else{var r=new Array,i=7&t;r.length=(t>>3)+1,e.nextBytes(r),i>0?r[0]&=(1<<i)-1:r[0]=0,this.fromString(r,256)}}function it(){var t=this.t,e=new Array;e[0]=this.s;var n,r=this.DB-t*this.DB%8,i=0;if(t-- >0)for(r<this.DB&&(n=this[t]>>r)!=(this.s&this.DM)>>r&&(e[i++]=n|this.s<<this.DB-r);t>=0;)8>r?(n=(this[t]&(1<<r)-1)<<8-r,n|=this[--t]>>(r+=this.DB-8)):(n=this[t]>>(r-=8)&255,0>=r&&(r+=this.DB,--t)),0!=(128&n)&&(n|=-256),0==i&&(128&this.s)!=(128&n)&&++i,(i>0||n!=this.s)&&(e[i++]=n);return e}function st(t){return 0==this.compareTo(t)}function ot(t){return this.compareTo(t)<0?this:t}function at(t){return this.compareTo(t)>0?this:t}function ut(t,e,n){var r,i,s=Math.min(t.t,this.t);for(r=0;s>r;++r)n[r]=e(this[r],t[r]);if(t.t<this.t){for(i=t.s&this.DM,r=s;r<this.t;++r)n[r]=e(this[r],i);n.t=this.t}else{for(i=this.s&this.DM,r=s;r<t.t;++r)n[r]=e(i,t[r]);n.t=t.t}n.s=e(this.s,t.s),n.clamp()}function ht(t,e){return t&e}function ct(t){var e=a();return this.bitwiseTo(t,ht,e),e}function ft(t,e){return t|e}function lt(t){var e=a();return this.bitwiseTo(t,ft,e),e}function dt(t,e){return t^e}function pt(t){var e=a();return this.bitwiseTo(t,dt,e),e}function gt(t,e){return t&~e}function yt(t){var e=a();return this.bitwiseTo(t,gt,e),e}function vt(){for(var t=a(),e=0;e<this.t;++e)t[e]=this.DM&~this[e];return t.t=this.t,t.s=~this.s,t}function mt(t){var e=a();return 0>t?this.rShiftTo(-t,e):this.lShiftTo(t,e),e}function St(t){var e=a();return 0>t?this.lShiftTo(-t,e):this.rShiftTo(t,e),e}function bt(t){if(0==t)return-1;var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e}function Et(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+bt(this[t]);return this.s<0?this.t*this.DB:-1}function wt(t){for(var e=0;0!=t;)t&=t-1,++e;return e}function Rt(){for(var t=0,e=this.s&this.DM,n=0;n<this.t;++n)t+=wt(this[n]^e);return t}function xt(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)}function At(t,e){var n=o.ONE.shiftLeft(t);return this.bitwiseTo(n,e,n),n}function Ft(t){return this.changeBit(t,ft)}function _t(t){return this.changeBit(t,gt)}function Kt(t){return this.changeBit(t,dt)}function Ut(t,e){for(var n=0,r=0,i=Math.min(t.t,this.t);i>n;)r+=this[n]+t[n],e[n++]=r&this.DM,r>>=this.DB;if(t.t<this.t){for(r+=t.s;n<this.t;)r+=this[n],e[n++]=r&this.DM,r>>=this.DB;r+=this.s}else{for(r+=this.s;n<t.t;)r+=t[n],e[n++]=r&this.DM,r>>=this.DB;r+=t.s}e.s=0>r?-1:0,r>0?e[n++]=r:-1>r&&(e[n++]=this.DV+r),e.t=n,e.clamp()}function Pt(t){var e=a();return this.addTo(t,e),e}function Ot(t){var e=a();return this.subTo(t,e),e}function Ct(t){var e=a();return this.multiplyTo(t,e),e}function Dt(){var t=a();return this.squareTo(t),t}function Jt(t){var e=a();return this.divRemTo(t,e,null),e}function Tt(t){var e=a();return this.divRemTo(t,null,e),e}function It(t){var e=a(),n=a();return this.divRemTo(t,e,n),new Array(e,n)}function Ht(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()}function jt(t,e){if(0!=t){for(;this.t<=e;)this[this.t++]=0;for(this[e]+=t;this[e]>=this.DV;)this[e]-=this.DV,++e>=this.t&&(this[this.t++]=0),++this[e]}}function Bt(){}function Nt(t){return t}function kt(t,e,n){t.multiplyTo(e,n)}function Vt(t,e){t.squareTo(e)}function Mt(t){return this.exp(t,new Bt)}function Lt(t,e,n){var r=Math.min(this.t+t.t,e);for(n.s=0,n.t=r;r>0;)n[--r]=0;var i;for(i=n.t-this.t;i>r;++r)n[r+this.t]=this.am(0,t[r],n,r,0,this.t);for(i=Math.min(t.t,e);i>r;++r)this.am(0,t[r],n,r,0,e-r);n.clamp()}function qt(t,e,n){--e;var r=n.t=this.t+t.t-e;for(n.s=0;--r>=0;)n[r]=0;for(r=Math.max(e-this.t,0);r<t.t;++r)n[this.t+r-e]=this.am(e-r,t[r],n,0,0,this.t+r-e);n.clamp(),n.drShiftTo(1,n)}function Wt(t){this.r2=a(),this.q3=a(),o.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}function zt(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var e=a();return t.copyTo(e),this.reduce(e),e}function Yt(t){return t}function Gt(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)}function Xt(t,e){t.squareTo(e),this.reduce(e)}function $t(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function Zt(t,e){var n,r,i=t.bitLength(),s=g(1);if(0>=i)return s;n=18>i?1:48>i?3:144>i?4:768>i?5:6,r=8>i?new D(e):e.isEven()?new Wt(e):new N(e);var o=new Array,u=3,h=n-1,c=(1<<n)-1;if(o[1]=r.convert(this),n>1){var f=a();for(r.sqrTo(o[1],f);c>=u;)o[u]=a(),r.mulTo(f,o[u-2],o[u]),u+=2}var l,d,p=t.t-1,y=!0,v=a();for(i=w(t[p])-1;p>=0;){for(i>=h?l=t[p]>>i-h&c:(l=(t[p]&(1<<i+1)-1)<<h-i,p>0&&(l|=t[p-1]>>this.DB+i-h)),u=n;0==(1&l);)l>>=1,--u;if((i-=u)<0&&(i+=this.DB,--p),y)o[l].copyTo(s),y=!1;else{for(;u>1;)r.sqrTo(s,v),r.sqrTo(v,s),u-=2;u>0?r.sqrTo(s,v):(d=s,s=v,v=d),r.mulTo(v,o[l],s)}for(;p>=0&&0==(t[p]&1<<i);)r.sqrTo(s,v),d=s,s=v,v=d,--i<0&&(i=this.DB-1,--p)}return r.revert(s)}function Qt(t){var e=this.s<0?this.negate():this.clone(),n=t.s<0?t.negate():t.clone();if(e.compareTo(n)<0){var r=e;e=n,n=r}var i=e.getLowestSetBit(),s=n.getLowestSetBit();if(0>s)return e;for(s>i&&(s=i),s>0&&(e.rShiftTo(s,e),n.rShiftTo(s,n));e.signum()>0;)(i=e.getLowestSetBit())>0&&e.rShiftTo(i,e),(i=n.getLowestSetBit())>0&&n.rShiftTo(i,n),e.compareTo(n)>=0?(e.subTo(n,e),e.rShiftTo(1,e)):(n.subTo(e,n),n.rShiftTo(1,n));return s>0&&n.lShiftTo(s,n),n}function te(t){if(0>=t)return 0;var e=this.DV%t,n=this.s<0?t-1:0;if(this.t>0)if(0==e)n=this[0]%t;else for(var r=this.t-1;r>=0;--r)n=(e*n+this[r])%t;return n}function ee(t){var e=t.isEven();if(this.isEven()&&e||0==t.signum())return o.ZERO;for(var n=t.clone(),r=this.clone(),i=g(1),s=g(0),a=g(0),u=g(1);0!=n.signum();){for(;n.isEven();)n.rShiftTo(1,n),e?(i.isEven()&&s.isEven()||(i.addTo(this,i),s.subTo(t,s)),i.rShiftTo(1,i)):s.isEven()||s.subTo(t,s),s.rShiftTo(1,s);for(;r.isEven();)r.rShiftTo(1,r),e?(a.isEven()&&u.isEven()||(a.addTo(this,a),u.subTo(t,u)),a.rShiftTo(1,a)):u.isEven()||u.subTo(t,u),u.rShiftTo(1,u);n.compareTo(r)>=0?(n.subTo(r,n),e&&i.subTo(a,i),s.subTo(u,s)):(r.subTo(n,r),e&&a.subTo(i,a),u.subTo(s,u))}return 0!=r.compareTo(o.ONE)?o.ZERO:u.compareTo(t)>=0?u.subtract(t):u.signum()<0?(u.addTo(t,u),u.signum()<0?u.add(t):u):u}function ne(t){var e,n=this.abs();if(1==n.t&&n[0]<=yr[yr.length-1]){for(e=0;e<yr.length;++e)if(n[0]==yr[e])return!0;return!1}if(n.isEven())return!1;for(e=1;e<yr.length;){for(var r=yr[e],i=e+1;i<yr.length&&vr>r;)r*=yr[i++];for(r=n.modInt(r);i>e;)if(r%yr[e++]==0)return!1}return n.millerRabin(t)}function re(t){var e=this.subtract(o.ONE),n=e.getLowestSetBit();if(0>=n)return!1;var r=e.shiftRight(n);t=t+1>>1,t>yr.length&&(t=yr.length);for(var i=a(),s=0;t>s;++s){i.fromInt(yr[Math.floor(Math.random()*yr.length)]);var u=i.modPow(r,this);if(0!=u.compareTo(o.ONE)&&0!=u.compareTo(e)){for(var h=1;h++<n&&0!=u.compareTo(e);)if(u=u.modPowInt(2,this),0==u.compareTo(o.ONE))return!1;if(0!=u.compareTo(e))return!1}}return!0}/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
		 */
	function ie(){this.i=0,this.j=0,this.S=new Array}function se(t){var e,n,r;for(e=0;256>e;++e)this.S[e]=e;for(n=0,e=0;256>e;++e)n=n+this.S[e]+t[e%t.length]&255,r=this.S[e],this.S[e]=this.S[n],this.S[n]=r;this.i=0,this.j=0}function oe(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]}function ae(){return new ie}function ue(t){Sr[br++]^=255&t,Sr[br++]^=t>>8&255,Sr[br++]^=t>>16&255,Sr[br++]^=t>>24&255,br>=Er&&(br-=Er)}function he(){ue((new Date).getTime())}function ce(){if(null==mr){for(he(),mr=ae(),mr.init(Sr),br=0;br<Sr.length;++br)Sr[br]=0;br=0}return mr.next()}function fe(t){var e;for(e=0;e<t.length;++e)t[e]=ce()}function le(){}/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
		 */
	function de(t,e){return new o(t,e)}function pe(t,e){if(e<t.length+11)return alert("Message too long for RSA"),null;for(var n=new Array,r=t.length-1;r>=0&&e>0;){var i=t.charCodeAt(r--);128>i?n[--e]=i:i>127&&2048>i?(n[--e]=63&i|128,n[--e]=i>>6|192):(n[--e]=63&i|128,n[--e]=i>>6&63|128,n[--e]=i>>12|224)}n[--e]=0;for(var s=new le,a=new Array;e>2;){for(a[0]=0;0==a[0];)s.nextBytes(a);n[--e]=a[0]}return n[--e]=2,n[--e]=0,new o(n)}function ge(t,e,n){for(var r="",i=0;r.length<e;)r+=n(String.fromCharCode.apply(String,t.concat([(4278190080&i)>>24,(16711680&i)>>16,(65280&i)>>8,255&i]))),i+=1;return r}function ye(t,e,n){if(t.length+2*Ar+2>e)throw"Message too long for RSA";var r,i="";for(r=0;r<e-t.length-2*Ar-2;r+=1)i+="\x00";var s=rstr_sha1("")+i+""+t,a=new Array(Ar);(new le).nextBytes(a);var u=ge(a,s.length,n||rstr_sha1),h=[];for(r=0;r<s.length;r+=1)h[r]=s.charCodeAt(r)^u.charCodeAt(r);var c=ge(h,a.length,rstr_sha1),f=[0];for(r=0;r<a.length;r+=1)f[r+1]=a[r]^c.charCodeAt(r);return new o(f.concat(h))}function ve(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}function me(t,e){this.isPublic=!0,"string"!=typeof t?(this.n=t,this.e=e):null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=de(t,16),this.e=parseInt(e,16)):alert("Invalid RSA public key")}function Se(t){return t.modPowInt(this.e,this.n)}function be(t){var e=pe(t,this.n.bitLength()+7>>3);if(null==e)return null;var n=this.doPublic(e);if(null==n)return null;var r=n.toString(16);return 0==(1&r.length)?r:"0"+r}function Ee(t,e){var n=ye(t,this.n.bitLength()+7>>3,e);if(null==n)return null;var r=this.doPublic(n);if(null==r)return null;var i=r.toString(16);return 0==(1&i.length)?i:"0"+i}/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
		 */
	function we(t,e){for(var n=t.toByteArray(),r=0;r<n.length&&0==n[r];)++r;if(n.length-r!=e-1||2!=n[r])return null;for(++r;0!=n[r];)if(++r>=n.length)return null;for(var i="";++r<n.length;){var s=255&n[r];128>s?i+=String.fromCharCode(s):s>191&&224>s?(i+=String.fromCharCode((31&s)<<6|63&n[r+1]),++r):(i+=String.fromCharCode((15&s)<<12|(63&n[r+1])<<6|63&n[r+2]),r+=2)}return i}function Re(t,e,n){for(var r="",i=0;r.length<e;)r+=n(t+String.fromCharCode.apply(String,[(4278190080&i)>>24,(16711680&i)>>16,(65280&i)>>8,255&i])),i+=1;return r}function xe(t,e,n){t=t.toByteArray();var r;for(r=0;r<t.length;r+=1)t[r]&=255;for(;t.length<e;)t.unshift(0);if(t=String.fromCharCode.apply(String,t),t.length<2*Ar+2)throw"Cipher too short";var r,i=t.substr(1,Ar),s=t.substr(Ar+1),o=Re(s,Ar,n||rstr_sha1),a=[];for(r=0;r<i.length;r+=1)a[r]=i.charCodeAt(r)^o.charCodeAt(r);var u=Re(String.fromCharCode.apply(String,a),t.length-Ar,rstr_sha1),h=[];for(r=0;r<s.length;r+=1)h[r]=s.charCodeAt(r)^u.charCodeAt(r);if(h=String.fromCharCode.apply(String,h),h.substr(0,Ar)!==rstr_sha1(""))throw"Hash mismatch";h=h.substr(Ar);var c=h.indexOf(""),f=-1!=c?h.substr(0,c).lastIndexOf("\x00"):-1;if(f+1!=c)throw"Malformed data";return h.substr(c+1)}function Ae(t,e,n){this.isPrivate=!0,"string"!=typeof t?(this.n=t,this.e=e,this.d=n):null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=de(t,16),this.e=parseInt(e,16),this.d=de(n,16)):alert("Invalid RSA private key")}function Fe(t,e,n,r,i,s,o,a){if(this.isPrivate=!0,null==t)throw"RSASetPrivateEx N == null";if(null==e)throw"RSASetPrivateEx E == null";if(0==t.length)throw"RSASetPrivateEx N.length == 0";if(0==e.length)throw"RSASetPrivateEx E.length == 0";null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=de(t,16),this.e=parseInt(e,16),this.d=de(n,16),this.p=de(r,16),this.q=de(i,16),this.dmp1=de(s,16),this.dmq1=de(o,16),this.coeff=de(a,16)):alert("Invalid RSA private key in RSASetPrivateEx")}function _e(t,e){var n=new le,r=t>>1;this.e=parseInt(e,16);for(var i=new o(e,16);;){for(;this.p=new o(t-r,1,n),0!=this.p.subtract(o.ONE).gcd(i).compareTo(o.ONE)||!this.p.isProbablePrime(10););for(;this.q=new o(r,1,n),0!=this.q.subtract(o.ONE).gcd(i).compareTo(o.ONE)||!this.q.isProbablePrime(10););if(this.p.compareTo(this.q)<=0){var s=this.p;this.p=this.q,this.q=s}var a=this.p.subtract(o.ONE),u=this.q.subtract(o.ONE),h=a.multiply(u);if(0==h.gcd(i).compareTo(o.ONE)){this.n=this.p.multiply(this.q),this.d=i.modInverse(h),this.dmp1=this.d.mod(a),this.dmq1=this.d.mod(u),this.coeff=this.q.modInverse(this.p);break}}}function Ke(t){if(null==this.p||null==this.q)return t.modPow(this.d,this.n);for(var e=t.mod(this.p).modPow(this.dmp1,this.p),n=t.mod(this.q).modPow(this.dmq1,this.q);e.compareTo(n)<0;)e=e.add(this.p);return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)}function Ue(t){var e=de(t,16),n=this.doPrivate(e);return null==n?null:we(n,this.n.bitLength()+7>>3)}function Pe(t,e){var n=de(t,16),r=this.doPrivate(n);return null==r?null:xe(r,this.n.bitLength()+7>>3,e)}/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
		 */
	function Oe(t,e){this.x=e,this.q=t}function Ce(t){return t==this?!0:this.q.equals(t.q)&&this.x.equals(t.x)}function De(){return this.x}function Je(){return new Oe(this.q,this.x.negate().mod(this.q))}function Te(t){return new Oe(this.q,this.x.add(t.toBigInteger()).mod(this.q))}function Ie(t){return new Oe(this.q,this.x.subtract(t.toBigInteger()).mod(this.q))}function He(t){return new Oe(this.q,this.x.multiply(t.toBigInteger()).mod(this.q))}function je(){return new Oe(this.q,this.x.square().mod(this.q))}function Be(t){return new Oe(this.q,this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))}function Ne(t,e,n,r){this.curve=t,this.x=e,this.y=n,null==r?this.z=o.ONE:this.z=r,this.zinv=null}function ke(){return null==this.zinv&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function Ve(){return null==this.zinv&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function Me(t){if(t==this)return!0;if(this.isInfinity())return t.isInfinity();if(t.isInfinity())return this.isInfinity();var e,n;return e=t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q),e.equals(o.ZERO)?(n=t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q),n.equals(o.ZERO)):!1}function Le(){return null==this.x&&null==this.y?!0:this.z.equals(o.ZERO)&&!this.y.toBigInteger().equals(o.ZERO)}function qe(){return new Ne(this.curve,this.x,this.y.negate(),this.z)}function We(t){if(this.isInfinity())return t;if(t.isInfinity())return this;var e=t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q),n=t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);if(o.ZERO.equals(n))return o.ZERO.equals(e)?this.twice():this.curve.getInfinity();var r=new o("3"),i=this.x.toBigInteger(),s=this.y.toBigInteger(),a=(t.x.toBigInteger(),t.y.toBigInteger(),n.square()),u=a.multiply(n),h=i.multiply(a),c=e.square().multiply(this.z),f=c.subtract(h.shiftLeft(1)).multiply(t.z).subtract(u).multiply(n).mod(this.curve.q),l=h.multiply(r).multiply(e).subtract(s.multiply(u)).subtract(c.multiply(e)).multiply(t.z).add(e.multiply(u)).mod(this.curve.q),d=u.multiply(this.z).multiply(t.z).mod(this.curve.q);return new Ne(this.curve,this.curve.fromBigInteger(f),this.curve.fromBigInteger(l),d)}function ze(){if(this.isInfinity())return this;if(0==this.y.toBigInteger().signum())return this.curve.getInfinity();var t=new o("3"),e=this.x.toBigInteger(),n=this.y.toBigInteger(),r=n.multiply(this.z),i=r.multiply(n).mod(this.curve.q),s=this.curve.a.toBigInteger(),a=e.square().multiply(t);o.ZERO.equals(s)||(a=a.add(this.z.square().multiply(s))),a=a.mod(this.curve.q);var u=a.square().subtract(e.shiftLeft(3).multiply(i)).shiftLeft(1).multiply(r).mod(this.curve.q),h=a.multiply(t).multiply(e).subtract(i.shiftLeft(1)).shiftLeft(2).multiply(i).subtract(a.square().multiply(a)).mod(this.curve.q),c=r.square().multiply(r).shiftLeft(3).mod(this.curve.q);return new Ne(this.curve,this.curve.fromBigInteger(u),this.curve.fromBigInteger(h),c)}function Ye(t){if(this.isInfinity())return this;if(0==t.signum())return this.curve.getInfinity();var e,n=t,r=n.multiply(new o("3")),i=this.negate(),s=this;for(e=r.bitLength()-2;e>0;--e){s=s.twice();var a=r.testBit(e),u=n.testBit(e);a!=u&&(s=s.add(a?this:i))}return s}function Ge(t,e,n){var r;r=t.bitLength()>n.bitLength()?t.bitLength()-1:n.bitLength()-1;for(var i=this.curve.getInfinity(),s=this.add(e);r>=0;)i=i.twice(),t.testBit(r)?i=n.testBit(r)?i.add(s):i.add(this):n.testBit(r)&&(i=i.add(e)),--r;return i}function Xe(t,e,n){this.q=t,this.a=this.fromBigInteger(e),this.b=this.fromBigInteger(n),this.infinity=new Ne(this,null,null)}function $e(){return this.q}function Ze(){return this.a}function Qe(){return this.b}function tn(t){return t==this?!0:this.q.equals(t.q)&&this.a.equals(t.a)&&this.b.equals(t.b)}function en(){return this.infinity}function nn(t){return new Oe(this.q,t)}function rn(t){switch(parseInt(t.substr(0,2),16)){case 0:return this.infinity;case 2:case 3:return null;case 4:case 6:case 7:var e=(t.length-2)/2,n=t.substr(2,e),r=t.substr(e+2,e);return new Ne(this,this.fromBigInteger(new o(n,16)),this.fromBigInteger(new o(r,16)));default:return null}}function sn(t){for(var e=new Array,n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function on(t){for(var e="",n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e}function an(t){for(var e="",n=0;n<t.length;n++){var r=t[n].toString(16);1==r.length&&(r="0"+r),e+=r}return e}function un(t){return an(sn(t))}function hn(t){return r(un(t))}function cn(t){return ln(r(un(t)))}function fn(t){return on(s(dn(t)))}function ln(t){return t=t.replace(/\=/g,""),t=t.replace(/\+/g,"-"),t=t.replace(/\//g,"_")}function dn(t){return t.length%4==2?t+="==":t.length%4==3&&(t+="="),t=t.replace(/-/g,"+"),t=t.replace(/_/g,"/")}function pn(t){return t.length%2==1&&(t="0"+t),ln(r(t))}function gn(t){return i(dn(t))}function yn(t){return r(wn(xn(t)))}function vn(t){return decodeURIComponent(Rn(i(t)))}function mn(t){return wn(xn(t))}function Sn(t){return decodeURIComponent(Rn(t))}function bn(t){for(var e="",n=0;n<t.length-1;n+=2)e+=String.fromCharCode(parseInt(t.substr(n,2),16));return e}function En(t){for(var e="",n=0;n<t.length;n++)e+=("0"+t.charCodeAt(n).toString(16)).slice(-2);return e}function wn(t){return t.replace(/%/g,"")}function Rn(t){return t.replace(/(..)/g,"%$1")}function xn(t){for(var e=encodeURIComponent(t),n="",r=0;r<e.length;r++)"%"==e[r]?(n+=e.substr(r,3),r+=2):n=n+"%"+un(e[r]);return n}function An(t){return t=t.replace(/\r\n/gm,"\n")}function Fn(t){return t=t.replace(/\r\n/gm,"\n"),t=t.replace(/\n/gm,"\r\n")}function _n(t){t=t.replace(/^\s*\[\s*/,""),t=t.replace(/\s*\]\s*$/,""),t=t.replace(/\s*/g,"");try{var e=t.split(/,/).map(function(t,e,n){var r=parseInt(t);if(0>r||r>255)throw"integer not in range 0-255";var i=("00"+r.toString(16)).slice(-2);return i}).join("");return e}catch(n){throw"malformed integer array string: "+n}}/*! rsapem-1.1.js (c) 2012 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	function Kn(t){var e=t;return e=e.replace("-----BEGIN RSA PRIVATE KEY-----",""),e=e.replace("-----END RSA PRIVATE KEY-----",""),e=e.replace(/[ \n]+/g,"")}function Un(t){var e=new Array,n=_r.getStartPosOfV_AtObj(t,0),r=_r.getPosOfNextSibling_AtObj(t,n),i=_r.getPosOfNextSibling_AtObj(t,r),s=_r.getPosOfNextSibling_AtObj(t,i),o=_r.getPosOfNextSibling_AtObj(t,s),a=_r.getPosOfNextSibling_AtObj(t,o),u=_r.getPosOfNextSibling_AtObj(t,a),h=_r.getPosOfNextSibling_AtObj(t,u),c=_r.getPosOfNextSibling_AtObj(t,h);return e.push(n,r,i,s,o,a,u,h,c),e}function Pn(t){var e=Un(t),n=_r.getHexOfV_AtObj(t,e[0]),r=_r.getHexOfV_AtObj(t,e[1]),i=_r.getHexOfV_AtObj(t,e[2]),s=_r.getHexOfV_AtObj(t,e[3]),o=_r.getHexOfV_AtObj(t,e[4]),a=_r.getHexOfV_AtObj(t,e[5]),u=_r.getHexOfV_AtObj(t,e[6]),h=_r.getHexOfV_AtObj(t,e[7]),c=_r.getHexOfV_AtObj(t,e[8]),f=new Array;return f.push(n,r,i,s,o,a,u,h,c),f}function On(t){var e=Pn(t);this.setPrivateEx(e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8])}function Cn(t){var e=Kn(t),n=i(e),r=Pn(n);this.setPrivateEx(r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8])}function Dn(t,e){for(var n="",r=e/4-t.length,i=0;r>i;i++)n+="0";return n+t}function Jn(t,e){var n=function(t){return KJUR.crypto.Util.hashString(t,e)},r=n(t);return this.signWithMessageHash(r,e)}function Tn(t,e){var n=KJUR.crypto.Util.getPaddedDigestInfoHex(t,e,this.n.bitLength()),r=de(n,16),i=this.doPrivate(r),s=i.toString(16);return Dn(s,this.n.bitLength())}function In(t){return Jn.call(this,t,"sha1")}function Hn(t){return Jn.call(this,t,"sha256")}function jn(t,e,n){for(var r="",i=0;r.length<e;)r+=bn(n(En(t+String.fromCharCode.apply(String,[(4278190080&i)>>24,(16711680&i)>>16,(65280&i)>>8,255&i])))),i+=1;return r}function Bn(t,e,n){var r=function(t){return KJUR.crypto.Util.hashHex(t,e)},i=r(En(t));return void 0===n&&(n=-1),this.signWithMessageHashPSS(i,e,n)}function Nn(t,e,n){var r,i=bn(t),s=i.length,a=this.n.bitLength()-1,u=Math.ceil(a/8),h=function(t){return KJUR.crypto.Util.hashHex(t,e)};if(-1===n||void 0===n)n=s;else if(-2===n)n=u-s-2;else if(-2>n)throw"invalid salt length";if(s+n+2>u)throw"data too long";var c="";n>0&&(c=new Array(n),(new le).nextBytes(c),c=String.fromCharCode.apply(String,c));var f=bn(h(En("\x00\x00\x00\x00\x00\x00\x00\x00"+i+c))),l=[];for(r=0;u-n-s-2>r;r+=1)l[r]=0;var d=String.fromCharCode.apply(String,l)+""+c,p=jn(f,d.length,h),g=[];for(r=0;r<d.length;r+=1)g[r]=d.charCodeAt(r)^p.charCodeAt(r);var y=65280>>8*u-a&255;for(g[0]&=~y,r=0;s>r;r++)g.push(f.charCodeAt(r));return g.push(188),Dn(this.doPrivate(new o(g)).toString(16),this.n.bitLength())}function kn(t,e,n){var r=new ve;r.setPublic(e,n);var i=r.doPublic(t);return i}function Vn(t,e,n){var r=kn(t,e,n),i=r.toString(16).replace(/^1f+00/,"");return i}function Mn(t){for(var e in KJUR.crypto.Util.DIGESTINFOHEAD){var n=KJUR.crypto.Util.DIGESTINFOHEAD[e],r=n.length;if(t.substring(0,r)==n){var i=[e,t.substring(r)];return i}}return[]}function Ln(t,e,n,r){var i=Vn(e,n,r),s=Mn(i);if(0==s.length)return!1;var o=s[0],a=s[1],u=function(t){return KJUR.crypto.Util.hashString(t,o)},h=u(t);return a==h}function qn(t,e){var n=de(t,16),r=Ln(e,n,this.n.toString(16),this.e.toString(16));return r}function Wn(t,e){e=e.replace(Dr,""),e=e.replace(/[ \n]+/g,"");var n=de(e,16);if(n.bitLength()>this.n.bitLength())return 0;var r=this.doPublic(n),i=r.toString(16).replace(/^1f+00/,""),s=Mn(i);if(0==s.length)return!1;var o=s[0],a=s[1],u=function(t){return KJUR.crypto.Util.hashString(t,o)},h=u(t);return a==h}function zn(t,e){e=e.replace(Dr,""),e=e.replace(/[ \n]+/g,"");var n=de(e,16);if(n.bitLength()>this.n.bitLength())return 0;var r=this.doPublic(n),i=r.toString(16).replace(/^1f+00/,""),s=Mn(i);if(0==s.length)return!1;var o=(s[0],s[1]);return o==t}function Yn(t,e,n,r){var i=function(t){return KJUR.crypto.Util.hashHex(t,n)},s=i(En(t));return void 0===r&&(r=-1),this.verifyWithMessageHashPSS(s,e,n,r)}function Gn(t,e,n,r){var i=new o(e,16);if(i.bitLength()>this.n.bitLength())return!1;var s,a=function(t){return KJUR.crypto.Util.hashHex(t,n)},u=bn(t),h=u.length,c=this.n.bitLength()-1,f=Math.ceil(c/8);if(-1===r||void 0===r)r=h;else if(-2===r)r=f-h-2;else if(-2>r)throw"invalid salt length";if(h+r+2>f)throw"data too long";var l=this.doPublic(i).toByteArray();for(s=0;s<l.length;s+=1)l[s]&=255;for(;l.length<f;)l.unshift(0);if(188!==l[f-1])throw"encoded message does not end in 0xbc";l=String.fromCharCode.apply(String,l);var d=l.substr(0,f-h-1),p=l.substr(d.length,h),g=65280>>8*f-c&255;if(0!==(d.charCodeAt(0)&g))throw"bits beyond keysize not zero";var y=jn(p,d.length,a),v=[];for(s=0;s<d.length;s+=1)v[s]=d.charCodeAt(s)^y.charCodeAt(s);v[0]&=~g;var m=f-h-r-2;for(s=0;m>s;s+=1)if(0!==v[s])throw"leftmost octets not zero";if(1!==v[m])throw"0x01 marker not found";return p===bn(a(En("\x00\x00\x00\x00\x00\x00\x00\x00"+u+String.fromCharCode.apply(String,v.slice(-r)))))}/*! x509-1.1.9.js (c) 2012-2016 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	function Xn(){this.subjectPublicKeyRSA=null,this.subjectPublicKeyRSA_hN=null,this.subjectPublicKeyRSA_hE=null,this.hex=null,this.getSerialNumberHex=function(){return _r.getDecendantHexVByNthList(this.hex,0,[0,1])},this.getSignatureAlgorithmField=function(){var t=_r.getDecendantHexVByNthList(this.hex,0,[0,2,0]),e=KJUR.asn1.ASN1Util.oidHexToInt(t),n=KJUR.asn1.x509.OID.oid2name(e);return n},this.getIssuerHex=function(){return _r.getDecendantHexTLVByNthList(this.hex,0,[0,3])},this.getIssuerString=function(){return Xn.hex2dn(_r.getDecendantHexTLVByNthList(this.hex,0,[0,3]))},this.getSubjectHex=function(){return _r.getDecendantHexTLVByNthList(this.hex,0,[0,5])},this.getSubjectString=function(){return Xn.hex2dn(_r.getDecendantHexTLVByNthList(this.hex,0,[0,5]))},this.getNotBefore=function(){var t=_r.getDecendantHexVByNthList(this.hex,0,[0,4,0]);return t=t.replace(/(..)/g,"%$1"),t=decodeURIComponent(t)},this.getNotAfter=function(){var t=_r.getDecendantHexVByNthList(this.hex,0,[0,4,1]);return t=t.replace(/(..)/g,"%$1"),t=decodeURIComponent(t)},this.readCertPEM=function(t){var e=Xn.pemToHex(t),n=Xn.getPublicKeyHexArrayFromCertHex(e),r=new ve;r.setPublic(n[0],n[1]),this.subjectPublicKeyRSA=r,this.subjectPublicKeyRSA_hN=n[0],this.subjectPublicKeyRSA_hE=n[1],this.hex=e},this.readCertPEMWithoutRSAInit=function(t){var e=Xn.pemToHex(t),n=Xn.getPublicKeyHexArrayFromCertHex(e);this.subjectPublicKeyRSA.setPublic(n[0],n[1]),this.subjectPublicKeyRSA_hN=n[0],this.subjectPublicKeyRSA_hE=n[1],this.hex=e},this.getInfo=function(){var t="Basic Fields\n";t+="  serial number: "+this.getSerialNumberHex()+"\n",t+="  signature algorithm: "+this.getSignatureAlgorithmField()+"\n",t+="  issuer: "+this.getIssuerString()+"\n",t+="  notBefore: "+this.getNotBefore()+"\n",t+="  notAfter: "+this.getNotAfter()+"\n",t+="  subject: "+this.getSubjectString()+"\n",t+="  subject public key info: \n";var e=Xn.getSubjectPublicKeyInfoPosFromCertHex(this.hex),n=_r.getHexOfTLV_AtObj(this.hex,e),r=Cr.getKey(n,null,"pkcs8pub");r instanceof ve&&(t+="    key algorithm: RSA\n",t+="    n="+r.n.toString(16).substr(0,16)+"...\n",t+="    e="+r.e.toString(16)+"\n"),t+="X509v3 Extensions:\n";for(var i=Xn.getV3ExtInfoListOfCertHex(this.hex),s=0;s<i.length;s++){var o=i[s],a=KJUR.asn1.x509.OID.oid2name(o.oid);""===a&&(a=o.oid);var u="";if(o.critical===!0&&(u="CRITICAL"),t+="  "+a+" "+u+":\n","basicConstraints"===a){var h=Xn.getExtBasicConstraints(this.hex);void 0===h.cA?t+="    {}\n":(t+="    cA=true",void 0!==h.pathLen&&(t+=", pathLen="+h.pathLen),t+="\n")}else if("keyUsage"===a)t+="    "+Xn.getExtKeyUsageString(this.hex)+"\n";else if("subjectKeyIdentifier"===a)t+="    "+Xn.getExtSubjectKeyIdentifier(this.hex)+"\n";else if("authorityKeyIdentifier"===a){var c=Xn.getExtAuthorityKeyIdentifier(this.hex);void 0!==c.kid&&(t+="    kid="+c.kid+"\n")}else if("extKeyUsage"===a){var f=Xn.getExtExtKeyUsageName(this.hex);t+="    "+f.join(", ")+"\n"}else if("subjectAltName"===a){var l=Xn.getExtSubjectAltName(this.hex);t+="    "+l.join(", ")+"\n"}else if("cRLDistributionPoints"===a){var d=Xn.getExtCRLDistributionPointsURI(this.hex);t+="    "+d+"\n"}else if("authorityInfoAccess"===a){var p=Xn.getExtAIAInfo(this.hex);void 0!==p.ocsp&&(t+="    ocsp: "+p.ocsp.join(",")+"\n"),void 0!==p.caissuer&&(t+="    caissuer: "+p.caissuer.join(",")+"\n")}}return t+="signature algorithm: "+Xn.getSignatureAlgorithmName(this.hex)+"\n",t+="signature: "+Xn.getSignatureValueHex(this.hex).substr(0,16)+"...\n"}}/*! nodeutil-1.0.0 (c) 2015 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	function $n(t){return n(18).readFileSync(t,"utf8")}function Zn(t){var e=n(13),r=n(18);return e.rstrtohex(r.readFileSync(t,"binary"))}function Qn(t){var e=n(18);return e.readFileSync(t,"binary")}function tr(t,e){var r=n(18);r.writeFileSync(t,e,"binary")}function er(t,e){var r=n(18),i=n(13),s=i.hextorstr(e);r.writeFileSync(t,s,"binary")}var nr={};nr.userAgent=!1;var rr={};if("undefined"==typeof ir||!ir)var ir={};ir.namespace=function(){var t,e,n,r=arguments,i=null;for(t=0;t<r.length;t+=1)for(n=(""+r[t]).split("."),i=ir,e="YAHOO"==n[0]?1:0;e<n.length;e+=1)i[n[e]]=i[n[e]]||{},i=i[n[e]];return i},ir.log=function(t,e,n){var r=ir.widget.Logger;return r&&r.log?r.log(t,e,n):!1},ir.register=function(t,e,n){var r,i,s,o,a,u=ir.env.modules;for(u[t]||(u[t]={versions:[],builds:[]}),r=u[t],i=n.version,s=n.build,o=ir.env.listeners,r.name=t,r.version=i,r.build=s,r.versions.push(i),r.builds.push(s),r.mainClass=e,a=0;a<o.length;a+=1)o[a](r);e?(e.VERSION=i,e.BUILD=s):ir.log("mainClass is undefined for module "+t,"warn")},ir.env=ir.env||{modules:[],listeners:[]},ir.env.getVersion=function(t){return ir.env.modules[t]||null},ir.env.parseUA=function(t){var e,n=function(t){var e=0;return parseFloat(t.replace(/\./g,function(){return 1==e++?"":"."}))},r=nr,i={ie:0,opera:0,gecko:0,webkit:0,chrome:0,mobile:null,air:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,webos:0,caja:r&&r.cajaVersion,secure:!1,os:null},s=t||nr&&nr.userAgent,o=rr&&rr.location,a=o&&o.href;return i.secure=a&&0===a.toLowerCase().indexOf("https"),s&&(/windows|win32/i.test(s)?i.os="windows":/macintosh/i.test(s)?i.os="macintosh":/rhino/i.test(s)&&(i.os="rhino"),/KHTML/.test(s)&&(i.webkit=1),e=s.match(/AppleWebKit\/([^\s]*)/),e&&e[1]&&(i.webkit=n(e[1]),/ Mobile\//.test(s)?(i.mobile="Apple",e=s.match(/OS ([^\s]*)/),e&&e[1]&&(e=n(e[1].replace("_","."))),i.ios=e,i.ipad=i.ipod=i.iphone=0,e=s.match(/iPad|iPod|iPhone/),e&&e[0]&&(i[e[0].toLowerCase()]=i.ios)):(e=s.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/),e&&(i.mobile=e[0]),/webOS/.test(s)&&(i.mobile="WebOS",e=s.match(/webOS\/([^\s]*);/),e&&e[1]&&(i.webos=n(e[1]))),/ Android/.test(s)&&(i.mobile="Android",e=s.match(/Android ([^\s]*);/),e&&e[1]&&(i.android=n(e[1])))),e=s.match(/Chrome\/([^\s]*)/),e&&e[1]?i.chrome=n(e[1]):(e=s.match(/AdobeAIR\/([^\s]*)/),e&&(i.air=e[0]))),i.webkit||(e=s.match(/Opera[\s\/]([^\s]*)/),e&&e[1]?(i.opera=n(e[1]),e=s.match(/Version\/([^\s]*)/),e&&e[1]&&(i.opera=n(e[1])),e=s.match(/Opera Mini[^;]*/),e&&(i.mobile=e[0])):(e=s.match(/MSIE\s([^;]*)/),e&&e[1]?i.ie=n(e[1]):(e=s.match(/Gecko\/([^\s]*)/),e&&(i.gecko=1,e=s.match(/rv:([^\s\)]*)/),e&&e[1]&&(i.gecko=n(e[1]))))))),i},ir.env.ua=ir.env.parseUA(),function(){if(ir.namespace("util","widget","example"),"undefined"!=typeof YAHOO_config){var t,e=YAHOO_config.listener,n=ir.env.listeners,r=!0;if(e){for(t=0;t<n.length;t++)if(n[t]==e){r=!1;break}r&&n.push(e)}}}(),ir.lang=ir.lang||{},function(){var t=ir.lang,e=Object.prototype,n="[object Array]",r="[object Function]",i="[object Object]",s=[],o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;","`":"&#x60;"},a=["toString","valueOf"],u={isArray:function(t){return e.toString.apply(t)===n},isBoolean:function(t){return"boolean"==typeof t},isFunction:function(t){return"function"==typeof t||e.toString.apply(t)===r},isNull:function(t){return null===t},isNumber:function(t){return"number"==typeof t&&isFinite(t)},isObject:function(e){return e&&("object"==typeof e||t.isFunction(e))||!1},isString:function(t){return"string"==typeof t},isUndefined:function(t){return"undefined"==typeof t},_IEEnumFix:ir.env.ua.ie?function(n,r){var i,s,o;for(i=0;i<a.length;i+=1)s=a[i],o=r[s],t.isFunction(o)&&o!=e[s]&&(n[s]=o)}:function(){},escapeHTML:function(t){return t.replace(/[&<>"'\/`]/g,function(t){return o[t]})},extend:function(n,r,i){if(!r||!n)throw new Error("extend failed, please check that all dependencies are included.");var s,o=function(){};if(o.prototype=r.prototype,n.prototype=new o,n.prototype.constructor=n,n.superclass=r.prototype,r.prototype.constructor==e.constructor&&(r.prototype.constructor=r),i){for(s in i)t.hasOwnProperty(i,s)&&(n.prototype[s]=i[s]);t._IEEnumFix(n.prototype,i)}},augmentObject:function(e,n){if(!n||!e)throw new Error("Absorb failed, verify dependencies.");var r,i,s=arguments,o=s[2];if(o&&o!==!0)for(r=2;r<s.length;r+=1)e[s[r]]=n[s[r]];else{for(i in n)!o&&i in e||(e[i]=n[i]);t._IEEnumFix(e,n)}return e},augmentProto:function(e,n){if(!n||!e)throw new Error("Augment failed, verify dependencies.");var r,i=[e.prototype,n.prototype];for(r=2;r<arguments.length;r+=1)i.push(arguments[r]);return t.augmentObject.apply(this,i),e},dump:function(e,n){var r,i,s=[],o="{...}",a="f(){...}",u=", ",h=" => ";if(!t.isObject(e))return e+"";if(e instanceof Date||"nodeType"in e&&"tagName"in e)return e;if(t.isFunction(e))return a;if(n=t.isNumber(n)?n:3,t.isArray(e)){for(s.push("["),r=0,i=e.length;i>r;r+=1)t.isObject(e[r])?s.push(n>0?t.dump(e[r],n-1):o):s.push(e[r]),s.push(u);s.length>1&&s.pop(),s.push("]")}else{s.push("{");for(r in e)t.hasOwnProperty(e,r)&&(s.push(r+h),t.isObject(e[r])?s.push(n>0?t.dump(e[r],n-1):o):s.push(e[r]),s.push(u));s.length>1&&s.pop(),s.push("}")}return s.join("")},substitute:function(e,n,r,s){for(var o,a,u,h,c,f,l,d,p,g=[],y=e.length,v="dump",m=" ",S="{",b="}";(o=e.lastIndexOf(S,y),!(0>o))&&(a=e.indexOf(b,o),!(o+1>a));)l=e.substring(o+1,a),h=l,f=null,u=h.indexOf(m),u>-1&&(f=h.substring(u+1),h=h.substring(0,u)),c=n[h],r&&(c=r(h,c,f)),t.isObject(c)?t.isArray(c)?c=t.dump(c,parseInt(f,10)):(f=f||"",d=f.indexOf(v),d>-1&&(f=f.substring(4)),p=c.toString(),c=p===i||d>-1?t.dump(c,parseInt(f,10)):p):t.isString(c)||t.isNumber(c)||(c="~-"+g.length+"-~",g[g.length]=l),e=e.substring(0,o)+c+e.substring(a+1),s===!1&&(y=o-1);for(o=g.length-1;o>=0;o-=1)e=e.replace(new RegExp("~-"+o+"-~"),"{"+g[o]+"}","g");return e},trim:function(t){try{return t.replace(/^\s+|\s+$/g,"")}catch(e){return t}},merge:function(){var e,n={},r=arguments,i=r.length;for(e=0;i>e;e+=1)t.augmentObject(n,r[e],!0);return n},later:function(e,n,r,i,o){e=e||0,n=n||{};var a,u,h=r,c=i;if(t.isString(r)&&(h=n[r]),!h)throw new TypeError("method undefined");return t.isUndefined(i)||t.isArray(c)||(c=[i]),a=function(){h.apply(n,c||s)},u=o?setInterval(a,e):setTimeout(a,e),{interval:o,cancel:function(){this.interval?clearInterval(u):clearTimeout(u)}}},isValue:function(e){return t.isObject(e)||t.isString(e)||t.isNumber(e)||t.isBoolean(e)}};t.hasOwnProperty=e.hasOwnProperty?function(t,e){return t&&t.hasOwnProperty&&t.hasOwnProperty(e)}:function(e,n){return!t.isUndefined(e[n])&&e.constructor.prototype[n]!==e[n]},u.augmentObject(t,u,!0),ir.util.Lang=t,t.augment=t.augmentProto,ir.augment=t.augmentProto,ir.extend=t.extend}(),ir.register("yahoo",ir,{version:"2.9.0",build:"2800"});/*! CryptoJS v3.1.2 core-fix.js
		 * code.google.com/p/crypto-js
		 * (c) 2009-2013 by Jeff Mott. All rights reserved.
		 * code.google.com/p/crypto-js/wiki/License
		 * THIS IS FIX of 'core.js' to fix Hmac issue.
		 * https://code.google.com/p/crypto-js/issues/detail?id=84
		 * https://crypto-js.googlecode.com/svn-history/r667/branches/3.x/src/core.js
		 */
	var sr=sr||function(t,e){var n={},r=n.lib={},i=r.Base=function(){function t(){}return{extend:function(e){t.prototype=this;var n=new t;return e&&n.mixIn(e),n.hasOwnProperty("init")||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),s=r.WordArray=i.extend({init:function(t,n){t=this.words=t||[],n!=e?this.sigBytes=n:this.sigBytes=4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,n=t.words,r=this.sigBytes,i=t.sigBytes;if(this.clamp(),r%4)for(var s=0;i>s;s++){var o=n[s>>>2]>>>24-s%4*8&255;e[r+s>>>2]|=o<<24-(r+s)%4*8}else for(var s=0;i>s;s+=4)e[r+s>>>2]=n[s>>>2];return this.sigBytes+=i,this},clamp:function(){var e=this.words,n=this.sigBytes;e[n>>>2]&=4294967295<<32-n%4*8,e.length=t.ceil(n/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var n=[],r=0;e>r;r+=4)n.push(4294967296*t.random()|0);return new s.init(n,e)}}),o=n.enc={},a=o.Hex={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;n>i;i++){var s=e[i>>>2]>>>24-i%4*8&255;r.push((s>>>4).toString(16)),r.push((15&s).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;e>r;r+=2)n[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new s.init(n,e/2)}},u=o.Latin1={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;n>i;i++){var s=e[i>>>2]>>>24-i%4*8&255;r.push(String.fromCharCode(s))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;e>r;r++)n[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new s.init(n,e)}},h=o.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},c=r.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=h.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var n=this._data,r=n.words,i=n.sigBytes,o=this.blockSize,a=4*o,u=i/a;u=e?t.ceil(u):t.max((0|u)-this._minBufferSize,0);var h=u*o,c=t.min(4*h,i);if(h){for(var f=0;h>f;f+=o)this._doProcessBlock(r,f);var l=r.splice(0,h);n.sigBytes-=c}return new s.init(l,c)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),f=(r.Hasher=c.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){c.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,n){return new t.init(n).finalize(e)}},_createHmacHelper:function(t){return function(e,n){return new f.HMAC.init(t,n).finalize(e)}}}),n.algo={});return n}(Math);!function(t){var e=sr,n=e.lib,r=n.Base,i=n.WordArray,e=e.x64={};e.Word=r.extend({init:function(t,e){this.high=t,this.low=e}}),e.WordArray=r.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n!=t?n:8*e.length},toX32:function(){for(var t=this.words,e=t.length,n=[],r=0;e>r;r++){var s=t[r];n.push(s.high),n.push(s.low)}return i.create(n,this.sigBytes)},clone:function(){for(var t=r.clone.call(this),e=t.words=this.words.slice(0),n=e.length,i=0;n>i;i++)e[i]=e[i].clone();return t}})}(),sr.lib.Cipher||function(t){var e=sr,n=e.lib,r=n.Base,i=n.WordArray,s=n.BufferedBlockAlgorithm,o=e.enc.Base64,a=e.algo.EvpKDF,u=n.Cipher=s.extend({cfg:r.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,n){this.cfg=this.cfg.extend(n),this._xformMode=t,this._key=e,this.reset()},reset:function(){s.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(t){return{encrypt:function(e,n,r){return("string"==typeof n?p:d).encrypt(t,e,n,r)},decrypt:function(e,n,r){return("string"==typeof n?p:d).decrypt(t,e,n,r)}}}});n.StreamCipher=u.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var h=e.mode={},c=function(e,n,r){var i=this._iv;i?this._iv=t:i=this._prevBlock;for(var s=0;r>s;s++)e[n+s]^=i[s]},f=(n.BlockCipherMode=r.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}})).extend();f.Encryptor=f.extend({processBlock:function(t,e){var n=this._cipher,r=n.blockSize;c.call(this,t,e,r),n.encryptBlock(t,e),this._prevBlock=t.slice(e,e+r)}}),f.Decryptor=f.extend({processBlock:function(t,e){var n=this._cipher,r=n.blockSize,i=t.slice(e,e+r);n.decryptBlock(t,e),c.call(this,t,e,r),this._prevBlock=i}}),h=h.CBC=f,f=(e.pad={}).Pkcs7={pad:function(t,e){for(var n=4*e,n=n-t.sigBytes%n,r=n<<24|n<<16|n<<8|n,s=[],o=0;n>o;o+=4)s.push(r);n=i.create(s,n),t.concat(n)},unpad:function(t){t.sigBytes-=255&t.words[t.sigBytes-1>>>2]}},n.BlockCipher=u.extend({cfg:u.cfg.extend({mode:h,padding:f}),reset:function(){u.reset.call(this);var t=this.cfg,e=t.iv,t=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=t.createEncryptor;else n=t.createDecryptor,this._minBufferSize=1;this._mode=n.call(t,this,e&&e.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else e=this._process(!0),t.unpad(e);return e},blockSize:4});var l=n.CipherParams=r.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),h=(e.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext;return t=t.salt,(t?i.create([1398893684,1701076831]).concat(t).concat(e):e).toString(o)},parse:function(t){t=o.parse(t);var e=t.words;if(1398893684==e[0]&&1701076831==e[1]){var n=i.create(e.slice(2,4));e.splice(0,4),t.sigBytes-=16}return l.create({ciphertext:t,salt:n})}},d=n.SerializableCipher=r.extend({cfg:r.extend({format:h}),encrypt:function(t,e,n,r){r=this.cfg.extend(r);var i=t.createEncryptor(n,r);return e=i.finalize(e),i=i.cfg,l.create({ciphertext:e,key:n,iv:i.iv,algorithm:t,mode:i.mode,padding:i.padding,blockSize:t.blockSize,formatter:r.format})},decrypt:function(t,e,n,r){return r=this.cfg.extend(r),e=this._parse(e,r.format),t.createDecryptor(n,r).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),e=(e.kdf={}).OpenSSL={execute:function(t,e,n,r){return r||(r=i.random(8)),t=a.create({keySize:e+n}).compute(t,r),n=i.create(t.words.slice(e),4*n),t.sigBytes=4*e,l.create({key:t,iv:n,salt:r})}},p=n.PasswordBasedCipher=d.extend({cfg:d.cfg.extend({kdf:e}),encrypt:function(t,e,n,r){return r=this.cfg.extend(r),n=r.kdf.execute(n,t.keySize,t.ivSize),r.iv=n.iv,t=d.encrypt.call(this,t,e,n.key,r),t.mixIn(n),t},decrypt:function(t,e,n,r){return r=this.cfg.extend(r),e=this._parse(e,r.format),n=r.kdf.execute(n,t.keySize,t.ivSize,e.salt),r.iv=n.iv,d.decrypt.call(this,t,e,n.key,r)}})}(),function(){for(var t=sr,e=t.lib.BlockCipher,n=t.algo,r=[],i=[],s=[],o=[],a=[],u=[],h=[],c=[],f=[],l=[],d=[],p=0;256>p;p++)d[p]=128>p?p<<1:p<<1^283;for(var g=0,y=0,p=0;256>p;p++){var v=y^y<<1^y<<2^y<<3^y<<4,v=v>>>8^255&v^99;r[g]=v,i[v]=g;var m=d[g],S=d[m],b=d[S],E=257*d[v]^16843008*v;s[g]=E<<24|E>>>8,o[g]=E<<16|E>>>16,a[g]=E<<8|E>>>24,u[g]=E,E=16843009*b^65537*S^257*m^16843008*g,h[v]=E<<24|E>>>8,c[v]=E<<16|E>>>16,f[v]=E<<8|E>>>24,l[v]=E,g?(g=m^d[d[d[b^m]]],y^=d[d[y]]):g=y=1}var w=[0,1,2,4,8,16,32,64,128,27,54],n=n.AES=e.extend({_doReset:function(){for(var t=this._key,e=t.words,n=t.sigBytes/4,t=4*((this._nRounds=n+6)+1),i=this._keySchedule=[],s=0;t>s;s++)if(n>s)i[s]=e[s];else{var o=i[s-1];s%n?n>6&&4==s%n&&(o=r[o>>>24]<<24|r[o>>>16&255]<<16|r[o>>>8&255]<<8|r[255&o]):(o=o<<8|o>>>24,o=r[o>>>24]<<24|r[o>>>16&255]<<16|r[o>>>8&255]<<8|r[255&o],o^=w[s/n|0]<<24),i[s]=i[s-n]^o}for(e=this._invKeySchedule=[],n=0;t>n;n++)s=t-n,o=n%4?i[s]:i[s-4],e[n]=4>n||4>=s?o:h[r[o>>>24]]^c[r[o>>>16&255]]^f[r[o>>>8&255]]^l[r[255&o]]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,o,a,u,r)},decryptBlock:function(t,e){var n=t[e+1];t[e+1]=t[e+3],t[e+3]=n,this._doCryptBlock(t,e,this._invKeySchedule,h,c,f,l,i),n=t[e+1],t[e+1]=t[e+3],t[e+3]=n},_doCryptBlock:function(t,e,n,r,i,s,o,a){for(var u=this._nRounds,h=t[e]^n[0],c=t[e+1]^n[1],f=t[e+2]^n[2],l=t[e+3]^n[3],d=4,p=1;u>p;p++)var g=r[h>>>24]^i[c>>>16&255]^s[f>>>8&255]^o[255&l]^n[d++],y=r[c>>>24]^i[f>>>16&255]^s[l>>>8&255]^o[255&h]^n[d++],v=r[f>>>24]^i[l>>>16&255]^s[h>>>8&255]^o[255&c]^n[d++],l=r[l>>>24]^i[h>>>16&255]^s[c>>>8&255]^o[255&f]^n[d++],h=g,c=y,f=v;g=(a[h>>>24]<<24|a[c>>>16&255]<<16|a[f>>>8&255]<<8|a[255&l])^n[d++],y=(a[c>>>24]<<24|a[f>>>16&255]<<16|a[l>>>8&255]<<8|a[255&h])^n[d++],v=(a[f>>>24]<<24|a[l>>>16&255]<<16|a[h>>>8&255]<<8|a[255&c])^n[d++],l=(a[l>>>24]<<24|a[h>>>16&255]<<16|a[c>>>8&255]<<8|a[255&f])^n[d++],t[e]=g,t[e+1]=y,t[e+2]=v,t[e+3]=l},keySize:8});t.AES=e._createHelper(n)}(),function(){function t(t,e){var n=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=n,this._lBlock^=n<<t}function e(t,e){var n=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=n,this._rBlock^=n<<t}var n=sr,r=n.lib,i=r.WordArray,r=r.BlockCipher,s=n.algo,o=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],a=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],h=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],c=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],f=s.DES=r.extend({_doReset:function(){for(var t=this._key.words,e=[],n=0;56>n;n++){var r=o[n]-1;e[n]=t[r>>>5]>>>31-r%32&1}for(t=this._subKeys=[],r=0;16>r;r++){for(var i=t[r]=[],s=u[r],n=0;24>n;n++)i[n/6|0]|=e[(a[n]-1+s)%28]<<31-n%6,i[4+(n/6|0)]|=e[28+(a[n+24]-1+s)%28]<<31-n%6;for(i[0]=i[0]<<1|i[0]>>>31,n=1;7>n;n++)i[n]>>>=4*(n-1)+3;i[7]=i[7]<<5|i[7]>>>27}for(e=this._invSubKeys=[],n=0;16>n;n++)e[n]=t[15-n]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(n,r,i){this._lBlock=n[r],this._rBlock=n[r+1],t.call(this,4,252645135),t.call(this,16,65535),e.call(this,2,858993459),e.call(this,8,16711935),t.call(this,1,1431655765);for(var s=0;16>s;s++){for(var o=i[s],a=this._lBlock,u=this._rBlock,f=0,l=0;8>l;l++)f|=h[l][((u^o[l])&c[l])>>>0];this._lBlock=u,this._rBlock=a^f}i=this._lBlock,this._lBlock=this._rBlock,this._rBlock=i,t.call(this,1,1431655765),e.call(this,8,16711935),e.call(this,2,858993459),t.call(this,16,65535),t.call(this,4,252645135),n[r]=this._lBlock,n[r+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});n.DES=r._createHelper(f),s=s.TripleDES=r.extend({_doReset:function(){var t=this._key.words;this._des1=f.createEncryptor(i.create(t.slice(0,2))),this._des2=f.createEncryptor(i.create(t.slice(2,4))),this._des3=f.createEncryptor(i.create(t.slice(4,6)))},encryptBlock:function(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)},decryptBlock:function(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)},keySize:6,ivSize:2,blockSize:2}),n.TripleDES=r._createHelper(s)}(),function(){var t=sr,e=t.lib.WordArray;t.enc.Base64={stringify:function(t){var e=t.words,n=t.sigBytes,r=this._map;t.clamp(),t=[];for(var i=0;n>i;i+=3)for(var s=(e[i>>>2]>>>24-8*(i%4)&255)<<16|(e[i+1>>>2]>>>24-8*((i+1)%4)&255)<<8|e[i+2>>>2]>>>24-8*((i+2)%4)&255,o=0;4>o&&n>i+.75*o;o++)t.push(r.charAt(s>>>6*(3-o)&63));if(e=r.charAt(64))for(;t.length%4;)t.push(e);return t.join("")},parse:function(t){var n=t.length,r=this._map,i=r.charAt(64);i&&(i=t.indexOf(i),-1!=i&&(n=i));for(var i=[],s=0,o=0;n>o;o++)if(o%4){var a=r.indexOf(t.charAt(o-1))<<2*(o%4),u=r.indexOf(t.charAt(o))>>>6-2*(o%4);i[s>>>2]|=(a|u)<<24-8*(s%4),s++}return e.create(i,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(t){function e(t,e,n,r,i,s,o){return t=t+(e&n|~e&r)+i+o,(t<<s|t>>>32-s)+e}function n(t,e,n,r,i,s,o){return t=t+(e&r|n&~r)+i+o,(t<<s|t>>>32-s)+e}function r(t,e,n,r,i,s,o){return t=t+(e^n^r)+i+o,(t<<s|t>>>32-s)+e}function i(t,e,n,r,i,s,o){return t=t+(n^(e|~r))+i+o,(t<<s|t>>>32-s)+e}for(var s=sr,o=s.lib,a=o.WordArray,u=o.Hasher,o=s.algo,h=[],c=0;64>c;c++)h[c]=4294967296*t.abs(t.sin(c+1))|0;o=o.MD5=u.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,s){for(var o=0;16>o;o++){var a=s+o,u=t[a];t[a]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}var o=this._hash.words,a=t[s+0],u=t[s+1],c=t[s+2],f=t[s+3],l=t[s+4],d=t[s+5],p=t[s+6],g=t[s+7],y=t[s+8],v=t[s+9],m=t[s+10],S=t[s+11],b=t[s+12],E=t[s+13],w=t[s+14],R=t[s+15],x=o[0],A=o[1],F=o[2],_=o[3],x=e(x,A,F,_,a,7,h[0]),_=e(_,x,A,F,u,12,h[1]),F=e(F,_,x,A,c,17,h[2]),A=e(A,F,_,x,f,22,h[3]),x=e(x,A,F,_,l,7,h[4]),_=e(_,x,A,F,d,12,h[5]),F=e(F,_,x,A,p,17,h[6]),A=e(A,F,_,x,g,22,h[7]),x=e(x,A,F,_,y,7,h[8]),_=e(_,x,A,F,v,12,h[9]),F=e(F,_,x,A,m,17,h[10]),A=e(A,F,_,x,S,22,h[11]),x=e(x,A,F,_,b,7,h[12]),_=e(_,x,A,F,E,12,h[13]),F=e(F,_,x,A,w,17,h[14]),A=e(A,F,_,x,R,22,h[15]),x=n(x,A,F,_,u,5,h[16]),_=n(_,x,A,F,p,9,h[17]),F=n(F,_,x,A,S,14,h[18]),A=n(A,F,_,x,a,20,h[19]),x=n(x,A,F,_,d,5,h[20]),_=n(_,x,A,F,m,9,h[21]),F=n(F,_,x,A,R,14,h[22]),A=n(A,F,_,x,l,20,h[23]),x=n(x,A,F,_,v,5,h[24]),_=n(_,x,A,F,w,9,h[25]),F=n(F,_,x,A,f,14,h[26]),A=n(A,F,_,x,y,20,h[27]),x=n(x,A,F,_,E,5,h[28]),_=n(_,x,A,F,c,9,h[29]),F=n(F,_,x,A,g,14,h[30]),A=n(A,F,_,x,b,20,h[31]),x=r(x,A,F,_,d,4,h[32]),_=r(_,x,A,F,y,11,h[33]),F=r(F,_,x,A,S,16,h[34]),A=r(A,F,_,x,w,23,h[35]),x=r(x,A,F,_,u,4,h[36]),_=r(_,x,A,F,l,11,h[37]),F=r(F,_,x,A,g,16,h[38]),A=r(A,F,_,x,m,23,h[39]),x=r(x,A,F,_,E,4,h[40]),_=r(_,x,A,F,a,11,h[41]),F=r(F,_,x,A,f,16,h[42]),A=r(A,F,_,x,p,23,h[43]),x=r(x,A,F,_,v,4,h[44]),_=r(_,x,A,F,b,11,h[45]),F=r(F,_,x,A,R,16,h[46]),A=r(A,F,_,x,c,23,h[47]),x=i(x,A,F,_,a,6,h[48]),_=i(_,x,A,F,g,10,h[49]),F=i(F,_,x,A,w,15,h[50]),A=i(A,F,_,x,d,21,h[51]),x=i(x,A,F,_,b,6,h[52]),_=i(_,x,A,F,f,10,h[53]),F=i(F,_,x,A,m,15,h[54]),A=i(A,F,_,x,u,21,h[55]),x=i(x,A,F,_,y,6,h[56]),_=i(_,x,A,F,R,10,h[57]),F=i(F,_,x,A,p,15,h[58]),A=i(A,F,_,x,E,21,h[59]),x=i(x,A,F,_,l,6,h[60]),_=i(_,x,A,F,S,10,h[61]),F=i(F,_,x,A,c,15,h[62]),A=i(A,F,_,x,v,21,h[63]);o[0]=o[0]+x|0,o[1]=o[1]+A|0,o[2]=o[2]+F|0,o[3]=o[3]+_|0},_doFinalize:function(){var e=this._data,n=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;n[i>>>5]|=128<<24-i%32;var s=t.floor(r/4294967296);for(n[(i+64>>>9<<4)+15]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n[(i+64>>>9<<4)+14]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),e.sigBytes=4*(n.length+1),this._process(),e=this._hash,n=e.words,r=0;4>r;r++)i=n[r],n[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8);return e},clone:function(){var t=u.clone.call(this);return t._hash=this._hash.clone(),t}}),s.MD5=u._createHelper(o),s.HmacMD5=u._createHmacHelper(o)}(Math),function(){var t=sr,e=t.lib,n=e.WordArray,r=e.Hasher,i=[],e=t.algo.SHA1=r.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var n=this._hash.words,r=n[0],s=n[1],o=n[2],a=n[3],u=n[4],h=0;80>h;h++){if(16>h)i[h]=0|t[e+h];else{var c=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=c<<1|c>>>31}c=(r<<5|r>>>27)+u+i[h],c=20>h?c+((s&o|~s&a)+1518500249):40>h?c+((s^o^a)+1859775393):60>h?c+((s&o|s&a|o&a)-1894007588):c+((s^o^a)-899497514),u=a,a=o,o=s<<30|s>>>2,s=r,r=c}n[0]=n[0]+r|0,n[1]=n[1]+s|0,n[2]=n[2]+o|0,n[3]=n[3]+a|0,n[4]=n[4]+u|0},_doFinalize:function(){var t=this._data,e=t.words,n=8*this._nDataBytes,r=8*t.sigBytes;return e[r>>>5]|=128<<24-r%32,e[(r+64>>>9<<4)+14]=Math.floor(n/4294967296),e[(r+64>>>9<<4)+15]=n,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=r.clone.call(this);return t._hash=this._hash.clone(),t}});t.SHA1=r._createHelper(e),t.HmacSHA1=r._createHmacHelper(e)}(),function(t){for(var e=sr,n=e.lib,r=n.WordArray,i=n.Hasher,n=e.algo,s=[],o=[],a=function(t){return 4294967296*(t-(0|t))|0},u=2,h=0;64>h;){var c;t:{c=u;for(var f=t.sqrt(c),l=2;f>=l;l++)if(!(c%l)){c=!1;break t}c=!0}c&&(8>h&&(s[h]=a(t.pow(u,.5))),o[h]=a(t.pow(u,1/3)),h++),u++}var d=[],n=n.SHA256=i.extend({_doReset:function(){this._hash=new r.init(s.slice(0))},_doProcessBlock:function(t,e){for(var n=this._hash.words,r=n[0],i=n[1],s=n[2],a=n[3],u=n[4],h=n[5],c=n[6],f=n[7],l=0;64>l;l++){if(16>l)d[l]=0|t[e+l];else{var p=d[l-15],g=d[l-2];d[l]=((p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3)+d[l-7]+((g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10)+d[l-16]}p=f+((u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25))+(u&h^~u&c)+o[l]+d[l],g=((r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22))+(r&i^r&s^i&s),f=c,c=h,h=u,u=a+p|0,a=s,s=i,i=r,r=p+g|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+s|0,n[3]=n[3]+a|0,n[4]=n[4]+u|0,n[5]=n[5]+h|0,n[6]=n[6]+c|0,n[7]=n[7]+f|0},_doFinalize:function(){var e=this._data,n=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;return n[i>>>5]|=128<<24-i%32,n[(i+64>>>9<<4)+14]=t.floor(r/4294967296),n[(i+64>>>9<<4)+15]=r,e.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});e.SHA256=i._createHelper(n),e.HmacSHA256=i._createHmacHelper(n)}(Math),function(){var t=sr,e=t.lib.WordArray,n=t.algo,r=n.SHA256,n=n.SHA224=r.extend({_doReset:function(){this._hash=new e.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var t=r._doFinalize.call(this);return t.sigBytes-=4,t}});t.SHA224=r._createHelper(n),t.HmacSHA224=r._createHmacHelper(n)}(),function(){function t(){return i.create.apply(i,arguments)}for(var e=sr,n=e.lib.Hasher,r=e.x64,i=r.Word,s=r.WordArray,r=e.algo,o=[t(1116352408,3609767458),t(1899447441,602891725),t(3049323471,3964484399),t(3921009573,2173295548),t(961987163,4081628472),t(1508970993,3053834265),t(2453635748,2937671579),t(2870763221,3664609560),t(3624381080,2734883394),t(310598401,1164996542),t(607225278,1323610764),t(1426881987,3590304994),t(1925078388,4068182383),t(2162078206,991336113),t(2614888103,633803317),t(3248222580,3479774868),t(3835390401,2666613458),t(4022224774,944711139),t(264347078,2341262773),t(604807628,2007800933),t(770255983,1495990901),t(1249150122,1856431235),t(1555081692,3175218132),t(1996064986,2198950837),t(2554220882,3999719339),t(2821834349,766784016),t(2952996808,2566594879),t(3210313671,3203337956),t(3336571891,1034457026),t(3584528711,2466948901),t(113926993,3758326383),t(338241895,168717936),t(666307205,1188179964),t(773529912,1546045734),t(1294757372,1522805485),t(1396182291,2643833823),t(1695183700,2343527390),t(1986661051,1014477480),t(2177026350,1206759142),t(2456956037,344077627),t(2730485921,1290863460),t(2820302411,3158454273),t(3259730800,3505952657),t(3345764771,106217008),t(3516065817,3606008344),t(3600352804,1432725776),t(4094571909,1467031594),t(275423344,851169720),t(430227734,3100823752),t(506948616,1363258195),t(659060556,3750685593),t(883997877,3785050280),t(958139571,3318307427),t(1322822218,3812723403),t(1537002063,2003034995),t(1747873779,3602036899),t(1955562222,1575990012),t(2024104815,1125592928),t(2227730452,2716904306),t(2361852424,442776044),t(2428436474,593698344),t(2756734187,3733110249),t(3204031479,2999351573),t(3329325298,3815920427),t(3391569614,3928383900),t(3515267271,566280711),t(3940187606,3454069534),t(4118630271,4000239992),t(116418474,1914138554),t(174292421,2731055270),t(289380356,3203993006),t(460393269,320620315),t(685471733,587496836),t(852142971,1086792851),t(1017036298,365543100),t(1126000580,2618297676),t(1288033470,3409855158),t(1501505948,4234509866),t(1607167915,987167468),t(1816402316,1246189591)],a=[],u=0;80>u;u++)a[u]=t();r=r.SHA512=n.extend({_doReset:function(){this._hash=new s.init([new i.init(1779033703,4089235720),new i.init(3144134277,2227873595),new i.init(1013904242,4271175723),new i.init(2773480762,1595750129),new i.init(1359893119,2917565137),new i.init(2600822924,725511199),new i.init(528734635,4215389547),new i.init(1541459225,327033209)])},_doProcessBlock:function(t,e){for(var n=this._hash.words,r=n[0],i=n[1],s=n[2],u=n[3],h=n[4],c=n[5],f=n[6],n=n[7],l=r.high,d=r.low,p=i.high,g=i.low,y=s.high,v=s.low,m=u.high,S=u.low,b=h.high,E=h.low,w=c.high,R=c.low,x=f.high,A=f.low,F=n.high,_=n.low,K=l,U=d,P=p,O=g,C=y,D=v,J=m,T=S,I=b,H=E,j=w,B=R,N=x,k=A,V=F,M=_,L=0;80>L;L++){var q=a[L];if(16>L)var W=q.high=0|t[e+2*L],z=q.low=0|t[e+2*L+1];else{var W=a[L-15],z=W.high,Y=W.low,W=(z>>>1|Y<<31)^(z>>>8|Y<<24)^z>>>7,Y=(Y>>>1|z<<31)^(Y>>>8|z<<24)^(Y>>>7|z<<25),G=a[L-2],z=G.high,X=G.low,G=(z>>>19|X<<13)^(z<<3|X>>>29)^z>>>6,X=(X>>>19|z<<13)^(X<<3|z>>>29)^(X>>>6|z<<26),z=a[L-7],$=z.high,Z=a[L-16],Q=Z.high,Z=Z.low,z=Y+z.low,W=W+$+(Y>>>0>z>>>0?1:0),z=z+X,W=W+G+(X>>>0>z>>>0?1:0),z=z+Z,W=W+Q+(Z>>>0>z>>>0?1:0);q.high=W,q.low=z}var $=I&j^~I&N,Z=H&B^~H&k,q=K&P^K&C^P&C,tt=U&O^U&D^O&D,Y=(K>>>28|U<<4)^(K<<30|U>>>2)^(K<<25|U>>>7),G=(U>>>28|K<<4)^(U<<30|K>>>2)^(U<<25|K>>>7),X=o[L],et=X.high,nt=X.low,X=M+((H>>>14|I<<18)^(H>>>18|I<<14)^(H<<23|I>>>9)),Q=V+((I>>>14|H<<18)^(I>>>18|H<<14)^(I<<23|H>>>9))+(M>>>0>X>>>0?1:0),X=X+Z,Q=Q+$+(Z>>>0>X>>>0?1:0),X=X+nt,Q=Q+et+(nt>>>0>X>>>0?1:0),X=X+z,Q=Q+W+(z>>>0>X>>>0?1:0),z=G+tt,q=Y+q+(G>>>0>z>>>0?1:0),V=N,M=k,N=j,k=B,j=I,B=H,H=T+X|0,I=J+Q+(T>>>0>H>>>0?1:0)|0,J=C,T=D,C=P,D=O,P=K,O=U,U=X+z|0,K=Q+q+(X>>>0>U>>>0?1:0)|0}d=r.low=d+U,r.high=l+K+(U>>>0>d>>>0?1:0),g=i.low=g+O,i.high=p+P+(O>>>0>g>>>0?1:0),v=s.low=v+D,s.high=y+C+(D>>>0>v>>>0?1:0),S=u.low=S+T,u.high=m+J+(T>>>0>S>>>0?1:0),E=h.low=E+H,h.high=b+I+(H>>>0>E>>>0?1:0),R=c.low=R+B,c.high=w+j+(B>>>0>R>>>0?1:0),A=f.low=A+k,f.high=x+N+(k>>>0>A>>>0?1:0),_=n.low=_+M,n.high=F+V+(M>>>0>_>>>0?1:0)},_doFinalize:function(){var t=this._data,e=t.words,n=8*this._nDataBytes,r=8*t.sigBytes;return e[r>>>5]|=128<<24-r%32,e[(r+128>>>10<<5)+30]=Math.floor(n/4294967296),e[(r+128>>>10<<5)+31]=n,t.sigBytes=4*e.length,this._process(),this._hash.toX32()},clone:function(){var t=n.clone.call(this);return t._hash=this._hash.clone(),t},blockSize:32}),e.SHA512=n._createHelper(r),e.HmacSHA512=n._createHmacHelper(r)}(),function(){var t=sr,e=t.x64,n=e.Word,r=e.WordArray,e=t.algo,i=e.SHA512,e=e.SHA384=i.extend({_doReset:function(){this._hash=new r.init([new n.init(3418070365,3238371032),new n.init(1654270250,914150663),new n.init(2438529370,812702999),new n.init(355462360,4144912697),new n.init(1731405415,4290775857),new n.init(2394180231,1750603025),new n.init(3675008525,1694076839),new n.init(1203062813,3204075428)])},_doFinalize:function(){var t=i._doFinalize.call(this);return t.sigBytes-=16,t}});t.SHA384=i._createHelper(e),t.HmacSHA384=i._createHmacHelper(e)}(),function(){var t=sr,e=t.lib,n=e.WordArray,r=e.Hasher,e=t.algo,i=n.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),s=n.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),o=n.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),a=n.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),u=n.create([0,1518500249,1859775393,2400959708,2840853838]),h=n.create([1352829926,1548603684,1836072691,2053994217,0]),e=e.RIPEMD160=r.extend({_doReset:function(){this._hash=n.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var n=0;16>n;n++){var r=e+n,c=t[r];
	t[r]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}var f,l,d,p,g,y,v,m,S,b,r=this._hash.words,c=u.words,E=h.words,w=i.words,R=s.words,x=o.words,A=a.words;y=f=r[0],v=l=r[1],m=d=r[2],S=p=r[3],b=g=r[4];for(var F,n=0;80>n;n+=1)F=f+t[e+w[n]]|0,F=16>n?F+((l^d^p)+c[0]):32>n?F+((l&d|~l&p)+c[1]):48>n?F+(((l|~d)^p)+c[2]):64>n?F+((l&p|d&~p)+c[3]):F+((l^(d|~p))+c[4]),F|=0,F=F<<x[n]|F>>>32-x[n],F=F+g|0,f=g,g=p,p=d<<10|d>>>22,d=l,l=F,F=y+t[e+R[n]]|0,F=16>n?F+((v^(m|~S))+E[0]):32>n?F+((v&S|m&~S)+E[1]):48>n?F+(((v|~m)^S)+E[2]):64>n?F+((v&m|~v&S)+E[3]):F+((v^m^S)+E[4]),F|=0,F=F<<A[n]|F>>>32-A[n],F=F+b|0,y=b,b=S,S=m<<10|m>>>22,m=v,v=F;F=r[1]+d+S|0,r[1]=r[2]+p+b|0,r[2]=r[3]+g+y|0,r[3]=r[4]+f+v|0,r[4]=r[0]+l+m|0,r[0]=F},_doFinalize:function(){var t=this._data,e=t.words,n=8*this._nDataBytes,r=8*t.sigBytes;for(e[r>>>5]|=128<<24-r%32,e[(r+64>>>9<<4)+14]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),t.sigBytes=4*(e.length+1),this._process(),t=this._hash,e=t.words,n=0;5>n;n++)r=e[n],e[n]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8);return t},clone:function(){var t=r.clone.call(this);return t._hash=this._hash.clone(),t}});t.RIPEMD160=r._createHelper(e),t.HmacRIPEMD160=r._createHmacHelper(e)}(Math),function(){var t=sr,e=t.enc.Utf8;t.algo.HMAC=t.lib.Base.extend({init:function(t,n){t=this._hasher=new t.init,"string"==typeof n&&(n=e.parse(n));var r=t.blockSize,i=4*r;n.sigBytes>i&&(n=t.finalize(n)),n.clamp();for(var s=this._oKey=n.clone(),o=this._iKey=n.clone(),a=s.words,u=o.words,h=0;r>h;h++)a[h]^=1549556828,u[h]^=909522486;s.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher;return t=e.finalize(t),e.reset(),e.finalize(this._oKey.clone().concat(t))}})}(),function(){var t=sr,e=t.lib,n=e.Base,r=e.WordArray,e=t.algo,i=e.HMAC,s=e.PBKDF2=n.extend({cfg:n.extend({keySize:4,hasher:e.SHA1,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var n=this.cfg,s=i.create(n.hasher,t),o=r.create(),a=r.create([1]),u=o.words,h=a.words,c=n.keySize,n=n.iterations;u.length<c;){var f=s.update(e).finalize(a);s.reset();for(var l=f.words,d=l.length,p=f,g=1;n>g;g++){p=s.finalize(p),s.reset();for(var y=p.words,v=0;d>v;v++)l[v]^=y[v]}o.concat(f),h[0]++}return o.sigBytes=4*c,o}});t.PBKDF2=function(t,e,n){return s.create(n).compute(t,e)}}();/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
		 */
	var or,ar="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ur="=",hr=0xdeadbeefcafe,cr=15715070==(16777215&hr);cr&&"Microsoft Internet Explorer"==nr.appName?(o.prototype.am=h,or=30):cr&&"Netscape"!=nr.appName?(o.prototype.am=u,or=26):(o.prototype.am=c,or=28),o.prototype.DB=or,o.prototype.DM=(1<<or)-1,o.prototype.DV=1<<or;var fr=52;o.prototype.FV=Math.pow(2,fr),o.prototype.F1=fr-or,o.prototype.F2=2*or-fr;var lr,dr,pr="0123456789abcdefghijklmnopqrstuvwxyz",gr=new Array;for(lr="0".charCodeAt(0),dr=0;9>=dr;++dr)gr[lr++]=dr;for(lr="a".charCodeAt(0),dr=10;36>dr;++dr)gr[lr++]=dr;for(lr="A".charCodeAt(0),dr=10;36>dr;++dr)gr[lr++]=dr;D.prototype.convert=J,D.prototype.revert=T,D.prototype.reduce=I,D.prototype.mulTo=H,D.prototype.sqrTo=j,N.prototype.convert=k,N.prototype.revert=V,N.prototype.reduce=M,N.prototype.mulTo=q,N.prototype.sqrTo=L,o.prototype.copyTo=d,o.prototype.fromInt=p,o.prototype.fromString=y,o.prototype.clamp=v,o.prototype.dlShiftTo=x,o.prototype.drShiftTo=A,o.prototype.lShiftTo=F,o.prototype.rShiftTo=_,o.prototype.subTo=K,o.prototype.multiplyTo=U,o.prototype.squareTo=P,o.prototype.divRemTo=O,o.prototype.invDigit=B,o.prototype.isEven=W,o.prototype.exp=z,o.prototype.toString=m,o.prototype.negate=S,o.prototype.abs=b,o.prototype.compareTo=E,o.prototype.bitLength=R,o.prototype.mod=C,o.prototype.modPowInt=Y,o.ZERO=g(0),o.ONE=g(1),Bt.prototype.convert=Nt,Bt.prototype.revert=Nt,Bt.prototype.mulTo=kt,Bt.prototype.sqrTo=Vt,Wt.prototype.convert=zt,Wt.prototype.revert=Yt,Wt.prototype.reduce=Gt,Wt.prototype.mulTo=$t,Wt.prototype.sqrTo=Xt;var yr=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],vr=(1<<26)/yr[yr.length-1];o.prototype.chunkSize=Q,o.prototype.toRadix=et,o.prototype.fromRadix=nt,o.prototype.fromNumber=rt,o.prototype.bitwiseTo=ut,o.prototype.changeBit=At,o.prototype.addTo=Ut,o.prototype.dMultiply=Ht,o.prototype.dAddOffset=jt,o.prototype.multiplyLowerTo=Lt,o.prototype.multiplyUpperTo=qt,o.prototype.modInt=te,o.prototype.millerRabin=re,o.prototype.clone=G,o.prototype.intValue=X,o.prototype.byteValue=$,o.prototype.shortValue=Z,o.prototype.signum=tt,o.prototype.toByteArray=it,o.prototype.equals=st,o.prototype.min=ot,o.prototype.max=at,o.prototype.and=ct,o.prototype.or=lt,o.prototype.xor=pt,o.prototype.andNot=yt,o.prototype.not=vt,o.prototype.shiftLeft=mt,o.prototype.shiftRight=St,o.prototype.getLowestSetBit=Et,o.prototype.bitCount=Rt,o.prototype.testBit=xt,o.prototype.setBit=Ft,o.prototype.clearBit=_t,o.prototype.flipBit=Kt,o.prototype.add=Pt,o.prototype.subtract=Ot,o.prototype.multiply=Ct,o.prototype.divide=Jt,o.prototype.remainder=Tt,o.prototype.divideAndRemainder=It,o.prototype.modPow=Zt,o.prototype.modInverse=ee,o.prototype.pow=Mt,o.prototype.gcd=Qt,o.prototype.isProbablePrime=ne,o.prototype.square=Dt,ie.prototype.init=se,ie.prototype.next=oe;var mr,Sr,br,Er=256;if(null==Sr){Sr=new Array,br=0;var wr;if(rr.crypto&&rr.crypto.getRandomValues){var Rr=new Uint8Array(32);for(rr.crypto.getRandomValues(Rr),wr=0;32>wr;++wr)Sr[br++]=Rr[wr]}if("Netscape"==nr.appName&&nr.appVersion<"5"&&rr.crypto){var xr=rr.crypto.random(32);for(wr=0;wr<xr.length;++wr)Sr[br++]=255&xr.charCodeAt(wr)}for(;Er>br;)wr=Math.floor(65536*Math.random()),Sr[br++]=wr>>>8,Sr[br++]=255&wr;br=0,he()}le.prototype.nextBytes=fe;var Ar=20;ve.prototype.doPublic=Se,ve.prototype.setPublic=me,ve.prototype.encrypt=be,ve.prototype.encryptOAEP=Ee,ve.prototype.type="RSA";var Ar=20;ve.prototype.doPrivate=Ke,ve.prototype.setPrivate=Ae,ve.prototype.setPrivateEx=Fe,ve.prototype.generate=_e,ve.prototype.decrypt=Ue,ve.prototype.decryptOAEP=Pe,Oe.prototype.equals=Ce,Oe.prototype.toBigInteger=De,Oe.prototype.negate=Je,Oe.prototype.add=Te,Oe.prototype.subtract=Ie,Oe.prototype.multiply=He,Oe.prototype.square=je,Oe.prototype.divide=Be,Ne.prototype.getX=ke,Ne.prototype.getY=Ve,Ne.prototype.equals=Me,Ne.prototype.isInfinity=Le,Ne.prototype.negate=qe,Ne.prototype.add=We,Ne.prototype.twice=ze,Ne.prototype.multiply=Ye,Ne.prototype.multiplyTwo=Ge,Xe.prototype.getQ=$e,Xe.prototype.getA=Ze,Xe.prototype.getB=Qe,Xe.prototype.equals=tn,Xe.prototype.getInfinity=en,Xe.prototype.fromBigInteger=nn,Xe.prototype.decodePointHex=rn,/*! (c) Stefan Thomas | https://github.com/bitcoinjs/bitcoinjs-lib
		 */
	Oe.prototype.getByteLength=function(){return Math.floor((this.toBigInteger().bitLength()+7)/8)},Ne.prototype.getEncoded=function(t){var e=function(t,e){var n=t.toByteArrayUnsigned();if(e<n.length)n=n.slice(n.length-e);else for(;e>n.length;)n.unshift(0);return n},n=this.getX().toBigInteger(),r=this.getY().toBigInteger(),i=e(n,32);return t?r.isEven()?i.unshift(2):i.unshift(3):(i.unshift(4),i=i.concat(e(r,32))),i},Ne.decodeFrom=function(t,e){var n=(e[0],e.length-1),r=e.slice(1,1+n/2),i=e.slice(1+n/2,1+n);r.unshift(0),i.unshift(0);var s=new o(r),a=new o(i);return new Ne(t,t.fromBigInteger(s),t.fromBigInteger(a))},Ne.decodeFromHex=function(t,e){var n=(e.substr(0,2),e.length-2),r=e.substr(2,n/2),i=e.substr(2+n/2,n/2),s=new o(r,16),a=new o(i,16);return new Ne(t,t.fromBigInteger(s),t.fromBigInteger(a))},Ne.prototype.add2D=function(t){if(this.isInfinity())return t;if(t.isInfinity())return this;if(this.x.equals(t.x))return this.y.equals(t.y)?this.twice():this.curve.getInfinity();var e=t.x.subtract(this.x),n=t.y.subtract(this.y),r=n.divide(e),i=r.square().subtract(this.x).subtract(t.x),s=r.multiply(this.x.subtract(i)).subtract(this.y);return new Ne(this.curve,i,s)},Ne.prototype.twice2D=function(){if(this.isInfinity())return this;if(0==this.y.toBigInteger().signum())return this.curve.getInfinity();var t=this.curve.fromBigInteger(o.valueOf(2)),e=this.curve.fromBigInteger(o.valueOf(3)),n=this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(t)),r=n.square().subtract(this.x.multiply(t)),i=n.multiply(this.x.subtract(r)).subtract(this.y);return new Ne(this.curve,r,i)},Ne.prototype.multiply2D=function(t){if(this.isInfinity())return this;if(0==t.signum())return this.curve.getInfinity();var e,n=t,r=n.multiply(new o("3")),i=this.negate(),s=this;for(e=r.bitLength()-2;e>0;--e){s=s.twice();var a=r.testBit(e),u=n.testBit(e);a!=u&&(s=s.add2D(a?this:i))}return s},Ne.prototype.isOnCurve=function(){var t=this.getX().toBigInteger(),e=this.getY().toBigInteger(),n=this.curve.getA().toBigInteger(),r=this.curve.getB().toBigInteger(),i=this.curve.getQ(),s=e.multiply(e).mod(i),o=t.multiply(t).multiply(t).add(n.multiply(t)).add(r).mod(i);return s.equals(o)},Ne.prototype.toString=function(){return"("+this.getX().toBigInteger().toString()+","+this.getY().toBigInteger().toString()+")"},Ne.prototype.validate=function(){var t=this.curve.getQ();if(this.isInfinity())throw new Error("Point is at infinity.");var e=this.getX().toBigInteger(),n=this.getY().toBigInteger();if(e.compareTo(o.ONE)<0||e.compareTo(t.subtract(o.ONE))>0)throw new Error("x coordinate out of bounds");if(n.compareTo(o.ONE)<0||n.compareTo(t.subtract(o.ONE))>0)throw new Error("y coordinate out of bounds");if(!this.isOnCurve())throw new Error("Point is not on the curve.");if(this.multiply(t).isInfinity())throw new Error("Point is not a scalar multiple of G.");return!0};/*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
		 */
	var Fr=function(){function t(t,e,n){return e?o[e]:String.fromCharCode(parseInt(n,16))}var e="(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)",n='(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))',r='(?:"'+n+'*")',i=new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|"+e+"|"+r+")","g"),s=new RegExp("\\\\(?:([^u])|u(.{4}))","g"),o={'"':'"',"/":"/","\\":"\\",b:"\b",f:"\f",n:"\n",r:"\r",t:"	"},a=new String(""),u="\\",h=({"{":Object,"[":Array},Object.hasOwnProperty);return function(e,n){var r,o=e.match(i),c=o[0],f=!1;"{"===c?r={}:"["===c?r=[]:(r=[],f=!0);for(var l,d=[r],p=1-f,g=o.length;g>p;++p){c=o[p];var y;switch(c.charCodeAt(0)){default:y=d[0],y[l||y.length]=+c,l=void 0;break;case 34:if(c=c.substring(1,c.length-1),-1!==c.indexOf(u)&&(c=c.replace(s,t)),y=d[0],!l){if(!(y instanceof Array)){l=c||a;break}l=y.length}y[l]=c,l=void 0;break;case 91:y=d[0],d.unshift(y[l||y.length]=[]),l=void 0;break;case 93:d.shift();break;case 102:y=d[0],y[l||y.length]=!1,l=void 0;break;case 110:y=d[0],y[l||y.length]=null,l=void 0;break;case 116:y=d[0],y[l||y.length]=!0,l=void 0;break;case 123:y=d[0],d.unshift(y[l||y.length]={}),l=void 0;break;case 125:d.shift()}}if(f){if(1!==d.length)throw new Error;r=r[0]}else if(d.length)throw new Error;if(n){var v=function(t,e){var r=t[e];if(r&&"object"==typeof r){var i=null;for(var s in r)if(h.call(r,s)&&r!==t){var o=v(r,s);void 0!==o?r[s]=o:(i||(i=[]),i.push(s))}if(i)for(var a=i.length;--a>=0;)delete r[i[a]]}return n.call(t,e,r)};r=v({"":r},"")}return r}}();/*! asn1-1.0.9.js (c) 2013-2015 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.asn1&&KJUR.asn1||(KJUR.asn1={}),KJUR.asn1.ASN1Util=new function(){this.integerToByteHex=function(t){var e=t.toString(16);return e.length%2==1&&(e="0"+e),e},this.bigIntToMinTwosComplementsHex=function(t){var e=t.toString(16);if("-"!=e.substr(0,1))e.length%2==1?e="0"+e:e.match(/^[0-7]/)||(e="00"+e);else{var n=e.substr(1),r=n.length;r%2==1?r+=1:e.match(/^[0-7]/)||(r+=2);for(var i="",s=0;r>s;s++)i+="f";var a=new o(i,16),u=a.xor(t).add(o.ONE);e=u.toString(16).replace(/^-/,"")}return e},this.getPEMStringFromHex=function(t,e){var n=(KJUR.asn1,sr.enc.Hex.parse(t)),r=sr.enc.Base64.stringify(n),i=r.replace(/(.{64})/g,"$1\r\n");return i=i.replace(/\r\n$/,""),"-----BEGIN "+e+"-----\r\n"+i+"\r\n-----END "+e+"-----\r\n"},this.newObject=function(t){var e=KJUR.asn1,n=Object.keys(t);if(1!=n.length)throw"key of param shall be only one.";var r=n[0];if(-1==":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":"+r+":"))throw"undefined key: "+r;if("bool"==r)return new e.DERBoolean(t[r]);if("int"==r)return new e.DERInteger(t[r]);if("bitstr"==r)return new e.DERBitString(t[r]);if("octstr"==r)return new e.DEROctetString(t[r]);if("null"==r)return new e.DERNull(t[r]);if("oid"==r)return new e.DERObjectIdentifier(t[r]);if("enum"==r)return new e.DEREnumerated(t[r]);if("utf8str"==r)return new e.DERUTF8String(t[r]);if("numstr"==r)return new e.DERNumericString(t[r]);if("prnstr"==r)return new e.DERPrintableString(t[r]);if("telstr"==r)return new e.DERTeletexString(t[r]);if("ia5str"==r)return new e.DERIA5String(t[r]);if("utctime"==r)return new e.DERUTCTime(t[r]);if("gentime"==r)return new e.DERGeneralizedTime(t[r]);if("seq"==r){for(var i=t[r],s=[],o=0;o<i.length;o++){var a=e.ASN1Util.newObject(i[o]);s.push(a)}return new e.DERSequence({array:s})}if("set"==r){for(var i=t[r],s=[],o=0;o<i.length;o++){var a=e.ASN1Util.newObject(i[o]);s.push(a)}return new e.DERSet({array:s})}if("tag"==r){var u=t[r];if("[object Array]"===Object.prototype.toString.call(u)&&3==u.length){var h=e.ASN1Util.newObject(u[2]);return new e.DERTaggedObject({tag:u[0],explicit:u[1],obj:h})}var c={};if(void 0!==u.explicit&&(c.explicit=u.explicit),void 0!==u.tag&&(c.tag=u.tag),void 0===u.obj)throw"obj shall be specified for 'tag'.";return c.obj=e.ASN1Util.newObject(u.obj),new e.DERTaggedObject(c)}},this.jsonToASN1HEX=function(t){var e=this.newObject(t);return e.getEncodedHex()}},KJUR.asn1.ASN1Util.oidHexToInt=function(t){for(var e="",n=parseInt(t.substr(0,2),16),r=Math.floor(n/40),i=n%40,e=r+"."+i,s="",a=2;a<t.length;a+=2){var u=parseInt(t.substr(a,2),16),h=("00000000"+u.toString(2)).slice(-8);if(s+=h.substr(1,7),"0"==h.substr(0,1)){var c=new o(s,2);e=e+"."+c.toString(10),s=""}}return e},KJUR.asn1.ASN1Util.oidIntToHex=function(t){var e=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},n=function(t){var n="",r=new o(t,10),i=r.toString(2),s=7-i.length%7;7==s&&(s=0);for(var a="",u=0;s>u;u++)a+="0";i=a+i;for(var u=0;u<i.length-1;u+=7){var h=i.substr(u,7);u!=i.length-7&&(h="1"+h),n+=e(parseInt(h,2))}return n};if(!t.match(/^[0-9.]+$/))throw"malformed oid string: "+t;var r="",i=t.split("."),s=40*parseInt(i[0])+parseInt(i[1]);r+=e(s),i.splice(0,2);for(var a=0;a<i.length;a++)r+=n(i[a]);return r},KJUR.asn1.ASN1Object=function(){var t="";this.getLengthHexFromValue=function(){if("undefined"==typeof this.hV||null==this.hV)throw"this.hV is null or undefined.";if(this.hV.length%2==1)throw"value hex must be even length: n="+t.length+",v="+this.hV;var e=this.hV.length/2,n=e.toString(16);if(n.length%2==1&&(n="0"+n),128>e)return n;var r=n.length/2;if(r>15)throw"ASN.1 length too long to represent by 8x: n = "+e.toString(16);var i=128+r;return i.toString(16)+n},this.getEncodedHex=function(){return(null==this.hTLV||this.isModified)&&(this.hV=this.getFreshValueHex(),this.hL=this.getLengthHexFromValue(),this.hTLV=this.hT+this.hL+this.hV,this.isModified=!1),this.hTLV},this.getValueHex=function(){return this.getEncodedHex(),this.hV},this.getFreshValueHex=function(){return""}},KJUR.asn1.DERAbstractString=function(t){KJUR.asn1.DERAbstractString.superclass.constructor.call(this);this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=un(this.s)},this.setStringHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("string"==typeof t?this.setString(t):"undefined"!=typeof t.str?this.setString(t.str):"undefined"!=typeof t.hex&&this.setStringHex(t.hex))},ir.lang.extend(KJUR.asn1.DERAbstractString,KJUR.asn1.ASN1Object),KJUR.asn1.DERAbstractTime=function(t){KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);this.localDateToUTC=function(t){utc=t.getTime()+6e4*t.getTimezoneOffset();var e=new Date(utc);return e},this.formatDate=function(t,e,n){var r=this.zeroPadding,i=this.localDateToUTC(t),s=String(i.getFullYear());"utc"==e&&(s=s.substr(2,2));var o=r(String(i.getMonth()+1),2),a=r(String(i.getDate()),2),u=r(String(i.getHours()),2),h=r(String(i.getMinutes()),2),c=r(String(i.getSeconds()),2),f=s+o+a+u+h+c;if(n===!0){var l=i.getMilliseconds();if(0!=l){var d=r(String(l),3);d=d.replace(/[0]+$/,""),f=f+"."+d}}return f+"Z"},this.zeroPadding=function(t,e){return t.length>=e?t:new Array(e-t.length+1).join("0")+t},this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=un(t)},this.setByDateValue=function(t,e,n,r,i,s){var o=new Date(Date.UTC(t,e-1,n,r,i,s,0));this.setByDate(o)},this.getFreshValueHex=function(){return this.hV}},ir.lang.extend(KJUR.asn1.DERAbstractTime,KJUR.asn1.ASN1Object),KJUR.asn1.DERAbstractStructured=function(t){KJUR.asn1.DERAbstractString.superclass.constructor.call(this);this.setByASN1ObjectArray=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array=t},this.appendASN1Object=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array.push(t)},this.asn1Array=new Array,"undefined"!=typeof t&&"undefined"!=typeof t.array&&(this.asn1Array=t.array)},ir.lang.extend(KJUR.asn1.DERAbstractStructured,KJUR.asn1.ASN1Object),KJUR.asn1.DERBoolean=function(){KJUR.asn1.DERBoolean.superclass.constructor.call(this),this.hT="01",this.hTLV="0101ff"},ir.lang.extend(KJUR.asn1.DERBoolean,KJUR.asn1.ASN1Object),KJUR.asn1.DERInteger=function(t){KJUR.asn1.DERInteger.superclass.constructor.call(this),this.hT="02",this.setByBigInteger=function(t){this.hTLV=null,this.isModified=!0,this.hV=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)},this.setByInteger=function(t){var e=new o(String(t),10);this.setByBigInteger(e)},this.setValueHex=function(t){this.hV=t},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("undefined"!=typeof t.bigint?this.setByBigInteger(t.bigint):"undefined"!=typeof t.int?this.setByInteger(t.int):"number"==typeof t?this.setByInteger(t):"undefined"!=typeof t.hex&&this.setValueHex(t.hex))},ir.lang.extend(KJUR.asn1.DERInteger,KJUR.asn1.ASN1Object),KJUR.asn1.DERBitString=function(t){KJUR.asn1.DERBitString.superclass.constructor.call(this),this.hT="03",this.setHexValueIncludingUnusedBits=function(t){this.hTLV=null,this.isModified=!0,this.hV=t},this.setUnusedBitsAndHexValue=function(t,e){if(0>t||t>7)throw"unused bits shall be from 0 to 7: u = "+t;var n="0"+t;this.hTLV=null,this.isModified=!0,this.hV=n+e},this.setByBinaryString=function(t){t=t.replace(/0+$/,"");var e=8-t.length%8;8==e&&(e=0);for(var n=0;e>=n;n++)t+="0";for(var r="",n=0;n<t.length-1;n+=8){var i=t.substr(n,8),s=parseInt(i,2).toString(16);1==s.length&&(s="0"+s),r+=s}this.hTLV=null,this.isModified=!0,this.hV="0"+e+r},this.setByBooleanArray=function(t){for(var e="",n=0;n<t.length;n++)e+=1==t[n]?"1":"0";this.setByBinaryString(e)},this.newFalseArray=function(t){for(var e=new Array(t),n=0;t>n;n++)e[n]=!1;return e},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("string"==typeof t&&t.toLowerCase().match(/^[0-9a-f]+$/)?this.setHexValueIncludingUnusedBits(t):"undefined"!=typeof t.hex?this.setHexValueIncludingUnusedBits(t.hex):"undefined"!=typeof t.bin?this.setByBinaryString(t.bin):"undefined"!=typeof t.array&&this.setByBooleanArray(t.array))},ir.lang.extend(KJUR.asn1.DERBitString,KJUR.asn1.ASN1Object),KJUR.asn1.DEROctetString=function(t){KJUR.asn1.DEROctetString.superclass.constructor.call(this,t),this.hT="04"},ir.lang.extend(KJUR.asn1.DEROctetString,KJUR.asn1.DERAbstractString),KJUR.asn1.DERNull=function(){KJUR.asn1.DERNull.superclass.constructor.call(this),this.hT="05",this.hTLV="0500"},ir.lang.extend(KJUR.asn1.DERNull,KJUR.asn1.ASN1Object),KJUR.asn1.DERObjectIdentifier=function(t){var e=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},n=function(t){var n="",r=new o(t,10),i=r.toString(2),s=7-i.length%7;7==s&&(s=0);for(var a="",u=0;s>u;u++)a+="0";i=a+i;for(var u=0;u<i.length-1;u+=7){var h=i.substr(u,7);u!=i.length-7&&(h="1"+h),n+=e(parseInt(h,2))}return n};KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this),this.hT="06",this.setValueHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.setValueOidString=function(t){if(!t.match(/^[0-9.]+$/))throw"malformed oid string: "+t;var r="",i=t.split("."),s=40*parseInt(i[0])+parseInt(i[1]);r+=e(s),i.splice(0,2);for(var o=0;o<i.length;o++)r+=n(i[o]);this.hTLV=null,this.isModified=!0,this.s=null,this.hV=r},this.setValueName=function(t){if("undefined"==typeof KJUR.asn1.x509.OID.name2oidList[t])throw"DERObjectIdentifier oidName undefined: "+t;var e=KJUR.asn1.x509.OID.name2oidList[t];this.setValueOidString(e)},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("string"==typeof t&&t.match(/^[0-2].[0-9.]+$/)?this.setValueOidString(t):void 0!==KJUR.asn1.x509.OID.name2oidList[t]?this.setValueOidString(KJUR.asn1.x509.OID.name2oidList[t]):"undefined"!=typeof t.oid?this.setValueOidString(t.oid):"undefined"!=typeof t.hex?this.setValueHex(t.hex):"undefined"!=typeof t.name&&this.setValueName(t.name))},ir.lang.extend(KJUR.asn1.DERObjectIdentifier,KJUR.asn1.ASN1Object),KJUR.asn1.DEREnumerated=function(t){KJUR.asn1.DEREnumerated.superclass.constructor.call(this),this.hT="0a",this.setByBigInteger=function(t){this.hTLV=null,this.isModified=!0,this.hV=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)},this.setByInteger=function(t){var e=new o(String(t),10);this.setByBigInteger(e)},this.setValueHex=function(t){this.hV=t},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("undefined"!=typeof t.int?this.setByInteger(t.int):"number"==typeof t?this.setByInteger(t):"undefined"!=typeof t.hex&&this.setValueHex(t.hex))},ir.lang.extend(KJUR.asn1.DEREnumerated,KJUR.asn1.ASN1Object),KJUR.asn1.DERUTF8String=function(t){KJUR.asn1.DERUTF8String.superclass.constructor.call(this,t),this.hT="0c"},ir.lang.extend(KJUR.asn1.DERUTF8String,KJUR.asn1.DERAbstractString),KJUR.asn1.DERNumericString=function(t){KJUR.asn1.DERNumericString.superclass.constructor.call(this,t),this.hT="12"},ir.lang.extend(KJUR.asn1.DERNumericString,KJUR.asn1.DERAbstractString),KJUR.asn1.DERPrintableString=function(t){KJUR.asn1.DERPrintableString.superclass.constructor.call(this,t),this.hT="13"},ir.lang.extend(KJUR.asn1.DERPrintableString,KJUR.asn1.DERAbstractString),KJUR.asn1.DERTeletexString=function(t){KJUR.asn1.DERTeletexString.superclass.constructor.call(this,t),this.hT="14"},ir.lang.extend(KJUR.asn1.DERTeletexString,KJUR.asn1.DERAbstractString),KJUR.asn1.DERIA5String=function(t){KJUR.asn1.DERIA5String.superclass.constructor.call(this,t),this.hT="16"},ir.lang.extend(KJUR.asn1.DERIA5String,KJUR.asn1.DERAbstractString),KJUR.asn1.DERUTCTime=function(t){KJUR.asn1.DERUTCTime.superclass.constructor.call(this,t),this.hT="17",this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"utc"),this.hV=un(this.s)},this.getFreshValueHex=function(){return"undefined"==typeof this.date&&"undefined"==typeof this.s&&(this.date=new Date,this.s=this.formatDate(this.date,"utc"),this.hV=un(this.s)),this.hV},void 0!==t&&(void 0!==t.str?this.setString(t.str):"string"==typeof t&&t.match(/^[0-9]{12}Z$/)?this.setString(t):void 0!==t.hex?this.setStringHex(t.hex):void 0!==t.date&&this.setByDate(t.date))},ir.lang.extend(KJUR.asn1.DERUTCTime,KJUR.asn1.DERAbstractTime),KJUR.asn1.DERGeneralizedTime=function(t){KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this,t),this.hT="18",this.withMillis=!1,this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"gen",this.withMillis),this.hV=un(this.s)},this.getFreshValueHex=function(){return void 0===this.date&&void 0===this.s&&(this.date=new Date,this.s=this.formatDate(this.date,"gen",this.withMillis),this.hV=un(this.s)),this.hV},void 0!==t&&(void 0!==t.str?this.setString(t.str):"string"==typeof t&&t.match(/^[0-9]{14}Z$/)?this.setString(t):void 0!==t.hex?this.setStringHex(t.hex):void 0!==t.date&&this.setByDate(t.date),t.millis===!0&&(this.withMillis=!0))},ir.lang.extend(KJUR.asn1.DERGeneralizedTime,KJUR.asn1.DERAbstractTime),KJUR.asn1.DERSequence=function(t){KJUR.asn1.DERSequence.superclass.constructor.call(this,t),this.hT="30",this.getFreshValueHex=function(){for(var t="",e=0;e<this.asn1Array.length;e++){var n=this.asn1Array[e];t+=n.getEncodedHex()}return this.hV=t,this.hV}},ir.lang.extend(KJUR.asn1.DERSequence,KJUR.asn1.DERAbstractStructured),KJUR.asn1.DERSet=function(t){KJUR.asn1.DERSet.superclass.constructor.call(this,t),this.hT="31",this.sortFlag=!0,this.getFreshValueHex=function(){for(var t=new Array,e=0;e<this.asn1Array.length;e++){var n=this.asn1Array[e];t.push(n.getEncodedHex())}return 1==this.sortFlag&&t.sort(),this.hV=t.join(""),this.hV},"undefined"!=typeof t&&"undefined"!=typeof t.sortflag&&0==t.sortflag&&(this.sortFlag=!1)},ir.lang.extend(KJUR.asn1.DERSet,KJUR.asn1.DERAbstractStructured),KJUR.asn1.DERTaggedObject=function(t){KJUR.asn1.DERTaggedObject.superclass.constructor.call(this),this.hT="a0",this.hV="",this.isExplicit=!0,this.asn1Object=null,this.setASN1Object=function(t,e,n){this.hT=e,this.isExplicit=t,this.asn1Object=n,this.isExplicit?(this.hV=this.asn1Object.getEncodedHex(),this.hTLV=null,this.isModified=!0):(this.hV=null,this.hTLV=n.getEncodedHex(),this.hTLV=this.hTLV.replace(/^../,e),this.isModified=!1)},this.getFreshValueHex=function(){return this.hV},"undefined"!=typeof t&&("undefined"!=typeof t.tag&&(this.hT=t.tag),"undefined"!=typeof t.explicit&&(this.isExplicit=t.explicit),"undefined"!=typeof t.obj&&(this.asn1Object=t.obj,this.setASN1Object(this.isExplicit,this.hT,this.asn1Object)))},ir.lang.extend(KJUR.asn1.DERTaggedObject,KJUR.asn1.ASN1Object);/*! asn1hex-1.1.6.js (c) 2012-2015 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	var _r=new function(){this.getByteLengthOfL_AtObj=function(t,e){if("8"!=t.substring(e+2,e+3))return 1;var n=parseInt(t.substring(e+3,e+4));return 0==n?-1:n>0&&10>n?n+1:-2},this.getHexOfL_AtObj=function(t,e){var n=this.getByteLengthOfL_AtObj(t,e);return 1>n?"":t.substring(e+2,e+2+2*n)},this.getIntOfL_AtObj=function(t,e){var n=this.getHexOfL_AtObj(t,e);if(""==n)return-1;var r;return r=parseInt(n.substring(0,1))<8?new o(n,16):new o(n.substring(2),16),r.intValue()},this.getStartPosOfV_AtObj=function(t,e){var n=this.getByteLengthOfL_AtObj(t,e);return 0>n?n:e+2*(n+1)},this.getHexOfV_AtObj=function(t,e){var n=this.getStartPosOfV_AtObj(t,e),r=this.getIntOfL_AtObj(t,e);return t.substring(n,n+2*r)},this.getHexOfTLV_AtObj=function(t,e){var n=t.substr(e,2),r=this.getHexOfL_AtObj(t,e),i=this.getHexOfV_AtObj(t,e);return n+r+i},this.getPosOfNextSibling_AtObj=function(t,e){var n=this.getStartPosOfV_AtObj(t,e),r=this.getIntOfL_AtObj(t,e);return n+2*r},this.getPosArrayOfChildren_AtObj=function(t,e){var n=new Array,r=this.getStartPosOfV_AtObj(t,e);n.push(r);for(var i=this.getIntOfL_AtObj(t,e),s=r,o=0;;){var a=this.getPosOfNextSibling_AtObj(t,s);if(null==a||a-r>=2*i)break;if(o>=200)break;n.push(a),s=a,o++}return n},this.getNthChildIndex_AtObj=function(t,e,n){var r=this.getPosArrayOfChildren_AtObj(t,e);return r[n]},this.getDecendantIndexByNthList=function(t,e,n){if(0==n.length)return e;var r=n.shift(),i=this.getPosArrayOfChildren_AtObj(t,e);return this.getDecendantIndexByNthList(t,i[r],n)},this.getDecendantHexTLVByNthList=function(t,e,n){var r=this.getDecendantIndexByNthList(t,e,n);return this.getHexOfTLV_AtObj(t,r)},this.getDecendantHexVByNthList=function(t,e,n){var r=this.getDecendantIndexByNthList(t,e,n);return this.getHexOfV_AtObj(t,r)}};_r.getVbyList=function(t,e,n,r){var i=this.getDecendantIndexByNthList(t,e,n);if(void 0===i)throw"can't find nthList object";if(void 0!==r&&t.substr(i,2)!=r)throw"checking tag doesn't match: "+t.substr(i,2)+"!="+r;return this.getHexOfV_AtObj(t,i)},_r.hextooidstr=function(t){var e=function(t,e){return t.length>=e?t:new Array(e-t.length+1).join("0")+t},n=[],r=t.substr(0,2),i=parseInt(r,16);n[0]=new String(Math.floor(i/40)),n[1]=new String(i%40);for(var s=t.substr(2),o=[],a=0;a<s.length/2;a++)o.push(parseInt(s.substr(2*a,2),16));for(var u=[],h="",a=0;a<o.length;a++)128&o[a]?h+=e((127&o[a]).toString(2),7):(h+=e((127&o[a]).toString(2),7),u.push(new String(parseInt(h,2))),h="");var c=n.join(".");return u.length>0&&(c=c+"."+u.join(".")),c},_r.dump=function(t,e,n,r){var i=function(t,e){if(t.length<=2*e)return t;var n=t.substr(0,e)+"..(total "+t.length/2+"bytes).."+t.substr(t.length-e,e);return n};void 0===e&&(e={ommit_long_octet:32}),void 0===n&&(n=0),void 0===r&&(r="");var s=e.ommit_long_octet;if("01"==t.substr(n,2)){var o=_r.getHexOfV_AtObj(t,n);return"00"==o?r+"BOOLEAN FALSE\n":r+"BOOLEAN TRUE\n"}if("02"==t.substr(n,2)){var o=_r.getHexOfV_AtObj(t,n);return r+"INTEGER "+i(o,s)+"\n"}if("03"==t.substr(n,2)){var o=_r.getHexOfV_AtObj(t,n);return r+"BITSTRING "+i(o,s)+"\n"}if("04"==t.substr(n,2)){var o=_r.getHexOfV_AtObj(t,n);if(_r.isASN1HEX(o)){var a=r+"OCTETSTRING, encapsulates\n";return a+=_r.dump(o,e,0,r+"  ")}return r+"OCTETSTRING "+i(o,s)+"\n"}if("05"==t.substr(n,2))return r+"NULL\n";if("06"==t.substr(n,2)){var u=_r.getHexOfV_AtObj(t,n),h=KJUR.asn1.ASN1Util.oidHexToInt(u),c=KJUR.asn1.x509.OID.oid2name(h),f=h.replace(/\./g," ");return""!=c?r+"ObjectIdentifier "+c+" ("+f+")\n":r+"ObjectIdentifier ("+f+")\n"}if("0c"==t.substr(n,2))return r+"UTF8String '"+Sn(_r.getHexOfV_AtObj(t,n))+"'\n";if("13"==t.substr(n,2))return r+"PrintableString '"+Sn(_r.getHexOfV_AtObj(t,n))+"'\n";if("14"==t.substr(n,2))return r+"TeletexString '"+Sn(_r.getHexOfV_AtObj(t,n))+"'\n";if("16"==t.substr(n,2))return r+"IA5String '"+Sn(_r.getHexOfV_AtObj(t,n))+"'\n";if("17"==t.substr(n,2))return r+"UTCTime "+Sn(_r.getHexOfV_AtObj(t,n))+"\n";if("18"==t.substr(n,2))return r+"GeneralizedTime "+Sn(_r.getHexOfV_AtObj(t,n))+"\n";if("30"==t.substr(n,2)){if("3000"==t.substr(n,4))return r+"SEQUENCE {}\n";var a=r+"SEQUENCE\n",l=_r.getPosArrayOfChildren_AtObj(t,n),d=e;if((2==l.length||3==l.length)&&"06"==t.substr(l[0],2)&&"04"==t.substr(l[l.length-1],2)){var p=_r.getHexOfV_AtObj(t,l[0]),h=KJUR.asn1.ASN1Util.oidHexToInt(p),c=KJUR.asn1.x509.OID.oid2name(h),g=JSON.parse(JSON.stringify(e));g.x509ExtName=c,d=g}for(var y=0;y<l.length;y++)a+=_r.dump(t,d,l[y],r+"  ");return a}if("31"==t.substr(n,2)){for(var a=r+"SET\n",l=_r.getPosArrayOfChildren_AtObj(t,n),y=0;y<l.length;y++)a+=_r.dump(t,e,l[y],r+"  ");return a}var v=parseInt(t.substr(n,2),16);if(0!=(128&v)){var m=31&v;if(0!=(32&v)){for(var a=r+"["+m+"]\n",l=_r.getPosArrayOfChildren_AtObj(t,n),y=0;y<l.length;y++)a+=_r.dump(t,e,l[y],r+"  ");return a}var o=_r.getHexOfV_AtObj(t,n);"68747470"==o.substr(0,8)&&(o=Sn(o)),"subjectAltName"===e.x509ExtName&&2==m&&(o=Sn(o));var a=r+"["+m+"] "+o+"\n";return a}return r+"UNKNOWN("+t.substr(n,2)+") "+_r.getHexOfV_AtObj(t,n)+"\n"},_r.isASN1HEX=function(t){if(t.length%2==1)return!1;var e=_r.getIntOfL_AtObj(t,0),n=t.substr(0,2),r=_r.getHexOfL_AtObj(t,0),i=t.length-n.length-r.length;return i==2*e},/*! asn1x509-1.0.14.js (c) 2013-2015 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.asn1&&KJUR.asn1||(KJUR.asn1={}),"undefined"!=typeof KJUR.asn1.x509&&KJUR.asn1.x509||(KJUR.asn1.x509={}),KJUR.asn1.x509.Certificate=function(t){KJUR.asn1.x509.Certificate.superclass.constructor.call(this);this.setRsaPrvKeyByPEMandPass=function(t,e){var n=Or.getDecryptedKeyHex(t,e),r=new ve;r.readPrivateKeyFromASN1HexString(n),this.prvKey=r},this.sign=function(){this.asn1SignatureAlg=this.asn1TBSCert.asn1SignatureAlg,sig=new KJUR.crypto.Signature({alg:"SHA1withRSA"}),sig.init(this.prvKey),sig.updateHex(this.asn1TBSCert.getEncodedHex()),this.hexSig=sig.sign(),this.asn1Sig=new KJUR.asn1.DERBitString({hex:"00"+this.hexSig});var t=new KJUR.asn1.DERSequence({array:[this.asn1TBSCert,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=t.getEncodedHex(),this.isModified=!1},this.setSignatureHex=function(t){this.asn1SignatureAlg=this.asn1TBSCert.asn1SignatureAlg,this.hexSig=t,this.asn1Sig=new KJUR.asn1.DERBitString({hex:"00"+this.hexSig});var e=new KJUR.asn1.DERSequence({array:[this.asn1TBSCert,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=e.getEncodedHex(),this.isModified=!1},this.getEncodedHex=function(){if(0==this.isModified&&null!=this.hTLV)return this.hTLV;throw"not signed yet"},this.getPEMString=function(){var t=this.getEncodedHex(),e=sr.enc.Hex.parse(t),n=sr.enc.Base64.stringify(e),r=n.replace(/(.{64})/g,"$1\r\n");return"-----BEGIN CERTIFICATE-----\r\n"+r+"\r\n-----END CERTIFICATE-----\r\n"},"undefined"!=typeof t&&("undefined"!=typeof t.tbscertobj&&(this.asn1TBSCert=t.tbscertobj),"undefined"!=typeof t.prvkeyobj?this.prvKey=t.prvkeyobj:"undefined"!=typeof t.rsaprvkey?this.prvKey=t.rsaprvkey:"undefined"!=typeof t.rsaprvpem&&"undefined"!=typeof t.rsaprvpas&&this.setRsaPrvKeyByPEMandPass(t.rsaprvpem,t.rsaprvpas))},ir.lang.extend(KJUR.asn1.x509.Certificate,KJUR.asn1.ASN1Object),KJUR.asn1.x509.TBSCertificate=function(t){KJUR.asn1.x509.TBSCertificate.superclass.constructor.call(this),this._initialize=function(){this.asn1Array=new Array,this.asn1Version=new KJUR.asn1.DERTaggedObject({obj:new KJUR.asn1.DERInteger({"int":2})}),this.asn1SerialNumber=null,this.asn1SignatureAlg=null,this.asn1Issuer=null,this.asn1NotBefore=null,this.asn1NotAfter=null,this.asn1Subject=null,this.asn1SubjPKey=null,this.extensionsArray=new Array},this.setSerialNumberByParam=function(t){this.asn1SerialNumber=new KJUR.asn1.DERInteger(t)},this.setSignatureAlgByParam=function(t){this.asn1SignatureAlg=new KJUR.asn1.x509.AlgorithmIdentifier(t)},this.setIssuerByParam=function(t){this.asn1Issuer=new KJUR.asn1.x509.X500Name(t)},this.setNotBeforeByParam=function(t){this.asn1NotBefore=new KJUR.asn1.x509.Time(t)},this.setNotAfterByParam=function(t){this.asn1NotAfter=new KJUR.asn1.x509.Time(t)},this.setSubjectByParam=function(t){this.asn1Subject=new KJUR.asn1.x509.X500Name(t)},this.setSubjectPublicKeyByParam=function(t){this.asn1SubjPKey=new KJUR.asn1.x509.SubjectPublicKeyInfo(t)},this.setSubjectPublicKeyByGetKey=function(t){var e=Cr.getKey(t);this.asn1SubjPKey=new KJUR.asn1.x509.SubjectPublicKeyInfo(e)},this.appendExtension=function(t){this.extensionsArray.push(t)},this.appendExtensionByName=function(t,e){if("basicconstraints"==t.toLowerCase()){var n=new KJUR.asn1.x509.BasicConstraints(e);this.appendExtension(n)}else if("keyusage"==t.toLowerCase()){var n=new KJUR.asn1.x509.KeyUsage(e);this.appendExtension(n)}else if("crldistributionpoints"==t.toLowerCase()){var n=new KJUR.asn1.x509.CRLDistributionPoints(e);this.appendExtension(n)}else if("extkeyusage"==t.toLowerCase()){var n=new KJUR.asn1.x509.ExtKeyUsage(e);this.appendExtension(n)}else{if("authoritykeyidentifier"!=t.toLowerCase())throw"unsupported extension name: "+t;var n=new KJUR.asn1.x509.AuthorityKeyIdentifier(e);this.appendExtension(n)}},this.getEncodedHex=function(){if(null==this.asn1NotBefore||null==this.asn1NotAfter)throw"notBefore and/or notAfter not set";var t=new KJUR.asn1.DERSequence({array:[this.asn1NotBefore,this.asn1NotAfter]});if(this.asn1Array=new Array,this.asn1Array.push(this.asn1Version),this.asn1Array.push(this.asn1SerialNumber),this.asn1Array.push(this.asn1SignatureAlg),this.asn1Array.push(this.asn1Issuer),this.asn1Array.push(t),this.asn1Array.push(this.asn1Subject),this.asn1Array.push(this.asn1SubjPKey),this.extensionsArray.length>0){var e=new KJUR.asn1.DERSequence({array:this.extensionsArray}),n=new KJUR.asn1.DERTaggedObject({explicit:!0,tag:"a3",obj:e});this.asn1Array.push(n)}var r=new KJUR.asn1.DERSequence({array:this.asn1Array});return this.hTLV=r.getEncodedHex(),this.isModified=!1,this.hTLV},this._initialize()},ir.lang.extend(KJUR.asn1.x509.TBSCertificate,KJUR.asn1.ASN1Object),KJUR.asn1.x509.Extension=function(t){KJUR.asn1.x509.Extension.superclass.constructor.call(this);this.getEncodedHex=function(){var t=new KJUR.asn1.DERObjectIdentifier({oid:this.oid}),e=new KJUR.asn1.DEROctetString({hex:this.getExtnValueHex()}),n=new Array;n.push(t),this.critical&&n.push(new KJUR.asn1.DERBoolean),n.push(e);var r=new KJUR.asn1.DERSequence({array:n});return r.getEncodedHex()},this.critical=!1,"undefined"!=typeof t&&"undefined"!=typeof t.critical&&(this.critical=t.critical)},ir.lang.extend(KJUR.asn1.x509.Extension,KJUR.asn1.ASN1Object),KJUR.asn1.x509.KeyUsage=function(t){KJUR.asn1.x509.KeyUsage.superclass.constructor.call(this,t),this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()},this.oid="2.5.29.15","undefined"!=typeof t&&"undefined"!=typeof t.bin&&(this.asn1ExtnValue=new KJUR.asn1.DERBitString(t))},ir.lang.extend(KJUR.asn1.x509.KeyUsage,KJUR.asn1.x509.Extension),KJUR.asn1.x509.BasicConstraints=function(t){KJUR.asn1.x509.BasicConstraints.superclass.constructor.call(this,t);this.getExtnValueHex=function(){var t=new Array;this.cA&&t.push(new KJUR.asn1.DERBoolean),this.pathLen>-1&&t.push(new KJUR.asn1.DERInteger({"int":this.pathLen}));var e=new KJUR.asn1.DERSequence({array:t});return this.asn1ExtnValue=e,this.asn1ExtnValue.getEncodedHex()},this.oid="2.5.29.19",this.cA=!1,this.pathLen=-1,"undefined"!=typeof t&&("undefined"!=typeof t.cA&&(this.cA=t.cA),"undefined"!=typeof t.pathLen&&(this.pathLen=t.pathLen))},ir.lang.extend(KJUR.asn1.x509.BasicConstraints,KJUR.asn1.x509.Extension),KJUR.asn1.x509.CRLDistributionPoints=function(t){KJUR.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this,t),this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()},this.setByDPArray=function(t){this.asn1ExtnValue=new KJUR.asn1.DERSequence({array:t})},this.setByOneURI=function(t){var e=new KJUR.asn1.x509.GeneralNames([{uri:t}]),n=new KJUR.asn1.x509.DistributionPointName(e),r=new KJUR.asn1.x509.DistributionPoint({dpobj:n});this.setByDPArray([r])},this.oid="2.5.29.31","undefined"!=typeof t&&("undefined"!=typeof t.array?this.setByDPArray(t.array):"undefined"!=typeof t.uri&&this.setByOneURI(t.uri))},ir.lang.extend(KJUR.asn1.x509.CRLDistributionPoints,KJUR.asn1.x509.Extension),KJUR.asn1.x509.ExtKeyUsage=function(t){KJUR.asn1.x509.ExtKeyUsage.superclass.constructor.call(this,t),this.setPurposeArray=function(t){this.asn1ExtnValue=new KJUR.asn1.DERSequence;for(var e=0;e<t.length;e++){var n=new KJUR.asn1.DERObjectIdentifier(t[e]);this.asn1ExtnValue.appendASN1Object(n)}},this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()},this.oid="2.5.29.37","undefined"!=typeof t&&"undefined"!=typeof t.array&&this.setPurposeArray(t.array)},ir.lang.extend(KJUR.asn1.x509.ExtKeyUsage,KJUR.asn1.x509.Extension),KJUR.asn1.x509.AuthorityKeyIdentifier=function(t){KJUR.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this,t),this.asn1KID=null,this.asn1CertIssuer=null,this.asn1CertSN=null,this.getExtnValueHex=function(){var t=new Array;this.asn1KID&&t.push(new KJUR.asn1.DERTaggedObject({explicit:!1,tag:"80",obj:this.asn1KID})),this.asn1CertIssuer&&t.push(new KJUR.asn1.DERTaggedObject({explicit:!1,tag:"a1",obj:this.asn1CertIssuer})),this.asn1CertSN&&t.push(new KJUR.asn1.DERTaggedObject({explicit:!1,tag:"82",obj:this.asn1CertSN}));var e=new KJUR.asn1.DERSequence({array:t});return this.asn1ExtnValue=e,this.asn1ExtnValue.getEncodedHex()},this.setKIDByParam=function(t){this.asn1KID=new KJUR.asn1.DEROctetString(t)},this.setCertIssuerByParam=function(t){this.asn1CertIssuer=new KJUR.asn1.x509.X500Name(t)},this.setCertSNByParam=function(t){this.asn1CertSN=new KJUR.asn1.DERInteger(t)},this.oid="2.5.29.35","undefined"!=typeof t&&("undefined"!=typeof t.kid&&this.setKIDByParam(t.kid),"undefined"!=typeof t.issuer&&this.setCertIssuerByParam(t.issuer),"undefined"!=typeof t.sn&&this.setCertSNByParam(t.sn))},ir.lang.extend(KJUR.asn1.x509.AuthorityKeyIdentifier,KJUR.asn1.x509.Extension),KJUR.asn1.x509.CRL=function(t){KJUR.asn1.x509.CRL.superclass.constructor.call(this);this.setRsaPrvKeyByPEMandPass=function(t,e){var n=Or.getDecryptedKeyHex(t,e),r=new ve;r.readPrivateKeyFromASN1HexString(n),this.rsaPrvKey=r},this.sign=function(){this.asn1SignatureAlg=this.asn1TBSCertList.asn1SignatureAlg,sig=new KJUR.crypto.Signature({alg:"SHA1withRSA",prov:"cryptojs/jsrsa"}),sig.initSign(this.rsaPrvKey),sig.updateHex(this.asn1TBSCertList.getEncodedHex()),this.hexSig=sig.sign(),this.asn1Sig=new KJUR.asn1.DERBitString({hex:"00"+this.hexSig});var t=new KJUR.asn1.DERSequence({array:[this.asn1TBSCertList,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=t.getEncodedHex(),this.isModified=!1},this.getEncodedHex=function(){if(0==this.isModified&&null!=this.hTLV)return this.hTLV;throw"not signed yet"},this.getPEMString=function(){var t=this.getEncodedHex(),e=sr.enc.Hex.parse(t),n=sr.enc.Base64.stringify(e),r=n.replace(/(.{64})/g,"$1\r\n");return"-----BEGIN X509 CRL-----\r\n"+r+"\r\n-----END X509 CRL-----\r\n"},"undefined"!=typeof t&&("undefined"!=typeof t.tbsobj&&(this.asn1TBSCertList=t.tbsobj),"undefined"!=typeof t.rsaprvkey&&(this.rsaPrvKey=t.rsaprvkey),"undefined"!=typeof t.rsaprvpem&&"undefined"!=typeof t.rsaprvpas&&this.setRsaPrvKeyByPEMandPass(t.rsaprvpem,t.rsaprvpas))},ir.lang.extend(KJUR.asn1.x509.CRL,KJUR.asn1.ASN1Object),KJUR.asn1.x509.TBSCertList=function(t){KJUR.asn1.x509.TBSCertList.superclass.constructor.call(this);this.setSignatureAlgByParam=function(t){this.asn1SignatureAlg=new KJUR.asn1.x509.AlgorithmIdentifier(t)},this.setIssuerByParam=function(t){this.asn1Issuer=new KJUR.asn1.x509.X500Name(t)},this.setThisUpdateByParam=function(t){this.asn1ThisUpdate=new KJUR.asn1.x509.Time(t)},this.setNextUpdateByParam=function(t){this.asn1NextUpdate=new KJUR.asn1.x509.Time(t)},this.addRevokedCert=function(t,e){var n={};void 0!=t&&null!=t&&(n.sn=t),void 0!=e&&null!=e&&(n.time=e);var r=new KJUR.asn1.x509.CRLEntry(n);this.aRevokedCert.push(r)},this.getEncodedHex=function(){if(this.asn1Array=new Array,null!=this.asn1Version&&this.asn1Array.push(this.asn1Version),this.asn1Array.push(this.asn1SignatureAlg),this.asn1Array.push(this.asn1Issuer),this.asn1Array.push(this.asn1ThisUpdate),null!=this.asn1NextUpdate&&this.asn1Array.push(this.asn1NextUpdate),this.aRevokedCert.length>0){var t=new KJUR.asn1.DERSequence({array:this.aRevokedCert});this.asn1Array.push(t)}var e=new KJUR.asn1.DERSequence({array:this.asn1Array});return this.hTLV=e.getEncodedHex(),this.isModified=!1,this.hTLV},this._initialize=function(){this.asn1Version=null,this.asn1SignatureAlg=null,this.asn1Issuer=null,this.asn1ThisUpdate=null,this.asn1NextUpdate=null,this.aRevokedCert=new Array},this._initialize()},ir.lang.extend(KJUR.asn1.x509.TBSCertList,KJUR.asn1.ASN1Object),KJUR.asn1.x509.CRLEntry=function(t){KJUR.asn1.x509.CRLEntry.superclass.constructor.call(this);this.setCertSerial=function(t){this.sn=new KJUR.asn1.DERInteger(t)},this.setRevocationDate=function(t){this.time=new KJUR.asn1.x509.Time(t)},this.getEncodedHex=function(){var t=new KJUR.asn1.DERSequence({array:[this.sn,this.time]});return this.TLV=t.getEncodedHex(),this.TLV},"undefined"!=typeof t&&("undefined"!=typeof t.time&&this.setRevocationDate(t.time),"undefined"!=typeof t.sn&&this.setCertSerial(t.sn))},ir.lang.extend(KJUR.asn1.x509.CRLEntry,KJUR.asn1.ASN1Object),KJUR.asn1.x509.X500Name=function(t){if(KJUR.asn1.x509.X500Name.superclass.constructor.call(this),this.asn1Array=new Array,this.setByString=function(t){var e=t.split("/");e.shift();for(var n=0;n<e.length;n++)this.asn1Array.push(new KJUR.asn1.x509.RDN({str:e[n]}))},this.setByObject=function(t){for(var e in t)if(t.hasOwnProperty(e)){var n=new KJUR.asn1.x509.RDN({str:e+"="+t[e]});this.asn1Array?this.asn1Array.push(n):this.asn1Array=[n]}},this.getEncodedHex=function(){if("string"==typeof this.hTLV)return this.hTLV;var t=new KJUR.asn1.DERSequence({array:this.asn1Array});return this.hTLV=t.getEncodedHex(),this.hTLV},"undefined"!=typeof t){if("undefined"!=typeof t.str?this.setByString(t.str):"object"==typeof t&&this.setByObject(t),"undefined"!=typeof t.certissuer){var e=new Xn;e.hex=Xn.pemToHex(t.certissuer),this.hTLV=e.getIssuerHex()}if("undefined"!=typeof t.certsubject){var e=new Xn;e.hex=Xn.pemToHex(t.certsubject),this.hTLV=e.getSubjectHex()}}},ir.lang.extend(KJUR.asn1.x509.X500Name,KJUR.asn1.ASN1Object),KJUR.asn1.x509.RDN=function(t){KJUR.asn1.x509.RDN.superclass.constructor.call(this),this.asn1Array=new Array,this.addByString=function(t){this.asn1Array.push(new KJUR.asn1.x509.AttributeTypeAndValue({str:t}))},this.getEncodedHex=function(){var t=new KJUR.asn1.DERSet({array:this.asn1Array});return this.TLV=t.getEncodedHex(),this.TLV},"undefined"!=typeof t&&"undefined"!=typeof t.str&&this.addByString(t.str)},ir.lang.extend(KJUR.asn1.x509.RDN,KJUR.asn1.ASN1Object),KJUR.asn1.x509.AttributeTypeAndValue=function(t){KJUR.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this);var e="utf8";this.setByString=function(t){if(!t.match(/^([^=]+)=(.+)$/))throw"malformed attrTypeAndValueStr: "+t;this.setByAttrTypeAndValueStr(RegExp.$1,RegExp.$2)},this.setByAttrTypeAndValueStr=function(t,n){this.typeObj=KJUR.asn1.x509.OID.atype2obj(t);var r=e;"C"==t&&(r="prn"),this.valueObj=this.getValueObj(r,n)},this.getValueObj=function(t,e){if("utf8"==t)return new KJUR.asn1.DERUTF8String({str:e});if("prn"==t)return new KJUR.asn1.DERPrintableString({str:e});if("tel"==t)return new KJUR.asn1.DERTeletexString({str:e});if("ia5"==t)return new KJUR.asn1.DERIA5String({str:e});throw"unsupported directory string type: type="+t+" value="+e},this.getEncodedHex=function(){var t=new KJUR.asn1.DERSequence({array:[this.typeObj,this.valueObj]});return this.TLV=t.getEncodedHex(),this.TLV},"undefined"!=typeof t&&"undefined"!=typeof t.str&&this.setByString(t.str)},ir.lang.extend(KJUR.asn1.x509.AttributeTypeAndValue,KJUR.asn1.ASN1Object),KJUR.asn1.x509.SubjectPublicKeyInfo=function(t){KJUR.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);this.setRSAKey=function(t){if(!ve.prototype.isPrototypeOf(t))throw"argument is not RSAKey instance";this.rsaKey=t;var e=new KJUR.asn1.DERInteger({bigint:t.n}),n=new KJUR.asn1.DERInteger({"int":t.e}),r=new KJUR.asn1.DERSequence({array:[e,n]}),i=r.getEncodedHex();this.asn1AlgId=new KJUR.asn1.x509.AlgorithmIdentifier({name:"rsaEncryption"}),this.asn1SubjPKey=new KJUR.asn1.DERBitString({hex:"00"+i})},this.setRSAPEM=function(t){if(!t.match(/-----BEGIN PUBLIC KEY-----/))throw"key not supported";var e=t;e=e.replace(/^-----[^-]+-----/,""),e=e.replace(/-----[^-]+-----\s*$/,"");var n=e.replace(/\s+/g,""),r=sr.enc.Base64.parse(n),i=sr.enc.Hex.stringify(r),s=Pn(i),o=s[1],a=o.substr(2),u=Pn(a),h=new ve;h.setPublic(u[0],u[1]),this.setRSAKey(h)},this.getASN1Object=function(){if(null==this.asn1AlgId||null==this.asn1SubjPKey)throw"algId and/or subjPubKey not set";var t=new KJUR.asn1.DERSequence({array:[this.asn1AlgId,this.asn1SubjPKey]});return t},this.getEncodedHex=function(){var t=this.getASN1Object();return this.hTLV=t.getEncodedHex(),this.hTLV},this._setRSAKey=function(t){var e=KJUR.asn1.ASN1Util.newObject({seq:[{"int":{bigint:t.n}},{"int":{"int":t.e}}]}),n=e.getEncodedHex();this.asn1AlgId=new KJUR.asn1.x509.AlgorithmIdentifier({name:"rsaEncryption"}),this.asn1SubjPKey=new KJUR.asn1.DERBitString({hex:"00"+n})},this._setEC=function(t){var e=new KJUR.asn1.DERObjectIdentifier({name:t.curveName});this.asn1AlgId=new KJUR.asn1.x509.AlgorithmIdentifier({name:"ecPublicKey",asn1params:e}),this.asn1SubjPKey=new KJUR.asn1.DERBitString({hex:"00"+t.pubKeyHex})},this._setDSA=function(t){var e=new KJUR.asn1.ASN1Util.newObject({seq:[{"int":{bigint:t.p}},{"int":{bigint:t.q}},{"int":{bigint:t.g}}]});this.asn1AlgId=new KJUR.asn1.x509.AlgorithmIdentifier({name:"dsa",asn1params:e});var n=new KJUR.asn1.DERInteger({bigint:t.y});this.asn1SubjPKey=new KJUR.asn1.DERBitString({hex:"00"+n.getEncodedHex()})},"undefined"!=typeof t&&("undefined"!=typeof ve&&t instanceof ve?this._setRSAKey(t):"undefined"!=typeof KJUR.crypto.ECDSA&&t instanceof KJUR.crypto.ECDSA?this._setEC(t):"undefined"!=typeof KJUR.crypto.DSA&&t instanceof KJUR.crypto.DSA?this._setDSA(t):"undefined"!=typeof t.rsakey?this.setRSAKey(t.rsakey):"undefined"!=typeof t.rsapem&&this.setRSAPEM(t.rsapem))},ir.lang.extend(KJUR.asn1.x509.SubjectPublicKeyInfo,KJUR.asn1.ASN1Object),KJUR.asn1.x509.Time=function(t){KJUR.asn1.x509.Time.superclass.constructor.call(this);this.setTimeParams=function(t){this.timeParams=t},this.getEncodedHex=function(){var t=null;return t=null!=this.timeParams?"utc"==this.type?new KJUR.asn1.DERUTCTime(this.timeParams):new KJUR.asn1.DERGeneralizedTime(this.timeParams):"utc"==this.type?new KJUR.asn1.DERUTCTime:new KJUR.asn1.DERGeneralizedTime,this.TLV=t.getEncodedHex(),this.TLV},this.type="utc","undefined"!=typeof t&&("undefined"!=typeof t.type?this.type=t.type:"undefined"!=typeof t.str&&(t.str.match(/^[0-9]{12}Z$/)&&(this.type="utc"),t.str.match(/^[0-9]{14}Z$/)&&(this.type="gen")),this.timeParams=t)},ir.lang.extend(KJUR.asn1.x509.Time,KJUR.asn1.ASN1Object),KJUR.asn1.x509.AlgorithmIdentifier=function(t){KJUR.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this);this.getEncodedHex=function(){if(null==this.nameAlg&&null==this.asn1Alg)throw"algorithm not specified";null!=this.nameAlg&&null==this.asn1Alg&&(this.asn1Alg=KJUR.asn1.x509.OID.name2obj(this.nameAlg));var t=[this.asn1Alg];this.paramEmpty||t.push(this.asn1Params);var e=new KJUR.asn1.DERSequence({array:t});return this.hTLV=e.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("undefined"!=typeof t.name&&(this.nameAlg=t.name),"undefined"!=typeof t.asn1params&&(this.asn1Params=t.asn1params),"undefined"!=typeof t.paramempty&&(this.paramEmpty=t.paramempty)),null==this.asn1Params&&(this.asn1Params=new KJUR.asn1.DERNull)},ir.lang.extend(KJUR.asn1.x509.AlgorithmIdentifier,KJUR.asn1.ASN1Object),KJUR.asn1.x509.GeneralName=function(t){KJUR.asn1.x509.GeneralName.superclass.constructor.call(this);var e={rfc822:"81",dns:"82",dn:"a4",uri:"86"};this.explicit=!1,this.setByParam=function(t){var n=null;if("undefined"!=typeof t){if("undefined"!=typeof t.rfc822&&(this.type="rfc822",n=new KJUR.asn1.DERIA5String({str:t[this.type]})),"undefined"!=typeof t.dns&&(this.type="dns",n=new KJUR.asn1.DERIA5String({str:t[this.type]})),"undefined"!=typeof t.uri&&(this.type="uri",n=new KJUR.asn1.DERIA5String({str:t[this.type]})),"undefined"!=typeof t.certissuer){this.type="dn",this.explicit=!0;var r=t.certissuer,i=null;if(r.match(/^[0-9A-Fa-f]+$/),-1!=r.indexOf("-----BEGIN ")&&(i=Xn.pemToHex(r)),null==i)throw"certissuer param not cert";var s=new Xn;s.hex=i;var o=s.getIssuerHex();n=new KJUR.asn1.ASN1Object,n.hTLV=o}if("undefined"!=typeof t.certsubj){this.type="dn",this.explicit=!0;var r=t.certsubj,i=null;if(r.match(/^[0-9A-Fa-f]+$/),-1!=r.indexOf("-----BEGIN ")&&(i=Xn.pemToHex(r)),null==i)throw"certsubj param not cert";var s=new Xn;s.hex=i;var o=s.getSubjectHex();n=new KJUR.asn1.ASN1Object,n.hTLV=o}if(null==this.type)throw"unsupported type in params="+t;this.asn1Obj=new KJUR.asn1.DERTaggedObject({explicit:this.explicit,tag:e[this.type],obj:n})}},this.getEncodedHex=function(){return this.asn1Obj.getEncodedHex()},"undefined"!=typeof t&&this.setByParam(t)},ir.lang.extend(KJUR.asn1.x509.GeneralName,KJUR.asn1.ASN1Object),KJUR.asn1.x509.GeneralNames=function(t){KJUR.asn1.x509.GeneralNames.superclass.constructor.call(this);this.setByParamArray=function(t){for(var e=0;e<t.length;e++){var n=new KJUR.asn1.x509.GeneralName(t[e]);this.asn1Array.push(n)}},this.getEncodedHex=function(){var t=new KJUR.asn1.DERSequence({array:this.asn1Array});return t.getEncodedHex()},this.asn1Array=new Array,"undefined"!=typeof t&&this.setByParamArray(t)},ir.lang.extend(KJUR.asn1.x509.GeneralNames,KJUR.asn1.ASN1Object),KJUR.asn1.x509.DistributionPointName=function(t){KJUR.asn1.x509.DistributionPointName.superclass.constructor.call(this);if(this.getEncodedHex=function(){if("full"!=this.type)throw"currently type shall be 'full': "+this.type;return this.asn1Obj=new KJUR.asn1.DERTaggedObject({explicit:!1,tag:this.tag,obj:this.asn1V}),this.hTLV=this.asn1Obj.getEncodedHex(),this.hTLV},"undefined"!=typeof t){if(!KJUR.asn1.x509.GeneralNames.prototype.isPrototypeOf(t))throw"This class supports GeneralNames only as argument";this.type="full",this.tag="a0",this.asn1V=t}},ir.lang.extend(KJUR.asn1.x509.DistributionPointName,KJUR.asn1.ASN1Object),KJUR.asn1.x509.DistributionPoint=function(t){KJUR.asn1.x509.DistributionPoint.superclass.constructor.call(this);this.getEncodedHex=function(){var t=new KJUR.asn1.DERSequence;if(null!=this.asn1DP){var e=new KJUR.asn1.DERTaggedObject({explicit:!0,tag:"a0",obj:this.asn1DP});t.appendASN1Object(e)}return this.hTLV=t.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&"undefined"!=typeof t.dpobj&&(this.asn1DP=t.dpobj)},ir.lang.extend(KJUR.asn1.x509.DistributionPoint,KJUR.asn1.ASN1Object),KJUR.asn1.x509.OID=new function(t){this.atype2oidList={C:"2.5.4.6",O:"2.5.4.10",OU:"2.5.4.11",ST:"2.5.4.8",L:"2.5.4.7",CN:"2.5.4.3",SN:"2.5.4.4",DN:"2.5.4.49",DC:"0.9.2342.19200300.100.1.25"},this.name2oidList={sha1:"1.3.14.3.2.26",sha256:"2.16.840.1.101.3.4.2.1",sha384:"2.16.840.1.101.3.4.2.2",sha512:"2.16.840.1.101.3.4.2.3",sha224:"2.16.840.1.101.3.4.2.4",md5:"1.2.840.113549.2.5",md2:"1.3.14.7.2.2.1",ripemd160:"1.3.36.3.2.1",MD2withRSA:"1.2.840.113549.1.1.2",MD4withRSA:"1.2.840.113549.1.1.3",MD5withRSA:"1.2.840.113549.1.1.4",SHA1withRSA:"1.2.840.113549.1.1.5",SHA224withRSA:"1.2.840.113549.1.1.14",SHA256withRSA:"1.2.840.113549.1.1.11",SHA384withRSA:"1.2.840.113549.1.1.12",SHA512withRSA:"1.2.840.113549.1.1.13",SHA1withECDSA:"1.2.840.10045.4.1",SHA224withECDSA:"1.2.840.10045.4.3.1",SHA256withECDSA:"1.2.840.10045.4.3.2",SHA384withECDSA:"1.2.840.10045.4.3.3",SHA512withECDSA:"1.2.840.10045.4.3.4",dsa:"1.2.840.10040.4.1",SHA1withDSA:"1.2.840.10040.4.3",SHA224withDSA:"2.16.840.1.101.3.4.3.1",SHA256withDSA:"2.16.840.1.101.3.4.3.2",rsaEncryption:"1.2.840.113549.1.1.1",countryName:"2.5.4.6",organization:"2.5.4.10",organizationalUnit:"2.5.4.11",stateOrProvinceName:"2.5.4.8",locality:"2.5.4.7",commonName:"2.5.4.3",subjectKeyIdentifier:"2.5.29.14",keyUsage:"2.5.29.15",subjectAltName:"2.5.29.17",basicConstraints:"2.5.29.19",nameConstraints:"2.5.29.30",cRLDistributionPoints:"2.5.29.31",certificatePolicies:"2.5.29.32",authorityKeyIdentifier:"2.5.29.35",policyConstraints:"2.5.29.36",extKeyUsage:"2.5.29.37",authorityInfoAccess:"1.3.6.1.5.5.7.1.1",anyExtendedKeyUsage:"2.5.29.37.0",serverAuth:"1.3.6.1.5.5.7.3.1",clientAuth:"1.3.6.1.5.5.7.3.2",codeSigning:"1.3.6.1.5.5.7.3.3",emailProtection:"1.3.6.1.5.5.7.3.4",timeStamping:"1.3.6.1.5.5.7.3.8",ocspSigning:"1.3.6.1.5.5.7.3.9",ecPublicKey:"1.2.840.10045.2.1",secp256r1:"1.2.840.10045.3.1.7",secp256k1:"1.3.132.0.10",secp384r1:"1.3.132.0.34",pkcs5PBES2:"1.2.840.113549.1.5.13",pkcs5PBKDF2:"1.2.840.113549.1.5.12","des-EDE3-CBC":"1.2.840.113549.3.7",data:"1.2.840.113549.1.7.1","signed-data":"1.2.840.113549.1.7.2","enveloped-data":"1.2.840.113549.1.7.3","digested-data":"1.2.840.113549.1.7.5","encrypted-data":"1.2.840.113549.1.7.6","authenticated-data":"1.2.840.113549.1.9.16.1.2",tstinfo:"1.2.840.113549.1.9.16.1.4"},this.objCache={},this.name2obj=function(t){if("undefined"!=typeof this.objCache[t])return this.objCache[t];if("undefined"==typeof this.name2oidList[t])throw"Name of ObjectIdentifier not defined: "+t;var e=this.name2oidList[t],n=new KJUR.asn1.DERObjectIdentifier({oid:e});return this.objCache[t]=n,n},this.atype2obj=function(t){if("undefined"!=typeof this.objCache[t])return this.objCache[t];if("undefined"==typeof this.atype2oidList[t])throw"AttributeType name undefined: "+t;var e=this.atype2oidList[t],n=new KJUR.asn1.DERObjectIdentifier({oid:e});return this.objCache[t]=n,n}},KJUR.asn1.x509.OID.oid2name=function(t){var e=KJUR.asn1.x509.OID.name2oidList;for(var n in e)if(e[n]==t)return n;return""},KJUR.asn1.x509.OID.name2oid=function(t){var e=KJUR.asn1.x509.OID.name2oidList;return void 0===e[t]?"":e[t]},KJUR.asn1.x509.X509Util=new function(){this.getPKCS8PubKeyPEMfromRSAKey=function(t){var e=null,n=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t.n),r=KJUR.asn1.ASN1Util.integerToByteHex(t.e),i=new KJUR.asn1.DERInteger({hex:n}),s=new KJUR.asn1.DERInteger({hex:r}),o=new KJUR.asn1.DERSequence({array:[i,s]}),a=o.getEncodedHex(),u=new KJUR.asn1.x509.AlgorithmIdentifier({name:"rsaEncryption"}),h=new KJUR.asn1.DERBitString({hex:"00"+a}),c=new KJUR.asn1.DERSequence({array:[u,h]}),f=c.getEncodedHex(),e=KJUR.asn1.ASN1Util.getPEMStringFromHex(f,"PUBLIC KEY");return e}},KJUR.asn1.x509.X509Util.newCertPEM=function(t){var e=KJUR.asn1.x509,n=new e.TBSCertificate;if(void 0===t.serial)throw"serial number undefined.";if(n.setSerialNumberByParam(t.serial),"string"!=typeof t.sigalg.name)throw"unproper signature algorithm name";if(n.setSignatureAlgByParam(t.sigalg),void 0===t.issuer)throw"issuer name undefined.";if(n.setIssuerByParam(t.issuer),void 0===t.notbefore)throw"notbefore undefined.";if(n.setNotBeforeByParam(t.notbefore),void 0===t.notafter)throw"notafter undefined.";if(n.setNotAfterByParam(t.notafter),void 0===t.subject)throw"subject name undefined.";if(n.setSubjectByParam(t.subject),void 0===t.sbjpubkey)throw"subject public key undefined.";if(n.setSubjectPublicKeyByGetKey(t.sbjpubkey),void 0!==t.ext&&void 0!==t.ext.length)for(var r=0;r<t.ext.length;r++)for(key in t.ext[r])n.appendExtensionByName(key,t.ext[r][key]);if(void 0===t.cakey&&void 0===t.sighex)throw"param cakey and sighex undefined.";var i=null,s=null;return t.cakey&&(i=Cr.getKey.apply(null,t.cakey),s=new e.Certificate({tbscertobj:n,prvkeyobj:i}),s.sign()),t.sighex&&(s=new e.Certificate({tbscertobj:n}),s.setSignatureHex(t.sighex)),s.getPEMString()},/*! asn1cms-1.0.2.js (c) 2013-2014 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.asn1&&KJUR.asn1||(KJUR.asn1={}),"undefined"!=typeof KJUR.asn1.cms&&KJUR.asn1.cms||(KJUR.asn1.cms={}),KJUR.asn1.cms.Attribute=function(t){KJUR.asn1.cms.Attribute.superclass.constructor.call(this);this.getEncodedHex=function(){var t,e,n;t=new KJUR.asn1.DERObjectIdentifier({oid:this.attrTypeOid}),e=new KJUR.asn1.DERSet({array:this.valueList});try{e.getEncodedHex()}catch(r){throw"fail valueSet.getEncodedHex in Attribute(1)/"+r}n=new KJUR.asn1.DERSequence({array:[t,e]});try{this.hTLV=n.getEncodedHex()}catch(r){throw"failed seq.getEncodedHex in Attribute(2)/"+r}return this.hTLV}},ir.lang.extend(KJUR.asn1.cms.Attribute,KJUR.asn1.ASN1Object),KJUR.asn1.cms.ContentType=function(t){KJUR.asn1.cms.ContentType.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.3";var e=null;if("undefined"!=typeof t){var e=new KJUR.asn1.DERObjectIdentifier(t);this.valueList=[e]}},ir.lang.extend(KJUR.asn1.cms.ContentType,KJUR.asn1.cms.Attribute),KJUR.asn1.cms.MessageDigest=function(t){if(KJUR.asn1.cms.MessageDigest.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.4","undefined"!=typeof t)if(t.eciObj instanceof KJUR.asn1.cms.EncapsulatedContentInfo&&"string"==typeof t.hashAlg){var e=t.eciObj.eContentValueHex,n=t.hashAlg,r=KJUR.crypto.Util.hashHex(e,n),i=new KJUR.asn1.DEROctetString({hex:r});i.getEncodedHex(),this.valueList=[i]}else{var i=new KJUR.asn1.DEROctetString(t);i.getEncodedHex(),this.valueList=[i]}},ir.lang.extend(KJUR.asn1.cms.MessageDigest,KJUR.asn1.cms.Attribute),KJUR.asn1.cms.SigningTime=function(t){if(KJUR.asn1.cms.SigningTime.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.5","undefined"!=typeof t){var e=new KJUR.asn1.x509.Time(t);try{e.getEncodedHex()}catch(n){throw"SigningTime.getEncodedHex() failed/"+n}this.valueList=[e]}},ir.lang.extend(KJUR.asn1.cms.SigningTime,KJUR.asn1.cms.Attribute),KJUR.asn1.cms.SigningCertificate=function(t){KJUR.asn1.cms.SigningCertificate.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.16.2.12";var e=KJUR.asn1,n=KJUR.asn1.cms,r=KJUR.crypto;this.setCerts=function(t){for(var i=[],s=0;s<t.length;s++){var o=Cr.getHexFromPEM(t[s]),a=r.Util.hashHex(o,"sha1"),u=new e.DEROctetString({hex:a});u.getEncodedHex();var h=new n.IssuerAndSerialNumber({cert:t[s]});h.getEncodedHex();var c=new e.DERSequence({array:[u,h]});c.getEncodedHex(),i.push(c)}var f=new e.DERSequence({array:i});f.getEncodedHex(),this.valueList=[f]},"undefined"!=typeof t&&"object"==typeof t.array&&this.setCerts(t.array)},ir.lang.extend(KJUR.asn1.cms.SigningCertificate,KJUR.asn1.cms.Attribute),KJUR.asn1.cms.SigningCertificateV2=function(t){KJUR.asn1.cms.SigningCertificateV2.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.16.2.47";var e=KJUR.asn1,n=KJUR.asn1.x509,r=KJUR.asn1.cms,i=KJUR.crypto;if(this.setCerts=function(t,s){for(var o=[],a=0;a<t.length;a++){var u=Cr.getHexFromPEM(t[a]),h=[];"sha256"!=s&&h.push(new n.AlgorithmIdentifier({name:s}));var c=i.Util.hashHex(u,s),f=new e.DEROctetString({hex:c});f.getEncodedHex(),h.push(f);var l=new r.IssuerAndSerialNumber({cert:t[a]});l.getEncodedHex(),h.push(l);var d=new e.DERSequence({array:h});d.getEncodedHex(),o.push(d)}var p=new e.DERSequence({array:o});p.getEncodedHex(),this.valueList=[p]},"undefined"!=typeof t&&"object"==typeof t.array){var s="sha256";"string"==typeof t.hashAlg&&(s=t.hashAlg),this.setCerts(t.array,s)}},ir.lang.extend(KJUR.asn1.cms.SigningCertificateV2,KJUR.asn1.cms.Attribute),KJUR.asn1.cms.IssuerAndSerialNumber=function(t){KJUR.asn1.cms.IssuerAndSerialNumber.superclass.constructor.call(this);var e=KJUR.asn1,n=e.x509;this.setByCertPEM=function(t){var r=Cr.getHexFromPEM(t),i=new Xn;i.hex=r;var s=i.getIssuerHex();this.dIssuer=new n.X500Name,this.dIssuer.hTLV=s;var o=i.getSerialNumberHex();this.dSerial=new e.DERInteger({hex:o})},this.getEncodedHex=function(){var t=new KJUR.asn1.DERSequence({array:[this.dIssuer,this.dSerial]});return this.hTLV=t.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("string"==typeof t&&-1!=t.indexOf("-----BEGIN ")&&this.setByCertPEM(t),t.issuer&&t.serial&&(t.issuer instanceof KJUR.asn1.x509.X500Name?this.dIssuer=t.issuer:this.dIssuer=new KJUR.asn1.x509.X500Name(t.issuer),t.serial instanceof KJUR.asn1.DERInteger?this.dSerial=t.serial:this.dSerial=new KJUR.asn1.DERInteger(t.serial)),"string"==typeof t.cert&&this.setByCertPEM(t.cert))},ir.lang.extend(KJUR.asn1.cms.IssuerAndSerialNumber,KJUR.asn1.ASN1Object),KJUR.asn1.cms.AttributeList=function(t){KJUR.asn1.cms.AttributeList.superclass.constructor.call(this),this.list=new Array,this.sortFlag=!0,this.add=function(t){t instanceof KJUR.asn1.cms.Attribute&&this.list.push(t)},this.length=function(){return this.list.length},this.clear=function(){this.list=new Array,this.hTLV=null,this.hV=null},this.getEncodedHex=function(){if("string"==typeof this.hTLV)return this.hTLV;var t=new KJUR.asn1.DERSet({array:this.list,sortflag:this.sortFlag});return this.hTLV=t.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&"undefined"!=typeof t.sortflag&&0==t.sortflag&&(this.sortFlag=!1)},ir.lang.extend(KJUR.asn1.cms.AttributeList,KJUR.asn1.ASN1Object),KJUR.asn1.cms.SignerInfo=function(t){KJUR.asn1.cms.SignerInfo.superclass.constructor.call(this);var e=KJUR.asn1,n=KJUR.asn1.cms,r=KJUR.asn1.x509;this.dCMSVersion=new e.DERInteger({"int":1}),this.dSignerIdentifier=null,this.dDigestAlgorithm=null,this.dSignedAttrs=new n.AttributeList,this.dSigAlg=null,this.dSig=null,this.dUnsignedAttrs=new n.AttributeList,this.setSignerIdentifier=function(t){if("string"==typeof t&&-1!=t.indexOf("CERTIFICATE")&&-1!=t.indexOf("BEGIN")&&-1!=t.indexOf("END")){this.dSignerIdentifier=new n.IssuerAndSerialNumber({cert:t})}},this.setForContentAndHash=function(t){"undefined"!=typeof t&&(t.eciObj instanceof KJUR.asn1.cms.EncapsulatedContentInfo&&(this.dSignedAttrs.add(new n.ContentType({oid:"1.2.840.113549.1.7.1"})),this.dSignedAttrs.add(new n.MessageDigest({eciObj:t.eciObj,hashAlg:t.hashAlg}))),"undefined"!=typeof t.sdObj&&t.sdObj instanceof KJUR.asn1.cms.SignedData&&-1==t.sdObj.digestAlgNameList.join(":").indexOf(t.hashAlg)&&t.sdObj.digestAlgNameList.push(t.hashAlg),"string"==typeof t.hashAlg&&(this.dDigestAlgorithm=new r.AlgorithmIdentifier({name:t.hashAlg})))},this.sign=function(t,n){this.dSigAlg=new r.AlgorithmIdentifier({name:n});var i=this.dSignedAttrs.getEncodedHex(),s=Cr.getKey(t),o=new KJUR.crypto.Signature({alg:n});o.init(s),o.updateHex(i);var a=o.sign();this.dSig=new e.DEROctetString({hex:a})},this.addUnsigned=function(t){this.hTLV=null,this.dUnsignedAttrs.hTLV=null,this.dUnsignedAttrs.add(t)},this.getEncodedHex=function(){if(this.dSignedAttrs instanceof KJUR.asn1.cms.AttributeList&&0==this.dSignedAttrs.length())throw"SignedAttrs length = 0 (empty)";var t=new e.DERTaggedObject({obj:this.dSignedAttrs,tag:"a0",explicit:!1}),n=null;this.dUnsignedAttrs.length()>0&&(n=new e.DERTaggedObject({obj:this.dUnsignedAttrs,tag:"a1",explicit:!1}));var r=[this.dCMSVersion,this.dSignerIdentifier,this.dDigestAlgorithm,t,this.dSigAlg,this.dSig];null!=n&&r.push(n);var i=new e.DERSequence({array:r});return this.hTLV=i.getEncodedHex(),this.hTLV}},ir.lang.extend(KJUR.asn1.cms.SignerInfo,KJUR.asn1.ASN1Object),KJUR.asn1.cms.EncapsulatedContentInfo=function(t){KJUR.asn1.cms.EncapsulatedContentInfo.superclass.constructor.call(this);var e=KJUR.asn1;KJUR.asn1.cms,KJUR.asn1.x509;this.dEContentType=new e.DERObjectIdentifier({name:"data"}),this.dEContent=null,this.isDetached=!1,this.eContentValueHex=null,this.setContentType=function(t){t.match(/^[0-2][.][0-9.]+$/)?this.dEContentType=new e.DERObjectIdentifier({oid:t}):this.dEContentType=new e.DERObjectIdentifier({name:t})},this.setContentValue=function(t){"undefined"!=typeof t&&("string"==typeof t.hex?this.eContentValueHex=t.hex:"string"==typeof t.str&&(this.eContentValueHex=mn(t.str)))},this.setContentValueHex=function(t){this.eContentValueHex=t},this.setContentValueStr=function(t){this.eContentValueHex=mn(t)},this.getEncodedHex=function(){if("string"!=typeof this.eContentValueHex)throw"eContentValue not yet set";var t=new e.DEROctetString({hex:this.eContentValueHex});this.dEContent=new e.DERTaggedObject({obj:t,tag:"a0",explicit:!0});var n=[this.dEContentType];this.isDetached||n.push(this.dEContent);var r=new e.DERSequence({array:n});return this.hTLV=r.getEncodedHex(),this.hTLV}},ir.lang.extend(KJUR.asn1.cms.EncapsulatedContentInfo,KJUR.asn1.ASN1Object),KJUR.asn1.cms.ContentInfo=function(t){KJUR.asn1.cms.ContentInfo.superclass.constructor.call(this);var e=KJUR.asn1,n=(KJUR.asn1.cms,KJUR.asn1.x509);this.dContentType=null,this.dContent=null,this.setContentType=function(t){"string"==typeof t&&(this.dContentType=n.OID.name2obj(t))},this.getEncodedHex=function(){var t=new e.DERTaggedObject({obj:this.dContent,tag:"a0",explicit:!0}),n=new e.DERSequence({array:[this.dContentType,t]});return this.hTLV=n.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&(t.type&&this.setContentType(t.type),t.obj&&t.obj instanceof e.ASN1Object&&(this.dContent=t.obj))},ir.lang.extend(KJUR.asn1.cms.ContentInfo,KJUR.asn1.ASN1Object),KJUR.asn1.cms.SignedData=function(t){KJUR.asn1.cms.SignedData.superclass.constructor.call(this);var e=KJUR.asn1,n=KJUR.asn1.cms,r=KJUR.asn1.x509;this.dCMSVersion=new e.DERInteger({"int":1}),this.dDigestAlgs=null,this.digestAlgNameList=[],this.dEncapContentInfo=new n.EncapsulatedContentInfo,this.dCerts=null,this.certificateList=[],this.crlList=[],this.signerInfoList=[new n.SignerInfo],this.addCertificatesByPEM=function(t){var n=Cr.getHexFromPEM(t),r=new e.ASN1Object;r.hTLV=n,this.certificateList.push(r)},this.getEncodedHex=function(){if("string"==typeof this.hTLV)return this.hTLV;if(null==this.dDigestAlgs){for(var t=[],n=0;n<this.digestAlgNameList.length;n++){var i=this.digestAlgNameList[n],s=new r.AlgorithmIdentifier({name:i});t.push(s)}this.dDigestAlgs=new e.DERSet({array:t})}var o=[this.dCMSVersion,this.dDigestAlgs,this.dEncapContentInfo];if(null==this.dCerts&&this.certificateList.length>0){var a=new e.DERSet({array:this.certificateList});this.dCerts=new e.DERTaggedObject({obj:a,tag:"a0",explicit:!1})}null!=this.dCerts&&o.push(this.dCerts);var u=new e.DERSet({array:this.signerInfoList});o.push(u);var h=new e.DERSequence({array:o});return this.hTLV=h.getEncodedHex(),this.hTLV},this.getContentInfo=function(){this.getEncodedHex();var t=new n.ContentInfo({type:"signed-data",obj:this});return t},this.getContentInfoEncodedHex=function(){var t=this.getContentInfo(),e=t.getEncodedHex();return e},this.getPEM=function(){var t=this.getContentInfoEncodedHex(),n=e.ASN1Util.getPEMStringFromHex(t,"CMS");return n}},ir.lang.extend(KJUR.asn1.cms.SignedData,KJUR.asn1.ASN1Object),KJUR.asn1.cms.CMSUtil=new function(){},KJUR.asn1.cms.CMSUtil.newSignedData=function(t){var e=KJUR.asn1.cms,n=KJUR.asn1.cades,r=new e.SignedData;if(r.dEncapContentInfo.setContentValue(t.content),"object"==typeof t.certs)for(var i=0;i<t.certs.length;i++)r.addCertificatesByPEM(t.certs[i]);r.signerInfoList=[];for(var i=0;i<t.signerInfos.length;i++){var s=t.signerInfos[i],o=new e.SignerInfo;o.setSignerIdentifier(s.signerCert),o.setForContentAndHash({sdObj:r,eciObj:r.dEncapContentInfo,hashAlg:s.hashAlg});for(attrName in s.sAttr){var a=s.sAttr[attrName];if("SigningTime"==attrName){var u=new e.SigningTime(a);o.dSignedAttrs.add(u)}if("SigningCertificate"==attrName){var u=new e.SigningCertificate(a);o.dSignedAttrs.add(u)}if("SigningCertificateV2"==attrName){var u=new e.SigningCertificateV2(a);o.dSignedAttrs.add(u)}if("SignaturePolicyIdentifier"==attrName){var u=new n.SignaturePolicyIdentifier(a);o.dSignedAttrs.add(u)}}o.sign(s.signerPrvKey,s.sigAlg),r.signerInfoList.push(o)}return r},/*! asn1tsp-1.0.1.js (c) 2014 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.asn1&&KJUR.asn1||(KJUR.asn1={}),"undefined"!=typeof KJUR.asn1.tsp&&KJUR.asn1.tsp||(KJUR.asn1.tsp={}),KJUR.asn1.tsp.Accuracy=function(t){KJUR.asn1.tsp.Accuracy.superclass.constructor.call(this);var e=KJUR.asn1;this.seconds=null,this.millis=null,this.micros=null,this.getEncodedHex=function(){var t=null,n=null,r=null,i=[];if(null!=this.seconds&&(t=new e.DERInteger({"int":this.seconds}),i.push(t)),null!=this.millis){var s=new e.DERInteger({"int":this.millis});n=new e.DERTaggedObject({obj:s,tag:"80",explicit:!1}),i.push(n)}if(null!=this.micros){var o=new e.DERInteger({"int":this.micros});r=new e.DERTaggedObject({obj:o,tag:"81",explicit:!1}),i.push(r)}var a=new e.DERSequence({array:i});return this.hTLV=a.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("number"==typeof t.seconds&&(this.seconds=t.seconds),"number"==typeof t.millis&&(this.millis=t.millis),"number"==typeof t.micros&&(this.micros=t.micros))},ir.lang.extend(KJUR.asn1.tsp.Accuracy,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.MessageImprint=function(t){KJUR.asn1.tsp.MessageImprint.superclass.constructor.call(this);var e=KJUR.asn1,n=KJUR.asn1.x509;this.dHashAlg=null,this.dHashValue=null,this.getEncodedHex=function(){if("string"==typeof this.hTLV)return this.hTLV;var t=new e.DERSequence({array:[this.dHashAlg,this.dHashValue]});return t.getEncodedHex()},"undefined"!=typeof t&&("string"==typeof t.hashAlg&&(this.dHashAlg=new n.AlgorithmIdentifier({name:t.hashAlg})),"string"==typeof t.hashValue&&(this.dHashValue=new e.DEROctetString({hex:t.hashValue})))},ir.lang.extend(KJUR.asn1.tsp.MessageImprint,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.TimeStampReq=function(t){KJUR.asn1.tsp.TimeStampReq.superclass.constructor.call(this);var e=KJUR.asn1,n=KJUR.asn1.tsp;this.dVersion=new e.DERInteger({"int":1}),this.dMessageImprint=null,this.dPolicy=null,this.dNonce=null,this.certReq=!0,this.setMessageImprint=function(t){return t instanceof KJUR.asn1.tsp.MessageImprint?void(this.dMessageImprint=t):void("object"==typeof t&&(this.dMessageImprint=new n.MessageImprint(t)))},this.getEncodedHex=function(){if(null==this.dMessageImprint)throw"messageImprint shall be specified";var t=[this.dVersion,this.dMessageImprint];null!=this.dPolicy&&t.push(this.dPolicy),null!=this.dNonce&&t.push(this.dNonce),this.certReq&&t.push(new e.DERBoolean);var n=new e.DERSequence({array:t});return this.hTLV=n.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("object"==typeof t.mi&&this.setMessageImprint(t.mi),"object"==typeof t.policy&&(this.dPolicy=new e.DERObjectIdentifier(t.policy)),"object"==typeof t.nonce&&(this.dNonce=new e.DERInteger(t.nonce)),"boolean"==typeof t.certreq&&(this.certReq=t.certreq))},ir.lang.extend(KJUR.asn1.tsp.TimeStampReq,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.TSTInfo=function(t){KJUR.asn1.tsp.TSTInfo.superclass.constructor.call(this);var e=KJUR.asn1,n=KJUR.asn1.x509,r=KJUR.asn1.tsp;if(this.dVersion=new e.DERInteger({"int":1}),this.dPolicy=null,this.dMessageImprint=null,this.dSerialNumber=null,this.dGenTime=null,this.dAccuracy=null,this.dOrdering=null,this.dNonce=null,this.dTsa=null,this.getEncodedHex=function(){var t=[this.dVersion];if(null==this.dPolicy)throw"policy shall be specified.";if(t.push(this.dPolicy),null==this.dMessageImprint)throw"messageImprint shall be specified.";if(t.push(this.dMessageImprint),null==this.dSerialNumber)throw"serialNumber shall be specified.";if(t.push(this.dSerialNumber),null==this.dGenTime)throw"genTime shall be specified.";t.push(this.dGenTime),null!=this.dAccuracy&&t.push(this.dAccuracy),null!=this.dOrdering&&t.push(this.dOrdering),null!=this.dNonce&&t.push(this.dNonce),null!=this.dTsa&&t.push(this.dTsa);var n=new e.DERSequence({array:t});return this.hTLV=n.getEncodedHex(),this.hTLV},"undefined"!=typeof t){if("string"==typeof t.policy){if(!t.policy.match(/^[0-9.]+$/))throw"policy shall be oid like 0.1.4.134";this.dPolicy=new e.DERObjectIdentifier({oid:t.policy})}"undefined"!=typeof t.messageImprint&&(this.dMessageImprint=new r.MessageImprint(t.messageImprint)),"undefined"!=typeof t.serialNumber&&(this.dSerialNumber=new e.DERInteger(t.serialNumber)),"undefined"!=typeof t.genTime&&(this.dGenTime=new e.DERGeneralizedTime(t.genTime)),"undefind"!=typeof t.accuracy&&(this.dAccuracy=new r.Accuracy(t.accuracy)),"undefined"!=typeof t.ordering&&1==t.ordering&&(this.dOrdering=new e.DERBoolean),"undefined"!=typeof t.nonce&&(this.dNonce=new e.DERInteger(t.nonce)),"undefined"!=typeof t.tsa&&(this.dTsa=new n.X500Name(t.tsa))}},ir.lang.extend(KJUR.asn1.tsp.TSTInfo,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.TimeStampResp=function(t){KJUR.asn1.tsp.TimeStampResp.superclass.constructor.call(this);var e=KJUR.asn1,n=KJUR.asn1.tsp;this.dStatus=null,this.dTST=null,this.getEncodedHex=function(){if(null==this.dStatus)throw"status shall be specified";var t=[this.dStatus];null!=this.dTST&&t.push(this.dTST);var n=new e.DERSequence({array:t});return this.hTLV=n.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("object"==typeof t.status&&(this.dStatus=new n.PKIStatusInfo(t.status)),"undefined"!=typeof t.tst&&t.tst instanceof KJUR.asn1.ASN1Object&&(this.dTST=t.tst.getContentInfo()))},ir.lang.extend(KJUR.asn1.tsp.TimeStampResp,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.PKIStatusInfo=function(t){KJUR.asn1.tsp.PKIStatusInfo.superclass.constructor.call(this);var e=KJUR.asn1,n=KJUR.asn1.tsp;this.dStatus=null,this.dStatusString=null,this.dFailureInfo=null,this.getEncodedHex=function(){if(null==this.dStatus)throw"status shall be specified";var t=[this.dStatus];null!=this.dStatusString&&t.push(this.dStatusString),null!=this.dFailureInfo&&t.push(this.dFailureInfo);var n=new e.DERSequence({array:t});return this.hTLV=n.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("object"==typeof t.status&&(this.dStatus=new n.PKIStatus(t.status)),"object"==typeof t.statstr&&(this.dStatusString=new n.PKIFreeText({array:t.statstr})),"object"==typeof t.failinfo&&(this.dFailureInfo=new n.PKIFailureInfo(t.failinfo)))},ir.lang.extend(KJUR.asn1.tsp.PKIStatusInfo,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.PKIStatus=function(t){KJUR.asn1.tsp.PKIStatus.superclass.constructor.call(this);var e=KJUR.asn1,n=KJUR.asn1.tsp;if(this.getEncodedHex=function(){return this.hTLV=this.dStatus.getEncodedHex(),this.hTLV},"undefined"!=typeof t)if("undefined"!=typeof t.name){var r=n.PKIStatus.valueList;if("undefined"==typeof r[t.name])throw"name undefined: "+t.name;this.dStatus=new e.DERInteger({"int":r[t.name]})}else this.dStatus=new e.DERInteger(t)},ir.lang.extend(KJUR.asn1.tsp.PKIStatus,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.PKIStatus.valueList={granted:0,grantedWithMods:1,rejection:2,waiting:3,revocationWarning:4,revocationNotification:5},KJUR.asn1.tsp.PKIFreeText=function(t){KJUR.asn1.tsp.PKIFreeText.superclass.constructor.call(this);var e=KJUR.asn1;this.textList=[],this.getEncodedHex=function(){for(var t=[],n=0;n<this.textList.length;n++)t.push(new e.DERUTF8String({str:this.textList[n]}));var r=new e.DERSequence({array:t});return this.hTLV=r.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&"object"==typeof t.array&&(this.textList=t.array)},ir.lang.extend(KJUR.asn1.tsp.PKIFreeText,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.PKIFailureInfo=function(t){KJUR.asn1.tsp.PKIFailureInfo.superclass.constructor.call(this);var e=KJUR.asn1,n=KJUR.asn1.tsp;if(this.value=null,this.getEncodedHex=function(){if(null==this.value)throw"value shall be specified";var t=new Number(this.value).toString(2),n=new e.DERBitString;return n.setByBinaryString(t),this.hTLV=n.getEncodedHex(),this.hTLV},"undefined"!=typeof t)if("string"==typeof t.name){var r=n.PKIFailureInfo.valueList;if("undefined"==typeof r[t.name])throw"name undefined: "+t.name;this.value=r[t.name]}else"number"==typeof t.int&&(this.value=t.int)},ir.lang.extend(KJUR.asn1.tsp.PKIFailureInfo,KJUR.asn1.ASN1Object),KJUR.asn1.tsp.PKIFailureInfo.valueList={badAlg:0,badRequest:2,badDataFormat:5,timeNotAvailable:14,unacceptedPolicy:15,unacceptedExtension:16,addInfoNotAvailable:17,systemFailure:25},KJUR.asn1.tsp.AbstractTSAAdapter=function(t){this.getTSTHex=function(t,e){throw"not implemented yet"}},KJUR.asn1.tsp.SimpleTSAAdapter=function(t){KJUR.asn1.tsp.SimpleTSAAdapter.superclass.constructor.call(this),this.params=null,this.serial=0,this.getTSTHex=function(t,e){var n=KJUR.crypto.Util.hashHex(t,e);this.params.tstInfo.messageImprint={hashAlg:e,hashValue:n},this.params.tstInfo.serialNumber={"int":this.serial++};var r=Math.floor(1e9*Math.random());this.params.tstInfo.nonce={"int":r};var i=KJUR.asn1.tsp.TSPUtil.newTimeStampToken(this.params);return i.getContentInfoEncodedHex()},"undefined"!=typeof t&&(this.params=t)},ir.lang.extend(KJUR.asn1.tsp.SimpleTSAAdapter,KJUR.asn1.tsp.AbstractTSAAdapter),KJUR.asn1.tsp.FixedTSAAdapter=function(t){KJUR.asn1.tsp.FixedTSAAdapter.superclass.constructor.call(this),this.params=null,this.getTSTHex=function(t,e){var n=KJUR.crypto.Util.hashHex(t,e);this.params.tstInfo.messageImprint={hashAlg:e,hashValue:n};var r=KJUR.asn1.tsp.TSPUtil.newTimeStampToken(this.params);return r.getContentInfoEncodedHex()},"undefined"!=typeof t&&(this.params=t)},ir.lang.extend(KJUR.asn1.tsp.FixedTSAAdapter,KJUR.asn1.tsp.AbstractTSAAdapter),KJUR.asn1.tsp.TSPUtil=new function(){},KJUR.asn1.tsp.TSPUtil.newTimeStampToken=function(t){var e=KJUR.asn1.cms,n=KJUR.asn1.tsp,r=new e.SignedData,i=new n.TSTInfo(t.tstInfo),s=i.getEncodedHex();if(r.dEncapContentInfo.setContentValue({hex:s}),r.dEncapContentInfo.setContentType("tstinfo"),"object"==typeof t.certs)for(var o=0;o<t.certs.length;o++)r.addCertificatesByPEM(t.certs[o]);var a=r.signerInfoList[0];a.setSignerIdentifier(t.signerCert),a.setForContentAndHash({sdObj:r,eciObj:r.dEncapContentInfo,hashAlg:t.hashAlg});var u=new e.SigningCertificate({array:[t.signerCert]});return a.dSignedAttrs.add(u),a.sign(t.signerPrvKey,t.sigAlg),r},KJUR.asn1.tsp.TSPUtil.parseTimeStampReq=function(t){var e={};e.certreq=!1;var n=_r.getPosArrayOfChildren_AtObj(t,0);if(n.length<2)throw"TimeStampReq must have at least 2 items";var r=_r.getHexOfTLV_AtObj(t,n[1]);e.mi=KJUR.asn1.tsp.TSPUtil.parseMessageImprint(r);for(var i=2;i<n.length;i++){var s=n[i],o=t.substr(s,2);if("06"==o){var a=_r.getHexOfV_AtObj(t,s);e.policy=_r.hextooidstr(a)}"02"==o&&(e.nonce=_r.getHexOfV_AtObj(t,s)),"01"==o&&(e.certreq=!0)}return e},KJUR.asn1.tsp.TSPUtil.parseMessageImprint=function(t){var e={};if("30"!=t.substr(0,2))throw"head of messageImprint hex shall be '30'";var n=(_r.getPosArrayOfChildren_AtObj(t,0),_r.getDecendantIndexByNthList(t,0,[0,0])),r=_r.getHexOfV_AtObj(t,n),i=_r.hextooidstr(r),s=KJUR.asn1.x509.OID.oid2name(i);if(""==s)throw"hashAlg name undefined: "+i;var o=s,a=_r.getDecendantIndexByNthList(t,0,[1]);return e.hashAlg=o,e.hashValue=_r.getHexOfV_AtObj(t,a),e},/*! asn1cades-1.0.0.js (c) 2013-2014 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.asn1&&KJUR.asn1||(KJUR.asn1={}),"undefined"!=typeof KJUR.asn1.cades&&KJUR.asn1.cades||(KJUR.asn1.cades={}),KJUR.asn1.cades.SignaturePolicyIdentifier=function(t){KJUR.asn1.cades.SignaturePolicyIdentifier.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.16.2.15";var e=KJUR.asn1,n=KJUR.asn1.cades;if("undefined"!=typeof t&&"string"==typeof t.oid&&"object"==typeof t.hash){var r=new e.DERObjectIdentifier({oid:t.oid}),i=new n.OtherHashAlgAndValue(t.hash),s=new e.DERSequence({array:[r,i]});this.valueList=[s]}},ir.lang.extend(KJUR.asn1.cades.SignaturePolicyIdentifier,KJUR.asn1.cms.Attribute),KJUR.asn1.cades.OtherHashAlgAndValue=function(t){KJUR.asn1.cades.OtherHashAlgAndValue.superclass.constructor.call(this);var e=KJUR.asn1,n=KJUR.asn1.x509;this.dAlg=null,this.dHash=null,this.getEncodedHex=function(){var t=new e.DERSequence({array:[this.dAlg,this.dHash]});return this.hTLV=t.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&"string"==typeof t.alg&&"string"==typeof t.hash&&(this.dAlg=new n.AlgorithmIdentifier({name:t.alg}),this.dHash=new e.DEROctetString({hex:t.hash}))},ir.lang.extend(KJUR.asn1.cades.OtherHashAlgAndValue,KJUR.asn1.ASN1Object),KJUR.asn1.cades.SignatureTimeStamp=function(t){KJUR.asn1.cades.SignatureTimeStamp.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.16.2.14",this.tstHex=null;var e=KJUR.asn1;if("undefined"!=typeof t){if("undefined"!=typeof t.res)if("string"==typeof t.res&&t.res.match(/^[0-9A-Fa-f]+$/));else if(!(t.res instanceof KJUR.asn1.ASN1Object))throw"res param shall be ASN1Object or hex string";if("undefined"!=typeof t.tst)if("string"==typeof t.tst&&t.tst.match(/^[0-9A-Fa-f]+$/)){var n=new e.ASN1Object;this.tstHex=t.tst,n.hTLV=this.tstHex,n.getEncodedHex(),this.valueList=[n]}else if(!(t.tst instanceof KJUR.asn1.ASN1Object))throw"tst param shall be ASN1Object or hex string"}},ir.lang.extend(KJUR.asn1.cades.SignatureTimeStamp,KJUR.asn1.cms.Attribute),KJUR.asn1.cades.CompleteCertificateRefs=function(t){KJUR.asn1.cades.CompleteCertificateRefs.superclass.constructor.call(this),this.attrTypeOid="1.2.840.113549.1.9.16.2.21";var e=(KJUR.asn1,KJUR.asn1.cades);this.setByArray=function(t){this.valueList=[];for(var n=0;n<t.length;n++){var r=new e.OtherCertID(t[n]);this.valueList.push(r)}},"undefined"!=typeof t&&"object"==typeof t&&"number"==typeof t.length&&this.setByArray(t)},ir.lang.extend(KJUR.asn1.cades.CompleteCertificateRefs,KJUR.asn1.cms.Attribute),KJUR.asn1.cades.OtherCertID=function(t){KJUR.asn1.cades.OtherCertID.superclass.constructor.call(this);var e=KJUR.asn1,n=KJUR.asn1.cms,r=KJUR.asn1.cades;this.hasIssuerSerial=!0,this.dOtherCertHash=null,this.dIssuerSerial=null,this.setByCertPEM=function(t){this.dOtherCertHash=new r.OtherHash(t),this.hasIssuerSerial&&(this.dIssuerSerial=new n.IssuerAndSerialNumber(t))},this.getEncodedHex=function(){if(null!=this.hTLV)return this.hTLV;if(null==this.dOtherCertHash)throw"otherCertHash not set";var t=[this.dOtherCertHash];null!=this.dIssuerSerial&&t.push(this.dIssuerSerial);var n=new e.DERSequence({array:t});return this.hTLV=n.getEncodedHex(),this.hTLV},"undefined"!=typeof t&&("string"==typeof t&&-1!=t.indexOf("-----BEGIN ")&&this.setByCertPEM(t),"object"==typeof t&&(t.hasis===!1&&(this.hasIssuerSerial=!1),"string"==typeof t.cert&&this.setByCertPEM(t.cert)))},ir.lang.extend(KJUR.asn1.cades.OtherCertID,KJUR.asn1.ASN1Object),KJUR.asn1.cades.OtherHash=function(t){KJUR.asn1.cades.OtherHash.superclass.constructor.call(this);var e=KJUR.asn1,n=KJUR.asn1.cades;if(this.alg="sha256",this.dOtherHash=null,this.setByCertPEM=function(t){if(-1==t.indexOf("-----BEGIN "))throw"certPEM not to seem PEM format";var e=Xn.pemToHex(t),r=KJUR.crypto.Util.hashHex(e,this.alg);this.dOtherHash=new n.OtherHashAlgAndValue({alg:this.alg,hash:r})},this.getEncodedHex=function(){if(null==this.dOtherHash)throw"OtherHash not set";return this.dOtherHash.getEncodedHex()},"undefined"!=typeof t)if("string"==typeof t)if(-1!=t.indexOf("-----BEGIN "))this.setByCertPEM(t);else{if(!t.match(/^[0-9A-Fa-f]+$/))throw"unsupported string value for params";this.dOtherHash=new e.DEROctetString({hex:t})}else"object"==typeof t&&("string"==typeof t.cert?("string"==typeof t.alg&&(this.alg=t.alg),this.setByCertPEM(t.cert)):this.dOtherHash=new n.OtherHashAlgAndValue(t))},ir.lang.extend(KJUR.asn1.cades.OtherHash,KJUR.asn1.ASN1Object),KJUR.asn1.cades.CAdESUtil=new function(){},KJUR.asn1.cades.CAdESUtil.addSigTS=function(t,e,n){},KJUR.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned=function(t){var e=KJUR.asn1,n=KJUR.asn1.cms,r=KJUR.asn1.cades.CAdESUtil,i={};if("06092a864886f70d010702"!=_r.getDecendantHexTLVByNthList(t,0,[0]))throw"hex is not CMS SignedData";var s=_r.getDecendantIndexByNthList(t,0,[1,0]),o=_r.getPosArrayOfChildren_AtObj(t,s);if(o.length<4)throw"num of SignedData elem shall be 4 at least";var a=o.shift();i.version=_r.getHexOfTLV_AtObj(t,a);var u=o.shift();i.algs=_r.getHexOfTLV_AtObj(t,u);var h=o.shift();i.encapcontent=_r.getHexOfTLV_AtObj(t,h),i.certs=null,i.revs=null,i.si=[];var c=o.shift();"a0"==t.substr(c,2)&&(i.certs=_r.getHexOfTLV_AtObj(t,c),c=o.shift()),"a1"==t.substr(c,2)&&(i.revs=_r.getHexOfTLV_AtObj(t,c),c=o.shift());var f=c;if("31"!=t.substr(f,2))throw"Can't find signerInfos";for(var l=_r.getPosArrayOfChildren_AtObj(t,f),d=0;d<l.length;d++){var p=l[d],g=r.parseSignerInfoForAddingUnsigned(t,p,d);i.si[d]=g}var y=null;i.obj=new n.SignedData,y=new e.ASN1Object,y.hTLV=i.version,i.obj.dCMSVersion=y,y=new e.ASN1Object,y.hTLV=i.algs,i.obj.dDigestAlgs=y,y=new e.ASN1Object,y.hTLV=i.encapcontent,i.obj.dEncapContentInfo=y,y=new e.ASN1Object,y.hTLV=i.certs,i.obj.dCerts=y,i.obj.signerInfoList=[];for(var d=0;d<i.si.length;d++)i.obj.signerInfoList.push(i.si[d].obj);return i},KJUR.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned=function(t,e,n){var r=KJUR.asn1,i=KJUR.asn1.cms,s={},o=_r.getPosArrayOfChildren_AtObj(t,e);if(6!=o.length)throw"not supported items for SignerInfo (!=6)";var a=o.shift();s.version=_r.getHexOfTLV_AtObj(t,a);var u=o.shift();s.si=_r.getHexOfTLV_AtObj(t,u);var h=o.shift();s.digalg=_r.getHexOfTLV_AtObj(t,h);var c=o.shift();s.sattrs=_r.getHexOfTLV_AtObj(t,c);var f=o.shift();s.sigalg=_r.getHexOfTLV_AtObj(t,f);var l=o.shift();s.sig=_r.getHexOfTLV_AtObj(t,l),s.sigval=_r.getHexOfV_AtObj(t,l);var d=null;return s.obj=new i.SignerInfo,d=new r.ASN1Object,d.hTLV=s.version,s.obj.dCMSVersion=d,d=new r.ASN1Object,d.hTLV=s.si,s.obj.dSignerIdentifier=d,d=new r.ASN1Object,d.hTLV=s.digalg,s.obj.dDigestAlgorithm=d,d=new r.ASN1Object,d.hTLV=s.sattrs,s.obj.dSignedAttrs=d,d=new r.ASN1Object,d.hTLV=s.sigalg,s.obj.dSigAlg=d,d=new r.ASN1Object,d.hTLV=s.sig,s.obj.dSig=d,s.obj.dUnsignedAttrs=new i.AttributeList,s},/*! asn1csr-1.0.0.js (c) 2015 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	"undefined"!=typeof KJUR.asn1.csr&&KJUR.asn1.csr||(KJUR.asn1.csr={}),KJUR.asn1.csr.CertificationRequest=function(t){KJUR.asn1.csr.CertificationRequest.superclass.constructor.call(this);this.sign=function(t,e){null==this.prvKey&&(this.prvKey=e),this.asn1SignatureAlg=new KJUR.asn1.x509.AlgorithmIdentifier({name:t}),sig=new KJUR.crypto.Signature({alg:t}),sig.initSign(this.prvKey),sig.updateHex(this.asn1CSRInfo.getEncodedHex()),this.hexSig=sig.sign(),this.asn1Sig=new KJUR.asn1.DERBitString({hex:"00"+this.hexSig});var n=new KJUR.asn1.DERSequence({array:[this.asn1CSRInfo,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=n.getEncodedHex(),this.isModified=!1},this.getPEMString=function(){var t=KJUR.asn1.ASN1Util.getPEMStringFromHex(this.getEncodedHex(),"CERTIFICATE REQUEST");return t},this.getEncodedHex=function(){if(0==this.isModified&&null!=this.hTLV)return this.hTLV;throw"not signed yet"},"undefined"!=typeof t&&"undefined"!=typeof t.csrinfo&&(this.asn1CSRInfo=t.csrinfo)},ir.lang.extend(KJUR.asn1.csr.CertificationRequest,KJUR.asn1.ASN1Object),KJUR.asn1.csr.CertificationRequestInfo=function(t){KJUR.asn1.csr.CertificationRequestInfo.superclass.constructor.call(this),this._initialize=function(){this.asn1Array=new Array,this.asn1Version=new KJUR.asn1.DERInteger({"int":0}),this.asn1Subject=null,this.asn1SubjPKey=null,this.extensionsArray=new Array},this.setSubjectByParam=function(t){this.asn1Subject=new KJUR.asn1.x509.X500Name(t)},this.setSubjectPublicKeyByGetKey=function(t){var e=Cr.getKey(t);this.asn1SubjPKey=new KJUR.asn1.x509.SubjectPublicKeyInfo(e)},this.getEncodedHex=function(){this.asn1Array=new Array,this.asn1Array.push(this.asn1Version),this.asn1Array.push(this.asn1Subject),this.asn1Array.push(this.asn1SubjPKey);var t=new KJUR.asn1.DERSequence({array:this.extensionsArray}),e=new KJUR.asn1.DERTaggedObject({explicit:!1,tag:"a0",obj:t});this.asn1Array.push(e);var n=new KJUR.asn1.DERSequence({array:this.asn1Array});return this.hTLV=n.getEncodedHex(),this.isModified=!1,this.hTLV},this._initialize()},ir.lang.extend(KJUR.asn1.csr.CertificationRequestInfo,KJUR.asn1.ASN1Object),KJUR.asn1.csr.CSRUtil=new function(){},KJUR.asn1.csr.CSRUtil.newCSRPEM=function(t){var e=KJUR.asn1.csr;if(void 0===t.subject)throw"parameter subject undefined";if(void 0===t.sbjpubkey)throw"parameter sbjpubkey undefined";if(void 0===t.sigalg)throw"parameter sigalg undefined";if(void 0===t.sbjprvkey)throw"parameter sbjpubkey undefined";var n=new e.CertificationRequestInfo;n.setSubjectByParam(t.subject),n.setSubjectPublicKeyByGetKey(t.sbjpubkey);var r=new e.CertificationRequest({csrinfo:n}),i=Cr.getKey(t.sbjprvkey);r.sign(t.sigalg,i);var s=r.getPEMString();return s};var Kr,Ur;"function"==typeof t?(Kr=function(e){return ln(new t(e,"utf8").toString("base64"))},Ur=function(e){return new t(dn(e),"base64").toString("utf8")}):(Kr=function(t){return pn(wn(xn(t)))},Ur=function(t){return decodeURIComponent(Rn(gn(t)))});var Pr=function(t,e){var n=t.length;t.length>e.length&&(n=e.length);for(var r=0;n>r;r++)if(t.charCodeAt(r)!=e.charCodeAt(r))return r;return t.length!=e.length?n:-1};/*! crypto-1.1.8.js (c) 2013-2016 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.Util=new function(){this.DIGESTINFOHEAD={sha1:"3021300906052b0e03021a05000414",sha224:"302d300d06096086480165030402040500041c",sha256:"3031300d060960864801650304020105000420",sha384:"3041300d060960864801650304020205000430",sha512:"3051300d060960864801650304020305000440",md2:"3020300c06082a864886f70d020205000410",md5:"3020300c06082a864886f70d020505000410",ripemd160:"3021300906052b2403020105000414"},this.DEFAULTPROVIDER={md5:"cryptojs",sha1:"cryptojs",sha224:"cryptojs",sha256:"cryptojs",sha384:"cryptojs",sha512:"cryptojs",ripemd160:"cryptojs",hmacmd5:"cryptojs",hmacsha1:"cryptojs",hmacsha224:"cryptojs",hmacsha256:"cryptojs",hmacsha384:"cryptojs",hmacsha512:"cryptojs",hmacripemd160:"cryptojs",MD5withRSA:"cryptojs/jsrsa",SHA1withRSA:"cryptojs/jsrsa",SHA224withRSA:"cryptojs/jsrsa",SHA256withRSA:"cryptojs/jsrsa",SHA384withRSA:"cryptojs/jsrsa",SHA512withRSA:"cryptojs/jsrsa",RIPEMD160withRSA:"cryptojs/jsrsa",MD5withECDSA:"cryptojs/jsrsa",SHA1withECDSA:"cryptojs/jsrsa",SHA224withECDSA:"cryptojs/jsrsa",SHA256withECDSA:"cryptojs/jsrsa",SHA384withECDSA:"cryptojs/jsrsa",SHA512withECDSA:"cryptojs/jsrsa",RIPEMD160withECDSA:"cryptojs/jsrsa",SHA1withDSA:"cryptojs/jsrsa",SHA224withDSA:"cryptojs/jsrsa",SHA256withDSA:"cryptojs/jsrsa",MD5withRSAandMGF1:"cryptojs/jsrsa",SHA1withRSAandMGF1:"cryptojs/jsrsa",SHA224withRSAandMGF1:"cryptojs/jsrsa",SHA256withRSAandMGF1:"cryptojs/jsrsa",SHA384withRSAandMGF1:"cryptojs/jsrsa",SHA512withRSAandMGF1:"cryptojs/jsrsa",RIPEMD160withRSAandMGF1:"cryptojs/jsrsa"},this.CRYPTOJSMESSAGEDIGESTNAME={md5:sr.algo.MD5,sha1:sr.algo.SHA1,sha224:sr.algo.SHA224,sha256:sr.algo.SHA256,sha384:sr.algo.SHA384,sha512:sr.algo.SHA512,ripemd160:sr.algo.RIPEMD160},this.getDigestInfoHex=function(t,e){if("undefined"==typeof this.DIGESTINFOHEAD[e])throw"alg not supported in Util.DIGESTINFOHEAD: "+e;return this.DIGESTINFOHEAD[e]+t},this.getPaddedDigestInfoHex=function(t,e,n){var r=this.getDigestInfoHex(t,e),i=n/4;if(r.length+22>i)throw"key is too short for SigAlg: keylen="+n+","+e;for(var s="0001",o="00"+r,a="",u=i-s.length-o.length,h=0;u>h;h+=2)a+="ff";var c=s+a+o;return c},this.hashString=function(t,e){var n=new KJUR.crypto.MessageDigest({alg:e});return n.digestString(t)},this.hashHex=function(t,e){var n=new KJUR.crypto.MessageDigest({alg:e});return n.digestHex(t)},this.sha1=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha1",prov:"cryptojs"});return e.digestString(t)},this.sha256=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha256",prov:"cryptojs"});return e.digestString(t)},this.sha256Hex=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha256",prov:"cryptojs"});return e.digestHex(t)},this.sha512=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha512",prov:"cryptojs"});return e.digestString(t)},this.sha512Hex=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha512",prov:"cryptojs"});return e.digestHex(t)},this.md5=function(t){var e=new KJUR.crypto.MessageDigest({alg:"md5",prov:"cryptojs"});return e.digestString(t)},this.ripemd160=function(t){var e=new KJUR.crypto.MessageDigest({alg:"ripemd160",prov:"cryptojs"});return e.digestString(t)},this.getCryptoJSMDByName=function(t){}},KJUR.crypto.MessageDigest=function(t){this.setAlgAndProvider=function(t,e){if(null!=t&&void 0===e&&(e=KJUR.crypto.Util.DEFAULTPROVIDER[t]),-1!=":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t)&&"cryptojs"==e){try{this.md=KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create()}catch(n){throw"setAlgAndProvider hash alg set fail alg="+t+"/"+n}this.updateString=function(t){this.md.update(t)},this.updateHex=function(t){var e=sr.enc.Hex.parse(t);this.md.update(e)},this.digest=function(){var t=this.md.finalize();return t.toString(sr.enc.Hex)},this.digestString=function(t){return this.updateString(t),this.digest()},this.digestHex=function(t){return this.updateHex(t),this.digest()}}if(-1!=":sha256:".indexOf(t)&&"sjcl"==e){try{this.md=new sjcl.hash.sha256}catch(n){throw"setAlgAndProvider hash alg set fail alg="+t+"/"+n}this.updateString=function(t){this.md.update(t)},this.updateHex=function(t){var e=sjcl.codec.hex.toBits(t);this.md.update(e)},this.digest=function(){var t=this.md.finalize();return sjcl.codec.hex.fromBits(t)},this.digestString=function(t){return this.updateString(t),this.digest()},this.digestHex=function(t){return this.updateHex(t),this.digest()}}},this.updateString=function(t){throw"updateString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName},this.updateHex=function(t){throw"updateHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName},this.digest=function(){throw"digest() not supported for this alg/prov: "+this.algName+"/"+this.provName},this.digestString=function(t){throw"digestString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName},this.digestHex=function(t){throw"digestHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName},void 0!==t&&void 0!==t.alg&&(this.algName=t.alg,void 0===t.prov&&(this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]),this.setAlgAndProvider(this.algName,this.provName))},KJUR.crypto.Mac=function(t){this.setAlgAndProvider=function(t,e){if(t=t.toLowerCase(),null==t&&(t="hmacsha1"),t=t.toLowerCase(),"hmac"!=t.substr(0,4))throw"setAlgAndProvider unsupported HMAC alg: "+t;void 0===e&&(e=KJUR.crypto.Util.DEFAULTPROVIDER[t]),this.algProv=t+"/"+e;var n=t.substr(4);if(-1!=":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(n)&&"cryptojs"==e){try{var r=KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[n];this.mac=sr.algo.HMAC.create(r,this.pass)}catch(i){throw"setAlgAndProvider hash alg set fail hashAlg="+n+"/"+i}this.updateString=function(t){this.mac.update(t)},this.updateHex=function(t){var e=sr.enc.Hex.parse(t);this.mac.update(e)},this.doFinal=function(){var t=this.mac.finalize();return t.toString(sr.enc.Hex)},this.doFinalString=function(t){return this.updateString(t),this.doFinal()},this.doFinalHex=function(t){return this.updateHex(t),this.doFinal()}}},this.updateString=function(t){throw"updateString(str) not supported for this alg/prov: "+this.algProv},this.updateHex=function(t){throw"updateHex(hex) not supported for this alg/prov: "+this.algProv},this.doFinal=function(){throw"digest() not supported for this alg/prov: "+this.algProv},this.doFinalString=function(t){throw"digestString(str) not supported for this alg/prov: "+this.algProv},this.doFinalHex=function(t){throw"digestHex(hex) not supported for this alg/prov: "+this.algProv},this.setPassword=function(t){if("string"==typeof t){var e=t;return t.length%2!=1&&t.match(/^[0-9A-Fa-f]+$/)||(e=En(t)),void(this.pass=sr.enc.Hex.parse(e))}if("object"!=typeof t)throw"KJUR.crypto.Mac unsupported password type: "+t;var e=null;if(void 0!==t.hex){if(t.hex.length%2!=0||!t.hex.match(/^[0-9A-Fa-f]+$/))throw"Mac: wrong hex password: "+t.hex;e=t.hex}if(void 0!==t.utf8&&(e=mn(t.utf8)),void 0!==t.rstr&&(e=En(t.rstr)),void 0!==t.b64&&(e=i(t.b64)),void 0!==t.b64u&&(e=gn(t.b64u)),null==e)throw"KJUR.crypto.Mac unsupported password type: "+t;this.pass=sr.enc.Hex.parse(e)},void 0!==t&&(void 0!==t.pass&&this.setPassword(t.pass),void 0!==t.alg&&(this.algName=t.alg,void 0===t.prov&&(this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]),this.setAlgAndProvider(this.algName,this.provName)))},KJUR.crypto.Signature=function(t){var e=null;if(this._setAlgNames=function(){this.algName.match(/^(.+)with(.+)$/)&&(this.mdAlgName=RegExp.$1.toLowerCase(),this.pubkeyAlgName=RegExp.$2.toLowerCase())},this._zeroPaddingOfSignature=function(t,e){for(var n="",r=e/4-t.length,i=0;r>i;i++)n+="0";return n+t},this.setAlgAndProvider=function(t,e){if(this._setAlgNames(),"cryptojs/jsrsa"!=e)throw"provider not supported: "+e;if(-1!=":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)){try{this.md=new KJUR.crypto.MessageDigest({alg:this.mdAlgName})}catch(n){throw"setAlgAndProvider hash alg set fail alg="+this.mdAlgName+"/"+n}this.init=function(t,e){var n=null;try{n=void 0===e?Cr.getKey(t):Cr.getKey(t,e)}catch(r){throw"init failed:"+r}if(n.isPrivate===!0)this.prvKey=n,this.state="SIGN";else{if(n.isPublic!==!0)throw"init failed.:"+n;this.pubKey=n,this.state="VERIFY"}},this.initSign=function(t){"string"==typeof t.ecprvhex&&"string"==typeof t.eccurvename?(this.ecprvhex=t.ecprvhex,this.eccurvename=t.eccurvename):this.prvKey=t,this.state="SIGN"},this.initVerifyByPublicKey=function(t){"string"==typeof t.ecpubhex&&"string"==typeof t.eccurvename?(this.ecpubhex=t.ecpubhex,this.eccurvename=t.eccurvename):t instanceof KJUR.crypto.ECDSA?this.pubKey=t:t instanceof ve&&(this.pubKey=t),this.state="VERIFY"},this.initVerifyByCertificatePEM=function(t){var e=new Xn;e.readCertPEM(t),this.pubKey=e.subjectPublicKeyRSA,this.state="VERIFY"},this.updateString=function(t){this.md.updateString(t)},this.updateHex=function(t){this.md.updateHex(t)},this.sign=function(){if(this.sHashHex=this.md.digest(),"undefined"!=typeof this.ecprvhex&&"undefined"!=typeof this.eccurvename){var t=new KJUR.crypto.ECDSA({curve:this.eccurvename});this.hSign=t.signHex(this.sHashHex,this.ecprvhex)}else if(this.prvKey instanceof ve&&"rsaandmgf1"==this.pubkeyAlgName)this.hSign=this.prvKey.signWithMessageHashPSS(this.sHashHex,this.mdAlgName,this.pssSaltLen);else if(this.prvKey instanceof ve&&"rsa"==this.pubkeyAlgName)this.hSign=this.prvKey.signWithMessageHash(this.sHashHex,this.mdAlgName);else if(this.prvKey instanceof KJUR.crypto.ECDSA)this.hSign=this.prvKey.signWithMessageHash(this.sHashHex);else{if(!(this.prvKey instanceof KJUR.crypto.DSA))throw"Signature: unsupported public key alg: "+this.pubkeyAlgName;this.hSign=this.prvKey.signWithMessageHash(this.sHashHex)}return this.hSign},this.signString=function(t){return this.updateString(t),this.sign()},this.signHex=function(t){return this.updateHex(t),this.sign()},this.verify=function(t){if(this.sHashHex=this.md.digest(),"undefined"!=typeof this.ecpubhex&&"undefined"!=typeof this.eccurvename){var e=new KJUR.crypto.ECDSA({curve:this.eccurvename});return e.verifyHex(this.sHashHex,t,this.ecpubhex)}if(this.pubKey instanceof ve&&"rsaandmgf1"==this.pubkeyAlgName)return this.pubKey.verifyWithMessageHashPSS(this.sHashHex,t,this.mdAlgName,this.pssSaltLen);if(this.pubKey instanceof ve&&"rsa"==this.pubkeyAlgName)return this.pubKey.verifyWithMessageHash(this.sHashHex,t);if(this.pubKey instanceof KJUR.crypto.ECDSA)return this.pubKey.verifyWithMessageHash(this.sHashHex,t);if(this.pubKey instanceof KJUR.crypto.DSA)return this.pubKey.verifyWithMessageHash(this.sHashHex,t);throw"Signature: unsupported public key alg: "+this.pubkeyAlgName}}},this.init=function(t,e){throw"init(key, pass) not supported for this alg:prov="+this.algProvName},this.initVerifyByPublicKey=function(t){throw"initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov="+this.algProvName},this.initVerifyByCertificatePEM=function(t){throw"initVerifyByCertificatePEM(certPEM) not supported for this alg:prov="+this.algProvName},this.initSign=function(t){throw"initSign(prvKey) not supported for this alg:prov="+this.algProvName},this.updateString=function(t){throw"updateString(str) not supported for this alg:prov="+this.algProvName},this.updateHex=function(t){throw"updateHex(hex) not supported for this alg:prov="+this.algProvName},this.sign=function(){throw"sign() not supported for this alg:prov="+this.algProvName},this.signString=function(t){throw"digestString(str) not supported for this alg:prov="+this.algProvName},this.signHex=function(t){throw"digestHex(hex) not supported for this alg:prov="+this.algProvName},this.verify=function(t){throw"verify(hSigVal) not supported for this alg:prov="+this.algProvName},this.initParams=t,void 0!==t&&(void 0!==t.alg&&(this.algName=t.alg,void 0===t.prov?this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]:this.provName=t.prov,this.algProvName=this.algName+":"+this.provName,this.setAlgAndProvider(this.algName,this.provName),this._setAlgNames()),void 0!==t.psssaltlen&&(this.pssSaltLen=t.psssaltlen),void 0!==t.prvkeypem)){if(void 0!==t.prvkeypas)throw"both prvkeypem and prvkeypas parameters not supported";try{var e=new ve;e.readPrivateKeyFromPEMString(t.prvkeypem),this.initSign(e)}catch(n){throw"fatal error to load pem private key: "+n}}},KJUR.crypto.OID=new function(){this.oidhex2name={"2a864886f70d010101":"rsaEncryption","2a8648ce3d0201":"ecPublicKey","2a8648ce380401":"dsa","2a8648ce3d030107":"secp256r1","2b8104001f":"secp192k1","2b81040021":"secp224r1","2b8104000a":"secp256k1","2b81040023":"secp521r1","2b81040022":"secp384r1","2a8648ce380403":"SHA1withDSA","608648016503040301":"SHA224withDSA","608648016503040302":"SHA256withDSA"}},/*! ecdsa-modified-1.0.4.js (c) Stephan Thomas, Kenji Urushima | github.com/bitcoinjs/bitcoinjs-lib/blob/master/LICENSE
		 */
	"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.ECDSA=function(t){var e="secp256r1",n=new le;this.type="EC",this.getBigRandom=function(t){return new o(t.bitLength(),n).mod(t.subtract(o.ONE)).add(o.ONE)},this.setNamedCurve=function(t){this.ecparams=KJUR.crypto.ECParameterDB.getByName(t),this.prvKeyHex=null,this.pubKeyHex=null,this.curveName=t},this.setPrivateKeyHex=function(t){this.isPrivate=!0,this.prvKeyHex=t},this.setPublicKeyHex=function(t){this.isPublic=!0,this.pubKeyHex=t},this.generateKeyPairHex=function(){var t=this.ecparams.n,e=this.getBigRandom(t),n=this.ecparams.G.multiply(e),r=n.getX().toBigInteger(),i=n.getY().toBigInteger(),s=this.ecparams.keylen/4,o=("0000000000"+e.toString(16)).slice(-s),a=("0000000000"+r.toString(16)).slice(-s),u=("0000000000"+i.toString(16)).slice(-s),h="04"+a+u;return this.setPrivateKeyHex(o),this.setPublicKeyHex(h),{ecprvhex:o,ecpubhex:h}},this.signWithMessageHash=function(t){return this.signHex(t,this.prvKeyHex)},this.signHex=function(t,e){var n=new o(e,16),r=this.ecparams.n,i=new o(t,16);do var s=this.getBigRandom(r),a=this.ecparams.G,u=a.multiply(s),h=u.getX().toBigInteger().mod(r);while(h.compareTo(o.ZERO)<=0);var c=s.modInverse(r).multiply(i.add(n.multiply(h))).mod(r);return KJUR.crypto.ECDSA.biRSSigToASN1Sig(h,c)},this.sign=function(t,e){var n=e,r=this.ecparams.n,i=o.fromByteArrayUnsigned(t);do var s=this.getBigRandom(r),a=this.ecparams.G,u=a.multiply(s),h=u.getX().toBigInteger().mod(r);while(h.compareTo(o.ZERO)<=0);var c=s.modInverse(r).multiply(i.add(n.multiply(h))).mod(r);return this.serializeSig(h,c)},this.verifyWithMessageHash=function(t,e){return this.verifyHex(t,e,this.pubKeyHex)},this.verifyHex=function(t,e,n){var r,i,s=KJUR.crypto.ECDSA.parseSigHex(e);r=s.r,i=s.s;var a;a=Ne.decodeFromHex(this.ecparams.curve,n);var u=new o(t,16);return this.verifyRaw(u,r,i,a)},this.verify=function(t,e,n){var r,i;if(Bitcoin.Util.isArray(e)){var s=this.parseSig(e);r=s.r,i=s.s}else{if("object"!=typeof e||!e.r||!e.s)throw"Invalid value for signature";r=e.r,i=e.s}var a;if(n instanceof Ne)a=n;else{if(!Bitcoin.Util.isArray(n))throw"Invalid format for pubkey value, must be byte array or ECPointFp";a=Ne.decodeFrom(this.ecparams.curve,n)}var u=o.fromByteArrayUnsigned(t);return this.verifyRaw(u,r,i,a)},this.verifyRaw=function(t,e,n,r){var i=this.ecparams.n,s=this.ecparams.G;if(e.compareTo(o.ONE)<0||e.compareTo(i)>=0)return!1;if(n.compareTo(o.ONE)<0||n.compareTo(i)>=0)return!1;var a=n.modInverse(i),u=t.multiply(a).mod(i),h=e.multiply(a).mod(i),c=s.multiply(u).add(r.multiply(h)),f=c.getX().toBigInteger().mod(i);return f.equals(e)},this.serializeSig=function(t,e){var n=t.toByteArraySigned(),r=e.toByteArraySigned(),i=[];return i.push(2),i.push(n.length),i=i.concat(n),i.push(2),i.push(r.length),i=i.concat(r),i.unshift(i.length),i.unshift(48),i},this.parseSig=function(t){var e;if(48!=t[0])throw new Error("Signature not a valid DERSequence");if(e=2,2!=t[e])throw new Error("First element in signature must be a DERInteger");var n=t.slice(e+2,e+2+t[e+1]);if(e+=2+t[e+1],2!=t[e])throw new Error("Second element in signature must be a DERInteger");var r=t.slice(e+2,e+2+t[e+1]);e+=2+t[e+1];var i=o.fromByteArrayUnsigned(n),s=o.fromByteArrayUnsigned(r);return{r:i,s:s}},this.parseSigCompact=function(t){if(65!==t.length)throw"Signature has the wrong length";var e=t[0]-27;if(0>e||e>7)throw"Invalid signature type";var n=this.ecparams.n,r=o.fromByteArrayUnsigned(t.slice(1,33)).mod(n),i=o.fromByteArrayUnsigned(t.slice(33,65)).mod(n);return{r:r,s:i,i:e}},void 0!==t&&void 0!==t.curve&&(this.curveName=t.curve),void 0===this.curveName&&(this.curveName=e),this.setNamedCurve(this.curveName),void 0!==t&&(void 0!==t.prv&&this.setPrivateKeyHex(t.prv),void 0!==t.pub&&this.setPublicKeyHex(t.pub))},KJUR.crypto.ECDSA.parseSigHex=function(t){var e=KJUR.crypto.ECDSA.parseSigHexInHexRS(t),n=new o(e.r,16),r=new o(e.s,16);return{r:n,s:r}},KJUR.crypto.ECDSA.parseSigHexInHexRS=function(t){if("30"!=t.substr(0,2))throw"signature is not a ASN.1 sequence";var e=_r.getPosArrayOfChildren_AtObj(t,0);if(2!=e.length)throw"number of signature ASN.1 sequence elements seem wrong";var n=e[0],r=e[1];if("02"!=t.substr(n,2))throw"1st item of sequene of signature is not ASN.1 integer";if("02"!=t.substr(r,2))throw"2nd item of sequene of signature is not ASN.1 integer";var i=_r.getHexOfV_AtObj(t,n),s=_r.getHexOfV_AtObj(t,r);return{r:i,s:s}},KJUR.crypto.ECDSA.asn1SigToConcatSig=function(t){var e=KJUR.crypto.ECDSA.parseSigHexInHexRS(t),n=e.r,r=e.s;if("00"==n.substr(0,2)&&n.length/2*8%128==8&&(n=n.substr(2)),"00"==r.substr(0,2)&&r.length/2*8%128==8&&(r=r.substr(2)),n.length/2*8%128!=0)throw"unknown ECDSA sig r length error";if(r.length/2*8%128!=0)throw"unknown ECDSA sig s length error";return n+r},KJUR.crypto.ECDSA.concatSigToASN1Sig=function(t){if(t.length/2*8%128!=0)throw"unknown ECDSA concatinated r-s sig  length error";var e=t.substr(0,t.length/2),n=t.substr(t.length/2);return KJUR.crypto.ECDSA.hexRSSigToASN1Sig(e,n)},KJUR.crypto.ECDSA.hexRSSigToASN1Sig=function(t,e){var n=new o(t,16),r=new o(e,16);return KJUR.crypto.ECDSA.biRSSigToASN1Sig(n,r)},KJUR.crypto.ECDSA.biRSSigToASN1Sig=function(t,e){var n=new KJUR.asn1.DERInteger({bigint:t}),r=new KJUR.asn1.DERInteger({bigint:e}),i=new KJUR.asn1.DERSequence({array:[n,r]});return i.getEncodedHex()},/*! ecparam-1.0.0.js (c) 2013 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.ECParameterDB=new function(){function t(t){return new o(t,16)}var e={},n={};this.getByName=function(t){var r=t;if("undefined"!=typeof n[r]&&(r=n[t]),"undefined"!=typeof e[r])return e[r];throw"unregistered EC curve name: "+r},this.regist=function(r,i,s,o,a,u,h,c,f,l,d,p){e[r]={};var g=t(s),y=t(o),v=t(a),m=t(u),S=t(h),b=new Xe(g,y,v),E=b.decodePointHex("04"+c+f);e[r].name=r,e[r].keylen=i,e[r].curve=b,e[r].G=E,e[r].n=m,e[r].h=S,e[r].oid=d,e[r].info=p;for(var w=0;w<l.length;w++)n[l[w]]=r}},KJUR.crypto.ECParameterDB.regist("secp128r1",128,"FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF","FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC","E87579C11079F43DD824993C2CEE5ED3","FFFFFFFE0000000075A30D1B9038A115","1","161FF7528B899B2D0C28607CA52C5B86","CF5AC8395BAFEB13C02DA292DDED7A83",[],"","secp128r1 : SECG curve over a 128 bit prime field"),KJUR.crypto.ECParameterDB.regist("secp160k1",160,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73","0","7","0100000000000000000001B8FA16DFAB9ACA16B6B3","1","3B4C382CE37AA192A4019E763036F4F5DD4D7EBB","938CF935318FDCED6BC28286531733C3F03C4FEE",[],"","secp160k1 : SECG curve over a 160 bit prime field"),KJUR.crypto.ECParameterDB.regist("secp160r1",160,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC","1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45","0100000000000000000001F4C8F927AED3CA752257","1","4A96B5688EF573284664698968C38BB913CBFC82","23A628553168947D59DCC912042351377AC5FB32",[],"","secp160r1 : SECG curve over a 160 bit prime field"),KJUR.crypto.ECParameterDB.regist("secp192k1",192,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37","0","3","FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D","1","DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D","9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D",[]),KJUR.crypto.ECParameterDB.regist("secp192r1",192,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC","64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1","FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831","1","188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012","07192B95FFC8DA78631011ED6B24CDD573F977A11E794811",[]),KJUR.crypto.ECParameterDB.regist("secp224r1",224,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE","B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4","FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D","1","B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21","BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34",[]),KJUR.crypto.ECParameterDB.regist("secp256k1",256,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F","0","7","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141","1","79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798","483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8",[]),KJUR.crypto.ECParameterDB.regist("secp256r1",256,"FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF","FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC","5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B","FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551","1","6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296","4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5",["NIST P-256","P-256","prime256v1"]),KJUR.crypto.ECParameterDB.regist("secp384r1",384,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC","B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973","1","AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7","3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f",["NIST P-384","P-384"]),KJUR.crypto.ECParameterDB.regist("secp521r1",521,"1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF","1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC","051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00","1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409","1","C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66","011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650",["NIST P-521","P-521"]),/*! dsa-modified-1.0.1.js (c) Recurity Labs GmbH, Kenji Urushimma | github.com/openpgpjs/openpgpjs/blob/master/LICENSE
		 */
	"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.DSA=function(){function t(t,e,n,i,s,a){var u=KJUR.crypto.Util.hashString(e,t.toLowerCase()),u=u.substr(0,s.bitLength()/4),h=new o(u,16),c=r(o.ONE.add(o.ONE),s.subtract(o.ONE)),f=n.modPow(c,i).mod(s),l=c.modInverse(s).multiply(h.add(a.multiply(f))).mod(s),d=new Array;return d[0]=f,d[1]=l,d}function e(t){var e=openpgp.config.config.prefer_hash_algorithm;switch(Math.round(t.bitLength()/8)){case 20:return 2!=e&&e>11&&10!=e&&8>e?2:e;case 28:return e>11&&8>e?11:e;case 32:return e>10&&8>e?8:e;default:return util.print_debug("DSA select hash algorithm: returning null for an unknown length of q"),null}}function n(t,e,n,r,i,s,a,u){var h=KJUR.crypto.Util.hashString(r,t.toLowerCase()),h=h.substr(0,s.bitLength()/4),c=new o(h,16);if(o.ZERO.compareTo(e)>0||e.compareTo(s)>0||o.ZERO.compareTo(n)>0||n.compareTo(s)>0)return util.print_error("invalid DSA Signature"),null;var f=n.modInverse(s),l=c.multiply(f).mod(s),d=e.multiply(f).mod(s),p=a.modPow(l,i).multiply(u.modPow(d,i)).mod(i).mod(s);return 0==p.compareTo(e)}function r(t,e){if(!(e.compareTo(t)<=0)){for(var n=e.subtract(t),r=i(n.bitLength());r>n;)r=i(n.bitLength());return t.add(r)}}function i(t){if(0>t)return null;var e=Math.floor((t+7)/8),n=s(e);return t%8>0&&(n=String.fromCharCode(Math.pow(2,t%8)-1&n.charCodeAt(0))+n.substring(1)),new o(u(n),16)}function s(t){for(var e="",n=0;t>n;n++)e+=String.fromCharCode(a());return e}function a(){var t=new Uint32Array(1);return rr.crypto.getRandomValues(t),255&t[0]}function u(t){if(null==t)return"";for(var e,n=[],r=t.length,i=0;r>i;){for(e=t[i++].charCodeAt().toString(16);e.length<2;)e="0"+e;n.push(""+e)}return n.join("")}this.p=null,this.q=null,this.g=null,this.y=null,this.x=null,this.type="DSA",this.setPrivate=function(t,e,n,r,i){this.isPrivate=!0,this.p=t,this.q=e,this.g=n,this.y=r,this.x=i},this.setPublic=function(t,e,n,r){this.isPublic=!0,this.p=t,this.q=e,this.g=n,this.y=r,this.x=null},this.signWithMessageHash=function(t){var e=this.p,n=this.q,i=this.g,s=(this.y,this.x),a=(t.substr(0,n.bitLength()/4),new o(t,16)),u=r(o.ONE.add(o.ONE),n.subtract(o.ONE)),h=i.modPow(u,e).mod(n),c=u.modInverse(n).multiply(a.add(s.multiply(h))).mod(n),f=KJUR.asn1.ASN1Util.jsonToASN1HEX({seq:[{"int":{bigint:h}},{"int":{bigint:c}}]});return f},this.verifyWithMessageHash=function(t,e){var n=this.p,r=this.q,i=this.g,s=this.y,a=this.parseASN1Signature(e),u=a[0],h=a[1],t=t.substr(0,r.bitLength()/4),c=new o(t,16);if(o.ZERO.compareTo(u)>0||u.compareTo(r)>0||o.ZERO.compareTo(h)>0||h.compareTo(r)>0)throw"invalid DSA signature";var f=h.modInverse(r),l=c.multiply(f).mod(r),d=u.multiply(f).mod(r),p=i.modPow(l,n).multiply(s.modPow(d,n)).mod(n).mod(r);return 0==p.compareTo(u)},this.parseASN1Signature=function(t){try{var e=new o(_r.getVbyList(t,0,[0],"02"),16),n=new o(_r.getVbyList(t,0,[1],"02"),16);return[e,n]}catch(r){throw"malformed DSA signature"}},this.select_hash_algorithm=e,this.sign=t,this.verify=n,this.getRandomBigIntegerInRange=r,this.getRandomBigInteger=i,this.getRandomBytes=s};/*! pkcs5pkey-1.0.6.js (c) 2013-2014 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	var Or=function(){var t=function(t,e,r){return n(sr.AES,t,e,r)},e=function(t,e,r){return n(sr.TripleDES,t,e,r)},n=function(t,e,n,r){var i=sr.enc.Hex.parse(e),s=sr.enc.Hex.parse(n),o=sr.enc.Hex.parse(r),a={};a.key=s,a.iv=o,a.ciphertext=i;var u=t.decrypt(a,s,{iv:o});return sr.enc.Hex.stringify(u)},r=function(t,e,n){return o(sr.AES,t,e,n)},s=function(t,e,n){return o(sr.TripleDES,t,e,n)},o=function(t,e,n,r){var i=sr.enc.Hex.parse(e),s=sr.enc.Hex.parse(n),o=sr.enc.Hex.parse(r),a=t.encrypt(i,s,{iv:o}),u=sr.enc.Hex.parse(a.toString()),h=sr.enc.Base64.stringify(u);return h},a={"AES-256-CBC":{proc:t,eproc:r,keylen:32,ivlen:16},"AES-192-CBC":{proc:t,eproc:r,keylen:24,ivlen:16},"AES-128-CBC":{proc:t,eproc:r,keylen:16,ivlen:16},"DES-EDE3-CBC":{proc:e,eproc:s,keylen:24,ivlen:8}},u=function(t){return a[t].proc},h=function(t){var e=sr.lib.WordArray.random(t),n=sr.enc.Hex.stringify(e);return n},c=function(t){var e={};t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)","m"))&&(e.cipher=RegExp.$1,e.ivsalt=RegExp.$2),t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"))&&(e.type=RegExp.$1);var n=-1,r=0;-1!=t.indexOf("\r\n\r\n")&&(n=t.indexOf("\r\n\r\n"),r=2),-1!=t.indexOf("\n\n")&&(n=t.indexOf("\n\n"),r=1);var i=t.indexOf("-----END");if(-1!=n&&-1!=i){var s=t.substring(n+2*r,i-r);s=s.replace(/\s+/g,""),e.data=s}return e},f=function(t,e,n){for(var r=n.substring(0,16),i=sr.enc.Hex.parse(r),s=sr.enc.Utf8.parse(e),o=a[t].keylen+a[t].ivlen,u="",h=null;;){var c=sr.algo.MD5.create();if(null!=h&&c.update(h),c.update(s),c.update(i),h=c.finalize(),u+=sr.enc.Hex.stringify(h),u.length>=2*o)break}var f={};return f.keyhex=u.substr(0,2*a[t].keylen),f.ivhex=u.substr(2*a[t].keylen,2*a[t].ivlen),f},l=function(t,e,n,r){var i=sr.enc.Base64.parse(t),s=sr.enc.Hex.stringify(i),o=a[e].proc,u=o(s,n,r);return u},d=function(t,e,n,r){var i=a[e].eproc,s=i(t,n,r);return s};return{version:"1.0.5",getHexFromPEM:function(t,e){var n=t;if(-1==n.indexOf("BEGIN "+e))throw"can't find PEM header: "+e;n=n.replace("-----BEGIN "+e+"-----",""),n=n.replace("-----END "+e+"-----","");var r=n.replace(/\s+/g,""),s=i(r);return s},getDecryptedKeyHexByKeyIV:function(t,e,n,r){var i=u(e);return i(t,n,r)},parsePKCS5PEM:function(t){return c(t)},getKeyAndUnusedIvByPasscodeAndIvsalt:function(t,e,n){return f(t,e,n)},decryptKeyB64:function(t,e,n,r){return l(t,e,n,r)},getDecryptedKeyHex:function(t,e){var n=c(t),r=(n.type,n.cipher),i=n.ivsalt,s=n.data,o=f(r,e,i),a=o.keyhex,u=l(s,r,a,i);return u},getRSAKeyFromEncryptedPKCS5PEM:function(t,e){var n=this.getDecryptedKeyHex(t,e),r=new ve;return r.readPrivateKeyFromASN1HexString(n),r},getEryptedPKCS5PEMFromPrvKeyHex:function(t,e,n,r){var i="";if("undefined"!=typeof n&&null!=n||(n="AES-256-CBC"),"undefined"==typeof a[n])throw"PKCS5PKEY unsupported algorithm: "+n;if("undefined"==typeof r||null==r){var s=a[n].ivlen,o=h(s);r=o.toUpperCase()}var u=f(n,e,r),c=u.keyhex,l=d(t,n,c,r),p=l.replace(/(.{64})/g,"$1\r\n"),i="-----BEGIN RSA PRIVATE KEY-----\r\n";return i+="Proc-Type: 4,ENCRYPTED\r\n",i+="DEK-Info: "+n+","+r+"\r\n",i+="\r\n",i+=p,i+="\r\n-----END RSA PRIVATE KEY-----\r\n"},getEryptedPKCS5PEMFromRSAKey:function(t,e,n,r){var i=new KJUR.asn1.DERInteger({"int":0}),s=new KJUR.asn1.DERInteger({bigint:t.n}),o=new KJUR.asn1.DERInteger({"int":t.e}),a=new KJUR.asn1.DERInteger({bigint:t.d}),u=new KJUR.asn1.DERInteger({bigint:t.p}),h=new KJUR.asn1.DERInteger({bigint:t.q}),c=new KJUR.asn1.DERInteger({bigint:t.dmp1}),f=new KJUR.asn1.DERInteger({bigint:t.dmq1}),l=new KJUR.asn1.DERInteger({bigint:t.coeff}),d=new KJUR.asn1.DERSequence({array:[i,s,o,a,u,h,c,f,l]}),p=d.getEncodedHex();return this.getEryptedPKCS5PEMFromPrvKeyHex(p,e,n,r)},newEncryptedPKCS5PEM:function(t,e,n,r){"undefined"!=typeof e&&null!=e||(e=1024),"undefined"!=typeof n&&null!=n||(n="10001");var i=new ve;i.generate(e,n);var s=null;return s="undefined"==typeof r||null==r?this.getEncryptedPKCS5PEMFromRSAKey(pkey,t):this.getEncryptedPKCS5PEMFromRSAKey(pkey,t,r)},getRSAKeyFromPlainPKCS8PEM:function(t){if(t.match(/ENCRYPTED/))throw"pem shall be not ENCRYPTED";var e=this.getHexFromPEM(t,"PRIVATE KEY"),n=this.getRSAKeyFromPlainPKCS8Hex(e);return n},getRSAKeyFromPlainPKCS8Hex:function(t){var e=_r.getPosArrayOfChildren_AtObj(t,0);if(3!=e.length)throw"outer DERSequence shall have 3 elements: "+e.length;var n=_r.getHexOfTLV_AtObj(t,e[1]);if("300d06092a864886f70d0101010500"!=n)throw"PKCS8 AlgorithmIdentifier is not rsaEnc: "+n;var n=_r.getHexOfTLV_AtObj(t,e[1]),r=_r.getHexOfTLV_AtObj(t,e[2]),i=_r.getHexOfV_AtObj(r,0),s=new ve;return s.readPrivateKeyFromASN1HexString(i),s},parseHexOfEncryptedPKCS8:function(t){var e={},n=_r.getPosArrayOfChildren_AtObj(t,0);if(2!=n.length)throw"malformed format: SEQUENCE(0).items != 2: "+n.length;e.ciphertext=_r.getHexOfV_AtObj(t,n[1]);var r=_r.getPosArrayOfChildren_AtObj(t,n[0]);if(2!=r.length)throw"malformed format: SEQUENCE(0.0).items != 2: "+r.length;if("2a864886f70d01050d"!=_r.getHexOfV_AtObj(t,r[0]))throw"this only supports pkcs5PBES2";var i=_r.getPosArrayOfChildren_AtObj(t,r[1]);if(2!=r.length)throw"malformed format: SEQUENCE(0.0.1).items != 2: "+i.length;var s=_r.getPosArrayOfChildren_AtObj(t,i[1]);if(2!=s.length)throw"malformed format: SEQUENCE(0.0.1.1).items != 2: "+s.length;if("2a864886f70d0307"!=_r.getHexOfV_AtObj(t,s[0]))throw"this only supports TripleDES";e.encryptionSchemeAlg="TripleDES",e.encryptionSchemeIV=_r.getHexOfV_AtObj(t,s[1]);var o=_r.getPosArrayOfChildren_AtObj(t,i[0]);if(2!=o.length)throw"malformed format: SEQUENCE(0.0.1.0).items != 2: "+o.length;if("2a864886f70d01050c"!=_r.getHexOfV_AtObj(t,o[0]))throw"this only supports pkcs5PBKDF2";var a=_r.getPosArrayOfChildren_AtObj(t,o[1]);if(a.length<2)throw"malformed format: SEQUENCE(0.0.1.0.1).items < 2: "+a.length;e.pbkdf2Salt=_r.getHexOfV_AtObj(t,a[0]);var u=_r.getHexOfV_AtObj(t,a[1]);try{e.pbkdf2Iter=parseInt(u,16)}catch(h){throw"malformed format pbkdf2Iter: "+u}return e},getPBKDF2KeyHexFromParam:function(t,e){var n=sr.enc.Hex.parse(t.pbkdf2Salt),r=t.pbkdf2Iter,i=sr.PBKDF2(e,n,{keySize:6,iterations:r}),s=sr.enc.Hex.stringify(i);return s},getPlainPKCS8HexFromEncryptedPKCS8PEM:function(t,e){var n=this.getHexFromPEM(t,"ENCRYPTED PRIVATE KEY"),r=this.parseHexOfEncryptedPKCS8(n),i=Or.getPBKDF2KeyHexFromParam(r,e),s={};s.ciphertext=sr.enc.Hex.parse(r.ciphertext);var o=sr.enc.Hex.parse(i),a=sr.enc.Hex.parse(r.encryptionSchemeIV),u=sr.TripleDES.decrypt(s,o,{iv:a}),h=sr.enc.Hex.stringify(u);return h},getRSAKeyFromEncryptedPKCS8PEM:function(t,e){var n=this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t,e),r=this.getRSAKeyFromPlainPKCS8Hex(n);return r},getKeyFromEncryptedPKCS8PEM:function(t,e){var n=this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t,e),r=this.getKeyFromPlainPrivatePKCS8Hex(n);return r},parsePlainPrivatePKCS8Hex:function(t){var e={};if(e.algparam=null,"30"!=t.substr(0,2))throw"malformed plain PKCS8 private key(code:001)";var n=_r.getPosArrayOfChildren_AtObj(t,0);if(3!=n.length)throw"malformed plain PKCS8 private key(code:002)";if("30"!=t.substr(n[1],2))throw"malformed PKCS8 private key(code:003)";var r=_r.getPosArrayOfChildren_AtObj(t,n[1]);if(2!=r.length)throw"malformed PKCS8 private key(code:004)";if("06"!=t.substr(r[0],2))throw"malformed PKCS8 private key(code:005)";if(e.algoid=_r.getHexOfV_AtObj(t,r[0]),"06"==t.substr(r[1],2)&&(e.algparam=_r.getHexOfV_AtObj(t,r[1])),"04"!=t.substr(n[2],2))throw"malformed PKCS8 private key(code:006)";return e.keyidx=_r.getStartPosOfV_AtObj(t,n[2]),e},getKeyFromPlainPrivatePKCS8PEM:function(t){var e=this.getHexFromPEM(t,"PRIVATE KEY"),n=this.getKeyFromPlainPrivatePKCS8Hex(e);return n},getKeyFromPlainPrivatePKCS8Hex:function(t){var e=this.parsePlainPrivatePKCS8Hex(t);if("2a864886f70d010101"==e.algoid){this.parsePrivateRawRSAKeyHexAtObj(t,e);var n=e.key,r=new ve;return r.setPrivateEx(n.n,n.e,n.d,n.p,n.q,n.dp,n.dq,n.co),r}if("2a8648ce3d0201"==e.algoid){if(this.parsePrivateRawECKeyHexAtObj(t,e),void 0===KJUR.crypto.OID.oidhex2name[e.algparam])throw"KJUR.crypto.OID.oidhex2name undefined: "+e.algparam;var i=KJUR.crypto.OID.oidhex2name[e.algparam],r=new KJUR.crypto.ECDSA({curve:i,prv:e.key});return r}throw"unsupported private key algorithm"},getRSAKeyFromPublicPKCS8PEM:function(t){var e=this.getHexFromPEM(t,"PUBLIC KEY"),n=this.getRSAKeyFromPublicPKCS8Hex(e);return n},getKeyFromPublicPKCS8PEM:function(t){var e=this.getHexFromPEM(t,"PUBLIC KEY"),n=this.getKeyFromPublicPKCS8Hex(e);return n},getKeyFromPublicPKCS8Hex:function(t){var e=this.parsePublicPKCS8Hex(t);if("2a864886f70d010101"==e.algoid){var n=this.parsePublicRawRSAKeyHex(e.key),r=new ve;return r.setPublic(n.n,n.e),r}if("2a8648ce3d0201"==e.algoid){if(void 0===KJUR.crypto.OID.oidhex2name[e.algparam])throw"KJUR.crypto.OID.oidhex2name undefined: "+e.algparam;var i=KJUR.crypto.OID.oidhex2name[e.algparam],r=new KJUR.crypto.ECDSA({curve:i,pub:e.key});return r}throw"unsupported public key algorithm"},parsePublicRawRSAKeyHex:function(t){var e={};if("30"!=t.substr(0,2))throw"malformed RSA key(code:001)";var n=_r.getPosArrayOfChildren_AtObj(t,0);if(2!=n.length)throw"malformed RSA key(code:002)";if("02"!=t.substr(n[0],2))throw"malformed RSA key(code:003)";if(e.n=_r.getHexOfV_AtObj(t,n[0]),"02"!=t.substr(n[1],2))throw"malformed RSA key(code:004)";return e.e=_r.getHexOfV_AtObj(t,n[1]),e},parsePrivateRawRSAKeyHexAtObj:function(t,e){var n=e.keyidx;if("30"!=t.substr(n,2))throw"malformed RSA private key(code:001)";var r=_r.getPosArrayOfChildren_AtObj(t,n);if(9!=r.length)throw"malformed RSA private key(code:002)";e.key={},e.key.n=_r.getHexOfV_AtObj(t,r[1]),e.key.e=_r.getHexOfV_AtObj(t,r[2]),e.key.d=_r.getHexOfV_AtObj(t,r[3]),e.key.p=_r.getHexOfV_AtObj(t,r[4]),e.key.q=_r.getHexOfV_AtObj(t,r[5]),e.key.dp=_r.getHexOfV_AtObj(t,r[6]),e.key.dq=_r.getHexOfV_AtObj(t,r[7]),e.key.co=_r.getHexOfV_AtObj(t,r[8])},parsePrivateRawECKeyHexAtObj:function(t,e){var n=e.keyidx;if("30"!=t.substr(n,2))throw"malformed ECC private key(code:001)";var r=_r.getPosArrayOfChildren_AtObj(t,n);if(3!=r.length)throw"malformed ECC private key(code:002)";if("04"!=t.substr(r[1],2))throw"malformed ECC private key(code:003)";e.key=_r.getHexOfV_AtObj(t,r[1])},parsePublicPKCS8Hex:function(t){var e={};e.algparam=null;var n=_r.getPosArrayOfChildren_AtObj(t,0);if(2!=n.length)throw"outer DERSequence shall have 2 elements: "+n.length;var r=n[0];if("30"!=t.substr(r,2))throw"malformed PKCS8 public key(code:001)";var i=_r.getPosArrayOfChildren_AtObj(t,r);if(2!=i.length)throw"malformed PKCS8 public key(code:002)";if("06"!=t.substr(i[0],2))throw"malformed PKCS8 public key(code:003)";if(e.algoid=_r.getHexOfV_AtObj(t,i[0]),"06"==t.substr(i[1],2)&&(e.algparam=_r.getHexOfV_AtObj(t,i[1])),"03"!=t.substr(n[1],2))throw"malformed PKCS8 public key(code:004)";return e.key=_r.getHexOfV_AtObj(t,n[1]).substr(2),e},getRSAKeyFromPublicPKCS8Hex:function(t){var e=_r.getPosArrayOfChildren_AtObj(t,0);if(2!=e.length)throw"outer DERSequence shall have 2 elements: "+e.length;var n=_r.getHexOfTLV_AtObj(t,e[0]);if("300d06092a864886f70d0101010500"!=n)throw"PKCS8 AlgorithmId is not rsaEncryption";if("03"!=t.substr(e[1],2))throw"PKCS8 Public Key is not BITSTRING encapslated.";var r=_r.getStartPosOfV_AtObj(t,e[1])+2;if("30"!=t.substr(r,2))throw"PKCS8 Public Key is not SEQUENCE.";var i=_r.getPosArrayOfChildren_AtObj(t,r);if(2!=i.length)throw"inner DERSequence shall have 2 elements: "+i.length;if("02"!=t.substr(i[0],2))throw"N is not ASN.1 INTEGER";if("02"!=t.substr(i[1],2))throw"E is not ASN.1 INTEGER";var s=_r.getHexOfV_AtObj(t,i[0]),o=_r.getHexOfV_AtObj(t,i[1]),a=new ve;return a.setPublic(s,o),a}}}(),Cr=function(){var t=function(t,e,n){return r(sr.AES,t,e,n)},e=function(t,e,n){return r(sr.TripleDES,t,e,n)},n=function(t,e,n){return r(sr.DES,t,e,n)},r=function(t,e,n,r){var i=sr.enc.Hex.parse(e),s=sr.enc.Hex.parse(n),o=sr.enc.Hex.parse(r),a={};a.key=s,a.iv=o,a.ciphertext=i;var u=t.decrypt(a,s,{iv:o});return sr.enc.Hex.stringify(u)},s=function(t,e,n){return h(sr.AES,t,e,n)},a=function(t,e,n){return h(sr.TripleDES,t,e,n)},u=function(t,e,n){return h(sr.DES,t,e,n)},h=function(t,e,n,r){var i=sr.enc.Hex.parse(e),s=sr.enc.Hex.parse(n),o=sr.enc.Hex.parse(r),a=t.encrypt(i,s,{iv:o}),u=sr.enc.Hex.parse(a.toString()),h=sr.enc.Base64.stringify(u);return h},c={"AES-256-CBC":{proc:t,eproc:s,keylen:32,ivlen:16},"AES-192-CBC":{proc:t,eproc:s,keylen:24,ivlen:16},"AES-128-CBC":{proc:t,eproc:s,keylen:16,ivlen:16},"DES-EDE3-CBC":{proc:e,eproc:a,keylen:24,ivlen:8},"DES-CBC":{proc:n,eproc:u,keylen:8,ivlen:8}},f=function(t){return c[t].proc},l=function(t){var e=sr.lib.WordArray.random(t),n=sr.enc.Hex.stringify(e);return n},d=function(t){var e={};t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)","m"))&&(e.cipher=RegExp.$1,e.ivsalt=RegExp.$2),t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"))&&(e.type=RegExp.$1);var n=-1,r=0;-1!=t.indexOf("\r\n\r\n")&&(n=t.indexOf("\r\n\r\n"),r=2),-1!=t.indexOf("\n\n")&&(n=t.indexOf("\n\n"),r=1);var i=t.indexOf("-----END");if(-1!=n&&-1!=i){var s=t.substring(n+2*r,i-r);s=s.replace(/\s+/g,""),e.data=s}return e},p=function(t,e,n){for(var r=n.substring(0,16),i=sr.enc.Hex.parse(r),s=sr.enc.Utf8.parse(e),o=c[t].keylen+c[t].ivlen,a="",u=null;;){var h=sr.algo.MD5.create();if(null!=u&&h.update(u),h.update(s),h.update(i),u=h.finalize(),a+=sr.enc.Hex.stringify(u),a.length>=2*o)break}var f={};return f.keyhex=a.substr(0,2*c[t].keylen),f.ivhex=a.substr(2*c[t].keylen,2*c[t].ivlen),f},g=function(t,e,n,r){var i=sr.enc.Base64.parse(t),s=sr.enc.Hex.stringify(i),o=c[e].proc,a=o(s,n,r);return a},y=function(t,e,n,r){var i=c[e].eproc,s=i(t,n,r);return s};return{version:"1.0.0",getHexFromPEM:function(t,e){var n=t;if(-1==n.indexOf("-----BEGIN "))throw"can't find PEM header: "+e;"string"==typeof e&&""!=e?(n=n.replace("-----BEGIN "+e+"-----",""),n=n.replace("-----END "+e+"-----","")):(n=n.replace(/-----BEGIN [^-]+-----/,""),n=n.replace(/-----END [^-]+-----/,""));var r=n.replace(/\s+/g,""),s=i(r);return s},getDecryptedKeyHexByKeyIV:function(t,e,n,r){var i=f(e);return i(t,n,r)},parsePKCS5PEM:function(t){return d(t)},getKeyAndUnusedIvByPasscodeAndIvsalt:function(t,e,n){return p(t,e,n)},decryptKeyB64:function(t,e,n,r){return g(t,e,n,r)},getDecryptedKeyHex:function(t,e){var n=d(t),r=(n.type,n.cipher),i=n.ivsalt,s=n.data,o=p(r,e,i),a=o.keyhex,u=g(s,r,a,i);return u},getRSAKeyFromEncryptedPKCS5PEM:function(t,e){var n=this.getDecryptedKeyHex(t,e),r=new ve;return r.readPrivateKeyFromASN1HexString(n),r},getEncryptedPKCS5PEMFromPrvKeyHex:function(t,e,n,r,i){var s="";if("undefined"!=typeof r&&null!=r||(r="AES-256-CBC"),"undefined"==typeof c[r])throw"KEYUTIL unsupported algorithm: "+r;if("undefined"==typeof i||null==i){var o=c[r].ivlen,a=l(o);i=a.toUpperCase()}var u=p(r,n,i),h=u.keyhex,f=y(e,r,h,i),d=f.replace(/(.{64})/g,"$1\r\n"),s="-----BEGIN "+t+" PRIVATE KEY-----\r\n";return s+="Proc-Type: 4,ENCRYPTED\r\n",s+="DEK-Info: "+r+","+i+"\r\n",s+="\r\n",s+=d,s+="\r\n-----END "+t+" PRIVATE KEY-----\r\n"},getEncryptedPKCS5PEMFromRSAKey:function(t,e,n,r){var i=new KJUR.asn1.DERInteger({"int":0}),s=new KJUR.asn1.DERInteger({bigint:t.n}),o=new KJUR.asn1.DERInteger({"int":t.e}),a=new KJUR.asn1.DERInteger({bigint:t.d}),u=new KJUR.asn1.DERInteger({bigint:t.p}),h=new KJUR.asn1.DERInteger({bigint:t.q}),c=new KJUR.asn1.DERInteger({bigint:t.dmp1}),f=new KJUR.asn1.DERInteger({bigint:t.dmq1}),l=new KJUR.asn1.DERInteger({bigint:t.coeff}),d=new KJUR.asn1.DERSequence({array:[i,s,o,a,u,h,c,f,l]}),p=d.getEncodedHex();return this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA",p,e,n,r)},newEncryptedPKCS5PEM:function(t,e,n,r){"undefined"!=typeof e&&null!=e||(e=1024),"undefined"!=typeof n&&null!=n||(n="10001");var i=new ve;i.generate(e,n);var s=null;return s="undefined"==typeof r||null==r?this.getEncryptedPKCS5PEMFromRSAKey(i,t):this.getEncryptedPKCS5PEMFromRSAKey(i,t,r)},getRSAKeyFromPlainPKCS8PEM:function(t){if(t.match(/ENCRYPTED/))throw"pem shall be not ENCRYPTED";var e=this.getHexFromPEM(t,"PRIVATE KEY"),n=this.getRSAKeyFromPlainPKCS8Hex(e);return n},getRSAKeyFromPlainPKCS8Hex:function(t){var e=_r.getPosArrayOfChildren_AtObj(t,0);if(3!=e.length)throw"outer DERSequence shall have 3 elements: "+e.length;var n=_r.getHexOfTLV_AtObj(t,e[1]);if("300d06092a864886f70d0101010500"!=n)throw"PKCS8 AlgorithmIdentifier is not rsaEnc: "+n;var n=_r.getHexOfTLV_AtObj(t,e[1]),r=_r.getHexOfTLV_AtObj(t,e[2]),i=_r.getHexOfV_AtObj(r,0),s=new ve;return s.readPrivateKeyFromASN1HexString(i),s},parseHexOfEncryptedPKCS8:function(t){var e={},n=_r.getPosArrayOfChildren_AtObj(t,0);if(2!=n.length)throw"malformed format: SEQUENCE(0).items != 2: "+n.length;e.ciphertext=_r.getHexOfV_AtObj(t,n[1]);var r=_r.getPosArrayOfChildren_AtObj(t,n[0]);if(2!=r.length)throw"malformed format: SEQUENCE(0.0).items != 2: "+r.length;if("2a864886f70d01050d"!=_r.getHexOfV_AtObj(t,r[0]))throw"this only supports pkcs5PBES2";var i=_r.getPosArrayOfChildren_AtObj(t,r[1]);if(2!=r.length)throw"malformed format: SEQUENCE(0.0.1).items != 2: "+i.length;var s=_r.getPosArrayOfChildren_AtObj(t,i[1]);if(2!=s.length)throw"malformed format: SEQUENCE(0.0.1.1).items != 2: "+s.length;if("2a864886f70d0307"!=_r.getHexOfV_AtObj(t,s[0]))throw"this only supports TripleDES";e.encryptionSchemeAlg="TripleDES",e.encryptionSchemeIV=_r.getHexOfV_AtObj(t,s[1]);var o=_r.getPosArrayOfChildren_AtObj(t,i[0]);if(2!=o.length)throw"malformed format: SEQUENCE(0.0.1.0).items != 2: "+o.length;if("2a864886f70d01050c"!=_r.getHexOfV_AtObj(t,o[0]))throw"this only supports pkcs5PBKDF2";var a=_r.getPosArrayOfChildren_AtObj(t,o[1]);if(a.length<2)throw"malformed format: SEQUENCE(0.0.1.0.1).items < 2: "+a.length;e.pbkdf2Salt=_r.getHexOfV_AtObj(t,a[0]);var u=_r.getHexOfV_AtObj(t,a[1]);try{e.pbkdf2Iter=parseInt(u,16)}catch(h){throw"malformed format pbkdf2Iter: "+u}return e},getPBKDF2KeyHexFromParam:function(t,e){var n=sr.enc.Hex.parse(t.pbkdf2Salt),r=t.pbkdf2Iter,i=sr.PBKDF2(e,n,{keySize:6,iterations:r}),s=sr.enc.Hex.stringify(i);return s},getPlainPKCS8HexFromEncryptedPKCS8PEM:function(t,e){var n=this.getHexFromPEM(t,"ENCRYPTED PRIVATE KEY"),r=this.parseHexOfEncryptedPKCS8(n),i=Cr.getPBKDF2KeyHexFromParam(r,e),s={};s.ciphertext=sr.enc.Hex.parse(r.ciphertext);var o=sr.enc.Hex.parse(i),a=sr.enc.Hex.parse(r.encryptionSchemeIV),u=sr.TripleDES.decrypt(s,o,{iv:a}),h=sr.enc.Hex.stringify(u);return h},getRSAKeyFromEncryptedPKCS8PEM:function(t,e){var n=this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t,e),r=this.getRSAKeyFromPlainPKCS8Hex(n);return r},getKeyFromEncryptedPKCS8PEM:function(t,e){var n=this.getPlainPKCS8HexFromEncryptedPKCS8PEM(t,e),r=this.getKeyFromPlainPrivatePKCS8Hex(n);return r},parsePlainPrivatePKCS8Hex:function(t){var e={};if(e.algparam=null,"30"!=t.substr(0,2))throw"malformed plain PKCS8 private key(code:001)";var n=_r.getPosArrayOfChildren_AtObj(t,0);if(3!=n.length)throw"malformed plain PKCS8 private key(code:002)";if("30"!=t.substr(n[1],2))throw"malformed PKCS8 private key(code:003)";var r=_r.getPosArrayOfChildren_AtObj(t,n[1]);if(2!=r.length)throw"malformed PKCS8 private key(code:004)";if("06"!=t.substr(r[0],2))throw"malformed PKCS8 private key(code:005)";if(e.algoid=_r.getHexOfV_AtObj(t,r[0]),"06"==t.substr(r[1],2)&&(e.algparam=_r.getHexOfV_AtObj(t,r[1])),"04"!=t.substr(n[2],2))throw"malformed PKCS8 private key(code:006)";return e.keyidx=_r.getStartPosOfV_AtObj(t,n[2]),e},getKeyFromPlainPrivatePKCS8PEM:function(t){var e=this.getHexFromPEM(t,"PRIVATE KEY"),n=this.getKeyFromPlainPrivatePKCS8Hex(e);return n},getKeyFromPlainPrivatePKCS8Hex:function(t){var e=this.parsePlainPrivatePKCS8Hex(t);if("2a864886f70d010101"==e.algoid){this.parsePrivateRawRSAKeyHexAtObj(t,e);var n=e.key,r=new ve;return r.setPrivateEx(n.n,n.e,n.d,n.p,n.q,n.dp,n.dq,n.co),r}if("2a8648ce3d0201"==e.algoid){if(this.parsePrivateRawECKeyHexAtObj(t,e),void 0===KJUR.crypto.OID.oidhex2name[e.algparam])throw"KJUR.crypto.OID.oidhex2name undefined: "+e.algparam;var i=KJUR.crypto.OID.oidhex2name[e.algparam],r=new KJUR.crypto.ECDSA({curve:i});return r.setPublicKeyHex(e.pubkey),r.setPrivateKeyHex(e.key),r.isPublic=!1,r}if("2a8648ce380401"==e.algoid){var s=_r.getVbyList(t,0,[1,1,0],"02"),a=_r.getVbyList(t,0,[1,1,1],"02"),u=_r.getVbyList(t,0,[1,1,2],"02"),h=_r.getVbyList(t,0,[2,0],"02"),c=new o(s,16),f=new o(a,16),l=new o(u,16),d=new o(h,16),r=new KJUR.crypto.DSA;return r.setPrivate(c,f,l,null,d),r}throw"unsupported private key algorithm"},getRSAKeyFromPublicPKCS8PEM:function(t){var e=this.getHexFromPEM(t,"PUBLIC KEY"),n=this.getRSAKeyFromPublicPKCS8Hex(e);return n},getKeyFromPublicPKCS8PEM:function(t){var e=this.getHexFromPEM(t,"PUBLIC KEY"),n=this.getKeyFromPublicPKCS8Hex(e);return n},getKeyFromPublicPKCS8Hex:function(t){var e=this.parsePublicPKCS8Hex(t);if("2a864886f70d010101"==e.algoid){var n=this.parsePublicRawRSAKeyHex(e.key),r=new ve;return r.setPublic(n.n,n.e),r}if("2a8648ce3d0201"==e.algoid){if(void 0===KJUR.crypto.OID.oidhex2name[e.algparam])throw"KJUR.crypto.OID.oidhex2name undefined: "+e.algparam;var i=KJUR.crypto.OID.oidhex2name[e.algparam],r=new KJUR.crypto.ECDSA({curve:i,pub:e.key});return r}if("2a8648ce380401"==e.algoid){var s=e.algparam,a=_r.getHexOfV_AtObj(e.key,0),r=new KJUR.crypto.DSA;return r.setPublic(new o(s.p,16),new o(s.q,16),new o(s.g,16),new o(a,16)),r}throw"unsupported public key algorithm"},parsePublicRawRSAKeyHex:function(t){var e={};if("30"!=t.substr(0,2))throw"malformed RSA key(code:001)";var n=_r.getPosArrayOfChildren_AtObj(t,0);if(2!=n.length)throw"malformed RSA key(code:002)";if("02"!=t.substr(n[0],2))throw"malformed RSA key(code:003)";if(e.n=_r.getHexOfV_AtObj(t,n[0]),"02"!=t.substr(n[1],2))throw"malformed RSA key(code:004)";return e.e=_r.getHexOfV_AtObj(t,n[1]),e},parsePrivateRawRSAKeyHexAtObj:function(t,e){var n=e.keyidx;if("30"!=t.substr(n,2))throw"malformed RSA private key(code:001)";var r=_r.getPosArrayOfChildren_AtObj(t,n);if(9!=r.length)throw"malformed RSA private key(code:002)";e.key={},e.key.n=_r.getHexOfV_AtObj(t,r[1]),e.key.e=_r.getHexOfV_AtObj(t,r[2]),e.key.d=_r.getHexOfV_AtObj(t,r[3]),e.key.p=_r.getHexOfV_AtObj(t,r[4]),e.key.q=_r.getHexOfV_AtObj(t,r[5]),e.key.dp=_r.getHexOfV_AtObj(t,r[6]),e.key.dq=_r.getHexOfV_AtObj(t,r[7]),e.key.co=_r.getHexOfV_AtObj(t,r[8])},parsePrivateRawECKeyHexAtObj:function(t,e){var n=e.keyidx,r=_r.getVbyList(t,n,[1],"04"),i=_r.getVbyList(t,n,[2,0],"03").substr(2);e.key=r,e.pubkey=i},parsePublicPKCS8Hex:function(t){var e={};e.algparam=null;var n=_r.getPosArrayOfChildren_AtObj(t,0);if(2!=n.length)throw"outer DERSequence shall have 2 elements: "+n.length;var r=n[0];if("30"!=t.substr(r,2))throw"malformed PKCS8 public key(code:001)";var i=_r.getPosArrayOfChildren_AtObj(t,r);if(2!=i.length)throw"malformed PKCS8 public key(code:002)";if("06"!=t.substr(i[0],2))throw"malformed PKCS8 public key(code:003)";if(e.algoid=_r.getHexOfV_AtObj(t,i[0]),"06"==t.substr(i[1],2)?e.algparam=_r.getHexOfV_AtObj(t,i[1]):"30"==t.substr(i[1],2)&&(e.algparam={},e.algparam.p=_r.getVbyList(t,i[1],[0],"02"),e.algparam.q=_r.getVbyList(t,i[1],[1],"02"),e.algparam.g=_r.getVbyList(t,i[1],[2],"02")),"03"!=t.substr(n[1],2))throw"malformed PKCS8 public key(code:004)";return e.key=_r.getHexOfV_AtObj(t,n[1]).substr(2),e},getRSAKeyFromPublicPKCS8Hex:function(t){var e=_r.getPosArrayOfChildren_AtObj(t,0);if(2!=e.length)throw"outer DERSequence shall have 2 elements: "+e.length;var n=_r.getHexOfTLV_AtObj(t,e[0]);if("300d06092a864886f70d0101010500"!=n)throw"PKCS8 AlgorithmId is not rsaEncryption";if("03"!=t.substr(e[1],2))throw"PKCS8 Public Key is not BITSTRING encapslated.";var r=_r.getStartPosOfV_AtObj(t,e[1])+2;if("30"!=t.substr(r,2))throw"PKCS8 Public Key is not SEQUENCE.";var i=_r.getPosArrayOfChildren_AtObj(t,r);if(2!=i.length)throw"inner DERSequence shall have 2 elements: "+i.length;if("02"!=t.substr(i[0],2))throw"N is not ASN.1 INTEGER";if("02"!=t.substr(i[1],2))throw"E is not ASN.1 INTEGER";var s=_r.getHexOfV_AtObj(t,i[0]),o=_r.getHexOfV_AtObj(t,i[1]),a=new ve;return a.setPublic(s,o),a}}}();Cr.getKey=function(t,e,n){if("undefined"!=typeof ve&&t instanceof ve)return t;if("undefined"!=typeof KJUR.crypto.ECDSA&&t instanceof KJUR.crypto.ECDSA)return t;if("undefined"!=typeof KJUR.crypto.DSA&&t instanceof KJUR.crypto.DSA)return t;if(void 0!==t.curve&&void 0!==t.xy&&void 0===t.d)return new KJUR.crypto.ECDSA({pub:t.xy,curve:t.curve});if(void 0!==t.curve&&void 0!==t.d)return new KJUR.crypto.ECDSA({prv:t.d,curve:t.curve});if(void 0===t.kty&&void 0!==t.n&&void 0!==t.e&&void 0===t.d){var r=new ve;return r.setPublic(t.n,t.e),r}if(void 0===t.kty&&void 0!==t.n&&void 0!==t.e&&void 0!==t.d&&void 0!==t.p&&void 0!==t.q&&void 0!==t.dp&&void 0!==t.dq&&void 0!==t.co&&void 0===t.qi){var r=new ve;return r.setPrivateEx(t.n,t.e,t.d,t.p,t.q,t.dp,t.dq,t.co),r}if(void 0===t.kty&&void 0!==t.n&&void 0!==t.e&&void 0!==t.d&&void 0===t.p){var r=new ve;return r.setPrivate(t.n,t.e,t.d),r}if(void 0!==t.p&&void 0!==t.q&&void 0!==t.g&&void 0!==t.y&&void 0===t.x){var r=new KJUR.crypto.DSA;return r.setPublic(t.p,t.q,t.g,t.y),r}if(void 0!==t.p&&void 0!==t.q&&void 0!==t.g&&void 0!==t.y&&void 0!==t.x){var r=new KJUR.crypto.DSA;return r.setPrivate(t.p,t.q,t.g,t.y,t.x),r}if("RSA"===t.kty&&void 0!==t.n&&void 0!==t.e&&void 0===t.d){var r=new ve;return r.setPublic(gn(t.n),gn(t.e)),r}if("RSA"===t.kty&&void 0!==t.n&&void 0!==t.e&&void 0!==t.d&&void 0!==t.p&&void 0!==t.q&&void 0!==t.dp&&void 0!==t.dq&&void 0!==t.qi){var r=new ve;return r.setPrivateEx(gn(t.n),gn(t.e),gn(t.d),gn(t.p),gn(t.q),gn(t.dp),gn(t.dq),gn(t.qi)),r}if("RSA"===t.kty&&void 0!==t.n&&void 0!==t.e&&void 0!==t.d){var r=new ve;return r.setPrivate(gn(t.n),gn(t.e),gn(t.d)),r}if("EC"===t.kty&&void 0!==t.crv&&void 0!==t.x&&void 0!==t.y&&void 0===t.d){var i=new KJUR.crypto.ECDSA({curve:t.crv}),s=i.ecparams.keylen/4,a=("0000000000"+gn(t.x)).slice(-s),u=("0000000000"+gn(t.y)).slice(-s),h="04"+a+u;return i.setPublicKeyHex(h),i}if("EC"===t.kty&&void 0!==t.crv&&void 0!==t.x&&void 0!==t.y&&void 0!==t.d){var i=new KJUR.crypto.ECDSA({curve:t.crv}),s=i.ecparams.keylen/4,c=("0000000000"+gn(t.d)).slice(-s);return i.setPrivateKeyHex(c),i}if(-1!=t.indexOf("-END CERTIFICATE-",0)||-1!=t.indexOf("-END X509 CERTIFICATE-",0)||-1!=t.indexOf("-END TRUSTED CERTIFICATE-",0))return Xn.getPublicKeyFromCertPEM(t);if("pkcs8pub"===n)return Cr.getKeyFromPublicPKCS8Hex(t);if(-1!=t.indexOf("-END PUBLIC KEY-"))return Cr.getKeyFromPublicPKCS8PEM(t);if("pkcs5prv"===n){var r=new ve;return r.readPrivateKeyFromASN1HexString(t),r}if("pkcs5prv"===n){var r=new ve;return r.readPrivateKeyFromASN1HexString(t),r}if(-1!=t.indexOf("-END RSA PRIVATE KEY-")&&-1==t.indexOf("4,ENCRYPTED")){var f=Cr.getHexFromPEM(t,"RSA PRIVATE KEY");return Cr.getKey(f,null,"pkcs5prv")}if(-1!=t.indexOf("-END DSA PRIVATE KEY-")&&-1==t.indexOf("4,ENCRYPTED")){var l=this.getHexFromPEM(t,"DSA PRIVATE KEY"),d=_r.getVbyList(l,0,[1],"02"),p=_r.getVbyList(l,0,[2],"02"),g=_r.getVbyList(l,0,[3],"02"),y=_r.getVbyList(l,0,[4],"02"),v=_r.getVbyList(l,0,[5],"02"),r=new KJUR.crypto.DSA;return r.setPrivate(new o(d,16),new o(p,16),new o(g,16),new o(y,16),new o(v,16)),r}if(-1!=t.indexOf("-END PRIVATE KEY-"))return Cr.getKeyFromPlainPrivatePKCS8PEM(t);if(-1!=t.indexOf("-END RSA PRIVATE KEY-")&&-1!=t.indexOf("4,ENCRYPTED"))return Cr.getRSAKeyFromEncryptedPKCS5PEM(t,e);if(-1!=t.indexOf("-END EC PRIVATE KEY-")&&-1!=t.indexOf("4,ENCRYPTED")){var l=Cr.getDecryptedKeyHex(t,e),r=_r.getVbyList(l,0,[1],"04"),m=_r.getVbyList(l,0,[2,0],"06"),S=_r.getVbyList(l,0,[3,0],"03").substr(2),b="";if(void 0===KJUR.crypto.OID.oidhex2name[m])throw"undefined OID(hex) in KJUR.crypto.OID: "+m;b=KJUR.crypto.OID.oidhex2name[m];var i=new KJUR.crypto.ECDSA({name:b});return i.setPublicKeyHex(S),i.setPrivateKeyHex(r),i.isPublic=!1,i}if(-1!=t.indexOf("-END DSA PRIVATE KEY-")&&-1!=t.indexOf("4,ENCRYPTED")){var l=Cr.getDecryptedKeyHex(t,e),d=_r.getVbyList(l,0,[1],"02"),p=_r.getVbyList(l,0,[2],"02"),g=_r.getVbyList(l,0,[3],"02"),y=_r.getVbyList(l,0,[4],"02"),v=_r.getVbyList(l,0,[5],"02"),r=new KJUR.crypto.DSA;return r.setPrivate(new o(d,16),new o(p,16),new o(g,16),new o(y,16),new o(v,16)),r}if(-1!=t.indexOf("-END ENCRYPTED PRIVATE KEY-"))return Cr.getKeyFromEncryptedPKCS8PEM(t,e);throw"not supported argument"},Cr.generateKeypair=function(t,e){if("RSA"==t){var n=e,r=new ve;r.generate(n,"10001"),r.isPrivate=!0,r.isPublic=!0;var i=new ve,s=r.n.toString(16),o=r.e.toString(16);i.setPublic(s,o),i.isPrivate=!1,i.isPublic=!0;var a={};return a.prvKeyObj=r,a.pubKeyObj=i,a}if("EC"==t){var u=e,h=new KJUR.crypto.ECDSA({curve:u}),c=h.generateKeyPairHex(),r=new KJUR.crypto.ECDSA({curve:u});r.setPrivateKeyHex(c.ecprvhex),r.isPrivate=!0,r.isPublic=!1;var i=new KJUR.crypto.ECDSA({curve:u});i.setPublicKeyHex(c.ecpubhex),i.isPrivate=!1,i.isPublic=!0;var a={};return a.prvKeyObj=r,a.pubKeyObj=i,a}throw"unknown algorithm: "+t},Cr.getPEM=function(t,e,n,r,i){function s(t){var e=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{"int":{bigint:t.n}},{"int":t.e},{"int":{bigint:t.d}},{"int":{bigint:t.p}},{"int":{bigint:t.q}},{"int":{bigint:t.dmp1}},{"int":{bigint:t.dmq1}},{"int":{bigint:t.coeff}}]});return e}function o(t){var e=KJUR.asn1.ASN1Util.newObject({seq:[{"int":1},{octstr:{hex:t.prvKeyHex}},{tag:["a0",!0,{oid:{name:t.curveName}}]},{tag:["a1",!0,{bitstr:{hex:"00"+t.pubKeyHex}}]}]});return e}function a(t){var e=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{"int":{bigint:t.p}},{"int":{bigint:t.q}},{"int":{bigint:t.g}},{"int":{bigint:t.y}},{"int":{bigint:t.x}}]});return e}var u=KJUR.asn1,h=KJUR.crypto;if(("undefined"!=typeof ve&&t instanceof ve||"undefined"!=typeof h.DSA&&t instanceof h.DSA||"undefined"!=typeof h.ECDSA&&t instanceof h.ECDSA)&&1==t.isPublic&&(void 0===e||"PKCS8PUB"==e)){var c=new KJUR.asn1.x509.SubjectPublicKeyInfo(t),f=c.getEncodedHex();return u.ASN1Util.getPEMStringFromHex(f,"PUBLIC KEY")}if("PKCS1PRV"==e&&"undefined"!=typeof ve&&t instanceof ve&&(void 0===n||null==n)&&1==t.isPrivate){var c=s(t),f=c.getEncodedHex();return u.ASN1Util.getPEMStringFromHex(f,"RSA PRIVATE KEY")}if("PKCS1PRV"==e&&"undefined"!=typeof ve&&t instanceof KJUR.crypto.ECDSA&&(void 0===n||null==n)&&1==t.isPrivate){var l=new KJUR.asn1.DERObjectIdentifier({name:t.curveName}),d=l.getEncodedHex(),p=o(t),g=p.getEncodedHex(),y="";return y+=u.ASN1Util.getPEMStringFromHex(d,"EC PARAMETERS"),y+=u.ASN1Util.getPEMStringFromHex(g,"EC PRIVATE KEY")}if("PKCS1PRV"==e&&"undefined"!=typeof KJUR.crypto.DSA&&t instanceof KJUR.crypto.DSA&&(void 0===n||null==n)&&1==t.isPrivate){var c=a(t),f=c.getEncodedHex();return u.ASN1Util.getPEMStringFromHex(f,"DSA PRIVATE KEY")}if("PKCS5PRV"==e&&"undefined"!=typeof ve&&t instanceof ve&&void 0!==n&&null!=n&&1==t.isPrivate){var c=s(t),f=c.getEncodedHex();return void 0===r&&(r="DES-EDE3-CBC"),this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA",f,n,r)}if("PKCS5PRV"==e&&"undefined"!=typeof KJUR.crypto.ECDSA&&t instanceof KJUR.crypto.ECDSA&&void 0!==n&&null!=n&&1==t.isPrivate){var c=o(t),f=c.getEncodedHex();return void 0===r&&(r="DES-EDE3-CBC"),this.getEncryptedPKCS5PEMFromPrvKeyHex("EC",f,n,r)}if("PKCS5PRV"==e&&"undefined"!=typeof KJUR.crypto.DSA&&t instanceof KJUR.crypto.DSA&&void 0!==n&&null!=n&&1==t.isPrivate){var c=a(t),f=c.getEncodedHex();return void 0===r&&(r="DES-EDE3-CBC"),this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA",f,n,r)}var v=function(t,e){var n=m(t,e),r=new KJUR.asn1.ASN1Util.newObject({seq:[{seq:[{oid:{name:"pkcs5PBES2"}},{seq:[{seq:[{oid:{name:"pkcs5PBKDF2"}},{seq:[{octstr:{hex:n.pbkdf2Salt}},{"int":n.pbkdf2Iter}]}]},{seq:[{oid:{name:"des-EDE3-CBC"}},{octstr:{hex:n.encryptionSchemeIV}}]}]}]},{octstr:{hex:n.ciphertext}}]});return r.getEncodedHex()},m=function(t,e){var n=100,r=sr.lib.WordArray.random(8),i="DES-EDE3-CBC",s=sr.lib.WordArray.random(8),o=sr.PBKDF2(e,r,{keySize:6,iterations:n}),a=sr.enc.Hex.parse(t),u=sr.TripleDES.encrypt(a,o,{iv:s})+"",h={};return h.ciphertext=u,h.pbkdf2Salt=sr.enc.Hex.stringify(r),h.pbkdf2Iter=n,h.encryptionSchemeAlg=i,h.encryptionSchemeIV=sr.enc.Hex.stringify(s),h};if("PKCS8PRV"==e&&"undefined"!=typeof ve&&t instanceof ve&&1==t.isPrivate){var S=s(t),b=S.getEncodedHex(),c=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{seq:[{oid:{name:"rsaEncryption"}},{"null":!0}]},{octstr:{hex:b}}]}),f=c.getEncodedHex();if(void 0===n||null==n)return u.ASN1Util.getPEMStringFromHex(f,"PRIVATE KEY");
	var g=v(f,n);return u.ASN1Util.getPEMStringFromHex(g,"ENCRYPTED PRIVATE KEY")}if("PKCS8PRV"==e&&"undefined"!=typeof KJUR.crypto.ECDSA&&t instanceof KJUR.crypto.ECDSA&&1==t.isPrivate){var S=new KJUR.asn1.ASN1Util.newObject({seq:[{"int":1},{octstr:{hex:t.prvKeyHex}},{tag:["a1",!0,{bitstr:{hex:"00"+t.pubKeyHex}}]}]}),b=S.getEncodedHex(),c=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{seq:[{oid:{name:"ecPublicKey"}},{oid:{name:t.curveName}}]},{octstr:{hex:b}}]}),f=c.getEncodedHex();if(void 0===n||null==n)return u.ASN1Util.getPEMStringFromHex(f,"PRIVATE KEY");var g=v(f,n);return u.ASN1Util.getPEMStringFromHex(g,"ENCRYPTED PRIVATE KEY")}if("PKCS8PRV"==e&&"undefined"!=typeof KJUR.crypto.DSA&&t instanceof KJUR.crypto.DSA&&1==t.isPrivate){var S=new KJUR.asn1.DERInteger({bigint:t.x}),b=S.getEncodedHex(),c=KJUR.asn1.ASN1Util.newObject({seq:[{"int":0},{seq:[{oid:{name:"dsa"}},{seq:[{"int":{bigint:t.p}},{"int":{bigint:t.q}},{"int":{bigint:t.g}}]}]},{octstr:{hex:b}}]}),f=c.getEncodedHex();if(void 0===n||null==n)return u.ASN1Util.getPEMStringFromHex(f,"PRIVATE KEY");var g=v(f,n);return u.ASN1Util.getPEMStringFromHex(g,"ENCRYPTED PRIVATE KEY")}throw"unsupported object nor format"},Cr.getKeyFromCSRPEM=function(t){var e=Cr.getHexFromPEM(t,"CERTIFICATE REQUEST"),n=Cr.getKeyFromCSRHex(e);return n},Cr.getKeyFromCSRHex=function(t){var e=Cr.parseCSRHex(t),n=Cr.getKey(e.p8pubkeyhex,null,"pkcs8pub");return n},Cr.parseCSRHex=function(t){var e={},n=t;if("30"!=n.substr(0,2))throw"malformed CSR(code:001)";var r=_r.getPosArrayOfChildren_AtObj(n,0);if(r.length<1)throw"malformed CSR(code:002)";if("30"!=n.substr(r[0],2))throw"malformed CSR(code:003)";var i=_r.getPosArrayOfChildren_AtObj(n,r[0]);if(i.length<3)throw"malformed CSR(code:004)";return e.p8pubkeyhex=_r.getHexOfTLV_AtObj(n,i[2]),e},ve.prototype.readPrivateKeyFromPEMString=Cn,ve.prototype.readPrivateKeyFromASN1HexString=On;/*! rsasign-1.2.7.js (c) 2012 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	var Dr=new RegExp("");Dr.compile("[^0-9a-f]","gi"),ve.prototype.signWithMessageHash=Tn,ve.prototype.signString=Jn,ve.prototype.signStringWithSHA1=In,ve.prototype.signStringWithSHA256=Hn,ve.prototype.sign=Jn,ve.prototype.signWithSHA1=In,ve.prototype.signWithSHA256=Hn,ve.prototype.signWithMessageHashPSS=Nn,ve.prototype.signStringPSS=Bn,ve.prototype.signPSS=Bn,ve.SALT_LEN_HLEN=-1,ve.SALT_LEN_MAX=-2,ve.prototype.verifyWithMessageHash=zn,ve.prototype.verifyString=Wn,ve.prototype.verifyHexSignatureForMessage=qn,ve.prototype.verify=Wn,ve.prototype.verifyHexSignatureForByteArrayMessage=qn,ve.prototype.verifyWithMessageHashPSS=Gn,ve.prototype.verifyStringPSS=Yn,ve.prototype.verifyPSS=Yn,ve.SALT_LEN_RECOVER=-2,Xn.pemToBase64=function(t){var e=t;return e=e.replace("-----BEGIN CERTIFICATE-----",""),e=e.replace("-----END CERTIFICATE-----",""),e=e.replace(/[ \n]+/g,"")},Xn.pemToHex=function(t){var e=Xn.pemToBase64(t),n=i(e);return n},Xn.getSubjectPublicKeyPosFromCertHex=function(t){var e=Xn.getSubjectPublicKeyInfoPosFromCertHex(t);if(-1==e)return-1;var n=_r.getPosArrayOfChildren_AtObj(t,e);if(2!=n.length)return-1;var r=n[1];if("03"!=t.substring(r,r+2))return-1;var i=_r.getStartPosOfV_AtObj(t,r);return"00"!=t.substring(i,i+2)?-1:i+2},Xn.getSubjectPublicKeyInfoPosFromCertHex=function(t){var e=_r.getStartPosOfV_AtObj(t,0),n=_r.getPosArrayOfChildren_AtObj(t,e);return n.length<1?-1:"a003020102"==t.substring(n[0],n[0]+10)?n.length<6?-1:n[6]:n.length<5?-1:n[5]},Xn.getPublicKeyHexArrayFromCertHex=function(t){var e=Xn.getSubjectPublicKeyPosFromCertHex(t),n=_r.getPosArrayOfChildren_AtObj(t,e);if(2!=n.length)return[];var r=_r.getHexOfV_AtObj(t,n[0]),i=_r.getHexOfV_AtObj(t,n[1]);return null!=r&&null!=i?[r,i]:[]},Xn.getHexTbsCertificateFromCert=function(t){var e=_r.getStartPosOfV_AtObj(t,0);return e},Xn.getPublicKeyHexArrayFromCertPEM=function(t){var e=Xn.pemToHex(t),n=Xn.getPublicKeyHexArrayFromCertHex(e);return n},Xn.hex2dn=function(t){for(var e="",n=_r.getPosArrayOfChildren_AtObj(t,0),r=0;r<n.length;r++){var i=_r.getHexOfTLV_AtObj(t,n[r]);e=e+"/"+Xn.hex2rdn(i)}return e},Xn.hex2rdn=function(t){var e=_r.getDecendantHexTLVByNthList(t,0,[0,0]),n=_r.getDecendantHexVByNthList(t,0,[0,1]),r="";try{r=Xn.DN_ATTRHEX[e]}catch(i){r=e}n=n.replace(/(..)/g,"%$1");var s=decodeURIComponent(n);return r+"="+s},Xn.DN_ATTRHEX={"0603550406":"C","060355040a":"O","060355040b":"OU","0603550403":"CN","0603550405":"SN","0603550408":"ST","0603550407":"L","0603550409":"streetAddress","060355040f":"businessCategory","0603550411":"postalCode","060b2b0601040182373c020102":"jurisdictionOfIncorporationSP","060b2b0601040182373c020103":"jurisdictionOfIncorporationC"},Xn.getPublicKeyFromCertPEM=function(t){var e=Xn.getPublicKeyInfoPropOfCertPEM(t);if("2a864886f70d010101"==e.algoid){var n=Cr.parsePublicRawRSAKeyHex(e.keyhex),r=new ve;return r.setPublic(n.n,n.e),r}if("2a8648ce3d0201"==e.algoid){var i=KJUR.crypto.OID.oidhex2name[e.algparam],r=new KJUR.crypto.ECDSA({curve:i,info:e.keyhex});return r.setPublicKeyHex(e.keyhex),r}if("2a8648ce380401"==e.algoid){var s=_r.getVbyList(e.algparam,0,[0],"02"),a=_r.getVbyList(e.algparam,0,[1],"02"),u=_r.getVbyList(e.algparam,0,[2],"02"),h=_r.getHexOfV_AtObj(e.keyhex,0);h=h.substr(2);var r=new KJUR.crypto.DSA;return r.setPublic(new o(s,16),new o(a,16),new o(u,16),new o(h,16)),r}throw"unsupported key"},Xn.getPublicKeyInfoPropOfCertPEM=function(t){var e={};e.algparam=null;var n=Xn.pemToHex(t),r=_r.getPosArrayOfChildren_AtObj(n,0);if(3!=r.length)throw"malformed X.509 certificate PEM (code:001)";if("30"!=n.substr(r[0],2))throw"malformed X.509 certificate PEM (code:002)";var i=_r.getPosArrayOfChildren_AtObj(n,r[0]),s=6;if("a0"!==n.substr(i[0],2)&&(s=5),i.length<s+1)throw"malformed X.509 certificate PEM (code:003)";var o=_r.getPosArrayOfChildren_AtObj(n,i[s]);if(2!=o.length)throw"malformed X.509 certificate PEM (code:004)";var a=_r.getPosArrayOfChildren_AtObj(n,o[0]);if(2!=a.length)throw"malformed X.509 certificate PEM (code:005)";if(e.algoid=_r.getHexOfV_AtObj(n,a[0]),"06"==n.substr(a[1],2)?e.algparam=_r.getHexOfV_AtObj(n,a[1]):"30"==n.substr(a[1],2)&&(e.algparam=_r.getHexOfTLV_AtObj(n,a[1])),"03"!=n.substr(o[1],2))throw"malformed X.509 certificate PEM (code:006)";var u=_r.getHexOfV_AtObj(n,o[1]);return e.keyhex=u.substr(2),e},Xn.getPublicKeyInfoPosOfCertHEX=function(t){var e=_r.getPosArrayOfChildren_AtObj(t,0);if(3!=e.length)throw"malformed X.509 certificate PEM (code:001)";if("30"!=t.substr(e[0],2))throw"malformed X.509 certificate PEM (code:002)";var n=_r.getPosArrayOfChildren_AtObj(t,e[0]);if(n.length<7)throw"malformed X.509 certificate PEM (code:003)";return n[6]},Xn.getV3ExtInfoListOfCertHex=function(t){var e=_r.getPosArrayOfChildren_AtObj(t,0);if(3!=e.length)throw"malformed X.509 certificate PEM (code:001)";if("30"!=t.substr(e[0],2))throw"malformed X.509 certificate PEM (code:002)";var n=_r.getPosArrayOfChildren_AtObj(t,e[0]);if(n.length<8)throw"malformed X.509 certificate PEM (code:003)";if("a3"!=t.substr(n[7],2))throw"malformed X.509 certificate PEM (code:004)";var r=_r.getPosArrayOfChildren_AtObj(t,n[7]);if(1!=r.length)throw"malformed X.509 certificate PEM (code:005)";if("30"!=t.substr(r[0],2))throw"malformed X.509 certificate PEM (code:006)";for(var i=_r.getPosArrayOfChildren_AtObj(t,r[0]),s=i.length,o=new Array(s),a=0;s>a;a++)o[a]=Xn.getV3ExtItemInfo_AtObj(t,i[a]);return o},Xn.getV3ExtItemInfo_AtObj=function(t,e){var n={};n.posTLV=e;var r=_r.getPosArrayOfChildren_AtObj(t,e);if(2!=r.length&&3!=r.length)throw"malformed X.509v3 Ext (code:001)";if("06"!=t.substr(r[0],2))throw"malformed X.509v3 Ext (code:002)";var i=_r.getHexOfV_AtObj(t,r[0]);n.oid=_r.hextooidstr(i),n.critical=!1,3==r.length&&(n.critical=!0);var s=r[r.length-1];if("04"!=t.substr(s,2))throw"malformed X.509v3 Ext (code:003)";return n.posV=_r.getStartPosOfV_AtObj(t,s),n},Xn.getHexOfTLV_V3ExtValue=function(t,e){var n=Xn.getPosOfTLV_V3ExtValue(t,e);return-1==n?null:_r.getHexOfTLV_AtObj(t,n)},Xn.getHexOfV_V3ExtValue=function(t,e){var n=Xn.getPosOfTLV_V3ExtValue(t,e);return-1==n?null:_r.getHexOfV_AtObj(t,n)},Xn.getPosOfTLV_V3ExtValue=function(t,e){var n=e;if(e.match(/^[0-9.]+$/)||(n=KJUR.asn1.x509.OID.name2oid(e)),""==n)return-1;for(var r=Xn.getV3ExtInfoListOfCertHex(t),i=0;i<r.length;i++){var s=r[i];if(s.oid==n)return s.posV}return-1},Xn.getExtBasicConstraints=function(t){var e=Xn.getHexOfV_V3ExtValue(t,"basicConstraints");if(null===e)return null;if(""===e)return{};if("0101ff"===e)return{cA:!0};if("0101ff02"===e.substr(0,8)){var n=_r.getHexOfV_AtObj(e,6),r=parseInt(n,16);return{cA:!0,pathLen:r}}throw"unknown error"},Xn.KEYUSAGE_NAME=["digitalSignature","nonRepudiation","keyEncipherment","dataEncipherment","keyAgreement","keyCertSign","cRLSign","encipherOnly","decipherOnly"],Xn.getExtKeyUsageBin=function(t){var e=Xn.getHexOfV_V3ExtValue(t,"keyUsage");if(""==e)return"";if(e.length%2!=0||e.length<=2)throw"malformed key usage value";var n=parseInt(e.substr(0,2)),r=parseInt(e.substr(2),16).toString(2);return r.substr(0,r.length-n)},Xn.getExtKeyUsageString=function(t){for(var e=Xn.getExtKeyUsageBin(t),n=new Array,r=0;r<e.length;r++)"1"==e.substr(r,1)&&n.push(Xn.KEYUSAGE_NAME[r]);return n.join(",")},Xn.getExtSubjectKeyIdentifier=function(t){var e=Xn.getHexOfV_V3ExtValue(t,"subjectKeyIdentifier");return e},Xn.getExtAuthorityKeyIdentifier=function(t){var e={},n=Xn.getHexOfTLV_V3ExtValue(t,"authorityKeyIdentifier");if(null===n)return null;for(var r=_r.getPosArrayOfChildren_AtObj(n,0),i=0;i<r.length;i++)"80"===n.substr(r[i],2)&&(e.kid=_r.getHexOfV_AtObj(n,r[i]));return e},Xn.getExtExtKeyUsageName=function(t){var e=new Array,n=Xn.getHexOfTLV_V3ExtValue(t,"extKeyUsage");if(null===n)return null;for(var r=_r.getPosArrayOfChildren_AtObj(n,0),i=0;i<r.length;i++){var s=_r.getHexOfV_AtObj(n,r[i]),o=KJUR.asn1.ASN1Util.oidHexToInt(s),a=KJUR.asn1.x509.OID.oid2name(o);e.push(a)}return e},Xn.getExtSubjectAltName=function(t){for(var e=new Array,n=Xn.getHexOfTLV_V3ExtValue(t,"subjectAltName"),r=_r.getPosArrayOfChildren_AtObj(n,0),i=0;i<r.length;i++)if("82"===n.substr(r[i],2)){var s=Sn(_r.getHexOfV_AtObj(n,r[i]));e.push(s)}return e},Xn.getExtCRLDistributionPointsURI=function(t){for(var e=new Array,n=Xn.getHexOfTLV_V3ExtValue(t,"cRLDistributionPoints"),r=_r.getPosArrayOfChildren_AtObj(n,0),i=0;i<r.length;i++)for(var s=_r.getHexOfTLV_AtObj(n,r[i]),o=_r.getPosArrayOfChildren_AtObj(s,0),a=0;a<o.length;a++)if("a0"===s.substr(o[a],2)){var u=_r.getHexOfV_AtObj(s,o[a]);if("a0"===u.substr(0,2)){var h=_r.getHexOfV_AtObj(u,0);if("86"===h.substr(0,2)){var c=_r.getHexOfV_AtObj(h,0),f=Sn(c);e.push(f)}}}return e},Xn.getExtAIAInfo=function(t){var e={};e.ocsp=[],e.caissuer=[];var n=Xn.getPosOfTLV_V3ExtValue(t,"authorityInfoAccess");if(-1==n)return null;if("30"!=t.substr(n,2))throw"malformed AIA Extn Value";for(var r=_r.getPosArrayOfChildren_AtObj(t,n),i=0;i<r.length;i++){var s=r[i],o=_r.getPosArrayOfChildren_AtObj(t,s);if(2!=o.length)throw"malformed AccessDescription of AIA Extn";var a=o[0],u=o[1];"2b06010505073001"==_r.getHexOfV_AtObj(t,a)&&"86"==t.substr(u,2)&&e.ocsp.push(Sn(_r.getHexOfV_AtObj(t,u))),"2b06010505073002"==_r.getHexOfV_AtObj(t,a)&&"86"==t.substr(u,2)&&e.caissuer.push(Sn(_r.getHexOfV_AtObj(t,u)))}return e},Xn.getSignatureAlgorithmName=function(t){var e=_r.getDecendantHexVByNthList(t,0,[1,0]),n=KJUR.asn1.ASN1Util.oidHexToInt(e),r=KJUR.asn1.x509.OID.oid2name(n);return r},Xn.getSignatureValueHex=function(t){var e=_r.getDecendantHexVByNthList(t,0,[2]);if("00"!==e.substr(0,2))throw"can't get signature value";return e.substr(2)},Xn.getSerialNumberHex=function(t){return _r.getDecendantHexVByNthList(t,0,[0,1])},/*! jws-3.3.4 (c) 2013-2016 Kenji Urushima | kjur.github.com/jsrsasign/license
		 */
	"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.jws&&KJUR.jws||(KJUR.jws={}),KJUR.jws.JWS=function(){var t=KJUR.jws.JWS;this.parseJWS=function(e,n){if(void 0===this.parsedJWS||!n&&void 0===this.parsedJWS.sigvalH){if(null==e.match(/^([^.]+)\.([^.]+)\.([^.]+)$/))throw"JWS signature is not a form of 'Head.Payload.SigValue'.";var r=RegExp.$1,i=RegExp.$2,s=RegExp.$3,o=r+"."+i;if(this.parsedJWS={},this.parsedJWS.headB64U=r,this.parsedJWS.payloadB64U=i,this.parsedJWS.sigvalB64U=s,this.parsedJWS.si=o,!n){var a=gn(s),u=de(a,16);this.parsedJWS.sigvalH=a,this.parsedJWS.sigvalBI=u}var h=Ur(r),c=Ur(i);if(this.parsedJWS.headS=h,this.parsedJWS.payloadS=c,!t.isSafeJSONString(h,this.parsedJWS,"headP"))throw"malformed JSON string for JWS Head: "+h}}},KJUR.jws.JWS.sign=function(t,e,n,r,i){var s,o,a,u=KJUR.jws.JWS;if("string"!=typeof e&&"object"!=typeof e)throw"spHeader must be JSON string or object: "+e;if("object"==typeof e&&(o=e,s=JSON.stringify(o)),"string"==typeof e){if(s=e,!u.isSafeJSONString(s))throw"JWS Head is not safe JSON string: "+s;o=u.readSafeJSONString(s)}if(a=n,"object"==typeof n&&(a=JSON.stringify(n)),""!=t&&null!=t||void 0===o.alg||(t=o.alg),""!=t&&null!=t&&void 0===o.alg&&(o.alg=t,s=JSON.stringify(o)),t!==o.alg)throw"alg and sHeader.alg doesn't match: "+t+"!="+o.alg;var h=null;if(void 0===u.jwsalg2sigalg[t])throw"unsupported alg name: "+t;h=u.jwsalg2sigalg[t];var c=Kr(s),f=Kr(a),l=c+"."+f,d="";if("Hmac"==h.substr(0,4)){if(void 0===r)throw"mac key shall be specified for HS* alg";var p=new KJUR.crypto.Mac({alg:h,prov:"cryptojs",pass:r});p.updateString(l),d=p.doFinal()}else if(-1!=h.indexOf("withECDSA")){var g=new KJUR.crypto.Signature({alg:h});g.init(r,i),g.updateString(l),hASN1Sig=g.sign(),d=KJUR.crypto.ECDSA.asn1SigToConcatSig(hASN1Sig)}else if("none"!=h){var g=new KJUR.crypto.Signature({alg:h});g.init(r,i),g.updateString(l),d=g.sign()}var y=pn(d);return l+"."+y},KJUR.jws.JWS.verify=function(t,e,n){var r=KJUR.jws.JWS,i=t.split("."),s=i[0],o=i[1],a=s+"."+o,u=gn(i[2]),h=r.readSafeJSONString(Ur(i[0])),c=null,f=null;if(void 0===h.alg)throw"algorithm not specified in header";if(c=h.alg,f=c.substr(0,2),null!=n&&"[object Array]"===Object.prototype.toString.call(n)&&n.length>0){var l=":"+n.join(":")+":";if(-1==l.indexOf(":"+c+":"))throw"algorithm '"+c+"' not accepted in the list"}if("none"!=c&&null===e)throw"key shall be specified to verify.";if("string"==typeof e&&-1!=e.indexOf("-----BEGIN ")&&(e=Cr.getKey(e)),!("RS"!=f&&"PS"!=f||e instanceof ve))throw"key shall be a RSAKey obj for RS* and PS* algs";if("ES"==f&&!(e instanceof KJUR.crypto.ECDSA))throw"key shall be a ECDSA obj for ES* algs";var d=null;if(void 0===r.jwsalg2sigalg[h.alg])throw"unsupported alg name: "+c;if(d=r.jwsalg2sigalg[c],"none"==d)throw"not supported";if("Hmac"==d.substr(0,4)){var p=null;if(void 0===e)throw"hexadecimal key shall be specified for HMAC";var g=new KJUR.crypto.Mac({alg:d,pass:e});return g.updateString(a),p=g.doFinal(),u==p}if(-1!=d.indexOf("withECDSA")){var y=null;try{y=KJUR.crypto.ECDSA.concatSigToASN1Sig(u)}catch(v){return!1}var m=new KJUR.crypto.Signature({alg:d});return m.init(e),m.updateString(a),m.verify(y)}var m=new KJUR.crypto.Signature({alg:d});return m.init(e),m.updateString(a),m.verify(u)},KJUR.jws.JWS.parse=function(t){var e,n,r,i=t.split("."),s={};if(2!=i.length&&3!=i.length)throw"malformed sJWS: wrong number of '.' splitted elements";return e=i[0],n=i[1],3==i.length&&(r=i[2]),s.headerObj=KJUR.jws.JWS.readSafeJSONString(Ur(e)),s.payloadObj=KJUR.jws.JWS.readSafeJSONString(Ur(n)),s.headerPP=JSON.stringify(s.headerObj,null,"  "),null==s.payloadObj?s.payloadPP=Ur(n):s.payloadPP=JSON.stringify(s.payloadObj,null,"  "),void 0!==r&&(s.sigHex=gn(r)),s},KJUR.jws.JWS.verifyJWT=function(t,e,n){var r=KJUR.jws.JWS,i=t.split("."),s=i[0],o=i[1],a=(gn(i[2]),r.readSafeJSONString(Ur(s))),u=r.readSafeJSONString(Ur(o));if(void 0===a.alg)return!1;if(void 0===n.alg)throw"acceptField.alg shall be specified";if(!r.inArray(a.alg,n.alg))return!1;if(void 0!==u.iss&&"object"==typeof n.iss&&!r.inArray(u.iss,n.iss))return!1;if(void 0!==u.sub&&"object"==typeof n.sub&&!r.inArray(u.sub,n.sub))return!1;if(void 0!==u.aud&&"object"==typeof n.aud)if("string"==typeof u.aud){if(!r.inArray(u.aud,n.aud))return!1}else if("object"==typeof u.aud&&!r.includedArray(u.aud,n.aud))return!1;var h=KJUR.jws.IntDate.getNow();return void 0!==n.verifyAt&&"number"==typeof n.verifyAt&&(h=n.verifyAt),void 0!==n.gracePeriod&&"number"==typeof n.gracePeriod||(n.gracePeriod=0),void 0!==u.exp&&"number"==typeof u.exp&&u.exp+n.gracePeriod<h?!1:void 0!==u.nbf&&"number"==typeof u.nbf&&h<u.nbf-n.gracePeriod?!1:void 0!==u.iat&&"number"==typeof u.iat&&h<u.iat-n.gracePeriod?!1:void 0!==u.jti&&void 0!==n.jti&&u.jti!==n.jti?!1:!!KJUR.jws.JWS.verify(t,e,n.alg)},KJUR.jws.JWS.includedArray=function(t,e){var n=KJUR.jws.JWS.inArray;if(null===t)return!1;if("object"!=typeof t)return!1;if("number"!=typeof t.length)return!1;for(var r=0;r<t.length;r++)if(!n(t[r],e))return!1;return!0},KJUR.jws.JWS.inArray=function(t,e){if(null===e)return!1;if("object"!=typeof e)return!1;if("number"!=typeof e.length)return!1;for(var n=0;n<e.length;n++)if(e[n]==t)return!0;return!1},KJUR.jws.JWS.jwsalg2sigalg={HS256:"HmacSHA256",HS384:"HmacSHA384",HS512:"HmacSHA512",RS256:"SHA256withRSA",RS384:"SHA384withRSA",RS512:"SHA512withRSA",ES256:"SHA256withECDSA",ES384:"SHA384withECDSA",PS256:"SHA256withRSAandMGF1",PS384:"SHA384withRSAandMGF1",PS512:"SHA512withRSAandMGF1",none:"none"},KJUR.jws.JWS.isSafeJSONString=function(t,e,n){var r=null;try{return r=Fr(t),"object"!=typeof r?0:r.constructor===Array?0:(e&&(e[n]=r),1)}catch(i){return 0}},KJUR.jws.JWS.readSafeJSONString=function(t){var e=null;try{return e=Fr(t),"object"!=typeof e?null:e.constructor===Array?null:e}catch(n){return null}},KJUR.jws.JWS.getEncodedSignatureValueFromJWS=function(t){if(null==t.match(/^[^.]+\.[^.]+\.([^.]+)$/))throw"JWS signature is not a form of 'Head.Payload.SigValue'.";return RegExp.$1},KJUR.jws.JWS.getJWKthumbprint=function(t){if("RSA"!==t.kty&&"EC"!==t.kty&&"oct"!==t.kty)throw"unsupported algorithm for JWK Thumprint";var e="{";if("RSA"===t.kty){if("string"!=typeof t.n||"string"!=typeof t.e)throw"wrong n and e value for RSA key";e+='"e":"'+t.e+'",',e+='"kty":"'+t.kty+'",',e+='"n":"'+t.n+'"}'}else if("EC"===t.kty){if("string"!=typeof t.crv||"string"!=typeof t.x||"string"!=typeof t.y)throw"wrong crv, x and y value for EC key";e+='"crv":"'+t.crv+'",',e+='"kty":"'+t.kty+'",',e+='"x":"'+t.x+'",',e+='"y":"'+t.y+'"}'}else if("oct"===t.kty){if("string"!=typeof t.k)throw"wrong k value for oct(symmetric) key";e+='"kty":"'+t.kty+'",',e+='"k":"'+t.k+'"}'}var n=En(e),r=KJUR.crypto.Util.hashHex(n,"sha256"),i=pn(r);return i},KJUR.jws.IntDate={},KJUR.jws.IntDate.get=function(t){if("now"==t)return KJUR.jws.IntDate.getNow();if("now + 1hour"==t)return KJUR.jws.IntDate.getNow()+3600;if("now + 1day"==t)return KJUR.jws.IntDate.getNow()+86400;if("now + 1month"==t)return KJUR.jws.IntDate.getNow()+2592e3;if("now + 1year"==t)return KJUR.jws.IntDate.getNow()+31536e3;if(t.match(/Z$/))return KJUR.jws.IntDate.getZulu(t);if(t.match(/^[0-9]+$/))return parseInt(t);throw"unsupported format: "+t},KJUR.jws.IntDate.getZulu=function(t){var e;if(e=t.match(/(\d+)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z/)){var n=RegExp.$1,r=parseInt(n);if(4==n.length);else{if(2!=n.length)throw"malformed year string";if(r>=50&&100>r)r=1900+r;else{if(!(r>=0&&50>r))throw"malformed year string for UTCTime";r=2e3+r}}var i=parseInt(RegExp.$2)-1,s=parseInt(RegExp.$3),o=parseInt(RegExp.$4),a=parseInt(RegExp.$5),u=parseInt(RegExp.$6),h=new Date(Date.UTC(r,i,s,o,a,u));return~~(h/1e3)}throw"unsupported format: "+t},KJUR.jws.IntDate.getNow=function(){var t=~~(new Date/1e3);return t},KJUR.jws.IntDate.intDate2UTCString=function(t){var e=new Date(1e3*t);return e.toUTCString()},KJUR.jws.IntDate.intDate2Zulu=function(t){var e=new Date(1e3*t),n=("0000"+e.getUTCFullYear()).slice(-4),r=("00"+(e.getUTCMonth()+1)).slice(-2),i=("00"+e.getUTCDate()).slice(-2),s=("00"+e.getUTCHours()).slice(-2),o=("00"+e.getUTCMinutes()).slice(-2),a=("00"+e.getUTCSeconds()).slice(-2);return n+r+i+s+o+a+"Z"},/*! jwsjs-2.0.1 (c) 2010-2015 Kenji Urushima | kjur.github.com/jsjws/license
		 */
	"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.jws&&KJUR.jws||(KJUR.jws={}),KJUR.jws.JWSJS=function(){var t=KJUR.jws.JWS;this.aHeader=[],this.sPayload="",this.aSignature=[],this.init=function(){this.aHeader=[],this.sPayload="",this.aSignature=[]},this.initWithJWS=function(t){this.init();var e=new KJUR.jws.JWS;e.parseJWS(t),this.aHeader.push(e.parsedJWS.headB64U),this.sPayload=e.parsedJWS.payloadB64U,this.aSignature.push(e.parsedJWS.sigvalB64U)},this.addSignatureByHeaderKey=function(t,e){var n=Ur(this.sPayload),r=new KJUR.jws.JWS;r.generateJWSByP1PrvKey(t,n,e);this.aHeader.push(r.parsedJWS.headB64U),this.aSignature.push(r.parsedJWS.sigvalB64U)},this.addSignatureByHeaderPayloadKey=function(t,e,n){var r=new KJUR.jws.JWS;r.generateJWSByP1PrvKey(t,e,n);this.aHeader.push(r.parsedJWS.headB64U),this.sPayload=r.parsedJWS.payloadB64U,this.aSignature.push(r.parsedJWS.sigvalB64U)},this.verifyWithCerts=function(t){if(this.aHeader.length!=t.length)throw"num headers does not match with num certs";if(this.aSignature.length!=t.length)throw"num signatures does not match with num certs";for(var e=this.sPayload,n="",r=0;r<t.length;r++){var i=t[r],s=this.aHeader[r],o=this.aSignature[r],a=s+"."+e+"."+o,u=new KJUR.jws.JWS;try{var h=u.verifyJWSByPemX509Cert(a,i);1!=h&&(n+=r+1+"th signature unmatch. ")}catch(c){n+=r+1+"th signature fail("+c+"). "}}if(""==n)return 1;throw n},this.readJWSJS=function(e){var n=t.readSafeJSONString(e);if(null==n)throw"argument is not JSON string: "+e;this.aHeader=n.headers,this.sPayload=n.payload,this.aSignature=n.signatures},this.getJSON=function(){return{headers:this.aHeader,payload:this.sPayload,signatures:this.aSignature}},this.isEmpty=function(){return 0==this.aHeader.length?1:0}},e.SecureRandom=le,e.rng_seed_time=he,e.BigInteger=o,e.RSAKey=ve,e.ECDSA=KJUR.crypto.ECDSA,e.DSA=KJUR.crypto.DSA,e.Signature=KJUR.crypto.Signature,e.MessageDigest=KJUR.crypto.MessageDigest,e.Mac=KJUR.crypto.Mac,e.KEYUTIL=Cr,e.ASN1HEX=_r,e.X509=Xn,e.CryptoJS=sr,e.b64tohex=i,e.b64toBA=s,e.stoBA=sn,e.BAtos=on,e.BAtohex=an,e.stohex=un,e.stob64=hn,e.stob64u=cn,e.b64utos=fn,e.b64tob64u=ln,e.b64utob64=dn,e.hex2b64=r,e.hextob64u=pn,e.b64utohex=gn,e.b64tohex=i,e.utf8tob64u=Kr,e.b64utoutf8=Ur,e.utf8tob64=yn,e.b64toutf8=vn,e.utf8tohex=mn,e.hextoutf8=Sn,e.hextorstr=bn,e.rstrtohex=En,e.newline_toUnix=An,e.newline_toDos=Fn,e.intarystrtohex=_n,e.strdiffidx=Pr,e.crypto=KJUR.crypto,e.asn1=KJUR.asn1,e.jws=KJUR.jws,e.readFileUTF8=$n,e.readFileHexByBin=Zn,e.readFile=Qn,e.saveFile=tr,e.saveFileBinByHex=er}).call(e,n(14).Buffer)},function(t,e,n){(function(t,r){/*!
		 * The buffer module from node.js, for the browser.
		 *
		 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
		 * @license  MIT
		 */
	"use strict";function i(){function t(){}try{var e=new Uint8Array(1);return e.foo=function(){return 42},e.constructor=t,42===e.foo()&&e.constructor===t&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(n){return!1}}function s(){return t.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function t(e){return this instanceof t?(t.TYPED_ARRAY_SUPPORT||(this.length=0,this.parent=void 0),"number"==typeof e?o(this,e):"string"==typeof e?a(this,e,arguments.length>1?arguments[1]:"utf8"):u(this,e)):arguments.length>1?new t(e,arguments[1]):new t(e)}function o(e,n){if(e=g(e,0>n?0:0|y(n)),!t.TYPED_ARRAY_SUPPORT)for(var r=0;n>r;r++)e[r]=0;return e}function a(t,e,n){"string"==typeof n&&""!==n||(n="utf8");var r=0|m(e,n);return t=g(t,r),t.write(e,n),t}function u(e,n){if(t.isBuffer(n))return h(e,n);if(X(n))return c(e,n);if(null==n)throw new TypeError("must start with number, buffer, array or string");if("undefined"!=typeof ArrayBuffer){if(n.buffer instanceof ArrayBuffer)return f(e,n);if(n instanceof ArrayBuffer)return l(e,n)}return n.length?d(e,n):p(e,n)}function h(t,e){var n=0|y(e.length);return t=g(t,n),e.copy(t,0,0,n),t}function c(t,e){var n=0|y(e.length);t=g(t,n);for(var r=0;n>r;r+=1)t[r]=255&e[r];return t}function f(t,e){var n=0|y(e.length);t=g(t,n);for(var r=0;n>r;r+=1)t[r]=255&e[r];return t}function l(e,n){return t.TYPED_ARRAY_SUPPORT?(n.byteLength,e=t._augment(new Uint8Array(n))):e=f(e,new Uint8Array(n)),e}function d(t,e){var n=0|y(e.length);t=g(t,n);for(var r=0;n>r;r+=1)t[r]=255&e[r];return t}function p(t,e){var n,r=0;"Buffer"===e.type&&X(e.data)&&(n=e.data,r=0|y(n.length)),t=g(t,r);for(var i=0;r>i;i+=1)t[i]=255&n[i];return t}function g(e,n){t.TYPED_ARRAY_SUPPORT?(e=t._augment(new Uint8Array(n)),e.__proto__=t.prototype):(e.length=n,e._isBuffer=!0);var r=0!==n&&n<=t.poolSize>>>1;return r&&(e.parent=$),e}function y(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function v(e,n){if(!(this instanceof v))return new v(e,n);var r=new t(e,n);return delete r.parent,r}function m(t,e){"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"binary":case"raw":case"raws":return n;case"utf8":case"utf-8":return M(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return W(t).length;default:if(r)return M(t).length;e=(""+e).toLowerCase(),r=!0}}function S(t,e,n){var r=!1;if(e=0|e,n=void 0===n||n===1/0?this.length:0|n,t||(t="utf8"),0>e&&(e=0),n>this.length&&(n=this.length),e>=n)return"";for(;;)switch(t){case"hex":return O(this,e,n);case"utf8":case"utf-8":return _(this,e,n);case"ascii":return U(this,e,n);case"binary":return P(this,e,n);case"base64":return F(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function b(t,e,n,r){n=Number(n)||0;var i=t.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var s=e.length;if(s%2!==0)throw new Error("Invalid hex string");r>s/2&&(r=s/2);for(var o=0;r>o;o++){var a=parseInt(e.substr(2*o,2),16);if(isNaN(a))throw new Error("Invalid hex string");t[n+o]=a}return o}function E(t,e,n,r){return z(M(e,t.length-n),t,n,r)}function w(t,e,n,r){return z(L(e),t,n,r)}function R(t,e,n,r){return w(t,e,n,r)}function x(t,e,n,r){return z(W(e),t,n,r)}function A(t,e,n,r){return z(q(e,t.length-n),t,n,r)}function F(t,e,n){return 0===e&&n===t.length?Y.fromByteArray(t):Y.fromByteArray(t.slice(e,n))}function _(t,e,n){n=Math.min(t.length,n);for(var r=[],i=e;n>i;){var s=t[i],o=null,a=s>239?4:s>223?3:s>191?2:1;if(n>=i+a){var u,h,c,f;switch(a){case 1:128>s&&(o=s);break;case 2:u=t[i+1],128===(192&u)&&(f=(31&s)<<6|63&u,f>127&&(o=f));break;case 3:u=t[i+1],h=t[i+2],128===(192&u)&&128===(192&h)&&(f=(15&s)<<12|(63&u)<<6|63&h,f>2047&&(55296>f||f>57343)&&(o=f));break;case 4:u=t[i+1],h=t[i+2],c=t[i+3],128===(192&u)&&128===(192&h)&&128===(192&c)&&(f=(15&s)<<18|(63&u)<<12|(63&h)<<6|63&c,f>65535&&1114112>f&&(o=f))}}null===o?(o=65533,a=1):o>65535&&(o-=65536,r.push(o>>>10&1023|55296),o=56320|1023&o),r.push(o),i+=a}return K(r)}function K(t){var e=t.length;if(Z>=e)return String.fromCharCode.apply(String,t);for(var n="",r=0;e>r;)n+=String.fromCharCode.apply(String,t.slice(r,r+=Z));return n}function U(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;n>i;i++)r+=String.fromCharCode(127&t[i]);return r}function P(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;n>i;i++)r+=String.fromCharCode(t[i]);return r}function O(t,e,n){var r=t.length;(!e||0>e)&&(e=0),(!n||0>n||n>r)&&(n=r);for(var i="",s=e;n>s;s++)i+=V(t[s]);return i}function C(t,e,n){for(var r=t.slice(e,n),i="",s=0;s<r.length;s+=2)i+=String.fromCharCode(r[s]+256*r[s+1]);return i}function D(t,e,n){if(t%1!==0||0>t)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function J(e,n,r,i,s,o){if(!t.isBuffer(e))throw new TypeError("buffer must be a Buffer instance");if(n>s||o>n)throw new RangeError("value is out of bounds");if(r+i>e.length)throw new RangeError("index out of range")}function T(t,e,n,r){0>e&&(e=65535+e+1);for(var i=0,s=Math.min(t.length-n,2);s>i;i++)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function I(t,e,n,r){0>e&&(e=4294967295+e+1);for(var i=0,s=Math.min(t.length-n,4);s>i;i++)t[n+i]=e>>>8*(r?i:3-i)&255}function H(t,e,n,r,i,s){if(e>i||s>e)throw new RangeError("value is out of bounds");if(n+r>t.length)throw new RangeError("index out of range");if(0>n)throw new RangeError("index out of range")}function j(t,e,n,r,i){return i||H(t,e,n,4,3.4028234663852886e38,-3.4028234663852886e38),G.write(t,e,n,r,23,4),n+4}function B(t,e,n,r,i){return i||H(t,e,n,8,1.7976931348623157e308,-1.7976931348623157e308),G.write(t,e,n,r,52,8),n+8}function N(t){if(t=k(t).replace(tt,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function k(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function V(t){return 16>t?"0"+t.toString(16):t.toString(16)}function M(t,e){e=e||1/0;for(var n,r=t.length,i=null,s=[],o=0;r>o;o++){if(n=t.charCodeAt(o),n>55295&&57344>n){if(!i){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(e-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(56320>n){(e-=3)>-1&&s.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,128>n){if((e-=1)<0)break;s.push(n)}else if(2048>n){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(65536>n){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(1114112>n))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function L(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e}function q(t,e){for(var n,r,i,s=[],o=0;o<t.length&&!((e-=2)<0);o++)n=t.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}function W(t){return Y.toByteArray(N(t))}function z(t,e,n,r){for(var i=0;r>i&&!(i+n>=e.length||i>=t.length);i++)e[i+n]=t[i];return i}var Y=n(15),G=n(16),X=n(17);e.Buffer=t,e.SlowBuffer=v,e.INSPECT_MAX_BYTES=50,t.poolSize=8192;var $={};t.TYPED_ARRAY_SUPPORT=void 0!==r.TYPED_ARRAY_SUPPORT?r.TYPED_ARRAY_SUPPORT:i(),t.TYPED_ARRAY_SUPPORT?(t.prototype.__proto__=Uint8Array.prototype,t.__proto__=Uint8Array):(t.prototype.length=void 0,t.prototype.parent=void 0),t.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.compare=function(e,n){if(!t.isBuffer(e)||!t.isBuffer(n))throw new TypeError("Arguments must be Buffers");if(e===n)return 0;for(var r=e.length,i=n.length,s=0,o=Math.min(r,i);o>s&&e[s]===n[s];)++s;return s!==o&&(r=e[s],i=n[s]),i>r?-1:r>i?1:0},t.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(e,n){if(!X(e))throw new TypeError("list argument must be an Array of Buffers.");if(0===e.length)return new t(0);var r;if(void 0===n)for(n=0,r=0;r<e.length;r++)n+=e[r].length;var i=new t(n),s=0;for(r=0;r<e.length;r++){var o=e[r];o.copy(i,s),s+=o.length}return i},t.byteLength=m,t.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?_(this,0,t):S.apply(this,arguments)},t.prototype.equals=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:0===t.compare(this,e)},t.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},t.prototype.compare=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?0:t.compare(this,e)},t.prototype.indexOf=function(e,n){function r(t,e,n){for(var r=-1,i=0;n+i<t.length;i++)if(t[n+i]===e[-1===r?0:i-r]){if(-1===r&&(r=i),i-r+1===e.length)return n+r}else r=-1;return-1}if(n>2147483647?n=2147483647:-2147483648>n&&(n=-2147483648),n>>=0,0===this.length)return-1;if(n>=this.length)return-1;if(0>n&&(n=Math.max(this.length+n,0)),"string"==typeof e)return 0===e.length?-1:String.prototype.indexOf.call(this,e,n);if(t.isBuffer(e))return r(this,e,n);if("number"==typeof e)return t.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,e,n):r(this,[e],n);throw new TypeError("val must be string, number or Buffer")},t.prototype.get=function(t){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(t)},t.prototype.set=function(t,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(t,e)},t.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else if(isFinite(e))e=0|e,isFinite(n)?(n=0|n,void 0===r&&(r="utf8")):(r=n,n=void 0);else{var i=r;r=e,e=0|n,n=i}var s=this.length-e;if((void 0===n||n>s)&&(n=s),t.length>0&&(0>n||0>e)||e>this.length)throw new RangeError("attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return b(this,t,e,n);case"utf8":case"utf-8":return E(this,t,e,n);case"ascii":return w(this,t,e,n);case"binary":return R(this,t,e,n);case"base64":return x(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Z=4096;t.prototype.slice=function(e,n){var r=this.length;e=~~e,n=void 0===n?r:~~n,0>e?(e+=r,0>e&&(e=0)):e>r&&(e=r),0>n?(n+=r,0>n&&(n=0)):n>r&&(n=r),e>n&&(n=e);var i;if(t.TYPED_ARRAY_SUPPORT)i=t._augment(this.subarray(e,n));else{var s=n-e;i=new t(s,void 0);for(var o=0;s>o;o++)i[o]=this[o+e]}return i.length&&(i.parent=this.parent||this),i},t.prototype.readUIntLE=function(t,e,n){t=0|t,e=0|e,n||D(t,e,this.length);for(var r=this[t],i=1,s=0;++s<e&&(i*=256);)r+=this[t+s]*i;return r},t.prototype.readUIntBE=function(t,e,n){t=0|t,e=0|e,n||D(t,e,this.length);for(var r=this[t+--e],i=1;e>0&&(i*=256);)r+=this[t+--e]*i;return r},t.prototype.readUInt8=function(t,e){return e||D(t,1,this.length),this[t]},t.prototype.readUInt16LE=function(t,e){return e||D(t,2,this.length),this[t]|this[t+1]<<8},t.prototype.readUInt16BE=function(t,e){return e||D(t,2,this.length),this[t]<<8|this[t+1]},t.prototype.readUInt32LE=function(t,e){return e||D(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},t.prototype.readUInt32BE=function(t,e){return e||D(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},t.prototype.readIntLE=function(t,e,n){t=0|t,e=0|e,n||D(t,e,this.length);for(var r=this[t],i=1,s=0;++s<e&&(i*=256);)r+=this[t+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},t.prototype.readIntBE=function(t,e,n){t=0|t,e=0|e,n||D(t,e,this.length);for(var r=e,i=1,s=this[t+--r];r>0&&(i*=256);)s+=this[t+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*e)),s},t.prototype.readInt8=function(t,e){return e||D(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},t.prototype.readInt16LE=function(t,e){e||D(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},t.prototype.readInt16BE=function(t,e){e||D(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},t.prototype.readInt32LE=function(t,e){return e||D(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},t.prototype.readInt32BE=function(t,e){return e||D(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},t.prototype.readFloatLE=function(t,e){return e||D(t,4,this.length),G.read(this,t,!0,23,4)},t.prototype.readFloatBE=function(t,e){return e||D(t,4,this.length),G.read(this,t,!1,23,4)},t.prototype.readDoubleLE=function(t,e){return e||D(t,8,this.length),G.read(this,t,!0,52,8)},t.prototype.readDoubleBE=function(t,e){return e||D(t,8,this.length),G.read(this,t,!1,52,8)},t.prototype.writeUIntLE=function(t,e,n,r){t=+t,e=0|e,n=0|n,r||J(this,t,e,n,Math.pow(2,8*n),0);var i=1,s=0;for(this[e]=255&t;++s<n&&(i*=256);)this[e+s]=t/i&255;return e+n},t.prototype.writeUIntBE=function(t,e,n,r){t=+t,e=0|e,n=0|n,r||J(this,t,e,n,Math.pow(2,8*n),0);var i=n-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+n},t.prototype.writeUInt8=function(e,n,r){return e=+e,n=0|n,r||J(this,e,n,1,255,0),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[n]=255&e,n+1},t.prototype.writeUInt16LE=function(e,n,r){return e=+e,n=0|n,r||J(this,e,n,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[n]=255&e,this[n+1]=e>>>8):T(this,e,n,!0),n+2},t.prototype.writeUInt16BE=function(e,n,r){return e=+e,n=0|n,r||J(this,e,n,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[n]=e>>>8,this[n+1]=255&e):T(this,e,n,!1),n+2},t.prototype.writeUInt32LE=function(e,n,r){return e=+e,n=0|n,r||J(this,e,n,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=255&e):I(this,e,n,!0),n+4},t.prototype.writeUInt32BE=function(e,n,r){return e=+e,n=0|n,r||J(this,e,n,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=255&e):I(this,e,n,!1),n+4},t.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e=0|e,!r){var i=Math.pow(2,8*n-1);J(this,t,e,n,i-1,-i)}var s=0,o=1,a=0>t?1:0;for(this[e]=255&t;++s<n&&(o*=256);)this[e+s]=(t/o>>0)-a&255;return e+n},t.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e=0|e,!r){var i=Math.pow(2,8*n-1);J(this,t,e,n,i-1,-i)}var s=n-1,o=1,a=0>t?1:0;for(this[e+s]=255&t;--s>=0&&(o*=256);)this[e+s]=(t/o>>0)-a&255;return e+n},t.prototype.writeInt8=function(e,n,r){return e=+e,n=0|n,r||J(this,e,n,1,127,-128),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),0>e&&(e=255+e+1),this[n]=255&e,n+1},t.prototype.writeInt16LE=function(e,n,r){return e=+e,n=0|n,r||J(this,e,n,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[n]=255&e,this[n+1]=e>>>8):T(this,e,n,!0),n+2},t.prototype.writeInt16BE=function(e,n,r){return e=+e,n=0|n,r||J(this,e,n,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[n]=e>>>8,this[n+1]=255&e):T(this,e,n,!1),n+2},t.prototype.writeInt32LE=function(e,n,r){return e=+e,n=0|n,r||J(this,e,n,4,2147483647,-2147483648),t.TYPED_ARRAY_SUPPORT?(this[n]=255&e,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24):I(this,e,n,!0),n+4},t.prototype.writeInt32BE=function(e,n,r){return e=+e,n=0|n,r||J(this,e,n,4,2147483647,-2147483648),0>e&&(e=4294967295+e+1),t.TYPED_ARRAY_SUPPORT?(this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=255&e):I(this,e,n,!1),n+4},t.prototype.writeFloatLE=function(t,e,n){return j(this,t,e,!0,n)},t.prototype.writeFloatBE=function(t,e,n){return j(this,t,e,!1,n)},t.prototype.writeDoubleLE=function(t,e,n){return B(this,t,e,!0,n)},t.prototype.writeDoubleBE=function(t,e,n){return B(this,t,e,!1,n)},t.prototype.copy=function(e,n,r,i){if(r||(r=0),i||0===i||(i=this.length),n>=e.length&&(n=e.length),n||(n=0),i>0&&r>i&&(i=r),i===r)return 0;if(0===e.length||0===this.length)return 0;if(0>n)throw new RangeError("targetStart out of bounds");if(0>r||r>=this.length)throw new RangeError("sourceStart out of bounds");if(0>i)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-n<i-r&&(i=e.length-n+r);var s,o=i-r;if(this===e&&n>r&&i>n)for(s=o-1;s>=0;s--)e[s+n]=this[s+r];else if(1e3>o||!t.TYPED_ARRAY_SUPPORT)for(s=0;o>s;s++)e[s+n]=this[s+r];else e._set(this.subarray(r,r+o),n);return o},t.prototype.fill=function(t,e,n){if(t||(t=0),e||(e=0),n||(n=this.length),e>n)throw new RangeError("end < start");if(n!==e&&0!==this.length){if(0>e||e>=this.length)throw new RangeError("start out of bounds");if(0>n||n>this.length)throw new RangeError("end out of bounds");var r;if("number"==typeof t)for(r=e;n>r;r++)this[r]=t;else{var i=M(t.toString()),s=i.length;for(r=e;n>r;r++)this[r]=i[r%s]}return this}},t.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(t.TYPED_ARRAY_SUPPORT)return new t(this).buffer;for(var e=new Uint8Array(this.length),n=0,r=e.length;r>n;n+=1)e[n]=this[n];return e.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")};var Q=t.prototype;t._augment=function(e){return e.constructor=t,e._isBuffer=!0,e._set=e.set,e.get=Q.get,e.set=Q.set,e.write=Q.write,e.toString=Q.toString,e.toLocaleString=Q.toString,e.toJSON=Q.toJSON,e.equals=Q.equals,e.compare=Q.compare,e.indexOf=Q.indexOf,e.copy=Q.copy,e.slice=Q.slice,e.readUIntLE=Q.readUIntLE,e.readUIntBE=Q.readUIntBE,e.readUInt8=Q.readUInt8,e.readUInt16LE=Q.readUInt16LE,e.readUInt16BE=Q.readUInt16BE,e.readUInt32LE=Q.readUInt32LE,e.readUInt32BE=Q.readUInt32BE,e.readIntLE=Q.readIntLE,e.readIntBE=Q.readIntBE,e.readInt8=Q.readInt8,e.readInt16LE=Q.readInt16LE,e.readInt16BE=Q.readInt16BE,e.readInt32LE=Q.readInt32LE,e.readInt32BE=Q.readInt32BE,e.readFloatLE=Q.readFloatLE,e.readFloatBE=Q.readFloatBE,e.readDoubleLE=Q.readDoubleLE,e.readDoubleBE=Q.readDoubleBE,e.writeUInt8=Q.writeUInt8,e.writeUIntLE=Q.writeUIntLE,e.writeUIntBE=Q.writeUIntBE,e.writeUInt16LE=Q.writeUInt16LE,e.writeUInt16BE=Q.writeUInt16BE,e.writeUInt32LE=Q.writeUInt32LE,e.writeUInt32BE=Q.writeUInt32BE,e.writeIntLE=Q.writeIntLE,e.writeIntBE=Q.writeIntBE,e.writeInt8=Q.writeInt8,e.writeInt16LE=Q.writeInt16LE,e.writeInt16BE=Q.writeInt16BE,e.writeInt32LE=Q.writeInt32LE,e.writeInt32BE=Q.writeInt32BE,e.writeFloatLE=Q.writeFloatLE,e.writeFloatBE=Q.writeFloatBE,e.writeDoubleLE=Q.writeDoubleLE,e.writeDoubleBE=Q.writeDoubleBE,e.fill=Q.fill,e.inspect=Q.inspect,e.toArrayBuffer=Q.toArrayBuffer,e};var tt=/[^+\/0-9A-Za-z-_]/g}).call(e,n(14).Buffer,function(){return this}())},function(t,e,n){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(t){"use strict";function e(t){var e=t.charCodeAt(0);return e===o||e===f?62:e===a||e===l?63:u>e?-1:u+10>e?e-u+26+26:c+26>e?e-c:h+26>e?e-h+26:void 0}function n(t){function n(t){h[f++]=t}var r,i,o,a,u,h;if(t.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=t.length;u="="===t.charAt(c-2)?2:"="===t.charAt(c-1)?1:0,h=new s(3*t.length/4-u),o=u>0?t.length-4:t.length;var f=0;for(r=0,i=0;o>r;r+=4,i+=3)a=e(t.charAt(r))<<18|e(t.charAt(r+1))<<12|e(t.charAt(r+2))<<6|e(t.charAt(r+3)),n((16711680&a)>>16),n((65280&a)>>8),n(255&a);return 2===u?(a=e(t.charAt(r))<<2|e(t.charAt(r+1))>>4,n(255&a)):1===u&&(a=e(t.charAt(r))<<10|e(t.charAt(r+1))<<4|e(t.charAt(r+2))>>2,n(a>>8&255),n(255&a)),h}function i(t){function e(t){return r.charAt(t)}function n(t){return e(t>>18&63)+e(t>>12&63)+e(t>>6&63)+e(63&t)}var i,s,o,a=t.length%3,u="";for(i=0,o=t.length-a;o>i;i+=3)s=(t[i]<<16)+(t[i+1]<<8)+t[i+2],u+=n(s);switch(a){case 1:s=t[t.length-1],u+=e(s>>2),u+=e(s<<4&63),u+="==";break;case 2:s=(t[t.length-2]<<8)+t[t.length-1],u+=e(s>>10),u+=e(s>>4&63),u+=e(s<<2&63),u+="="}return u}var s="undefined"!=typeof Uint8Array?Uint8Array:Array,o="+".charCodeAt(0),a="/".charCodeAt(0),u="0".charCodeAt(0),h="a".charCodeAt(0),c="A".charCodeAt(0),f="-".charCodeAt(0),l="_".charCodeAt(0);t.toByteArray=n,t.fromByteArray=i}(e)},function(t,e){e.read=function(t,e,n,r,i){var s,o,a=8*i-r-1,u=(1<<a)-1,h=u>>1,c=-7,f=n?i-1:0,l=n?-1:1,d=t[e+f];for(f+=l,s=d&(1<<-c)-1,d>>=-c,c+=a;c>0;s=256*s+t[e+f],f+=l,c-=8);for(o=s&(1<<-c)-1,s>>=-c,c+=r;c>0;o=256*o+t[e+f],f+=l,c-=8);if(0===s)s=1-h;else{if(s===u)return o?NaN:(d?-1:1)*(1/0);o+=Math.pow(2,r),s-=h}return(d?-1:1)*o*Math.pow(2,s-r)},e.write=function(t,e,n,r,i,s){var o,a,u,h=8*s-i-1,c=(1<<h)-1,f=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:s-1,p=r?1:-1,g=0>e||0===e&&0>1/e?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=c):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),e+=o+f>=1?l/u:l*Math.pow(2,1-f),e*u>=2&&(o++,u/=2),o+f>=c?(a=0,o=c):o+f>=1?(a=(e*u-1)*Math.pow(2,i),o+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,i),o=0));i>=8;t[n+d]=255&a,d+=p,a/=256,i-=8);for(o=o<<i|a,h+=i;h>0;t[n+d]=255&o,d+=p,o/=256,h-=8);t[n+d-p]|=128*g}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e){},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=r(s),a=n(20),u=r(a),h=n(21),c=r(h),f=function(){function t(e){var n=e.url,r=e.client_id,s=e.redirect_uri,a=e.response_type,h=e.scope,f=e.authority,l=e.data,d=e.prompt,p=e.display,g=e.max_age,y=e.ui_locales,v=e.id_token_hint,m=e.login_hint,S=e.acr_values;if(i(this,t),!n)throw o.default.error("No url passed to SigninRequest"),new Error("url");if(!r)throw o.default.error("No client_id passed to SigninRequest"),new Error("client_id");if(!s)throw o.default.error("No redirect_uri passed to SigninRequest"),new Error("redirect_uri");if(!a)throw o.default.error("No response_type passed to SigninRequest"),new Error("response_type");if(!h)throw o.default.error("No scope passed to SigninRequest"),new Error("scope");if(!f)throw o.default.error("No authority passed to SigninRequest"),new Error("authority");var b=t.isOidc(a);this.state=new c.default({nonce:b,data:l,client_id:r,authority:f}),n=u.default.addQueryParam(n,"client_id",r),n=u.default.addQueryParam(n,"redirect_uri",s),n=u.default.addQueryParam(n,"response_type",a),n=u.default.addQueryParam(n,"scope",h),n=u.default.addQueryParam(n,"state",this.state.id),b&&(n=u.default.addQueryParam(n,"nonce",this.state.nonce));var E={prompt:d,display:p,max_age:g,ui_locales:y,id_token_hint:v,login_hint:m,acr_values:S};for(var w in E)E[w]&&(n=u.default.addQueryParam(n,w,E[w]));this.url=n}return t.isOidc=function(t){var e=t.split(/\s+/g).filter(function(t){return"id_token"===t});return!!e[0]},t.isOAuth=function(t){var e=t.split(/\s+/g).filter(function(t){return"token"===t});return!!e[0]},t}();e.default=f,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=r(s),a=n(6),u=r(a),h=function(){function t(){i(this,t)}return t.addQueryParam=function(t,e,n){return t.indexOf("?")<0&&(t+="?"),"?"!==t[t.length-1]&&(t+="&"),t+=encodeURIComponent(e),t+="=",t+=encodeURIComponent(n)},t.parseUrlFragment=function(t){var e=arguments.length<=1||void 0===arguments[1]?"#":arguments[1],n=arguments.length<=2||void 0===arguments[2]?u.default:arguments[2];o.default.info("UrlUtility.parseUrlFragment"),"string"!=typeof t&&(t=n.location.href);var r=t.lastIndexOf(e);r>=0&&(t=t.substr(r+1));for(var i,s={},a=/([^&=]+)=([^&]*)/g,h=0;i=a.exec(t);)if(s[decodeURIComponent(i[1])]=decodeURIComponent(i[2]),h++>50)return o.default.error("response exceeded expected number of parameters",t),{error:"Response exceeded expected number of parameters"};for(var c in s)return s;return{}},t}();e.default=h,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(2),h=r(u),c=n(22),f=r(c),l=n(23),d=r(l),p=function(t){function e(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=n.nonce,o=n.authority,a=n.client_id;i(this,e);var u=s(this,t.call(this,arguments[0]));return r===!0?u._nonce=(0,d.default)():r&&(u._nonce=r),u._authority=o,u._client_id=a,u}return o(e,t),e.prototype.toStorageString=function(){return h.default.info("SigninState.toStorageString"),JSON.stringify({id:this.id,data:this.data,created:this.created,nonce:this.nonce,authority:this.authority,client_id:this.client_id})},e.fromStorageString=function(t){h.default.info("SigninState.fromStorageString");var n=JSON.parse(t);return new e(n)},a(e,[{key:"nonce",get:function(){return this._nonce}},{key:"authority",get:function(){return this._authority}},{key:"client_id",get:function(){return this._client_id}}]),e}(f.default);e.default=p,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),a=r(o),u=n(23),h=r(u),c=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.id,r=e.data,s=e.created;i(this,t),this._id=n||(0,h.default)(),this._data=r,"number"==typeof s&&s>0?this._created=s:this._created=parseInt(Date.now()/1e3)}return t.prototype.toStorageString=function(){return a.default.info("State.toStorageString"),JSON.stringify({id:this.id,data:this.data,created:this.created})},t.fromStorageString=function(e){return a.default.info("State.fromStorageString"),new t(JSON.parse(e))},t.clearStaleState=function(e,n){a.default.info("State.clearStaleState");var r=Date.now()/1e3-n;return e.getAllKeys().then(function(n){a.default.info("got keys",n);var i=[],s=!0,o=!1,u=void 0;try{for(var h,c=function(){var n=h.value;l=e.get(n).then(function(i){var s=!1;if(i)try{var o=t.fromStorageString(i);a.default.info("got item from key: ",n,o.created),o.created<=r&&(s=!0)}catch(u){a.default.error("Error parsing state for key",n,u.message),s=!0}else a.default.info("no item in storage for key: ",n),s=!0;return s?(a.default.info("removed item for key: ",n),e.remove(n)):void 0}),i.push(l)},f=n[Symbol.iterator]();!(s=(h=f.next()).done);s=!0){var l;c()}}catch(d){o=!0,u=d}finally{try{!s&&f.return&&f.return()}finally{if(o)throw u}}return a.default.info("waiting on promise count:",i.length),Promise.all(i)})},s(t,[{key:"id",get:function(){return this._id}},{key:"data",get:function(){return this._data}},{key:"created",get:function(){return this._created}}]),t}();e.default=c,t.exports=e.default},function(t,e){"use strict";
	// @preserve Copyright (c) Microsoft Open Technologies, Inc.
	function n(){for(var t="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx",e="0123456789abcdef",n=0,r="",i=0;i<t.length;i++)"-"!==t[i]&&"4"!==t[i]&&(n=16*Math.random()|0),"x"===t[i]?r+=e[n]:"y"===t[i]?(n&=3,n|=8,r+=e[n]):r+=t[i];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(20),a=r(o),u="openid",h=function(){function t(e){i(this,t);var n=a.default.parseUrlFragment(e,"#");this.error=n.error,this.error_description=n.error_description,this.error_uri=n.error_uri,this.state=n.state,this.id_token=n.id_token,this.session_state=n.session_state,this.access_token=n.access_token,this.token_type=n.token_type,this.scope=n.scope,this.profile=void 0;var r=parseInt(n.expires_in);if("number"==typeof r&&r>0){var s=parseInt(Date.now()/1e3);this.expires_at=s+r}}return s(t,[{key:"expires_in",get:function(){if(this.expires_at){var t=parseInt(Date.now()/1e3);return this.expires_at-t}}},{key:"expired",get:function(){var t=this.expires_in;return void 0!==t?0>=t:void 0}},{key:"scopes",get:function(){return(this.scope||"").split(" ")}},{key:"isOpenIdConnect",get:function(){return this.scopes.indexOf(u)>=0}}]),t}();e.default=h,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=r(s),a=n(20),u=r(a),h=n(22),c=r(h),f=function l(t){var e=t.url,n=t.id_token_hint,r=t.post_logout_redirect_uri,s=t.data;if(i(this,l),!e)throw o.default.error("No url passed to SignoutRequest"),new Error("url");s&&(this.state=new c.default({data:s}),e=u.default.addQueryParam(e,"state",this.state.id)),n&&(e=u.default.addQueryParam(e,"id_token_hint",n)),r&&(e=u.default.addQueryParam(e,"post_logout_redirect_uri",r)),this.url=e};e.default=f,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(20),o=r(s),a=function u(t){i(this,u);var e=o.default.parseUrlFragment(t,"?");this.error=e.error,this.error_description=e.error_description,this.error_uri=e.error_uri,this.state=e.state};e.default=a,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),a=r(o),u=function(){function t(){i(this,t),this._data={}}return t.prototype.getItem=function(t){return a.default.info("InMemoryWebStorage.getItem",t),this._data[t]},t.prototype.setItem=function(t,e){a.default.info("InMemoryWebStorage.setItem",t),this._data[t]=e},t.prototype.removeItem=function(t){a.default.info("InMemoryWebStorage.removeItem",t),delete this._data[t]},t.prototype.key=function(t){return Object.getOwnPropertyNames(this._data)[t]},s(t,[{key:"length",get:function(){return Object.getOwnPropertyNames(this._data).length}}]),t}();e.default=u,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(2),h=r(u),c=n(3),f=r(c),l=n(29),d=r(l),p=n(35),g=r(p),y=n(36),v=r(y),m=n(40),S=r(m),b=function(t){function e(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,e),n instanceof d.default||(n=new d.default(n));var r=s(this,t.call(this,n));return r._events=new v.default(n),r.settings.automaticSilentRenew&&(h.default.info("automaticSilentRenew is configured, setting up silent renew"),r._silentRenewService=new S.default(r)),r}return o(e,t),e.prototype.getUser=function(){var t=this;return h.default.info("UserManager.getUser"),this._loadUser().then(function(e){return e?(h.default.info("user loaded"),t._events.load(e),e):(h.default.info("user not found in storage"),null)})},e.prototype.removeUser=function(){var t=this;return h.default.info("UserManager.removeUser"),this._storeUser(null).then(function(){h.default.info("user removed from storage"),t._events.unload()})},e.prototype.signinPopup=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];h.default.info("UserManager.signinPopup");var e=t.redirect_uri||this.settings.popup_redirect_uri||this.settings.redirect_uri;return e?(t.redirect_uri=e,t.display="popup",this._signin(t,this._popupNavigator,{startUrl:e,popupWindowFeatures:t.popupWindowFeatures||this.settings.popupWindowFeatures,popupWindowTarget:t.popupWindowTarget||this.settings.popupWindowTarget})):(h.default.error("No popup_redirect_uri or redirect_uri configured"),Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured")))},e.prototype.signinPopupCallback=function(t){return h.default.info("UserManager.signinPopupCallback"),this._signinCallback(t,this._popupNavigator)},e.prototype.signinSilent=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];h.default.info("UserManager.signinSilent");var e=t.redirect_uri||this.settings.silent_redirect_uri;return e?(t.redirect_uri=e,t.prompt="none",this._signin(t,this._iframeNavigator)):(h.default.error("No silent_redirect_uri configured"),Promise.reject(new Error("No silent_redirect_uri configured")))},e.prototype.signinSilentCallback=function(t){return h.default.info("UserManager.signinSilentCallback"),this._signinCallback(t,this._iframeNavigator)},e.prototype._signin=function(t,e){var n=this,r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];return h.default.info("_signin"),this._signinStart(t,e,r).then(function(t){return n._signinEnd(t.url)})},e.prototype._signinCallback=function(t,e){return h.default.info("_signinCallback"),e.callback(t)},e.prototype._signout=function(t,e){var n=this,r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];return h.default.info("_signout"),this._signoutStart(t,e,r).then(function(t){return n._signoutEnd(t.url)})},e.prototype._signoutCallback=function(t,e){return h.default.info("_signoutCallback"),e.callback(t)},e.prototype.signinRedirect=function(t){return h.default.info("UserManager.signinRedirect"),this._signinStart(t,this._redirectNavigator)},e.prototype.signinRedirectCallback=function(t){return h.default.info("UserManager.signinRedirectCallback"),this._signinEnd(t||this._redirectNavigator.url)},e.prototype.signoutRedirect=function(t){return h.default.info("UserManager.signoutRedirect"),this._signoutStart(t,this._redirectNavigator)},e.prototype.signoutRedirectCallback=function(t){return h.default.info("UserManager.signoutRedirectCallback"),this._signoutEnd(t||this._redirectNavigator.url)},e.prototype._signinStart=function(t,e){var n=this,r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];return h.default.info("_signinStart"),e.prepare(r).then(function(e){return h.default.info("got navigator window handle"),n.createSigninRequest(t).then(function(t){return h.default.info("got signin request"),r.url=t.url,e.navigate(r)})})},e.prototype._signinEnd=function(t){var e=this;return h.default.info("_signinEnd"),this.processSigninResponse(t).then(function(t){h.default.info("got signin response");var n=new g.default(t);return e._storeUser(n).then(function(){return h.default.info("user stored"),e._events.load(n),n})})},e.prototype._signoutStart=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=this,n=arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];return h.default.info("_signoutStart"),n.prepare(r).then(function(n){return h.default.info("got navigator window handle"),e.getUser().then(function(i){h.default.info("loaded current user from storage");var s=t.id_token_hint||i&&i.id_token;return s&&(h.default.info("Setting id_token into signout request"),t.id_token_hint=s),e.removeUser().then(function(){return h.default.info("user removed, creating signout request"),e.createSignoutRequest(t).then(function(t){return h.default.info("got signout request"),r.url=t.url,n.navigate(r)})})})})},e.prototype._signoutEnd=function(t){return h.default.info("_signoutEnd"),this.processSignoutResponse(t).then(function(t){return h.default.info("got signout response"),t})},e.prototype._loadUser=function(){return h.default.info("_loadUser"),this._userStore.get(this._userStoreKey).then(function(t){return t?(h.default.info("user storageString loaded"),g.default.fromStorageString(t)):(h.default.info("no user storageString"),null)})},e.prototype._storeUser=function(t){if(t){h.default.info("_storeUser storing user");var e=t.toStorageString();return this._userStore.set(this._userStoreKey,e)}return h.default.info("_storeUser removing user storage"),this._userStore.remove(this._userStoreKey)},a(e,[{key:"_redirectNavigator",get:function(){return this.settings.redirectNavigator}},{key:"_popupNavigator",get:function(){return this.settings.popupNavigator}},{key:"_iframeNavigator",get:function(){return this.settings.iframeNavigator}},{key:"_userStore",get:function(){return this.settings.userStore}},{key:"events",get:function(){return this._events}},{key:"_userStoreKey",get:function(){return"user:"+this.settings.authority+":"+this.settings.client_id}}]),e}(f.default);e.default=b,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(2),h=(r(u),n(4)),c=r(h),f=n(30),l=r(f),d=n(31),p=r(d),g=n(33),y=r(g),v=n(5),m=r(v),S=n(6),b=r(S),E=60,w=function(t){function e(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=n.popup_redirect_uri,o=n.popupWindowFeatures,a=n.popupWindowTarget,u=n.silent_redirect_uri,h=n.automaticSilentRenew,c=void 0===h?!1:h,f=n.accessTokenExpiringNotificationTime,d=void 0===f?E:f,g=n.redirectNavigator,v=void 0===g?new l.default:g,S=n.popupNavigator,w=void 0===S?new p.default:S,R=n.iframeNavigator,x=void 0===R?new y.default:R,A=n.userStore,F=void 0===A?new m.default({store:b.default.sessionStorage}):A;i(this,e);var _=s(this,t.call(this,arguments[0]));return _._popup_redirect_uri=r,_._popupWindowFeatures=o,_._popupWindowTarget=a,_._silent_redirect_uri=u,_._automaticSilentRenew=!!c,_._accessTokenExpiringNotificationTime=d,_._redirectNavigator=v,_._popupNavigator=w,_._iframeNavigator=x,_._userStore=F,_}return o(e,t),a(e,[{key:"popup_redirect_uri",get:function(){return this._popup_redirect_uri}},{key:"popupWindowFeatures",get:function(){return this._popupWindowFeatures}},{key:"popupWindowTarget",get:function(){return this._popupWindowTarget}},{key:"silent_redirect_uri",get:function(){return this._silent_redirect_uri}},{key:"automaticSilentRenew",get:function(){return!(!this.silent_redirect_uri||!this._automaticSilentRenew)}},{key:"accessTokenExpiringNotificationTime",get:function(){return this._accessTokenExpiringNotificationTime}},{key:"redirectNavigator",get:function(){return this._redirectNavigator}},{key:"popupNavigator",get:function(){return this._popupNavigator}},{key:"iframeNavigator",get:function(){return this._iframeNavigator}},{key:"userStore",get:function(){return this._userStore}}]),e}(c.default);e.default=w,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),a=r(o),u=function(){function t(){i(this,t)}return t.prototype.prepare=function(){return Promise.resolve(this)},t.prototype.navigate=function(t){return a.default.info("RedirectNavigator.navigate"),t&&t.url?(window.location=t.url,Promise.resolve()):(a.default.error("No url provided"),Promise.reject(new Error("No url provided")))},s(t,[{key:"url",get:function(){return a.default.info("RedirectNavigator.url"),window.location.href}}]),t}();e.default=u,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=r(s),a=n(32),u=r(a),h=function(){function t(){i(this,t)}return t.prototype.prepare=function(t){var e=new u.default(t);return Promise.resolve(e)},t.prototype.callback=function(t){o.default.info("PopupNavigator.callback");try{return u.default.notifyOpener(t),Promise.resolve()}catch(e){return Promise.reject(e)}},t}();e.default=h,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),a=r(o),u=500,h="location=no,toolbar=no,width=500,height=500,left=100,top=100",c="_blank",f=function(){function t(e){var n=this;i(this,t),a.default.info("PopupWindow.ctor"),this._promise=new Promise(function(t,e){n._resolve=t,n._reject=e}),this._boundMessageEvent=this._message.bind(this),window.addEventListener("message",this._boundMessageEvent,!1);var r=e.popupWindowFeatures||h,s=e.popupWindowTarget||c;this._popup=window.open("",s,r),this._popup&&(a.default.info("popup successfully created"),this._checkForPopupClosedTimer=window.setInterval(this._checkForPopupClosed.bind(this),u))}return t.prototype.navigate=function(t){return a.default.info("PopupWindow.navigate"),this._popup?t&&t.url?(a.default.info("Setting URL in popup"),this._popup.focus(),this._popup.window.location=t.url):this._error("No url provided"):this._error("Error opening popup window"),this.promise},t.prototype._success=function(t){this._cleanup(),a.default.info("Successful response from popup window"),this._resolve(t)},t.prototype._error=function(t){this._cleanup(),a.default.error(t),this._reject(new Error(t))},t.prototype._cleanup=function(){a.default.info("PopupWindow._cleanup"),window.removeEventListener("message",this._boundMessageEvent,!1),window.clearInterval(this._checkForPopupClosedTimer),this._checkForPopupClosedTimer=null,this._boundMessageEventssage=null,this._popup&&this._popup.close(),this._popup=null},t.prototype._checkForPopupClosed=function(){a.default.info("PopupWindow._checkForPopupClosed"),this._popup&&!this._popup.closed||this._error("Popup window closed")},t.prototype._message=function(t){if(a.default.info("PopupWindow._message"),t.origin===this._origin&&t.source===this._popup.window){a.default.info("processing message");var e=t.data||t.source.location.href;this._cleanup(),e?this._success({url:e}):this._error("Invalid response from popup")}},t.notifyOpener=function(t){a.default.info("PopupWindow.notifyOpener"),window.opener&&(t=t||window.location.href,t&&(a.default.info("posting url message to opener"),window.opener.postMessage(t,location.protocol+"//"+location.host)))},s(t,[{key:"promise",get:function(){return this._promise}},{key:"_origin",get:function(){return location.protocol+"//"+location.host}}]),t}();e.default=f,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=r(s),a=n(34),u=r(a),h=function(){function t(){i(this,t)}return t.prototype.prepare=function(){var t=new u.default;return Promise.resolve(t)},t.prototype.callback=function(t){o.default.info("IFrameNavigator.callback");try{return u.default.notifyParent(t),Promise.resolve()}catch(e){return Promise.reject(e)}},t}();e.default=h,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),a=r(o),u=5e3,h=function(){function t(){var e=this;i(this,t),a.default.info("IFrameWindow.ctor"),this._promise=new Promise(function(t,n){e._resolve=t,e._reject=n}),this._boundMessageEvent=this._message.bind(this),window.addEventListener("message",this._boundMessageEvent,!1),this._frame=window.document.createElement("iframe"),this._frame.style.display="none",window.document.body.appendChild(this._frame)}return t.prototype.navigate=function(t){return a.default.info("IFrameWindow.navigate"),t&&t.url?(this._timer=window.setTimeout(this._timeout.bind(this),u),this._frame.src=t.url):this._error("No url provided"),this.promise},t.prototype._success=function(t){this._cleanup(),a.default.info("Successful response from frame window"),this._resolve(t)},t.prototype._error=function(t){this._cleanup(),a.default.error(t),this._reject(new Error(t))},t.prototype._cleanup=function(){a.default.info("IFrameWindow._cleanup"),window.removeEventListener("message",this._boundMessageEvent,!1),window.clearTimeout(this._timer),window.document.body.removeChild(this._frame),this._timer=null,this._frame=null,this._boundMessageEventssage=null},t.prototype._timeout=function(){a.default.info("IFrameWindow._timeout"),this._error("Frame window timed out")},t.prototype._message=function(t){if(a.default.info("IFrameWindow._message"),this._timer&&t.origin===this._origin&&t.source===this._frame.contentWindow){var e=t.data;e?this._success({url:e}):this._error("Invalid response from frame")}},t.notifyParent=function(t){a.default.info("IFrameWindow.notifyParent"),window.parent&&window!==window.parent&&(t=t||window.location.href,t&&(a.default.info("posting url message to parent"),window.parent.postMessage(t,location.protocol+"//"+location.host)))},s(t,[{key:"promise",get:function(){return this._promise}},{key:"_origin",get:function(){return location.protocol+"//"+location.host}}]),t}();e.default=h,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),a=r(o),u=function(){function t(e){var n=e.id_token,r=e.session_state,s=e.access_token,o=e.token_type,a=e.scope,u=e.profile,h=e.expires_at,c=e.state;i(this,t),this.id_token=n,this.session_state=r,this.access_token=s,this.token_type=o,this.scope=a,this.profile=u,this.expires_at=h,this.state=c}return t.prototype.toStorageString=function(){return a.default.info("User.toStorageString"),JSON.stringify({id_token:this.id_token,session_state:this.session_state,access_token:this.access_token,token_type:this.token_type,scope:this.scope,profile:this.profile,expires_at:this.expires_at})},t.fromStorageString=function(e){return a.default.info("User.fromStorageString"),new t(JSON.parse(e))},s(t,[{key:"expires_in",get:function(){if(this.expires_at){var t=parseInt(Date.now()/1e3);return this.expires_at-t}}},{key:"expired",get:function(){var t=this.expires_in;return void 0!==t?0>=t:void 0}},{key:"scopes",get:function(){return(this.scope||"").split(" ")}}]),t}();e.default=u,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),u=r(a),h=n(37),c=r(h),f=n(39),l=r(f),d=function(t){function e(n){i(this,e);var r=s(this,t.call(this,n));return r._userLoaded=new l.default("User loaded"),r._userUnloaded=new l.default("User unloaded"),r._silentRenewError=new l.default("Silent renew error"),r}return o(e,t),e.prototype.load=function(e){u.default.info("UserManagerEvents.load"),t.prototype.load.call(this,e),this._userLoaded.raise(e)},e.prototype.unload=function(){u.default.info("UserManagerEvents.unload"),t.prototype.unload.call(this),this._userUnloaded.raise()},e.prototype.addUserLoaded=function(t){this._userLoaded.addHandler(t)},e.prototype.removeUserLoaded=function(t){this._userLoaded.removeHandler(t)},e.prototype.addUserUnloaded=function(t){this._userUnloaded.addHandler(t)},e.prototype.removeUserUnloaded=function(t){this._userUnloaded.removeHandler(t)},e.prototype.addSilentRenewError=function(t){this._silentRenewError.addHandler(t)},e.prototype.removeSilentRenewError=function(t){this._silentRenewError.removeHandler(t)},e.prototype._raiseSilentRenewError=function(t){u.default.info("UserManagerEvents._raiseSilentRenewError",t.message),this._silentRenewError.raise(t)},e}(c.default);e.default=d,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=r(s),a=n(38),u=r(a),h=60,c=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.accessTokenExpiringNotificationTime,r=void 0===n?h:n,s=e.accessTokenExpiringTimer,o=void 0===s?new u.default("Access token expiring"):s,a=e.accessTokenExpiredTimer,c=void 0===a?new u.default("Access token expired"):a;i(this,t),this._accessTokenExpiringNotificationTime=r,this._accessTokenExpiring=o,this._accessTokenExpired=c}return t.prototype.load=function(t){if(o.default.info("AccessTokenEvents.load"),this._cancelTimers(),t.access_token){var e=t.expires_in;if(o.default.info("access token present, remaining duration:",e),e>0){var n=e-this._accessTokenExpiringNotificationTime;0>=n&&(n=1),o.default.info("registering expiring timer in:",n),this._accessTokenExpiring.init(n)}var r=e+1;o.default.info("registering expired timer in:",r),this._accessTokenExpired.init(r)}},t.prototype.unload=function(){o.default.info("AccessTokenEvents.unload"),this._cancelTimers()},t.prototype._cancelTimers=function(){o.default.info("canceling existing access token timers"),this._accessTokenExpiring.cancel(),this._accessTokenExpired.cancel()},t.prototype.addAccessTokenExpiring=function(t){this._accessTokenExpiring.addHandler(t)},t.prototype.removeAccessTokenExpiring=function(t){this._accessTokenExpiring.removeHandler(t)},t.prototype.addAccessTokenExpired=function(t){this._accessTokenExpired.addHandler(t)},t.prototype.removeAccessTokenExpired=function(t){this._accessTokenExpired.removeHandler(t)},t}();e.default=c,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),u=(r(a),n(6)),h=r(u),c=n(39),f=r(c),l=function(t){function e(n){var r=arguments.length<=1||void 0===arguments[1]?h.default.timer:arguments[1];i(this,e);var o=s(this,t.call(this,n));return o._timer=r,o}return o(e,t),e.prototype.init=function(t){this.cancel(),0>=t&&(t=1),this._timerHandle=this._timer.setTimeout(this._callback.bind(this),1e3*t)},e.prototype.cancel=function(){this._timerHandle&&(this._timer.clearTimeout(this._timerHandle),this._timerHandle=null)},e.prototype._callback=function(){this._timerHandle=null,t.prototype.raise.call(this)},e}(f.default);e.default=l,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=r(s),a=function(){function t(e){i(this,t),this._name=e,this._callbacks=[]}return t.prototype.addHandler=function(t){this._callbacks.push(t)},t.prototype.removeHandler=function(t){var e=this._callbacks.findIndex(function(e){return e===t});e>=0&&this._callbacks.splice(e,1)},t.prototype.raise=function(){o.default.info("Raising event: "+this._name);var t=!0,e=!1,n=void 0;try{for(var r,i=this._callbacks[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var s=r.value;s.apply(void 0,arguments)}}catch(a){e=!0,n=a}finally{try{!t&&i.return&&i.return()}finally{if(e)throw n}}},t}();e.default=a,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=r(s),a=function(){function t(e){i(this,t),this._userManager=e,this._userManager.events.addAccessTokenExpiring(this._tokenExpiring.bind(this))}return t.prototype._tokenExpiring=function(){var t=this;o.default.info("SilentRenewService automatically renewing access token"),this._userManager.signinSilent().then(function(t){o.default.info("Silent token renewal successful")},function(e){o.default.error("Error from signinSilent:",e.message),t._userManager.events._raiseSilentRenewError(e)})},t}();e.default=a,t.exports=e.default}])});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = reducer;

	var _immutable = __webpack_require__(11);

	var _constants = __webpack_require__(3);

	var initialState = _get__('fromJS')({
	  user: null
	});

	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _get__('initialState') : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _get__('USER_EXPIRED'):
	      return state.set('user', null);
	    case _get__('REDIRECT_SUCCESS'):
	      console.log('payload', action.payload);
	      return state.set('user', _get__('fromJS')(action.payload));
	    default:
	      return state;
	  }
	}
	var _RewiredData__ = {};
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'fromJS':
	      return _immutable.fromJS;

	    case 'initialState':
	      return initialState;

	    case 'USER_EXPIRED':
	      return _constants.USER_EXPIRED;

	    case 'REDIRECT_SUCCESS':
	      return _constants.REDIRECT_SUCCESS;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof reducer === 'undefined' ? 'undefined' : _typeof(reducer);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(reducer, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(reducer)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Immutable = factory());
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }

	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }


	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }


	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }


	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }



	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }

	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }

	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }

	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }

	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }

	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;

	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;


	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';

	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;

	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};

	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };

	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }

	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }

	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}

	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }

	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }

	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }

	  function returnTrue() {
	    return true;
	  }

	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }

	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }

	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }

	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }

	  /* global Symbol */

	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;

	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';

	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


	  function Iterator(next) {
	      this.next = next;
	    }

	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };


	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;

	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };


	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }

	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }

	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }

	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }

	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }

	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }

	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }

	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };

	    Seq.prototype.toSeq = function() {
	      return this;
	    };

	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };

	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };

	    // abstract __iterateUncached(fn, reverse)

	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };

	    // abstract __iteratorUncached(type, reverse)

	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };



	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }

	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };



	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }

	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };

	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };

	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };

	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };

	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };



	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }

	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };

	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };



	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;

	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

	  Seq.prototype[IS_SEQ_SENTINEL] = true;



	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }

	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };

	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };



	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }

	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };

	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };

	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };

	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }

	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };

	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };



	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }

	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };

	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };




	  // # pragma Helper functions

	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }

	  var EMPTY_SEQ;

	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }

	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }

	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }

	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }

	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }

	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }

	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }

	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }

	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }

	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }

	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }

	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }

	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }

	    var notAssociative = !isAssociative(a);

	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }

	    var flipped = false;

	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }

	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });

	    return allEqual && a.size === bSize;
	  }

	  createClass(Repeat, IndexedSeq);

	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }

	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };

	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };

	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };

	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };

	    Repeat.prototype.reverse = function() {
	      return this;
	    };

	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };

	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };

	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };

	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };


	  var EMPTY_REPEAT;

	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }

	  createClass(Range, IndexedSeq);

	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }

	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step !== 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };

	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };

	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };

	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };

	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };

	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };

	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };

	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };

	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };


	  var EMPTY_RANGE;

	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }


	  createClass(KeyedCollection, Collection);function KeyedCollection() {}

	  createClass(IndexedCollection, Collection);function IndexedCollection() {}

	  createClass(SetCollection, Collection);function SetCollection() {}


	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;

	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };

	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }

	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      if (o !== o || o === Infinity) {
	        return 0;
	      }
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }

	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }

	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }

	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }

	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }

	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }

	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }

	    return hash;
	  }

	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;

	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());

	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }

	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }

	  var objHashUID = 0;

	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }

	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};

	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }

	  createClass(Map, KeyedCollection);

	    // @pragma Construction

	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
	      return emptyMap().withMutations(function(map ) {
	        for (var i = 0; i < keyValues.length; i += 2) {
	          if (i + 1 >= keyValues.length) {
	            throw new Error('Missing value for key: ' + keyValues[i]);
	          }
	          map.set(keyValues[i], keyValues[i + 1]);
	        }
	      });
	    };

	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };

	    // @pragma Access

	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };

	    // @pragma Modification

	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };

	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };

	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };

	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };

	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };

	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };

	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };

	    // @pragma Composition

	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };

	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };

	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };

	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };

	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };

	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };

	    // @pragma Mutability

	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };

	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };

	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };

	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };

	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };

	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };

	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };


	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }

	  Map.isMap = isMap;

	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;


	  // #pragma Trie Nodes



	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }

	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && entries.length === 1) {
	        return; // undefined
	      }

	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new ArrayMapNode(ownerID, newEntries);
	    };




	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }

	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };

	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;

	      if (!exists && value === NOT_SET) {
	        return this;
	      }

	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

	      if (newNode === node) {
	        return this;
	      }

	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }

	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }

	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };




	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }

	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };

	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];

	      if (removed && !node) {
	        return this;
	      }

	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }

	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };




	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }

	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }

	      var removed = value === NOT_SET;

	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };




	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }

	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };

	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }

	      SetRef(didAlter);

	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }

	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }

	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };



	  // #pragma Iterators

	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }

	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }

	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }

	  createClass(MapIterator, Iterator);

	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }

	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };


	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }

	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }

	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }

	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }

	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }

	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }

	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }

	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }

	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }

	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }

	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }

	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }

	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }

	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }

	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }

	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }

	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }

	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }

	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }

	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }

	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

	  createClass(List, IndexedCollection);

	    // @pragma Construction

	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }

	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };

	    // @pragma Access

	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };

	    // @pragma Modification

	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };

	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };

	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };

	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };

	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };

	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };

	    // @pragma Composition

	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };

	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };

	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };

	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };

	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };

	    // @pragma Iteration

	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };

	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };

	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };

	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };


	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }

	  List.isList = isList;

	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;



	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }

	    // TODO: seems like these methods are very similar

	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };

	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }

	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }

	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };



	  var DONE = {};

	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;

	    return iterateNodeOrLeaf(list._root, list._level, 0);

	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }

	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }

	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }

	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }

	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }

	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);

	    if (index !== index) {
	      return list;
	    }

	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }

	    index += list._origin;

	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }

	    if (!didAlter.value) {
	      return list;
	    }

	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }

	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }

	    var newNode;

	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }

	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }

	    SetRef(didAlter);

	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }

	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }

	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }

	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }

	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }

	    var newLevel = list._level;
	    var newRoot = list._root;

	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }

	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);

	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }

	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }

	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }

	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;

	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }

	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }

	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }

	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }

	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }

	  createClass(OrderedMap, Map);

	    // @pragma Construction

	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };

	    // @pragma Access

	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };

	    // @pragma Modification

	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };

	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };

	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };

	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };

	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };

	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };

	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };


	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }

	  OrderedMap.isOrderedMap = isOrderedMap;

	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }

	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }

	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }

	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }

	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };

	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };

	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };

	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };

	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };

	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };

	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };

	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };

	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };

	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };



	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };

	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };

	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };



	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }

	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };

	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };

	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };


	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;


	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }


	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }


	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }


	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }


	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }


	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }


	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;

	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      if (end === Infinity) {
	        end = originalSize;
	      } else {
	        end = end | 0;
	      }
	    }

	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }

	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);

	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }

	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }

	    var sliceSeq = makeSequence(iterable);

	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }

	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };

	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }

	    return sliceSeq;
	  }


	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }


	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }


	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});

	    if (iters.length === 0) {
	      return iterable;
	    }

	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }

	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }


	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }


	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }


	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }


	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }


	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }

	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }


	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }


	  // #pragma Helper Functions

	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }

	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }

	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }

	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }

	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }

	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }

	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }

	  createClass(Record, KeyedCollection);

	    function Record(defaultValues, name) {
	      var hasInitialized;

	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };

	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;

	      return RecordType;
	    }

	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };

	    // @pragma Access

	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };

	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };

	    // @pragma Modification

	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };

	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      if (this._map && !this._map.has(k)) {
	        var defaultVal = this._defaultValues[k];
	        if (v === defaultVal) {
	          return this;
	        }
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };

	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };

	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };


	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;


	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }

	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }

	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }

	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }

	  createClass(Set, SetCollection);

	    // @pragma Construction

	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };

	    // @pragma Access

	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };

	    // @pragma Modification

	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };

	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };

	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };

	    // @pragma Composition

	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };

	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };

	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };

	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };

	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };

	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };

	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };

	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };


	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }

	  Set.isSet = isSet;

	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;

	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;

	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }

	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }

	  createClass(OrderedSet, Set);

	    // @pragma Construction

	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };


	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }

	  OrderedSet.isOrderedSet = isOrderedSet;

	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;

	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }

	  createClass(Stack, IndexedCollection);

	    // @pragma Construction

	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }

	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };

	    // @pragma Access

	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };

	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };

	    // @pragma Modification

	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };

	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };

	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };

	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };

	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };

	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    // @pragma Mutability

	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };

	    // @pragma Iteration

	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };

	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };


	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }

	  Stack.isStack = isStack;

	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;


	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }

	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }

	  Iterable.Iterator = Iterator;

	  mixin(Iterable, {

	    // ### Conversion to other types

	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },

	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },

	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },

	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },

	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },

	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },

	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },

	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },

	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },

	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },


	    // ### Common JavaScript methods and properties

	    toString: function() {
	      return '[Iterable]';
	    },

	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },

	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },

	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },

	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },

	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },

	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },

	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },

	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },

	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },

	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },

	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },

	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },

	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },

	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },


	    // ### More sequential methods

	    butLast: function() {
	      return this.slice(0, -1);
	    },

	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },

	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },

	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },

	    equals: function(other) {
	      return deepEqual(this, other);
	    },

	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },

	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },

	    findEntry: function(predicate, context, notSetValue) {
	      var found = notSetValue;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },

	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },

	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },

	    findLastEntry: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
	    },

	    findLastKey: function(predicate, context) {
	      return this.toKeyedSeq().reverse().findKey(predicate, context);
	    },

	    first: function() {
	      return this.find(returnTrue);
	    },

	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },

	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },

	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },

	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },

	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },

	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },

	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },

	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },

	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },

	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },

	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },

	    last: function() {
	      return this.toSeq().reverse().first();
	    },

	    lastKeyOf: function(searchValue) {
	      return this.toKeyedSeq().reverse().keyOf(searchValue);
	    },

	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },

	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },

	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },

	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },

	    rest: function() {
	      return this.slice(1);
	    },

	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },

	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },

	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },

	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },

	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },

	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },

	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },

	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },

	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },


	    // ### Hashable Object

	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }


	    // ### Internal

	    // abstract __iterate(fn, reverse)

	    // abstract __iterator(type, reverse)
	  });

	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;

	  mixin(KeyedIterable, {

	    // ### More sequential methods

	    flip: function() {
	      return reify(this, flipFactory(this));
	    },

	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },

	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }

	  });

	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



	  mixin(IndexedIterable, {

	    // ### Conversion to other types

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },

	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    indexOf: function(searchValue) {
	      var key = this.keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    lastIndexOf: function(searchValue) {
	      var key = this.lastKeyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },

	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },


	    // ### More collection methods

	    findLastIndex: function(predicate, context) {
	      var entry = this.findLastEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    first: function() {
	      return this.get(0);
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },

	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },

	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },

	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },

	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },

	    keySeq: function() {
	      return Range(0, this.size);
	    },

	    last: function() {
	      return this.get(-1);
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },

	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },

	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }

	  });

	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



	  mixin(SetIterable, {

	    // ### ES6 Collection methods (ES6 Array and Map)

	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },

	    includes: function(value) {
	      return this.has(value);
	    },


	    // ### More sequential methods

	    keySeq: function() {
	      return this.valueSeq();
	    }

	  });

	  SetIterable.prototype.has = IterablePrototype.includes;
	  SetIterable.prototype.contains = SetIterable.prototype.includes;


	  // Mixin subclasses

	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);

	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);


	  // #pragma Helper functions

	  function keyMapper(v, k) {
	    return k;
	  }

	  function entryMapper(v, k) {
	    return [k, v];
	  }

	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }

	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }

	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : String(value);
	  }

	  function defaultZipper() {
	    return arrCopy(arguments);
	  }

	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }

	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }

	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }

	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }

	  var Immutable = {

	    Iterable: Iterable,

	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,

	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,

	    is: is,
	    fromJS: fromJS

	  };

	  return Immutable;

	}));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = reducer;

	var _constants = __webpack_require__(3);

	var initialState = {
	  user: null
	};

	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _get__('initialState') : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _get__('USER_EXPIRED'):
	      return Object.assign({}, _extends({}, state), { user: null });
	    case _get__('REDIRECT_SUCCESS'):
	      return Object.assign({}, _extends({}, state), { user: action.payload });
	    default:
	      return state;
	  }
	}
	var _RewiredData__ = {};
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'initialState':
	      return initialState;

	    case 'USER_EXPIRED':
	      return _constants.USER_EXPIRED;

	    case 'REDIRECT_SUCCESS':
	      return _constants.REDIRECT_SUCCESS;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof reducer === 'undefined' ? 'undefined' : _typeof(reducer);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(reducer, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(reducer)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OidcProvider = function (_get__$Component) {
	  _inherits(OidcProvider, _get__$Component);

	  _createClass(OidcProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        userManager: this.userManager
	      };
	    }
	  }]);

	  function OidcProvider(props) {
	    _classCallCheck(this, OidcProvider);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OidcProvider).call(this, props));

	    _this.userManager = props.userManager;
	    return _this;
	  }

	  _createClass(OidcProvider, [{
	    key: 'render',
	    value: function render() {
	      return _get__('React').Children.only(this.props.children);
	    }
	  }]);

	  return OidcProvider;
	}(_get__('React').Component);

	OidcProvider.propTypes = {
	  userManager: _get__('PropTypes').object.isRequired,
	  children: _get__('PropTypes').element.isRequired
	};
	OidcProvider.childContextTypes = {
	  userManager: _get__('PropTypes').object
	};
	exports.default = _get__('OidcProvider');
	var _RewiredData__ = {};
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'PropTypes':
	      return _react.PropTypes;

	    case 'React':
	      return _react2.default;

	    case 'OidcProvider':
	      return OidcProvider;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof OidcProvider === 'undefined' ? 'undefined' : _typeof(OidcProvider);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(OidcProvider, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(OidcProvider)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ }
/******/ ])
});
;