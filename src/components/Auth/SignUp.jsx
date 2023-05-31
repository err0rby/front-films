import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSignUp } from '../../features/applicationSlice';
import Header from '../Header/Header';
import styles from './Auth.module.css'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surName, setSurName] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSetName = (e) => {
        setLogin(e.target.value);
    }

    const handleSetPass = (e) => {
        setPassword(e.target.value);
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        dispatch(authSignUp({ login, password }))
        setEmail('');
        setFirstName('');
        setSurName('');
        navigate('/signin')
    }

    return (
        <>
            <Header />
            <div className={styles.login}>
                <div className={styles.loginScreen}>
                    <div className={styles.appTitle}>
                        <h1>Создать аккаунт</h1>
                    </div>
                    <div className={styles.loginForm}>
                        <div className={styles.controlGroup}>
                            <form>
                                <input
                                    className={styles.loginField}
                                    type='text'
                                    value={firstName}
                                    placeholder='Имя'
                                    onChange={(e) => { setFirstName(e.target.value) }}
                                />
                            </form>
                        </div>
                        <br />
                        <div className={styles.controlGroup}>
                            <form>
                                <input
                                    className={styles.loginField}
                                    type='text'
                                    value={surName}
                                    placeholder='Фамилия'
                                    onChange={(e) => { setSurName(e.target.value) }}
                                />
                            </form>
                        </div>
                        <br />
                        <div className={styles.controlGroup}>
                            <form>
                                <input
                                    className={styles.loginField}
                                    type='text'
                                    value={email}
                                    placeholder='Почта'
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </form>
                        </div>
                        <br />
                        <div className={styles.controlGroup}>
                            <form>
                                <input
                                    className={styles.loginField}
                                    type='text'
                                    value={login}
                                    placeholder='Логин'
                                    onChange={handleSetName}
                                />
                            </form>
                        </div>
                        <br />
                        <div className={styles.controlGroup}>
                            <form>
                                <input
                                    className={styles.loginField}
                                    type='password'
                                    value={password}
                                    placeholder='Пароль'
                                    onChange={handleSetPass}
                                />
                                <br />
                                <button className={styles.btn} type='submit' onClick={handleSignUp}>Зарегистрироваться</button>
                                <a className={styles.loginLink} href="#">У вас есть аккаунт?</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;