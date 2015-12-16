'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _kyperMatter = require('kyper-matter');

var _kyperMatter2 = _interopRequireDefault(_kyperMatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /** Matter Singleton
                                                                                                                                                           */

//Default configuration options
var defaultOptions = {
	logLevel: 'trace'
};

var instance = null;

var MatterInstance = function MatterInstance(appName, options) {
	_classCallCheck(this, MatterInstance);

	if (!instance) {
		instance = new _kyperMatter2.default(appName, options);
	}
	return instance;
};

//Create singleton instance of Matter using project name

exports.default = MatterInstance;