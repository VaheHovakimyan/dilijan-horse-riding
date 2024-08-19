'use client'


import React, { useContext } from "react";
import style from "./WelcomeComponent.module.scss";
import mediaStyle from './WelcomeComponentMedia.module.scss';
import Link from "next/link";


export const WelcomeComponent = ({data}: {data:any}) => {


  return (
    <div className={`${style.welcome_main} ${mediaStyle.welcome_main}`}>
      <div className={`${style.welcome_main_opacity} ${mediaStyle.welcome_main_opacity}`}>
        <div className={`${style.welcome_content} ${mediaStyle.welcome_content}`}>
          <h1 className={`${style.welcome_content_title} ${mediaStyle.welcome_content_title}`}>Dilijan Horse Riding</h1>
          <p className={`${style.welcome_content_description} ${mediaStyle.welcome_content_description}`}>
            {data?.description}
          </p>
          <Link href={"#services"}>
            <button className={`${style.welcome_content_btn} ${mediaStyle.welcome_content_btn}`}>{data?.services}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
