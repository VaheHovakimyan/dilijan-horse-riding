'use client'


import React from "react";
import style from "./HomePageNew.module.scss";
import '../../scss/index.scss';
import WelcomeComponent from './welcomeComponent/WelcomeComponent';

export const HomePageNew = ({

}: {


}) => {

  return (
    <>
     
     <WelcomeComponent />

      {/* <div className={style.wrapper_bg}>
        <div className={style.wrapper}>

          hello world in main page 
        </div>

    
      </div> */}
    </>
  );
};

export default HomePageNew;
