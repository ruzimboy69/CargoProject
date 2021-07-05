import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Cargo from "./component/Cargo";
import Section1 from "./component/Section1"
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import RegistrationPart from "./component/RegistrationPart";
import Tabcontent from "./component/Tabcontent";
import SectionVideo from "./component/SectionVideo";
import SendMessage from "./component/SendMessage";
import Tariflar from "./component/Tariflar";
import Footer from "./component/Footer";
import Section4 from "./component/Section4";
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
                <Router>
                    <Switch>
                        <Route>
                            <Cargo open={this.openRegistration}/>
                            <Section1/>
                            <Section2/>
                            <Section3/>
                            <Section4/>
                            <RegistrationPart open={openReg}/>
                            <Tariflar/>
                            <SendMessage/>
                            <SectionVideo/>
                            <Tabcontent/>
                        </Route>
                    </Switch>
                    <Footer/>
                </Router>
            </div>

        );
    }
}

export default App;