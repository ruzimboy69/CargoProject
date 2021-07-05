import React, {Component} from 'react';

class SendMessage extends Component {
    render() {
        return (
            <div className="send-message">
                <div className="container">
                    <div className="row justify-content-center">
                        <h1>Bizga yozing</h1>
                        <form className="needs-validation" noValidate>
                            <div className="form-row row justify-content-around">
                                <div className="col-md-3 mb-2">
                                    <input type="text" className="form-control still" id="validationTooltip03"
                                           placeholder="Ism"
                                           required/>
                                    <div className="invalid-tooltip">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div className="col-md-3 mb-2">
                                    <input type="email" className="form-control still" id="validationTooltip04"
                                           placeholder="E-mail"
                                           required/>
                                    <div className="invalid-tooltip">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3 mb-2">
                                    <input type="text" className="form-control still" id="validationTooltip05"
                                           placeholder="Izoh"
                                           required/>
                                    <div className="invalid-tooltip">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-primary btn-still" type="submit">Yuborish</button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default SendMessage;