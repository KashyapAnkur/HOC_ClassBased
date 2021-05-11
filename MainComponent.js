import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

class MainComponent extends React.Component{
    render() {
        return (
            <>
                <Component1 />
                <br /><br />
                <Component2 />
            </>
        )
    }
}

export default MainComponent;