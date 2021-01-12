webpackHotUpdate(5,{

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = __webpack_require__(568);

var _web2 = _interopRequireDefault(_web);

var _keys = __webpack_require__(837);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Reassign below variable
var web3 = void 0;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
    // 2 
    // We are in the browser and metamask is running
    // 'Hijack' metamask provider and assign to web3 variable above
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // 3
    // We are on the server *OR* the user is not running metmask
    var provider = new _web2.default.providers.HttpProvider(_keys2.default.InfuraLinkRinkeby);
    web3 = new _web2.default(provider);
}

exports.default = web3;

/*
// 1
const web3 = new Web3(window.web3.currentProvider); 

Window is a global variable only available in the browser. Window is  NOT avaialble on node.js which is where server is currently running. 

Next.js runs on server. Window variable is not defined on node server. 

// 2
We can use the type of operator to see if a variable is defined 
typeof window = if window is defined and code is run inside browser a string should return "object". In node this is undefined for reasons mensioned above. 

if (typeof window !== 'undefined') - This line is checking to see if we are running code on the server or on the browser

If this line does not return undefined then that must mean we are in the browser. /

window.web3 !== 'undefined' - Check to see if  metamask has already injected web3

// 3
We will set up own provider that works through infura and then use that as the provider for our web3 instance 
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJrZXlzIiwid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiSW5mdXJhTGlua1JpbmtlYnkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7OztBQUVBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7Ozs7O0FBRUE7QUFDQSxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBZ0MsT0FBTyxBQUFQLFNBQWdCLEFBQXBELGFBQWlFLEFBQUU7QUFDL0Q7QUFDQTtBQUNBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDSDtBQUpELE9BSU8sQUFBRTtBQUNMO0FBQ0E7UUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDYixlQUFLLEFBRFEsQUFBakIsQUFHQTtXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSDtBQUlEOztrQkFBZSxBQUFmOztBQUVBIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvS3lsZS9EZXNrdG9wL0FsbCBkb2NzIG5lZWRlZDIwMjAuMS40L0Jsb2NrY2hhaW4gQ291cnNlL1N0ZXBoZW5fRXRoZXJldW0tV29ya3NwYWNlL1NlY3Rpb25fNi1LaWNrU3RhcnRlclByb2plY3QifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Kyle\\Desktop\\All docs needed2020.1.4\\Blockchain Course\\Stephen_Ethereum-Workspace\\Section_6-KickStarterProject\\ethereum\\web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Kyle\\Desktop\\All docs needed2020.1.4\\Blockchain Course\\Stephen_Ethereum-Workspace\\Section_6-KickStarterProject\\ethereum\\web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mNTgyY2UxMGZiMjA5OTc2YTVjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz8zODRkMTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5cclxuaW1wb3J0IGtleXMgZnJvbSAnLi4vY29uZmlnL2tleXMnO1xyXG5cclxuLy8gUmVhc3NpZ24gYmVsb3cgdmFyaWFibGVcclxubGV0IHdlYjM7IFxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnJiYgd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSB7IC8vIDIgXHJcbiAgICAvLyBXZSBhcmUgaW4gdGhlIGJyb3dzZXIgYW5kIG1ldGFtYXNrIGlzIHJ1bm5pbmdcclxuICAgIC8vICdIaWphY2snIG1ldGFtYXNrIHByb3ZpZGVyIGFuZCBhc3NpZ24gdG8gd2ViMyB2YXJpYWJsZSBhYm92ZVxyXG4gICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XHJcbn0gZWxzZSB7IC8vIDNcclxuICAgIC8vIFdlIGFyZSBvbiB0aGUgc2VydmVyICpPUiogdGhlIHVzZXIgaXMgbm90IHJ1bm5pbmcgbWV0bWFza1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxyXG4gICAgICAgIGtleXMuSW5mdXJhTGlua1JpbmtlYnkgXHJcbiAgICApO1xyXG4gICAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xyXG5cclxuLypcclxuLy8gMVxyXG5jb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTsgXHJcblxyXG5XaW5kb3cgaXMgYSBnbG9iYWwgdmFyaWFibGUgb25seSBhdmFpbGFibGUgaW4gdGhlIGJyb3dzZXIuIFdpbmRvdyBpcyAgTk9UIGF2YWlhbGJsZSBvbiBub2RlLmpzIHdoaWNoIGlzIHdoZXJlIHNlcnZlciBpcyBjdXJyZW50bHkgcnVubmluZy4gXHJcblxyXG5OZXh0LmpzIHJ1bnMgb24gc2VydmVyLiBXaW5kb3cgdmFyaWFibGUgaXMgbm90IGRlZmluZWQgb24gbm9kZSBzZXJ2ZXIuIFxyXG5cclxuLy8gMlxyXG5XZSBjYW4gdXNlIHRoZSB0eXBlIG9mIG9wZXJhdG9yIHRvIHNlZSBpZiBhIHZhcmlhYmxlIGlzIGRlZmluZWQgXHJcbnR5cGVvZiB3aW5kb3cgPSBpZiB3aW5kb3cgaXMgZGVmaW5lZCBhbmQgY29kZSBpcyBydW4gaW5zaWRlIGJyb3dzZXIgYSBzdHJpbmcgc2hvdWxkIHJldHVybiBcIm9iamVjdFwiLiBJbiBub2RlIHRoaXMgaXMgdW5kZWZpbmVkIGZvciByZWFzb25zIG1lbnNpb25lZCBhYm92ZS4gXHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIC0gVGhpcyBsaW5lIGlzIGNoZWNraW5nIHRvIHNlZSBpZiB3ZSBhcmUgcnVubmluZyBjb2RlIG9uIHRoZSBzZXJ2ZXIgb3Igb24gdGhlIGJyb3dzZXJcclxuXHJcbklmIHRoaXMgbGluZSBkb2VzIG5vdCByZXR1cm4gdW5kZWZpbmVkIHRoZW4gdGhhdCBtdXN0IG1lYW4gd2UgYXJlIGluIHRoZSBicm93c2VyLiAvXHJcblxyXG53aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcgLSBDaGVjayB0byBzZWUgaWYgIG1ldGFtYXNrIGhhcyBhbHJlYWR5IGluamVjdGVkIHdlYjNcclxuXHJcbi8vIDNcclxuV2Ugd2lsbCBzZXQgdXAgb3duIHByb3ZpZGVyIHRoYXQgd29ya3MgdGhyb3VnaCBpbmZ1cmEgYW5kIHRoZW4gdXNlIHRoYXQgYXMgdGhlIHByb3ZpZGVyIGZvciBvdXIgd2ViMyBpbnN0YW5jZSBcclxuKi9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ldGhlcmV1bS93ZWIzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUdBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=