'use client'

import React from "react";
import style from "./GalleryHome.module.scss";
import mediaStyle from './GalleryHomeMedia.module.scss';
import horse_image from '../../../assets/images/horse_image.jpg';


export const GalleryHome = ({ }: {}) => {

  return (
    <div className={style.gallery_home_main}>
      <div className={style.gallery_home}>

        <div className={style.gallery_home_main_1}>
          <div className={style.gallery_home_main_item}>
            <div className={style.gallery_home_main_item_opacity}></div>
          </div>
          <div className={style.gallery_home_main_item}>
            <div className={style.gallery_home_main_item_opacity}></div>
          </div>
          <div className={style.gallery_home_main_item}>
            <div className={style.gallery_home_main_item_opacity}></div>
          </div>
        </div>

        <div className={style.gallery_home_main_2}>
          <div className={style.gallery_home_main_item}>
            <div className={style.gallery_home_main_item_opacity}></div>
          </div>
          <div className={style.gallery_home_main_item}>
            <div className={style.gallery_home_main_item_opacity}></div>
          </div>
          <div className={style.gallery_home_main_item}>
            <div className={style.gallery_home_main_item_opacity}>
              <p className={style.gallery_home_main_item_opacity_last}>+ 343</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryHome;
