'use client'

import style from "./OurServicesHome.module.scss";
import image from '../../../assets/images/home_main_background.jpg';


const ourServices = [
  {
    id: Math.random(),
    image: image,
    title: "Horse Riding",
  },
  {
    id: Math.random(),
    image: image,
    title: "Jeeping",
  },
  {
    id: Math.random(),
    image: image,
    title: "Photography",
  },
  {
    id: Math.random(),
    image: image,
    title: "Travel tour",
  },
  {
    id: Math.random(),
    image: image,
    title: "Hiking",
  },
  {
    id: Math.random(),
    image: image,
    title: "Pop Corn",
  },
];

export const OurServicesHome = ({ }: {}) => {

  return (
    <div className={style.our_services_home_main}>
      <h3 className={style.our_services_home_title}>Our Services</h3>
      <div className={style.our_services_home_flex}>
        {ourServices.map((item) => {
          return (
            <div key={item.id} style={{ backgroundImage: `url('${item.image.src}')` }} className={style.our_services_home_item}>
              <div className={style.our_services_home_item_opacity}>
                <p className={style.our_services_home_item_p}>{item.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default OurServicesHome;