import React, {Component} from 'react';
import Header from "./Header";

class Cargo extends Component {
    render() {
        return (
            <div className={'container-fluid header'}>
                <Header enter={this.props.open}/>
            </div>
        );
    }
}

export default Cargo;