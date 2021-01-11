import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// Create contract instance that 
// refers to specific address that contract is  deployed to
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    '0x89C2555d4A0f0d5F85af7c34e267C3B46351893D'
);

export default instance;
