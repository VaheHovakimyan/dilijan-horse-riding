'use client'

import React from "react";
import style from "./OurHorsesHome.module.scss";
import horse_image from '../../../assets/images/horse_image.jpg'

const ourHorses = [
  {
    id: Math.random(),
    image: horse_image,
    title: "Sevuk",
    description: `Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta?`,
  },
  {
    id: Math.random(),
    image: horse_image,
    title: "Brown",
    description: `Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta?`,
  },
  {
    id: Math.random(),
    image: horse_image,
    title: "Qurkik",
    description: `Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta?`,
  },
  {
    id: Math.random(),
    image: horse_image,
    title: "Sheko",
    description: `Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta?`,
  },
  {
    id: Math.random(),
    image: horse_image,
    title: "Sheko",
    description: `Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta?`,
  },
  {
    id: Math.random(),
    image: horse_image,
    title: "Sheko",
    description: `Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta?`,
  },
  {
    id: Math.random(),
    image: horse_image,
    title: "Sheko",
    description: `Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta?`,
  },
  {
    id: Math.random(),
    image: horse_image,
    title: "Sheko",
    description: `Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta?`,
  },
  {
    id: Math.random(),
    image: horse_image,
    title: "Sheko",
    description: `Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta?`,
  },
  {
    id: Math.random(),
    image: horse_image,
    title: "Sheko",
    description: `Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta?`,
  },
  {
    id: Math.random(),
    image: horse_image,
    title: "Sheko",
    description: `Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta?`,
  },
  {
    id: Math.random(),
    image: horse_image,
    title: "Sheko",
    description: `Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta? Illum inventore odit repellendus 
     facere hic quam ipsa.Numquam dignissimos sit officiis 
     totam enim voluptas. Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Qui pariatur error distinctio, at 
     tempora dicta?`,
  }
];

export const OurHorsesHome = ({ }: {}) => {

  return (
    <div className={style.our_horses_home_main}>
      <div className={style.our_horses_home_main_pad}>
        <div className={style.our_horses_home_main_flex}>
          <h2 className={style.our_horses_home_main_title}>Our horses</h2>
          <div className={style.our_horses_home_div_flex}>
            {ourHorses.map((horse, index: number) => {
              return (
                <div className={style.our_horses_home_div_item} key={index}>
                  <div className={style.circle_div}>
                    <div className={style.circle_div_name}>
                      <span className={style.circle_div_name_span}>{horse.title}</span>
                    </div>
                  </div>
                  {/* <img src={horse.image.src} alt="horse_image" className={style.our_horses_home_horse_image} />
                  <div className={style.our_horses_home_div_item_desc}>
                    <p className={style.our_horses_home_horse_p}>{horse.title}</p>
                    <span className={style.our_horses_home_horse_span}>{horse.description}</span>
                  </div> */}
                </div>
              )
            })}
          </div>
          {/* <div className={style.our_horses_home_all_div}>
            <button className={style.our_horses_home_all_btn}>All horses</button>
          </div> */}
        </div>
      </div>
    </div >
  );
};

export default OurHorsesHome;
