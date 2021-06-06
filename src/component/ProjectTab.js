import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Canvas from "./Canvas";
class ProjectTab extends Component {
    state={
        activeTab:'1'
    };
    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        })
    };
    render() {
        const {activeTab,clean}=this.state;
        return (
           <div className={'d-flex justify-content-lg-center'}>
               <div className="col-md-12">
                   <Nav tabs className={'col-md-12'}>
                       <NavItem>
                           <NavLink
                               onClick={() => { this.changeTab('1'); }}
                           >
                               File
                           </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink
                               onClick={() => { this.changeTab('2'); }}
                           >
                               Home
                           </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink
                               onClick={() => { this.changeTab('3'); }}
                           >
                               Insert
                           </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink
                               onClick={() => { this.changeTab('4'); }}
                           >
                               Graphics
                           </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink
                               onClick={() => { this.changeTab('5'); }}
                           >
                               References
                           </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink
                               onClick={() => { this.changeTab('6'); }}
                           >
                               Mailings
                           </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink
                               onClick={() => { this.changeTab('7'); }}
                           >
                               Review
                           </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink
                               onClick={() => { this.changeTab('8'); }}
                           >
                               View
                           </NavLink>
                       </NavItem>
                   </Nav>
                   <TabContent activeTab={activeTab}>
                       <TabPane tabId="1">
                           <Row>
                               <Col>

                               </Col>
                           </Row>
                       </TabPane>
                       <TabPane tabId="2">
                           <Row>
                               <Col>
                                   <Card body>
                                       <CardTitle>Special Title Treatment</CardTitle>
                                       <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                       <Button>Go somewhere</Button>
                                   </Card>
                               </Col>
                           </Row>
                       </TabPane>
                       <TabPane tabId="3">
                           <Row>
                               <Col>
                                   dfvdfv
                               </Col>
                           </Row>
                       </TabPane>
                       <TabPane tabId="4">
                           <Row>
                               <Col>

                                       <Canvas clean={this.cleanCanvas}/>

                               </Col>
                           </Row>
                       </TabPane>
                   </TabContent>
               </div>
           </div>
        );
    }
}

export default ProjectTab;