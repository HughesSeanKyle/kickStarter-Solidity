'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _keys = require('../config/keys');

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