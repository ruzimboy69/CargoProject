import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {AvForm,AvField} from "availity-reactstrap-validation";

class RegistrationPart extends Component {
    state={
        isOpen: true,
        secondOpen: false,
        time: 59
    }
    changeModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    secondModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            secondOpen: !this.state.secondOpen,
        });
        this.countTime();
        this.sendAgain();
    }
    countTime = () => {
        setInterval(this.delay, 1000)
    }
    delay = () => {
        let minute = this.state.time;
        if (minute <= 0) {
            this.state.time = 0 + "0";
        } else {
            minute--;
            this.state.time = minute;
        }
        this.setState({
            time: this.state.time
        })
    }
    sendAgain=()=>{
        this.setState({
            time:59
        })
    }
    render() {
        const {time,secondOpen,isOpen}=this.state;
        return (
            <div className={'RegistrationPart'}>
                <div className={'container'}>
                    {this.props.open ?
                        <Modal isOpen={isOpen} toggle={this.changeModal}>
                            <ModalHeader toggle={() => {
                                this.changeModal();
                            }}></ModalHeader>
                            <ModalBody>
                                <div className={'text-center'}>
                                    <div className={'d-flex  justify-content-around my-5  col-md-4 '}>
                                        <span  style={{width: "50px", height: "3px",paddingRight:"5px", backgroundColor: 'black'}}></span>
                                        <span style={{width: "50px", height: "3px",paddingLeft:"5px", backgroundColor: 'black'}}></span>
                                    </div>
                                    <div className={"my-5 text-center"}>
                                        <h3>Avtorizatsiya</h3>
                                        <p>Telefon raqamingizni kiritng</p>
                                    </div>
                                    <AvForm  className={'d-flex justify-content-center my-5'}>
                                        <AvField  type="select" name="select">
                                            <option>+998</option>
                                            <option>+993</option>
                                            <option>+996</option>
                                            <option>+992</option>
                                            <option>+994</option>
                                        </AvField>
                                        <AvField type="text" name="text"/>
                                    </AvForm>
                                    <p>Telefoningizga xavfsizlik kodi jo'natiladi</p>
                                    <button onClick={this.secondModal} type={'submit'} className={'btn btn-warning p-2 px-4 text-white'}
                                    >Kodni yuborish
                                    </button>
                                </div>
                            </ModalBody>
                        </Modal>
                        :
                        " "
                    }
                    <Modal isOpen={secondOpen} toggle={this.secondModal} >
                        <ModalBody>
                            <div className={'text-center'}>
                                <div className={'d-flex  justify-content-around my-5 col-md-4 '}>
                                    <span  style={{width: "50px", height: "3px",paddingRight:"5px", backgroundColor: 'black'}}></span>
                                    <span style={{width: "50px", height: "3px",paddingLeft:"5px", backgroundColor: 'black'}}></span>
                                </div>
                                <div className={"my-5 text-center"}>
                                    <h3>Avtorizatsiya</h3>
                                    <p>Xavfsizlik kodini kiriting</p>
                                    <p>+998916465729 telefon raqamiga xavfsizlik kodi yuborildi</p>
                                </div>
                                <AvForm  className={'my-5 text-center d-flex justify-content-center'}>
                                    <AvField type="text" name="text"/>
                                </AvForm>
                                <p>Telefoningizga xavfsizlik kodi bormadimi?</p>
                                <button onClick={this.sendAgain} type={'button'} className={'btn text-warning'}>Qayta yuborish</button>
                                <h6 className={'my-4'}>00:00:{time}</h6>
                                <button  type={'submit'} className={'btn btn-warning p-2 px-4 text-white'}
                                >Kirish
                                </button>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default RegistrationPart;