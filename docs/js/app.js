/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _styles = __webpack_require__(/*! ../css/styles.scss */ 1);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _trackers = __webpack_require__(/*! ./trackers */ 5);
	
	var _trackers2 = _interopRequireDefault(_trackers);
	
	var _eventTrackers = __webpack_require__(/*! ./event-trackers */ 7);
	
	var _eventTrackers2 = _interopRequireDefault(_eventTrackers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Import trackers
	window.onload = function (f) {
		_eventTrackers2.default.init();
	}; // Grab styles

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../~/css-loader!../../~/sass-loader!../../~/postcss-loader!./styles.scss */ 2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../~/style-loader/addStyles.js */ 4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!../../node_modules/postcss-loader/index.js!./styles.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!../../node_modules/postcss-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/*!*******************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./~/postcss-loader!./src/css/styles.scss ***!
  \*******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto:300);", ""]);
	
	// module
	exports.push([module.id, "/* Font */\n/* grid */\n.flow-text {\n  font-weight: 300; }\n  @media only screen and (min-width: 360px) {\n    .flow-text {\n      font-size: 1rem;\n      line-height: 1.7rem; } }\n  @media only screen and (min-width: 369.8px) {\n    .flow-text {\n      font-size: 1.002rem;\n      line-height: 1.7034rem; } }\n  @media only screen and (min-width: 379.6px) {\n    .flow-text {\n      font-size: 1.004rem;\n      line-height: 1.7068rem; } }\n  @media only screen and (min-width: 389.4px) {\n    .flow-text {\n      font-size: 1.006rem;\n      line-height: 1.7102rem; } }\n  @media only screen and (min-width: 399.2px) {\n    .flow-text {\n      font-size: 1.008rem;\n      line-height: 1.7136rem; } }\n  @media only screen and (min-width: 409px) {\n    .flow-text {\n      font-size: 1.01rem;\n      line-height: 1.717rem; } }\n  @media only screen and (min-width: 418.8px) {\n    .flow-text {\n      font-size: 1.012rem;\n      line-height: 1.7204rem; } }\n  @media only screen and (min-width: 428.6px) {\n    .flow-text {\n      font-size: 1.014rem;\n      line-height: 1.7238rem; } }\n  @media only screen and (min-width: 438.4px) {\n    .flow-text {\n      font-size: 1.016rem;\n      line-height: 1.7272rem; } }\n  @media only screen and (min-width: 448.2px) {\n    .flow-text {\n      font-size: 1.018rem;\n      line-height: 1.7306rem; } }\n  @media only screen and (min-width: 458px) {\n    .flow-text {\n      font-size: 1.02rem;\n      line-height: 1.734rem; } }\n  @media only screen and (min-width: 467.8px) {\n    .flow-text {\n      font-size: 1.022rem;\n      line-height: 1.7374rem; } }\n  @media only screen and (min-width: 477.6px) {\n    .flow-text {\n      font-size: 1.024rem;\n      line-height: 1.7408rem; } }\n  @media only screen and (min-width: 487.4px) {\n    .flow-text {\n      font-size: 1.026rem;\n      line-height: 1.7442rem; } }\n  @media only screen and (min-width: 497.2px) {\n    .flow-text {\n      font-size: 1.028rem;\n      line-height: 1.7476rem; } }\n  @media only screen and (min-width: 507px) {\n    .flow-text {\n      font-size: 1.03rem;\n      line-height: 1.751rem; } }\n  @media only screen and (min-width: 516.8px) {\n    .flow-text {\n      font-size: 1.032rem;\n      line-height: 1.7544rem; } }\n  @media only screen and (min-width: 526.6px) {\n    .flow-text {\n      font-size: 1.034rem;\n      line-height: 1.7578rem; } }\n  @media only screen and (min-width: 536.4px) {\n    .flow-text {\n      font-size: 1.036rem;\n      line-height: 1.7612rem; } }\n  @media only screen and (min-width: 546.2px) {\n    .flow-text {\n      font-size: 1.038rem;\n      line-height: 1.7646rem; } }\n  @media only screen and (min-width: 556px) {\n    .flow-text {\n      font-size: 1.04rem;\n      line-height: 1.768rem; } }\n  @media only screen and (min-width: 565.8px) {\n    .flow-text {\n      font-size: 1.042rem;\n      line-height: 1.7714rem; } }\n  @media only screen and (min-width: 575.6px) {\n    .flow-text {\n      font-size: 1.044rem;\n      line-height: 1.7748rem; } }\n  @media only screen and (min-width: 585.4px) {\n    .flow-text {\n      font-size: 1.046rem;\n      line-height: 1.7782rem; } }\n  @media only screen and (min-width: 595.2px) {\n    .flow-text {\n      font-size: 1.048rem;\n      line-height: 1.7816rem; } }\n  @media only screen and (min-width: 605px) {\n    .flow-text {\n      font-size: 1.05rem;\n      line-height: 1.785rem; } }\n  @media only screen and (min-width: 614.8px) {\n    .flow-text {\n      font-size: 1.052rem;\n      line-height: 1.7884rem; } }\n  @media only screen and (min-width: 624.6px) {\n    .flow-text {\n      font-size: 1.054rem;\n      line-height: 1.7918rem; } }\n  @media only screen and (min-width: 634.4px) {\n    .flow-text {\n      font-size: 1.056rem;\n      line-height: 1.7952rem; } }\n  @media only screen and (min-width: 644.2px) {\n    .flow-text {\n      font-size: 1.058rem;\n      line-height: 1.7986rem; } }\n  @media only screen and (min-width: 654px) {\n    .flow-text {\n      font-size: 1.06rem;\n      line-height: 1.802rem; } }\n  @media only screen and (min-width: 663.8px) {\n    .flow-text {\n      font-size: 1.062rem;\n      line-height: 1.8054rem; } }\n  @media only screen and (min-width: 673.6px) {\n    .flow-text {\n      font-size: 1.064rem;\n      line-height: 1.8088rem; } }\n  @media only screen and (min-width: 683.4px) {\n    .flow-text {\n      font-size: 1.066rem;\n      line-height: 1.8122rem; } }\n  @media only screen and (min-width: 693.2px) {\n    .flow-text {\n      font-size: 1.068rem;\n      line-height: 1.8156rem; } }\n  @media only screen and (min-width: 703px) {\n    .flow-text {\n      font-size: 1.07rem;\n      line-height: 1.819rem; } }\n  @media only screen and (min-width: 712.8px) {\n    .flow-text {\n      font-size: 1.072rem;\n      line-height: 1.8224rem; } }\n  @media only screen and (min-width: 722.6px) {\n    .flow-text {\n      font-size: 1.074rem;\n      line-height: 1.8258rem; } }\n  @media only screen and (min-width: 732.4px) {\n    .flow-text {\n      font-size: 1.076rem;\n      line-height: 1.8292rem; } }\n  @media only screen and (min-width: 742.2px) {\n    .flow-text {\n      font-size: 1.078rem;\n      line-height: 1.8326rem; } }\n  @media only screen and (min-width: 752px) {\n    .flow-text {\n      font-size: 1.08rem;\n      line-height: 1.836rem; } }\n  @media only screen and (max-width: 360px) {\n    .flow-text {\n      font-size: 1.2rem; } }\n\n.container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 99%; }\n\n@media only screen and (min-width: 601px) {\n  .container {\n    width: 85%; } }\n\n@media only screen and (min-width: 993px) {\n  .container {\n    width: 70%; } }\n\n.section {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n  .section.no-pad {\n    padding: 0; }\n  .section.no-pad-bot {\n    padding-bottom: 0; }\n  .section.no-pad-top {\n    padding-top: 0; }\n\n.row {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px; }\n  .row:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row .col {\n    float: left;\n    box-sizing: border-box;\n    padding: 0 0.75rem;\n    min-height: 1px; }\n    .row .col[class*=\"push-\"], .row .col[class*=\"pull-\"] {\n      position: relative; }\n    .row .col.s1 {\n      width: 8.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s2 {\n      width: 16.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s3 {\n      width: 25%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s4 {\n      width: 33.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s5 {\n      width: 41.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s6 {\n      width: 50%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s7 {\n      width: 58.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s8 {\n      width: 66.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s9 {\n      width: 75%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s10 {\n      width: 83.33333%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s11 {\n      width: 91.66667%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s12 {\n      width: 100%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.offset-s1 {\n      margin-left: 8.33333%; }\n    .row .col.pull-s1 {\n      right: 8.33333%; }\n    .row .col.push-s1 {\n      left: 8.33333%; }\n    .row .col.offset-s2 {\n      margin-left: 16.66667%; }\n    .row .col.pull-s2 {\n      right: 16.66667%; }\n    .row .col.push-s2 {\n      left: 16.66667%; }\n    .row .col.offset-s3 {\n      margin-left: 25%; }\n    .row .col.pull-s3 {\n      right: 25%; }\n    .row .col.push-s3 {\n      left: 25%; }\n    .row .col.offset-s4 {\n      margin-left: 33.33333%; }\n    .row .col.pull-s4 {\n      right: 33.33333%; }\n    .row .col.push-s4 {\n      left: 33.33333%; }\n    .row .col.offset-s5 {\n      margin-left: 41.66667%; }\n    .row .col.pull-s5 {\n      right: 41.66667%; }\n    .row .col.push-s5 {\n      left: 41.66667%; }\n    .row .col.offset-s6 {\n      margin-left: 50%; }\n    .row .col.pull-s6 {\n      right: 50%; }\n    .row .col.push-s6 {\n      left: 50%; }\n    .row .col.offset-s7 {\n      margin-left: 58.33333%; }\n    .row .col.pull-s7 {\n      right: 58.33333%; }\n    .row .col.push-s7 {\n      left: 58.33333%; }\n    .row .col.offset-s8 {\n      margin-left: 66.66667%; }\n    .row .col.pull-s8 {\n      right: 66.66667%; }\n    .row .col.push-s8 {\n      left: 66.66667%; }\n    .row .col.offset-s9 {\n      margin-left: 75%; }\n    .row .col.pull-s9 {\n      right: 75%; }\n    .row .col.push-s9 {\n      left: 75%; }\n    .row .col.offset-s10 {\n      margin-left: 83.33333%; }\n    .row .col.pull-s10 {\n      right: 83.33333%; }\n    .row .col.push-s10 {\n      left: 83.33333%; }\n    .row .col.offset-s11 {\n      margin-left: 91.66667%; }\n    .row .col.pull-s11 {\n      right: 91.66667%; }\n    .row .col.push-s11 {\n      left: 91.66667%; }\n    .row .col.offset-s12 {\n      margin-left: 100%; }\n    .row .col.pull-s12 {\n      right: 100%; }\n    .row .col.push-s12 {\n      left: 100%; }\n    @media only screen and (min-width: 601px) {\n      .row .col.m1 {\n        width: 8.33333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m2 {\n        width: 16.66667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m3 {\n        width: 25%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m4 {\n        width: 33.33333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m5 {\n        width: 41.66667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m6 {\n        width: 50%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m7 {\n        width: 58.33333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m8 {\n        width: 66.66667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m9 {\n        width: 75%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m10 {\n        width: 83.33333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m11 {\n        width: 91.66667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m12 {\n        width: 100%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.offset-m1 {\n        margin-left: 8.33333%; }\n      .row .col.pull-m1 {\n        right: 8.33333%; }\n      .row .col.push-m1 {\n        left: 8.33333%; }\n      .row .col.offset-m2 {\n        margin-left: 16.66667%; }\n      .row .col.pull-m2 {\n        right: 16.66667%; }\n      .row .col.push-m2 {\n        left: 16.66667%; }\n      .row .col.offset-m3 {\n        margin-left: 25%; }\n      .row .col.pull-m3 {\n        right: 25%; }\n      .row .col.push-m3 {\n        left: 25%; }\n      .row .col.offset-m4 {\n        margin-left: 33.33333%; }\n      .row .col.pull-m4 {\n        right: 33.33333%; }\n      .row .col.push-m4 {\n        left: 33.33333%; }\n      .row .col.offset-m5 {\n        margin-left: 41.66667%; }\n      .row .col.pull-m5 {\n        right: 41.66667%; }\n      .row .col.push-m5 {\n        left: 41.66667%; }\n      .row .col.offset-m6 {\n        margin-left: 50%; }\n      .row .col.pull-m6 {\n        right: 50%; }\n      .row .col.push-m6 {\n        left: 50%; }\n      .row .col.offset-m7 {\n        margin-left: 58.33333%; }\n      .row .col.pull-m7 {\n        right: 58.33333%; }\n      .row .col.push-m7 {\n        left: 58.33333%; }\n      .row .col.offset-m8 {\n        margin-left: 66.66667%; }\n      .row .col.pull-m8 {\n        right: 66.66667%; }\n      .row .col.push-m8 {\n        left: 66.66667%; }\n      .row .col.offset-m9 {\n        margin-left: 75%; }\n      .row .col.pull-m9 {\n        right: 75%; }\n      .row .col.push-m9 {\n        left: 75%; }\n      .row .col.offset-m10 {\n        margin-left: 83.33333%; }\n      .row .col.pull-m10 {\n        right: 83.33333%; }\n      .row .col.push-m10 {\n        left: 83.33333%; }\n      .row .col.offset-m11 {\n        margin-left: 91.66667%; }\n      .row .col.pull-m11 {\n        right: 91.66667%; }\n      .row .col.push-m11 {\n        left: 91.66667%; }\n      .row .col.offset-m12 {\n        margin-left: 100%; }\n      .row .col.pull-m12 {\n        right: 100%; }\n      .row .col.push-m12 {\n        left: 100%; } }\n    @media only screen and (min-width: 993px) {\n      .row .col.l1 {\n        width: 8.33333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l2 {\n        width: 16.66667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l3 {\n        width: 25%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l4 {\n        width: 33.33333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l5 {\n        width: 41.66667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l6 {\n        width: 50%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l7 {\n        width: 58.33333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l8 {\n        width: 66.66667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l9 {\n        width: 75%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l10 {\n        width: 83.33333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l11 {\n        width: 91.66667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l12 {\n        width: 100%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.offset-l1 {\n        margin-left: 8.33333%; }\n      .row .col.pull-l1 {\n        right: 8.33333%; }\n      .row .col.push-l1 {\n        left: 8.33333%; }\n      .row .col.offset-l2 {\n        margin-left: 16.66667%; }\n      .row .col.pull-l2 {\n        right: 16.66667%; }\n      .row .col.push-l2 {\n        left: 16.66667%; }\n      .row .col.offset-l3 {\n        margin-left: 25%; }\n      .row .col.pull-l3 {\n        right: 25%; }\n      .row .col.push-l3 {\n        left: 25%; }\n      .row .col.offset-l4 {\n        margin-left: 33.33333%; }\n      .row .col.pull-l4 {\n        right: 33.33333%; }\n      .row .col.push-l4 {\n        left: 33.33333%; }\n      .row .col.offset-l5 {\n        margin-left: 41.66667%; }\n      .row .col.pull-l5 {\n        right: 41.66667%; }\n      .row .col.push-l5 {\n        left: 41.66667%; }\n      .row .col.offset-l6 {\n        margin-left: 50%; }\n      .row .col.pull-l6 {\n        right: 50%; }\n      .row .col.push-l6 {\n        left: 50%; }\n      .row .col.offset-l7 {\n        margin-left: 58.33333%; }\n      .row .col.pull-l7 {\n        right: 58.33333%; }\n      .row .col.push-l7 {\n        left: 58.33333%; }\n      .row .col.offset-l8 {\n        margin-left: 66.66667%; }\n      .row .col.pull-l8 {\n        right: 66.66667%; }\n      .row .col.push-l8 {\n        left: 66.66667%; }\n      .row .col.offset-l9 {\n        margin-left: 75%; }\n      .row .col.pull-l9 {\n        right: 75%; }\n      .row .col.push-l9 {\n        left: 75%; }\n      .row .col.offset-l10 {\n        margin-left: 83.33333%; }\n      .row .col.pull-l10 {\n        right: 83.33333%; }\n      .row .col.push-l10 {\n        left: 83.33333%; }\n      .row .col.offset-l11 {\n        margin-left: 91.66667%; }\n      .row .col.pull-l11 {\n        right: 91.66667%; }\n      .row .col.push-l11 {\n        left: 91.66667%; }\n      .row .col.offset-l12 {\n        margin-left: 100%; }\n      .row .col.pull-l12 {\n        right: 100%; }\n      .row .col.push-l12 {\n        left: 100%; } }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  display: flex;\n  min-height: 100vh;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  background: #efefef;\n  background: #e3f2fd; }\n\nmain {\n  flex: 1 0 auto;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n  main #thebox {\n    padding: 20px;\n    width: 100%; }\n    main #thebox h1 {\n      text-align: center;\n      margin-bottom: 80px; }\n    main #thebox #subform {\n      margin-top: 15px; }\n    main #thebox #signup input {\n      padding: 10px;\n      border: 0;\n      margin: 5px 0;\n      text-align: center; }\n    main #thebox #signup input[type=\"submit\"] {\n      background-color: #4caf50;\n      color: white;\n      font-size: 20px; }\n    main #thebox #signup input[type=\"checkbox\"] {\n      margin-right: 10px; }\n  main .whiteback {\n    background: rgba(255, 255, 255, 0.5); }\n\n#footer {\n  text-align: center;\n  padding: 10px;\n  opacity: 0.6;\n  font-size: 13px; }\n", ""]);
	
	// exports


/***/ }),
/* 3 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ (function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ }),
/* 4 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 5 */
/*!****************************!*\
  !*** ./src/js/trackers.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.GoogleAnalytics = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _universalGa = __webpack_require__(/*! universal-ga */ 6);
	
	var _universalGa2 = _interopRequireDefault(_universalGa);
	
	var _config = __webpack_require__(/*! ../../modules/config */ 8);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Initialize Google Analytics
	_universalGa2.default.initialize(_config2.default.track.ga);
	var debug = false;
	
	var GoogleAnalytics = exports.GoogleAnalytics = function () {
		function GoogleAnalytics() {
			_classCallCheck(this, GoogleAnalytics);
	
			if (debug) console.log('Visitor tracker constructor');
			if (debug) console.log('Submitting visitor tracking data');
			_universalGa2.default.pageview(window.location.pathname ? window.location.pathname : '/');
			_universalGa2.default.plugin('displayfeatures');
		}
	
		_createClass(GoogleAnalytics, [{
			key: 'event',
			value: function event(category, action, label) {
				_universalGa2.default.event(category, action, {
					eventLabel: label
				});
			}
		}]);
	
		return GoogleAnalytics;
	}();
	
	exports.default = new GoogleAnalytics();

/***/ }),
/* 6 */
/*!*****************************************!*\
  !*** ./~/universal-ga/lib/analytics.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * universal-ga v1.1.0
	 * https://github.com/daxko/universal-ga 
	 *
	 * Copyright (c) 2017 Daxko
	 * MIT License
	 */
	
	(function (global) {
	  'use strict';
	
	  function warn(s) {
	    console.warn('[analytics]', s);
	  }
	
	  function _set() {
	    var args = [],
	        length = arguments.length,
	        i = 0;
	
	    for (; i < length; i++) {
	      args.push(arguments[i]);
	    }
	
	    while (typeof args[args.length - 1] === 'undefined') {
	      args.pop();
	    }
	
	    /* jshint validthis: true */
	    if (this._namespace) {
	      args[0] = this._namespace + '.' + args[0];
	      this._namespace = null;
	    }
	
	    if (window && typeof window.ga === 'function') {
	      window.ga.apply(undefined, args);
	    }
	  }
	
	  var Analytics = function Analytics() {
	    return this;
	  };
	
	  Analytics.prototype = {
	
	    initialize: function initialize(trackingID, options) {
	      var src = 'https://www.google-analytics.com/';
	
	      if ((typeof trackingID === 'undefined' ? 'undefined' : _typeof(trackingID)) === 'object') {
	        options = trackingID;
	      }
	
	      options = options || {};
	
	      if (options.debug) {
	        src += 'analytics_debug.js';
	        delete options.debug;
	      } else {
	        src += 'analytics.js';
	      }
	
	      /* jshint ignore:start */
	      (function (i, s, o, g, r, a, m) {
	        i['GoogleAnalyticsObject'] = r;
	        i[r] = i[r] || function () {
	          (i[r].q = i[r].q || []).push(arguments);
	        }, i[r].l = 1 * new Date();
	        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
	        a.async = 1;
	        a.src = g;
	        m.parentNode.insertBefore(a, m);
	      })(window, document, 'script', src, 'ga');
	      /* jshint ignore:end */
	
	      if (trackingID) {
	        options = JSON.stringify(options) === "{}" ? undefined : options;
	        this.create(trackingID, options);
	      }
	    },
	
	    create: function create(trackingID, options) {
	      if (!trackingID) {
	        warn('tracking id is required to initialize.');
	        return;
	      }
	
	      _set.call(this, 'create', trackingID, 'auto', options);
	    },
	
	    name: function name(_name) {
	      var self = new Analytics();
	      self._namespace = _name;
	      return self;
	    },
	
	    set: function set(key, value) {
	      if (!key || !key.length) {
	        warn('set: `key` is required.');
	        return;
	      }
	
	      _set.call(this, 'set', key, value);
	
	      return this;
	    },
	
	    plugin: function plugin(name, options) {
	      if (!name || !name.length) {
	        warn('plugin: `name` is required.');
	        return;
	      }
	
	      _set.call(this, 'require', name, options);
	
	      return this;
	    },
	
	    // https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
	    pageview: function pageview(path, options) {
	      _set.call(this, 'send', 'pageview', path, options);
	
	      return this;
	    },
	
	    // https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
	    screenview: function screenview(screenName, options) {
	      if (!screenName) {
	        warn('screenview: `screenName` is required.');
	        return;
	      }
	
	      options = options || {};
	      options.screenName = screenName;
	      _set.call(this, 'send', 'screenview', options);
	
	      return this;
	    },
	
	    // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
	    event: function event(category, action, options) {
	      if (!category || !action) {
	        warn('event: both `category` and `action` are required.');
	        return;
	      }
	
	      if (options && typeof options.eventValue !== 'undefined' && typeof options.eventValue !== 'number') {
	        warn('event: expected `options.eventValue` to be a Number.');
	        options.eventValue = undefined;
	      }
	
	      if (options && options.nonInteraction && typeof options.nonInteraction !== 'boolean') {
	        warn('event: expected `options.nonInteraction` to be a boolean.');
	        options.nonInteraction = false;
	      }
	
	      _set.call(this, 'send', 'event', category, action, options);
	
	      return this;
	    },
	
	    // https://developers.google.com/analytics/devguides/collection/analyticsjs/user-timings
	    timing: function timing(timingCategory, timingVar, timingValue, options) {
	      if (!timingCategory || !timingVar || typeof timingValue === 'undefined') {
	        warn('timing: `timingCategory`, `timingVar`, and `timingValue` are required.');
	      } else if (typeof timingValue !== 'number') {
	        warn('event: expected `timingValue` to be a Number.');
	      } else {
	        _set.call(this, 'send', 'timing', timingCategory, timingVar, timingValue, options);
	      }
	
	      return this;
	    },
	
	    // https://developers.google.com/analytics/devguides/collection/analyticsjs/exceptions
	    exception: function exception(message, isFatal) {
	      _set.call(this, 'send', 'exception', {
	        exDescription: message,
	        exFatal: !!isFatal
	      });
	
	      return this;
	    },
	
	    // https://developers.google.com/analytics/devguides/collection/analyticsjs/custom-dims-mets
	    custom: function custom(key, value) {
	      if (!/(dimension|metric)[0-9]+/i.test(key)) {
	        warn('custom: key must match dimension[0-9]+ or metric[0-9]+');
	        return;
	      }
	
	      _set.call(this, 'set', key, value);
	
	      return this;
	    }
	
	  };
	
	  var ua = new Analytics();
	  /* istanbul ignore next */
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return ua;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
	    module.exports = ua;
	  } else {
	    global.analytics = ua;
	  }
	})(undefined);

/***/ }),
/* 7 */
/*!**********************************!*\
  !*** ./src/js/event-trackers.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _trackers = __webpack_require__(/*! ./trackers */ 5);
	
	var _trackers2 = _interopRequireDefault(_trackers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Events = function () {
		function Events() {
			_classCallCheck(this, Events);
		}
	
		_createClass(Events, [{
			key: 'monthlymentor',
	
			// Track monthly mentor signups thorugh the page
			value: function monthlymentor() {
				if (document.getElementById('monthlymentorpage')) document.getElementById('monthlymentorpage').addEventListener('submit', function (f) {
					_trackers2.default.event('Benefits', 'Signup', 'Fivebf');
				});
			}
		}, {
			key: 'init',
			value: function init() {
				// this.monthlymentor( )
			}
		}]);
	
		return Events;
	}();
	
	exports.default = new Events();

/***/ }),
/* 8 */
/*!***************************!*\
  !*** ./modules/config.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname, process) {"use strict";
	
	module.exports = {
		// Identity variables used in pug templates
		identity: {
			title: "Website",
			desc: "Description of website",
			"logo": "logo.jpg"
		},
		// System vars managing some pug elements as well as file paths
		system: {
			public: __dirname + '/../docs/',
			source: __dirname + '/../src/',
			url: process.env.local ? 'http://localhost:3000/' : 'https://www.liveurl.com',
			gverification: undefined,
			year: new Date().getFullYear()
		},
		// About the author. Change this to your own unless you went me to get credit for your page of course... <3
		author: {
			firstname: "Mentor",
			lastname: "Palokaj",
			email: "mentor@palokaj.co",
			twitter: "@actuallymentor",
			// facebook profile id, used for retargeting ad permissions
			facebook: "1299359953416544",
			url: "https://www.skillcollector.com/"
		},
		// Tracking codes
		track: {
			ga: "UA-XXXXXXXX-XX"
		}
	};
	/* WEBPACK VAR INJECTION */}.call(exports, "/", __webpack_require__(/*! ./../~/process/browser.js */ 9)))

/***/ }),
/* 9 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ (function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) {
	    return [];
	};
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map