import { LeafletMapLazyLoaded } from "~/pages/LeafletMap.lazy";

const MainMap: React.FC = () => {
  return (
    <div className="col-span-7 col-start-6 flex flex-col items-center justify-evenly bg-transparent">
      <div className=" flex h-[85%] w-[95%]  items-center justify-center overflow-hidden rounded-lg bg-transparent">
        <LeafletMapLazyLoaded />
      </div>
    </div>
  );
};
export default MainMap;
