import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "../ui/Navbar";
import { type } from "os";

interface MyComponentProps {
  children: ReactNode;
  title?: string;
}

const origin =(typeof window ==='undefined')?'':window.location.origin;

export const Layout = ({ children, title }: MyComponentProps) => {
  return (
    <>
      <Head> 
        <title>{title || "Pokemon api"}</title>
        <meta name="author" content="salvador llamas de la cruz " />
        <meta name="description" content={`Infomracion dsobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title},pokemon,pokedex`} />
        <meta property="og:title" content={`Infomracion sobre ${title}`} />
        <meta property="og:description" content={`Esta es la informacion de ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar></Navbar>

      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};
