import React from "react";
import styles from "../BeforeAfter/BeforeAfter.module.css";
// import "../../index.css";
import BAItem1 from "./BAItem/BAItem1";
import BAItem2 from "./BAItem/BAItem2";
import BAItem3 from "./BAItem/BAItem3";
import Header from '../Header/Header'


const BeforeAfter = () => {

  return (
    <>
      <Header />
      <div className={styles.gallery_main}>
        <div className={styles.gallery_main_upp}>
          <p className={styles.gallery_p1}>Проекты</p>
          <p className={styles.gallery_p2}>До и после работы</p>
        </div>
        <div className={styles.BAItems}>
          <BAItem1 />
          <BAItem2 />
          <BAItem3 />
        </div>
      </div>
    </>
  );
};

export default BeforeAfter;
