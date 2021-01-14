webpackHotUpdate(5,{

/***/ 908:
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

var _semanticUiReact = __webpack_require__(909);

var _factory = __webpack_require__(1206);

var _factory2 = _interopRequireDefault(_factory);

var _Layout = __webpack_require__(1478);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Kyle\\Desktop\\All docs needed2020.1.4\\Blockchain Course\\Stephen_Ethereum-Workspace\\Section_6-KickStarterProject\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',

        // Create card group component
        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {
                // 3.1
                return {
                    header: address,
                    description: _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, 'View campaign'),
                    fluid: true // 3.2
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return (// 2 // 2.1 // 2.2
                _react2.default.createElement(_Layout2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                }, _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                }, _react2.default.createElement('link', {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                }), _react2.default.createElement('h3', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                }, 'Open Campaigns'), this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Button, {
                    content: 'Create Campaign',
                    icon: 'add circle',
                    primary: true,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                })))
            );
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

// 2.1 
The test primary is equivalent to saying primary = {true}.
Add specific styling to button which is indicative of a primary button.  

// 2.2
When the JSX is inside of the Layout tags it is passed in as a property called children

// 3.1
This is an array

// 3.2 
Every card will stretch the entire width of it's container. 

*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUVmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7YUFPRjs7OzBDQUNrQixBQUNkO2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQUU7QUFDaEQ7OzRCQUFPLEFBQ0ssQUFDUjtpREFBYSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEscUJBQUEsRUFGVixBQUVVLEFBQ2I7MkJBSEcsQUFHSSxLQUhYLEFBQU8sQUFHUyxBQUVuQjtBQUxVLEFBQ0g7QUFGUixBQUFjLEFBUWQsYUFSYzs7aURBUVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHRixBQUNMO0FBQVMsbUJBQ0w7Z0NBQUEsQUFBQzs7a0NBQUQ7b0NBQUEsQUFDSTtBQURKO0FBQUEsbUNBQ0ksY0FBQTs7a0NBQUE7b0NBQUEsQUFDSTtBQURKO0FBQUE7eUJBQ0ksQUFDUSxBQUNKOzBCQUZKLEFBRVM7O2tDQUZUO29DQURKLEFBQ0ksQUFJQTtBQUpBO0FBQ0ksb0NBR0osY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQUxKLEFBS0ksQUFDQyx3QkFOTCxBQU1LLEFBQUssQUFDTixtQ0FBQSxBQUFDOzZCQUFELEFBQ1ksQUFDUjswQkFGSixBQUVTLEFBQ0w7NkJBSEo7O2tDQUFBO29DQVRaLEFBQ0ksQUFDSSxBQU9JLEFBUWY7QUFSZTtBQUNJOzs7Ozs7Ozs7Ozs7O3VDQTdCUSxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUIsQUFBaEIsQUFBdUM7O2lDQUF6RDtBO2lFQUVDLEVBQUUsVyxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFKYTs7QUF5QzVCLEFBQ0E7OztrQkFBQSxBQUFlOztBQUVmOztBQUVBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0t5bGUvRGVza3RvcC9BbGwgZG9jcyBuZWVkZWQyMDIwLjEuNC9CbG9ja2NoYWluIENvdXJzZS9TdGVwaGVuX0V0aGVyZXVtLVdvcmtzcGFjZS9TZWN0aW9uXzYtS2lja1N0YXJ0ZXJQcm9qZWN0In0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mMDY3MGY3NDFiM2FhNWNmMjVmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MTQwODNkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7IC8vIDFcclxuICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IGNhbXBhaWducyB9OyAvLyAxLjEgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIGNhcmQgZ3JvdXAgY29tcG9uZW50XHJcbiAgICByZW5kZXJDYW1wYWlnbnMoKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoYWRkcmVzcyA9PiB7IC8vIDMuMVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgY2FtcGFpZ248L2E+LFxyXG4gICAgICAgICAgICAgICAgZmx1aWQ6IHRydWUgLy8gMy4yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKCAvLyAyIC8vIDIuMSAvLyAyLjJcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuNC4xL3NlbWFudGljLm1pbi5jc3NcIiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+T3BlbiBDYW1wYWlnbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhbXBhaWducygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgQ2FtcGFpZ25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBOZXh0LmpzIHJlcXVpcmVzIGFuIGV4cG9ydCBvZiBjb21wb25lbnRcclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcclxuXHJcbi8vIE5leHQuanMgZGV0ZWN0cyB0aGlzIHBhZ2UgYXMgdGhlIFJvb3QgUm91dGUgYmFzZWQgb24gdGhlIG5hbWluZyBpbnNpZGUgdGhlIHBhZ2VzIGRpcmVjb3J5LiBcclxuXHJcbi8qXHJcbi8vIDFcclxuc3RhdGljIC0gZGVmaW5lcyBhIGNsYXNzIGZ1bmN0aW9uLiBGdW5jdGlvbiBub3QgYXNzaWduZWQgdG8gaW5zdGFuY2VzIG9mIHRoZSBjbGFzcyBpbnN0ZWFkIHRoZSBmdW5jdGlvbiBpcyBhc3NpZ25lZCB0byB0aGUgY2xhc3MgaXRzZWxmLiBCYXNpY2FsbHkgc3RhdGljIG1ha2VzIGl0IHBvc3NpYmxlIGZvciB1cyB0byBub3QgaGF2ZSB0byBjcmVhdGUgYW4gaW5zdGFuY2UuICBcclxuXHJcbmdldEluaXRpYWxQcm9wcyAtIElzIGEgbGlmZSBjeWNsZSBtZXRob2QgdGhhdCBpcyBkZWZpbmVkIGV4Y2x1c2l2ZWx5IGFuZCB1c2VkIGV4Y2x1c2l2ZWx5IGJ5IG5leHQuanMgXHJcblxyXG5nZXRJbml0aWFsUHJvcHMgZW5hYmxlcyBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgaW4gYSBwYWdlIGFuZCBhbGxvd3MgeW91IHRvIGRvIGluaXRpYWwgZGF0YSBwb3B1bGF0aW9uLCBpdCBtZWFucyBzZW5kaW5nIHRoZSBwYWdlIHdpdGggdGhlIGRhdGEgYWxyZWFkeSBwb3B1bGF0ZWRcclxuXHJcbi8vIDEuMVxyXG5wcmlvciB0byBlczIwMTUgY29uZGVuc2UgcmVmYWN0b3IgXHJcbiAgICByZXR1cm4geyBjYW1wYWlnbnM6IGNhbXBhaWducyB9O1xyXG5cclxuLy8gMlxyXG5UaGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZCBib3RoIG9uIHRoZSBzZXJ2ZXIgYW5kIG9uY2UgZXZlcnl0aGluZyBsb2FkcyB1cCBpdCBpcyBleGVjdXRlZCBvbiB0aGUgY2xpZW50IHNpZGUgYXMgd2VsbC4gXHJcblxyXG4vLyAyLjEgXHJcblRoZSB0ZXN0IHByaW1hcnkgaXMgZXF1aXZhbGVudCB0byBzYXlpbmcgcHJpbWFyeSA9IHt0cnVlfS5cclxuQWRkIHNwZWNpZmljIHN0eWxpbmcgdG8gYnV0dG9uIHdoaWNoIGlzIGluZGljYXRpdmUgb2YgYSBwcmltYXJ5IGJ1dHRvbi4gIFxyXG5cclxuLy8gMi4yXHJcbldoZW4gdGhlIEpTWCBpcyBpbnNpZGUgb2YgdGhlIExheW91dCB0YWdzIGl0IGlzIHBhc3NlZCBpbiBhcyBhIHByb3BlcnR5IGNhbGxlZCBjaGlsZHJlblxyXG5cclxuLy8gMy4xXHJcblRoaXMgaXMgYW4gYXJyYXlcclxuXHJcbi8vIDMuMiBcclxuRXZlcnkgY2FyZCB3aWxsIHN0cmV0Y2ggdGhlIGVudGlyZSB3aWR0aCBvZiBpdCdzIGNvbnRhaW5lci4gXHJcblxyXG4qL1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7O0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFJQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUhBOztBQUFBO0FBUUE7QUFSQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBN0JBO0FBQ0E7QUFEQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9