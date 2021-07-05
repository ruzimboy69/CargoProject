import React, {Component} from 'react';
import {AvForm,AvField} from "availity-reactstrap-validation";

class Section1 extends Component {
    render() {
        return (
            <div className={'Section3 '}>
                <div className={'container my-5'}>
                    <div className={'row'}>
                        <div className={'col-md-12  mb-4 '}>
                            <h1>Platforma qanday ishlaydi</h1>
                           <div className={'d-none d-lg-flex justify-content-center'}>
                               <button className={'btn'}>Yuk jo'natuvchi</button>
                               <button className={'btn'}>Haydovchi</button>
                           </div>
                            <AvForm className={'AvForm d-block d-lg-none my-5 px-5'}>
                                <AvField  type="select" name="select" className={"AvField"} >
                                    <option>Yuk jo'natuvchi</option>
                                    <option>Haydovchi</option>
                                </AvField>
                            </AvForm>
                            <p>PLatforma logistlar,haydovchilar,dispetcherlar tomonidan yaratilgan biz  imkoniyatlar va ish qurollar kengaytirish ustida doim ishlaymiz </p>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-4">
                            <div className="mainbox">
                                    <img className="image-card" src=" images/instruct.jpg" alt="Group-1"/>
                                    <div className="text">
                                        <p>Tizimga haydovchi bo'lib kiramz</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-4">
                            <div className="mainbox">
                                <img className="image-card" src=" images/instruct.jpg" alt="Group-1"/>
                                <div className="text">
                                    <p>Ma'qul buyurtmani tanlaymiz</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-4">
                            <div className="mainbox">
                                <img className="image-card" src=" images/instruct.jpg" alt="Group-1"/>
                                <div className="text">
                                    <p>Buyurtmani bajaramiz va to'lovni qabul qilamz</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-4">
                            <div className="mainbox">
                                <img className="image-card" src=" images/instruct.jpg" alt="Group-1"/>
                                <div className="text">
                                    <p>Jarayonimizni kuzatamiz</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-4">
                            <div className="mainbox">
                                <img className="image-card" src=" images/instruct.jpg" alt="Group-1"/>
                                <div className="text">
                                    <p>Tizimga jo'natuvchi bo'lib kiramiz</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-4">
                            <div className="mainbox">
                                <img className="image-card" src=" images/instruct.jpg" alt="Group-1"/>
                                <div className="text">
                                    <p>Jo'natmani kiritamiz</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-4">
                            <div className="mainbox">
                                <img className="image-card" src=" images/instruct.jpg" alt="Group-1"/>
                                <div className="text">
                                    <p>Transportni tanlaymiz</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-4">
                            <div className="mainbox">
                                <img className="image-card" src=" images/instruct.jpg" alt="Group-1"/>
                                <div className="text">
                                    <p>Buyurtmani bajarilishini kuzatamiz</p>
                                </div>
                            </div>
                        </div>
                       <div className={'col-md-12'}>
                           <button className={'btn btn-block signUp'}>Ro'yhatdan o'tish</button>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section1;