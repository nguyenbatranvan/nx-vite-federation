import {
  _extends,
  require_hoist_non_react_statics_cjs,
  require_react_is
} from "./chunk-FKGU7Y2U.js";
import {
  __toESM,
  require_react
} from "./chunk-25U7NLVJ.js";

// node_modules/@loadable/component/dist/loadable.esm.js
var import_react = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/@loadable/component/dist/loadable.esm.js
var import_react_is = __toESM(require_react_is());
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
function invariant(condition, message) {
  if (condition)
    return;
  var error = new Error("loadable: " + message);
  error.framesToPop = 1;
  error.name = "Invariant Violation";
  throw error;
}
function warn(message) {
  console.warn("loadable: " + message);
}
var Context = import_react.default.createContext();
var LOADABLE_REQUIRED_CHUNKS_KEY = "__LOADABLE_REQUIRED_CHUNKS__";
function getRequiredChunkKey(namespace) {
  return "" + namespace + LOADABLE_REQUIRED_CHUNKS_KEY;
}
var sharedInternals = Object.freeze({
  __proto__: null,
  getRequiredChunkKey,
  invariant,
  Context
});
var LOADABLE_SHARED = {
  initialChunks: {}
};
var STATUS_PENDING = "PENDING";
var STATUS_RESOLVED = "RESOLVED";
var STATUS_REJECTED = "REJECTED";
function resolveConstructor(ctor) {
  if (typeof ctor === "function") {
    return {
      requireAsync: ctor,
      resolve: function resolve() {
        return void 0;
      },
      chunkName: function chunkName() {
        return void 0;
      }
    };
  }
  return ctor;
}
var withChunkExtractor = function withChunkExtractor2(Component) {
  var LoadableWithChunkExtractor = function LoadableWithChunkExtractor2(props) {
    return import_react.default.createElement(Context.Consumer, null, function(extractor) {
      return import_react.default.createElement(Component, Object.assign({
        __chunkExtractor: extractor
      }, props));
    });
  };
  if (Component.displayName) {
    LoadableWithChunkExtractor.displayName = Component.displayName + "WithChunkExtractor";
  }
  return LoadableWithChunkExtractor;
};
var identity = function identity2(v) {
  return v;
};
function createLoadable(_ref) {
  var _ref$defaultResolveCo = _ref.defaultResolveComponent, defaultResolveComponent2 = _ref$defaultResolveCo === void 0 ? identity : _ref$defaultResolveCo, _render = _ref.render, onLoad2 = _ref.onLoad;
  function loadable2(loadableConstructor, options) {
    if (options === void 0) {
      options = {};
    }
    var ctor = resolveConstructor(loadableConstructor);
    var cache = {};
    function _getCacheKey(props) {
      if (options.cacheKey) {
        return options.cacheKey(props);
      }
      if (ctor.resolve) {
        return ctor.resolve(props);
      }
      return "static";
    }
    function resolve(module, props, Loadable2) {
      var Component = options.resolveComponent ? options.resolveComponent(module, props) : defaultResolveComponent2(module);
      if (options.resolveComponent && !(0, import_react_is.isValidElementType)(Component)) {
        throw new Error("resolveComponent returned something that is not a React component!");
      }
      (0, import_hoist_non_react_statics.default)(Loadable2, Component, {
        preload: true
      });
      return Component;
    }
    var cachedLoad = function cachedLoad2(props) {
      var cacheKey = _getCacheKey(props);
      var promise = cache[cacheKey];
      if (!promise || promise.status === STATUS_REJECTED) {
        promise = ctor.requireAsync(props);
        promise.status = STATUS_PENDING;
        cache[cacheKey] = promise;
        promise.then(function() {
          promise.status = STATUS_RESOLVED;
        }, function(error) {
          console.error("loadable-components: failed to asynchronously load component", {
            fileName: ctor.resolve(props),
            chunkName: ctor.chunkName(props),
            error: error ? error.message : error
          });
          promise.status = STATUS_REJECTED;
        });
      }
      return promise;
    };
    var InnerLoadable = function(_React$Component) {
      _inheritsLoose(InnerLoadable2, _React$Component);
      InnerLoadable2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var cacheKey = _getCacheKey(props);
        return _extends({}, state, {
          cacheKey,
          // change of a key triggers loading state automatically
          loading: state.loading || state.cacheKey !== cacheKey
        });
      };
      function InnerLoadable2(props) {
        var _this;
        _this = _React$Component.call(this, props) || this;
        _this.state = {
          result: null,
          error: null,
          loading: true,
          cacheKey: _getCacheKey(props)
        };
        invariant(!props.__chunkExtractor || ctor.requireSync, "SSR requires `@loadable/babel-plugin`, please install it");
        if (props.__chunkExtractor) {
          if (options.ssr === false) {
            return _assertThisInitialized(_this);
          }
          ctor.requireAsync(props)["catch"](function() {
            return null;
          });
          _this.loadSync();
          props.__chunkExtractor.addChunk(ctor.chunkName(props));
          return _assertThisInitialized(_this);
        }
        if (options.ssr !== false && // is ready - was loaded in this session
        (ctor.isReady && ctor.isReady(props) || // is ready - was loaded during SSR process
        ctor.chunkName && LOADABLE_SHARED.initialChunks[ctor.chunkName(props)])) {
          _this.loadSync();
        }
        return _this;
      }
      var _proto = InnerLoadable2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;
        var cachedPromise = this.getCache();
        if (cachedPromise && cachedPromise.status === STATUS_REJECTED) {
          this.setCache();
        }
        if (this.state.loading) {
          this.loadAsync();
        }
      };
      _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (prevState.cacheKey !== this.state.cacheKey) {
          this.loadAsync();
        }
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };
      _proto.safeSetState = function safeSetState(nextState, callback) {
        if (this.mounted) {
          this.setState(nextState, callback);
        }
      };
      _proto.getCacheKey = function getCacheKey() {
        return _getCacheKey(this.props);
      };
      _proto.getCache = function getCache() {
        return cache[this.getCacheKey()];
      };
      _proto.setCache = function setCache(value) {
        if (value === void 0) {
          value = void 0;
        }
        cache[this.getCacheKey()] = value;
      };
      _proto.triggerOnLoad = function triggerOnLoad() {
        var _this2 = this;
        if (onLoad2) {
          setTimeout(function() {
            onLoad2(_this2.state.result, _this2.props);
          });
        }
      };
      _proto.loadSync = function loadSync() {
        if (!this.state.loading)
          return;
        try {
          var loadedModule = ctor.requireSync(this.props);
          var result = resolve(loadedModule, this.props, Loadable);
          this.state.result = result;
          this.state.loading = false;
        } catch (error) {
          console.error("loadable-components: failed to synchronously load component, which expected to be available", {
            fileName: ctor.resolve(this.props),
            chunkName: ctor.chunkName(this.props),
            error: error ? error.message : error
          });
          this.state.error = error;
        }
      };
      _proto.loadAsync = function loadAsync() {
        var _this3 = this;
        var promise = this.resolveAsync();
        promise.then(function(loadedModule) {
          var result = resolve(loadedModule, _this3.props, Loadable);
          _this3.safeSetState({
            result,
            loading: false
          }, function() {
            return _this3.triggerOnLoad();
          });
        })["catch"](function(error) {
          return _this3.safeSetState({
            error,
            loading: false
          });
        });
        return promise;
      };
      _proto.resolveAsync = function resolveAsync() {
        var _this$props = this.props, __chunkExtractor = _this$props.__chunkExtractor, forwardedRef = _this$props.forwardedRef, props = _objectWithoutPropertiesLoose(_this$props, ["__chunkExtractor", "forwardedRef"]);
        return cachedLoad(props);
      };
      _proto.render = function render3() {
        var _this$props2 = this.props, forwardedRef = _this$props2.forwardedRef, propFallback = _this$props2.fallback, __chunkExtractor = _this$props2.__chunkExtractor, props = _objectWithoutPropertiesLoose(_this$props2, ["forwardedRef", "fallback", "__chunkExtractor"]);
        var _this$state = this.state, error = _this$state.error, loading = _this$state.loading, result = _this$state.result;
        if (options.suspense) {
          var cachedPromise = this.getCache() || this.loadAsync();
          if (cachedPromise.status === STATUS_PENDING) {
            throw this.loadAsync();
          }
        }
        if (error) {
          throw error;
        }
        var fallback = propFallback || options.fallback || null;
        if (loading) {
          return fallback;
        }
        return _render({
          fallback,
          result,
          options,
          props: _extends({}, props, {
            ref: forwardedRef
          })
        });
      };
      return InnerLoadable2;
    }(import_react.default.Component);
    var EnhancedInnerLoadable = withChunkExtractor(InnerLoadable);
    var Loadable = import_react.default.forwardRef(function(props, ref) {
      return import_react.default.createElement(EnhancedInnerLoadable, Object.assign({
        forwardedRef: ref
      }, props));
    });
    Loadable.displayName = "Loadable";
    Loadable.preload = function(props) {
      Loadable.load(props);
    };
    Loadable.load = function(props) {
      return cachedLoad(props);
    };
    return Loadable;
  }
  function lazy2(ctor, options) {
    return loadable2(ctor, _extends({}, options, {
      suspense: true
    }));
  }
  return {
    loadable: loadable2,
    lazy: lazy2
  };
}
function defaultResolveComponent(loadedModule) {
  return loadedModule.__esModule ? loadedModule["default"] : loadedModule["default"] || loadedModule;
}
var _createLoadable = createLoadable({
  defaultResolveComponent,
  render: function render(_ref) {
    var Component = _ref.result, props = _ref.props;
    return import_react.default.createElement(Component, props);
  }
});
var loadable = _createLoadable.loadable;
var lazy = _createLoadable.lazy;
var _createLoadable$1 = createLoadable({
  onLoad: function onLoad(result, props) {
    if (result && props.forwardedRef) {
      if (typeof props.forwardedRef === "function") {
        props.forwardedRef(result);
      } else {
        props.forwardedRef.current = result;
      }
    }
  },
  render: function render2(_ref) {
    var result = _ref.result, props = _ref.props;
    if (props.children) {
      return props.children(result);
    }
    return null;
  }
});
var loadable$1 = _createLoadable$1.loadable;
var lazy$1 = _createLoadable$1.lazy;
var BROWSER = typeof window !== "undefined";
function loadableReady(done, _temp) {
  if (done === void 0) {
    done = function done2() {
    };
  }
  var _ref = _temp === void 0 ? {} : _temp, _ref$namespace = _ref.namespace, namespace = _ref$namespace === void 0 ? "" : _ref$namespace, _ref$chunkLoadingGlob = _ref.chunkLoadingGlobal, chunkLoadingGlobal = _ref$chunkLoadingGlob === void 0 ? "__LOADABLE_LOADED_CHUNKS__" : _ref$chunkLoadingGlob;
  if (!BROWSER) {
    warn("`loadableReady()` must be called in browser only");
    done();
    return Promise.resolve();
  }
  var requiredChunks = null;
  if (BROWSER) {
    var id = getRequiredChunkKey(namespace);
    var dataElement = document.getElementById(id);
    if (dataElement) {
      requiredChunks = JSON.parse(dataElement.textContent);
      var extElement = document.getElementById(id + "_ext");
      if (extElement) {
        var _JSON$parse = JSON.parse(extElement.textContent), namedChunks = _JSON$parse.namedChunks;
        namedChunks.forEach(function(chunkName) {
          LOADABLE_SHARED.initialChunks[chunkName] = true;
        });
      } else {
        throw new Error("loadable-component: @loadable/server does not match @loadable/component");
      }
    }
  }
  if (!requiredChunks) {
    warn("`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side");
    done();
    return Promise.resolve();
  }
  var resolved = false;
  return new Promise(function(resolve) {
    window[chunkLoadingGlobal] = window[chunkLoadingGlobal] || [];
    var loadedChunks = window[chunkLoadingGlobal];
    var originalPush = loadedChunks.push.bind(loadedChunks);
    function checkReadyState() {
      if (requiredChunks.every(function(chunk) {
        return loadedChunks.some(function(_ref2) {
          var chunks = _ref2[0];
          return chunks.indexOf(chunk) > -1;
        });
      })) {
        if (!resolved) {
          resolved = true;
          resolve();
        }
      }
    }
    loadedChunks.push = function() {
      originalPush.apply(void 0, arguments);
      checkReadyState();
    };
    checkReadyState();
  }).then(done);
}
var loadable$2 = loadable;
loadable$2.lib = loadable$1;
var lazy$2 = lazy;
lazy$2.lib = lazy$1;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sharedInternals;
var loadable_esm_default = loadable$2;
export {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  loadable_esm_default as default,
  lazy$2 as lazy,
  loadableReady
};
//# sourceMappingURL=@loadable_component.js.map