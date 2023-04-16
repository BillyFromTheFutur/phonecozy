import React, { Suspense, lazy } from "react";

const LazyLeafletMap = lazy(() => import("./LeafletMap"));

export const LeafletMapLazyLoaded: React.FC = () => {
  return (
    <Suspense fallback={<div className="h-[200px]" />}>
      <LazyLeafletMap />
    </Suspense>
  );
};
