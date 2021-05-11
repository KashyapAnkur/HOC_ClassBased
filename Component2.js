import React,{createRef} from 'react';
import HOC from './HOC';

class Component2 extends React.Component{
    
    constructor(props) {
        super(props);
    }

    nameref = createRef();

    render() {
        return (
            <>
                {this.props.state.name}
                <br />
                <input type="text" placeholder="Enter name to change in HOC" ref={this.nameref} />
                <button onClick={() => this.props.changeName(this.nameref.current.value)}>Change Name</button>
            </>
        )
    }
}

export default HOC(Component2);