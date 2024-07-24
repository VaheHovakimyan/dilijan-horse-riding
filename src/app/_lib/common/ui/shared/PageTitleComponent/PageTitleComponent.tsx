import React from "react";
import style from './PageTitleComponent.module.scss';


export default function PageTitleComponent({ title }: { title: string }) {

  console.log(title);


  return (
    <div className={style.page_title_div_flex}>
      <div className={style.page_title_div_flex_opacity}>
        <h1 className={style.page_title}>{title}</h1>
      </div>
    </div>
  );
}
