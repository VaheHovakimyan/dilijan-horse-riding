'use client'

import React from "react";
import style from "./Header.module.scss";
import Image from "next/image";
import header_logo from '../../assets/images/header_logo.jpg';
import facebook_icon from '../../assets/icons/social/facebook_icon.svg';
import instagram_icon from '../../assets/icons/social/instagram_icon.svg';
import en_icon from '../../assets/icons/flags/en_icon.svg';

export const HeaderNew = ({

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

  const faFacebookF = "facebook-f"

  return (
    <div className={style.header}>
      <header>
        <div className={style.header_flex}>
          <div className={style.header_content}>
            <Image
              src={header_logo}
              width={165}
              height={70}
              alt="header logo"
            />
            <div className={style.routes_div}>
              <p>Home</p>
              <p>Our Services</p>
              <p>Gallery</p>
              <p>Our Horses</p>
              <p>About us</p>
            </div>
            <div className={style.header_contact_lang}>
              <div className={style.header_contact}>
                <img src={instagram_icon.src} alt="" width={22} height={20} />
                <img src={facebook_icon.src} alt="" width={18} height={18} />
              </div>
              <div>
                <select name="lang" id="lang">
                  <option value="am">am</option>
                  <option value="ru">ru</option>
                  <option value="en">en</option>
                </select>
                <img src={en_icon.src} alt="en" width={10} height={10} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderNew;
