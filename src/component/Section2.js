import React, {Component} from 'react';

class Section2 extends Component {
    render() {
        return (
            <div className={'Section2'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-12 p-4'}>
                            <h1>Har kuni o'nlab kompaniyalar OrderCargo orqali yuk tashuvchilar va jo'natuvchilar bilan muloqot qiladi</h1>
                        </div>
                        <div className={' p-4 d-flex'}>
                            <div className={'col-md-3 text-center'}>
                                <h1>8945</h1>
                                <div></div>
                                <p>2020 yilda bajarilgan <br/> tashuvlar</p>
                            </div>
                            <div className={'col-md-3 text-center'}>
                                <h1>13</h1>
                                <div></div>
                                <p>Hududlar bo'yicha </p>
                            </div>
                            <div className={'col-md-3 text-center'}>
                                <h1>1000$</h1>
                                <div></div>
                                <p>Yuklar o'rtacha narxi</p>
                            </div>
                            <div className={'col-md-3 text-center'}>
                                <h1>256</h1>
                                <div></div>
                                <p>Haydovchilar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section2;