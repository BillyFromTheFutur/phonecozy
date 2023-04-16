import { LeafletMapLazyLoaded } from "~/pages/LeafletMap.lazy";

const MainMap: React.FC = () => {
  return (
    <div className="col-span-7 col-start-6 flex flex-col items-center justify-evenly">
      <div className=" flex h-[80%] w-[95%]  items-center justify-center overflow-hidden rounded-lg bg-white">
        <LeafletMapLazyLoaded />
      </div>

      <div className="h-12 w-11/12 rounded-md bg-white"></div>
    </div>
  );
};
export default MainMap;
