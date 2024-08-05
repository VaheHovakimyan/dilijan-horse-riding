"use client";

import React, { FC } from "react";
import "../../scss/index.scss";
import WelcomeComponent from "./welcomeComponent/WelcomeComponent";
import OurServicesHome from "./ourServices/OurServicesHome";
import SloganHome from "./sloganHome/SloganHome";
import GalleryHome from "./galleryHome/GalleryHome";
import { PartnerHome } from "./partnerHome/PartnerHome";


interface IHomePageNew {
  data:any
}

const HomePageNew:FC<IHomePageNew> = ({data}) => {
  

  
  return (
    <>
      <WelcomeComponent />

      <OurServicesHome />

      <SloganHome />

      <GalleryHome />

      <PartnerHome />
    </>
  );
};

export default HomePageNew;
