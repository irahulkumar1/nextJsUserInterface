import HeaderComponent from "./header/header.component";
import FooterComponent from "./footer/footer.component";
import Head from "next/head";

export default function RootLayout({ className, children }) {
  return (
    <main className={`${className} main`}>
      <Head>
        <link rel="icon" href="/assets/logoIcon.png" />
        <meta name="viewport" content="width=1024" />
      </Head>
      <HeaderComponent />
      <div className="routeOutlet">{children}</div>
      <FooterComponent />
    </main>
  );
}
