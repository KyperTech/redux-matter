'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actions = exports.Reducers = undefined;
exports.createMiddleware = createMiddleware;
exports.createMatter = createMatter;
exports.getMatter = getMatter;

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _matter = require('./matter');

var _matter2 = _interopRequireDefault(_matter);

var _reducers = require('./reducers');

var _Reducers = _interopRequireWildcard(_reducers);

var _actions = require('./actions');

var _Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Matter Singleton
 */

var matter = undefined;
function createMiddleware(matterName, matterOptions) {
  //Create singleton instance of Matter using provided project name and options
  matter = new _matter2.default(matterName, matterOptions);
  //Return middleware (which imports the new matter instance)
  return _middleware2.default;
}
//Create new matter instance
function createMatter(matterName, matterOptions) {
  //TODO: Handle being passed a matter instance
  return matter = new _matter2.default(matterName, matterOptions);
}
//Export matter instance
function getMatter() {
  return matter;
}

exports.Reducers = _Reducers;
exports.Actions = _Actions;