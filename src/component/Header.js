import React, {Component} from 'react';
import {AvForm,AvField} from "availity-reactstrap-validation";
import HeaderNav from "./HeaderNav";
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
                        <HeaderNav openModal={this.props.enter}/>
                        <h1>Yuk tashishda <br/> daromad oling-<br/>ishonchli jo'natma</h1>
                        <h5 className={'d-none d-md-block'}>Hozirda O'zbekistonda yuk tashuvchilar <br/> va jo'natuvchilar uchun yagona platforma</h5>
                               <AvForm className={'d-none d-md-flex justify-content-between my-4  avform'}>
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
                        <button type={'button'} className={'btn btn-block  py-2 my-4 d-block d-md-none '}>Tekin Foydalanish</button>

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;