'use client'

import style from "./OurServicesHome.module.scss";


const ourServices = [
  {
    id: Math.random(),
    image: "/home_main_background.jpg",
    title: "Horse Riding",
  },
  {
    id: Math.random(),
    image: "/home_main_background.jpg",
    title: "Jeeping",
  },
  {
    id: Math.random(),
    image: "/home_main_background.jpg",
    title: "Teambuilding",
  },
  {
    id: Math.random(),
    image: "/home_main_background.jpg",
    title: "Photoshoot",
  },
  {
    id: Math.random(),
    image: "/home_main_background.jpg",
    title: "Camping",
  },
  {
    id: Math.random(),
    image: "/home_main_background.jpg",
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