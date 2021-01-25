import React, { Component } from 'react';
import Layout from '../../components/Layout';

class CampaignShow extends Component {
    static async getInitialProps(props) { // 1.1
        console.log(props.query.address);
        
        return {};
    }
    render() {
        return (
            <Layout>
                <h3>Campaign Show</h3>
            </Layout>
        );
    }
};

export default CampaignShow;

/*
// 1.1
Static means a property that belongs to class only but not for it's instances. Earlier in React we used to define propTypes and defaultProps outside the class by using following syntax : ... Now we are defining it inside the class itself using static keyword here
[https://stackoverflow.com/questions/53796729/what-is-static-doing-in-react#:~:text=2%20Answers&text=Static%20means%20a%20property%20that,but%20not%20for%20it's%20instances.&text=Earlier%20in%20React%20we%20used,class%20by%20using%20following%20syntax%20%3A&text=Now%20we%20are%20defining%20it,itself%20using%20static%20keyword%20here.]

This is a separate props object than the one that ends up inside of our actual component instance. 
*/