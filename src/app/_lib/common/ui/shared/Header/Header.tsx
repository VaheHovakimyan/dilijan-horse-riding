'use client'

import React from "react";
import Image from "next/image";

import { Dropdown } from 'semantic-ui-react'



import style from "./Header.module.scss";
import mediaStyle from './HeaderMedia.module.scss';

import header_logo from '../../assets/images/header_logo.png';
import en_icon from '../../assets/icons/flags/en_icon.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';


export const Header = ({

}: {

  }) => {

  const langList = [
    { name: "Arabic", code: "ar", label: "AR" },
    { name: "English", code: "en", label: "EN" },
    { name: "Spanish", code: "es", label: "ES" },
    { name: "Portuguese", code: "pt", label: "POR" },
    { name: "Japanese", code: "ja", label: "JP" },
    { name: "Chinese", code: "zh", label: "CH" },
    { name: "Korean", code: "ko", label: "KOR" },
  ];

  const DropdownExampleSearchSelection = () => (
    <Dropdown
      placeholder='Select Country'
      fluid
      search
      selection
      options={langList}
    />
  )
  

  const midHeader = `${style.routes_div} ${mediaStyle.routes_div}`;


  return (
    <div className={`${style.header} ${mediaStyle.header}`}>
      <header>
        <div className={`${style.header_flex} ${mediaStyle.header_flex}`}>
          <div className={`${style.header_content} ${mediaStyle.header_content}`}>
            <Image
              src={header_logo}
              width={205}
              height={90}
              alt="header logo"
            />
            <div className={midHeader}>
              <p>Home</p>
              <p>Our Services</p>
              <p>Gallery</p>
              <p>Our Horses</p> 
              <p>About us</p>
            </div> 
            <div className={style.header_contact_lang}>
              <DropdownExampleSearchSelection />
              <select name="lang" id="lang" className={style.header_lang}>
                <option value="am">am</option>
                <option value="ru">ru</option>
                <option value="en">en</option>
              </select>
              <div className={style.header_contact}>
                <FacebookIcon className={`${style.header_social_icon} ${mediaStyle.header_social_icon}`} />
                <InstagramIcon className={`${style.header_social_icon} ${mediaStyle.header_social_icon}`} />
                <TelegramIcon className={`${style.header_social_icon} ${mediaStyle.header_social_icon}`} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
