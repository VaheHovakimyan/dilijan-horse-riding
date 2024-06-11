'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cl from "classnames";
import Image from "next/image";

import style from "./Footer.module.scss";

export const FooterNew = () => {

  return (
    <>
      <div className={style.footer}>
        <div className={style.footer__wrapper}>
        Footer 
        </div>
      </div>
    </>
  );
};

export default FooterNew;
