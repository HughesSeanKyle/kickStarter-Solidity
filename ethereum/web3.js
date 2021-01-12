import Web3 from 'web3';

import keys from '../config/keys';

// Reassign below variable
let web3; 

if (typeof window !== 'undefined'&& window.web3 !== 'undefined') { // 2 
    // We are in the browser and metamask is running
    // 'Hijack' metamask provider and assign to web3 variable above
    web3 = new Web3(window.web3.currentProvider);
} else { // 3
    // We are on the server *OR* the user is not running metmask
    const provider = new Web3.providers.HttpProvider(
        keys.InfuraLinkRinkeby 
    );
    web3 = new Web3(provider);
}



export default web3;

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