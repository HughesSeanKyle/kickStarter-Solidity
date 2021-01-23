const routes = require('next-routes')(); // 1.1

routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', 'campaigns/show'); // 1.2

module.exports = routes;

/*
//1.1
Second set of () resturns a function. 

// 1.2
Colon in url indicates that this part of the url will ba a wildcard or variable in nature. 
Second argument indicates what component to route to. 
 */