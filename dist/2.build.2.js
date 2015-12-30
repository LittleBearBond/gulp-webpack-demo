webpackJsonp([2,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    template: __webpack_require__(11),
	    replace: true,
	    data: function() {
	        return {
	            firstname: 'little',
	            lastname: 'bear'
	        }
	    },
	    computed: {
	        fullname: function() {
	            return this.firstname + this.lastname
	        }
	    },
	    components: {
	        'app-com1': __webpack_require__(12),
	        'app-com2': __webpack_require__(16)
	    }
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"alert alert-warning\">\n  <strong>Warning!</strong>\n  <app-com1 :firstname=\"firstname\"  :lastname=\"lastname\"></app-com1>\n  <app-com2 :fullname=\"fullname\"></app-com2>\n</div>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);

	module.exports = {
	    template: __webpack_require__(15),
	    props: ['firstname', 'lastname']
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<h1>{{firstname}}---{{lastname}}</h1>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(17);

	module.exports = {
	    template: __webpack_require__(19),
	    props: ['fullname']
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".alert-danger-com {\n  line-height: 50px;\n  font-size: 30px; }\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div class=\"alert alert-danger alert-danger-com\">{{fullname}}</div>\n";

/***/ }
]);