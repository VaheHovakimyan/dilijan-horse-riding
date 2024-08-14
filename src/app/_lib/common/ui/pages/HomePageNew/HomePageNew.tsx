"use client";

import React, { FC } from "react";
import "../../scss/index.scss";
import WelcomeComponent from "./welcomeComponent/WelcomeComponent";
import OurServicesHome from "./ourServices/OurServicesHome";
import SloganHome from "./sloganHome/SloganHome";
import GalleryHome from "./galleryHome/GalleryHome";
import { PartnerHome } from "./partnerHome/PartnerHome";

interface IHomePageNew {
  data: any
}


// export const LangContext = createContext({lang: 1});

const HomePageNew: FC<IHomePageNew> = ({ data }) => {
  // const [lang, setLang] = useState<number>(1);

  return (
    <>
      {/* <LangContext.Provider value={{lang, setLang} as any}> */}
        <WelcomeComponent />

        <OurServicesHome />

        <SloganHome />

        <GalleryHome />

        <PartnerHome />
      {/* </LangContext.Provider> */}
    </>
  );
};

export default HomePageNew;
