import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

import factory from '../ethereum/factory';
import Layout from '../components/Layout';

class CampaignIndex extends Component {
    static async getInitialProps() { // 1
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns }; // 1.1 
    }

    // Create card group component
    renderCampaigns() {
        const items = this.props.campaigns.map(address => { // 3.1
            return {
                header: address,
                description: <a>View campaign</a>,
                fluid: true // 3.2
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return ( // 2 // 2.1 // 2.2
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    
                    <Button 
                        floated="right"
                        content="Create Campaign"
                        icon="add circle"
                        primary
                    />
                    
                    {this.renderCampaigns()}
                </div> 
            </Layout>
        );
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

// 2.1 
The test primary is equivalent to saying primary = {true}.
Add specific styling to button which is indicative of a primary button.  

// 2.2
When the JSX is inside of the Layout tags it is passed in as a property called children

// 3.1
This is an array

// 3.2 
Every card will stretch the entire width of it's container. 

*/