import dynamic from "next/dynamic";

const HomePageNew = dynamic(
  () => import("../../libs/common/ui/pages/HomePageNew/HomePageNew")
);


export default function Home({

}: {


}) {
  return (
    <>
      <HomePageNew/>
    </>
  );
}
