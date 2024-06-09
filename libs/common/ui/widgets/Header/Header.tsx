'use client'

import React from "react";
import style from "./Header.module.scss";
import Image from "next/image";
import header_logo from '../../assets/images/header_logo.jpg';


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
            <div>Contact</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderNew;
