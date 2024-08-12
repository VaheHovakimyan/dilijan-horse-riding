'use client'

import style from "./SloganHome.module.scss";
import mediaStyle from './SloganHomeMedia.module.scss';


export const SloganHome = ({ }: {}) => {
  return (
    <div className={`${style.slogan_home_main} ${mediaStyle.slogan_home_main}`} style={{ paddingBottom: "700px" }}>
      <div className={`${style.slogan_home_opacity} ${mediaStyle.slogan_home_opacity}`}>
        <h3 className={`${style.slogan_home_slogan} ${mediaStyle.slogan_home_slogan}`}>ՍԱՐԵՐ, ՁՈՐԵՐ ՈՒ ԼԻ՜ՔԸ ՍԵՐ</h3>
      </div>

      <video
        src={require('../../../../../../../../public/horse_video_dilijan.mp4')}
        loop
        autoPlay
        muted
        className={`${style.slogan_home_video} ${mediaStyle.slogan_home_video}`}
      >
      </video>
    </div>
  );
};

export default SloganHome;