import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header } from "../../libs/common/ui";
import website_icon from '../../libs/common/ui/assets/icons/website_title_icons/website_title_icon.png';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dilijan Horse Riding",
  description: "Dilijan Horse Riding",
  icons: website_icon.src,
  openGraph:{
    title:'SEO TITLE EXAMPLE',
    description:"SEO DESC EXAMPLE",
    // images:'path/to/image'

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Header />
        <main>
            {children}
        </main>
      
        <Footer />
        
        </body>
    </html>
  );
}

