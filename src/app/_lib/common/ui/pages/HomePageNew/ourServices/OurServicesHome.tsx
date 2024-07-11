'use client'

import style from "./OurServicesHome.module.scss";
import mainBack from '../../../assets/images/home_main_background.jpg'


const ourServices = [
  {
    id: Math.random(),
    image: mainBack.src,
    title: "Horse Riding",
  },
  {
    id: Math.random(),
    image: mainBack.src,
    title: "Jeeping",
  },
  {
    id: Math.random(),
    image: mainBack.src,
    title: "Teambuilding",
  },
  {
    id: Math.random(),
    image: mainBack.src,
    title: "Photoshoot",
  },
  {
    id: Math.random(),
    image: mainBack.src,
    title: "Camping",
  },
  {
    id: Math.random(),
    image: mainBack.src,
    title: "Quadro tours",
  },
];

export const OurServicesHome = ({ }: {}) => {

  return (
    <div className={style.our_services_home_main}>
      <h3 className={style.our_services_home_title}>Our Services</h3>
      <div className={style.our_services_home_flex}>
        {ourServices.map((item) => {
          return (
            <div key={item.id} className={style.our_services_home_item}>
              <div className={style.our_services_home_item_opacity} style={{ backgroundImage: `url('${item.image}')` }} >
                <div className={style.our_services_home_item_p_center}>
                  <p className={style.our_services_home_item_p}>{item.title}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default OurServicesHome;