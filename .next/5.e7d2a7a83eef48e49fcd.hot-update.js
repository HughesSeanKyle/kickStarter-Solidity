webpackHotUpdate(5,{

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(566);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Kyle\\Desktop\\All docs needed2020.1.4\\Blockchain Course\\Stephen_Ethereum-Workspace\\Section_6-KickStarterProject\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, this.props.campaigns[0]); // 2
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

// Next.js requires an export of component


exports.default = CampaignIndex;

// Next.js detects this page as the Root Route based on the naming inside the pages direcory. 

/*
// 1
static - defines a class function. Function not assigned to instances of the class instead the function is assigned to the class itself. Basically static makes it possible for us to not have to create an instance.  

getInitialProps - Is a life cycle method that is defined exclusively and used exclusively by next.js 

getInitialProps enables server-side rendering in a page and allows you to do initial data population, it means sending the page with the data already populated

// 1.1
prior to es2015 condense refactor 
    return { campaigns: campaigns };

// 2
This component is rendered both on the server and once everything loads up it is executed on the client side as well. 
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYW1wYWlnbkluZGV4IiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7Ozs7Ozs7O0ksQUFFZDs7Ozs7Ozs7Ozs7aUNBT08sQUFDTDttQ0FBTyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFNO0FBQU47QUFBQSxhQUFBLE9BQU0sQUFBSyxNQUFMLEFBQVcsVUFEbkIsQUFDTCxBQUFPLEFBQU0sQUFBcUIsS0FBVSxBQUMvQzs7Ozs7Ozs7Ozs7O3VDQVAyQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUIsQUFBaEIsQUFBdUM7O2lDQUF6RDtBO2lFQUVDLEVBQUUsVyxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFKYTs7QUFZNUIsQUFDQTs7O2tCQUFBLEFBQWU7O0FBRWY7O0FBRUEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvS3lsZS9EZXNrdG9wL0FsbCBkb2NzIG5lZWRlZDIwMjAuMS40L0Jsb2NrY2hhaW4gQ291cnNlL1N0ZXBoZW5fRXRoZXJldW0tV29ya3NwYWNlL1NlY3Rpb25fNi1LaWNrU3RhcnRlclByb2plY3QifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Kyle\\Desktop\\All docs needed2020.1.4\\Blockchain Course\\Stephen_Ethereum-Workspace\\Section_6-KickStarterProject\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Kyle\\Desktop\\All docs needed2020.1.4\\Blockchain Course\\Stephen_Ethereum-Workspace\\Section_6-KickStarterProject\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lN2QyYTdhODNlZWY0OGU0OWZjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/OTMxY2Q1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuXHJcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHsgLy8gMVxyXG4gICAgICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgY2FtcGFpZ25zIH07IC8vIDEuMSBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+e3RoaXMucHJvcHMuY2FtcGFpZ25zWzBdfTwvZGl2PiAvLyAyXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE5leHQuanMgcmVxdWlyZXMgYW4gZXhwb3J0IG9mIGNvbXBvbmVudFxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4O1xyXG5cclxuLy8gTmV4dC5qcyBkZXRlY3RzIHRoaXMgcGFnZSBhcyB0aGUgUm9vdCBSb3V0ZSBiYXNlZCBvbiB0aGUgbmFtaW5nIGluc2lkZSB0aGUgcGFnZXMgZGlyZWNvcnkuIFxyXG5cclxuLypcclxuLy8gMVxyXG5zdGF0aWMgLSBkZWZpbmVzIGEgY2xhc3MgZnVuY3Rpb24uIEZ1bmN0aW9uIG5vdCBhc3NpZ25lZCB0byBpbnN0YW5jZXMgb2YgdGhlIGNsYXNzIGluc3RlYWQgdGhlIGZ1bmN0aW9uIGlzIGFzc2lnbmVkIHRvIHRoZSBjbGFzcyBpdHNlbGYuIEJhc2ljYWxseSBzdGF0aWMgbWFrZXMgaXQgcG9zc2libGUgZm9yIHVzIHRvIG5vdCBoYXZlIHRvIGNyZWF0ZSBhbiBpbnN0YW5jZS4gIFxyXG5cclxuZ2V0SW5pdGlhbFByb3BzIC0gSXMgYSBsaWZlIGN5Y2xlIG1ldGhvZCB0aGF0IGlzIGRlZmluZWQgZXhjbHVzaXZlbHkgYW5kIHVzZWQgZXhjbHVzaXZlbHkgYnkgbmV4dC5qcyBcclxuXHJcbmdldEluaXRpYWxQcm9wcyBlbmFibGVzIHNlcnZlci1zaWRlIHJlbmRlcmluZyBpbiBhIHBhZ2UgYW5kIGFsbG93cyB5b3UgdG8gZG8gaW5pdGlhbCBkYXRhIHBvcHVsYXRpb24sIGl0IG1lYW5zIHNlbmRpbmcgdGhlIHBhZ2Ugd2l0aCB0aGUgZGF0YSBhbHJlYWR5IHBvcHVsYXRlZFxyXG5cclxuLy8gMS4xXHJcbnByaW9yIHRvIGVzMjAxNSBjb25kZW5zZSByZWZhY3RvciBcclxuICAgIHJldHVybiB7IGNhbXBhaWduczogY2FtcGFpZ25zIH07XHJcblxyXG4vLyAyXHJcblRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkIGJvdGggb24gdGhlIHNlcnZlciBhbmQgb25jZSBldmVyeXRoaW5nIGxvYWRzIHVwIGl0IGlzIGV4ZWN1dGVkIG9uIHRoZSBjbGllbnQgc2lkZSBhcyB3ZWxsLiBcclxuKi9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUFOQTtBQUNBO0FBREE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==