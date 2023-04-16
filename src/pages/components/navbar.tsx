import { useRouter } from "next/router";
import { BsMailbox, BsNewspaper } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import Link from "next/link";
const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <div
      style={{ gridRow: "12" }}
      className="  row-span-1  flex items-center justify-around bg-[#252525]"
    >
      <Link href="/">
        <BiHomeAlt
          size={22}
          color={router.route == "/" ? "white" : "grey"}
          className=" duration-100 ease-in-out hover:scale-110"
        />
      </Link>
      <Link href="/conversations">
        <BsMailbox
          size={24}
          color={router.route == "/conversations" ? "white" : "grey"}
          className=" duration-100 ease-in-out hover:scale-110"
        />
      </Link>
      <Link href="/news">
        <BsNewspaper
          size={22}
          color={router.route == "/news" ? "white" : "grey"}
          className=" duration-100 ease-in-out hover:scale-110"
        />
      </Link>
    </div>
  );
};
export default NavBar;
