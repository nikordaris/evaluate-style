import _ from 'lodash';

function evaluateProp(prop, data) {
  return _.isFunction(prop) ? prop(data) : prop;
}

export default function evaluateStyle(style, data) {
  if (style && (_.isFunction(style) || !_.isObject(style))) {
    return evaluateProp(style, data);
  }
  if (!style || !Object.keys(style).some((value) => _.isFunction(style[value]) || _.isObject(style[value]))) {
    return style;
  }
  return Object.keys(style).reduce((prev, curr) => {
    prev[curr] = evaluateStyle(style[curr], data);
    return prev;
  }, {});
}
