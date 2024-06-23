'use client'


import React from "react";
import style from "./HomePageNew.module.scss";
import '../../scss/index.scss';
import WelcomeComponent from './welcomeComponent/WelcomeComponent';
import OurServicesHome from "./ourServices/OurServicesHome";
import SloganHome from "./sloganHome/SloganHome";
import OurHorsesHome from "./ourHorses/OurHorsesHome";
import GalleryHome from "./galleryHome/GalleryHome";

export const HomePageNew = ({

}: {


  }) => {

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
