import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
    state = {
        minimumContribution: ''
    };

    // 1.1 
    onSubmit = async (event) => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();
        await factory.methods
            .createCampaign(this.state.minimumContribution) // 1.2
            .send({
                from: accounts[0]
            });
    };

    render () {
        return (
            <Layout>
                <h3>Create a Campaign</h3>

                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                            label="wei" 
                            labelPosition="right" 
                            value={this.state.minimumContribution}
                            onChange={event => this.setState({ minimumContribution: event.target.value })}
                        />
                    </Form.Field>

                    <Button primary>Create!</Button>
                </Form>
            </Layout>
        );  
    }
}

export default CampaignNew;

/*
//1.1
By default the browser will try to submit the form to a backend server. In this case we want to avoid the default behaviour.

Whenever a function is called on a contract it will always be asynchronous in nature. 

// 1.2
When callin the createCampaign function in the browser we do not have to specify the gas amount as metmask will automatically calculate the gas. 
*/