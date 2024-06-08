import styles from './api/PageStyle.module.scss'
import React from "react";
import { useRef, useEffect, useState } from "react";

import cl from "classnames";
import style from "../../libs/common/ui/pages/AboutPage/Map/Map.module.scss";
import ArrowRightIcon from "@/libs/common/ui/assets/imgs/Group 21.png";

import Link from "next/link";

export const Custom404 = () => {

    const myElementRef = useRef(null);


    return(
        <div className={styles._404_div}>
            <div className="container">
                <div className="row" ref={myElementRef}>
          
                    <div className="col-md-6 align-self-center">
                        <h1>404</h1>
                        <h2>UH OH! You are lost.</h2>
                        <p>The page you are looking for does not exist.
                            How you got here is a mystery. But you can click the button below
                            to go back to the homepage.
                        </p>
                        <div>
                            <Link className={cl(style.map__btn)} style={{display: "inline-flex"}} href='/'>
                                Home
                                <img src={ArrowRightIcon.src} alt="Arrow" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Custom404;