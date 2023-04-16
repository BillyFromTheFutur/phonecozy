import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";

import "leaflet/dist/leaflet.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>PhoneCozy</title>
        <meta name="description" content="Come and have fun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" grid min-h-screen grid-cols-12 bg-gradient-to-b from-[#252525] to-[#252525]">
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </main>
    </>
  );
};

export default api.withTRPC(MyApp);
