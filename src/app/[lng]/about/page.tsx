
import Head from "next/head";
import { AboutPage } from "../../_lib/common/ui";


const fetchAboutPageData = async (locale: string) => {
  const apiBaseUrl = "http://127.0.0.1:3000";
  const url = `${apiBaseUrl}/${locale}/about/api/about-page`;


  const res = await fetch(url);
  const data = await res.json();
  return data;
};


export default async function About({params}:any) {
  const { lng } = params;


  //TODO:open when backend on your local PC will ready
  // const data = await fetchAboutPageData(lng);

  return (
    <>
      <AboutPage  />
      
    </>
  )
}
