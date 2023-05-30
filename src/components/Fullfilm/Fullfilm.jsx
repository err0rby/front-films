import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComments, addLike, deleteComment, deleteLike, fetchComments } from '../../features/commentsSlice';
import { fetchFilms } from '../../features/filmsSlice';
import { fetchUsers } from '../../features/usersSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header';
import style from './Fullfilm.module.css'
import Rating from '../../Rating/Rating';
import { addRequest } from '../../features/requestSlice';

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

    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(fetchFilms());
        dispatch(fetchComments());
    }, [dispatch]);

    const notify = () => toast("Ваша заявка принята!", {
        type: 'success'
    });

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
        dispatch(addRequest({ name, adress, number, work }));
        setName('');
        setAdress('');
        setNumber('');
        setWork('');
        notify();
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
                                    {/* <hr></hr>
                                    <div><h4>{`${film.year} год`}</h4></div> */}
                                    <hr></hr>
                                    <div className={style.filmdisc}><h4>Для связи: {film.discription}</h4></div>
                                    <hr></hr>
                                    <div className={style.filmact}><h4>Вид услуг:</h4>{film.actors.map((actor) => {
                                        return <h4> {` ${actor.name}; `} </h4>
                                    })}
                                    </div>
                                    <hr></hr>
                                    {/* <div className={style.filmteg}><h4>Теги:</h4>{film.tegs.map((teg) => {
                                        return <h4>{`${teg.name},`}</h4>
                                    })}</div> */}
                                </div>
                            </>
                        }
                        return null;
                    })}
                </div>
                <div className={style.request}>
                    <h2>Оставь заявку</h2>
                    <div><input type={name} onChange={handleName} placeholder='Ваше имя' /></div>
                    <div><input type={adress} onChange={handleAdress} placeholder='Ваш адрес' /></div>
                    <div><input type={number} onChange={handleNumber} placeholder='Ваш номер' /></div>
                    <div><input type={work} onChange={handleWork} placeholder='Необходимая услуга' /></div>
                    <div className={style.btn}><button onClick={addReq}>Сделать заявку</button></div>
                    <ToastContainer />
                </div>
                <div className={style.comms}>
                    <div className={style.ot}><h2>Оставьте отзыв</h2></div>
                    <div className={style.cent}>
                        <textarea onChange={(e) => handleRegul(e)} value={text} rows='10' cols='50'></textarea>
                        <Rating />
                    </div>
                    {error ? <div>Ошибка. Необходима авторизация</div> : ''}
                    <p className={style.cent}><button onClick={handleCom}>Отправить</button></p>
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