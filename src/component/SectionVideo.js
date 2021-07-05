import React from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import './videocontent.css';
export default function SectionVideo() {
    return (
        <div className="section-video container">
            <div className="text-center">
                <h1>Video platforma</h1>
                <span className="text1">Platformadan foydalanish oson boʻlishi uchun bir nechta videodarsliklarni joyladik</span>
                <Tabs>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 ">
                            <TabPanel>
                                <div className="panel-content">
                                    <iframe width="100%" height="450px" src="https://www.youtube.com/embed/jZgAkT_Tyr8"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="panel-content">
                                    <iframe width="100%" height="450px" src="https://www.youtube.com/embed/ggpBjDaPABs"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="panel-content">
                                    <iframe width="100%" height="450px" src="https://www.youtube.com/embed/bKuXZEd8pto"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="panel-content">
                                    <iframe width="100%" height="450px" src="https://www.youtube.com/embed/6UOhlxeIHpM"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="panel-content">
                                    <iframe width="100%" height="450px" src="https://www.youtube.com/embed/GY7XtWeK96M"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                            </TabPanel>
                        </div>

                        <div className="col-lg-3 col-scroll">
                            <div className="header">
                                <span className="icon video"></span>
                                <span>5 video</span>
                            </div>
                            <TabList>
                                <Tab>
                                    <div className="d-flex">
                                        <div className="number">1</div>
                                        <div className="text">Поиск груза, настройка фильтров</div>
                                        <div className="time">1:00</div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="d-flex">
                                        <div className="number">2</div>
                                        <div className="text">Добавление сотрудников, заполнение
                                            данных о транспорте</div>
                                        <div className="time">2:00</div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="d-flex">
                                        <div className="number">3</div>
                                        <div className="text">Регистрация, добавление груза</div>
                                        <div className="time">3:00</div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="d-flex">
                                        <div className="number">4</div>
                                        <div className="text">Регистрация с номерами +77</div>
                                        <div className="time">4:00</div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="d-flex">
                                        <div className="number">5</div>
                                        <div className="text">Конференция с дальнобойщиками
                                            Узбекистана от 12 июня</div>
                                        <div className="time">5:00</div>
                                    </div>
                                </Tab>
                            </TabList>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}

