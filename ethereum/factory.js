import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// Create contract instance that 
// refers to specific address that contract is  deployed to
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    '0x6E4eEDc44E755567f4a1B9B9fb131F2eF4F54Bdb'
);

export default instance;
