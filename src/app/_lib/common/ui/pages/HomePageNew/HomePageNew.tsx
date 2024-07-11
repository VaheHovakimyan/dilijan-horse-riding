"use client";

import React, { FC } from "react";
import style from "./HomePageNew.module.scss";
import "../../scss/index.scss";
import WelcomeComponent from "./welcomeComponent/WelcomeComponent";
import OurServicesHome from "./ourServices/OurServicesHome";
import SloganHome from "./sloganHome/SloganHome";
import OurHorsesHome from "./ourHorses/OurHorsesHome";
import GalleryHome from "./galleryHome/GalleryHome";

interface IHomePageNew {
  data?:any
}

export const HomePageNew:FC<IHomePageNew> = ({data}) => {


  return (
    <>
      <WelcomeComponent />

      <OurServicesHome />

      <SloganHome />

      <OurHorsesHome />

      <GalleryHome />
    </>
  );
};

export default HomePageNew;
