'use client'


import React, { useContext } from "react";
import style from "./WelcomeComponent.module.scss";
import mediaStyle from './WelcomeComponentMedia.module.scss';
import Link from "next/link";
import { LangContext } from "@/app/[lng]/layout";


const welcome_data_en = {
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus non culpa perspiciatis ad id ab. Sint error
            inventore possimus? Enim ducimus fugit ratione eius a
            facilis totam voluptas sint esse?`,
  services: "Our Services"
}

const welcome_data_ru = {
  description: `Русский Русский Русский Русский Русский Русский Русский
   Русский Русский Русский Русский Русский Русский Русский Русский 
   Русский Русский Русский Русский Русский `,
  services: "Наши услуги"
}

const welcome_data_am = {
  description: `Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն
   Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն 
   Հայերեն Հայերեն Հայերեն Հայերեն Հայերեն`,
  services: "Մեր ծառայությունները"
}

export const WelcomeComponent = ({ }: {}) => {
  const { lang, setLang }: any = useContext(LangContext);

  let data;

  switch (lang) {
    case 1:
       data = welcome_data_am;
      break;
    case 2:
       data = welcome_data_ru;
      break;
    case 3:
       data = welcome_data_en;
      break;
    default:
      console.error("Error with language");
      break;
  }


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
