import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { filterMovie } from '../../features/filmsSlice';
import styles from './Header.module.css'

const Header = () => {
    const [text, setText] = useState('')
    const token = useSelector(state => state.applicationSlice.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(filterMovie(text))
    }, [dispatch, text])

    const handleClean = () => {
        localStorage.clear()
        window.location.reload()
    }

    const handleLin = () => {
        navigate('/signin');
    }

    const handleLog = () => {
        navigate('/signup');
    }

    return (
        <>
            {/* <div className={styles.headerLogo}>
                <div className={style.info}>
                <Link className={style.lin} to='/films'><p>FILMS</p></Link>
                {token ? <button onClick={handleClean}>Выход</button> : <><Link className={style.lin} to='/signin'><p>Вход</p></Link> <Link className={style.lin} to='/signup'><p>Регистрация</p></Link></>}
            </div>
                <div className={styles.inp}>
                    <div className={styles.input}>
                    </div>
                </div>
            </div> */}
            <div className={styles.headers}>
                <div className={styles.first_Head}>
                    <div className={styles.oneBlock}>
                        <div className={styles.text}>
                            <p>Providing Exceptional Landscaping</p>
                        </div>
                        <input placeholder='Поиск ' onChange={(e) => setText(e.target.value)} value={text} />
                        {/* {name === '63203a63b275658192f873c0' ? <Link to='/admin'><div><img width={35} src="https://shumoff.ua/shumoffbiz/img/icon/i1.png" alt="asdasd" /></div></Link> : null} */}
                    </div>
                    {token ? <div className={styles.just}><button onClick={handleClean}>Выход</button></div> : <div className={styles.just}><button onClick={handleLin}>Вход</button><button onClick={handleLog}>Регистрация</button></div>}
                </div>
                <div className={styles.second_Head}>
                    <div className={styles.BlocksOne}>
                        <div className={styles.hedImg}>
                            <div className={styles.logo}>
                                <Link className={styles.lin} to='/'><h1>TASKEASE</h1></Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.BlocksTwo}>
                        <Link to="/" className={styles.linkText}> <h4>Главная</h4> </Link>
                        <Link to="/films" className={styles.linkText}> <h4>Сервисы</h4> </Link>
                        <Link to="/beforeafter" className={styles.linkText}> <h4>Проекты</h4> </Link>
                        <Link to="/avaria" className={styles.linkText}> <h4>Аварийный случай</h4> </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;