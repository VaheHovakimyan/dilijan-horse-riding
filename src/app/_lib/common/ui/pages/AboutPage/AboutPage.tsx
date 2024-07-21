'use client'

import React, { FC } from "react";
import style from "./AboutPage.module.scss";

interface IAboutPage {
  data:any
}

const AboutPage:FC<IAboutPage> = ({data}) => {

  console.log(data);
  

  return (
    <>

      <div className={style.wrapper}>

        about page
      </div>
    </>
  );
};

export default AboutPage;
