import React, {Component} from 'react';
import Cargo from "./component/Cargo";
import Section1 from "./component/Section1"
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import RegistrationPart from "./component/RegistrationPart";
class App extends Component {
    state={
        openReg:false
    }
    openRegistration=()=>{
        this.setState({
            openReg:!this.state.openReg
        })
    }
    render() {
        const {openReg}=this.state;
        return (
            <div>
                <Cargo open={this.openRegistration}/>
                <Section1/>
                <Section2/>
                <Section3/>
                <RegistrationPart open={openReg}/>
            </div>

        );
    }
}

export default App;