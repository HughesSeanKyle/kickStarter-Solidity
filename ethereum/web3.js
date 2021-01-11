import Web3 from 'web3';

// Get access to provider given by metamask
const web3 = new Web3(window.web3.currentProvider); // 1


export default web3;

/*
Window is a global variable only available in the browser. Window is  NOT avaialble on node.js which is where server is currently running. 

Next.js runs on server. Window variable is not defined on node server. 

*/