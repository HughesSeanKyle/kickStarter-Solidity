const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

// List of accounts that exist on the local ganache network
let accounts;
// Reference to depolyed instance of the factory
let factory;
// To be discussed in futher lectures // 1
let campaignAddress;
let campaign;

beforeEach(async () => {
    // get list of accounts
    accounts = await web3.eth.getAccounts();
    // Create an instance factory contract
    factory = await new web3.eth
                    .Contract(JSON.parse(compiledFactory.interface))
                    .deploy({ data: compiledFactory.bytecode })
                    .send({ from: accounts[0], gas: '1000000' });
});

