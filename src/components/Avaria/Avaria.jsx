import React from 'react';
import Header from '../Header/Header';
import style from './Avaria.module.css'

const Avaria = () => {
    return (
        <>
            <Header />
            <div className={style.avaria}>
                <h3>Телефоны “Горячей линии” для обращения граждан при возникновении аварийных ситуаций связанных с ЖКУ</h3>
                <table cellPadding='20'>
                    <tr>
                        <td>№ п/п</td>
                        <td>Наименование администраций муниципальных районов</td>
                        <td>Номера телефонов</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>г.Грозный</td>
                        <td>8 (8712) 22 37 83</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>г.Аргун</td>
                        <td>8 (8712) 22 37 83</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>г.Гудермес</td>
                        <td>8 (8712) 22 37 83</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>г.Шали</td>
                        <td>8 (8712) 22 37 83</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>г.Урус-Мартан</td>
                        <td>8 (8712) 22 37 83</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Веденский</td>
                        <td>8 (8712) 22 37 83</td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default Avaria;