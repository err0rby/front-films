import React, { useEffect } from 'react';
import Header from '../Header/Header';
import style from './Mainpage.module.css';
import tv from './img/tv.png';
import kids from './img/kids.png';
import device from './img/device.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

const MainPage = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className={style.bgfon}>
                <div className={style.fonf}>
                    <Header />
                    <div className={style.font}>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h4>Watch anywhere. Cancel at any time.</h4>
                        <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
                    </div>
                </div>
            </div>
            <div className={style.mainContent}>
                <div className={style.content}>
                    <div data-aos='fade-right' className={style.contentText}>
                        <h1>Enjoy on your TV.</h1>
                        <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                    </div>
                    <div data-aos='fade-left' className={style.contentImg}>
                        <img src={tv} alt='tv' />
                    </div>
                </div>
                <div className={style.content}>
                    <div data-aos='fade-right' className={style.contentImg}>
                        <img src={kids} alt='tv' />
                    </div>
                    <div data-aos='fade-left' className={style.contentText}>
                        <h1>Create profiles for children.</h1>
                        <h3>Send children on adventures with their favourite characters in a space made just for them – free with your membership.</h3>
                    </div>
                </div>
                <div className={style.content}>
                    <div data-aos='fade-right' className={style.contentText}>
                        <h1>Watch everywhere.</h1>
                        <h3>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.</h3>
                    </div>
                    <div data-aos='fade-left' className={style.contentImg}>
                        <img src={device} alt='tv' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;