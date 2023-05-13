import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import NavBar from "./components/navbar";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();

  const [progress, setProgress] = React.useState<number>(0);
  React.useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      // This function will be called when a route starts to change
      setProgress(30);
      console.log(`Route is starting to change: ${url}`);
    };
    /*
    function sleep(ms: number): Promise<void> {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    */
    const handleRouteChangeComplete = (url: string) => {
      // This function will be called when a route has changed

      setProgress(100);
      console.log(`New page has loaded: ${url}`);
    };

    // Listen for the `routeChangeStart` event
    router.events.on("routeChangeStart", handleRouteChangeStart);

    // Listen for the `routeChangeComplete` event
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    // Clean up the event listeners when the component is unmounted
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Yiza</title>
        <meta name="description" content="Come and have fun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoadingBar
        color="#fff2cc"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <main
        className="grid min-h-screen grid-cols-12 bg-gradient-to-b from-[#252525] to-[#252525]"
        //bg-gradient-to-b from-[#151515] to-[#151515]
        style={
          {
            //backgroundSize: "cover",
            //backgroundPosition: "center",
            //backgroundImage: `url('https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200')`,
          }
        }
      >
        <div className="col-span-12 col-start-1 flex max-h-screen items-center justify-center overflow-hidden  ">
          <div className=" h-[100%] w-[95%] overflow-hidden rounded-lg bg-transparent ">
            <div className="z-40 row-span-1  row-start-1 p-2">
              <h1 className=" text-3xl font-bold text-white">Dive In</h1>
            </div>

            <div
              //style={{ gridRowStart: 2, gridRowEnd: 18 }}
              className="flex h-[90%] flex-col items-center overflow-hidden rounded-md bg-[#fff2cc]/80 p-2 "
            >
              <NavBar />
              <SessionProvider session={session}>
                <Component {...pageProps} />
              </SessionProvider>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default api.withTRPC(MyApp);
//         <!-- <div className="absolute inset-0 bg-black/100 opacity-40 backdrop-blur-xl"></div> -->
