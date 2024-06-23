'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cl from "classnames";
import Image from "next/image";

import style from "./Footer.module.scss";
import footer_logo from '../../assets/images/header_logo.jpg';

export const Footer = ({

}: {


  }) => {

  return (
    <div className={style.footer_main}>
      <div className={style.footer_main_flex}>
        <div className={style.footer_logo_social_flex}>
          <Image
            src={footer_logo}
            width={165}
            height={70}
            alt="header logo"
          />
          <div className={style.footer_social_div}>
            <div className={style.footer_social_contacts_div}>
              <p>Telephone: 099-99-99-99</p>
              <p>Address: Dilijan</p>
              <p>Email: DilijanHorseRiding@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={style.footer_mid_div_flex}>
          <h3>Արի զգա լեռների շունչը</h3>
          <p>
            text text text text text text text text
            text text text text text text text text
            text text text text text text text text
            text text text text text text text text text
          </p>
        </div>
        <div className={style.footer_map_div}>
          <p>Մենք քարտեզի վրա</p>
          <div className={style.footer_map}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
