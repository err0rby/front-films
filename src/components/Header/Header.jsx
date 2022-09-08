import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterMovie } from '../../features/filmsSlice';
import style from './Header.module.css'

const Header = () => {
    const [text,setText] = useState('')
    const token = useSelector(state => state.applicationSlice.token);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterMovie(text))
    }, [dispatch, text])

    const handleClean = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className={style.headerLogo}>
            <div className={style.logo}>
                <Link className={style.lin} to='/'><h1>BESTFILMS</h1></Link>
            </div>
            <div className={style.info}>
                <Link className={style.lin} to='/films'><p>FILMS</p></Link>
                {token ? <button onClick={handleClean}>Выход</button> : <><Link className={style.lin} to='/signin'><p>Вход</p></Link> <Link className={style.lin} to='/signup'><p>Регистрация</p></Link></>}
            </div>
            <div className={style.inp}>
                <div className={style.input}>
                    <input placeholder='Поиск по фильмам, жанрам, годам, тегам' onChange={(e) => setText(e.target.value)} value={text} />
                </div>
            </div>
        </div>
    );
};

export default Header;