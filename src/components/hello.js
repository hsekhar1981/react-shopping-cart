import React, {Component} from 'react';

class Hello extends Component {
    
    render() {
        return <div>Hello, {this.props.firstName} {this.props.lastName}</div>;

    }

}

export default Hello;