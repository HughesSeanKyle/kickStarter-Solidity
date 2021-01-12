import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    static async getInitialProps() { // 1
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns }; // 1.1 
    }

    render() {
        return <div>{this.props.campaigns[0]}</div> // 2
    }
}

// Next.js requires an export of component
export default CampaignIndex;

// Next.js detects this page as the Root Route based on the naming inside the pages direcory. 

/*
// 1
static - defines a class function. Function not assigned to instances of the class instead the function is assigned to the class itself. Basically static makes it possible for us to not have to create an instance.  

getInitialProps - Is a life cycle method that is defined exclusively and used exclusively by next.js 

getInitialProps enables server-side rendering in a page and allows you to do initial data population, it means sending the page with the data already populated

// 1.1
prior to es2015 condense refactor 
    return { campaigns: campaigns };

// 2
This component is rendered both on the server and once everything loads up it is executed on the client side as well. 
*/