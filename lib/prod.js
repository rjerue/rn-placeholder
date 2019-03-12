'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactNative = require('react-native');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var START_VALUE = 0.5;
var END_VALUE = 1;
var DURATION = 500;
var useNativeDriver = true;
/**
 * Create a repetitive fadein / fadeout animation
 */

var Fade = function Fade(_ref) {
  var children = _ref.children;
  var animation = new reactNative.Animated.Value(START_VALUE);

  function start() {
    reactNative.Animated.sequence([reactNative.Animated.timing(animation, {
      toValue: END_VALUE,
      duration: DURATION,
      useNativeDriver: useNativeDriver
    }), reactNative.Animated.timing(animation, {
      toValue: START_VALUE,
      duration: DURATION,
      useNativeDriver: useNativeDriver
    })]).start(function (e) {
      if (e.finished) {
        start();
      }
    });
  }

  start();
  var style = {
    opacity: animation
  };
  return React.createElement(reactNative.Animated.View, {
    style: style
  }, children);
};

Fade.propTypes = {
  children: propTypes.shape({})
};
Fade.defaultProps = {
  children: null
};

var START_VALUE$1 = 0;
var END_VALUE$1 = 100;
var DURATION$1 = 750;
var styles = reactNative.StyleSheet.create({
  shine: {
    width: 30,
    position: 'absolute',
    height: '100%',
    backgroundColor: '#ffffff',
    opacity: 0.4
  }
});
/**
 * Create a repetitive Shine animation
 */

var Shine = function Shine(_ref) {
  var children = _ref.children;
  var animation = new reactNative.Animated.Value(0);

  function start() {
    animation.setValue(START_VALUE$1);
    reactNative.Animated.sequence([reactNative.Animated.timing(animation, {
      toValue: END_VALUE$1,
      duration: DURATION$1
    })]).start(function (e) {
      return e.finished && start();
    });
  }

  start();
  var marginLeft = animation.interpolate({
    inputRange: [START_VALUE$1, END_VALUE$1],
    outputRange: ['0%', '100%']
  });
  return React.createElement(reactNative.View, null, children, React.createElement(reactNative.Animated.View, {
    style: [styles.shine, {
      marginLeft: marginLeft
    }]
  }));
};

Shine.propTypes = {
  children: propTypes.shape({})
};
Shine.defaultProps = {
  children: null
};

/**
 * Animation factory
 * Get an animation by its name
 */

var Animations = {
  fade: Fade,
  shine: Shine
};

var renderAnimation = function renderAnimation(Animation, Component, props) {
  if (!Animation) {
    throw new Error("".concat(Animation.name, " doesnt exist in the current project"));
  }

  return React.createElement(Animation, null, React.createElement(Component, props));
};
/**
 * Higher order component that factors animation and state ready
 * @param PlaceholderComponent
 */


var connect = function connect(PlaceholderComponent) {
  function placeHolder(props) {
    var onReady = props.onReady,
        animate = props.animate,
        children = props.children,
        customAnimate = props.customAnimate,
        otherProps = _objectWithoutProperties(props, ["onReady", "animate", "children", "customAnimate"]);

    if (onReady) {
      return children;
    }

    if (customAnimate) {
      return renderAnimation(customAnimate, PlaceholderComponent, otherProps);
    }

    if (animate) {
      return renderAnimation(Animations[animate], PlaceholderComponent, otherProps);
    }

    return React.createElement(PlaceholderComponent, otherProps);
  }

  placeHolder.propTypes = {
    onReady: propTypes.bool,
    children: propTypes.element,
    animate: propTypes.string,
    customAnimate: propTypes.func
  };
  placeHolder.defaultProps = {
    onReady: false,
    animate: null,
    children: null,
    customAnimate: null
  };
  return placeHolder;
};

var stylify = function stylify(computeStyles) {
  return function (Component) {
    var StyledComponent = function StyledComponent(_ref) {
      var style = _ref.style,
          otherProps = _objectWithoutProperties(_ref, ["style"]);

      var styles = _objectSpread({}, computeStyles(otherProps), style);

      return React.createElement(Component, _extends({}, otherProps, {
        style: styles
      }));
    };

    StyledComponent.propTypes = {
      style: propTypes.shape({})
    };
    StyledComponent.defaultProps = {
      style: {}
    };
    return StyledComponent;
  };
};

/**
 * Compute style based on props
 * @param textSize The line text size
 * @param color The line color
 * @param width The line width
 */
var computeStyleLine = (function (_ref) {
  var _ref$textSize = _ref.textSize,
      textSize = _ref$textSize === void 0 ? 12 : _ref$textSize,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#efefef' : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width;
  return {
    height: textSize,
    width: width,
    alignSelf: 'stretch',
    backgroundColor: color,
    borderRadius: textSize / 4
  };
});

/**
 * Compute style based on props
 * @param size The media size
 * @param hasRadius Does the media rounded or not ?
 * @param color The media color
 */
var computeStyleMedia = (function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size,
      _ref$hasRadius = _ref.hasRadius,
      hasRadius = _ref$hasRadius === void 0 ? false : _ref$hasRadius,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#efefef' : _ref$color;
  return {
    height: size,
    width: size,
    borderRadius: hasRadius ? size / 2 : 3,
    backgroundColor: color
  };
});

var computeStyleBox = (function (_ref) {
  var _ref$height = _ref.height,
      height = _ref$height === void 0 ? 50 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 50 : _ref$width,
      _ref$radius = _ref.radius,
      radius = _ref$radius === void 0 ? 0 : _ref$radius,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#efefef' : _ref$color;
  return {
    height: height,
    width: width,
    borderRadius: radius,
    backgroundColor: color
  };
});

var compose = function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
};
/**
 * Export shared elements
 */


var Media = compose(connect, stylify(computeStyleMedia))(reactNative.View);
var Line = compose(connect, stylify(computeStyleLine))(reactNative.View);
var Box = compose(connect, stylify(computeStyleBox))(reactNative.View);

var prepareLine = function prepareLine(i, marginBottom, textSize, color, width) {
  return React.createElement(Line, {
    textSize: textSize,
    color: color,
    width: width,
    key: i,
    style: {
      marginBottom: marginBottom
    }
  });
};
/**
 * Create a paragraph
 * @param lineNumber The number of lines
 * @param textSize The text size (for lines)
 * @param lineSpacing The line spacing size (for lines)
 * @param color The paragraph color
 * @param width The paragraph width
 * @param lastLineWidth The last line width
 * @param firstLineWidth The first line width
 */


function Paragraph(_ref) {
  var lineNumber = _ref.lineNumber,
      textSize = _ref.textSize,
      lineSpacing = _ref.lineSpacing,
      color = _ref.color,
      width = _ref.width,
      lastLineWidth = _ref.lastLineWidth,
      firstLineWidth = _ref.firstLineWidth,
      style = _ref.style;
  var lineRealNumber = lineNumber - 1;
  var lines = Array(lineNumber).fill(null).map(function (_, i) {
    if (i === lineRealNumber) {
      return React.createElement(Line, {
        textSize: textSize,
        color: color,
        width: lastLineWidth,
        key: i
      });
    }

    if (i === 0) {
      return prepareLine(i, lineSpacing, textSize, color, firstLineWidth);
    }

    return React.createElement(Line, {
      textSize: textSize,
      color: color,
      width: width,
      key: i,
      style: {
        marginBottom: lineSpacing
      }
    });
  });
  return React.createElement(reactNative.View, {
    style: style
  }, lines);
}

Paragraph.propTypes = {
  lineNumber: propTypes.number.isRequired,
  textSize: propTypes.number,
  lineSpacing: propTypes.number,
  color: propTypes.string,
  width: propTypes.string,
  lastLineWidth: propTypes.string,
  firstLineWidth: propTypes.string,
  style: propTypes.oneOfType([propTypes.number, propTypes.shape({})])
};
Paragraph.defaultProps = {
  textSize: 12,
  lineSpacing: 12,
  color: '#efefef',
  width: '100%',
  lastLineWidth: '100%',
  firstLineWidth: '100%',
  style: {}
};

var styles$1 = reactNative.StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  container: {
    flex: 1
  }
});

var positionElement = function positionElement(position, textSize, color, size, hasRadius) {
  var _ref;

  return React.createElement(reactNative.View, {
    style: (_ref = {}, _defineProperty(_ref, position, textSize), _defineProperty(_ref, "flexDirection", 'column'), _defineProperty(_ref, "justifyContent", 'center'), _ref)
  }, React.createElement(Media, {
    color: color,
    size: size,
    hasRadius: hasRadius
  }));
};
/**
 * Create a new Image content
 * @param position Set the image position
 * @param size Media size
 * @param hasRadius Does the media contains radius ?
 * @param animate Animation to do
 * @param lineNumber The number of line to display
 * @param textSize The line text size
 * @param lineSpacing The line spacing distance
 * @param color The media / line color
 * @param width The global lines width
 * @param lastLineWidth The last line width
 * @param firstLineWidth the first line width
 */


function ImageContent(_ref2) {
  var position = _ref2.position,
      size = _ref2.size,
      hasRadius = _ref2.hasRadius,
      animate = _ref2.animate,
      lineNumber = _ref2.lineNumber,
      textSize = _ref2.textSize,
      lineSpacing = _ref2.lineSpacing,
      color = _ref2.color,
      width = _ref2.width,
      lastLineWidth = _ref2.lastLineWidth,
      firstLineWidth = _ref2.firstLineWidth;
  return React.createElement(reactNative.View, {
    style: styles$1.row
  }, position === 'left' && positionElement('marginRight', textSize, color, size, hasRadius), React.createElement(Paragraph, {
    animate: animate,
    lineNumber: lineNumber,
    textSize: textSize,
    color: color,
    width: width,
    lastLineWidth: lastLineWidth,
    firstLineWidth: firstLineWidth,
    lineSpacing: lineSpacing,
    style: styles$1.container
  }), position === 'right' && positionElement('marginLeft', textSize, color, size, hasRadius));
}

ImageContent.propTypes = {
  position: propTypes.string,
  size: propTypes.number,
  hasRadius: propTypes.bool,
  animate: propTypes.string,
  lineNumber: propTypes.number.isRequired,
  textSize: propTypes.number,
  lineSpacing: propTypes.number,
  color: propTypes.string,
  width: propTypes.string,
  lastLineWidth: propTypes.string,
  firstLineWidth: propTypes.string
};
ImageContent.defaultProps = {
  position: 'left',
  size: 40,
  hasRadius: false,
  animate: null,
  textSize: 12,
  lineSpacing: 12,
  color: '#efefef',
  width: '100%',
  lastLineWidth: '100%',
  firstLineWidth: '100%'
};

/* eslint-disable react/no-array-index-key */
var styles$2 = reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});

function MultiWords(_ref) {
  var words = _ref.words,
      textSize = _ref.textSize;
  var borderStyle = {
    borderRightWidth: textSize,
    borderRightColor: 'transparent'
  };
  var lastIndex = words.length - 1;
  return React.createElement(reactNative.View, {
    style: styles$2.container
  }, words.map(function (word, index) {
    return React.createElement(reactNative.View, {
      key: index,
      style: [lastIndex !== index && borderStyle, {
        width: word.width
      }]
    }, React.createElement(Line, {
      textSize: textSize,
      color: word.color
    }));
  }));
}

MultiWords.propTypes = {
  words: propTypes.arrayOf(propTypes.shape({
    color: propTypes.string,
    width: propTypes.string.isRequired
  })),
  textSize: propTypes.number
};
MultiWords.defaultProps = {
  words: [],
  textSize: 12
};

/**
 * Export the placeholder
 */

var Placeholder = {
  ImageContent: connect(ImageContent),
  Paragraph: connect(Paragraph),
  MultiWords: connect(MultiWords),
  Media: Media,
  Line: Line,
  Box: Box,
  connect: connect
};

module.exports = Placeholder;
