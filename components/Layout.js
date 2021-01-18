import React from 'react';
import { Container } from 'semantic-ui-react'; 
import Header from './Header';

export default (props) => {
    return (
        <Container>
            <Header />
                {props.children} 
        </Container>
    );
};

/*
Campaign List will be a child of layout and whatever content we would like to show that has the header included will also be a child of layout and be swapped out depending on what we would like to render. 

React Router has a solution for this issue as well. 
*/