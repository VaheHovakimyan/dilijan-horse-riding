"use client";

import React, { FC } from "react";
import style from "./HomePageNew.module.scss";
import "../../scss/index.scss";
import WelcomeComponent from "./welcomeComponent/WelcomeComponent";
import OurServicesHome from "./ourServices/OurServicesHome";
import SloganHome from "./sloganHome/SloganHome";
import OurHorsesHome from "./ourHorses/OurHorsesHome";
import GalleryHome from "./galleryHome/GalleryHome";
import { PartnerHome } from "./partnerHome/PartnerHome";


interface IHomePageNew {
  data:any
}

const HomePageNew:FC<IHomePageNew> = ({data}) => {

  // console.log(data,'aaaaa');
  
  return (
    <>
      <WelcomeComponent />

      <OurServicesHome />

      <SloganHome />

      <OurHorsesHome />

      <GalleryHome />

      <PartnerHome />
    </>
  );
};

export default HomePageNew;
