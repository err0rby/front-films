import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addComments, addLike, deleteComment, deleteLike, fetchComments } from '../../features/commentsSlice';
import { fetchFilms } from '../../features/filmsSlice';
import { fetchUsers } from '../../features/usersSlice';

import Header from '../Header/Header';
import style from './Fullfilm.module.css'
import Rating from '../../Rating/Rating';
import { addRequest } from '../../features/requestSlice';
import ava from './ava.jpg';

const Fullfilm = () => {
    const [error, setError] = useState(false);
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const films = useSelector(state => state.filmsSlice.films);
    const { id } = useParams();
    const comments = useSelector(state => state.commentsSlice.comments)
    const token = useSelector(state => state.applicationSlice.token);
    const users = useSelector(state => state.usersSlice.users);
    const user = useSelector(state => state.applicationSlice.name);
    const [like, setLike] = useState(true);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [adress, setAdress] = useState('');
    const [work, setWork] = useState('');
    const [worker, setWorker] = useState('');
    const navigate = useNavigate();
    // const zanat = useSelector(state => state.usersSlice.zanat)
    // const nezn = useSelector(state => state.usersSlice.nezn)

    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(fetchFilms());
        dispatch(fetchComments());
    }, [dispatch]);

    const handleRegul = (e) => {
        setText(e.target.value);
        setError(false);
    }

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleAdress = (e) => {
        setAdress(e.target.value);
    };

    const handleNumber = (e) => {
        setNumber(e.target.value);
    };

    const handleWork = (e) => {
        setWork(e.target.value);
    };

    const handleWorker = (e) => {
        setWorker(e.target.value);
    };

    const deleteComm = (id) => {
        dispatch(deleteComment(id));
    }

    const handleCom = () => {
        if (!token) {
            setError(true);
        }
        if (text.trim().length) {
            dispatch(addComments({ user, text, id }))
            setText("");
        }
    }

    const addReq = () => {
        dispatch(addRequest({ name, adress, number, work, worker }));
        setName('');
        setAdress('');
        setNumber('');
        setWork('');
        setWorker('')
        navigate('/pay')
    }

    const likeHandl = (id, com) => {
        if (like) {
            dispatch(addLike({ id, com }))
            setLike(false);
        }
        if (!like) {
            dispatch(deleteLike({ id, com }))
            setLike(true)
        }
    }

    return (
        <>
            <Header />
            <div className={style.mainFull}>
                <div className={style.filmCard}>
                    {films.map((film) => {
                        if (film._id === id) {
                            return <>
                                <div className={style.filmimg}><img src={`http://localhost:3030/images/${film.image}`} alt='s' /></div>
                                <div className={style.filminfo}>
                                    <div><h4 key={film._id}>Компания: {film.name}</h4></div>
                                    <hr></hr>
                                    <div className={style.filmdisc}>Для связи: {film.discription}</div>
                                    <hr></hr>
                                    <div className={style.filmact}>Вид услуг:{film.actors.map((actor) => {
                                        return <div>{` ${actor.name}; `}</div>
                                    })}
                                    </div>
                                    <hr></hr>
                                    {film.zanat === true ? <div>Сейчас нет доступных работников</div> : <div>Есть доступные работники</div>}
                                    <hr></hr>
                                    <div>Услуга оценивается в 2000 руб.</div>
                                </div>
                            </>
                        }
                        return null;
                    })}
                </div>
                {films.map((item) => {
                    if (item.workers.length !== 0) {
                        return <>
                            <h2 className={style.zagolovok}>Наши работники</h2>
                            <div className={style.mainWork}>
                                <div className={style.workers}>
                                    {console.log(item.workers.length)}
                                    {item.workers.map((worker) => {
                                        return <div key={worker._id} className={style.workCard}>
                                            <div className={style.workImg}>
                                                <img src={ava} alt='a' />
                                            </div>
                                            <div>Имя: {worker.firstName}</div>
                                            <div>Фамилия: {worker.lastName}</div>
                                            <div className={style.workLine}>Спец-ть: {worker.workName}</div>
                                            <div>Рейтинг: {worker.rating}</div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </>
                    } else {
                        return null
                    }
                })}
                <div className={style.owmreq}>
                    <div className={style.request}>
                        <h2>Оставь заявку</h2>
                        <div><input type={name} onChange={handleName} placeholder='Ваше имя' /></div>
                        <div><input type={adress} onChange={handleAdress} placeholder='Ваш адрес' /></div>
                        <div><input type={number} onChange={handleNumber} placeholder='Ваш номер' /></div>
                        <div><input type={work} onChange={handleWork} placeholder='Необходимая услуга' /></div>
                        {films.map((item) => {
                            return <>
                                {item.workers.length !== 0 ? <div><input type={worker} onChange={handleWorker} placeholder='Фамилия имя работника' /></div> : null}
                            </>
                        }
                        )}
                        <div className={style.btn}><button onClick={addReq}>Сделать заявку</button></div>
                    </div>
                    <div className={style.requ}><div className={style.textReq}>Для оставления заявки необходимо сделать предоплату в размере 50% от суммы оказываемой услуги</div></div>
                </div>
                <div className={style.comms}>
                    <div className={style.ot}><h2>Оставьте отзыв</h2></div>
                    <div className={style.cent}>
                        <textarea className={style.inpVal} onChange={(e) => handleRegul(e)} value={text} rows='10' cols='50'></textarea>
                        <Rating />
                    </div>
                    {error ? <div>Ошибка. Необходима авторизация</div> : ''}
                    <p className={style.cent}><button className={style.sendBut} onClick={handleCom}>Отправить</button></p>
                </div>
            </div>
            <div>
                {comments.map((com) => {
                    if (com.film === id) {
                        return <div key={com._id} className={style.comment}>
                            {users.map((us) => {
                                if (us._id === com.user) {
                                    return <div key={us._id} className={style.fl}>
                                        <div className={style.uslog}>{us.login}</div>
                                        {user === us._id ? <div className='delet'><button onClick={() => { deleteComm(com._id) }}>X</button></div> : ''}
                                    </div>
                                }
                                return null
                            })}
                            <div><h4>{com.text}</h4></div>
                            <div className={style.lik}>
                                {`${Number(com.watch.slice(11, 13)) + 3}${com.watch.slice(13, 16)} ${com.watch.slice(0, 10)}`}
                                <div className={style.bl}>
                                    <div><button onClick={() => { likeHandl(user, com._id) }}>👍</button></div>
                                    <div>{com.likes.length}</div>
                                </div>
                            </div>
                        </div>
                    }
                    return null
                })}
            </div>
        </>
    );
};

export default Fullfilm;