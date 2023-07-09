"use client";
import {
  __toESM,
  require_react
} from "./chunk-F7C7WDDE.js";

// node_modules/react-error-boundary/dist/react-error-boundary.esm.js
var import_react = __toESM(require_react());
var ErrorBoundaryContext = (0, import_react.createContext)(null);
var initialState = {
  didCatch: false,
  error: null
};
var ErrorBoundary = class extends import_react.Component {
  constructor(props) {
    super(props);
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
    this.state = initialState;
  }
  static getDerivedStateFromError(error) {
    return {
      didCatch: true,
      error
    };
  }
  resetErrorBoundary() {
    const {
      error
    } = this.state;
    if (error !== null) {
      var _this$props$onReset, _this$props;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_this$props$onReset = (_this$props = this.props).onReset) === null || _this$props$onReset === void 0 ? void 0 : _this$props$onReset.call(_this$props, {
        args,
        reason: "imperative-api"
      });
      this.setState(initialState);
    }
  }
  componentDidCatch(error, info) {
    var _this$props$onError, _this$props2;
    (_this$props$onError = (_this$props2 = this.props).onError) === null || _this$props$onError === void 0 ? void 0 : _this$props$onError.call(_this$props2, error, info);
  }
  componentDidUpdate(prevProps, prevState) {
    const {
      didCatch
    } = this.state;
    const {
      resetKeys
    } = this.props;
    if (didCatch && prevState.error !== null && hasArrayChanged(prevProps.resetKeys, resetKeys)) {
      var _this$props$onReset2, _this$props3;
      (_this$props$onReset2 = (_this$props3 = this.props).onReset) === null || _this$props$onReset2 === void 0 ? void 0 : _this$props$onReset2.call(_this$props3, {
        next: resetKeys,
        prev: prevProps.resetKeys,
        reason: "keys"
      });
      this.setState(initialState);
    }
  }
  render() {
    const {
      children,
      fallbackRender,
      FallbackComponent,
      fallback
    } = this.props;
    const {
      didCatch,
      error
    } = this.state;
    let childToRender = children;
    if (didCatch) {
      const props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ((0, import_react.isValidElement)(fallback)) {
        childToRender = fallback;
      } else if (typeof fallbackRender === "function") {
        childToRender = fallbackRender(props);
      } else if (FallbackComponent) {
        childToRender = (0, import_react.createElement)(FallbackComponent, props);
      } else {
        throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
      }
    }
    return (0, import_react.createElement)(ErrorBoundaryContext.Provider, {
      value: {
        didCatch,
        error,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, childToRender);
  }
};
function hasArrayChanged() {
  let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]));
}
function assertErrorBoundaryContext(value) {
  if (value == null || typeof value.didCatch !== "boolean" || typeof value.resetErrorBoundary !== "function") {
    throw new Error("ErrorBoundaryContext not found");
  }
  return true;
}
function useErrorBoundary() {
  const context = (0, import_react.useContext)(ErrorBoundaryContext);
  assertErrorBoundaryContext(context);
  const [state, setState] = (0, import_react.useState)({
    error: null,
    hasError: false
  });
  const memoized = (0, import_react.useMemo)(() => ({
    resetBoundary: () => {
      context === null || context === void 0 ? void 0 : context.resetErrorBoundary();
      setState({
        error: null,
        hasError: false
      });
    },
    showBoundary: (error) => setState({
      error,
      hasError: true
    })
  }), [context === null || context === void 0 ? void 0 : context.resetErrorBoundary]);
  if (state.hasError) {
    throw state.error;
  }
  return memoized;
}
function withErrorBoundary(component, errorBoundaryProps) {
  const Wrapped = (0, import_react.forwardRef)((props, ref) => (0, import_react.createElement)(ErrorBoundary, errorBoundaryProps, (0, import_react.createElement)(component, {
    ...props,
    ref
  })));
  const name = component.displayName || component.name || "Unknown";
  Wrapped.displayName = "withErrorBoundary(".concat(name, ")");
  return Wrapped;
}
export {
  ErrorBoundary,
  ErrorBoundaryContext,
  useErrorBoundary,
  withErrorBoundary
};
//# sourceMappingURL=react-error-boundary.js.map
