import React from 'react';

export default (props) => {
    return (
        <div>
            <h1>I am a Header</h1>
                {props.children}
            <h1>I am a Footer</h1>
        </div>
    );
};

/*
Campaign List will be a child of layout and whatever content we would like to show that has the header included will also be a child of layout and be swapped out depending on what we would like to render. 

React Router has a solution for this issue as well. 
*/