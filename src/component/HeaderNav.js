import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
class HeaderNav extends Component {
    state={
        isOpen:false
    }
    navbarOpen=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    render() {
        const {isOpen}=this.state;
        return (
            <div>
                <Navbar  light expand="lg">
                    <NavbarBrand href="/">OrderCargo</NavbarBrand>
                    <NavbarToggler className={'bg-white'} onClick={this.navbarOpen} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto text-center" navbar>
                            <NavItem>
                                <NavLink href="/components/">Bosh Sahifa</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Imkoniyatlar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Vazifa</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Ta'riflar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Foydalanuvchilar fikri</NavLink>
                            </NavItem>
                        </Nav>
                        <button onClick={this.props.openModal} type={'button'} className={'btn mx-4 d-none d-lg-block '}>UzCargoga kirish</button>
                        <UncontrolledDropdown className={'ml-5 d-none d-lg-block'} >
                            <DropdownToggle className={'text-white '} nav caret>
                                Tilni tanlang
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Uzb
                                </DropdownItem>
                                <DropdownItem>
                                    Rus
                                </DropdownItem>

                                <DropdownItem>
                                    Eng
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default HeaderNav;