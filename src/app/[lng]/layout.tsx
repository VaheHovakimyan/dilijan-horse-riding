import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header } from "../_lib/common/ui";
import { languages } from '../i18n/settings'

import website_icon from "../_lib/common/ui/assets/icons/website_title_icons/website_title_icon.png";
import AllRights from "../_lib/common/ui/shared/AllRights/AllRights";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {

  return languages.map((lng) => ({ lng }))
}



export const metadata: Metadata = {
  title: "Dilijan Horse Riding",
  description: "Dilijan Horse Riding",
  icons: website_icon.src,
  openGraph: {
    title: "Dilijan Horse Riding, official website",
    description: "Dilijan Horse Riding, jeeping, team building, etc.",
    // images:'path/to/image'
  },
};

const RootLayout = ({
  children,
  params: {
    lng
  }
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: any
  }
}>) => {

  return (
    <html lang={lng}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <AllRights /> */}
      </body>
    </html>
  );
};

export default RootLayout

