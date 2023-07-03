import React, { useState } from 'react';
import style from './Pay.module.css'
import Header from '../Header/Header';
import 'react-toastify/dist/ReactToastify.css';

const Pay = () => {
    const [pay, setPay] = useState();

    return (
        <>
            <Header />
            <div className={style.pay}>
                <form method='POST' action='https://demo.open-processing.ru/create/' >
                    Сумма к оплате 1000 руб. <br />
                    <input className={style.namer} onChange={(e) => { setPay(e.target.value) }} placeholder='Введите сумму' type='text' name='sum' value={pay} /> <br />
                    <input className={style.payer} type='submit' value='Перейти к оплате' />
                </form>
            </div>
        </>
    );
};

export default Pay;