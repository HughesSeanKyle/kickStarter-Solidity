import React from 'react';
import { Container } from 'semantic-ui-react'; 
import Head from 'next/head';

import Header from './Header';

export default (props) => { // 1.1
    return (
        <Container>
            <Head>
            <link 
                rel="stylesheet" 
                href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" 
            />
            </Head>
            <Header />
                {props.children} 
        </Container>
    );
};

/*
Campaign List will be a child of layout and whatever content we would like to show that has the header included will also be a child of layout and be swapped out depending on what we would like to render. 

React Router has a solution for this issue as well. 

// 1.1
Everything inside the head tag will automatically be moved to the head tag of the html document. 
*/