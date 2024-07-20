'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Dropdown } from 'semantic-ui-react';

import style from "./Header.module.scss";
import mediaStyle from './HeaderMedia.module.scss';

import header_logo from '../../assets/images/header_logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import en_icon from '../../assets/icons/flags/en_icon.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';


const langList = [
  { name: "Arabic", code: "ar", label: "AR" },
  { name: "English", code: "en", label: "EN" },
  { name: "Spanish", code: "es", label: "ES" },
  { name: "Portuguese", code: "pt", label: "POR" },
  { name: "Japanese", code: "ja", label: "JP" },
  { name: "Chinese", code: "zh", label: "CH" },
  { name: "Korean", code: "ko", label: "KOR" },
];



export const Header = ({ }: {}) => {

  const [burgerBool, setBurgerBool] = useState<boolean>(false);


  useEffect(() => {
    if (burgerBool) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [burgerBool]);


  return (
    <div className={`${style.header} ${mediaStyle.header}`}>
      <header>

        <div
          className={style.header_sidebar_opacity}
          style={{
            transform: `translateX(${burgerBool ? '0%' : '100%'})`,
            display: `${burgerBool ? 'block' : 'none'}`,
          }}
          onClick={() => setBurgerBool(!burgerBool)}
        ></div>

        <div
          className={style.header_sidebar}
          style={{ transform: `translateX(${burgerBool ? '0%' : '100%'})` }}
        >
          <div className={style.header_sidebar_logo_routes}>
            <div className={style.header_sidebar_logo_close}>
              <Image
                src={header_logo}
                width={182}
                height={80}
                style={{ scale: 1.1 }}
                alt="header logo"
              />
              <CloseIcon onClick={() => setBurgerBool(!burgerBool)} />
            </div>
            <div className={`${style.header_sidebar_routes_div} ${mediaStyle.header_sidebar_routes_div}`}>
              <p>Home</p>
              <p>Our Services</p>
              <p>Gallery</p>
              <p>Our Horses</p>
              <p>About us</p>
            </div>
          </div>

          <div className={`${style.header_contact_lang} ${mediaStyle.header_contact_lang}`}>
            <div className={style.header_contact}>
              <FacebookIcon className={style.header_social_icon}/>
              <InstagramIcon className={style.header_social_icon} />
              <TelegramIcon className={style.header_social_icon} />
            </div>
          </div>
        </div>


        <div className={`${style.header_flex} ${mediaStyle.header_flex}`}>
          <div className={`${style.header_content} ${mediaStyle.header_content}`}>
            <Image
              src={header_logo}
              width={205}
              height={90}
              alt="header logo"
            />
            <div className={`${style.routes_div} ${mediaStyle.routes_div}`}>
              <p>Home</p>
              <p>Our Services</p>
              <p>Gallery</p>
              <p>Our Horses</p>
              <p>About us</p>
            </div>
            <div className={`${style.header_contact_lang} ${mediaStyle.header_contact_lang}`}>
              <select name="lang" id="lang" className={`${style.header_lang} ${mediaStyle.header_lang}`}>
                <option value="am" className={style.header_lang_option}>🇦🇲&emsp;AM</option>
                <option value="ru" className={style.header_lang_option}>🇷🇺&emsp;RU</option>
                <option value="en" className={style.header_lang_option}>🇬🇧&emsp;EN</option>
              </select>
              <div className={`${style.header_contact} ${mediaStyle.header_contact}`}>
                <FacebookIcon className={`${style.header_social_icon} ${mediaStyle.header_social_icon}`} />
                <InstagramIcon className={`${style.header_social_icon} ${mediaStyle.header_social_icon}`} />
                <TelegramIcon className={`${style.header_social_icon} ${mediaStyle.header_social_icon}`} />
              </div>
            </div>
            <MenuIcon
              className={`${style.header_burger_icon} ${mediaStyle.header_burger_icon}`}
              onClick={() => {
                console.log("hello", burgerBool);

                setBurgerBool(!burgerBool)
              }}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
