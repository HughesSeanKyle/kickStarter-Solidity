import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: ''
    };

    // 1.1 
    onSubmit = async event => {
        event.preventDefault();

        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minimumContribution).send({
                from: accounts[0]
            });
        } catch (err) {
            this.setState({ errorMessage: err.message });
        };
    };

    render () { // 1.1
        return (
            <Layout>
                <h3>Create a Campaign</h3>

                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                            label="wei" 
                            labelPosition="right" 
                            value={this.state.minimumContribution}
                            onChange={event => this.setState({ minimumContribution: event.target.value })}
                        />
                    </Form.Field>

                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button primary>Create!</Button>
                </Form>
            </Layout>
        );  
    }
}

export default CampaignNew;

/*
//1.1
<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

The reason why error is set to initial state of errorMessage because an empty string is a falsey value and in this case the error message is only displayed if the error message state is truthy. 

// 1.2
error={!!this.state.errorMessage}
First exclamation mark will take this value and flip it into the opposite value as it's boolean form (from falsy to truthy)
Second exclamation mark will will reverse first one's effect. 

example:
!"truthy value"      => false
!!"truthy value"     => true

!!""                 => false
""                   => false/y
!""                  => true/truthy
*/