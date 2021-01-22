import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    // 1.1 
    onSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minimumContribution).send({
                from: accounts[0]
            });

            Router.pushRoute('/');
        } catch (err) {
            this.setState({ errorMessage: err.message });
        };

        this.setState({ loading: false });
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
                    <Button loading={this.state.loading} primary>Create!</Button>
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