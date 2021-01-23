'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

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
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    }, 'View campaign')),
                    fluid: true // 3.2
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
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
                        lineNumber: 34
                    }
                }, _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                }, _react2.default.createElement('h3', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                }, _react2.default.createElement(_semanticUiReact.Button, {
                    floated: 'right',
                    content: 'Create Campaign',
                    icon: 'add circle',
                    primary: true,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                }))), this.renderCampaigns()))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFFZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7YUFPRjs7OzBDQUNrQixBQUNkO2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQUU7QUFDaEQ7OzRCQUFPLEFBQ0ssQUFDUjtpREFDSSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3NDQUEzQjt3Q0FBQSxBQUNJO0FBREo7cUJBQUEsa0JBQ0ksY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHVCQUpMLEFBR0MsQUFDSSxBQUdSOzJCQVBHLEFBT0ksS0FQWCxBQUFPLEFBT1MsQUFFbkI7QUFUVSxBQUNIO0FBRlIsQUFBYyxBQVlkLGFBWmM7O2lEQVlQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0YsQUFDTDtBQUFTLG1CQUNMO2dDQUFBLEFBQUM7O2tDQUFEO29DQUFBLEFBQ0k7QUFESjtBQUFBLG1DQUNJLGNBQUE7O2tDQUFBO29DQUFBLEFBQ0k7QUFESjtBQUFBLG1DQUNJLGNBQUE7O2tDQUFBO29DQUFBO0FBQUE7QUFBQSxtQkFESixBQUNJLEFBRUEsbUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7a0NBQVo7b0NBQUEsQUFDSTtBQURKO21DQUNJLGNBQUE7O2tDQUFBO29DQUFBLEFBQ0k7QUFESjtBQUFBLG1DQUNJLEFBQUM7NkJBQUQsQUFDWSxBQUNSOzZCQUZKLEFBRVksQUFDUjswQkFISixBQUdTLEFBQ0w7NkJBSko7O2tDQUFBO29DQUxaLEFBR0ksQUFDSSxBQUNJLEFBU1A7QUFUTztBQUNJLDJCQVJ4QixBQUNJLEFBQ0ksQUFjSyxBQUFLLEFBSXJCOzs7Ozs7Ozs7Ozs7O3VDQTNDMkIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCLEFBQWhCLEFBQXVDOztpQ0FBekQ7QTtpRUFFQyxFQUFFLFcsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBSmE7O0FBZ0Q1QixBQUNBOzs7a0JBQUEsQUFBZTs7QUFFZjs7QUFFQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9LeWxlL0Rlc2t0b3AvQWxsIGRvY3MgbmVlZGVkMjAyMC4xLjQvQmxvY2tjaGFpbiBDb3Vyc2UvU3RlcGhlbl9FdGhlcmV1bS1Xb3Jrc3BhY2UvU2VjdGlvbl82LUtpY2tTdGFydGVyUHJvamVjdCJ9