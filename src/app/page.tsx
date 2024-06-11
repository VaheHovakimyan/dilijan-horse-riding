import dynamic from "next/dynamic";
import '../../libs/common/ui/scss/index.scss';

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
