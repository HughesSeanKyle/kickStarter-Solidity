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
let campaignAddress;    // 1.1
let campaign;           // 1.2          

// Code to run before each assertion check
beforeEach(async () => {
    // get list of accounts
    accounts = await web3.eth.getAccounts();
    // Create an instance factory contract  // 4
    factory = await new web3.eth
                    .Contract(JSON.parse(compiledFactory.interface))
                    .deploy({ data: compiledFactory.bytecode })
                    .send({ from: accounts[0], gas: '1000000' });

    // Call createCampaign function on factory (From smart contract). // 2
    // Create a campaign 
    await factory.methods.createCampaign('100').send({ // 2.1
        from: accounts[0],
        gas: '1000000'
    });

    // Return address of deployed campaign  // 3
    const addresses = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = addresses[0];

    // Create JS representative of the campaign contract using web3 // 4
    campaign = await new web3.eth
                    .Contract(JSON.parse(compiledCampaign.interface), 
                    campaignAddress
    );
});


describe('Campaigns', () => {
    // Assert that the factory and campaign contracts have been deployed
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });
    // Assert that person calling campaign shoul be marked as manager
    it('marks caller as the campaign manager', async () => {
        const manager = await campaign.methods.manager().call(); // 5
        assert.equal(accounts[0], manager); // 5.1
    });
    // Assert that people can donate money to campaign &
    // donor gets marked as an approver/contributer
    it('Allows people to contribute moey and marks them as approvers', async () => {
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1] // 6
        });
        const isContributer = await campaign.methods.approvers(accounts[1]).call(); // 6.1 
        assert(isContributer); // 6.2
    });
});


/*
// 1
// 1.1 & 1.2
Purpose of campaign test file is to eventually test campaigns
We will use the factory to create a campaign and assign it to the campaign variable. It will be more useful to create test that lean more toward testing the campaigns itself than testing the factory as that is ultiately the goal of this app - to create secure/robust campaigns.
    - So in short we will use factory to create a campaign once for the beforeEach block
    - Assign the deployed campaign information to the campaign variable
    - Assign the address received to the campaignAddress variable. 

// 2
First arg to createCampaign is in wei => More specifically 100 Wei  
    - More discussion in later lectures on why it is in string format.

// 2.1
100 represents the minimum contribution value (IN WEI)

// 3
 Since we are not changing any data we will use call method and opposed to using send() method.
 This entire line / Call will return an array of addresses for all deployed campaigns

 ES2016 alternative - destructuring an array
 [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

 Above code is saying that we want to take the first element out of the array that is returned by the getDeployedCampaign method and assign it to the campaignAddress variable
 The square brackets indicated to JS that the information returning form this call will be in the form of an array. 

 If there were say two items in the array the line of code will look like this: 
 [campaignAddressOne, campaignAddressTwo] = await factory.methods.getDeployedCampaigns().call();

//  4
The first form of the factory contract deployment has no address specified and the second deployment of the campaign has an address. 

The reason there is no address in the factory deployment is because we want to deploy a NEW contract. However, if we have already deployed the contract and we want to instruct web3 about it's existence that is where we pass in the interface as the first argument and pass in address of the already deployed version as the second argument. (campaign deployment).  

// 5
Whenever a public variable is made inside the contract a get method is automatically created. The mananger variable was automatically created for us because we had marked the manager variable as being public. 

// 5.1
assert.equal(accounts[0], manager);
Args
First - What we want it to be, what we hope it to be
Second - What it actually is. 

// 6
Note that accounts[0], accounts[1] - These are from the 10 accounts provided by ganache

// 6.1
approvers = function that allows us to access mapping with list of contributers/approvers
.call() - Note this is a data lookup - does not modify contract therefore no gas cost. 

// 6.2
Assert will fail if falsy value passed in. If isContributor === true then test will pass.
*/

