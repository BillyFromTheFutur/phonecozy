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

import { Map as ReactMapGL } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MapComponent = () => {
  const [viewport, setViewport] = React.useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 12,
  });

  return <ReactMapGL {...viewport} onViewportChange={setViewport} />;
};
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>HalalCozy</title>
        <meta name="description" content="Come and have fun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" grid min-h-screen  grid-cols-12 bg-gradient-to-b from-[#252525] to-[#252525] ">
        <div className="col-span-5 col-start-1 flex max-h-screen items-center justify-center ">
          <div className="grid h-[90%]  w-[90%]  grid-rows-12 overflow-hidden rounded-lg bg-[#252525]">
            <div className=" row-span-1 row-start-1  p-2">
              <h1 className="text-3xl font-bold text-white">HalalCozy</h1>
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
        <MapComponent />
      </main>
    </>
  );
};

export default api.withTRPC(MyApp);
