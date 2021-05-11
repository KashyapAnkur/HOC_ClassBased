import React from 'react';

const HOC = InnerComponent => {

    class Inner extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                name: "Ankur Kashyap"
            }
        }

        changeName = (name) => {
            this.setState({
                name: name
            })
        }
    
        render() {
            return (<InnerComponent changeName={this.changeName} state={this.state}/>)
        }   
    }
    return Inner;
}

export default HOC;