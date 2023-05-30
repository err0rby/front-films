import React, { useEffect } from 'react';
import Header from '../Header/Header';
import style from './Mainpage.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Slider from './Slider';
import sroki from './image/sroki.jpg';
import L22 from './image/L22.jpg';
import L12 from './image/L12.jpg';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainPage = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Header />
            <div className={style.homeImg}>
                <Slider />
                <div className={style.textAbove}>
                    Реши проблему с нами
                </div>
                <div className={style.buttonsHome}>
                    <Link to='/workers' className={style.buttonAbout}>О нас</Link>
                    {/* <Link to='/service' className={style.buttonAbout1}>Услуги</Link> */}
                </div>
            </div>
            {/* <div className={style.bgfon}>
                <div className={style.fonf}>
                    <div className={style.font}>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h4>Watch anywhere. Cancel at any time.</h4>
                        <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
                    </div>
                </div>
            </div> */}
            <div className={style.mainContent}>
                <div className={style.content}>
                    <div data-aos='fade-right' className={style.contentText}>
                        <h1>Множество видов работ</h1>
                        <h3>Заказывайте услуги на нашей платформе и получайте доступ к проверенным профессионалам в вашем районе</h3>
                    </div>
                    <div data-aos='fade-left' className={style.contentImg}>
                        <img src={sroki} alt='tv' />
                    </div>
                </div>
                <div className={style.content}>
                    <div data-aos='fade-right' className={style.contentImg}>
                        <img src={L22} alt='tv' />
                    </div>
                    <div data-aos='fade-left' className={style.contentText}>
                        <h1>Закажи работу</h1>
                        <h3>Мы стремимся сделать вашу жизнь проще и удобнее. Наша платформа позволяет сэкономить ваше время и нервы, обеспечивая качественный сервис</h3>
                    </div>
                </div>
                <div className={style.content}>
                    <div data-aos='fade-right' className={style.contentText}>
                        <h1>Сообщи об аварии</h1>
                        <h3>На нашей платформе указаны все контактные данные аварийных служб вашего района</h3>
                    </div>
                    <div data-aos='fade-left' className={style.contentImg}>
                        <img src={L12} alt='tv' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MainPage;