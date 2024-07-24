'use client'

import React from "react";
import PageTitleComponent from "../../shared/PageTitleComponent/PageTitleComponent";
import style from './GalleryPage.module.scss';
import { galleryItems } from '../../../../../constants';

export const GalleryPage = ({ }: {}) => {

  return (
    <section className={style.gallery}>
      <PageTitleComponent title={"Gallery"} />

      <div className={style.gallery_main}>
        {galleryItems.map((item) =>
          <img src={item.image} alt="galler_image" className={style.gallery_image} />
        )}
      </div>
    </section>
  );
};

export default GalleryPage;