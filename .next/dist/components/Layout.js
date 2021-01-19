'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Kyle\\Desktop\\All docs needed2020.1.4\\Blockchain Course\\Stephen_Ethereum-Workspace\\Section_6-KickStarterProject\\components\\Layout.js';

exports.default = function (props) {
    // 1.1
    return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), props.children);
};

/*
Campaign List will be a child of layout and whatever content we would like to show that has the header included will also be a child of layout and be swapped out depending on what we would like to render. 

React Router has a solution for this issue as well. 

// 1.1
Everything inside the head tag will automatically be moved to the head tag of the html document. 
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIkhlYWQiLCJIZWFkZXIiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFZLEFBRW5COzs7Ozs7OztrQkFBZSxVQUFBLEFBQUMsT0FBVSxBQUFFO0FBQ3hCOzJCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDQTtBQURBO0FBQUE7YUFDQSxBQUNRLEFBQ0o7Y0FGSixBQUVTOztzQkFGVDt3QkFGSixBQUNJLEFBQ0EsQUFLQTtBQUxBO0FBQ0kseUJBSUosQUFBQzs7c0JBQUQ7d0JBUEosQUFPSSxBQUNLO0FBREw7QUFBQSxjQVJSLEFBQ0ksQUFRZSxBQUd0QjtBQWJEOztBQWVBIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9LeWxlL0Rlc2t0b3AvQWxsIGRvY3MgbmVlZGVkMjAyMC4xLjQvQmxvY2tjaGFpbiBDb3Vyc2UvU3RlcGhlbl9FdGhlcmV1bS1Xb3Jrc3BhY2UvU2VjdGlvbl82LUtpY2tTdGFydGVyUHJvamVjdCJ9