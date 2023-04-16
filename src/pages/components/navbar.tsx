import { useRouter } from "next/router";
import { BsMailbox, BsNewspaper } from "react-icons/bs";
import Link from "next/link";
const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <div
      style={{ gridRow: "12" }}
      className="  row-span-1  flex items-center justify-around bg-[#252525]"
    >
      <Link href="/conversations">
        <BsMailbox
          size={24}
          color={router.route == "/conversations" ? "white" : "grey"}
          className="hover:scale-105"
        />
      </Link>
      <Link href="/news">
        <BsNewspaper
          size={22}
          color={router.route == "/news" ? "white" : "grey"}
          className="hover:scale-105"
        />
      </Link>
    </div>
  );
};
export default NavBar;
