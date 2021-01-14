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
                            lineNumber: 18
                        }
                    }, 'View campaign'),
                    fluid: true // 3.2
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Button, {
                content: 'Create Campaign',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            })) // 2 // 2.1
            ;
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

// 3.1
This is an array

// 3.2 
Every card will stretch the entire width of it's container. 

*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUVmLEFBQU8sQUFBYTs7Ozs7Ozs7O0ksQUFFZDs7Ozs7Ozs7OzthQU9GOzs7MENBQ2tCLEFBQ2Q7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVcsQUFBRTtBQUNoRDs7NEJBQU8sQUFDSyxBQUNSO2lEQUFhLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSxxQkFBQSxFQUZWLEFBRVUsQUFDYjsyQkFIRyxBQUdJLEtBSFgsQUFBTyxBQUdTLEFBRW5CO0FBTFUsQUFDSDtBQUZSLEFBQWMsQUFRZCxhQVJjOztpREFRUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUdGLEFBQ0w7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSwwQ0FDVSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0Qjs4QkFBNUI7Z0NBREosQUFDSSxBQUNDO0FBREQ7cUJBREosQUFFSyxBQUFLLEFBQ04sbUNBQUEsQUFBQzt5QkFBRCxBQUNZLEFBQ1I7c0JBRkosQUFFUyxBQUNMO3lCQUhKOzs4QkFBQTtnQ0FKUixBQUNJLEFBR0k7QUFBQTtBQUNJLGdCQUxaLEFBU1csQUFFZDs7Ozs7Ozs7Ozs7Ozt1Q0E5QjJCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QixBQUFoQixBQUF1Qzs7aUNBQXpEO0E7aUVBRUMsRUFBRSxXLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQUphOztBQW1DNUIsQUFDQTs7O2tCQUFBLEFBQWU7O0FBRWY7O0FBRUEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvS3lsZS9EZXNrdG9wL0FsbCBkb2NzIG5lZWRlZDIwMjAuMS40L0Jsb2NrY2hhaW4gQ291cnNlL1N0ZXBoZW5fRXRoZXJldW0tV29ya3NwYWNlL1NlY3Rpb25fNi1LaWNrU3RhcnRlclByb2plY3QifQ==