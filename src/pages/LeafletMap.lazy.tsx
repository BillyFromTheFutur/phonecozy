import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const LazyLeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

export const LeafletMapLazyLoaded: React.FC = () => {
  return (
    <Suspense fallback={<div className="h-[200px]" />}>
      <LazyLeafletMap />
    </Suspense>
  );
};
