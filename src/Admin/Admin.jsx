import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delRequest, fetchRequest } from '../features/requestSlice';
import style from './Admin.module.css';
import { Triangle } from 'react-loader-spinner';
import Header from '../components/Header/Header';

const Admin = () => {
    const dispatch = useDispatch(); 
    const requests = useSelector(state => state.requestSlice.requests);
    const loading = useSelector(state => state.requestSlice.loading);

    useEffect(() => {
        dispatch(fetchRequest());
    }, [dispatch]);

    const handleDel = (id) => {
        dispatch(delRequest(id))
    }

    if (loading) {
        return <div className={style.tri}>
            <Triangle
                height="300"
                width="300"
                color="#a2c046"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }

    return (
        <>
            <Header />
            <div className={style.main}>
                <div className={style.f}><h1>Заявки</h1></div>
                <div className={style.mainCard}>
                    <div className={style.wrapper}>{requests.map((req) => {
                        return <div className={style.card}>
                            <div className={style.pad}> Имя:{req.name}</div>
                            <div> Адрес:{req.adress}</div>
                            <div> Номер телефона:{req.number}</div>
                            <div className={style.pad2}> Вид рыботы:{req.work}</div>
                            <button onClick={() => handleDel(req._id)}>Принять заявку</button>
                        </div>
                    })}</div>
                </div>
            </div>
        </>
    );
};

export default Admin;