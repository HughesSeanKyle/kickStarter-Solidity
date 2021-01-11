import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    async componentDidMount() {
        // Return an array of all deployed campaigns. 
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        console.log(campaigns);
    }

    // Dummy JSX to avoid any errors on compilation
    render() {
        return <div>Campaigns Index!</div>
    }
}

// Next.js requires an export of component
export default CampaignIndex;

// Next.js detects this page as the Root Route based on the naming inside the pages direcory. 