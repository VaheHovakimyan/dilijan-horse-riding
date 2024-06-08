'use client'

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import style from "./Header.module.scss";
import cl from "classnames";




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
    <>
      <header
       
      >
        <Link
          className={cl(
            style.header__logo,
           
          )}
          href="/"
        >
          homepage link
        </Link>



        header 
      </header>
    </>
  );
};

export default HeaderNew;
