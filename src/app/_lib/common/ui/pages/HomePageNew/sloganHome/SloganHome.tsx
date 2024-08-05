'use client'

import style from "./SloganHome.module.scss";
import mediaStyle from './SloganHomeMedia.module.scss';

export const SloganHome = ({ }: {}) => {
  return (
    <div className={style.slogan_home_main}>
      <div className={style.slogan_home_opacity}>
        <h3 className={style.slogan_home_slogan}>ՍԱՐԵՐ, ՁՈՐԵՐ ՈՒ ԼԻ՜ՔԸ ՍԵՐ</h3>
      </div>
    </div>
  );
};

export default SloganHome;