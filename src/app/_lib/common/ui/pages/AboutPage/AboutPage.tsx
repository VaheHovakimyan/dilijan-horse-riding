'use client'

import React, { FC } from "react";
import style from "./AboutPage.module.scss";
import PageTitleComponent from "../../shared/PageTitleComponent/PageTitleComponent";

interface IAboutPage {
  data: any
}

const AboutPage: FC<IAboutPage> = ({ data }) => {

  console.log(data);


  return (
    <div className={style.wrapper}>
      <PageTitleComponent title={"About us"} />
    </div>
  );
};

export default AboutPage;
