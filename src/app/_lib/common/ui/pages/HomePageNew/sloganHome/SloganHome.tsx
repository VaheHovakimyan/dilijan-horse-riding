'use client'

import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";
import style from "./SloganHome.module.scss";
import mediaStyle from './SloganHomeMedia.module.scss';


export const SloganHome = ({ data }: { data: any }) => {
  return (
    <div className={`${style.slogan_home_main} ${mediaStyle.slogan_home_main}`} style={{ paddingBottom: "700px" }}>
      <div className={`${style.slogan_home_opacity} ${mediaStyle.slogan_home_opacity}`}>
        
        <div className={`${style.slogan_home_slogan_laptop} ${mediaStyle.slogan_home_slogan_laptop}`}>
          <p className={`${style.slogan_home_slogan_laptop_p} ${mediaStyle.slogan_home_slogan_laptop_p}`}>{data?.sloganLaptop?.first}</p>
          <p className={`${style.slogan_home_slogan_laptop_p} ${mediaStyle.slogan_home_slogan_laptop_p}`}>{data?.sloganLaptop?.second}</p>
          <p className={`${style.slogan_home_slogan_laptop_p} ${mediaStyle.slogan_home_slogan_laptop_p}`}>{data?.sloganLaptop?.third}</p>
        </div>

        <h3 className={`${style.slogan_home_slogan} ${mediaStyle.slogan_home_slogan}`}>{data?.title}</h3>
      </div>

      <video
        src={require('../../../../../../../../public/horse_video.mp4')}
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