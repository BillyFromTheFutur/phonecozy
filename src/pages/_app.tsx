import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React, { useEffect } from "react";
import { LeafletMapLazyLoaded } from "./LeafletMap.lazy";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import NavBar from "./components/navbar";
import MainMap from "./components/Map/MainMap";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  useEffect(() => {
    const changeRoute = async () => {
      if (router.route == "/") {
        await router.push("/conversations");
      }
    };
    changeRoute().catch(console.error);
  });
  return (
    <>
      <Head>
        <title>PhoneCozy</title>
        <meta name="description" content="Come and have fun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" grid min-h-screen  grid-cols-12 bg-gradient-to-b from-[#252525] to-[#252525] ">
        <div className="col-span-5 col-start-1 flex max-h-screen items-center justify-center ">
          <div className="grid h-[90%]  w-[90%]  grid-rows-12 overflow-hidden rounded-lg bg-transparent">
            <div className=" row-span-1 row-start-1  p-2">
              <h1 className="text-3xl font-bold text-white">Phonecozy</h1>
            </div>
            <div
              style={{ gridRowStart: 2, gridRowEnd: 12 }}
              className="gap-4 overflow-scroll rounded-md bg-[#fff2cc]/80 p-2 scrollbar-hide "
            >
              <SessionProvider session={session}>
                <Component {...pageProps} />
              </SessionProvider>
            </div>
            <NavBar />
          </div>
        </div>
        <MainMap />
      </main>
    </>
  );
};

export default api.withTRPC(MyApp);
