'use strict';

var routes = require('next-routes')(); // 1.1

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', 'campaigns/show'); // 1.2

module.exports = routes;

/*
//1.1
Second set of () resturns a function. 

// 1.2
Colon in url indicates that this part of the url will ba a wildcard or variable in nature. 
Second argument indicates what component to route to. 
 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZixBLDBCQUF5Qzs7QUFFekMsT0FDSyxBQURMLElBQ1MsQUFEVCxrQkFDMkIsQUFEM0Isa0JBRUssQUFGTCxJQUVTLEFBRlQsdUJBRWdDLEFBRmhDLEEsbUJBRW1EOztBQUVuRCxPQUFPLEFBQVAsVUFBaUIsQUFBakI7O0FBRUEiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0t5bGUvRGVza3RvcC9BbGwgZG9jcyBuZWVkZWQyMDIwLjEuNC9CbG9ja2NoYWluIENvdXJzZS9TdGVwaGVuX0V0aGVyZXVtLVdvcmtzcGFjZS9TZWN0aW9uXzYtS2lja1N0YXJ0ZXJQcm9qZWN0In0=