"use server";

import dynamic from "next/dynamic";
import "../_lib/common/ui/scss/index.scss";
import Head from "next/head";

const HomePageNew = dynamic(
  () => import("../_lib/common/ui/pages/HomePageNew/HomePageNew")
);
   
// const fetchHomePageData = async (locale: string) => {
//   const apiBaseUrl = "http://127.0.0.1:3000";
//   const url = `${apiBaseUrl}/${locale}/api/main-page`;


//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// };

export default async function Home({ params }: any) {
  const { lng } = params;

  // const data = await fetchHomePageData(lng);

  // console.log(data);
  
  const data = {};

  return (
    <>
      <HomePageNew data={data} />
    </>
  );
}
