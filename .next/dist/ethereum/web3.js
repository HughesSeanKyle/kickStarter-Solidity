'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Get access to provider given by metamask
var web3 = new _web2.default(window.web3.currentProvider); // 1


exports.default = web3;

/*
Window is a global variable only available in the browser. Window is  NOT avaialble on node.js which is where server is currently running. 

Next.js runs on server. Window variable is not defined on node server. 

*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBO0FBQ0EsSUFBTSxPQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFiLEEsa0JBQW9ELEFBR3BEOzs7a0JBQWUsQUFBZjs7QUFFQSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0t5bGUvRGVza3RvcC9BbGwgZG9jcyBuZWVkZWQyMDIwLjEuNC9CbG9ja2NoYWluIENvdXJzZS9TdGVwaGVuX0V0aGVyZXVtLVdvcmtzcGFjZS9TZWN0aW9uXzYtS2lja1N0YXJ0ZXJQcm9qZWN0In0=