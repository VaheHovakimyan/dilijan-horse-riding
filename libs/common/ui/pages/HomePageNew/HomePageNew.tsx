'use client'


import React from "react";
import style from "./HomePageNew.module.scss";
import '../../scss/index.scss';
import WelcomeComponent from './welcomeComponent/WelcomeComponent';
import OurServicesHome from "./ourServices/OurServicesHome";
import SloganHome from "./sloganHome/SloganHome";

export const HomePageNew = ({

}: {


}) => {

  return (
    <>
     
     <WelcomeComponent />

     <OurServicesHome />

     <SloganHome />

      {/* <div className={style.wrapper_bg}>
        <div className={style.wrapper}>

          hello world in main page 
        </div>

    
      </div> */}
    </>
  );
};

export default HomePageNew;
