import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFilms } from '../../features/filmsSlice';
import Header from '../Header/Header';
import style from './Films.module.css'

const Films = () => {
    const dispatch = useDispatch();
    const films = useSelector(state => state.filmsSlice.filmFil);
 

    useEffect(() => {
        dispatch(fetchFilms());
    }, [dispatch])

    return (
        <div>
            <Header />
            <div className={style.mainFilms}>
                {films.map((film) => {
                    return <Link className={style.lin} to={`/films/${film._id}`}>
                        <div className={style.filmCard}>
                            <img src={`http://localhost:3030/images/${film.image}`} alt='film' />
                        </div>
                    </Link>
                })}
            </div>
        </div>
    );
};

export default Films;