import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Tariflar extends Component {
    render() {
        return (
            <div className="tariffs">
                <div className="container">
                    <div className="row text-center">
                        <div className="offset-xxl-3 col-md-12 text-center ">
                            <h1>Tariflar</h1>
                            <span>Har qanday tarifni tanlang va platformadan bir oy davomida tekin foydalaning</span>
                        </div>
                        <div className="row justify-content-around">
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body pb-5">
                                        <h3>30 kun</h3>
                                        <h1>1000₽</h1>
                                        <p>Platformadan to'liq foydalanish</p>
                                    </div>
                                    <div className="card-footer">
                                        <Link to="#">
                                            <button className="btn">Tekin foydalanish</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>90 kun</h3>
                                        <h1>27000₽</h1>
                                        <p>Platformadan to'liq foydalanish</p>
                                        <p>10% chegirma</p>
                                    </div>
                                    <div className="card-footer">
                                        <Link to="#">
                                            <button className="btn ">Tekin foydalanish</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>180 kun</h3>
                                        <h1>51000₽</h1>
                                        <p>Platformadan to'liq foydalanish</p>
                                        <p>15% chegirma</p>
                                    </div>
                                    <div className="card-footer">
                                        <Link to="#">
                                            <button className="btn">Tekin foydalanish</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>360 kun</h3>
                                        <h1>84000₽</h1>
                                        <p>Platformadan to'liq foydalanish</p>
                                        <p>30% chegirma</p>
                                    </div>
                                    <div className="card-footer">
                                        <Link to="#">
                                            <button className="btn">Tekin foydalanish</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Tariflar;