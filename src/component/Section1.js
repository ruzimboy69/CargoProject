import React, {Component} from 'react';

class Section1 extends Component {
    render() {
        return (
            <div className={'Section1 py-5'}>
                <div className={'container my-5'}>
                    <div className={'row'}>
                        <div className={'col-md-12 mb-4'}>
                            <h1>Platforma imkoniyatlari</h1>
                            <p>Kompaniya bilan yagona ilovada ishlang</p>
                        </div>
                        <div className={'d-flex my-5'}>
                            <div className={'col-md-4 px-4'}>
                                <h3>Yuk va transportni  qidiirsh</h3>
                                <p>O'zbekiston bo'ylab yuk joylashtiring,<br/>jo'nating,toping </p>
                            </div>
                            <div className={'col-md-4 px-4'}>
                                <h3>Cheksiz chatlarni <br/> unuting</h3>
                                <p>Barcha ma'lumotlar bir joyda,yo'nalishni sarala,haydovchilarni tanla </p>
                            </div>
                            <div className={'col-md-4 px-4'}>
                                <h3>Offlayn rejimda <br/>ishlaydi</h3>
                                <p>Internet yo'q yoki aloqa yomonmi-muammo  emas platformadan foydalanishni davom ettir </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section1;