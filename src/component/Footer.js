import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ul>
                                <h4>MENYU</h4>
                                <li>ASOSIY</li>
                                <li>IMKONIYATLAR</li>
                                <li>VAZIFA</li>
                                <li>TARIFLAR</li>
                                <li>FOYDALANUVCHILAR FIKRI</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul>
                                <h4>QO'LLAB QUVVATLASH</h4>
                                <li>TELEFON ORQALI QO'LLASH</li>
                                <li>BIZGA YOZING</li>
                                <li>WHATSAPP ORQALI YOZING</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul>
                                <h4>MA'LUMOT</h4>
                                <li>SIR SAQLASH SIYOSATI</li>
                                <li>OFERTA-SHARTNOMASI</li>
                                <li>KOMPANIYA REKVIZITLARI</li>
                                <li>8 916 385 88 88 <br/>
                                    PR@SCARGOS.COM
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4>YANGILIKLARGA A'ZO BO'LISH</h4>
                            <form className="d-flex position-relative">
                                <input type="text" className="form-control" placeholder="E-mail"/>
                                <button type="submit" className="btn send-btn"><span className="icon send"></span>
                                </button>
                            </form>
                            <div className="social">
                                <span className="icon telegram"></span>
                                <span className="icon instagram"></span>
                                <span className="icon facebook"></span>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-between">
                                <div className="col-lg-3"><p>© 2021 | SCARGOS | Все права защищены</p></div>
                                <div className="col-lg-3 pad"><p>Made with love for great people!</p></div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;