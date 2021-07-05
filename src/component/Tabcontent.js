import React from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import './tabcontent.css';


export default function Tabcontent() {
    return (
        <div className="tabcontent container">
            <div className="text-center">
                <h1>Ilovani telefoningizga saqlashni unutmang</h1>
                <Tabs>
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <TabList>
                                <Tab>
                                    <div className="tab-content"><p>app.scorgos.com manziliga chrome da kiring</p></div>
                                </Tab>
                                <Tab>
                                    <div className="tab-content"><p>Brauzerning pastki qismida ish stoli yorlig'ini
                                        qo'shishingiz mumkin</p></div>

                                </Tab>
                                <Tab>
                                    <div className="tab-content"><p>Bosamiz, saqlaydi va ish stoliga yorliq qo'yishni
                                        taklif qiladi</p></div>
                                </Tab>
                            </TabList>
                        </div>

                        <div className="col-lg-3">
                            <TabPanel>
                                <div className="panel-content">
                                    <img className="w-100" src="/images/img.png" alt="img1"/>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="panel-content">
                                    <img className="w-100" src="/images/img_1.png" alt="img2"/>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="panel-content">
                                    <img className="w-100" src="/images/img_2.png" alt="img3"/>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}


