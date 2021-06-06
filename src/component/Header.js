import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {AvForm,AvField} from "availity-reactstrap-validation";
class Header extends Component {
    state={
        DropdownOpen:false,
        moveReg:false
    }
    changeBackground=()=>{
        this.setState({
            moveReg:true
        })
    }
    DropdownOpen=()=>{
        this.setState({
            DropdownOpen:!this.state.DropdownOpen
        })
    }
    render() {
        const{DropdownOpen}=this.state;
        return (
            <div>
                <div className={'container'} >
                    <div className={'row'}>
                        <nav className="navbar navbar-expand-md">
                            <a className="navbar-brand" href="#">OrderCargo</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon text-white">fff</span>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav ml-5">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Bosh Sahifa</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Imkoniyatlar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Vazifa</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Ta'riflar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Foydalanuvchilar fikri</a>
                                    </li>
                                </ul>
                            </div>
                            <button onClick={this.props.enter} type={'button'} className={'btn '}>OCargoga kirish</button>
                            <Dropdown isOpen={DropdownOpen} toggle={this.DropdownOpen}>
                                <DropdownToggle>
                                    Tilni tanlang
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Uzb</DropdownItem>
                                    <DropdownItem>Eng</DropdownItem>
                                    <DropdownItem>Rus</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </nav>
                        <h1>Yuk tashishda <br/> daromad oling-<br/>ishonchli jo'natma</h1>
                        <h5>Hozirda O'zbekistonda yuk tashuvchilar <br/> va jo'natuvchilar uchun yagona platforma</h5>
                               <AvForm className={'d-flex justify-content-between my-4  avform'}>
                                   <AvField  type="select" name="select" label="Qayerdan">
                                       <option>Regions</option>
                                       <option>Bukhara</option>
                                       <option>Tashkent</option>
                                       <option>Samarkand</option>
                                       <option>Jizzakh</option>
                                       <option>Navoiy</option>
                                       <option>Sirdaryo</option>
                                       <option>Namangan</option>
                                       <option>Fergana</option>
                                       <option>Andijan</option>
                                       <option>Qashqadaryo</option>
                                       <option>Surkhandaryo</option>
                                       <option>Khorazm</option>
                                       <option>Qoraqalpogiston</option>
                                   </AvField>
                                   <AvField type="select" name="select" label="Qayerga">
                                       <option>Regions</option>
                                       <option>Bukhara</option>
                                       <option>Tashkent</option>
                                       <option>Samarkand</option>
                                       <option>Jizzakh</option>
                                       <option>Navoiy</option>
                                       <option>Sirdaryo</option>
                                       <option>Namangan</option>
                                       <option>Fergana</option>
                                       <option>Andijan</option>
                                       <option>Qashqadaryo</option>
                                       <option>Surkhandaryo</option>
                                       <option>Khorazm</option>
                                       <option>Qoraqalpogiston</option>
                                   </AvField>
                                   <AvField type="number" placeholder="Yuk raqamini kiriting" name="number" label="CMR/TIR/ID"/>
                                   <button type={'submit'} className={'btn mt-4'}>Buyurtma berish</button>
                               </AvForm>

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;